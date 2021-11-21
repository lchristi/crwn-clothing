import { Link } from "react-router-dom";
const HatsPage = (props) => (
  //match - url: is the url of component - as in path
  //since HatsPage path is /hats - the url will be /hats
  //if path was / then it would stop at / and read no further
  <div>
    <Link to="/">Home</Link>

    <h1>Hats Page</h1>
  </div>
);
export default HatsPage;
