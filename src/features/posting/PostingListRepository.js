import {Posting} from "./Posting";

export const PostingListRepository = () => {
    const getList = async ()=>{
        const p = new Promise((resolve,reject)=>{
            resolve([
                Posting("Posting 1","bla3x"),
                Posting("Posting 2","bla6x")
            ]);
        })
        return await p;
    }
    return {
        getList,
    };
};
