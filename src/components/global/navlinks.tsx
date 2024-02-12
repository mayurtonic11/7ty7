import { usePathname } from "next/navigation";
import Link from "next/link";
const Navlinks = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="say-hello-btn">
        <Link
          className={`${pathname === "/contact-us" ? "active" : ""}`}
          href="/contact-us"
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
          className={`nav-link ${pathname === "/our-story" ? "active" : ""}`}
          href="/our-story"
        >
          Our Story
        </Link>
      </li>
      <li className="nav-item ">
        <Link
          className={`nav-link ${pathname === "/expertise" ? "active" : ""}`}
          href="/expertise"
        >
          Expertise
        </Link>
      </li>
      <li className="nav-item ">
        <Link
          className={`nav-link ${pathname === "/showcase" ? "active" : ""}`}
          href="/showcase"
        >
          Showcase
        </Link>
      </li>
      <li className="nav-item ">
        <Link
          className={`nav-link ${pathname === "/clientele" ? "active" : ""}`}
          href="/clientele"
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
          className={`nav-link ${pathname === "/blog" ? "active" : ""}`}
          href="/blog"
        >
          Insights
        </Link>
      </li>
      <li className="nav-item ">
        <Link
          className={`nav-link ${
            pathname === "/join-the-squad" ? "active" : ""
          }`}
          href="/join-the-squad"
        >
          Join the Squad
        </Link>
      </li>
    </>
  );
};
export default Navlinks;
