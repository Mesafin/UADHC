// components/PsychologicalSupport.tsx
import React from "react";

const PsychologicalSupport = () => {
  return (
    <div className=" bg-white p-8 mt-2">
        
   
    <div className=" flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-2/3 font-montserrat">
            
       
      <h2 className="text-5xl font-bold mb-4 md:mb-8 border-l-8 border-uRed ps-4">Psychological Support</h2>
      <p className="my-6 font-bold text-uRed">Nurturing Mental Well-being</p>
      <p className="text-gray-700 mb-4">
        We understand the importance of mental health in overall well-being. Our psychology team provides support and guidance to help participants manage emotional challenges.
      </p>
      <p className="md:text-lg my-2">Our Services include:</p>
      <ul className="list-disc list-inside space-y-1">
        <li><strong>Individual counseling:</strong> Personalized sessions to address specific concerns.</li>
        <li><strong>Group therapy:</strong> Opportunities for social interaction, support, and skill-building.</li>
        <li><strong>Family counseling:</strong> Support and education for caregivers.</li>
        <li><strong>Mental health education:</strong> Workshops and seminars on stress management, coping skills, and resilience.</li>
        <li><strong>Cognitive behavioral therapy (CBT):</strong> To address thoughts, feelings, and behaviors.</li>
        <li><strong>Art therapy:</strong> To promote emotional expression and relaxation.</li>
      </ul>
      <p className="my-4 md:my-3">Our goal is to create supportive environment where participants feel understood, valued, and empowered to overcome challenges.</p>
      </div>

      <div className="w-full md:w-1/3 relative mt-0 md:mt-6 py-8 md:py-12">
        <img
          src="/psychImage1.png"
          alt="Elderly couple smiling"
          className="w-full h-auto rounded-2xl shadow-lg"
        />
        <img
          src="/psychImage2.png"
          alt="Celebration"
          className="absolute hidden md:block top-64 left-3 w-1/2 border-b-8 border-e-8 border-uRed rounded-2xl shadow-lg"
        />
      </div>
    </div>
    </div>
  );
};

export default PsychologicalSupport;
