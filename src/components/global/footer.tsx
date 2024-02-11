import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <div className="circle-fill-icon footer-icon-object-one"></div>
              <div className="footer-icon-object-two">
                <picture>
                  <Image
                    src="/images/heart-icon.svg"
                    height={26}
                    width={29}
                    alt="ourstory"
                  />
                </picture>
              </div>
              <h3>
                Drop the FOMO and{" "}
                <span className="special-heading">Catch up with us!</span>
              </h3>
            </div>
            <div className="col-md-4">
              <div className="social-icons">
                <ul className="list-unstyled">
                  <li>
                    <Link href="#">
                      <picture>
                        <Image
                          src="../images/facebook.svg"
                          height={24}
                          width={25}
                          alt="Facebook"
                        />
                      </picture>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <picture>
                        <Image
                          src="../images/instagram.svg"
                          height={24}
                          width={25}
                          alt="Instagram"
                        />
                      </picture>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <picture>
                        <Image
                          src="../images/linkedin.svg"
                          height={24}
                          width={25}
                          alt="Linkedin"
                        />
                      </picture>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <picture>
                        <Image
                          src="../images/youtube.svg"
                          height={24}
                          width={25}
                          alt="Youtube"
                        />
                      </picture>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <picture>
                        <Image
                          src="../images/twitter.svg"
                          height={24}
                          width={25}
                          alt="Twitter"
                        />
                      </picture>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid p-0 m-0">
          <div className="m-0 p-0">
            <hr />
          </div>
        </div>
        <div className="container">
          <div className="row copyright">
            <div className="col-md-8">
              <span>© 7ty7. All Rights Reserved.</span>
            </div>
            <div className="col-md-4 text-center pe-md-0">
              <span>
                Website Agency
                <Link href="https://www.tonicworldwide.com/" target="_blank">
                  Tonic Worldwide
                </Link>
              </span>
            </div>
          </div>
        </div>
      </footer>
      <div className="mail-btn">
        <picture>
          <Image
            src="../images/mail-icon.svg"
            height={60}
            width={60}
            alt="Mail"
          />
        </picture>
      </div>
    </>
  );
};
export default Footer;
