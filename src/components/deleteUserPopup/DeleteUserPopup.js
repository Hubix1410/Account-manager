import { useDispatch } from "react-redux";
import { removeUser } from "../actions/actions";
import "./deleteUserPopup.scss";

export function DeleteUserPopup(props) {

    dispatch = useDispatch()

    function deleteUser(index){
        props.setTrigger(false);
        // //dispatch(removeUser(index))
    }

    return (props.trigger) ? (
        <div id="popup">
            <div id="popupInner">
                <p> Are you sure you want to delete this account?</p>
                <button className="approveDelete">Yes</button>

                // <button className="cancelDelete" onClick={() => deleteUser(props.index)}>
                //     No
                // </button>
            </div>
        </div>
    ) : ""
}