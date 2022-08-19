import React, {useState} from "react";
import {toast} from "react-toastify";
import Input from "../component/Input";
import {MDBBtn} from "mdb-react-ui-kit";
import {useAppDispatch} from "../hook/hooks";
import {signIn} from "../store/slice/user.slice";

const initState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
}

const Login = () => {

    const dispatch = useAppDispatch();

    const [formValue, setFormValue] = useState(initState);
    const [showRegister, setShowRegister] = useState(false);

    const {firstName, lastName, email, password, confirmPassword} = formValue;

    const handleChange = (e: any) => {
        setFormValue({...formValue, [e.target.name]: e.target.value})
    };

    const handleLogin = async () => {
        if (email && password) {
            dispatch(signIn({email, password}))
        } else {
            toast.error("Please fill all input fields")
        }
    }

    // const handleRegister = async () => {
    //     if (password !== confirmPassword) {
    //         return toast.error("Password doesn't match");
    //     }
    //
    //     if (firstName && lastName && password && email) {
    //         await signUpUser({firstName, lastName, email, password});
    //     }
    // }
    //

    return (
        <section className='vh-100 gradient-app'>
            <div className="container py-4 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white">
                            <div className="card-body p-4 text-center">
                                <div className="mb-md-5 mt-md-4 pb-5">
                                    <h2 className="fw-bold mb-2">
                                        {!showRegister ? "Sign in to ToLanguage" : "Sign up to ToLanguage"}
                                    </h2>
                                    <p className="text-white-50 mb-4">
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
                                           type="text"
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
                                            className='lg btn-outline-light btn-lg px-5'
                                            color='dark'
                                            type='button'
                                            onClick={() => handleLogin()}
                                            active
                                        >
                                            Sign in
                                        </MDBBtn>
                                    ) : (
                                        <MDBBtn
                                            className='lg btn-outline-light btn-lg px-5'
                                            color='dark'
                                            type='button'
                                            // onClick={() => handleRegister()}
                                        >
                                            Register
                                        </MDBBtn>
                                    )}
                                </div>
                                <div>
                                    <h5 className="mb-0">
                                        {!showRegister ? (
                                            <>
                                                Don't have an account?
                                                <p
                                                    className="text-white-50 fw-bold"
                                                    style={{cursor: "pointer"}}
                                                    onClick={() => setShowRegister(true)}
                                                >
                                                    Sign Up
                                                </p>
                                            </>
                                        ) : (
                                            <>
                                                Already have an account?
                                                <p
                                                    className="text-white-50 fw-bold"
                                                    style={{cursor: "pointer"}}
                                                    onClick={() => setShowRegister(false)}
                                                >
                                                    Sign In
                                                </p>
                                            </>
                                        )}
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login