import React  from 'react'
import 'antd/dist/antd.css';
import { Rate } from 'antd';
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const Raiting = ({filterRating,movieRaiting,raiting,setRaiting}) => {
    
    const handleChange = value => {
        setRaiting(value);
      };
    return (
        filterRating?
        <span>
        <Rate tooltips={desc} onChange={handleChange} value={raiting} />
        </span> :
        <span>
        <Rate  value={movieRaiting} disabled />
        </span>
            
       
    )
}

export default Raiting

