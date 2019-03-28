import Vue from 'vue';
import Router from 'vue-router';
import Index from '../components/Index/Index.vue';
import Contact from '../components/Contact/Contace.vue';
import Event from '../components/Event/Event.vue';
import Listing from '../components/Listing/Listing.vue';
import Services from '../components/Services/Services.vue';

Vue.use(Router);

export default new Router({
    routes:[
        {
            path: '/',
            redirect: '/Home'
        },
        {
            path: '/Home',
            name: 'Index',
            component: Index
        },
        {
            path: '/Contact',
            name: Contact,
            component: Contact
        },
        {
            path: '/Event&Blog',
            name: Event,
            component: Event
        },
        {
            path: '/Listing',
            name: Listing,
            component: Listing
        },
        {
            path: '/Services',
            name: Services,
            component: Services
        }

    ]
})