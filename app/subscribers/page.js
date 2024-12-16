'use client';

import { useEffect, useState } from 'react';

export default function SubscribersPage() {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const response = await fetch('/api/subscribers');
        const result = await response.json();

        if (result.success) {
          setSubscribers(result.data);
        } else {
          console.error('Error fetching subscribers:', result.error);
        }
      } catch (error) {
        console.error('Unexpected error:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSubscribers();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Newsletter Subscribers</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Date Subscribed</th>
            </tr>
          </thead>
          <tbody>
            {subscribers.length > 0 ? (
              subscribers.map((subscriber) => (
                <tr key={subscriber.id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">{subscriber.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{subscriber.email}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    {new Date(subscriber.created_at).toLocaleDateString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center py-4">
                  No subscribers yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}
