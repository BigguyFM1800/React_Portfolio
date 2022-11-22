import { Link } from "react-router-dom";

const HeaderPreview = () => {
  return (
    <article className="header">
      <h1 className="header-font white-text h1-tag">
        Hi, I'm <br></br>
        <em className="pink-text">Fhatuwani</em>
        <br></br>Full Stack Software Development
      </h1>
      <p className="gray-text p-tag">Software Development</p>
      <Link className="pink-text" to="/portfolio">
        Explore More
      </Link>
    </article>
  );
};

export default HeaderPreview;