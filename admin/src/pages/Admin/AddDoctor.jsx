import React, { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import { AdminContext } from '../../context/AdminContext';
import {toast} from 'react-toastify'
import axios from 'axios'

const AddDoctor = () => {


const [docImg, setDocImg] = useState(false)
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [experience, setExperience] = useState('1 Year')
const [fees, setFees] = useState('')
const [about, setAbout] = useState('')
const [speciality, setSpeciality] = useState('General physician')
const [degree, setDegree] = useState('')
const [address1, setAddress1] = useState('')
const [address2, setAddress2] = useState('')

const {backendUrl, aToken} = useContext(AdminContext)

const onSubmitHandler = async (event)=>{
  event.preventDefault()

  try {
    if(!docImg){
      return toast.error('Image not selected')
    }

    const formData = new FormData()
   formData.append('image', docImg)
formData.append('name', name)
formData.append('email', email)
formData.append('password', password)
formData.append('experience', experience)
formData.append('fees', Number(fees))
formData.append('about', about)
formData.append('speciality', speciality)
formData.append('degree', degree)
formData.append('address', JSON.stringify({line1:address1,line2:address2}))


const { data } = await axios.post(
  backendUrl + '/api/admin/add-doctor',
  formData,
 {
  headers: {
    atoken: aToken // ✅ just this
  }
}
);


 if (data.success) {
  toast.success(data.message);

  // Reset all form fields
  setDocImg(false);
  setName('');
  setEmail('');
  setPassword('');
  setExperience('1 Year');
  setFees('');
  setAbout('');
  setSpeciality('General physician');
  setDegree('');
  setAddress1('');
  setAddress2('');
}
else{
   toast.error(data.message)
 }

  } catch (error) {
    
  }

}

  return (
    <form onSubmit={onSubmitHandler} className='m-5 w-full'>
      <p className='mb-3 text-lg font-medium'>Add Doctor</p>

      <div className='bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-scroll ' >
        <div className='flex items-center gap-4 mb-8 text-gray-500 '>
          <label htmlFor="doc-img">
            <img className='w-16 bg-gray-400 rounded-full cursor-pointer' src={docImg ? URL.createObjectURL(docImg):assets.upload_area} alt="Upload Doctor" />
          </label>
          <input onChange={(e)=> setDocImg(e.target.files[0])}  type="file" id="doc-img" hidden />
          <p>Upload Doctor <br /> Picture</p>
        </div>


         <div className='flex flex-col lg:flex-row items-start gap-10 text-gray-400'>
          <div className='w-full lg:flex-1 flex flex-col gap-4'>
            <div className='flex-1 flex flex-col gap-1'>
               <p>Doctor Name</p>
               <input onChange={(e)=> setName(e.target.value)} value={name} className='border rounded px-3 py-2' type="text" placeholder='Name'required/>

            </div>

           <div className='flex-1 flex flex-col gap-1'>
               <p>Doctor Email</p>
               <input onChange={(e)=> setEmail(e.target.value)} value={email} className='border rounded px-3 py-2' type="email" placeholder='email'required/>
            </div>

            <div className='flex-1 flex flex-col gap-1'>
               <p>Doctor password</p>
               <input onChange={(e)=> setPassword(e.target.value)} value={password} className='border rounded px-3 py-2' type="password" placeholder='password'required/>
            </div>

            <div className='flex-1 flex flex-col gap-1'> 
               <p>Experience</p>
               <select  id="experience"
  name="experience"
  value={experience}
  onChange={(e) => setExperience(e.target.value)}
  className="border rounded px-3 py-2">
                 <option value="1 Year">1 Year</option>
                 <option value="2 Years">2 Years</option>
                 <option value="3 Years">3 Years</option>
                 <option value="4 Years">4 Years</option>
                 <option value="5 Years">5 Years</option>
                 <option value="6 Years">6 Years</option>
                 <option value="7 Years">7 Years</option>
                 <option value="8 Years">8 Years</option>
                 <option value="9 Years">9 Years</option>
                 <option value="10 Years">10 Years</option>
               </select>
            </div>

            <div className='flex-1 flex flex-col gap-1'>
               <p>Doctor Fees</p>
               <input onChange={(e)=> setFees(e.target.value)} value={fees} className='border rounded px-3 py-2' type="number" placeholder='fees'required/>
            </div>



          </div>
    {/* right side */}
         <div className='w-full lg:flex-1 flex flex-col gap-4 '>
            <div className='flex-1 flex flex-col gap-1'>
                <p>Speciality</p>
                <select id="speciality"
  name="speciality"
  value={speciality}
  onChange={(e) => setSpeciality(e.target.value)}
  className="border rounded px-3 py-2">
                 
                  <option value="General physician ">General physician</option>
                  <option value="Gynecologist">Gynecologist</option>
                  <option value=" Dermatologist "> Dermatologist</option>
                  <option value="Pediatricians ">Pediatricians</option>
                  <option value="Neurologist ">Neurologist</option>
                  <option value="Gastroenterologist ">Gastroenterologist</option>
                </select>
           </div>

            <div className='flex-1 flex flex-col gap-1'>
               <p>Education</p>
               <input onChange={(e)=> setDegree(e.target.value)} value={degree} className='border rounded px-3 py-2' type="text" placeholder='Education'required/>
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Address</p>
              <input onChange={(e)=> setAddress1(e.target.value)} value={address1} className='border rounded px-3 py-2' type="text" placeholder='address 1'required />
               <input onChange={(e)=> setAddress2(e.target.value)} value={address2} className='border rounded px-3 py-2' type="text" placeholder='address 2' required/>
            </div>



         </div>

             
         </div>

         {/* lower  */}
          <div>
               <p className='mt-4 mb-2'>About Doctor</p>
               <textarea  onChange={(e)=> setAbout(e.target.value)} value={about} className='w-full px-4 pt-2 border rounded'  type="text" placeholder='write about doctor' rows={5} required/>
            </div>

            <button type='submit' className='bg-primary px-10 py-3 mt-4 text-white rounded-full'>Add Doctor</button>

      </div>
    </form>
  );
};

export default AddDoctor;
