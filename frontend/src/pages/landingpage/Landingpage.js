
import { Link } from "react-router-dom";

export default function Landingpage() {

  return (
    <div>
   <div>
      <Link to="/signin">
        <button>Sign In</button>
      </Link>
      <Link to="/signup">
        <button>Sign Up</button>
      </Link>
    </div>
    </div>
  );
}
