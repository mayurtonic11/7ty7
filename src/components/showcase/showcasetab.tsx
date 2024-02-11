"use client";
import { useState } from "react";
import ShowcaseTabHeading from "@/components/showcase/showcasetabheading";
import ShowcaseTabContent from "@/components/showcase/showcasetabcontent";
const ShowcaseTab = () => {
  const [activeTab, setActiveTab] = useState<string>("pills-corpevents");
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };
  return (
    <>
      <section id="showcasetab">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <ShowcaseTabHeading
                  activeTab={activeTab}
                  handleTabClick={handleTabClick}
                />
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <ShowcaseTabContent activeTab={activeTab} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ShowcaseTab;
