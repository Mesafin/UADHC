// components/WellnessAndAdventures.js  
import Image from 'next/image';  

const Wellness = () => {  
  return (  
    <>  
      {/* Upper Section: Wellness & Recreation */}  
      <section className="bg-accent text-white py-16 md:py-24">  
        <div className="container mx-auto px-4 font-montserrat">  
          <h2 className="text-4xl font-bold mb-6 border-l-8 border-white ps-4">Wellness & Recreation</h2>  
            <div className='flex flex-col md:flex-row gap-6 justify-between'>
                
        <div>
            
       
          <p className="mb-6 font-semibold">  
            A healthy body and mind go hand-in-hand. Our comprehensive wellness program includes:  
          </p>  
          <ul className="list-disc list-inside mb-8 ps-2 space-y-1">  
            <li><strong>Fitness and fun:</strong> Engage in physical activity through exercise classes, walking groups, and balance training.</li>  
            <li><strong>Creative expression:</strong> Unleash your inner artist with art, music, and dance programs.</li>  
            <li><strong>Social connections:</strong> Build lasting friendships through board games, card games, and group discussions.</li>  
            <li><strong>Mindful moments:</strong> Relax and rejuvenate with meditation, yoga, or nature walks.</li>  
            <li><strong>Community involvement:</strong> Give back to the community through volunteer opportunities.</li>  
            <li><strong>Cultural enrichment:</strong> Celebrate diversity with festive events and educational programs.</li>  
          </ul> 
          </div> 
          <div className="flex justify-center h-full w-full md:w-1/2">  
            <Image src="/thriving.png" alt="Wellness image at uplifting adalt day center" width={500} height={400} className="rounded-2xl shadow-lg w-full" />  
          </div>  
        </div>  
        </div>
      </section>  

  
    </>  
  );  
};  

export default Wellness;