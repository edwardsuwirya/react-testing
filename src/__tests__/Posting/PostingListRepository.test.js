import {PostingListRepository} from "../../features/posting/PostingListRepository";

describe('Post List Repository', () => {
    it('return response success', async () => {
        const result = await PostingListRepository().getList()
        expect(result.length).toBe(2)
    });

})
