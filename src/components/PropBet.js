// components/PropBet.js
import { useState } from 'react';

export default function PropBet() {
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
    </div>
  );
}
