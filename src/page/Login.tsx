import React, {useState} from "react";
import {toast} from "react-toastify";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBContainer,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink
} from 'mdb-react-ui-kit';
import {useAppDispatch} from "../hook/hooks";
import {signIn, signUp} from "../store/slice/user.slice";
import {useNavigate} from "react-router-dom";
import Input from "../component/Input";

const initState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
}

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch();

    const [formValue, setFormValue] = useState(initState);
    const [showRegister, setShowRegister] = useState(false);

    const {firstName, lastName, email, password, confirmPassword} = formValue;

    const handleChange = (e: any) => {
        setFormValue({...formValue, [e.target.name]: e.target.value})
    };

    const handleLogin = async () => {
        if (email && password) {
            await dispatch(signIn({email, password}))
        } else {
            toast.error("Please fill all input fields")
        }
    }

    const handleRegister = async () => {
        if (password !== confirmPassword) {
            return toast.error("Password doesn't match");
        }

        if (firstName && lastName && password && email) {
            await dispatch(signUp({firstName, lastName, email, password}))
        }
    }

    return (
        <MDBContainer className='d-flex justify-content-center py-4'>
            <MDBCard className='text-center w-50 align-items-center'>
                <MDBCardHeader>
                    <MDBTabs className='card-header-tabs'>
                        <MDBTabsItem>
                            <MDBTabsLink
                                active={!showRegister}
                                onClick={() => setShowRegister(false)}>
                                Sign In
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink
                                active={showRegister}
                                onClick={() => setShowRegister(true)}>
                                Sign Up
                            </MDBTabsLink>
                        </MDBTabsItem>
                    </MDBTabs>
                </MDBCardHeader>
                <MDBCardBody>
                    <div className="mb-md-2 mt-md-2 pb-2">
                        <h2 className="mb-2">
                            {!showRegister ? "Sign in to ToLanguage" : "Sign up to ToLanguage"}
                        </h2>
                        <p className="mb-4">
                            {!showRegister ? "Please enter your Email and Password" : "Please enter user details"}
                        </p>
                        {showRegister && (
                            <>
                                <Input name="firstName"
                                       type="text"
                                       value={firstName}
                                       label="First Name"
                                       handle={handleChange}/>
                                <Input name="lastName"
                                       type="text"
                                       value={lastName}
                                       label="Last Name"
                                       handle={handleChange}/>
                            </>
                        )}
                        <Input name="email"
                               type="email"
                               value={email}
                               label="Email"
                               handle={handleChange}/>
                        <Input name="password"
                               type="password"
                               value={password}
                               label="Password"
                               handle={handleChange}/>
                        {showRegister &&
                            <Input name="confirmPassword"
                                   type="password"
                                   value={confirmPassword}
                                   label="Confirm Password"
                                   handle={handleChange}/>}
                        {!showRegister ? (
                            <MDBBtn
                                className='lg btn-outline-primary btn-lg px-5'
                                color='light'
                                type='button'
                                onClick={() => handleLogin()}
                                active
                            >
                                Sign in
                            </MDBBtn>
                        ) : (
                            <MDBBtn
                                className='lg btn-outline-primary btn-lg px-5'
                                color='light'
                                type='button'
                                onClick={() => handleRegister()}
                            >
                                Sign Up
                            </MDBBtn>
                        )}
                    </div>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    )
}

export default Login