import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
const TitleCards = ({title, category}) => {
  const navigate = useNavigate();
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();
  
  const options = {
    method: 'GET',
    headers: { 
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MmFkODIwODBhMzc5ZTg1OWVjNmI3NzFkOWRkMWU1MiIsIm5iZiI6MTc1MzIwMTc3OC4yMjQsInN1YiI6IjY4N2ZiYzcyYjQ1YjNmYTQ4NTE2YTlmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R0tKtd85CeweR9HGffwje3tDa-bYnEZ6MYmKxNlA29k'
    }
  };
  
  const handlewheel = (event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results || []))
    .catch(err => {
      console.error(err);
      setApiData([]);
    });

    if(cardsRef.current) {
      cardsRef.current.addEventListener('wheel', handlewheel);
    }
  },[])
  return (
    <div className='titlecards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index)=>{
          return <Link to={`/player/${card.id}`} className="card" key={index} onClick={() => navigate(`/player/DQ4r7HegRQw`)}>
            <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path || card.poster_path}`} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards
