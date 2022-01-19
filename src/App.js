import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouters from "./routes/Routers";

function App() {
    return (
        <BrowserRouter>
            <AppRouters/>
        </BrowserRouter>
    );
}

export default App;
