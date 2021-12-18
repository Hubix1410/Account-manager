import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../actions/actions";
import "./userPopup.scss";

export function NewUserPopup(props) {

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

    function createNewUser(){

        if (nameForm.length <= 3) {
            alert("Name is too short.");
            return false;
        } else if (userNameForm.length <= 3) {
            alert("User name is too short.");
            return false;
        } else if (cityForm.length <= 3) {
            alert("City name is too short.");
            return false;
        }
        if (emailForm.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)) {
            
        } else {
            alert("Wrong email")
            return false;
        }

        const newUser = {
            id: 0,
            name: nameForm,
            username: userNameForm,
            email: emailForm,
            address:{
                city: cityForm
            }
        }

        props.setTrigger(false)
        dispatch(addUser(newUser))
        setName("");
        setUserName("");
        setCity("");
        setEmail("");
    }

    return (props.trigger) ? (
        <div id="addPopup">
            <div id="popupInner">

                <h2>Create <span>Account</span></h2>

                <input placeholder="Name" type="text" value={nameForm} onChange={nameFormValid} />
                <input placeholder="User name" type="text" value={userNameForm} onChange={userNameFormValid} />
                <input placeholder="Email" type="email" value={emailForm} onChange={emailFormValid} />
                <input placeholder="City" type="text" value={cityForm} onChange={cityFormValid} />

                <button id="addNewUser" onClick={createNewUser}>
                    Create
                </button>

                <button id="closePopup"
                    onClick={() => props.setTrigger(false)}>
                    Cancel
                </button>
            </div>
        </div>
    ) : ""
}