import React from "react";
import {MDBBtn, MDBCol, MDBContainer, MDBFooter, MDBInput, MDBRow} from 'mdb-react-ui-kit';

const Footer = () => {
    return (
        <MDBFooter className='text-center bg-dark text-white'>
            <MDBContainer className='p-4'>
                <section className='mt-2'>
                    <form action=''>
                        <MDBRow className='d-flex justify-content-center'>
                            <MDBCol size="auto">
                                <p className='pt-2'>
                                    <strong>Sign up for our newsletter</strong>
                                </p>
                            </MDBCol>

                            <MDBCol size="auto">
                                <MDBInput contrast type='email' label='Email address' className='mb-2'/>
                            </MDBCol>

                            <MDBCol size="auto">
                                <MDBBtn outline color='light' type='submit' className='mb-2'>
                                    Subscribe
                                </MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </form>
                </section>
                <section className='mb-4 mt-4'>
                    <MDBRow className='justify-content-center'>
                        <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase'>Footer text</h5>

                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias.
                                Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam,
                                est atque cumque eum delectus sint!
                            </p>
                        </MDBCol>
                    </MDBRow>
                </section>
                <div className='text-center p-1 mt-2'>
                    © 2022 Copyright:
                    <a className='text-white' href='https://to-language.com/'>
                        ToLanguage.com
                    </a>
                </div>
            </MDBContainer>
        </MDBFooter>
    );
}

export default Footer