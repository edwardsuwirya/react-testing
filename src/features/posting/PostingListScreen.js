import React, {useEffect} from 'react';

const PostingListScreen =  ({bloc}) => {
    const {
        onGetPostingList,
        postList
    } = bloc();

    useEffect(() => {
        onGetPostingList();
    }, []);

    const postingItems = postList.map((posting) =>
        <li data-testid="postingItems" key={posting.name}>
            <span>{posting.name}</span> <span>{posting.description}</span>
        </li>
    );
    return (
        <div>
            <ul>
                {postingItems}
            </ul>
        </div>
    );
}

export default PostingListScreen;
