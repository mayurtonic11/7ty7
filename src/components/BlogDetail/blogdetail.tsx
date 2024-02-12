import Image from "next/image";
const BlogHeading = () => {
  return (
    <div>
      <section id="blog-detail" className="inner-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="/blog">Insights</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Details
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h2>Restile won Grand Stand Award at Delhi Acetech 2017</h2>
              <p>
                7ty7 yet again proved that they are remarkable in delivering in
                what they promise. 7ty7 successfully executed the stall for
                Restile Ceramics Limited which was placed at ACE TECH in Delhi,
                2017. The event was held at the Pragati Maidan. Restile Ceramics
                is in the business of flooring tiles with a smart combination of
                latest technology and manpower. Just as Restile’s intention is
                to never compromise with anything, team 7ty7 also kept the
                objective in the mind when the stall was designed with utmost
                care. At the final day of the event, Restile Ceramics Limited
                won the title of “Grand Stand Award 2017” in the category
                Special Jury Recognition at ET Acetech.
              </p>
            </div>
            <div className="col-md-6 zoom-hover">
              <picture>
                <Image
                  src="/images/blog/blog-detail.jpg"
                  height={469}
                  width={601}
                  alt="Blog"
                />
              </picture>
            </div>
          </div>
          <div className="row pt-4 pt-md-5">
            <div className="col-md-6 zoom-hover order-2 order-md-1">
              <picture>
                <Image
                  src="/images/blog/blog-detail.jpg"
                  height={469}
                  width={601}
                  alt="Blog"
                />
              </picture>
            </div>
            <div className="col-md-6 align-self-center order-1 order-md-2">
              <p>
                The director of Restile Ceramics, Viren Rathod praised the team
                by saying, “This (the stall) was awarded under the categories of
                stall design, visibility, product display, product innovation,
                team interaction, walk through flow inside the stall. So
                basically it covers every category possible.” He continued by
                thanking the team for designing the stall that made justice to
                the location in the hall. The sleeplessness was seen in the
                team’s eyes as they implemented all small- small requests at the
                site.
              </p>
              <p>
                Towards the end, Viren wrote, “Sometimes feel that I am a part
                of your company, as I am deeply involved in every stage of it.
                We started off in Bengaluru, then Mumbai, and ended the year
                with a bang in Delhi. Love it! Your team deserves a good
                celebration! Thank you and let’s create magic in 2018 again!”
              </p>
            </div>
            <div className="col-12 py-4 py-md-5 order-3">
              <p>
                7ty7 yet again proved that they are remarkable in delivering in
                what they promise. 7ty7 successfully executed the stall for
                Restile Ceramics Limited which was placed at ACE TECH in Delhi,
                2017. The event was held at the Pragati Maidan. Restile Ceramics
                is in the business of flooring tiles with a smart combination of
                latest technology and manpower. Just as Restile’s intention is
                to never compromise with anything, team 7ty7 also kept the
                objective in the mind when the stall was designed with utmost
                care. At the final day of the event, Restile Ceramics Limited
                won the title of “Grand Stand Award 2017” in the category
                Special Jury Recognition at ET Acetech.
              </p>
              <p>
                7ty7 yet again proved that they are remarkable in delivering in
                what they promise. 7ty7 successfully executed the stall for
                Restile Ceramics Limited which was placed at ACE TECH in Delhi,
                2017. The event was held at the Pragati Maidan. Restile Ceramics
                is in the business of flooring tiles with a smart combination of
                latest technology and manpower. Just as Restile’s intention is
                to never compromise with anything, team 7ty7 also kept the
                objective in the mind when the stall was designed with utmost
                care. At the final day of the event, Restile Ceramics Limited
                won the title of “Grand Stand Award 2017” in the category
                Special Jury Recognition at ET Acetech.
              </p>
            </div>
          </div>
          <div className="row nextprev-btn">
            <div className="col-6">
              <button className="main-btn">Prev</button>
            </div>
            <div className="col-6 text-md-end">
              <button className="main-btn">Next</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default BlogHeading;
