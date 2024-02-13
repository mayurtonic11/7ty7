import OurJourneyContent from "@/components/OurStory/ourjourneycontent";
import OurstoryTimeline from "@/components/OurStory/ourstorytimeline";
import OurGuidingLight from "@/components/OurStory/ourguidinglight";
const OurJourney = () => {
  return (
    <div>
      <section id="our-journey" className="inner-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Our Story
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <OurJourneyContent />
      <OurstoryTimeline />
      <OurGuidingLight />
    </div>
  );
};
export default OurJourney;
