import React, { useEffect, useState } from 'react'
import './NewCollections.css'
import Item from '../Item/Item'
const  NewCollections = () => {

  const [new_arrival,setNew_arrival] = useState([]);
  const baseUrl = "http://localhost:4000";
  useEffect(()=>{
    fetch(baseUrl+"/newcollections").then((response)=>response.json()).then((data)=>setNew_arrival(data));
  },[])
  return (
    <div className='newcollections'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
            {new_arrival.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default  NewCollections