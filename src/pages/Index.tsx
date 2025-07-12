
import React, { useState } from 'react';
import AuthForm from '@/components/AuthForm';

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  if (isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="text-center">
          <div className="mx-auto w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-6">
            <span className="text-3xl font-bold text-white">EX</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to ExChain!</h1>
          <p className="text-xl text-gray-600 mb-8">You have successfully signed in to your account.</p>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Sign Out
          </button>
        </div>
      </div>
    );
  }

  return <AuthForm onAuthSuccess={handleAuthSuccess} />;
};

export default Index;
