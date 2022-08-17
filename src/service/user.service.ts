import {AxiosPromise} from 'axios';
import {host} from "../http/axios";
import {User} from "../model/user.model";

export interface SignUpRequest {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
}

export interface SignInRequest {
    email: string,
    password: string,
}

export interface LoginResponse {
    accessToken: string,
    refreshToken: string,
    user: User,
}

const SIGN_IN_URL = 'v1/users/sign-in';
const SIGN_UP_URL = 'v1/users/sign-up';

class AuthService {
    public signIn(signInRequest: SignInRequest): AxiosPromise<LoginResponse> {
        return host.post<LoginResponse>(SIGN_IN_URL, signInRequest)
    }

    public signUp(signUpRequest: SignUpRequest): AxiosPromise<LoginResponse> {
        return host.post<LoginResponse>(SIGN_UP_URL, signUpRequest)
    }
}

export const authService = new AuthService()