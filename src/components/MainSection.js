import { useDispatch, useSelector } from "react-redux"
import { initialAction, removeUser } from "./actions/actions";
import "./mainSection.scss";

export function MainSection() {

    const dispatch = useDispatch();
    let usersData = useSelector(store => store);
    console.log(usersData);

    function showUsers(data) {
        dispatch(initialAction(data));
    }

    if (usersData.users.length === 0) {
        fetch('https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data')
            .then(response => response.json())
            .then(data => showUsers(data))
    }

    function editUser(index){
        console.log("editeded user: " + index);
    }

    let usersMap = usersData.users.map((element, index) =>
        <div key={index} className="userDiv">
            <ul>
                <li>{element.id}</li>
                <li>{element.name}</li>
                <li>{element.username}</li>
                <li>{element.email}</li>
                <li>{element.address.city}</li>
                <li><button onClick={() => editUser(index)}>Edit</button></li>
                <li><button onClick={() => dispatch(removeUser(index))}>Remove</button></li>
            </ul>
        </div>
    )

    return (
        <div id="wrapper">

            <header id="header">
                <h1>Users list</h1>
                <button>Add new</button>
            </header>

            <main id="userTable">
                <div id="menu">
                    <ul>
                        <li>Id</li>
                        <li>Name</li>
                        <li>User name</li>
                        <li>Email</li>
                        <li>City</li>
                        <li>Edit</li>
                        <li>Remove</li>
                    </ul>
                </div>
                {usersMap}
            </main>

            <footer id="footer">
                Webpage by Hubert Radzewicz
            </footer>

        </div>

    )
}