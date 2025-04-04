import React, { useState } from "react";
import ProfileDetails from "./ProfileDetails.js";
import TitleContaint from "./TitleContaint.js";

const LogOut = () => {
  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("userToken"); // Clear session
    window.location.href = "/login"; // Redirect to login
  };

  return (
    <>
      <TitleContaint name={"Profile Settings"} path={"Profile Settings"} />
      <div className="py-20 flex justify-center mx-38">
        <div className="me-7">
          <ProfileDetails />
        </div>
        <div>
          <button
            onClick={() => setShowModal(true)}
            className="bg-red-600 text-white p-2 rounded"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <div className="flex gap-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Confirm Logout
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  Are you sure you want to log out? You will need to log in
                  again to access your account.
                </p>
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LogOut;
