import React from "react";



const staffMembers = [
  {
    name: "Alice Johnson",
    title: "Registered Nurse",
    image: "/staff/nurse2.jpeg", 
    description:
      "Alice ensures the health and safety of all participants with her extensive medical knowledge and compassionate care.",
  },
  {
    name: "Michael Smith",
    title: "Physical Therapist",
    image: "/staff/therapist.png",
    description:
      "Michael specializes in helping participants regain mobility and independence through tailored therapy programs.",
  },
  {
    name: "John Carter",
    title: "Chef",
    image: "/staff/chef.png", 
    description:
      "John prepares nutritious and delicious meals, catering to individual dietary needs and preferences.",
  },
];

const Staff = () => {
  return (
    <div className="py-12 px-6 md:px-8 bg-white container mx-auto font-montserrat mt-4 lg:mt-8">
      <h2 className="text-4xl font-bold text-center text-accent2 mb-12 lg:mb-14 font-montserrat">
        Meet Our Staff
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {staffMembers.map((staff, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-lg text-center shadow-lg"
          >
            <img
              src={staff.image}
              alt={`Photo of ${staff.name}`}
              className="w-32 h-32 mx-auto mb-4 object-cover rounded-full"
            />
            <h3 className="text-xl font-bold">{staff.name}</h3>
            <p className="text-accent font-semibold">{staff.title}</p>
            <p className="text-gray-700 mt-4">{staff.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Staff;
