import { DatePipe } from '@angular/common';

export interface UserResponse {
    token: string;
    status: string;
    birthdate: DatePipe;
    username: string;
    password: string;
    email: string;
    id: BigInteger;
}

export interface LoginResponse {
    token: string;
    status: string;
    user : { id: string}
}