import React from "react";
import {
    MDBBtn,
    MDBCollapse,
    MDBContainer,
    MDBInputGroup,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav
} from 'mdb-react-ui-kit';

const Header = () => {
    return (
        <MDBNavbar expand='lg' dark bgColor='dark'>
            <MDBContainer fluid>
                <MDBNavbarBrand
                    className='d-flex w-auto px-4 fs-4'
                    href='/'
                >
                    ToLanguage</MDBNavbarBrand>
                <MDBCollapse navbar show={true}>
                    <MDBNavbarNav className='mr-auto px-2 mt-2 mb-2'>
                    {/*    <MDBBtn*/}
                    {/*        className='lg btn-outline-dark btn-lg px-5 mt-2 mb-2 text-light'*/}
                    {/*        color='dark'*/}
                    {/*        type='button'*/}
                    {/*        active*/}
                    {/*    >*/}
                    {/*        Sign In*/}
                    {/*    </MDBBtn>*/}
                    {/*    <MDBBtn*/}
                    {/*        className='lg btn-outline-light btn-lg px-5 mt-2 mb-2 text-light'*/}
                    {/*        color='light'*/}
                    {/*        type='button'*/}
                    {/*        active*/}
                    {/*    >*/}
                    {/*        Sign Up*/}
                    {/*    </MDBBtn>*/}
                    </MDBNavbarNav>

                    <MDBInputGroup className='d-flex w-auto px-5 mt-2 mb-2' size='lg'>
                        <input
                            className='form-control btn-outline-light px-5 mt-2 mb-2'
                            placeholder="Search"
                            type='text'
                        />
                        <MDBBtn
                            className='lg btn-outline-light btn-lg px-5 mt-2 mb-2 text-white'
                            color='dark'
                            type='button'
                            active
                        >Button</MDBBtn>
                    </MDBInputGroup>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    )
}

export default Header