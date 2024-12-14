// components/MedicalServices.js
import Image from "next/image";
import doctorImage from "../../public/medicalServiceImage1.png";
import nurseImage from "../../public/medicalServiceImage2.png";

export default function MedicalServices() {
  return (
    <div className="container mx-auto px-6 py-12 bg-white">
      <div className="flex flex-col-reverse md:flex-row gap-8">
        {/* Images Section */}
        <div className="relative w-full md:w-1/2 pt-6 md:pt-20 md:mb-20">
          <Image
            src={doctorImage}
            alt="Doctor with patient"
            height={300}
            className="rounded-lg shadow-md w-full md:m-4 lg:max-w-[500px]"
          />
          <div className="absolute lg:top-80 lg:right-[0%]  hidden lg:block">
            <Image
              src={nurseImage}
              alt="Nurse assisting patient"
              height={400}
              className="rounded-lg border-[15px] border-white shadow-md"
              style={{
                borderRadius: "5%",
              }}
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="font-montserrat w-full md:w-1/2">
          <h2 className="text-4xl text-gray-900 font-extrabold mb-8 border-l-8 border-uRed ps-4">
          Nursing Services Routine
          </h2>
          <p className="text-red-600 font-semibold lg:text-xl mb-6">
            We make sure to keep your loved ones healthy!
          </p>
          <p className="text-gray-700 mb-8 lg:text-lg">
            Our dedicated nursing staff provides
            a high level of Nursing services and support. We understand that each
            participant has unique healthcare needs, and we are committed to
            tailoring our services accordingly.
          </p>
          <p className="text-gray-700 mb-6 lg:text-lg">
            Our medical services include:
          </p>
          <ul className="list-disc space-y-4 text-gray-700 pl-6">
            <li>
              <strong>Routine health assessments:</strong> Regular monitoring of
              vital signs, including temperature, blood pressure, and heart
              rate.
            </li>
            <li>
              <strong>Medication administration:</strong> Safe and accurate
              dispensing of prescribed medications.
            </li>
            <li>
              <strong>Chronic disease management:</strong> Support for
              participants with chronic conditions such as diabetes,
              hypertension, or arthritis.
            </li>
            <li>
              <strong>Wound care:</strong> Treatment and prevention of skin
              breakdown.
            </li>
            <li>
              <strong>Incontinence care:</strong> Discreet and compassionate
              assistance with personal hygiene.
            </li>
            <li>
              <strong>Emergency preparedness:</strong> Our staff is trained to
              handle medical emergencies and coordinate with emergency services
              if necessary.
            </li>
          </ul>
          <p className="text-gray-700 mt-8">
            We work closely with participants’ primary care physicians and
            families to ensure continuity of care and to develop individualized
            care plans. Our goal is to promote overall well-being and
            independence.
          </p>
        </div>
      </div>
    </div>
  );
}
