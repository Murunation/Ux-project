import "../../style/subCss/section.css";

export default function Section() {
  return (
    <div className="section">
      <div className="filterButton">
        <button>All</button>
        <button>UI design</button>
        <button>UX design</button>
        <button className="productButton">Product design</button>
        <button>Articles</button>
        <button>Tutorials</button>
        <button>News</button>
      </div>
    </div>
  );
}
