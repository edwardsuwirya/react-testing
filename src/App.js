import './App.css';
import LoginScreen from "./features/login/LoginScreen";
import {LoginRepository} from "./features/login/LoginRepository";
import {LoginBloc} from "./features/login/LoginBloc";

function App() {
  return (
    <LoginScreen bloc={()=>LoginBloc(LoginRepository)}/>
  );
}

export default App;
