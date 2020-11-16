import React from "react";
import "./Cardfeed.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import TelegramIcon from "@material-ui/icons/Telegram";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";

function Cardfeed({ profilepic, profilename, pic }) {
  return (
    <div className="cardfeed">
      <div className="headcard">
        <img src={profilepic} alt="" />
        <p>{profilename}</p>
        <MoreHorizIcon />
      </div>
      <div className="picfeed">
        <img src={pic} alt="" />
      </div>
      <div className="iconcomment">
        <div className="iconleft">
          <FavoriteBorderIcon />
          <ChatBubbleOutlineIcon />
          <TelegramIcon />
        </div>
        <div className="iconright">
          <BookmarkBorderIcon />
        </div>
      </div>
      <div className='comment' >
        <h5>17,038 likes </h5>
        <h5>{profilename} <span>Phycho!</span></h5>
        <p>love ya!</p>
        <p>god irene!</p>
        <p>View all 90 comments</p>
      </div>
       <div className='cmmip' >
        <input type='text' placeholder='comment...' />
        <p>post</p>
        </div>
    </div>
  );
}

export default Cardfeed;
