import React from 'react';
import { Link } from 'react-router-dom';
import cover1 from '../imgs/book.jpg';
import cover2 from '../imgs/book2.jpg';
import cover3 from '../imgs/cover.jpg';

const Public = () => (
  <div>
    <div id="publicContainer">
      <div id="public-header">Medium</div>
      <h2 id="public-title">YOU MUST LOGIN FIRST</h2>
      <Link to="login">
        <button id="puibic-toLoginBtn" type="submit">
          Click to Login
        </button>
      </Link>
    </div>
    <div id="public-description">
      <div className="ImgContainer">
        <img className="Public-coverImg" alt="bookPic" src={cover1} />
        <div className="public-text">Lorem ipsum</div>
      </div>
      <div className="ImgContainer">
        <img className="Public-coverImg" alt="bookPic2" src={cover2} />
        <div className="public-text">Nunc tortor </div>
      </div>
      <div className="ImgContainer">
        <img className="Public-coverImg" alt="bookPic3" src={cover3} />
        <div className="public-text">Raoreet lectus</div>
      </div>
    </div>
  </div>
);
export default Public;
