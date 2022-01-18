import axios from 'axios';
import {LoginRepository} from "../features/login/LoginRepository";

describe('Login Repository', () => {
    jest.mock("axios");
    it('return response success', async () => {
        axios.post = jest.fn()
        axios.post.mockResolvedValue(() => Promise.resolve({}));
        const result = await LoginRepository().userAuthentication('', '');
        expect(axios.post).toHaveBeenCalledWith(`http://localhost:3000/enigma/login`, {
            userName: '',
            password: ''
        });
        expect(result).toEqual(true);
    });
    it('return response failed', async () => {
        axios.post = jest.fn();
        axios.post.mockRejectedValueOnce(() => Promise.reject("Error"));
        const result = await LoginRepository().userAuthentication('', '');
        expect(result).toEqual(false);
    });
})
