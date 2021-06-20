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
                {userList.UserList.map(uList =>
                    <ListGroup.Item
                        style={ {cursor: 'pointer'}}
                        active = {uList.id === userList.SelectedList.id}
                         onClick={() => userList.setSelectedList(uList)}
                        key={uList.id}
                    >
                        {uList.name}

                    </ListGroup.Item>
                )}
            </ListGroup>
        </div>
    );
});

export default UserList;
