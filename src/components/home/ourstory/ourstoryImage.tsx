import Image from "next/image";
const OurStoryImage = () => {
  return (
    <>
      <div className="circle-fill-icon ourstory-icon-object-one"></div>
      <div className="ourstory-images row">
        <div className="ourstory-image-one col-6">
          <div className="ourstory-image-one-dimension zoom-hover">
            <picture>
              <Image src="/images/home/ourstory-one.jpg" fill alt="ourstory" />
            </picture>
          </div>
          <div className="ourstory-image-two-dimension zoom-hover">
            <picture>
              <Image src="/images/home/ourstory-two.jpg" fill alt="ourstory" />
            </picture>
          </div>
          {/* <div className="our-story-play-btn">
            <picture>
              <Image
                src="/images/home/ourstory-play.svg"
                width={305}
                height={19}
                alt="ourstory"
              />
            </picture>
          </div> */}
        </div>
        <div className="ourstory-image-two col-6">
          <div className="circle-fill-icon ourstory-icon-object-two"></div>
          <div className="ourstory-image-three-dimension zoom-hover">
            <picture>
              <Image
                src="/images/home/ourstory-three.jpg"
                fill
                alt="ourstory"
              />
            </picture>
          </div>
          <div className="ourstory-icon-object-six">
            <picture>
              <Image
                src="/images/heart-icon.svg"
                height={26}
                width={29}
                alt="ourstory"
              />
            </picture>
          </div>
        </div>
      </div>
    </>
  );
};
export default OurStoryImage;
