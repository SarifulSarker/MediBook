import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedDoctors = ({docId, speciality}) => {
    const {doctors} = useContext(AppContext)
  const navigate = useNavigate();
    const [relDoc, setRelDocs] = useState([])
     useEffect(()=>{
        if(doctors.length > 0 && speciality){
            const doctorData = doctors.filter((doc) => doc.speciality === speciality && doc._id !== docId)
            setRelDocs(doctorData)

        }
     },[doctors, speciality, docId])

  return (
<div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
  <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
  <p className='sm:w-1/3 text-center text-sm'>
    Simply browse through our extensive list of trusted doctors.
  </p>

  <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
    {relDoc.slice(0, 5).map((items, index) => (
      <div
        onClick={() => {
          navigate(`/appointment/${items._id}`);
          scrollTo(0, 0);
        }}
        key={index}
        className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'
      >
        <img className='bg-blue-50' src={items.image} alt='' />
        <div className='p-4'>
          <div className='flex items-center gap-2 text-sm text-center text-green-600'>
            <p className='w-2 h-2 bg-green-500 rounded-full'></p>
            <p>Available</p>
          </div>
          <p>{items.name}</p>
          <p>{items.speciality}</p>
        </div>
      </div>
    ))}
  </div>

  <button
    onClick={() => {
      navigate('/doctors');
      scrollTo(0, 0);
    }}
    className="bg-primary text-white px-5 py-2 rounded-md hover:bg-primary-dark transition-colors duration-300 inline-flex justify-center items-center min-w-[100px]"
  >
    More
  </button>
</div>

  )
}

export default RelatedDoctors