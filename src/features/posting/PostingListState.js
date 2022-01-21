import {useState} from "react";

const UsePostingList = () => {
    const [postList, setPostList] = useState([]);
    return {
        postList, setPostList
    }
}

export default UsePostingList;
