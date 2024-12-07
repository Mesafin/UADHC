"use client";
import Image from "next/image";
import { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import reviewImage from "../../public/google-reviews.webp";

const reviews = [
  {
    id: 1,
    comment:
      "Uplifting Adult Day Center will bring so much peace to our family. We are eagerly waiting for the program to open, as it's clear how much this center is needed in our community.",
    reviewer: "Zuri.",
    stars: 5,
  },
  {
    id: 2,
    comment:
      "As an older man living alone, I've struggled with chronic pain and the emotional toll that comes with it. The idea of attending Uplifting Adult Day Center is comforting.",
    reviewer: "Mike.",
    stars: 5,
  },
  {
    id: 3,
    comment:
      "My mom started going recently, and she absolutely loves it. The staff is friendly, and she’s always busy with fun activities.",
    reviewer: "James T.",
    stars: 4,
  },
  {
    id: 4,
    comment:
      "My 95-year-old dad attends a few times a week. He always thanks us for taking him. The staff keeps him active and cared for.",
    reviewer: "Sophia L.",
    stars: 5,
  },
  {
    id: 5,
    comment:
      "The team is so kind and patient with my loved one. They help with activities, and I love getting weekly updates about the schedule.",
    reviewer: "Daniel K.",
    stars: 4,
  },
  {
    id: 6,
    comment:
      "My mom is always smiling after her day at Uplifting. She enjoys making friends and staying busy. The staff is so supportive!",
    reviewer: "Olivia M.",
    stars: 5,
  },
];

export default function ReviewSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReviews = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % Math.ceil(reviews.length / 3)
    );
  };

  const prevReviews = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + Math.ceil(reviews.length / 3)) %
        Math.ceil(reviews.length / 3)
    );
  };

  // Calculate visible reviews
  const visibleReviews = reviews.slice(currentIndex * 3, currentIndex * 3 + 3);

  return (
    <div className="container mx-auto pb-8 px-6 font-montserrat relative">
      {/* Navigation Controls */}
      <div className="flex justify-between items-center ">
        <button
          onClick={prevReviews}
          className="text-gray-500 hidden lg:block hover:text-uRed focus:outline-none absolute top-[55%] left-4"
        >
          <GrPrevious className="text-5xl" />
        </button>
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center mx-auto my-14">
          <h2 className="text-2xl font-bold text-center mx-auto text-gray-800 items-center ">
            What People Are Saying
          </h2>
          <Image
            src={reviewImage}
            height={100}
            alt="google-review"
            className="mb-8 md:mb-0"
          />
        </div>
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
            className="bg-blue-50 rounded-lg shadow-2xl px-12 pt-10 pb-8"
          >
            <p className="text-gray-700 mb-20 h-48 text-xl">{review.comment}</p>
            <div className="flex items-center space-x-5">
              {/* First Letter of Reviewer's First Name */}
              <div className="h-12 w-12 bg-gray-300 rounded-full flex items-center justify-center text-xl font-bold text-gray-700">
                {review.reviewer.charAt(0)}
              </div>
              {/* Reviewer Name and Stars */}
              <div>
                <h3 className="text-lg font-bold">{review.reviewer}</h3>
                <p className="text-yellow-500">{"⭐".repeat(review.stars)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
