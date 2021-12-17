import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../actions/actions";
import "./newUserPopup.scss";

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
        const newUser = {
            id: 20,
            name: nameForm,
            username: userNameForm,
            email: emailForm,
            address:{
                city: cityForm
            }
        }

        props.setTrigger(false)
        dispatch(addUser(newUser))
        
    }

    return (props.trigger) ? (
        <div id="popup">
            <div id="popupInner">
                Name: <input type="text" value={nameForm} onChange={nameFormValid} />
                User name: <input type="text" value={userNameForm} onChange={userNameFormValid} />
                Email: <input type="email" value={emailForm} onChange={emailFormValid} />
                City: <input type="text" value={cityForm} onChange={cityFormValid} />

                <button id="addNewUser" onClick={createNewUser}>
                    Add
                </button>

                <button id="closePopup"
                    onClick={() => props.setTrigger(false)}>
                    Cancel
                </button>
            </div>
        </div>
    ) : ""
}