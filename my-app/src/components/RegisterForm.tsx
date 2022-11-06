import { useNavigate } from "react-router-dom";

export const RegisterForm = ({ onSubmit }: any) => {
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    const form = {
      email: email.value,
      password: password.value,
    };
    await onSubmit(form);
    navigate("/signin");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="email" type="email" name="email" />
      <input placeholder="hasło" type="password" name="password" />
      <button>Zarejestruj</button>
    </form>
  );
};
