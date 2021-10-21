import axios from 'axios';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import "./index.less"
import "./index.css"
// import 'antd/dist/antd.less';

import { Button } from 'antd';
const App = () => {
    useEffect(() => {
        axios.get('/index/recommend.json')
            .then((res: any) => {
                console.log(res.data.list);
            })
    })
    return <div className="hwd">he111ldsa113211132111world2
        <Button type="primary">123</Button>
    </div>;
};
ReactDOM.render(<App />, document.getElementById('root'));