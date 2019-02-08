import Vue from 'vue';
import VueRouter from 'vue-router';
import AuthHandler from './components/AuthHandler';
import Thankyou from './components/Thankyou';
import ImageUpload from './components/ImageUpload';
import ImageList from './components/ImageList';

Vue.use(VueRouter);
export default new VueRouter({
    mode : 'history',
    routes : [
        {
            path : '/imgur/callback',
            component : AuthHandler
        },
        {
            path : '/thank-you',
            component : Thankyou
        },
        {
            path : '/upload-image',
            component : ImageUpload
        },
        {
            path : '/browse-images',
            component : ImageList
        }
    ]
});