import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const daysOfweek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const fetchInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  const getAvailAbleSlots = async () => {
    let today = new Date();
    let ninePM = new Date(today);
    ninePM.setHours(21, 0, 0, 0); // set time to 9 PM today

    if (today > ninePM) {
      // If current time is after 9 PM, move to next day
      today.setDate(today.getDate() + 1);
      today.setHours(0, 0, 0, 0); // reset time to start of the day (midnight)
    }
    let allSlots = [];

    for (let i = 0; i <= 6; i++) {
      let currDate = new Date(today);
      currDate.setDate(today.getDate() + i);

      let endTime = new Date(today);
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0); // 9:00 PM

      let timeSlots = [];

      // setting hours
      if (today.getDate() === currDate.getDate()) {
        currDate.setHours(
          currDate.getHours() > 10 ? currDate.getHours() + 1 : 10
        );
        currDate.setMinutes(currDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currDate.setHours(10);
        currDate.setMinutes(0);
      }

      while (currDate < endTime) {
        let formattedTime = currDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        timeSlots.push({
          datetime: new Date(currDate),
          time: formattedTime,
        });

        currDate.setMinutes(currDate.getMinutes() + 30);
      }

      allSlots.push(timeSlots); // collect per day
    }

    setDocSlots(allSlots); // ✅ Only once, after loop
  };

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);

  useEffect(() => {
    fetchInfo();
  }, [doctors, docId]);

  useEffect(() => {
    getAvailAbleSlots();
  }, [docInfo]);

  return (
    docInfo && (
      <div className="pt-2 sm:pt-4 px-4 sm:px-10 pb-4 sm:pb-10">
        {/* Doctor Details Card */}
        <div
          className="flex flex-col sm:flex-row border rounded-lg p-6 gap-6 
      shadow-md bg-white"
        >
          {/* Left: Doctor Image */}
          <div className="flex-shrink-0">
            <img
              src={docInfo.image}
              alt={docInfo.name}
              className="w-[200px] h-[220px] sm:w-[250px] sm:h-[270px] object-cover rounded-md bg-primary"
            />
          </div>

          {/* Right: Info */}
          <div className="flex flex-col justify-between text-gray-800 w-full">
            {/* Name, Degree */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold flex items-center gap-2 text-black">
                {docInfo.name}
                <img
                  src={assets.verified_icon}
                  alt="verified"
                  className="w-5 h-5"
                />
              </h2>
              <div className="flex items-center gap-3 mt-1">
                <p className="text-md sm:text-lg font-medium">
                  {docInfo.degree} - {docInfo.speciality}
                </p>
                <span className="text-sm bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full border border-gray-300">
                  {docInfo.experience} Years
                </span>
              </div>
            </div>

            {/* About */}
            <div className="mt-4">
              <p className="text-md font-medium flex items-center gap-1 mb-1">
                About
                <img src={assets.info_icon} alt="info" className="w-4 h-4" />
              </p>
              <p className="text-sm text-gray-600  max-w-[700px] mt-1">
                {docInfo.about}
              </p>
            </div>

            {/* Appointment Fee */}
            <div className="mt-4">
              <p className="font-semibold text-md sm:text-lg">
                Appointment fees:{" "}
                <span className="text-black">
                  {currencySymbol}
                  {docInfo.fees}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* booking slots */}
        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
          <p>Booking slots</p>
          <div className="flex gap-3 items-center w-full overflow-x-auto mt-4">
            {docSlots.length > 0 &&
              docSlots.map((item, index) => (
                <div
                  onClick={() => setSlotIndex(index)}
                  key={index}
                  className={`text-center py-6 min-w-[64px] rounded-full cursor-pointer 
        ${
          slotIndex === index
            ? "bg-primary text-white"
            : "border border-gray-500"
        }`}
                >
                  <p>{item[0] && daysOfweek[item[0].datetime.getDay()]}</p>
                  <p>{item[0] && item[0].datetime.getDate()}</p>
                </div>
              ))}
          </div>
          {/* time */}
          <div className=" grid grid-cols-auto gap-2 mt-5">
            {docSlots.length &&
              docSlots[slotIndex].map((item, index) => (
                <p onClick={() => setSlotTime(item.time)}
                 key={index} className= {`min-w-[80px] max-w-[150px] text-sm font-light flex-shrink-0 px-3 sm:px-5 
                  py-1.5 sm:py-2 rounded-full cursor-pointer truncate
                ${item.time === slotTime ? 'bg-primary text-white ' : 'text-gray-400 border border-gray-400'}
                `}>
                  {item.time.toLowerCase()}
                  </p>
              ))}
          </div>
          <button className="bg-primary text-white text-sm font-light mt-4 px-14 py-3 rounded-full">Book an appointment</button>
        </div>

        {/* listing related doctors */}
        <RelatedDoctors docId = {docId} speciality={docInfo.speciality} />
      </div>
    )
  );
};

export default Appointment;
