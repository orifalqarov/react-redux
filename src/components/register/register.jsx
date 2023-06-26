import { Link, useNavigate } from "react-router-dom";
import { logo } from "../../../public";
import { Input } from "../../ui";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signFailure, signStart, signSuccess } from "../../slice/auth";
import { AuthService } from "../../service/auth";
import { Validation } from "../";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, loggedIn } = useSelector((state) => state.authentication);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registerHandle = async (e) => {
    e.preventDefault();
    dispatch(signStart());
    const user = { username: name, email, password };

    try {
      const response = await AuthService.userRegister(user);
      dispatch(signSuccess(response.user));
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
          <Link to={"/register"}>
            <img
              className="mb-4"
              src={logo}
              style={{ borderRadius: "10%" }}
              alt="logo"
              width="80"
              height=""
            />
          </Link>
          <h1 className="h3 mb-3 fw-normal">Please register</h1>
          <Validation />
          <Input label={"Username"} state={name} setState={setName} />
          <Input label={"Email address"} state={email} setState={setEmail} />
          <Input
            label={"Password"}
            type="password"
            state={password}
            setState={setPassword}
          />

          <button
            onClick={registerHandle}
            className="btn btn-primary w-100 py-2 mt-4"
            disabled={isLoading}
            type="submit"
          >
            {isLoading ? "loading..." : "Register"}
          </button>
        </form>
      </main>
    </div>
  );
};

export default Register;
