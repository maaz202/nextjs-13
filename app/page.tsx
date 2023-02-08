import React from 'react'
import CounterApp from './counter-app';
import CounterAppAdvanced from './counter-app-advanced';
import StrPrac from './str-prac'
import Todo from './todo';

export default function page() {
  return ( 
    <>
      {/* <h2>String Practice and useState Practice</h2>
      <StrPrac />
      <h2>Counter App</h2>
      <CounterApp />
      <h2>Counter App Advanced</h2>
      <CounterAppAdvanced /> */}
      <h2>Todo App</h2>
      <Todo />
    </>
  );
}
