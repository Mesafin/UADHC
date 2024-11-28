import CareerForm from "@/components/career/CareerForm";
import CareerHero from "@/components/career/CareerHero";
import JoinUs from "@/components/career/JoinUs";
import Image from "next/image";


export default function Career() {
    return (
     <>
     <CareerHero />
     <JoinUs />
     <CareerForm />
     {/* <Image
     src="/svg/"
     /> */}
     </>
    );
  }
  