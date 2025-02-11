export default function Card({ number, title, text }) {
  return (
    <div className="box">
      <h2 className="num">{number}</h2>
      <h4 className="head">{title}</h4>
      <p className="desc">{text}</p>
    </div>
  );
}
