export default function Card({ img, p1, p2, p3, p4, p5, p6, p7 }) {
  return (
    <div className="card">
      <img className="card-img" src={img} alt="" />
      <h2 className="card-title">{p1}</h2>
      <h4>{p2}</h4>
      <p>{p3}</p>
      <p>{p4}</p>
      <p>{p5}</p>
      <p>{p6}</p>
      <p>{p7}</p>
      <hr />
      <div className="cont">
        <h4>Готовность</h4>
        <p>7 раб. дней</p>
      </div>
      <hr />
      <div className="cont">
        <h4>Язык</h4>
        <p>рус. / англ.</p>
      </div>
      <hr />
      <div className="cont">
        <h4>Стоимость</h4>
        <p className="price">$1 000 </p>
      </div>
      <p className="apply-btn">Оставить заявку</p>
    </div>
  );
}
