import axios from 'axios';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
 import "./index.less"
 import "./index.css"
const App = () => {
    useEffect(()=>{
        axios.get('/index/recommend.json')
        .then((res:any) => {
             console.log(res.data.list);
        })
    })
 return <div className="hwd">he111ldsa13211132111world2</div>;
};
ReactDOM.render(<App />, document.getElementById('root'));