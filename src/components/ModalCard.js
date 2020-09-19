import React from 'react'
import "./ModalCard.css"

import SimpleRating from './SimpleRating'

const ModalCard = ({ movie }) => {
    const img = "https://image.tmdb.org/t/p/original/" + movie.backdrop_path

    const releaseYear = movie.release_date
    const airedYear = movie.first_air_date
    

    return (
        <div className="modal-card">
            <img src={img} alt="movie poster" />
            <div className="modal-card__info">
                <h2>{movie.title || movie.original_name}</h2>
                <p>{movie.overview}</p>
                <SimpleRating rating={movie.vote_average}/>
                <p>{releaseYear || airedYear}</p>
            </div>
        </div>
    )
}

export default ModalCard
