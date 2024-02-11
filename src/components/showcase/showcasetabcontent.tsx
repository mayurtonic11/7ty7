// ShowcaseTabContent
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
interface ShowcaseTabContentProps {
  activeTab: string;
}
const ShowcaseTabContent: FC<ShowcaseTabContentProps> = ({ activeTab }) => {
  return (
    <>
      <div
        className={`tab-pane fade ${
          activeTab === "pills-corpevents" ? "show active" : ""
        }`}
        id="pills-corpevents"
        role="tabpanel"
      >
        <div className="row g-4">
          <div className="col-md-8">
            <Link href="" className="card">
              <div className="card-image zoom-hover">
                <picture>
                  <Image
                    src="/images/showcase/showcase-one.jpg"
                    className="card-img"
                    fill
                    alt="showcase"
                  />
                </picture>
              </div>
              <div className="card-img-overlay">
                <h5 className="card-title">Luxury & Experiential Tourism</h5>
                <p className="card-text">
                  We curate experiences with Live Concerts, leaving the audience
                  spellbound and craving for more
                </p>
                <p className="card-btn">
                  <Image
                    src="/images/showcase/btn.svg"
                    className="img-fluid"
                    height={15}
                    width={21}
                    alt="Showcase"
                  />
                </p>
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link href="" className="card">
              <div className="card-image zoom-hover">
                <picture>
                  <Image
                    src="/images/showcase/showcase-two.jpg"
                    className="card-img"
                    fill
                    alt="showcase"
                  />
                </picture>
              </div>
              <div className="card-img-overlay">
                <h5 className="card-title">Luxury & Experiential Tourism</h5>
                <p className="card-text">
                  We curate experiences with Live Concerts, leaving the audience
                  spellbound and craving for more
                </p>
                <p className="card-btn">
                  <Image
                    src="/images/showcase/btn.svg"
                    className="img-fluid"
                    height={15}
                    width={21}
                    alt="Showcase"
                  />
                </p>
              </div>
            </Link>
          </div>
          <div className="col-md-6">
            <Link href="" className="card">
              <div className="card-image zoom-hover">
                <picture>
                  <Image
                    src="/images/showcase/showcase-one.jpg"
                    className="card-img"
                    fill
                    alt="showcase"
                  />
                </picture>
              </div>
              <div className="card-img-overlay">
                <h5 className="card-title">Luxury & Experiential Tourism</h5>
                <p className="card-text">
                  We curate experiences with Live Concerts, leaving the audience
                  spellbound and craving for more
                </p>
                <p className="card-btn">
                  <Image
                    src="/images/showcase/btn.svg"
                    className="img-fluid"
                    height={15}
                    width={21}
                    alt="Showcase"
                  />
                </p>
              </div>
            </Link>
          </div>
          <div className="col-md-6">
            <Link href="" className="card">
              <div className="card-image zoom-hover">
                <picture>
                  <Image
                    src="/images/showcase/showcase-one.jpg"
                    className="card-img"
                    fill
                    alt="showcase"
                  />
                </picture>
              </div>
              <div className="card-img-overlay">
                <h5 className="card-title">Luxury & Experiential Tourism</h5>
                <p className="card-text">
                  We curate experiences with Live Concerts, leaving the audience
                  spellbound and craving for more
                </p>
                <p className="card-btn">
                  <Image
                    src="/images/showcase/btn.svg"
                    className="img-fluid"
                    height={15}
                    width={21}
                    alt="Showcase"
                  />
                </p>
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link href="" className="card">
              <div className="card-image zoom-hover">
                <picture>
                  <Image
                    src="/images/showcase/showcase-two.jpg"
                    className="card-img"
                    fill
                    alt="showcase"
                  />
                </picture>
              </div>
              <div className="card-img-overlay">
                <h5 className="card-title">Luxury & Experiential Tourism</h5>
                <p className="card-text">
                  We curate experiences with Live Concerts, leaving the audience
                  spellbound and craving for more
                </p>
                <p className="card-btn">
                  <Image
                    src="/images/showcase/btn.svg"
                    className="img-fluid"
                    height={15}
                    width={21}
                    alt="Showcase"
                  />
                </p>
              </div>
            </Link>
          </div>
          <div className="col-md-8">
            <Link href="" className="card">
              <div className="card-image zoom-hover">
                <picture>
                  <Image
                    src="/images/showcase/showcase-one.jpg"
                    className="card-img"
                    fill
                    alt="showcase"
                  />
                </picture>
              </div>
              <div className="card-img-overlay">
                <h5 className="card-title">Luxury & Experiential Tourism</h5>
                <p className="card-text">
                  We curate experiences with Live Concerts, leaving the audience
                  spellbound and craving for more
                </p>
                <p className="card-btn">
                  <Image
                    src="/images/showcase/btn.svg"
                    className="img-fluid"
                    height={15}
                    width={21}
                    alt="Showcase"
                  />
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`tab-pane fade ${
          activeTab === "pills-consertfestival" ? "show active" : ""
        }`}
        id="pills-consertfestival"
        role="tabpanel"
      >
        <div className="row g-4">
          <div className="col-md-8">
            <Link href="" className="card">
              <div className="card-image zoom-hover">
                <picture>
                  <Image
                    src="/images/showcase/showcase-one.jpg"
                    className="card-img"
                    fill
                    alt="showcase"
                  />
                </picture>
              </div>
              <div className="card-img-overlay">
                <h5 className="card-title">Luxury & Experiential Tourism</h5>
                <p className="card-text">
                  We curate experiences with Live Concerts, leaving the audience
                  spellbound and craving for more
                </p>
                <p className="card-btn">
                  <Image
                    src="/images/showcase/btn.svg"
                    className="img-fluid"
                    height={15}
                    width={21}
                    alt="Showcase"
                  />
                </p>
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link href="" className="card">
              <div className="card-image zoom-hover">
                <picture>
                  <Image
                    src="/images/showcase/showcase-two.jpg"
                    className="card-img"
                    fill
                    alt="showcase"
                  />
                </picture>
              </div>
              <div className="card-img-overlay">
                <h5 className="card-title">Luxury & Experiential Tourism</h5>
                <p className="card-text">
                  We curate experiences with Live Concerts, leaving the audience
                  spellbound and craving for more
                </p>
                <p className="card-btn">
                  <Image
                    src="/images/showcase/btn.svg"
                    className="img-fluid"
                    height={15}
                    width={21}
                    alt="Showcase"
                  />
                </p>
              </div>
            </Link>
          </div>
          <div className="col-md-6">
            <Link href="" className="card">
              <div className="card-image zoom-hover">
                <picture>
                  <Image
                    src="/images/showcase/showcase-one.jpg"
                    className="card-img"
                    fill
                    alt="showcase"
                  />
                </picture>
              </div>
              <div className="card-img-overlay">
                <h5 className="card-title">Luxury & Experiential Tourism</h5>
                <p className="card-text">
                  We curate experiences with Live Concerts, leaving the audience
                  spellbound and craving for more
                </p>
                <p className="card-btn">
                  <Image
                    src="/images/showcase/btn.svg"
                    className="img-fluid"
                    height={15}
                    width={21}
                    alt="Showcase"
                  />
                </p>
              </div>
            </Link>
          </div>
          <div className="col-md-6">
            <Link href="" className="card">
              <div className="card-image zoom-hover">
                <picture>
                  <Image
                    src="/images/showcase/showcase-one.jpg"
                    className="card-img"
                    fill
                    alt="showcase"
                  />
                </picture>
              </div>
              <div className="card-img-overlay">
                <h5 className="card-title">Luxury & Experiential Tourism</h5>
                <p className="card-text">
                  We curate experiences with Live Concerts, leaving the audience
                  spellbound and craving for more
                </p>
                <p className="card-btn">
                  <Image
                    src="/images/showcase/btn.svg"
                    className="img-fluid"
                    height={15}
                    width={21}
                    alt="Showcase"
                  />
                </p>
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link href="" className="card">
              <div className="card-image zoom-hover">
                <picture>
                  <Image
                    src="/images/showcase/showcase-two.jpg"
                    className="card-img"
                    fill
                    alt="showcase"
                  />
                </picture>
              </div>
              <div className="card-img-overlay">
                <h5 className="card-title">Luxury & Experiential Tourism</h5>
                <p className="card-text">
                  We curate experiences with Live Concerts, leaving the audience
                  spellbound and craving for more
                </p>
                <p className="card-btn">
                  <Image
                    src="/images/showcase/btn.svg"
                    className="img-fluid"
                    height={15}
                    width={21}
                    alt="Showcase"
                  />
                </p>
              </div>
            </Link>
          </div>
          <div className="col-md-8">
            <Link href="" className="card">
              <div className="card-image zoom-hover">
                <picture>
                  <Image
                    src="/images/showcase/showcase-one.jpg"
                    className="card-img"
                    fill
                    alt="showcase"
                  />
                </picture>
              </div>
              <div className="card-img-overlay">
                <h5 className="card-title">Luxury & Experiential Tourism</h5>
                <p className="card-text">
                  We curate experiences with Live Concerts, leaving the audience
                  spellbound and craving for more
                </p>
                <p className="card-btn">
                  <Image
                    src="/images/showcase/btn.svg"
                    className="img-fluid"
                    height={15}
                    width={21}
                    alt="Showcase"
                  />
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`tab-pane fade ${
          activeTab === "pills-exhibitions" ? "show active" : ""
        }`}
        id="pills-exhibitions"
        role="tabpanel"
      >
        <div className="row g-4">
          <div className="col-md-8">
            <Link href="" className="card">
              <div className="card-image zoom-hover">
                <picture>
                  <Image
                    src="/images/showcase/showcase-one.jpg"
                    className="card-img"
                    fill
                    alt="showcase"
                  />
                </picture>
              </div>
              <div className="card-img-overlay">
                <h5 className="card-title">Luxury & Experiential Tourism</h5>
                <p className="card-text">
                  We curate experiences with Live Concerts, leaving the audience
                  spellbound and craving for more
                </p>
                <p className="card-btn">
                  <Image
                    src="/images/showcase/btn.svg"
                    className="img-fluid"
                    height={15}
                    width={21}
                    alt="Showcase"
                  />
                </p>
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link href="" className="card">
              <div className="card-image zoom-hover">
                <picture>
                  <Image
                    src="/images/showcase/showcase-two.jpg"
                    className="card-img"
                    fill
                    alt="showcase"
                  />
                </picture>
              </div>
              <div className="card-img-overlay">
                <h5 className="card-title">Luxury & Experiential Tourism</h5>
                <p className="card-text">
                  We curate experiences with Live Concerts, leaving the audience
                  spellbound and craving for more
                </p>
                <p className="card-btn">
                  <Image
                    src="/images/showcase/btn.svg"
                    className="img-fluid"
                    height={15}
                    width={21}
                    alt="Showcase"
                  />
                </p>
              </div>
            </Link>
          </div>
          <div className="col-md-6">
            <Link href="" className="card">
              <div className="card-image zoom-hover">
                <picture>
                  <Image
                    src="/images/showcase/showcase-one.jpg"
                    className="card-img"
                    fill
                    alt="showcase"
                  />
                </picture>
              </div>
              <div className="card-img-overlay">
                <h5 className="card-title">Luxury & Experiential Tourism</h5>
                <p className="card-text">
                  We curate experiences with Live Concerts, leaving the audience
                  spellbound and craving for more
                </p>
                <p className="card-btn">
                  <Image
                    src="/images/showcase/btn.svg"
                    className="img-fluid"
                    height={15}
                    width={21}
                    alt="Showcase"
                  />
                </p>
              </div>
            </Link>
          </div>
          <div className="col-md-6">
            <Link href="" className="card">
              <div className="card-image zoom-hover">
                <picture>
                  <Image
                    src="/images/showcase/showcase-one.jpg"
                    className="card-img"
                    fill
                    alt="showcase"
                  />
                </picture>
              </div>
              <div className="card-img-overlay">
                <h5 className="card-title">Luxury & Experiential Tourism</h5>
                <p className="card-text">
                  We curate experiences with Live Concerts, leaving the audience
                  spellbound and craving for more
                </p>
                <p className="card-btn">
                  <Image
                    src="/images/showcase/btn.svg"
                    className="img-fluid"
                    height={15}
                    width={21}
                    alt="Showcase"
                  />
                </p>
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link href="" className="card">
              <div className="card-image zoom-hover">
                <picture>
                  <Image
                    src="/images/showcase/showcase-two.jpg"
                    className="card-img"
                    fill
                    alt="showcase"
                  />
                </picture>
              </div>
              <div className="card-img-overlay">
                <h5 className="card-title">Luxury & Experiential Tourism</h5>
                <p className="card-text">
                  We curate experiences with Live Concerts, leaving the audience
                  spellbound and craving for more
                </p>
                <p className="card-btn">
                  <Image
                    src="/images/showcase/btn.svg"
                    className="img-fluid"
                    height={15}
                    width={21}
                    alt="Showcase"
                  />
                </p>
              </div>
            </Link>
          </div>
          <div className="col-md-8">
            <Link href="" className="card">
              <div className="card-image zoom-hover">
                <picture>
                  <Image
                    src="/images/showcase/showcase-one.jpg"
                    className="card-img"
                    fill
                    alt="showcase"
                  />
                </picture>
              </div>
              <div className="card-img-overlay">
                <h5 className="card-title">Luxury & Experiential Tourism</h5>
                <p className="card-text">
                  We curate experiences with Live Concerts, leaving the audience
                  spellbound and craving for more
                </p>
                <p className="card-btn">
                  <Image
                    src="/images/showcase/btn.svg"
                    className="img-fluid"
                    height={15}
                    width={21}
                    alt="Showcase"
                  />
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default ShowcaseTabContent;
