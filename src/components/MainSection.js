import { useDispatch, useSelector } from "react-redux"
import { NewUserPopup } from "./newUserPopup/NewUserPopup";
import { addUser, initialAction, removeUser } from "./actions/actions";
import "./mainSection.scss";
import { useState } from "react";
import { DeleteUserPopup } from "./deleteUserPopup/DeleteUserPopup";
import { EditUserPopup } from "./editUserPopup/EditUserPopup";

export function MainSection() {

    const [addPopupController, setAddController] = useState(false);
    const [deletePopupController, setDeleteController] = useState(false);
    const [editPopupController, setEditController] = useState(false);
    const [currentID, setCurrentID] = useState(-1);

    const dispatch = useDispatch();
    let usersData = useSelector(store => store);


    function showUsers(data) {
        dispatch(initialAction(data));
    }

    function deleteProccess(index){
        setDeleteController(true);
        setCurrentID(index);
    }

    if (usersData.users.length === 0) {
        fetch('https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data')
            .then(response => response.json())
            .then(data => showUsers(data))
    }

    let usersMap = usersData.users.map((element, index) =>
        <div key={index} className="userDiv">
            <ul>
                <li>{element.id}</li>
                <li>{element.name}</li>
                <li>{element.username}</li>
                <li>{element.email}</li>
                <li>{element.address.city}</li>
                <li>
                    <button onClick={() => setEditController(true)}>
                        Edit
                    </button>
                </li>
                <li>
                    <button onClick={() => deleteProccess(index)}>
                        Remove
                    </button>
                </li>
            </ul>
        </div>
    )

    return (
        <div id="wrapper">

            <header id="header">
                <h1>Users list</h1>
                <button onClick={() => setAddController(true)}>Add new</button>
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

            <NewUserPopup
                trigger={addPopupController}
                setTrigger={setAddController}
            />

            <DeleteUserPopup
                trigger={deletePopupController}
                setTrigger={setDeleteController}
                index={currentID}
            />

            <EditUserPopup
                trigger={editPopupController}
                setTrigger={setEditController}
                index={currentID}
            />

        </div>

    )
}