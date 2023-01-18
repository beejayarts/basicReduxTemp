import logo from "./logo.svg";
import "./App.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { createAddressBook } from "./redux/Actions/action";
import { useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.data);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const addNumber = async () => {
    await dispatch(
      createAddressBook({
        first_name: "beejay",
        last_name: "devi",
        email: "beejay@hairmarket.com",
        phone_number: 981537632,
        state_id: 2,
        city: "abeokuta",
        user_id: 32,
      })
    );
  };

  console.log(userData);

  return (
    <div className="App">
      <input value={name} type="text" />
      <input value={email} type="email" />

      <input value={password} type="password" />
      <button onClick={() => addNumber()}>submit</button>
    </div>
  );
}

export default App;
