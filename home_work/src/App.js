import React from 'react';
import './App.css';
import MyCards from './Components/MyCards';
import MyFooter from './Components/MyFooter';

function App() {
  return (
    <div className="App container-fluid">
        <h1 className='header'>Welcome our book store</h1>
      <p>it is in progress</p>
        <MyCards/>
        <MyFooter/>

    </div>
  );
}

export default App;
