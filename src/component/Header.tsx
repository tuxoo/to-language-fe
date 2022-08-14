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
import {useActions} from "../hook/hooks";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

// const handleLogout = () => {
//     dispatch(logout());
//     toast.success("User Logout Successfully");
//     navigate("/");
// }

const Header = () => {
    const {logoutUser} = useActions()
    const navigate = useNavigate();

    const handleLogout = () => {
        logoutUser();
        toast.success("User Logout Successfully");
        navigate("/");
    }

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
                        {/*<h2 className="fw-bold mb-2"> Welcome to Dashboard </h2>*/}
                        {/*<h4> Name: {name} </h4>*/}
                        {/*<button*/}
                        {/*    className="btn btn-outline-light btn-lg px-5 mt-3"*/}
                        {/*    type="button"*/}
                        {/*    onClick={() => handleLogout()}*/}
                        {/*>*/}
                        {/*    Logout*/}
                        {/*</button>*/}

                        <MDBBtn
                            className='lg btn-outline-light btn-lg px-4 mt-2 mb-2 text-white'
                            color='dark'
                            type='button'
                            active
                            onClick={() => handleLogout()}
                        >Logout</MDBBtn>
                    </MDBInputGroup>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    )
}

export default Header