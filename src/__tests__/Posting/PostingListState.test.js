import React from "react";
import {act, renderHook} from "@testing-library/react-hooks";
import UsePostingList from "../../features/posting/PostingListState";

describe('Posting List State', () => {
    it('Should update state postList', () => {
        const {result} = renderHook(() => UsePostingList());
        act(() => {
            result.current.setPostList(["dummy"])
        })

        expect(result.current.postList.length).toBe(1);
    })
})
