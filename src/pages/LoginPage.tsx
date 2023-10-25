import LoginForm from "../components/LoginForm/LoginForm.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store.tsx";

function LoginPage() {
  const data = useSelector((state: RootState) => state.auth.error);
  console.log(data)
  return (
   <LoginForm/>
  );
}

export default LoginPage;