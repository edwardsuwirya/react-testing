import React from 'react';
import {cleanup, getByRole, render, screen, waitFor} from '@testing-library/react';
import PostingListScreen from "../../features/posting/PostingListScreen";


describe('Posting List Feature', () => {
    afterEach(cleanup);
    it('Should show post list successfully', async () => {
        const bloc = jest.fn();
        bloc.mockReturnValue({
            onGetPostingList: jest.fn(),
            postList : [{
                name: "Dummy",
                description: "Dummy Desc"
            },
                {
                    name: "Dummy 2",
                    description: "Dummy Desc 2"
                }]
        });
        render(
            <PostingListScreen bloc={bloc}/>
        )

        await waitFor(() => {
            const postItems = screen.getAllByTestId('postingItems')
            expect(screen.getByText('Dummy')).toBeInTheDocument();
            expect(screen.getByText('Dummy Desc')).toBeInTheDocument();
            expect(postItems.length).toBe(2);
        });

    });
});

