import { createRouter, createWebHistory } from "vue-router";

import LoginPage from "./components/LoginPage.vue";
import NavBar from './components/NavBar.vue'
import SideBar from "./components/SideBar.vue"
import SearchBar from "./components/SearchBar.vue"
import HomePage from "./components/HomePage.vue"
import EmployeeSum from "./components/EmployeeSum.vue"
import InfoPage from "./components/InfoPage.vue"
import InfoDetails from './components/InfoDetails.vue'
import AttendancePage from './components/AttendancePage.vue'
import CalendarPage from './components/CalendarPage.vue'

const routes = [
    {
        path: '/',
        component: LoginPage,
    },
    {
        path: '/NavBar',
        component: NavBar,
    },
    {
        path: '/SideBar',
        component: SideBar
    },
    {
        path: '/SearchBar',
        component: SearchBar
    },
    {
        path: '/HomePage',
        component: HomePage
    },
    {
        path: '/EmployeeSum',
        component: EmployeeSum
    },
    {
        path: '/InfoPage',
        component: InfoPage
    },
    {
        path: '/AttendancePage',
        component: AttendancePage
    },
    {
        path: '/InfoDetails',
        component: InfoDetails
    },
    {
        path: '/CalendarPage',
        component: CalendarPage
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router