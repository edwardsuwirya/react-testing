import {Route, Routes} from 'react-router-dom';
import LoginScreen from "../features/login/LoginScreen";
import Counter from "../features/counter/Counter";
import {LoginBloc} from "../features/login/LoginBloc";
import {LoginRepository} from "../features/login/LoginRepository";
import NotFound from "../features/notfound/NotFound";
import {RouteNavigation} from "./RouteNavigation";
import UseLogin from "../features/login/LoginState";
import PostingListScreen from "../features/posting/PostingListScreen";
import {PostingListBloc} from "../features/posting/PostingListBloc";
import {PostingListRepository} from "../features/posting/PostingListRepository";
import UsePostingList from "../features/posting/PostingListState";

const AppRouters = () => {
    return (
        <Routes>
            <Route path="/"
                   element={<LoginScreen bloc={() => LoginBloc(LoginRepository, RouteNavigation, UseLogin)}/>}/>
            <Route path="/counter" element={<Counter/>}/>
            <Route path="/posting-list" element={<PostingListScreen bloc={() => PostingListBloc(PostingListRepository,UsePostingList)}/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}

export default AppRouters;
