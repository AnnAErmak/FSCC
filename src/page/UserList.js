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
                    <ListGroup.Item
                        style={ {cursor: 'pointer'}}
                        active = {userList.id === 3}
                        onClick={() =>{
                            const u = userList.setSelectedList(userList)
                            console.log(u)
                        }}
                        key={userList.id}
                    >
                        {userList.name}

                    </ListGroup.Item>
                )}
            </ListGroup>
        </div>
    );
});

export default UserList;
