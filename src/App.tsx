import logo from './logo.svg';
import './App.less';
import axios from 'axios';
import React, { useEffect } from 'react';
const App = () => {
  useEffect(() => {
    axios.get('/index/recommend.json')
      .then((res: any) => {
        console.log(res.data?.list);
      })
  })
  return <div className="box2" style={{ width: 100, textAlign: "center" }}>hello 11world2</div>;
};

export default App;
