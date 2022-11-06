import { useNavigate } from "react-router-dom";

export const LoginForm = ({ onLogin }: any) => {
  const navigate = useNavigate();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await onLogin({
        email: e.target.elements.email.value,
        password: e.target.elements.password.value,
      });
      navigate("/home");
    } catch (err) {
      console.log("error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="email" type="email" name="email" />
      <input placeholder="hasło" type="password" name="password" />
      <button>Zaloguj</button>
    </form>
  );
};
