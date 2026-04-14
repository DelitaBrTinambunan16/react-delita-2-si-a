import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './Pages/Dashboard';
import Sidebar from './Layouts/Sidebar';
import Header from './Layouts/Header';
import './assets/tailwind.css';

function App() {
  return (
    <div className="flex h-screen bg-latar font-barlow">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);