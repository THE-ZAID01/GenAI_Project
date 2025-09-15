import React, { useState } from 'react';

const InputForm = ({ setResult }) => {
  const [input, setInput] = useState('');
  const [type, setType] = useState('text');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setResult({
      credibility: 'Yellow',
      explanation: 'Needs Caution: Detected manipulative language.',
      tips: 'Check sources, avoid emotional triggers.'
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-80 mb-4">
      <label className="block mb-2 font-semibold">Input Type:</label>
      <select value={type} onChange={e => setType(e.target.value)} className="mb-4 w-full p-2 border rounded">
        <option value="text">Text</option>
        <option value="url">URL</option>
        <option value="image">Image</option>
      </select>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder={`Enter ${type}`}
        className="mb-4 w-full p-2 border rounded"
        required
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">Analyze</button>
    </form>
  );
};

export default InputForm;
