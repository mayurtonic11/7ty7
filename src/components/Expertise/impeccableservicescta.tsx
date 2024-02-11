import Link from "next/link";
const ImpeccableServicesCta = () => {
  return (
    <div>
      <section id="impeccable-services-cta">
        <div className="container">
          <div className="row cta">
            <div className="col-md-9">
              <h2>Add some magic to your events!</h2>
            </div>
            <div className="col-md-3">
              <div className="cta-button">
                <Link href="" className="main-btn">
                  Connect Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ImpeccableServicesCta;
