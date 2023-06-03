
import axios from 'axios';
import  { useState } from 'react'
import { useEffect } from 'react'
import { Card } from '../Cards/Card'
import "./Rows.css";
export const Rows = () => {
    const[moviesData, setMoviesData]  = useState([]);
    const api = "https://api.tvmaze.com/search/shows?q=all";
    const[width, setWidth] = useState(window.innerWidth);
    const[index, setIndex] = useState();
    useEffect(()=>{
        const  fetchData = async()=>{
            const res =  await axios.get(api);
            setMoviesData(res.data);
        }
        fetchData();
    },[])
    // console.log(moviesData)
    useEffect(()=>{
        window.addEventListener("resize",()=>{
                setWidth(window.innerWidth);
        })
        if(width<=600){
            setIndex(3);
        }else if(width>600){
            setIndex(5);
        }

    },[width])
  return (
    <div className="card-container">
        {moviesData.slice(0,index).map((movie)=>{
            return (
                <Card key={movie.show.id} genre={movie.show.genres[0]}name={movie.show.name} img={movie.show.image.original} img2={movie.show.image.medium}about={movie.show.summary}/>
            )
        })
        }
    </div>
  )
}
