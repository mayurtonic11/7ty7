import { usePathname } from "next/navigation";
import Link from "next/link";
const Navlinks = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="say-hello-btn">
        <Link
          className={`${pathname === "#" ? "active" : ""}`}
          href="#"
        >
          Say Hello!
        </Link>
      </div>
      <li className="nav-item ">
        <Link
          className={`nav-link ${pathname === "/" ? "active" : ""}`}
          href="/"
        >
          Home
        </Link>
      </li>
      <li className="nav-item ">
        <Link
          className={`nav-link ${pathname === "#" ? "active" : ""}`}
          href="#"
        >
          Our Story
        </Link>
      </li>
      <li className="nav-item ">
        <Link
          className={`nav-link ${pathname === "#" ? "active" : ""}`}
          href="#"
        >
          Expertise
        </Link>
      </li>
      <li className="nav-item ">
        <Link
          className={`nav-link ${pathname === "#" ? "active" : ""}`}
          href="#"
        >
          Showcase
        </Link>
      </li>
      <li className="nav-item ">
        <Link
          className={`nav-link ${pathname === "#" ? "active" : ""}`}
          href="#"
        >
          Clientele
        </Link>
      </li>
      <li className="nav-item ">
        <Link
          className={`nav-link ${pathname === "#" ? "active" : ""}`}
          href="#"
        >
          Buzz
        </Link>
      </li>
      <li className="nav-item ">
        <Link
          className={`nav-link ${pathname === "#" ? "active" : ""}`}
          href="#"
        >
          Insights
        </Link>
      </li>
      <li className="nav-item ">
        <Link
          className={`nav-link ${
            pathname === "#" ? "active" : ""
          }`}
          href="#"
        >
          Join the Squad
        </Link>
      </li>
    </>
  );
};
export default Navlinks;
