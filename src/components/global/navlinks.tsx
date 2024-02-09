import Link from "next/link";
const Navlinks = () => {
  return (
    <>
      <div className="say-hello-btn">
        <Link href="#">Say Hello!</Link>
      </div>
      <li className="nav-item dropdown">
        <Link className="nav-link" href="/">
          Home
        </Link>
      </li>
      <li className="nav-item dropdown">
        <Link className="nav-link" href="">
          Our Story
        </Link>
      </li>
      <li className="nav-item dropdown">
        <Link className="nav-link" href="">
          Expertise
        </Link>
      </li>
      <li className="nav-item dropdown">
        <Link className="nav-link" href="">
          Showcase
        </Link>
      </li>
      <li className="nav-item dropdown">
        <Link className="nav-link" href="">
          Clientele
        </Link>
      </li>
      <li className="nav-item dropdown">
        <Link className="nav-link" href="">
          Buzz
        </Link>
      </li>
      <li className="nav-item dropdown">
        <Link className="nav-link" href="">
          Insights
        </Link>
      </li>
      <li className="nav-item dropdown">
        <Link className="nav-link" href="">
          Join the Squad
        </Link>
      </li>
    </>
  );
};
export default Navlinks;
