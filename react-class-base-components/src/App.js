import UserFinder from "./components/UserFinder";
import UsersContext from "./store/users-context";

const DUMMY_USERS = [
    {id: 'u1', name: 'Bruno'},
    {id: 'u2', name: 'Vanessa'},
    {id: 'u3', name: 'Tales'},
];

function App() {
    const usersContext = {
        users: DUMMY_USERS
    }

    return (
        <UsersContext.Provider value={usersContext}>
            <UserFinder/>
        </UsersContext.Provider>
    );
}

export default App;
