import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {fetchUserList} from "../http/userListApi";
import {Context} from "../index";
import {ListGroup} from "react-bootstrap";

const UserList = observer(() => {
    const{userList} = useContext(Context)

    useEffect(() => {
        fetchUserList().then(data => {userList.setUserList(data)
        })

    }, [])
    return (
        <div>
            <ListGroup>
                {userList.UserList.map(userList =>
                    <ListGroup.Item key={userList.id}>{userList.name} </ListGroup.Item>
                )}
            </ListGroup>
        </div>
    );
});

export default UserList;

/*                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>*/