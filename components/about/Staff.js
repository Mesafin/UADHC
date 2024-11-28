
import React from 'react';

const staffMembers = [
  { name: 'Filimon Gebremichael', title: 'CEO', image: '/staff/filimon.png' }, 
  { name: 'Yohannes Habteyesus', title: 'CFO', image: '/staff/yohans.png' },
  { name: 'Nahom Zerihun', title: 'Secretary', image: '/staff/nahom.png' },
];

const Staff = () => {
  return (
    <div className="py-12 px-6 md:px-8 bg-white container mx-auto font-montserrat mt-4 lg:mt-8">
      <h2 className="text-4xl font-bold text-center text-accent2 mb-12 lg:mb-14  font-montserrat">Staff Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {staffMembers.map((staff, index) => (
          <div key={index} className="bg-uRed text-white p-6 rounded-lg text-center shadow-lg">
            <img
              src={staff.image}
              alt={staff.name}
              className="w-30 h-30 mx-auto  mb-4 object-cover"
            />
            <h3 className="text-xl font-bold">{staff.name}</h3>
            <p className="text-gray-200">{staff.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Staff;
