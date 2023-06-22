import React from 'react'
import { useNavigate  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import logo from '../images/logo.png'
import facebook from '../images/facebook.png'
import insta from '../images/3D.webp'
import tiktok from '../images/tiktok.png'

export default function Home() {
    const navigate = useNavigate(); /* define hook to navigate to other pages */
    function handleClick(){
        <a href='https://levhagalil.co.il/'></a>
    }
    const backgroundImage = {
        backgroundImage: 'url(../images/background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
  return (
    <div className='container-fluid' style={backgroundImage}>
        <header >
                <center>
                    <img id="header" src={logo} alt=''/>
                </center>
        </header>
        <main>
            <br/>
            <div className="row">
                <div className="col">
                <h4>לב הגליל</h4>

                </div>
                <div className="col">
                    <h4>שם המכללה</h4>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col">
                <h4>050-991-1111</h4>
                </div>
                <div className="col">
                <h4>טלפון</h4>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col">
                <h4>מר' זהר בדארנה</h4>
                </div>
                <div className="col">
                <h4>מנכ"ל הרשת</h4>
                </div>
            </div>
        </main>
        <footer>
            <br/>
            <br/>
        <div className="row">
            <div className="col">C</div>
            <div className="col">O</div>
            <div className="col">N</div>
            <div className="col">T</div>
            <div className="col">A</div>
            <div className="col">C</div>
            <div className="col">T</div>
            <div className="col">  </div>
            <div className="col">U</div>
            <div className="col">S</div>
        </div>
        <br/>
        <br/>
        <div className="row">
            <div className="col">
                <a href='https://www.facebook.com/levhagalil2021'><img id="facebook" src={facebook} alt=''/></a>
            </div>
            <div className="col">
                <a href='https://www.instagram.com/lev_hagalil/'><img id="insta" src={insta} alt=''/></a>
            </div>
            <div className="col">
                <a href='https://www.tiktok.com/@levhagalil8'><img id="tiktok" src={tiktok} alt=''/></a>
            </div>
            <div className="col">
                <button type='button' className='button-72'><a href='https://levhagalil.co.il/'>Web-Site</a></button>
            </div>
        </div>
        </footer>
    </div>
  )
}
