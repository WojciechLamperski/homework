import { UserContext } from "./UserProvider";
import { useContext } from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <p>Hej {user}</p>
      <button
        onClick={() => {
          signOut(auth);
          setUser(null);
          navigate("/signup");
        }}
      >
        Logout
      </button>
    </>
  );
};
