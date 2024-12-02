import { useState } from 'react';

export default function Home() {
  const [props, setProps] = useState([]);
  const [propTitle, setPropTitle] = useState('');
  const [propNumber, setPropNumber] = useState('');

  const createProp = () => {
    if (propTitle && propNumber) {
      setProps([...props, { title: propTitle, number: propNumber }]);
      setPropTitle('');
      setPropNumber('');
    } else {
      alert('Please enter both a prop title and number!');
    }
  };

  return (
    <div className="container">
      <div className="title">YoungMoneyBets</div>
      <div className="input-group">
        <label htmlFor="prop-title">Prop Title:</label>
        <input
          type="text"
          id="prop-title"
          placeholder="e.g. Person will go to the bar"
          value={propTitle}
          onChange={(e) => setPropTitle(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="prop-number">Number (e.g. 0.5):</label>
        <input
          type="number"
          id="prop-number"
          step="0.1"
          placeholder="e.g. 0.5"
          value={propNumber}
          onChange={(e) => setPropNumber(e.target.value)}
        />
      </div>
      <div className="button-group">
        <button onClick={createProp} className="over-button">
          Create Prop
        </button>
      </div>
      <div className="bet-list">
        {props.map((prop, index) => (
          <div key={index} className="bet-item">
            <div className="bet-item-title">
              {prop.title} (Over/Under {prop.number})
            </div>
            <div className="button-group">
              <button
                className="over-button"
                onClick={() => alert(`You chose OVER for: "${prop.title}"`)}
              >
                <span className="arrow">&#8593;</span>Over
              </button>
              <button
                className="under-button"
                onClick={() => alert(`You chose UNDER for: "${prop.title}"`)}
              >
                <span className="arrow">&#8595;</span>Under
              </button>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .container {
          background-color: #ffffff;
          padding: 20px;
          border-radius: 20px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
          max-width: 500px;
          margin: auto;
          margin-top: 50px;
          font-family: 'Poppins', sans-serif;
        }
        .title {
          font-size: 32px;
          font-weight: bold;
          color: #333;
          text-align: center;
          margin-bottom: 20px;
        }
        .input-group {
          margin-bottom: 15px;
        }
        input[type='text'],
        input[type='number'] {
          width: 100%;
          padding: 10px;
          margin-top: 5px;
          border-radius: 10px;
          border: 1px solid #ccc;
          font-size: 16px;
          box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        .button-group {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 15px;
        }
        button {
          padding: 10px;
          border: none;
          border-radius: 5px;
          font-size: 16px;
          cursor: pointer;
          display: flex;
          align-items: center;
        }
        .over-button {
          background-color: #28a745;
          color: #ffffff;
        }
        .under-button {
          background-color: #dc3545;
          color: #ffffff;
        }
        .over-button,
        .under-button {
          width: 48%;
        }
        .bet-list {
          margin-top: 20px;
        }
        .bet-item {
          background-color: #ffffff;
          padding: 20px;
          border-radius: 15px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          margin-bottom: 15px;
          transition: transform 0.3s ease;
        }
        .bet-item:hover {
          transform: translateY(-5px);
        }
        .bet-item-title {
          font-size: 20px;
          margin-bottom: 15px;
          color: #444;
          font-weight: 600;
        }
        .arrow {
          font-size: 24px;
          margin-right: 5px;
        }
      `}</style>
    </div>
  );
}
