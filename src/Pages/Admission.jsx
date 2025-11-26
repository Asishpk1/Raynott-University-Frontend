import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addAdmissionAPI } from '../Service/allAPI';

const Admission = () => {
    const [AdmissionDetails,setAdmissionDetails] = useState({name:"",number:"",email:"",program:"",message:""})
    console.log(AdmissionDetails);

    const registerAdmission = async () =>{
        const {name,number,email,program,message} = AdmissionDetails

        if(name && number && email && program){
            try{
                const result = await addAdmissionAPI(AdmissionDetails)
                console.log(result);
                if(result.status == 200){
                    toast.success("Admission booked")
                    setAdmissionDetails({name:"",number:"",email:"",program:"",message:""})
                }
                if(result.status == 401){
                    console.log(result.response.data);
                    
                }
                
            }
            catch(err){
                console.log(err);
                
            }
        }
        else{
            toast.warning("Enter all Fields")
        }
    }
    
  return (
    <>
            <div className='p-md-5 p-3' style={{ backgroundColor: 'rgb(65, 144, 115)' }}>
                <h1 className='fw-bold text-center pt-md-5 text-light headings' style={{ letterSpacing: '1px' }}>Book Your Admission</h1>
                <p className='text-center text-light opacity-75 m-0 pb-md-5 pb-3 contents'>Join thousands of students who are building their future at Raynott College</p>
                <div className='d-flex justify-content-center'>
                    <div className='d-flex flex-column shadow bg-light p-md-5 p-3 rounded-5 AdmissionBox' style={{ width: '40%' }}>
                        <span className='mb-2 contents' style={{ color: 'rgb(65, 144, 115)', fontWeight: '500' }}>Full Name</span>
                        <input onChange={(e)=>setAdmissionDetails({...AdmissionDetails,name:e.target.value})} value={AdmissionDetails.name} type="text" className='form-control rounded-4 opacity-50 mb-4 contents' style={{ border: 'solid 2px rgb(65, 144, 115)' }} placeholder='Enter your name' />
                        <span className='mb-2 contents' style={{ color: 'rgb(65, 144, 115)', fontWeight: '500' }}>Phone Number</span>
                        <input onChange={(e)=>setAdmissionDetails({...AdmissionDetails,number:e.target.value})} value={AdmissionDetails.number} type="number" className='form-control rounded-4 opacity-50 mb-4 contents' style={{ border: 'solid 2px rgb(65, 144, 115)' }} placeholder='Enter your Phone number' />
                        <span className='mb-2 contents' style={{ color: 'rgb(65, 144, 115)', fontWeight: '500' }}>Email Address</span>
                        <input onChange={(e)=>setAdmissionDetails({...AdmissionDetails,email:e.target.value})} value={AdmissionDetails.email} type="email" className='form-control rounded-4 opacity-50 mb-4 contents' style={{ border: 'solid 2px rgb(65, 144, 115)' }} placeholder='john@example.com' />
                        <span className='mb-2 contents' style={{ color: 'rgb(65, 144, 115)', fontWeight: '500' }}>Program</span>
                        <Form.Select onChange={(e)=>setAdmissionDetails({...AdmissionDetails,program:e.target.value})} className='form-control rounded-4 opacity-50 mb-4 contents' style={{ border: 'solid 2px rgb(65, 144, 115)' }}  aria-label="Default select example">
                            <option value="">Open this select menu</option>
                            <option value="American Literature">American Literature</option>
                            <option value="Creative Writing">Creative Writing</option>
                            <option value="Astrophysics">Astrophysics</option>
                            <option value="Bio Engineering">Bio Engineering</option>
                            <option value="Applied Health">Applied Health</option>
                            <option value="Bachelor of Arts (B.A)">Bachelor of Arts (B.A)</option>
                            <option value="Master of Arts (M.A)">Master of Arts (M.A)</option>
                            <option value="Doctor of Philosophy">Doctor of Philosophy</option>
                            <option value="Health and Wellness">Health and Wellness</option>
                        </Form.Select>
                        <span className='mb-2 contents' style={{ color: 'rgb(65, 144, 115)', fontWeight: '500' }}>Remarks (Optional)</span>
                        <input onChange={(e)=>setAdmissionDetails({...AdmissionDetails,message:e.target.value})} value={AdmissionDetails.message}  type="text" className='form-control rounded-4 opacity-50 mb-4 contents' style={{ border: 'solid 2px rgb(65, 144, 115)' }} placeholder='Brief description of your health concern' />
                        <button onClick={registerAdmission} className='btn text-light py-md-3 px-4 rounded-5 mt-md-4 contents' style={{ backgroundColor: 'rgb(65, 144, 115)', fontWeight: '500' }}>Book Admission <i className='fa-solid fa-arrow-right'></i></button>
                    </div>
                </div>
            </div>
        </>
  )
}

export default Admission