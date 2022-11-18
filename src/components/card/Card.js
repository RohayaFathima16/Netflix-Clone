import React from 'react';
import './Card.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Card(props) {
  const imageUrl = `https://image.tmdb.org/t/p/original/${props.poster}`;
  console.log(imageUrl)
  const [video, setVideo] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const youtubeUrl = `https://www.youtube.com/embed/`;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const fetchURL = async () => {
    try {
      const response = await axios.get(`/movie/${props.id}`, {
        params: {
          append_to_response: 'videos',
        },
      });
      if (response.data.videos.results.lenght > 0) {
        setVideo(response.data.videos.results[0].key);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchURL();
  }, []);

  return (
    <div>
      <img className='card_poster' src={imageUrl} alt='poster' />
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {!isHovered ? (
        <img className='card_poster' src={imageUrl} alt='poster' />
      ) : (
        
        <iframe className='video'
        title='Youtube player'
        loading='lazy'
        sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
        src={`https://youtube.com/embed/${video}?autoplay=0`}>
       </iframe>
          
      )}
    </div>
    </div>
  );
}
