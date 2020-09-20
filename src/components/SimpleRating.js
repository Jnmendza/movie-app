import React, { useState } from 'react'
// import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import "./simpleRating.css"

const SimpleRating = ({ rating }) => {
    const starRating = (rating / 10) * 5
    const [value, setValue] = useState(starRating)
    
    return(
        <div>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Rating name="half-rating-read" defaultValue={value} precision={0.5} readOnly/>
                <span className="rating">{rating} / 10</span>
            </Box>
    </div>
    )
}

export default SimpleRating