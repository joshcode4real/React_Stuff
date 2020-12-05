import React from 'react'
import "./Home.css";
import {Link} from "react-router-dom";
import Pix from './img2.jpg';
import Photo from "./img1.jpg";
import image from "./op.jpg";
import Leavewater from './Leavewater.jpg';
import frog from './frog.jpg'; 
import face from './SocialMedia/face.png';
import google from './SocialMedia/google.png';
import insta from './SocialMedia/insta.png';
import tweet from './SocialMedia/tweet.png';

function Home() {
  return (
    <div className = "Container">
      <div className = "Holder">
        <div className = "Navs">
          <Link><div className = "H">Home</div></Link>
          <Link to = "/Photo"><div className = "P">Photo's</div></Link>
          <Link><div className = "A">About</div></Link>
          <Link><div className = "C">Contact</div></Link>
        </div>
        <div className = "Tittlei">
          <h1> 💯Photo Shop</h1>
         <div className = "social">
         <div><img className= "face" src = {face} /> </div>
          <div><img className = "google" src = {google}/></div>
          <div><img className =  "insta" src = {insta} /></div>
          <div><img className = "tweet"src = {tweet}/></div>
         </div>
        </div>
        <div className = "img">
          <div className = "iCard">
            <img src = {Pix}/>
            <div className = "Texti" >
              <p className = "P1"> Soul image </p>
              <h5 className = "H5">7k Likes 👍</h5>
            </div>
            </div>
          <div className = "iicard">
             <img src = {Photo}/>
             <div className = "Textii">
               <p className = "P1"> Beautiful Colour images </p>
               <h5 className = "H5"> 12k Likes 👍</h5>
             </div>
             </div>
          <div className = "iiicard">
          <img src = {image}/>
          <div className = "Textiii">
            <p className = "P1"> cartoon images</p>
            <h5 className = "H5">10k Likes 👍</h5>
          </div>
          </div>
        </div>
        <div className = "Tittle">
          <h1>Over 50k World Class Photo's Just for You 😋</h1>
        </div>
        <div className = "cardHolder">
          <div className= "ICard">
            <img src = {Leavewater}/>
            <div className = "Itext">
              <p> Green Images</p>
              <h5> 27K Likes 👍</h5>
            </div>
          </div>
          <div className = "IICard">
          <img src = {frog}/>
            <div className = "IItext">
              <p>Froggie Images</p>
              <h5>24K Likes 👍</h5>
            </div>
          </div>
        </div>
        <div className = "Tittle">
          <h1>You Can Buy [2$] Or Sell [2$] <br/>
              Beautiful images right here at Photo Shop 🤑</h1>
        </div>
      </div>
    </div>
  )
}

export default Home
