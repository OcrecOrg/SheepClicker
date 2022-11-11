import { useState } from "react";
import './Counter.css';
import Menu from './Menu/Menu.js';

var img = "https://th.bing.com/th/id/OIP.as-Y_0hm8zPTv45tDXGyAQHaHs?w=193&h=200&c=7&r=0&o=5&pid=1.7";

function Counter() {

    const [count, setCount] = useState(0);
    const updateCount = () => {
        setCount(count +1);
        if (count === 49) {img = "https://th.bing.com/th/id/OIP.FJI4DRKoZ9vSPfd4IjLnWQHaHa?pid=ImgDet&rs=1"}
      }

    return(
        <div className="Center">
            <h1 className="Counter">{count}</h1>
            <img src={img} type="button" onClick={updateCount} className="Image"></img>            
        </div>
    );
    
};


export default Counter;