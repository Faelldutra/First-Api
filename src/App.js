import React, { useState, useEffect } from 'react';
import api from './services/Api';
import { Header, Corpo } from './appStyled';
import chuckApprove from './assets/chuckApprove.jpg';

const App = () => {

  const [jokes, setJokes] = useState([]);
  const [number, setNumber] = useState('0');
  const [category, setCategory] = useState('nerdy,explicity');
  const [value, setValue] = useState(3);
  const [numberOfJokes, setNumberOfJokes] = useState(0);
  const [categories, setCategoires] = useState('nerdy,explicity');
  const [error, setError] = useState(false);

  useEffect(() => {
    api.get(`${numberOfJokes}?limitTo=[${categories}]`).then((response) => {
      setJokes(response.data.value);
    });
  }, [numberOfJokes, categories]);

  function handleClick() {
    if (number >= 1 && number <= 50) {
      setNumberOfJokes(number);
      setCategoires(category);
      setError(false);
    }
    else {
      setNumberOfJokes(0);
      setNumber('0');
      setError(true);
    }
  }

  return (
    <>
      <Header>
        <div className="header">
          <h1>Chuck Norris joke's</h1>
          <img src={chuckApprove} alt="chuck approve"></img>
        </div>
      </Header>
      <Corpo>
        <div className="choice">
          <div className="label1">
            <label>Type it um number from 1 to 50 to choose how many jokes would you like to read: </label>
            <input onClick={() => setNumber('')} value={number} onChange={(e) => setNumber(e.target.value)}></input>
            {error &&
              <p>Valor incorreto!</p>
            }
          </div>
          <div className="label2">
            <label>Choose the category of jokes</label>
            <div className="options">
              <div onClick={() => setCategory('nerdy')}>
                <label>
                  <p>Nerdy</p>
                  <input onChange={() => setValue(1)} checked={value === 1} type="radio"></input>
                  <span></span>
                </label>
              </div>
              <div onClick={() => setCategory('explicit')}>
                <label>
                  <p>Explicity</p>
                  <input onChange={() => setValue(2)} checked={value === 2} type="radio"></input>
                  <span></span>
                </label>
              </div>
              <div onClick={() => setCategory('nerdy,explicit')}>
                <label>
                  <p>Random</p>
                  <input onChange={() => setValue(3)} checked={value === 3} type="radio"></input>
                  <span></span>
                </label>
              </div>
            </div>
          </div>
          <button onClick={() => handleClick()} type="submit">Submit</button>
        </div>
        <div className="jokesconfig">
          <div className="jokes">
            {jokes.map(joke => (
              <li key={joke.id}>
                <p>{joke.joke}</p>
              </li>
            ))}
          </div>
        </div>
      </Corpo>
    </>
  );
}

export default App;
