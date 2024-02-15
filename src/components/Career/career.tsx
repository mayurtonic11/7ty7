import Adventure from "./adventure";
import CareerContent from "./careercontent";
import MeettheSquad from "./meetthesquad";
import MomentMagic from "./momentmagic";
const Career = () => {
  return (
    <div>
      <section id="career" className="inner-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Career
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <CareerContent />
      <MeettheSquad />
      <MomentMagic />
      <Adventure />
    </div>
  );
};
export default Career;
