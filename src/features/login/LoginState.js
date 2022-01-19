import {useState} from "react";

const UseLogin = () => {
    const [error, setError] = useState("");

    const handleErrorChange = (msg) => {
        setError(msg);
    };

    return {
        error, handleErrorChange
    }
}

export default UseLogin;
