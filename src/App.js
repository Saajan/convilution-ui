import React from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav className="bg-white py-2 md:py-4 shadow-md">
        <div className="container px-4 mx-auto md:flex md:items-center">
          <div className="flex justify-between items-center w-screen">
            <div className="text-2xl font-bold">Convilution</div>
            <button className="border border-solid border-gray-600 px-3 py-1 rounded">
              Create Dashboard
            </button>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
