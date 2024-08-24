import Signin from "../../components/Signin";
import { useDispatch } from "react-redux";
import { setCurrUser } from "../../store/userSlice";

export default function SigninPage() {
  const dispatch = useDispatch();
  return (
    <Signin setCurrUser={(user) => dispatch(setCurrUser(user))} />
  );
}
