
import React from 'react';

const WhyUs = () => {
  const features = [
    {
        title: 'Vibrant Community',
        description: 'Join a community where every day is an opportunity to connect, engage, and enjoy.',
        icon: '🎉',
      },
    {
      title: 'Personalized Care',
      description: 'We tailor our services to meet the unique needs of each participant, ensuring a personalized and enriching experience.',
      icon: '🤝', 
    },

    {
      title: 'Holistic Support',
      description: 'From physical to emotional well-being, we’re here to support all aspects of your journey.',
      icon: '💖',
    },
  ];

  return (
    <div className="py-12 lg:py-16 bg-white text-center px-6 md:px-8 container mx-auto font-montserrat">
      <h2 className="text-4xl font-bold text-accent2 mb-12">Why <span className="text-uRed">Us?</span></h2>
      <div className="flex flex-col md:flex-row justify-around">
        {features.map((feature, index) => (
          <div key={index} className="md:w-1/3 p-6">
            <div className="text-6xl mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
