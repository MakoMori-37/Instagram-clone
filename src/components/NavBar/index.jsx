import React from "react";
import './navbar.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import TelegramIcon from '@material-ui/icons/Telegram';
import ExploreIcon from '@material-ui/icons/Explore';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


const NavBar = () => {
  return (
    <div className='nav__con' >
      <div className='nav' >
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1920px-Instagram_logo.svg.png' alt='' />
      </div>
      <div className='nav__input' >
        <SearchIcon className='icc' />
        
      <input type='text' placeholder='search' />
      </div>
      <div className='nav__icon' >
      
        <HomeIcon/>
        <TelegramIcon/>
        <ExploreIcon/>
        <FavoriteBorderIcon/>
        <img src='https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_678,h_848/https://www.knetizen.com/wp-content/uploads/2019/03/IZONE-Chaeyeon-and-ITZY-Chaeryeong-1.jpg'  alt='' />


      </div>
    </div>
  );
}
export default NavBar;
