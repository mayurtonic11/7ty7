import Image from "next/image";
const ImpeccableServicesHeading = () => {
  return (
    <div>
      <section id="services" className="inner-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Expertise
                  </li>
                </ol>
              </nav>
            </div>
            <div className="col-12">
              <h2>
                Impeccable Services,
                <span className="special-heading">Seamless Execution</span>
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ImpeccableServicesHeading;
