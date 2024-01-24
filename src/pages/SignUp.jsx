import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../contexts/context";

export const SignUp = () => {
  const { state, dispatch } = useContext(Context);
  const [nameInput, setNameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");

  const handleChangeName = (e) => {
    setNameInput(e.target.value);
  };

  const handleChangeAge = (e) => {
    setAgeInput(parseInt(e.target.value));
  };

  const handleSave = () => {
    dispatch({
      type: "CHANGE_NAME",
      payload: nameInput,
    });
    dispatch({
      type: "CHANGE_AGE",
      payload: ageInput,
    });
  };

  return (
    <div>
      <h3>Tela SignUp </h3>
      <input
        type="text"
        placeholder="Digite um nome"
        value={nameInput}
        onChange={handleChangeName}
      />
      <input
        type="text"
        placeholder="Digite uma idade"
        value={ageInput}
        onChange={handleChangeAge}
      />
      <button onClick={handleSave}>Salvar</button>
      <br />
      <Link to="/exibir">Ir para ShowData</Link>
    </div>
  );
};
