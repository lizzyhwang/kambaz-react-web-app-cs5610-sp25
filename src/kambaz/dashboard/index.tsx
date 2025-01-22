import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link" >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h3>CS1234</h3>
              <p className="wd-dashboard-course-title">
                React JS </p>
              <button> Go </button>
            </div>
          </Link>
          <br />
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1235/Home"
            className="wd-dashboard-course-link" >
            <img src="/images/typescript.png" width={200} />
            <div>
              <h3>CS1235</h3>
              <p className="wd-dashboard-course-title">
                Typescript  </p>
              <button> Go </button>
            </div>
          </Link>
          <br />
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1236/Home"
            className="wd-dashboard-course-link" >
            <img src="/images/python.png" width={200} />
            <div>
              <h3>CS1236</h3>
              <p className="wd-dashboard-course-title">
                Python </p>
              <button> Go </button>
            </div>
          </Link>
          <br />
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1237/Home"
            className="wd-dashboard-course-link" >
            <img src="/images/java.png" width={200} />
            <div>
              <h3>CS1237</h3>
              <p className="wd-dashboard-course-title">
                Java </p>
              <button> Go </button>
            </div>
          </Link>
          <br />
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1238/Home"
            className="wd-dashboard-course-link" >
            <img src="/images/cpp.png" width={200} />
            <div>
              <h3>CS1238</h3>
              <p className="wd-dashboard-course-title">
                C++ </p>
              <button> Go </button>
            </div>
          </Link>
          <br />
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1239/Home"
            className="wd-dashboard-course-link" >
            <img src="/images/github.png" width={200} />
            <div>
              <h3>CS1239</h3>
              <p className="wd-dashboard-course-title">
                Github </p>
              <button> Go </button>
            </div>
          </Link>
          <br />
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1240/Home"
            className="wd-dashboard-course-link" >
            <img src="/images/aws.png" width={200} />
            <div>
              <h3>CS1240</h3>
              <p className="wd-dashboard-course-title">
                Github </p>
              <button> Go </button>
            </div>
          </Link>
          <br />
        </div>

      </div>
    </div>
  );
}
