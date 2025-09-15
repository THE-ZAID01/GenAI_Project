import React, { useState } from 'react';
import InputForm from './src/components/InputForm';
import ResultsPage from './src/pages/ResultsPage';

function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">MisinformLens</h1>
      <InputForm setResult={setResult} />
      {result && <ResultsPage result={result} />}
    </div>
  );
}

export default App;
