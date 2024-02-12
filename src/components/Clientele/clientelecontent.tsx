import Image from "next/image";
const ClienteleContent = () => {
      const imageNames = [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
      ];
  return (
    <div>
      <section id="clientele-content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="grid-container">
                {imageNames.map((word, index) => (
                  <div key={index} className="grid-item card zoom-hover">
                    <picture>
                      <Image
                        src={`/images/clientele/clientele-${word}.svg`}
                        className="img-fluid"
                        fill
                        alt={`Clientele ${word}`}
                      />
                    </picture>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ClienteleContent;
