import Image from "next/image";
import Link from "next/link";
const ContactusContent = () => {
  return (
    <div>
      <div className="contactus-content">
        <h2>
          Get in <span className="special-heading">touch</span>
        </h2>
        <div className="row contactus-info">
          <div className="col-md-6">
            <ul className="list-unstyled">
              <li>
                <span>
                  <picture>
                    <Image
                      src="../images/location-icon.svg"
                      height={25}
                      width={25}
                      alt="logo"
                    />
                  </picture>
                  <h3>Mumbai</h3>
                </span>
                <p>
                  16th Floor, Aston Building, Shastri Nagar, Near Lokhandwala
                  Circle, Andheri West, Mumbai 400 053
                </p>
              </li>
              <li>
                <span>
                  <picture>
                    <Image
                      src="../images/phone-icon.svg"
                      height={25}
                      width={25}
                      alt="logo"
                    />
                  </picture>
                  <Link href="tel:02268777777">022-6877 7777</Link>
                </span>
              </li>
              <li>
                <span>
                  <picture>
                    <Image
                      src="../images/email-icon.svg"
                      height={25}
                      width={25}
                      alt="logo"
                    />
                  </picture>
                  <Link href="mailto:mailbox@7ty7.com">mailbox@7ty7.com</Link>
                </span>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul className="list-unstyled">
              <li>
                <span>
                  <picture>
                    <Image
                      src="../images/location-icon.svg"
                      height={25}
                      width={25}
                      alt="logo"
                    />
                  </picture>
                  <h3>Delhi</h3>
                </span>
                <p>Flat No. J-236, Sarita Vihar, New Delhi- 110076.</p>
              </li>
              <li>
                <span>
                  <picture>
                    <Image
                      src="../images/email-icon.svg"
                      height={25}
                      width={25}
                      alt="logo"
                    />
                  </picture>
                  <Link href="mailto:mailbox@7ty7.com">mailbox@7ty7.com</Link>
                </span>
              </li>
            </ul>
          </div>
          <div className="col-12">
            <p>
              If you have queries about your order or need any general
              information our customer service team will be happy to assist you
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactusContent;
