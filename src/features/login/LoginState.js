import {useState} from "react";

const UseLogin = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleUserNameChange = (event) => {
        setUserName(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleErrorChange = (msg) => {
        setError(msg);
    };

    return {
        userName, handleUserNameChange, password, handlePasswordChange, error, handleErrorChange
    }
}

export default UseLogin;
