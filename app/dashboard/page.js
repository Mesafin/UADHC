'use client';

import { useState } from 'react';
import { useAuth } from '../../components/auth/AuthProvider';
import SubscribersPage from '../subscribers/page';
import ApplicationsPage from '../applications/page';

export default function Dashboard() {
  const { logout } = useAuth();
  const [activePage, setActivePage] = useState('applications');

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section with Buttons */}
      <div className="bg-white shadow-md p-4">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => setActivePage('applications')}
            className={`px-4 py-2 rounded-lg ${
              activePage === 'applications' ? 'bg-accent2 text-white' : 'bg-gray-300 text-black'
            }`}
          >
            Applications
          </button>
          <button
            onClick={() => setActivePage('subscribers')}
            className={`px-4 py-2 rounded-lg ${
              activePage === 'subscribers' ? 'bg-accent2 text-white' : 'bg-gray-300 text-black'
            }`}
          >
            Subscribers
          </button>
          <button
            onClick={logout}
            className="px-4 py-2 rounded-lg bg-red-500 text-white"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="p-6">
        {activePage === 'applications' && <ApplicationsPage />}
        {activePage === 'subscribers' && <SubscribersPage />}
      </div>
    </div>
  );
}
