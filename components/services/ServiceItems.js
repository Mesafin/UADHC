import React from 'react'

const ServiceItems = () => {
  return (
    <div>
           {/* Service Items */}
           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* Nursing Services */}
          <div className="bg-gray-100 rounded-lg shadow p-6 text-center">
            <div className="text-4xl mb-4">👩‍⚕️</div>
            <h3 className="text-lg font-bold text-gray-700">Nursing Services</h3>
          </div>

          {/* Therapeutic Care */}
          <div className="bg-gray-100 rounded-lg shadow p-6 text-center">
            <div className="text-4xl mb-4">💆‍♀️</div>
            <h3 className="text-lg font-bold text-gray-700">Therapeutic Care</h3>
          </div>

          {/* Outings */}
          <div className="bg-gray-100 rounded-lg shadow p-6 text-center">
            <div className="text-4xl mb-4">🚶‍♂️</div>
            <h3 className="text-lg font-bold text-gray-700">Outings</h3>
          </div>

          {/* Recreational Activities */}
          <div className="bg-gray-100 rounded-lg shadow p-6 text-center">
            <div className="text-4xl mb-4">🏡</div>
            <h3 className="text-lg font-bold text-gray-700">
              Recreational Activities
            </h3>
          </div>

          {/* Nutritional Meals */}
          <div className="bg-gray-100 rounded-lg shadow p-6 text-center">
            <div className="text-4xl mb-4">🍎</div>
            <h3 className="text-lg font-bold text-gray-700">Nutritional Meals</h3>
          </div>
        </div>
    </div>
  )
}

export default ServiceItems
