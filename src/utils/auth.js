import { setStorage, getStorage, clearStorage } from './localStorage';

class Auth {
    
    constructor(){
        this.authenticated = false;
    }

    login(user,cb) {
        this.authenticated= true;
        setStorage('ra_session',user);
        cb();
    }

    logout(cb) {
        this.authenticated= false;
        clearStorage();
        cb();
    }

    isAuthenticated() {
        let session = getStorage('ra_session'); 
        if(!session){
            console.log('Is not authenticated');
        } else {
            this.authenticated = true;
            console.log('Is authenticated');
        }
        return this.authenticated;
    }
}

export default new Auth()