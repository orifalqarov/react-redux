import { useSelector } from "react-redux";
import { Loader } from "../../ui";

const Home = () => {
  const { articles, isLoading } = useSelector((state) => state.article);
  console.log(articles);

  return (
    <div className="album py-5  ">
      <div className="container">
        {isLoading && <Loader />}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {articles.articles.map((item) => (
            <div key={item.slug} className="col">
              <div className="card h-100 shadow-sm">
                <svg
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                </svg>
                <div className="card-body">
                  <p className="card-text fw-bold">{item.title}</p>
                  <p className="card-text ">{item.description}</p>
                  <div className="d-flex justify-content-between align-items-center"></div>
                  <div className="btn-group card-footer">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-primary"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-danger"
                    >
                      Delete
                    </button>
                  </div>
                  <small className="text-body-secondary fw-bold text-capitalize">
                    {item.author.username}
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
