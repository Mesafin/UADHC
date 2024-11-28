import Image from "next/image";
import Image1 from "../public/home/image1.png"
import Image2 from "../public/home/image2.png"
import Image3 from "../public/home/image3.png"
import Image4 from "../public/home/image4.png"

const GallerySection = () => {
  return (
    <div className="bg-white py-12 second-shape md:py-20 -mt-52">
      {/* Title */}
      <h2 className="text-2xl lg:text-3xl font-bold text-center mb-16 md:mb-28 text-footerBg">
        We're A Day Adult Day Care Provider
      </h2>

      {/* Image Gallery */}
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-6">
        <RoundedImage src={Image1} alt="Group activity 1" />
        <RoundedImage src={Image2} alt="Group activity 2" />
        <RoundedImage src={Image3} alt="Group activity 3" />
        <RoundedImage src={Image4} alt="Group activity 4" />
      </div>
    </div>
  );
};

const RoundedImage = ({ src, alt }) => (
  <div className="overflow-hidden w-full md:w-[240px] rounded-tl-none rounded-tr-[30%] rounded-br-none rounded-bl-[10%]">
    <Image
      src={src}
      alt={alt}
      width="auto"
      // height={600}
      style={{
        height: "200px"
      }}
      className="fill"
    />
  </div>
);


export default GallerySection;
