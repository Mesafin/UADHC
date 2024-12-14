
import Image from 'next/image';  

const EligibilityEnrollment = () => {  
  return (  

    <div className='container mx-auto my-12 md:my-20'>
        <h2 className="text-3xl font-bold text-center font-montserrat mb-4">Uplifting Eligibility & Enrollment</h2>  
        
   
    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mx-auto px-4 py-8 ">  
      {/* Image Section */}  
      <div className="w-full md:w-1/2 mb-6 md:mr-6">  
        <Image  
          src="/eligibility.png" 
          alt="Uplifting Eligibility & Enrollment"  
          // layout="responsive"  
          width={500}
          height={500} 
          className="w-full rounded-lg shadow-md object-cover"  
        />  
      </div>  
      
      {/* Text Section */}  
      <div className="w-full md:w-1/2 font-montserrat">  

        <div className="mb-6 md:mb-8">  
          <h3 className="text-2xl font-semibold font-montserrat mb-4">Eligibility</h3>  
          <p>  
            Individuals must meet Medi-Cal eligibility requirements to qualify for Uplifting Adult Day Center services. This involves determining income and medical needs based on California Health Care Services guidelines. Contact us for more information.  
          </p>  
        </div>  

        <div>  
          <h3 className="text-2xl font-semibold font-montserrat mb-4">Enrollment</h3>  
          <p>Once eligibility is confirmed, the enrollment process begins. This includes:</p>  
          <ol className="list-decimal list-inside space-y-2 mt-4">  
            <li><strong>Contact:</strong> Reach out to Uplifting Adult Day Center to inquire about services and schedule a center tour.</li>  
            <li><strong>Application:</strong> Complete the necessary paperwork, including identification, medical records, and insurance information.</li>  
            <li><strong>Assessment:</strong> Undergo a health assessment conducted by our medical staff.</li>  
            <li><strong>Approval:</strong> Await approval of the enrollment application.</li>  
            <li><strong>Orientation:</strong> Participate in an orientation to familiarize yourself with the center and its services.</li>  
          </ol>  
        </div>  

        <p className="mt-4">  
          We are committed to making the enrollment process as smooth as possible. Please don’t hesitate to contact us with any questions.  
        </p>  
      </div>  
    </div>  
    </div>
  );  
};  

export default EligibilityEnrollment;