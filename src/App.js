import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useEffect } from 'react';
const App = () => {
  useEffect(()=>{
      axios.get('/index/recommend.json')
      .then((res) => {
           console.log(res.data.list);
      })
  })
return <div>hello 11world2</div>;
};

export default App;
