import React, {useState} from 'react';

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";


function App() {
    const [userList, setUserList] = useState([]);

    const addUserHandler = (userName, userAge) => {
        setUserList((prevUserList) => {
            return [...prevUserList, {id: Math.random().toString(), name: userName, age: userAge}];
        });
    }

    return (
        <React.Fragment>
            <AddUser onAddUser={addUserHandler}/>
            <UsersList users={userList}/>
        </React.Fragment>
    );
}

export default App;
