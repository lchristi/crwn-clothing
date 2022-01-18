import { Link } from "react-router-dom";
import { useParams } from "react-router";
const HatsPage = (props) => {
  let {id} = useParams();
  return (
    //match - url: is the url of component - as in path
    //since HatsPage path is /hats - the url will be /hats
    //if path was / then it would stop at / and read no further
    <div>
      <Link to="/">Home</Link>
      <br />
      <h1>Hats Page: {id}</h1>
    </div>
  );
};

export default HatsPage;
