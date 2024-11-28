"use client";
import { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";

const reviews = [
  {
    id: 1,
    comment: "This service exceeded my expectations. The staff was professional, and the process was seamless from start to finish. Highly recommend!",
    reviewer: "John Doe",
    designation: "Project Manager",
  },
  {
    id: 2,
    comment: "Absolutely fantastic experience. The customer support team went above and beyond to resolve my issue quickly.",
    reviewer: "Sarah Smith",
    designation: "Software Engineer",
  },
  {
    id: 3,
    comment: "I've tried many similar services, but this one stands out for its attention to detail and user-friendly interface.",
    reviewer: "Carlos Mendes",
    designation: "Graphic Designer",
  },
  {
    id: 4,
    comment: "Reliable and efficient. I couldn't be happier with the results. The team truly cares about their customers.",
    reviewer: "Emily Johnson",
    designation: "Marketing Specialist",
  },
  {
    id: 5,
    comment: "A top-notch service with excellent follow-through. They delivered exactly what was promised, and more!",
    reviewer: "David Lee",
    designation: "Business Consultant",
  },
];

export default function ReviewSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReviews = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % Math.ceil(reviews.length / 3)
    );
  };

  const prevReviews = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + Math.ceil(reviews.length / 3)) % Math.ceil(reviews.length / 3)
    );
  };

  // Calculate visible reviews
  const visibleReviews = reviews.slice(
    currentIndex * 3,
    currentIndex * 3 + 3
  );

  return (
    <div className="container mx-auto pb-8 px-6 font-montserrat relative">
      {/* Navigation Controls */}
      <div className="flex justify-between items-center ">
        <button
          onClick={prevReviews}
          className="text-gray-500 hidden lg:block hover:text-uRed focus:outline-none absolute top-[55%] left-4"
        >
          <GrPrevious className="text-5xl"  />
        </button>
        <h2 className="text-2xl font-bold text-center mx-auto text-gray-800 my-14 ">
          What People Are Saying
        </h2>
        <button
          onClick={nextReviews}
          className="text-gray-500 hover:text-uRed hidden lg:block focus:outline-none absolute top-[55%] right-4"
        >
          <GrNext className="text-5xl" />
        </button>
      </div>

      {/* Display Reviews */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-0 lg:px-10 ">
        {visibleReviews.map((review) => (
          <div
            key={review.id}
            className="bg-blue-50 rounded-lg shadow-2xl px-12 pt-14 pb-8"
          >
            <p className="text-gray-700 mb-16 h-32 text-xl">{review.comment}</p>
            <div className="flex items-center space-x-5">
              <div className="h-12 w-12 bg-gray-300 rounded-full"></div>
              <div>
                <h3 className="text-lg font-bold">{review.reviewer}</h3>
                <p className="text-gray-500">{review.designation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
