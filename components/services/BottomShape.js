import Image from "next/image";
import bottomShape from "../../public/lowerShape.png";

const BottomShape = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
       
      >
        <Image
          src={bottomShape}
          alt="upperShape"
          // layout="responsive" 
          width={1920} 
        />
      </div>
    </div>
  );
};

export default BottomShape;


