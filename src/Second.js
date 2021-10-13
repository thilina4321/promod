import { useParams } from "react-router-dom";

const Second = () => {
  const params = useParams();
  return (
    <div>
      <h1> This is the second page </h1>
      <p> UserName : {params.name} </p>
      <p> Password : {params.password} </p>
    </div>
  );
};

export default Second;
