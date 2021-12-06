import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { Dropdown, Button, Menu } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import Drawer from './Components/Drawer';
import dashboardSlice from './Reducer/dashboardSlice';

import http from './http';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { dashboardsLoading, dashboardsReceived } = dashboardSlice.actions;

  const fetchDashboards = () => async dispatch => {
    dispatch(dashboardsLoading());
    const response = await http.get('/dashboards');
    dispatch(dashboardsReceived(response.data));
  }

  const onHeaderClick  = () => {
    navigate('/dashboard');
  }

  const menu = (
    <Menu>
      <Menu.Item className="p-5">
        <a target="_blank" rel="noopener noreferrer" href="#">
          Concurrent Plays greater 100000
        </a>
      </Menu.Item>
      <Menu.Item className="p-5">
        <a target="_blank" rel="noopener noreferrer" href="#">
          Concurrent Plays lesser 1000
        </a>
      </Menu.Item>
      <Menu.Item className="p-5">
        <a target="_blank" rel="noopener noreferrer" href="#">
          VPF greater 10
        </a>
      </Menu.Item>
    </Menu>
  );

  useEffect(() => {
    dispatch(fetchDashboards());
  }, []);

  return (
    <div>
      <nav className="bg-white py-2 md:py-4 shadow-md">
        <div className="container px-4 mx-auto md:flex md:items-center">
          <div className="flex justify-between items-center w-screen">
            <div className="text-2xl font-bold cursor-pointer" onClick={onHeaderClick}>Convilution</div>
            <div className="flex">
              <button className="border border-solid border-gray-600 px-3 py-1 rounded mx-5 cursor-pointer">
                Create Dashboard
              </button>
              <Dropdown overlay={menu} placement="bottomCenter" arrow>
                <Button type="primary" shape="circle" icon={<BellOutlined />} />
              </Dropdown>
              <button className="border border-solid border-gray-600 px-3 py-1 rounded mx-5 cursor-pointer" onClick={() => setIsOpen(true)}>
                Widgets
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="container mx-auto w-full">
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="flex flex-wrap w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;


