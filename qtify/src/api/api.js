import React from 'react'
import axios from 'axios';

export const BACKEND_API = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbums= async ()=>{
  try {
    const res = await axios.get(`${BACKEND_API}/albums/top`);
    return res.data;
    

  }catch (err){
    console.error(err);

  }
}