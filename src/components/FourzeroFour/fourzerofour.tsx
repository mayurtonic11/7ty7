import Link from "next/link";
import Image from "next/image";
const FourzeroFour = () => {
  return (
    <>
      <section id="four-zero-four" className="inner-section">
        <div className="container">
          <div className="row">
            <div className="col-12 four-zero-four-content">
              <picture>
                <Image
                  src="/images/four-zero-four.png"
                  className="img-fluid"
                  height={62} width={187}
                  alt="404"
                />
              </picture>
              <h3>Something went wrong.</h3>
              <Link href="/" className="main-btn">
                Back To Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default FourzeroFour;
