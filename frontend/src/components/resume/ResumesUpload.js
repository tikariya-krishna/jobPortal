import React, { useState, useRef } from 'react';
import TitleContainer from '../innerCom/TitleContaint';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ResumesUpload = () => {
  const [uploadStatus, setUploadStatus] = useState(null);
  const resumeInputRef = useRef(null);
  const avtarInputRef = useRef(null);

  const jsonObject = localStorage.getItem("user");
  const user = JSON.parse(jsonObject);

  const formik = useFormik({
    initialValues: {
      resume: null,
      avtar: null,
    },
    validationSchema: Yup.object({
      resume: Yup.mixed()
        .required('Resume is required')
        .test(
          'fileType',
          'Unsupported file type. Only PDF, DOC, or DOCX allowed.',
          (value) =>
            value &&
            ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(value.type)
        ),
      avtar: Yup.mixed()
        .required('Avtar is required')
        .test(
          'fileType',
          'Unsupported file type. Only PNG, JPG, or SVG allowed.',
          (value) =>
            value &&
            ['image/png', 'image/jpeg', 'image/svg+xml'].includes(value.type)
        ),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const resumeBase64 = await convertToBase64(values.resume);
        const avtarBase64 = await convertToBase64(values.avtar);

        const response = await fetch('http://localhost:3001/resume/uploads', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            resume: resumeBase64,
            avtar: avtarBase64,
            userId: user._id,
          }),
        });

        const result = await response.json();

        if (response.ok) {
          setUploadStatus({ success: true, message: result.message || 'Uploaded successfully' });
          resetForm();
          resumeInputRef.current.value = '';
          avtarInputRef.current.value = '';
        } else {
          setUploadStatus({ success: false, message: result.message || 'Upload failed' });
        }
      } catch (error) {
        setUploadStatus({ success: false, message: 'Something went wrong: ' + error.message });
      }
    },
  });

  return (
    <>
      <TitleContainer name="Upload Resumes" path="upload" />
      <form
        onSubmit={formik.handleSubmit}
        className="p-4 max-w-lg mx-auto bg-white rounded shadow"
        encType="multipart/form-data"
      >
        <h2 className="text-2xl font-bold mb-4">Upload Resume & Avatar</h2>

        {/* Resume Input */}
        <div className="mb-4">
          <label htmlFor="resume" className="block text-gray-700 font-bold mb-2">
            Upload Resume
          </label>
          <input
            ref={resumeInputRef}
            id="resume"
            name="resume"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(event) => {
              formik.setFieldValue('resume', event.currentTarget.files[0]);
            }}
            className="border rounded w-full p-2"
          />
          {formik.touched.resume && formik.errors.resume && (
            <p className="text-red-500 text-sm">{formik.errors.resume}</p>
          )}
        </div>

        {/* Avtar Input */}
        <div className="mb-4">
          <label htmlFor="avtar" className="block text-gray-700 font-bold mb-2">
            Upload Avatar
          </label>
          <input
            ref={avtarInputRef}
            id="avtar"
            name="avtar"
            type="file"
            accept=".png,.jpg,.jpeg,.svg"
            onChange={(event) => {
              formik.setFieldValue('avtar', event.currentTarget.files[0]);
            }}
            className="border rounded w-full p-2"
          />
          {formik.touched.avtar && formik.errors.avtar && (
            <p className="text-red-500 text-sm">{formik.errors.avtar}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition disabled:opacity-50"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? 'Uploading...' : 'Upload'}
        </button>

        {uploadStatus && (
          <div
            className={`mt-4 p-3 rounded ${
              uploadStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}
          >
            {uploadStatus.message}
          </div>
        )}
      </form>
    </>
  );
};

export default ResumesUpload;

const convertToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
