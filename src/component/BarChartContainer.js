import { Bar } from 'react-chartjs-2';
import React from 'react';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
Chart.register(CategoryScale);

const BarChartContainer = ({ barChartData }) => {
  // Process the dynamic data to generate labels and dataset
  const labels = barChartData.map((item, index) => `${item.range.min}-${item.range.max}`);
  const data = barChartData.map(item => item.count);

  return (
    <div
      style={{
        maxWidth: '650px',
        backgroundColor: '#EDF6F6',
        margin: 'auto',
        marginTop: 50,
        paddingLeft: 15,
        paddingRight: 15,
      }}
    >
      <h2 style={{ paddingTop: 40, display: 'flex' }}>Bar Chart Stats - June</h2>

      <div>
        <Bar
          data={{
            labels: labels,
            datasets: [
              {
                data: data,
                backgroundColor: '#6CE5E8',
                borderWidth: 0,
                label: "Bar chart"
              },
            ],
          }}
          height={400}
          options={{
            maintainAspectRatio: false,
            scales: {
              x: {
                type: 'category',
                grid: {
                  display: false,
                },
                barPercentage: 0.5,
                categoryPercentage: 0.5,
              },
              y: {
                beginAtZero: true,
                grid: {
                  drawBorder: false,
                },
                ticks: {
                  beginAtZero: true,
                },
              },
            },
            legend: {
              display: false,
            },
          }}
        />
      </div>
    </div>
  );
};

export default React.memo(BarChartContainer);
