import "../../style/subCss/title.css";
import Link from "../icons/Link";
import Medium from "../icons/Medium";
import Twit from "../icons/Twit";

export default function Title() {
  return (
    <section>
      <div className="leftsideInfo">
        <h1 className="main-title">Blog Posts</h1>
        <h1 className="sub-title">I think so, this is it.</h1>
        <p>
          Design begins after I begin to think about how to present an
          experience most successfully, whether a button I put in can solve a
          problem. The only point in design is not ui design, if the user does
          not have a good experience at the end of the product, the design will
          be considered unsuccessful in my opinion.
        </p>
        <div className="social">
          <div className="twitter">
            <Twit />
            <a href="">TWITTER</a>
          </div>
          <div className="link">
            <Link />
            <a href="#">LINKEDIN</a>
          </div>
          <div className="med">
            <Medium />
            <a href="#">MEDIUM</a>
          </div>
        </div>
      </div>
      <div className="rightImg">
        <img src="./Banner.png" alt="banner" />
      </div>
    </section>
  );
}
