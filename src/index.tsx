import axios from 'axios';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
 
const App = () => {

    useEffect(()=>{
        axios.get('/index/recommend.json')
        .then((res:any) => {
             console.log(res.data.list);
        })
    })
 return <div>hello world2</div>;
};
 
ReactDOM.render(<App />, document.getElementById('root'));