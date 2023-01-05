import "../style/header.css";

export default function Header() {
  return (
    <header>
      <div className="leftSide">
        <img className="logo" src="./Leap.svg" alt="logo" />
        <img className="hire" src="./Hire.svg" alt="" />
      </div>
      <div className="rightSide">
        <ul>
          <li>
            <a href="#">PORTFOLIO</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">BLOG</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">CV</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">STORE</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">FREELANCE</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">ABOUT</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
