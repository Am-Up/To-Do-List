import React from 'react';
import Home from './pages/Home';
import TaskProvider from './context/TaskContext';
import {Toaster} from 'sonner';

export default function App() {
  return (
    <div>
      <TaskProvider>
      <Home/>
      <Toaster position='top-center'/>
      </TaskProvider>
    </div>
  )
}
