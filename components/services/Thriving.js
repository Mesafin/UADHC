import Image from 'next/image'
import React from 'react'

const Thriving = () => {
  return (
    <>
       {/* Section: Thriving Community */}  
       <section className="bg-white py-16 lg:mt-8 font-montserrat">  
        <div className="container mx-auto px-8 flex flex-col-reverse md:flex-row items-center gap-8">  
           
          <div className=" w-full md:w-1/2">  
            <Image src="/services-hero.png" alt="Thriving Community" height={300} width={500} className="rounded-2xl w-full" />  
          </div> 
          <div className="w-full md:w-1/2 ">  
            <h2 className="text-3xl font-bold mb-4 border-l-8 border-uRed ps-4">Thriving Community</h2>  
            <h3 className="text-uRed font-semibold mb-4">Fostering a sense of community and belonging in our seniors</h3>  
            <p className="mb-4">  
              Uplifting Day Center is more than just a facility; it’s a place where people come together to form lasting bonds. Our focus on social interaction, personal growth, and well-being creates a supportive and engaging environment.  
            </p>  
          </div>  
        </div>  
      </section>  
    </>
  )
}

export default Thriving
