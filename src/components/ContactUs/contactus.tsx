import Image from "next/image";
import ContactusContent from "@/components/ContactUs/contactuscontent";
import ContactusForm from "@/components/ContactUs/contactusform";
const ContactUs = () => {
  return (
    <div>
      <section id="contact-us" className="inner-section">
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
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="circle-fill-icon contact-icon-object-one"></div>
              <ContactusContent />
              <div className="contact-icon-object-two">
                <picture>
                  <Image
                    src="/images/heart-icon.svg"
                    height={26}
                    width={29}
                    alt="ourstory"
                  />
                </picture>
              </div>
              <div className="circle-fill-icon contact-icon-object-three"></div>
            </div>
            <div className="col-md-6">
              <ContactusForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ContactUs;
