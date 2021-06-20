import {LIST_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, STRINGLIST_ROUTE} from "./utils/consts";
import UserList from "./page/UserList";
import UserStringList from "./page/UserStringList";
import Auth from "./page/Auth";

export const authRoutes = [
    {
        path: LIST_ROUTE,
        Component:UserList
    },
    {
        path: STRINGLIST_ROUTE,
        Component: UserStringList
    },

]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component:Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
]