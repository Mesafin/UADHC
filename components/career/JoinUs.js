import React from 'react'

const JoinUs = () => {
  return (
    <div className='container mx-auto'>
        
   
    <div className="flex flex-col-reverse md:flex-row items-center justify-between bg-white px-8 gap-8 my-16 md:my-20">
      {/* left Image Section */}
      <div className="flex-shrink-0 w-full md:w-2/5">
        <img
          src="/career.png" 
          alt="Transportation Services"
          className=" object-cover w-full h-auto"
        />
      </div>
      {/* right Text Section */}
      <div className="flex-1 w-full md:w-3/5 font-montserrat">
        <h2 className="text-5xl font-bold mb-4 border-l-8 border-uRed ps-4">Join Our Team</h2>
        <p className="text-gray-700 mb-4">
            
            Make a difference in the lives of seniors by joining the Uplifting Day Center team. We’re seeking compassionate individuals to provide exceptional care and support. Whether you’re a seasoned professional or just starting out, your passion and dedication are essential. Join us in creating a brighter future for our participants.  

        </p>
     
      </div>

      
    </div>
    </div>
  )
}

export default JoinUs
