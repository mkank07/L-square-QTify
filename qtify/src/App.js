

import Navbar from "./component/Navbar/Navbar";
import Hero from './component/Hero/Hero';
import { useEffect, useState } from "react";
import { fetchTopAlbums } from "./api/api";
import Card from "./component/card/Card"
// import { Card } from "@mui/material";

function App() {
const [topAlbumData,setTopAlbumData] = useState([]);

const generateAlbum = async()=>{
  const data = await fetchTopAlbums();
  setTopAlbumData(data);
}

useEffect(()=>{
  generateAlbum()
},[])
  return ( 
    
    <div>
<Navbar/>
<Hero/>
{
  topAlbumData.map((items)=>{
    return (
      <Card data={items} type="album"/>
    )
  })
}
    </div>
    
  );
}

export default App;
