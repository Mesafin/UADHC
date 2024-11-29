"use client"
import { useState } from 'react';  

export default function CareerForm() {  
    const [formData, setFormData] = useState({ 
        name: '', 
        email: '', 
        phone: '', 
        address: '', 
        // position: '', 
        // resume: null 
    });  

    const handleInputChange = (e) => {  
        const { name, value } = e.target;  
        setFormData({ ...formData, [name]: value });  
    };  

    const handleFileChange = (e) => {  
        const file = e.target.files[0];  
        setFormData({ ...formData, resume: file });  
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('phone', formData.phone);
        formDataToSend.append('address', formData.address);
      
        try {
          const response = await fetch('/api/career/upload', {
            method: 'POST',
            body: formDataToSend,
          });
      
          const result = await response.json();
      
          if (result.success) {
            alert('Form submitted successfully!');
            setFormData({ name: '', email: '', phone: '', address: '' });
          } else {
            alert(`Error: ${result.error}`);
          }
        } catch (error) {
          console.error('Error:', error);
          alert('An error occurred while submitting the form.');
        }
      };
      
      

    return (  
        <div className='container w-full mx-auto font-montserrat px-8 my-8 md:my-16'>
            
        
        <div 
        style={{
            backgroundImage: "url('/svg/blob-scene-haikei.svg')",
        
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
        }}
        >  
            <h2 className="text-4xl text-center font-bold mb-4">Career Opportunity</h2>  

            <form onSubmit={handleSubmit} className="bg-white w-full mx-auto md:w-1/2 shadow-md hover:shadow-xl rounded-lg p-6">  
                <div className="mb-4">  
                    <label className="block text-uRed font-semibold">Name</label>  
                    <input   
                        type="text"   
                        name="name"  
                        value={formData.name}  
                        onChange={handleInputChange}  
                        required  
                        placeholder='Name'
                        className="w-full border-2 rounded py-2 px-3 text-accent"   
                    />  
                </div>  
                <div className="mb-4">  
                    <label className="block text-uRed font-semibold">Email*</label>  
                    <input   
                        type="email"   
                        name="email"  
                        placeholder='Email'
                        value={formData.email}  
                        onChange={handleInputChange}  
                        required  
                        className="w-full border-2 rounded py-2 px-3 text-accent"   
                    />  
                </div>  
                <div className="mb-4">  
                    <label className="block text-uRed font-semibold">Phone Number*</label>  
                    <input   
                        type="tel"   
                        name="phone"  
                        value={formData.phone}  
                        onChange={handleInputChange}  
                        required  
                        placeholder='Phone Number'
                        className="w-full border-2 rounded py-2 px-3 text-gray-800"   
                    />  
                </div>  

                {/* Address */}
                <div className="mb-4">  
                    <label className="block text-uRed font-semibold">Address</label>  
                    <input   
                        type="text"   
                        name="address"  
                        value={formData.address}  
                        onChange={handleInputChange}  
                        placeholder='Your Address'
                        className="w-full border-2 rounded py-2 px-3 text-gray-800"   
                    />  
                </div>  

        

       

                {/* Position Applied For */}
                {/* <div className="mb-4">  
                    <label className="block text-uRed font-bold">Position Applied For*</label>  
                    <input   
                        type="url"   
                        name="position"  
                        value={formData.position}  
                        onChange={handleInputChange}  
                        placeholder='Your prefered Position'
                        className="w-full border-2 rounded py-2 px-3 text-gray-800"   
                    />  
                </div>   */}

                {/* Resume Upload */}
                {/* <div className="mb-4">  
                    <label className="block text-uRed font-semibold">Upload Resume</label>  
                    <input   
                        type="file"   
                        name="resume"  
                        onChange={handleFileChange}  
                        required  
                        className="w-full border-2 rounded py-2 px-3 text-gray-800"   
                    />  
                </div>   */}

                <button type="submit" className="bg-uRed text-white py-2 px-4 rounded hover:bg-red-700">  
                    Submit  
                </button>  
            </form>  
        </div>  
        </div>
    );  
}
