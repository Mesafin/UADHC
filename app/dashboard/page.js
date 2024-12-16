'use client';

import { useState } from 'react';
import { useAuth } from '../../components/auth/AuthProvider';
import SubscribersPage from '../subscribers/page';
import ApplicationsPage from '../applications/page';

export default function Dashboard() {
  const { logout } = useAuth();
  const [activePage, setActivePage] = useState('applications'); 

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-white p-4 shadow-md">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        <button
          onClick={() => setActivePage('applications')}
          className={`block w-full text-left px-4 py-2 mb-2 rounded-lg ${
            activePage === 'applications' ? 'bg-accent2 text-white' : 'bg-gray-300 text-black'
          }`}
        >
          Applications
        </button>
        <button
          onClick={() => setActivePage('subscribers')}
          className={`block w-full text-left px-4 py-2 mb-2 rounded-lg ${
            activePage === 'subscribers' ? 'bg-accent2 text-white' : 'bg-gray-300 text-black'
          }`}
        >
          Subscribers
        </button>
        <button
          onClick={logout}
          className="block w-full text-left px-4 py-2 mt-6 rounded-lg bg-red-500 text-white"
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-6">
        {activePage === 'applications' && <ApplicationsPage />}
        {activePage === 'subscribers' && <SubscribersPage />}
      </div>
    </div>
  );
}
