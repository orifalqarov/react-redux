import { Link, useNavigate } from "react-router-dom";
import { logo } from "../../../public";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../helpers";
import { logOutUser } from "../../slice/auth";

const Navbar = () => {
  const dispatch= useDispatch()
const navigate= useNavigate()
  const logOutHandle=()=>{
    removeItem('token')
    dispatch(logOutUser())
    navigate('/login')
  }

  const { loggedIn, user } = useSelector((state) => state.authentication);
  return (
    <div className="container mt-3">
      <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
        <Link to="/">
          <img
            width={100}
            style={{ borderRadius: "10%" }}
            src={logo}
            alt="logo"
          />
        </Link>

        <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          {loggedIn ? (
            <>
              <p className="me-3 py-2 link-body-emphasis  text-decoration-none">
                {user.username}
              </p>
              <div>
                <button onClick={logOutHandle} className="btn btn-outline-danger "> Log out</button>
              </div>
            </>
          ) : (
            <>
              <Link
                className="me-3 py-2 link-body-emphasis  text-decoration-none"
                to={"/login"}
              >
                Login
              </Link>
              <Link
                className="me-3 py-2 link-body-emphasis text-decoration-none"
                to={"/register"}
              >
                Register
              </Link>
            </>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
