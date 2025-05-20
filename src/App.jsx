import { useState } from "react";
import './App.css';

const quotes = [
  'success is not final failure is not fatal',
  'Learn as if you will live forever.',
  'Don`t let yesterday take up to much today.',
  'Creativity is  intelligence having fun .',
];

function App() {
  const [quote, setQuote] = useState();

  const generateQuote = () => {
    const random = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[random]);
  };

  return (
    <div className="container">
      <h1>Qoute Genrator</h1>
      <p className="qoute">{quote || 'click the button to get inspired'}</p>
      <button onClick={generateQuote}>Click</button>
    </div>
  );
}
export default App