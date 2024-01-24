import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../contexts/context";

export const ShowData = () => {
  const { state } = useContext(Context);
  return (
    <div>
      Usuário logado: {state.user.name}
      <br />
      <Link to="/">Voltar para SignUp</Link>
    </div>
  );
};
