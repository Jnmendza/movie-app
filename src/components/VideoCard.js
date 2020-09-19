import React, { forwardRef, useState } from 'react'
import "./VideoCard.css"
import TextTruncate from 'react-text-truncate'
import { ThumbUpSharp } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import SimpleRating from './SimpleRating'


const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    
  }));

const VideoCard = forwardRef(({ movie }, ref) => {
    console.log(movie)
    // Modal Logic
    const classes = useStyles();
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const base_url = "https://image.tmdb.org/t/p/original/"

    return (
        <div ref={ref} className="videoCard" onClick={handleOpen}>
            <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt="movie poster" />
            <TextTruncate 
                line={2}
                element="p"
                truncateText="..."
                text={movie.overview}
            />
            <h2>{movie.title || movie.original_name}</h2>
            <p className='videoCard__stats'>
                {movie.media_type && `${movie.media_type} •`}
                {movie.release_date || movie.first_air_date} •
                <ThumbUpSharp /> {"  "}
                {movie.vote_count}
            </p>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                onClose={handleClose}
                open={open}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={open}>
                <div className={classes.paper}>
                    <h2 id="transition-modal-title">{movie.title}</h2>
                    <p id="transition-modal-description">{movie.overview}</p>
                    <SimpleRating rating={movie.vote_average}/>
                </div>
                </Fade>
            </Modal>

        </div>
    )
});

export default VideoCard
