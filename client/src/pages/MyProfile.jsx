import React, { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "sariful",
    image: assets.profile_pic,
    email: "abc@gmail.com",
    phone: "+12 133 422",
    address: {
      line1: "dhaka",
      line2: "dhaka",
    },
    gender: "Male",
    dob: "2000-01-20",
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="min-h-screen flex items-start justify-center px-4 py-12 bg-white text-gray-800">
      <div className="w-full max-w-4xl">
        <div className="flex gap-6 items-center mb-6">
          <img
            src={userData.image}
            alt="Profile"
            className="w-24 h-24 rounded-md object-cover"
          />
          <div className="w-24 h-24 rounded-md bg-purple-100 flex items-center justify-center">
            <svg
              className="w-12 h-12 text-purple-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 10a4 4 0 100-8 4 4 0 000 8zM2 18a8 8 0 1116 0H2z" />
            </svg>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-2">{userData.name}</h2>
        <hr className="mb-6 border-gray-300" />

        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">
            Contact Information
          </h3>

          <div className="space-y-3">
            <div>
              <p className="text-sm font-medium">Email id :</p>
              <p className="text-blue-500">{userData.email}</p>
            </div>

            <div>
              <p className="text-sm font-medium">Phone:</p>
              {isEdit ? (
                <input
                  type="text"
                  className="mt-1 border border-gray-300 rounded px-3 py-1 w-full"
                  value={userData.phone}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      phone: e.target.value,
                    }))
                  }
                />
              ) : (
                <p className="text-blue-500">{userData.phone}</p>
              )}
            </div>

            <div>
              <p className="text-sm font-medium">Address:</p>
              {isEdit ? (
                <div className="space-y-2">
                  <input
                    className="border border-gray-300 rounded px-3 py-1 w-full"
                    value={userData.address.line1}
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        address: { ...prev.address, line1: e.target.value },
                      }))
                    }
                  />
                  <input
                    className="border border-gray-300 rounded px-3 py-1 w-full"
                    value={userData.address.line2}
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        address: { ...prev.address, line2: e.target.value },
                      }))
                    }
                  />
                </div>
              ) : (
                <p className="text-gray-700">
                  {userData.address.line1}
                  <br />
                  {userData.address.line2}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">
            Basic Information
          </h3>

          <div className="space-y-3">
            <div>
              <p className="text-sm font-medium">Gender:</p>
              {isEdit ? (
                <select
                  className="border border-gray-300 rounded px-3 py-1 w-full"
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      gender: e.target.value,
                    }))
                  }
                  value={userData.gender}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              ) : (
                <p>{userData.gender}</p>
              )}
            </div>

            <div>
              <p className="text-sm font-medium">Birthday:</p>
              {isEdit ? (
                <input
                  type="date"
                  className="border border-gray-300 rounded px-3 py-1 w-full"
                  value={userData.dob}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      dob: e.target.value,
                    }))
                  }
                />
              ) : (
                <p>{new Date(userData.dob).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}</p>
              )}
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          {isEdit ? (
            <button
              className="px-6 py-2 border border-blue-500 rounded-full text-blue-500 hover:bg-blue-50 transition"
              onClick={() => setIsEdit(false)}
            >
              Save Information
            </button>
          ) : (
            <button
              className="px-6 py-2 border border-blue-500 rounded-full text-blue-500 hover:bg-blue-50 transition"
              onClick={() => setIsEdit(true)}
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
