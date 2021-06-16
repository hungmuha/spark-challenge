import React, { useState, useEffect, useCallback } from 'react';
import logo from './logo.svg';
import DisplayTable from './components/DisplayTable';
import SearchBar from './components/SearchBar';
import SizeSelection from './components/SizeSelection';
import utils from './utils';
import './App.css';
import axios from 'axios';

function App() {
  const [pageSize, setPageSize] = useState(25);
  const [lyrics, setLyricList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  //memoized Callback is reusable
  const handleFetch = useCallback(() => {
    if(!searchTerm) return;
    //call API to get data
    axios.get(`http://localhost:8000/swiftlyrics/lyric/?search=${searchTerm}&size=${pageSize}`)
    .then((res) => {
      //checking for result before setting value
      if(res && res.data.results && res.data.results.length) {
        setLyricList(res.data.results);
      }
    })
    .catch((err) => console.error(err));
  }, [pageSize, searchTerm]);

  useEffect(() => {
    handleFetch();
  },[handleFetch]);

  return (
    <div className="App ">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Find your favorite!
        </p>
        <SearchBar 
          label="search"
          searchChange={(e)=> setSearchTerm(e.target.value)}
          searchValue={searchTerm}
        />
        <SizeSelection 
          sizeList = {utils.sizesOptions}
          sizeSelected = {pageSize}
          setSize = {setPageSize}
        />
        <DisplayTable lyrics={lyrics}/>
      </header>
    </div>
  );
}

export default App;

