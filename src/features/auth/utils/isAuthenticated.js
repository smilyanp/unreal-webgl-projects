import { getAuth } from "firebase/auth";
export const isAuthenticated = () => {
    const auth = getAuth();
    console.log('auth().currentUser', auth.currentUser);
    return auth.currentUser;
}
export const authGuard = (to, from, next) => {
    if (to.name !== 'Login' && !isAuthenticated()) {
        next({ name: 'Login' })
    }
    else {
        next()
    }
}