import Image from 'next/image';  

const Gallery = () => {  
  const images = [  
    '/gallery/g-1.png',  
    '/gallery/g-2.png',  
    '/gallery/g-3.png',  
    '/gallery/g-4.png',  
    '/gallery/g-5.png',  
    '/gallery/g-6.png',  
    '/gallery/g-7.png',  
    '/gallery/g-8.png',  
    '/gallery/g-9.png',  
  ];  

  return (  
    <div className="container mx-auto px-4 py-8">  
      <h2 className="text-3xl font-bold text-center mb-6 lg:mb-12 font-montserrat">Gallery</h2>  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">  
        {images.map((src, index) => (  
          <div key={index} className="overflow-hidden rounded-lg shadow-md group">  
            <div className="relative overflow-hidden">  
              <Image  
                src={src}  
                alt={`Gallery image ${index + 1}`}  
                width={450}  
                height={300}  
                className="object-cover w-full transition-transform duration-300 group-hover:scale-110 group-hover:brightness-75" 
              />  
            </div>  
          </div>  
        ))}  
      </div>  
    </div>  
  );  
};  

export default Gallery;