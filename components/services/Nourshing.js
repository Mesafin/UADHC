
import Image from 'next/image';  

const Nourishing = () => {  
  return (  
    <>  
      {/* Section: Nourishing Your Body & Soul */}  
      <section className="bg-gray-100 py-16 px-6  lg:py-20">  
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 justify-center font-montserrat">  
          <div className="w-full md:w-3/5 md:pr-8">  
            <h2 className="text-4xl font-bold mb-4 border-l-8 border-uRed ps-4">Nourishing Your Body & Soul</h2>  
            <p className="mb-4">  
              Good food fuels good days. Our culinary team creates delicious and nutritious meals tailored to individual needs and preferences. Enjoy a variety of cuisines in our inviting dining area while connecting with fellow participants.  
            </p>  
          </div>  
          <div className=" w-full md:w-2/5">  
            <Image src="/transport.png" alt="Nourishing Meals at uplifting day center" width={500} height={300} className="rounded-lg shadow-lg w-full" />  
          </div>  
        </div>  
      </section>  

     
    </>  
  );  
};  

export default Nourishing;