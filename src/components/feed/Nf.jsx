import React from "react";
import Cardfeed from "./Cardfeed";
import "./Nf.css";
import Story from "./Story";
import Side from './Side'


function Nf() {
  return (
    <div className="nfeed">
      <div className="story">
        <Story
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNHcd0LxFNN1iRpgUj2F8U-r7JJmBHDyge-w&usqp=CAU"
          alt=""
          name="itzy"
        />
        <Story
          image="https://dudeplace.co/wp-content/uploads/2020/04/Oh-My-Girl-1-743311402-1588051245928.jpg"
          alt=""
          name="ohmygirl"
        />
          <Story
          image="https://channel-korea.com/wp-content/uploads/2019/07/nayeon-thumbnail.jpg"
          alt=""
          name="nayeon"
        />
          <Story
          image="https://www.knetizen.com/wp-content/uploads/2019/08/Jang-Wonyoung-1.jpg"
          alt=""
          name="wonyoung"
        />
          <Story
          image="https://i0.wp.com/karchives.com/wp-content/uploads/2020/06/IZONE_56.jpeg?fit=403%2C275&ssl=1"
          alt=""
          name="chaeyeon"
        />
          <Story
          image="https://upload.wikimedia.org/wikipedia/commons/a/a8/170303_%EB%AE%A4%EC%A7%81%EB%B1%85%ED%81%AC_%EC%B6%9C%EA%B7%BC%EA%B8%B8_%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4.jpg"
          alt=""
          name="mina"
        />
          <Story
          image="https://i.pinimg.com/originals/4d/53/be/4d53be4b3596e59d941fa8a6dbaa904e.jpg"
          alt=""
          name="eunbi"
        />
         <Story
          image="data:image/jpeg;base64,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"
          alt=""
          name="suelgi"
        />
      
      </div>
      <div className="newfeed">
        <Cardfeed
          profilename="Red Velvet"
          profilepic="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRpPkc4XIyloaBBLNzPsWFRi-u4CsflWt2jBA&usqp=CAU"
          pic="https://i.pinimg.com/originals/56/b7/6d/56b76d74989c248154d372a6d3e4d194.jpg"
        />

        <Cardfeed
          profilename="Twice"
          profilepic='https://i0.wp.com/dudeplace.co/wp-content/uploads/2020/05/TWICE-press-photo-2020.jpg?resize=1000%2C600&ssl=1'
          pic="https://i0.wp.com/dudeplace.co/wp-content/uploads/2020/05/TWICE-press-photo-2020.jpg?resize=1000%2C600&ssl=1"
        />

        <Cardfeed
          profilename="IZ*ONE"
          profilepic='https://i1.wp.com/dudeplace.co/wp-content/uploads/2020/06/1591544035-1591369431-izone1487520596935523390.jpg?fit=1000%2C667&ssl=1'
          pic="https://187436-553851-1-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/11/official-iz-one.jpg"
        />

        <Cardfeed
          profilename="ITZY"
          profilepic='https://kpop.youzab.com/wp-content/uploads/2019/01/jyp-debut-itzy.jpg'
          pic="https://dudeplace.co/wp-content/uploads/2020/06/itzy-2.jpg"
        />

        <Cardfeed
          profilename="OH MY GIRL!"
          profilepic='https://i0.wp.com/www.hallyukstar.com/wp-content/uploads/2020/04/OHMYGIRL_The-Fifth-Season_.jpg?fit=800%2C400'
          pic="https://dudeplace.co/wp-content/uploads/2020/04/Oh-My-Girl-1-743311402-1588051245928.jpg"
        />
      </div>
    
      <div className='sidefeed' >
        
        <Side/>

      </div>
    
    </div>
  );
}

export default Nf;
