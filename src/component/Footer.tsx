import React from "react";
import {MDBBtn, MDBCol, MDBContainer, MDBFooter, MDBInput, MDBRow} from 'mdb-react-ui-kit';

const Footer = () => {
    return (
        <MDBFooter className='text-center bg-light'>
            <MDBContainer className='p-2'>
                <section className='mt-2'>
                    <form action=''>
                        <MDBRow className='d-flex justify-content-center'>
                            <MDBCol size="auto">
                                <p className='pt-2'>
                                    <strong>Sign up for our newsletter</strong>
                                </p>
                            </MDBCol>

                            <MDBCol size="auto">
                                <MDBInput type='email' label='Email address' className='mb-2'/>
                            </MDBCol>

                            <MDBCol size="auto">
                                <MDBBtn outline color='dark' type='submit' className='mb-2'>
                                    Subscribe
                                </MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </form>
                </section>
                <section className='mb-2 mt-2'>
                    <MDBRow className='justify-content-center'>
                        <MDBCol lg='6' md='12' className='mb-2 mb-md-0'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias.
                            </p>
                        </MDBCol>
                    </MDBRow>
                </section>
                <section>
                    <MDBRow className='justify-content-center'>
                        <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
                            <p className='p-1 mt-1'>
                                © 2022 Copyright:
                                <a className='text-dark' href='https://to-language.com/'>
                                    ToLanguage.com
                                </a>
                            </p>
                        </MDBCol>
                    </MDBRow>
                </section>
            </MDBContainer>
        </MDBFooter>
    );
}

export default Footer