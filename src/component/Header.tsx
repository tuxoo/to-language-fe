import React from "react";
import {MDBContainer, MDBNavbar, MDBNavbarBrand} from 'mdb-react-ui-kit';

// const handleLogout = () => {
//     dispatch(logout());
//     toast.success("User Logout Successfully");
//     navigate("/");
// }

const Header = () => {
    return (
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarBrand
                    className='d-flex w-auto px-4 fs-4'
                    href='/'
                >
                    ToLanguage</MDBNavbarBrand>
            </MDBContainer>
        </MDBNavbar>
    )
}

export default Header