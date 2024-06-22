
import React from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [65, 59, 80, 81, 56, 55],
      borderColor: 'rgba(75,192,192,1)',
      backgroundColor: 'rgba(75,192,192,0.2)',
    },
  ],
};

const Overview = () => {
  return (
    <div className={`p-6 space-y-6 transition-all duration-300 `}>
      <h2 className="text-2xl font-bold">Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold mb-4">Line Chart</h3>
          <Line data={data} />
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold mb-4">Bar Chart</h3>
          <Bar data={data} />
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold mb-4">Doughnut Chart</h3>
          <Doughnut data={data} />
        </div>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-xl font-bold mb-4">Other Section</h3>
        <p>This is another section of the overview.</p>
      </div>
    </div>
  );
};

export default Overview;



