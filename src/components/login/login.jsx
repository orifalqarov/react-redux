import { Link, useNavigate } from "react-router-dom";
import { logo } from "../../../public";
import { Input } from "../../ui";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signFailure, signStart, signSuccess } from "../../slice/auth";
import { AuthService } from "../../service/auth";
import { Validation } from "../";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const {loading, loggedIn} = useSelector((state) => state.authentication);
  const navigate = useNavigate();
  const loginHandle = async (e) => {
    e.preventDefault();
    dispatch(signStart());
    let user = { email, password };
    try {
      let res = await AuthService.userLogin(user);
      dispatch(signSuccess(res.user));
      navigate("/");
    } catch (error) {
      dispatch(signFailure(error.response.data.errors));
    }
  };
  useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
  }, [loggedIn]);
  return (
    <div className="text-center m-auto w-25 ">
      <main className="form-signin w-100 m-auto">
        <form>
          <Link to={"/login"}>
            <img
              className="mb-4"
              src={logo}
              style={{ borderRadius: "10%" }}
              alt="logo"
              width="80"
              height=""
            />
          </Link>
          <h1 className="h3 mb-3 fw-normal">Please login</h1>
          <Validation />
          <Input label={"Email address"} state={email} setState={setEmail} />
          <Input
            label={"Password"}
            type="password"
            state={password}
            setState={setPassword}
          />

          <button
            onClick={loginHandle}
            disabled={loading}
            className="btn btn-primary w-100 py-2 mt-4"
            type="submit"
          >
            {loading ? "loading..." : "Login"}
          </button>
        </form>
      </main>
    </div>
  );
};

export default Login;
