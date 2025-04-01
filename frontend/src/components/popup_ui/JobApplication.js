import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

async function formSubmit(values, setStatus) {
    try {
        const res = await fetch("http://localhost:3001/jobs/application", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        });

        if (!res.ok) {
            const result = await res.json();
            setStatus({ msg: "Error: " + result.message, sent: false });
            return;
        }

        setStatus({ msg: "Application sent successfully!", sent: true });
    } catch (error) {
        setStatus({ msg: "Error: " + error.message, sent: false });
        console.error("Error", error);
    }
}

const JobApplication = () => {
    const [status, setStatus] = useState(null);

    const formik = useFormik({
        initialValues: {
            user_id: "",
            higher_education: "",
            specialization_course: "",
            headline: "",
        },
        validationSchema: Yup.object({
            user_id: Yup.string().required("This is a required field"),
            higher_education: Yup.string().required("This is a required field"),
            specialization_course: Yup.string().required("This is a required field"),
            headline: Yup.string().min(10, "Resume headline must be at least 10 characters").required("This is a required field"),
        }),
        onSubmit: async (values) => {
            formSubmit(values, setStatus);

        },
    });

    useEffect(() => {
        const userJSON = localStorage.getItem("user");
        if (userJSON) {
            const user = JSON.parse(userJSON);
            formik.setFieldValue("user_id", user._id);
        }
    }, []);

    return (
        <div className="mt-28 m-auto w-2/5 px-10 py-5 bg-white rounded-md">
            <div className="flex justify-around mb-7">
                <h2 className="text-3xl">Application Form</h2>
            </div>
            <form method="post" className="text-start" onSubmit={formik.handleSubmit}>
                <div className="mb-5">
                    <p>What is the name of your undergraduate course?</p>
                    <select
                        className="border-2 w-full p-2 rounded-md text-gray-700"
                        id="higher_education"
                        name="higher_education"
                        value={formik.values.higher_education}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    >
                        <option value="" disabled>Education</option>
                        <option value="SSC">10th</option>
                        <option value="HSC">12th</option>
                        <option value="graduation_or_diploma">Graduation or Diploma</option>
                        <option value="post_graduation">Post Graduation</option>
                        <option value="PHD">PHD</option>
                    </select>
                    {formik.touched.higher_education && formik.errors.higher_education ? (
                        <div className="text-red-500 text-sm">{formik.errors.higher_education}</div>
                    ) : null}
                </div>

                <div className="mb-5">
                    <p>What specialization did you choose course?</p>
                    <textarea
                        className="border-2 w-full p-2 rounded-md text-gray-700"
                        id="specialization_course"
                        name="specialization_course"
                        value={formik.values.specialization_course}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Enter text"
                    ></textarea>
                    {formik.touched.specialization_course && formik.errors.specialization_course ? (
                        <div className="text-red-500 text-sm">{formik.errors.specialization_course}</div>
                    ) : null}
                </div>

                <div className="mb-5">
                    <p className="text-start mb-2">
                        =&gt; Resume headline is a 1 line intro to recruiters. This usually tells recruiters about your main skill or function and further encourages them to explore your profile.
                        e.g. I am a Java developer having 3 years of experience in fintech space.
                    </p>
                    <p className="text-start">=&gt; Please write a headline for your profile of more than 50 characters</p>
                    <textarea
                        className="border-2 w-full p-2 rounded-md text-gray-700"
                        id="headline"
                        name="headline"
                        value={formik.values.headline}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Enter text"
                    ></textarea>
                    {formik.touched.headline && formik.errors.headline ? (
                        <div className="text-red-500 text-sm">{formik.errors.headline}</div>
                    ) : null}
                </div>

                <button type="submit" className="rounded-md bg-green-600 text-white py-3 font-semibold w-full">
                    Submit
                </button>
            </form>

            {status && <p className={status.sent ? "text-green-600" : "text-red-600"}>{status.msg}</p>}
        </div>
    );
};

export default JobApplication;
