import React from 'react'
import { useNavigate  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import logo from '../images/logo.png'
import facebook from '../images/facebook.png'
import insta from '../images/insta.png'
import tiktok from '../images/tiktok.png'

export default function Home() {
    const navigate = useNavigate(); /* define hook to navigate to other pages */
    function handleClick(){
        <a href='https://levhagalil.co.il/'></a>
    }
    
  return (
    <div className='container-fluid'>
        <header >
                <center>
                    <img id="header" src={logo} alt=''/>
                </center>
        </header>
        <div className="row" id='contactUs'>
            
            <div className="col"><h1>W</h1></div>
            <div className="col"><h1>E</h1></div>
            <div className="col"><h1>  </h1></div>
            <div className="col"><h1>A</h1></div>
            <div className="col"><h1>R</h1></div>
            <div className="col"><h1>E</h1></div>
        </div>
        <main>
            <br/>
            <div className="row">
                <div className="col">
                    <h1>לב הגליל</h1>

                </div>
                <div className="col">
                    <h1>שם המכללה</h1>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col">
                <h1>050-991-1111</h1>
                </div>
                <div className="col">
                <h1>טלפון</h1>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col">
                <h1>מר' זהר בדארנה</h1>
                </div>
                <div className="col">
                <h1>מנכ"ל הרשת</h1>
                </div>
            </div>
        </main>
        <footer>
            <br/>
            <br/>
        <div className="row" id='contactUs'>
            <div className="col"><h1>C</h1></div>
            <div className="col"><h1>O</h1></div>
            <div className="col"><h1>N</h1></div>
            <div className="col"><h1>T</h1></div>
            <div className="col"><h1>A</h1></div>
            <div className="col"><h1>C</h1></div>
            <div className="col"><h1>T</h1></div>
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
