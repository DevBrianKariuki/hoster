
import { happycustomers, ratings, avatar1, avatar2, avatar3,  uptime, servers, customersupport, tiers, loadingspeed, networksecurity, hostingability } from './assets'
import { FaStar } from "react-icons/fa";

export const navLinks = [
    {
        id:'home',
        title:'Home',
        url:'home'
    },
    {
        id:'domain',
        title:'Domain',
        url:'domain'
    },
    {
        id:'web-hosting',
        title:'Web Hosting',
        url:'web-hosting'
    },
    {
        id:'reseller-hosting',
        title:'Reseller Hosting',
        url:'reseller-hosting'
    },
    {
        id:'servers',
        title:'Servers',
        url:'servers'
    },
    {
        id:'security',
        title:'Security',
        url:'security'
    },
]

export const clients = [
    {
        id:1,
        img: avatar1,
        testimony: 'Host provides solid value in VPS hosting with great prices that provide the best premium support and excellent up-time in the industry.',
        name: 'Mr. Israr Ahmad',
        rating: ratings
    },
    {
        id:2,
        img: avatar2,
        testimony: 'Being in education we need an interactive and user friendly online platform for admissions and registrations. Host offered us the complete package. ',
        name: 'Mr. Manoj Pillai',
        rating: ratings
    },
    {
        id:3,
        img: avatar3,
        testimony: 'My company has had a great long standing relationship with Host. Their response time and customer support has been a boon.',
        name: 'Mr. Yogesh Gosavi',
        rating: ratings
    },
]

export const whyUs = [
    {
        id:1,
        icon: loadingspeed,
        title:'Loading Speed',
        text: 'Our super-fast network with latest and modern technology ensures accelerated response time and processing along with swift website page loading speed.'
    },
    {
        id:2,
        icon: networksecurity,
        title:'Network Security',
        text: 'Our Certified Tier III and Green Data centers in India have the lowest latency with 4 different layers in our Software Defined Network.'
    },
    {
        id:3,
        icon: hostingability,
        title:'Hosting Reliability',
        text: 'Equipped with an advanced infrastructure and server architectures together with sufficient resources help create a robust platform that ensures business continuity.'
    },
]

export const pricing = [
    {
        id:'1',
        type: 'Wordpress Hosting',
        price: '799',
        description: 'All inclusive WordPress Hosting with 24/7 live support and pre-installed WP, theme and plugins.',
        features: ['Preinstalled WordPress','Preinstalled Themes/Plugins', 'Free Migration Assistance', 'WP Optimized Environment', '30 Days Money Back', '24x7 Support']
    },
    {
        id:'2',
        type: 'Shared Hosting',
        price: '600',
        description: 'Host multiple websites over our feature-rich shared hosting delivering 99.95% Uptime. Delivering 99.95% Uptime',
        features: ['Free Domain','Host Multiple Websites', 'Unmetered Bandwidth', 'Daily Backups', '99.95% Uptime', '24x7 Support']
    },
    {
        id:'3',
        type: 'VPS Hosting',
        price: '999',
        description: 'With private server environment, experience performance & reliability of managed hosting.',
        features: ['SSD Storage','Guaranteed CPU & RAM', 'cPanel/Plesk (Optional)', 'SSH/RDP Access', "30 Days Money Back", '24x7 Support']
    }
]

export const features = [
    {
        id:1,
        icon: happycustomers,
        title:"5000+",
        text: 'Happy Customers'
    },
    {
        id:2,
        icon: uptime,
        title:"Maximum",
        text: 'Uptime'
    },
    {
        id:3,
        icon: servers,
        title:"20+",
        text: 'Server Locations'
    },
    {
        id:4,
        icon: customersupport,
        title:"24/7",
        text: 'Customer Support'
    },
    {
        id:5,
        icon: tiers,
        title:"Tier 3",
        text: 'Certified Data Center'
    },
]