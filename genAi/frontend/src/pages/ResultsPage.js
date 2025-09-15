import React from 'react';

const ResultsPage = ({ result }) => {
  const colorMap = {
    Green: 'bg-green-100 text-green-800',
    Yellow: 'bg-yellow-100 text-yellow-800',
    Red: 'bg-red-100 text-red-800'
  };

  return (
    <div className={`p-6 rounded shadow w-80 mb-4 ${colorMap[result.credibility]}`}>
      <h2 className="text-xl font-bold mb-2">Credibility: {result.credibility}</h2>
      <p className="mb-2">{result.explanation}</p>
      <div className="text-sm italic">Tip: {result.tips}</div>
    </div>
  );
};

export default ResultsPage;
