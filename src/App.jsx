import { Route, Routes } from "react-router-dom";
import { Home, Login, Register, Navbar } from "./components";
import { AuthService } from "./service/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { signSuccess } from "./slice/auth";
import { getItem } from "./helpers";
import { ArticleService } from "./service/article";
import { getArticleStart, getArticlesSuccess } from "./slice/article";
const App = () => {
  const dispatch = useDispatch();
  const getArticles = async () => {
    dispatch(getArticleStart())
    try {
      const res = await ArticleService.getArticles();
      console.log(res);
      dispatch(getArticlesSuccess(res))
    } catch (error) {
      console.log("err");
    }
  };

  const getUser = async () => {
    try {
      const res = await AuthService.getUser();
      dispatch(signSuccess(res.user));
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const token = getItem("token");
    if (token) {
      getUser();
    }
    getArticles();
  }, []);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
