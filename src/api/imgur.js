import qs from 'qs';
import Axios from 'axios';

const CLIENT_ID = '326ca3cfd1dec84';
//const CLIENT_SECRET = '88b25c522f94d721e8089aec66bcac90ffd6140a';
const ROOT_URL = 'https://api.imgur.com';

export default {

    login(){
        const querystring = {
            client_id : CLIENT_ID,
            response_type : 'token'
        }

        window.location = ROOT_URL + '/oauth2/authorize?' + qs.stringify(querystring);
    },

    fetchImages(token){
        console.log(token)
        return Axios.get(ROOT_URL + '/3/account/me/images',{
            headers : {
                Authorization : 'Bearer ' + token
            } 
        });
    }
}