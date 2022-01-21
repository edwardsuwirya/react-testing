import axios from 'axios';
import {LoginRepository} from "../../features/login/LoginRepository";

describe('Login Repository', () => {
    jest.mock("axios");
    it('return response success', async () => {
        axios.post = jest.fn()
        axios.post.mockResolvedValue({});
        const result = await LoginRepository().userAuthentication('123', '123');
        expect(axios.post).toHaveBeenCalledWith(`http://localhost:3000/enigma/login`, {
            userName: '123',
            password: '123'
        });
        expect(result).toBeTruthy();
    });
    it('return response failed', async () => {
        axios.post = jest.fn();
        axios.post.mockRejectedValueOnce();
        const result = await LoginRepository().userAuthentication('', '');
        expect(result).toBeFalsy();
    });
})
