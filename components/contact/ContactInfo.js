
import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export function ContactInfo() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto grid md:grid-cols-3 gap-8 px-4 py-4">
        {/* Address */}
        <div className="bg-uRed text-white rounded-lg shadow-md p-6 md:py-10 text-center">
          <div className="flex justify-center items-center text-5xl mb-4">
            <MdLocationPin className="text-5xl text-white" />
          </div>
          <p className="text-lg font-bold">Electric Ave 508 N, Inglewood, CA</p>
        </div>

        {/* Phone */}
        <div className="text-white rounded-lg bg-greyCon shadow-md p-6 md:py-10 text-center">
          <div className="flex justify-center items-center text-5xl mb-4">
            <FaPhoneAlt />
          </div>
          <p className="text-lg font-bold">+1 (213) 809 4306</p>
        </div>

        {/* Email */}
        <div className="text-white bg-accent rounded-lg shadow-md p-6 md:py-10 text-center">
          <div className="flex justify-center items-center text-5xl mb-4">
            <IoIosMail />
          </div>
          <p className="text-lg font-bold">admin@uadhc.com</p>
        </div>
      </div>
    </section>
  );
}
