import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className="p-4 md:p-6 font-sans">
      <p className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">My Appointments</p>
      <div className="space-y-6">
        {doctors.slice(0, 3).map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 border-t pt-4 md:pt-6"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-md bg-primary"
            />
            <div className="flex-1">
              <p className="text-lg md:text-xl font-semibold">{item.name}</p>
              <p className="text-gray-600">{item.speciality}</p>
              <div className="mt-1 md:mt-2">
                <p className="text-sm font-medium text-gray-700">Address:</p>
                <p className="text-sm text-gray-600">{item.address.line1}</p>
                <p className="text-sm text-gray-600">{item.address.line2}</p>
              </div>
              <p className="text-sm text-gray-700 mt-2">
                <span className="font-medium">Date & Time:</span> 25, July, 2025 | 8:30 PM
              </p>
            </div>
            <div className="flex flex-row md:flex-col gap-2 w-full md:w-auto">
              <button className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
                Pay Online
              </button>
              <button className="flex-1 border border-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-red-300 transition">
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
