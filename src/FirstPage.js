import { useState } from "react";
import { useHistory } from "react-router";

const FirstPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const onSubmitHandler = () => {
    history.push(`/second/${userName}/${password}`);
  };
  return (
    <div
      style={{
        width: "80%",
        margin: "auto",
        boxShadow: "2px 2px 2px rgba(0,0,0,0.2)",
      }}
    >
      <form onSubmit={onSubmitHandler}>
        <p> UserName </p>
        <input
          style={{ width: "90%", margin: "auto" }}
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <p> Password </p>
        <input
          style={{ width: "90%", margin: "auto" }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div style={{ height: "50px" }}></div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default FirstPage;
