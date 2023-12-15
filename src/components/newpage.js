
import React, { Component } from 'react';
import logo from '../blockchain.jpg'

import dua from '../aditya-chinchure-494048-unsplash.jpg'

import QRCode from 'qrcode.react';

import logo2 from '../logo2.jpg'
import logo3 from '../blockchain.jpg'
import { Link } from 'react-router-dom';
import logo4 from '../Screenshot 2023-11-27 062636.png'
import Navbar from './Navbar';

function NewPage() {
    return (
        <React.Fragment>





            <div >

                <div class="con1 container-fluid " style={{ backgroundColor: '#5dbdff' }}>
                    <div>
                        <h1 class="heading  text-center" style={{ color: 'beige' }}>Book Your Shows Here</h1>
                    </div>

                    <div class="secound row">
                        <div class="col-12 col-sm-6" style={{

                            marginTop: '80px'
                        }}>
                            <h2>Safe and secure transactions</h2>
                            <h4>Book your tickets in our decentralized application and say no to the intermediaries, Click to the buy now button and get your ticket right now </h4>

                            <button type="button" class="btn btn-dark btn-lg download-button"><i class="fab fa-apple"></i><a >
                                <Link to="/new">Buy Tickets</Link></a></button>


                        </div>
                        <div class="col-12 col-sm-6 ">
                            <div className='text-center'>
                                <img className='rounded' src={dua} alt="mobile app img" width="500" height="500" /></div>

                        </div>
                    </div>

                </div>

            </div>

            <section class="white-section" id="features">

                <div class="con2 container-fluid">

                    <div class="row">
                        <div class="feature-box col-lg-4" style={{ textAlign: 'center', marginTop: '40px' }}>
                            <img style={{ marginLeft: '30px' }} className='rounded' src={logo} alt="mobile app img" width="100" height="95" />
                            <h3 class="feature-title">Easy to use.</h3>
                            <p>So easy to use, Mobile and web .</p>
                        </div>

                        <div class="feature-box col-lg-4" style={{ textAlign: 'center', marginTop: '40px' }}>
                            <img style={{ marginLeft: '30px' }} className='rounded' src={logo2} alt="mobile app img" width="100" height="95" />
                            <h3 class="feature-title">Elite Clientele</h3>
                            <p>All the users are verified before .</p>
                        </div>

                        <div class="feature-box col-lg-4" style={{ textAlign: 'center', marginTop: '40px' }}>
                            <img style={{ marginLeft: '30px' }} className='rounded' src={logo3} alt="mobile app img" width="100" height="95" />
                            <h3 class="feature-title">Highly secure.</h3>
                            <p>We respect your privacy works on highly secure technology.</p>
                        </div>
                    </div>


                </div>
            </section>

            <div style={{ backgroundColor: 'beige' }}>
                <div class="con1 container-fluid bg-danger" style={{
                    height: '280px',
                    backgroundImage:
                        "url('https://media.istockphoto.com/id/1316581169/photo/stage-with-microphone-and-stool-with-red-neon-lamp-with-the-word-comedy-space-for-text.jpg?s=612x612&w=0&k=20&c=fZWcSVG2nUhUnuP88GBfInRd3LNPVcjHY5nzJlWzsVY=')"
                }}>


                </div>
                {/* <div id='butt' className='row' style={{ textAlign: 'center' }}>
                    <div className='col-lg-4'>
                        <button type="button" className='btn btn-danger ' onClick={m1}

                        >check balance </button>
                    </div>

                    <div className='col-lg-4'>
                        <button type="button" className='btn btn-primary col-lg-4' onClick={handleClick}

                        >Buy </button>
                    </div>
                    <div className='col-lg-4'>
                        <button type="button" className='btn btn-danger col-lg-4' onClick={discount}

                        >apply discount </button>
                    </div>



                </div> */}

            </div>












        </React.Fragment>
    );
}

export default NewPage;