import {useParams} from "react-router-dom";


function UserId() {
  let {userName} = useParams();
  return (
    <>
      <Link to="/user">Back</Link>
    <h1>User: {userName} </h1>
    </>
  );
}

export default UserId;
