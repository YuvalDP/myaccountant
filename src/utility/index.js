import { isAuthenticated } from '../services/loginServices';

export async function isValidUser(){
    debugger;
        const res = await isAuthenticated();
        if (res.data) {
            return true;
        } else {
            return false;
        }
};