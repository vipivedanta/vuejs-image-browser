import qs from 'qs';

const CLIENT_ID = '326ca3cfd1dec84';
const CLIENT_SECRET = '88b25c522f94d721e8089aec66bcac90ffd6140a';
const CALLBACK_URL = 'http://localhost:8080/imgur/callback';
const ROOT_URL = 'http://api.imgur.com';

export default {

    login(){
        const queryString = {
            client_id : CLIENT_ID,
            response_type : 'token'
        }

        window.location = '${ROOT_URL}/oauth2/authorize?${qs.stringify(queryString)}';
    }
}