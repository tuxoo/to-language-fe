export interface SignUpDto {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}

export interface SignInDto {
    email: string,
    password: string
}

export interface TokenContainer {
    accessToken: string,
    refreshToken: string
}