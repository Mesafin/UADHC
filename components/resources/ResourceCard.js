import React from 'react'

const ResourceCard = () => {
  return (
    <div className="bg-gray-100 text-gray-900 font-montserrat">


      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold">
              California Department of Social Services
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Access services for social welfare in California.
            </p>
            <a
              href="https://www.cdss.ca.gov/"
              target="_blank"
              className="inline-block mt-4 px-4 py-2 bg-uRed text-white rounded hover:bg-red-500"
            >
              Visit Website
            </a>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold">
              California Department of Aging
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Learn about resources for aging Californians.
            </p>
            <a
              href="https://aging.ca.gov/"
              target="_blank"
              className="inline-block mt-4 px-4 py-2 bg-uRed text-white rounded hover:bg-red-500"
            >
              Visit Website
            </a>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold">
              California Department of Public Health
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Find public health data and initiatives.
            </p>
            <a
              href="https://data.chhs.ca.gov/organization/california-department-of-public-health"
              target="_blank"
              className="inline-block mt-4 px-4 py-2 bg-uRed text-white rounded hover:bg-red-500"
            >
              Visit Website
            </a>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold">Medi-Cal</h2>
            <p className="text-sm text-gray-600 mt-2">
              California's Medicaid health care program.
            </p>
            <a
              href="https://www.medi-cal.ca.gov/"
              target="_blank"
              className="inline-block mt-4 px-4 py-2 bg-uRed text-white rounded hover:bg-red-500"
            >
              Visit Website
            </a>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold">Medicare</h2>
            <p className="text-sm text-gray-600 mt-2">
              Explore Medicare options and services.
            </p>
            <a
              href="https://www.medicare.gov/"
              target="_blank"
              className="inline-block mt-4 px-4 py-2 bg-uRed text-white rounded hover:bg-red-500"
            >
              Visit Website
            </a>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold">
              California Department of Health Care Services
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Learn about California's health care services.
            </p>
            <a
              href="https://www.dhcs.ca.gov/"
              target="_blank"
              className="inline-block mt-4 px-4 py-2 bg-uRed text-white rounded hover:bg-red-500"
            >
              Visit Website
            </a>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold">
              Alzheimer's Association of Los Angeles
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Support and resources for Alzheimer's care.
            </p>
            <a
              href="https://www.alzheimersla.org/"
              target="_blank"
              className="inline-block mt-4 px-4 py-2 bg-uRed text-white rounded hover:bg-red-500"
            >
              Visit Website
            </a>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold">American Cancer Society</h2>
            <p className="text-sm text-gray-600 mt-2">
              Information and support for cancer patients.
            </p>
            <a
              href="https://www.cancer.org/"
              target="_blank"
              className="inline-block mt-4 px-4 py-2 bg-uRed text-white rounded hover:bg-red-500"
            >
              Visit Website
            </a>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold">L.A. Care Health Plan</h2>
            <p className="text-sm text-gray-600 mt-2">
              Affordable health coverage for Los Angeles residents.
            </p>
            <a
              href="http://www.lacare.org/"
              target="_blank"
              className="inline-block mt-4 px-4 py-2 bg-uRed text-white rounded hover:bg-red-500"
            >
              Visit Website
            </a>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold">
              American Diabetes Association
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Resources and research for diabetes care.
            </p>
            <a
              href="https://diabetes.org/"
              target="_blank"
              className="inline-block mt-4 px-4 py-2 bg-uRed text-white rounded hover:bg-red-500"
            >
              Visit Website
            </a>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold">
              American Public Health Association
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Advocacy and information for public health.
            </p>
            <a
              href="https://www.apha.org/"
              target="_blank"
              className="inline-block mt-4 px-4 py-2 bg-uRed text-white rounded hover:bg-red-500"
            >
              Visit Website
            </a>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold">
              American Heart Association
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Heart health education and resources.
            </p>
            <a
              href="https://www.heart.org/"
              target="_blank"
              className="inline-block mt-4 px-4 py-2 bg-uRed text-white rounded hover:bg-red-500"
            >
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResourceCard
