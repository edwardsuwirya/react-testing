import axios from 'axios';

export const LoginRepository = () => {
    const userAuthentication = async (userName, password) => {
        console.log(userName + " " + password);
        try {
            const resp = await axios.post(`http://localhost:3000/enigma/login`, {
                userName: userName,
                password: password
            });
            console.log(resp.data);
            return true
        } catch (error) {
            return false
        }
    }

    return {
        userAuthentication,
    };
};
