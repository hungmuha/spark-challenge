import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import DisplayTable from './components/DisplayTable';
import './App.css';
import axios from 'axios';
import { Button, ButtonGroup } from 'reactstrap';

function App() {
  const [pageSize, setPageSize] = useState(25);
  const [lyrics, setLyricList] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8000/swiftlyrics/lyric/?size=${pageSize}`)
    .then((res) => {
      if(res && res.data.results && res.data.results.length) {
        setLyricList(res.data.results);
      }
    })
    .catch((err) => console.error(err));
  },[pageSize]);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Find your favorite!
        </p>
        <ButtonGroup>
          <Button color="primary" onClick={() => setPageSize(10)} active={pageSize === 10}> 10 </Button>
          <Button color="primary" onClick={() => setPageSize(25)} active={pageSize === 25}> 25 </Button>
          <Button color="primary" onClick={() => setPageSize(50)} active={pageSize === 50}> 50 </Button>
        </ButtonGroup>
        <DisplayTable lyrics={lyrics}/>
      </header>
    </div>
  );
}

export default App;
