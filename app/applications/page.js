'use client';

import { useEffect, useState } from 'react';

export default function ApplicationsPage() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchApplications() {
      try {
        const response = await fetch('/api/career_form');
        const result = await response.json();

        if (!result.success) {
          throw new Error(result.error);
        }

        // Reverse the order of applications to show the latest at the top
        setApplications(result.data.reverse());
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchApplications();
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-gray-500">Loading applications...</p>
      </div>
    );
  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-red-500">Error: {error}</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Applications</h1>
        {applications.length > 0 ? (
          <div className="overflow-x-auto bg-white shadow-md rounded-lg">
            <table className="table-auto w-full border-collapse">
              <thead>
                <tr className="bg-gray-200 text-gray-700">
                  <th className="px-4 py-2 text-left">#</th>
                  <th className="px-4 py-2 text-left">Name</th>
                  <th className="px-4 py-2 text-left">Email</th>
                  <th className="px-4 py-2 text-left">Phone</th>
                  <th className="px-4 py-2 text-left">Address</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((application, index) => (
                  <tr
                    key={application.id}
                    className={`${
                      index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    } border-b`}
                  >
                    <td className="px-4 py-2 text-gray-700 font-medium">{index + 1}</td>
                    <td className="px-4 py-2">{application.name}</td>
                    <td className="px-4 py-2">{application.email}</td>
                    <td className="px-4 py-2">{application.phone}</td>
                    <td className="px-4 py-2">{application.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-500 text-center">No applications found.</p>
        )}
      </div>
    </div>
  );
}
