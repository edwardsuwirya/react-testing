export const PostingListBloc = (repo,usePostingList) => {
    const {getList} = repo();
    const {postList,setPostList} = usePostingList();

    const onGetPostingList = async () => {
        let list = await getList();
        setPostList(list);
    }
    return {
        postList,
        onGetPostingList
    };
};
