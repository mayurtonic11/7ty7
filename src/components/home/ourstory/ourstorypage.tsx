import Image from "next/image";
import OurStorylink from "./ourstorylink";
import OurStoryheading from "./ourstorylinkheading";
import OurStoryImage from "./ourstoryImage";
import OurStoryContent from "./ourstorylcontent";
const OurStory = () => {
  return (
    <div>
      <section id="home-ourstory" className="section-spacing">
        <div className="container">
          <div className="row d-none d-md-flex">
            <div className="col-md-7">
              <OurStoryImage />
            </div>
            <div className="col-lg-5 pe-md-0">
              <div className="circle-fill-icon ourstory-icon-object-three"></div>
              <div className="ourstory-content">
                <OurStoryheading />
                <OurStoryContent />
                <div className="ourstory-btn">
                  <OurStorylink />
                </div>
                <div className="circle-fill-icon ourstory-icon-object-four"></div>
              </div>
              <div className="ourstory-icon-objecourstory-play.svgt-five">
                <picture>
                  <Image
                    src="/images/comment-icon.svg"
                    height={26}
                    width={29}
                    alt="ourstory"
                  />
                </picture>
              </div>
              <div className="circle-fill-icon ourstory-icon-object-seven"></div>
            </div>
          </div>
          <div className="row d-md-none d-flex">
            <div className="col-12">
              <OurStoryheading />
              <OurStoryImage />
              <OurStoryContent />
              <div className="ourstory-btn">
                <OurStorylink />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default OurStory;
