import React from 'react';
import { FaBriefcase, FaUsers, FaHeartbeat, FaFlask } from 'react-icons/fa';

const resources = [
  {
    title: "California Department of Social Services",
    url: "https://www.cdss.ca.gov/",
    icon: <FaBriefcase className="h-6 w-6 text-uRed" />
  },
  {
    title: "California Department of Aging",
    url: "https://aging.ca.gov/",
    icon: <FaUsers className="h-6 w-6 text-uRed" />
  },
  {
    title: "California Department of Public Health",
    url: "https://data.chhs.ca.gov/organization/california-department-of-public-health",
    icon: <FaFlask className="h-6 w-6 text-uRed" />
  },
  {
    title: "Medi-Cal",
    url: "https://www.medi-cal.ca.gov/",
    icon: <FaHeartbeat className="h-6 w-6 text-uRed" />
  },
  {
    title: "Medicare",
    url: "https://www.medicare.gov/",
    icon: <FaHeartbeat className="h-6 w-6 text-uRed" />
  },
  {
    title: "California Department of Health Care Services",
    url: "https://www.dhcs.ca.gov/",
    icon: <FaHeartbeat className="h-6 w-6 text-uRed" />
  },
  {
    title: "Alzheimer's Association of Los Angeles",
    url: "https://www.alzheimersla.org/",
    icon: <FaUsers className="h-6 w-6 text-uRed" />
  },
  {
    title: "American Cancer Society",
    url: "https://www.cancer.org/",
    icon: <FaHeartbeat className="h-6 w-6 text-uRed" />
  },
  {
    title: "L.A. Care Health Plan",
    url: "http://www.lacare.org/",
    icon: <FaUsers className="h-6 w-6 text-uRed" />
  },
  {
    title: "American Diabetes Association",
    url: "https://diabetes.org/",
    icon: <FaHeartbeat className="h-6 w-6 text-uRed" />
  },
  {
    title: "American Public Health Association",
    url: "https://www.apha.org/",
    icon: <FaFlask className="h-6 w-6 text-uRed" />
  },
  {
    title: "American Heart Association",
    url: "https://www.heart.org/",
    icon: <FaHeartbeat className="h-6 w-6 text-uRed" />
  }
];

const ResourceCard = () => {
  return (
    <div className="bg-white text-accent2 font-montserrat pt-8">
      <div className="container mx-auto py-8">
        <div className="grid gap-6 md:grid-cols-2 sm:grid-cols-1 mx-auto md:mx-20">
          {resources.map((resource, index) => (
            <div key={index} className="bg-gray-100 h-auto hover:bg-gray-200 shadow-md rounded-lg p-3 md:p-6 flex items-center">
              <div className="mr-6">{resource.icon}</div>
              <div className="border-l-4 border-uRed md:ps-6 ps-2 w-full h-auto">
                <h2 className="text-lg font-semibold">{resource.title}</h2>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 hover:underline text-blue-700 hover:text-blue-500 text-sm sm:text-base"
                  style={{ wordBreak: 'break-word' }} 
                >
                  {resource.url}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
