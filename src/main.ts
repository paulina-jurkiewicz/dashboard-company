import { createApp }    from 'vue';
import App              from './App.vue'
import router           from './router'
// @ts-ignore
import Toaster          from '@meforma/vue-toaster'
import '@/assets/styles/main.scss';

createApp( App ).use( router ).use( Toaster ).mount( '#app' )

