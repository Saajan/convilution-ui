import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Drawer from './Components/Drawer';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-white py-2 md:py-4 shadow-md">
        <div className="container px-4 mx-auto md:flex md:items-center">
          <div className="flex justify-between items-center w-screen">
            <div className="text-2xl font-bold">Convilution</div>
            <button className="border border-solid border-gray-600 px-3 py-1 rounded">
              Create Dashboard
            </button>
            <button className="border border-solid border-gray-600 px-3 py-1 rounded" onClick={() => setIsOpen(true)}>
              Widgets
            </button>
          </div>
        </div>
      </nav>
      <div className="container mx-auto w-full">
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}/>
        <div className="flex flex-wrap w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;


