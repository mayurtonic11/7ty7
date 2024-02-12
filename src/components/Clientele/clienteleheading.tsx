import Image from "next/image";
const ClienteleHeading = () => {
  return (
    <div>
      <section id="clientele" className="inner-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Clientele
                  </li>
                </ol>
              </nav>
            </div>
            <div className="col-12">
              <div className="circle-fill-icon clientele-icon-object-one"></div>
              <h2>
                Trusted by
                <span className="special-heading">The Best</span>
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ClienteleHeading;
