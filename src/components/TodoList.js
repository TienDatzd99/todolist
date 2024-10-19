import { Checkbox } from 'antd';
import React, { useEffect, useState } from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default function TodoList() {

  // Lấy dữ liệu từ Redux store
  const [dataTaskNotComplete, setDataTaskNotComplete] = useState([]);
  const [dataTaskComplete, setDataTaskComplete] = useState([]);

  // Lấy dữ liệu từ localStorage khi component mount
  useEffect(() => {
    const notCompleteTasks = JSON.parse(localStorage.getItem('dataTaskNotComplete')) || [];
    const completeTasks = JSON.parse(localStorage.getItem('dataTaskComplete')) || [];

    setDataTaskNotComplete(notCompleteTasks);
    setDataTaskComplete(completeTasks);
  }, []);

  // Hàm render danh sách công việc
  const renderTaskList = (tasks) => {
    return tasks.map((task) => {
      return (
        <div key={task.id} className='py-3 bg-white rounded-2xl shadow-lg grid grid-cols-12 my-2'>
          <Checkbox className='col-span-1 flex justify-center'  />
          <div className='col-span-10'>{task.title}</div>
          <div className='col-span-1 flex justify-center'>
            <i className="fa-regular fa-pen-to-square mr-3 leading-6 cursor-pointer"></i>
            <i className="fa-solid fa-trash leading-6 cursor-pointer"></i>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <h2>Tasks Not Completed</h2>
      {/* Đổi lại đúng biến: dataTaskNotComplete */}
      {renderTaskList(dataTaskNotComplete)}

      <h2>Tasks Completed</h2>
      {/* Đổi lại đúng biến: dataTaskComplete */}
      {renderTaskList(dataTaskComplete)}

      <div><NavLink to={'add_new'}>ADD</NavLink></div>
    </div>
  );
}
