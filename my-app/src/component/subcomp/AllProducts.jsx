import "../../style/subCss/news.css";
export default function Products(prop) {
  return (
    <div className="card">
      <img src={prop.image} alt="img" />
      <p className="date">NOV 23 2020</p>
      <h3>{prop.title}</h3>
      <p className="descrip">{prop.description}</p>
      <a href="#">READ MORE</a>
    </div>
  );
}
