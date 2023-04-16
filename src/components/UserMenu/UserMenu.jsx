import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "redux/operations";


const UserMenu = () => {
    const dispatch = useDispatch();
const {email} = useSelector(state=>state.user.user)
const {token} = useSelector(state=>state.user)
console.log(email)
    return(
        <>
            <p>{email}</p>
            <button onClick={()=>dispatch(logoutUser(token))}>Logout</button>
        </>
    )
}

export default UserMenu;