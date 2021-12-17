import { useDispatch } from "react-redux";
import { removeUser } from "../actions/actions";
import "./deleteUserPopup.scss";

export function DeleteUserPopup(props) {

    const dispatch = useDispatch()

    function deleteUserProccess(index) {
        props.setTrigger(false);
        dispatch(removeUser(index))
    }

    return (props.trigger) ? (
        <div id="popup">
            <div id="popupInner">
                <p> Are you sure you want to delete this <span>ACCOUNT?</span></p>

                <div id="buttonDiv">

                    <button className="approveDelete" onClick={() => deleteUserProccess(props.index)}>
                        Yes
                    </button>

                    <button className="cancelDelete" onClick={() => props.setTrigger(false)}>
                        No
                    </button>

                </div>
            </div>
        </div>
    ) : ""
}