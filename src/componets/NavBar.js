import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Nav, Navbar} from "react-bootstrap";
import {NavLink, useHistory} from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }
    return (
        <Navbar bg="dark" variant="dark">
            <NavLink style={{color: 'white'}} to = {LOGIN_ROUTE}> Расходы на машину</NavLink>
            {user.isAuth ?
            <Nav className="ml-auto" style={{color: 'white'}}>
                <Button variant={"outline-light"}
                onClick={() => logOut()}
                >
                    Выйти
                </Button>
            </Nav>
                :
                <Nav className="ml-auto" style={{color: 'white'}}>
                    <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Авторизация </Button>
                </Nav>
            }
        </Navbar>
    );
});

export default NavBar;