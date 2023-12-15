// eslint-disable-next-line

import React, { Component } from 'react';
import Navbar from './Navbar';
import Web3 from 'web3';
import Tether from '../truffle_abis/Tether.json'
import RWD from '../truffle_abis/RWD.json'
import DecentralBank from '../truffle_abis/DecentralBank.json'
import dua from '../aditya-chinchure-494048-unsplash.jpg'

import QRCode from 'qrcode.react';
import logo from '../logo.png'
import logo2 from '../logo2.jpg'
import logo3 from '../blockchain.jpg'
// import { relative } from 'path';

class App extends Component {
    async UNSAFE_componentWillMount() {
        await this.loadWeb3()
        await this.loadBlockchainData()
    }



    async loadWeb3() {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum)
            await window.ethereum.enable()
        }
        else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider)
        }
        else {
            window.alert('no ethereum browser detected checkout metamask')
        }
    }


    async loadBlockchainData() {
        const web3 = window.web3
        const account = await web3.eth.getAccounts()
        console.log(account)
        this.setState({ account: account[0] })
        const networkId = await web3.eth.net.getId()
        const tetherData = Tether.networks[networkId]
        if (tetherData) {
            const tether = new web3.eth.Contract(Tether.abi, tetherData.address)
            this.setState({ tether })
            let tetherBalance = await tether.methods.balanceOf(this.state.account).call()
            this.setState({ tetherBalance: tetherBalance.toString() })
            console.log({ balance: tetherBalance })
        }
        else {
            window.alert('Tether contract not deployed')
        }



        const rwdData = RWD.networks[networkId]
        if (rwdData) {
            const rwd = new web3.eth.Contract(RWD.abi, rwdData.address)
            this.setState({ rwd })
            let rwdBalance = await rwd.methods.balanceOf(this.state.account).call()
            this.setState({ rwdBalance: rwdBalance.toString() })
            console.log({ balance: rwdBalance })
        }
        else {
            window.alert('RWD contract not deployed')
        }


        const decentralBankData = DecentralBank.networks[networkId]
        if (decentralBankData) {
            const decentralBank = new web3.eth.Contract(DecentralBank.abi, decentralBankData.address)
            this.setState({ decentralBank })
            let stakingBalance = await decentralBank.methods.stakingBalance(this.state.account).call()
            this.setState({ rwdBalance: stakingBalance.toString() })
            console.log({ balance: stakingBalance })
        }
        else {
            window.alert('decentralBank contract not deployed')
        }



    }
    constructor(props) {
        super(props)
        this.state = {
            account: 'OXO3243',
            tether: {},
            rwd: {},
            ticketavailable: 20,
            seatno: '0',
            qrcodedata: '',
            showQRCode: false,
            decentralbank1: {},
            tetherbalance: '0',
            rwdbalnace: '0',
            ticketprice: '100000000000000000000',
            loading: true,
            discountmorethan50: false

        }
    }


    render() {

        let oticketprice = '100000000000000000000'
        let rwdprice = this.state.ticketprice / 4
        const handleClick = async () => {
            if (this.state.ticketavailable > 0) {
                const web3 = window.web3
                const seat = parseInt(this.state.seatno) + 1;
                this.setState({ seatno: seat })
                this.setState({ qrcodedata: 'your seat is:' + seat })
                const networkid = await web3.eth.net.getId()
                const tetherdata = Tether.networks[networkid]// tetehrdata is tethercontract matlab ye sab karne se hame tether ka contract aa jata hai
                if (tetherdata) {
                    const tether = new web3.eth.Contract(Tether.abi, tetherdata.address)
                    this.setState({ tether })
                    tether.methods.transfer('0x8731fB06067EF2E570bAa0c5534C79e4b51a6691', this.state.ticketprice).send({ from: this.state.account });
                    let tetherBalance = await tether.methods.balanceOf(this.state.account).call()
                    this.setState({ tetherbalance: tetherBalance })

                }
                else {

                }
                ///send rwd token
                const rwddata = RWD.networks[networkid]// tetehrdata is tethercontract matlab ye sab karne se hame tether ka contract aa jata hai
                if (rwddata) {
                    const rwd = new web3.eth.Contract(RWD.abi, rwddata.address)
                    this.setState({ rwd })
                    rwd.methods.transfer(this.state.account, rwdprice.toString()).send({ from: '0x8731fB06067EF2E570bAa0c5534C79e4b51a6691' });
                    let rwdBalance = await rwd.methods.balanceOf(this.state.account).call()
                    this.setState({ rwdbalnace: rwdBalance.toString() })
                } else {

                }
                this.setState({ ticketprice: oticketprice })
                this.setState({ showQRCode: true })
                this.setState({ discountmorethan50: false })
                this.setState({ ticketavailable: this.state.ticketavailable - 1 })
                setTimeout(() => {
                    // Update ticket price and show QR code after the delay
                    m1()
                }, 11000);
            } else {
                alert('No More Ticket available')
            }

        };
        const m1 = async () => {
            const web3 = window.web3
            const networkid = await web3.eth.net.getId()
            const tetherdata = Tether.networks[networkid]// tetehrdata is tethercontract matlab ye sab karne se hame tether ka contract aa jata hai
            if (tetherdata) {
                const tether = new web3.eth.Contract(Tether.abi, tetherdata.address)
                this.setState({ tether })
                let tetherBalance = await tether.methods.balanceOf(this.state.account).call()
                this.setState({ tetherbalance: tetherBalance.toString() })
            }
            const rwddata = RWD.networks[networkid]
            if (rwddata) {
                const rwd = new web3.eth.Contract(RWD.abi, rwddata.address)
                this.setState({ rwd })
                let rwdBalance = await rwd.methods.balanceOf(this.state.account).call()
                this.setState({ rwdbalnace: rwdBalance.toString() })
            }

        };
        const discount = async () => {
            if (this.state.ticketavailable > 0) {
                const web3 = window.web3
                const networkid = await web3.eth.net.getId()
                const rwddata = RWD.networks[networkid]
                if (rwddata) {
                    const rwd = new web3.eth.Contract(RWD.abi, rwddata.address)
                    this.setState({ rwd })
                    let rwdBalance = await rwd.methods.balanceOf(this.state.account).call()
                    this.setState({ rwdbalnace: rwdBalance.toString() })
                    //Reward issuing algorithm
                    if (this.state.rwdbalnace == 0) {
                        alert('No Token available')
                    } else {
                        if (this.state.rwdbalnace < 30000000000000000000) {
                            if (this.state.discountmorethan50 == false) {
                                let ticketpricen = (this.state.ticketprice * (100 - ((this.state.rwdbalnace) * 50 / 30000000000000000000))) / 100
                                rwd.methods.transfer('0x8731fB06067EF2E570bAa0c5534C79e4b51a6691', this.state.rwdbalnace).send({ from: this.state.account });
                                this.setState({ ticketprice: ticketpricen.toString() })
                                this.setState({ discountmorethan50: true })
                            } else {
                                alert('No Token available')
                            }
                        } else {
                            if (this.state.discountmorethan50 == false) {
                                alert('You have more than 30 token max discount that can be applied is 50 percent  ')
                                let ticketpricen = ((this.state.ticketprice) * 50) / 100
                                rwd.methods.transfer('0x8731fB06067EF2E570bAa0c5534C79e4b51a6691', '30000000000000000000').send({ from: this.state.account });
                                this.setState({ ticketprice: ticketpricen.toString() })
                                this.setState({ discountmorethan50: true })
                            } else {
                                alert('No more discount can be applied')
                            }
                        }

                    }

                }
                setTimeout(() => {
                    // Update ticket price and show QR code after the delay
                    m1()
                }, 11000);
            } else {
                alert('cant apply discount: ticket sold out')
            }


        }
        return (


            <React.Fragment>
                <Navbar account={this.state.account}
                    tt={Web3.utils.fromWei((this.state.tetherbalance.toString()), 'ether')}
                    rr={Web3.utils.fromWei((this.state.rwdbalnace.toString()), 'ether')}
                />




                <div >

                    <div class="con1 container-fluid bg-danger" style={{ backgroundColor: '#5dbdff' }}>
                        <h1 class="heading text-center" style={{ color: 'beige', fontWeight: 'bold', fontFamily: 'cursive' }}>Unfiltered With Samay Raina</h1>

                        <div class="secound row">
                            <div class="col-12 col-sm-6" style={{

                                marginTop: '80px'
                            }}>
                                <h2>Safe and secure transactions</h2>
                                <h4>Book your tickets in our decentralized application and say no to the intermediaries, Click to the buy now button and get your ticket right now </h4>

                                <button type="button" onClick={handleClick} class="btn btn-dark btn-lg download-button"><i class="fab fa-apple"></i>
                                    Buy Tickets</button>
                                <button type="button" onClick={discount} class="btn btn-outline-light btn-lg download-button"><i
                                    class="fab fa-google-play"></i>
                                    Apply discount</button>
                                <button type="button" onClick={m1} class="btn btn-outline-light btn-lg download-button"><i
                                    class="fab fa-google-play"></i>
                                    Check Balance</button>
                                <div>
                                    <h2 style={{ marginTop: '20px' }}>
                                        Ticket Price:{Web3.utils.fromWei((this.state.ticketprice.toString()), 'ether')} Tether

                                    </h2>

                                </div>
                            </div>
                            <div class="col-12 col-sm-6 ">
                                <div className='text-center'>
                                    <img className='rounded' src='https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_1316/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1615289396%2Foimkxvuu0emp0rktzfae.jpg' alt="mobile app img" width="600" height="500" /></div>

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

                <div>
                    {this.state.qrcodedata.toString() ? (

                        <QRCode value={this.state.qrcodedata.toString()} />
                    ) : (
                        <p>No QR Code generated yet.</p>
                    )}
                </div>






                <div style={{

                    backgroundColor: '#FFFACD',
                    height: '80px', textAlign: 'center'
                }}>
                    <h6>contact-us at f20212551@hyderabad.bits-pilani.ac.in</h6>
                    <h6>contact-us at f20212495@hyderabad.bits-pilani.ac.in</h6>
                    <p>©copyright@BookinBITS</p>
                </div>




            </React.Fragment>
        )
    }
}


export default App;




























{/* <div id='butt'>
    <button type="button" onClick={m1} style={{
        borderRadius: '4px',
        backgroundColor: '#2196F3', // Material Design Blue
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#1565C0'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#2196F3'}
    >check balance </button>


    <button type="button" onClick={handleClick} style={{
        borderRadius: '4px',
        backgroundColor: '#2196F3', // Material Design Blue
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#1565C0'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#2196F3'}
    >Buy </button>

    <button type="button" onClick={discount} style={{
        borderRadius: '4px',
        backgroundColor: '#2196F3', // Material Design Blue
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#1565C0'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#2196F3'}
    >apply discount </button>


</div> */}