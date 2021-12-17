import { useState } from "react";
import { useDispatch } from "react-redux";
import { editUser } from "../actions/actions";
import "./userPopup.scss";

export function EditUserPopup(props) {
    const [nameForm, setName] = useState("");
    const [userNameForm, setUserName] = useState("");
    const [emailForm, setEmail] = useState("");
    const [cityForm, setCity] = useState("");

    const dispatch = useDispatch()

    function nameFormValid(element) {
        setName(element.target.value);
        console.log(nameForm);
    }

    function userNameFormValid(element) {
        setUserName(element.target.value);
        console.log(userNameForm)
    }

    function emailFormValid(element) {
        setEmail(element.target.value);
        console.log(emailForm)
    }

    function cityFormValid(element) {
        setCity(element.target.value);
        console.log(cityForm)
    }

    function createNewUser() {
        const editedUser = {
            id: 20,
            name: nameForm,
            username: userNameForm,
            email: emailForm,
            address: {
                city: cityForm
            }
        }

        props.setTrigger(false)
        dispatch(editUser(editedUser, props.index))
    }

    return (props.trigger) ? (
        <div id="editPopup">
            <div id="popupInner">
                <h2>Edit <span>Account</span></h2>

                <input placeholder="Name" type="text" value={nameForm} onChange={nameFormValid} />
                <input placeholder="User name" type="text" value={userNameForm} onChange={userNameFormValid} />
                <input placeholder="Email" type="email" value={emailForm} onChange={emailFormValid} />
                <input placeholder="City" type="text" value={cityForm} onChange={cityFormValid} />

                <button id="addNewUser" onClick={createNewUser}>
                    Edit
                </button>

                <button id="closePopup"
                    onClick={() => props.setTrigger(false)}>
                    Cancel
                </button>
            </div>
        </div>
    ) : ""
}