import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { RegisterForm } from "./components/RegisterForm";
import { Route, Routes } from "react-router-dom";
import { LoginForm } from "./components/LoginForm";
import { Home } from "./components/Home";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext } from "react";
import { UserContext } from "./components/UserProvider";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        navigate("/home");
      }
      setUser(user?.email);
    });
    return unsub;
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <>
          <Routes>
            <Route
              path="signup"
              element={
                <RegisterForm
                  onSubmit={({ email, password }: any): any => {
                    createUserWithEmailAndPassword(auth, email, password);
                  }}
                />
              }
            />
            <Route
              path="signin"
              element={
                <LoginForm
                  onLogin={({ email, password }: any): any => {
                    signInWithEmailAndPassword(auth, email, password).then(
                      (u) => {
                        console.log(u);
                        setUser(email);
                      }
                    );
                  }}
                />
              }
            />
            <Route path="/" element={<RegisterForm />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </>
      </header>
    </div>
  );
}

export default App;
