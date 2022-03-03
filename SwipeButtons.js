import React from "react";
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { IconButton } from "@mui/material";
import './SwipeButtons.css';
function SwipeButtons() {
  return (
    <div className="SwipeButtons">
        <IconButton className="SwipeButtons__repeat">
            <ReplayIcon fontSize="medium" />
        </IconButton>
        <IconButton className="SwipeButtons__left">
            <CloseIcon fontSize="large" />
        </IconButton>
        <IconButton className="SwipeButtons__star">
            <StarRateIcon fontSize="large" />
        </IconButton>
        <IconButton className="SwipeButtons__right">
            <FavoriteIcon fontSize="large" />
        </IconButton>
        <IconButton className="SwipeButtons__lightning">
            <FlashOnIcon fontSize="large" />
        </IconButton>
       
    </div>
  )
}

export default SwipeButtons