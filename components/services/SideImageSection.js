export default function SideImageSection({
  imageSrc,
  title,
  subtitle,
  points,
}) {
  return (
    <div className="container mx-auto -my-1 py-20">
      <div className="flex flex-col lg:flex-row items-center justify-between text-white px-8">
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <h2 className="text-4xl font-bold mb-4 border-l-8 border-white ps-4">{title}</h2>
          <p className="py-5 font-semibold">Empowering through Therapy</p>
          <p className="text-lg mb-3">{subtitle} </p>
          <p className="text-lg mb-3">Our approach involves:</p>
          <ul className="list-disc pl-6 space-y-2">
            {points.map((point, index) => {
              // Split the string into "before colon" and "after colon"
              const [boldPart, normalPart] = point.split(":");
              return (
                <li key={index} className="text-white lg:text-lg">
                  <strong>{boldPart}:</strong>
                  {normalPart && <span>{normalPart}</span>}
                </li>
              );
            })}
          </ul>
          <p className="text-lg mt-6">
            <strong>Supportive environment: </strong>Fostering a positive and
            encouraging atmosphere for therapeutic growth.
          </p>
        </div>
        <div className="lg:w-1/2 ">
          <img src={imageSrc} alt="uplifting adalt center Therapeutic Care image" className=" w-full h-auto" />
        </div>
      </div>
    </div>
  );
}
