import { FC } from "react";
interface ShowcaseTabHeadingProps {
  activeTab: string;
  handleTabClick: (tabId: string) => void;
}
const ShowcaseTabHeading: FC<ShowcaseTabHeadingProps> = ({
  activeTab,
  handleTabClick,
}) => {
  return (
    <>
      <li className="nav-item" role="presentation">
        <button
          className={`nav-link ${
            activeTab === "pills-corpevents" ? "active" : ""
          }`}
          onClick={() => handleTabClick("pills-corpevents")}
        >
          Corporate Events
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className={`nav-link ${
            activeTab === "pills-consertfestival" ? "active" : ""
          }`}
          onClick={() => handleTabClick("pills-consertfestival")}
        >
          Concerts & Festivals
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className={`nav-link ${
            activeTab === "pills-exhibitions" ? "active" : ""
          }`}
          onClick={() => handleTabClick("pills-exhibitions")}
        >
          Exhibitions
        </button>
      </li>
    </>
  );
};
export default ShowcaseTabHeading;
