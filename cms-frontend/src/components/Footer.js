import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow
} from 'mdb-react-ui-kit';
import { FaTwitter, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa'


export default function App() {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-left footer-container'>
            <MDBContainer className='p-4'>
                <MDBRow>
                    <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
                        <h5 className='text-uppercase'>Developers</h5>

                        <p>
                            <ul className='flex-container'>
                                <div className='dev1 flex-container'>
                                    <ul>
                                        <li>Anshul Chaudhary</li>
                                        <li>Deepansh Chaturvedi</li>
                                        <li>Narayani Patil</li>
                                        <li>Kartikey Hebbar</li>
                                    </ul>
                                </div>
                                <div className='dev2 flex-container'>
                                    <ul>
                                        <li>Aaryan Praveen</li>
                                        <li>Jilson Correia</li>
                                        <li>Kartik Shanbhag</li>

                                    </ul>
                                </div>

                            </ul>
                        </p>
                    </MDBCol>

                    <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
                        <h5 className='text-uppercase'>Connect with us:</h5>

                        <p>

                            {/* <h6>Facebook</h6>
                                <h6>Twitter</h6>
                                <h6>Youtube</h6>
                                <h6>Instagram</h6>
                             */}
                            <div className='flex-container connect'>

                                <ul className='icons'>
                                    <li><FaTwitter className='icon' /></li>
                                    <li><FaInstagram className='icon' /></li>
                                    <li><FaFacebook className='icon' /></li>
                                    <li><FaYoutube className='icon' /></li>
                                </ul>


                                <ul className='social'>
                                    <h6>Twitter</h6>
                                    <h6>Instagram</h6>
                                    <h6>Facebook</h6>
                                    <h6>Youtube</h6>
                                </ul>

                            </div>


                        </p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            {/* <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div> */}
        </MDBFooter>
    );
}