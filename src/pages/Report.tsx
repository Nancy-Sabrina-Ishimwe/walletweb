import React from 'react';
import Sidebar from '../components/Sidebar';
// import Header from '../components/Header';
import ReportCard from '../components/Reportcard';

const Report: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        {/* <Header /> */}
        <main className="p-6 bg-gray-50">
          <h1 className="text-2xl font-bold mb-6">Find your Wallet Performance</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ReportCard title="Your Cash in Hand" content={<div>Chart 1</div>} />
            <ReportCard title="Your Money on Card" content={<div>Chart 2</div>} />
            <ReportCard title="Your Memo Report" content={<div>Chart 3</div>} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Report;
