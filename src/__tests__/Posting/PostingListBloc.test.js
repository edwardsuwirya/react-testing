import {PostingListBloc} from "../../features/posting/PostingListBloc";

describe('Posting List Bloc', () => {
    let repoMock = jest.fn();
    let setPostListMock = jest.fn();
    let getListMock = jest.fn();
    let usePostingListMock = jest.fn();

    beforeEach(() => {
        usePostingListMock.mockReturnValue({
            postList: [],
            setPostList: setPostListMock
        });
    });

    it('Should get post list success', async () => {
        getListMock.mockResolvedValue(["dummy"]);
        repoMock.mockReturnValue(
            {
                getList: getListMock
            }
        );
        await PostingListBloc(repoMock, usePostingListMock).onGetPostingList();
        expect(setPostListMock).toHaveBeenCalledWith(["dummy"])
    });
})
