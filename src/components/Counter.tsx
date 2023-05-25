import React from 'react';
// eslint-disable-next-line import/no-cycle
import { useState, useEffect } from './hooks';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);

  useEffect(() => console.log('count changed: ', count), [count]);
  useEffect(() => console.log('toggle changed: ', toggle), [toggle]);
  useEffect(() => console.log('------------------------------'));

  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>up!</button>
      <h1>toggle: {toggle.toString()}</h1>
      <button onClick={() => setToggle(!toggle)}>switch!</button>
    </div>
  );
}
