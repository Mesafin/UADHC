import Image from "next/image";
import upperShape from "../../public/upperShape.png";

const Shapes = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        style={{
          marginTop: "-20px",
        }}
      >
        <Image
          src={upperShape}
          alt="upperShape"
          width={1920} 
        />
      </div>
    </div>
  );
};

export default Shapes;

// #BB3535
