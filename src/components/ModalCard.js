import React from 'react'
import "./ModalCard.css"

import SimpleRating from './SimpleRating'

const ModalCard = ({ movie }) => {
    
    const img = "https://image.tmdb.org/t/p/original/" + movie.backdrop_path
    

    return (
        <div className="modal-card">
            <div className="image">
                <img src={img} alt="movie poster" />
            </div>
            <div className="modal-card__info">
                <div className="modal-header">
                    <h1>{movie.title || movie.original_name}</h1>
                </div>
                <SimpleRating rating={movie.vote_average}/>
                <p className="overview">{movie.overview}</p>
            </div>
        </div>
    )
}

export default ModalCard
