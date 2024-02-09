import Link from "next/link";
const Logo = () => {
  return (
    <Link className="navbar-brand" href="#">
      <picture>
        <img src="../images/logo.svg" height={70} width={175} alt="logo" />
      </picture>
    </Link>
  );
};
export default Logo;
