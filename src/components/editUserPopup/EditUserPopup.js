import "./editUserPopup.scss";

export function EditUserPopup(props){
    return (props.trigger) ? (
        <div id="popup">
            <div id="popupInner">
                Edit this account
                Name: <input type="text" />
                User name: <input type="text" />
                Email: <input type="email" />
                City: <input type="text" />

                <button id="addNewUser">Add</button>
                <button id="closePopup" 
                onClick={ () => props.setTrigger(false)}>
                Cancel
                </button>
            </div>
        </div>
    ) : ""
}