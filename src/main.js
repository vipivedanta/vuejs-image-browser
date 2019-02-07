import Vue from 'vue';
import router from './routes';
import App from './App';
import store from './store';


new Vue({
    router : router,
    store : store,
    render : h => h (App)
}).$mount('#app');