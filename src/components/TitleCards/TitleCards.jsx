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
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`
    }
  };
  
  const handlewheel = (event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }
  
  useEffect(() => {
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

    return () => {
      if(cardsRef.current) {
        cardsRef.current.removeEventListener('wheel', handlewheel);
      }
    };
  }, [category])
  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index)=>{
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path || card.poster_path}`} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards
