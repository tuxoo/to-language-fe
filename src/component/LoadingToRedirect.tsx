import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {MDBModal, MDBModalContent, MDBModalDialog} from "mdb-react-ui-kit";

const LoadingToRedirect = () => {
    const [count, setCount] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((current) => current - 1);
        }, 1000)

        count === 0 && navigate("/");

        return () => clearInterval(interval);
    }, [count, navigate]);
    return (
        <div className="vh-100 gradient-app">
            <MDBModal show={true}>
                <MDBModalDialog centered>
                    <MDBModalContent>
                        <p className="mt-3 px-5 text-center">Redirecting you in {count} sec</p>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </div>
    );
};

export default LoadingToRedirect