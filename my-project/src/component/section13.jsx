import img from "/src/assets/img/img7.1.png";
import img1 from "/src/assets/img/img7.2.png";
import img2 from "/src/assets/img/img7.3.png";

export default function Section13() {
  return (
    <>
      <h1 className="title-last">Мероприятия и события</h1>
      <div className="events-last">
        <div className="card-last">
          <img src={img} alt="" />
          <h4 className="card-title-last">Новый отчет по MENA</h4>
          <p className="card-text-last">
            Аналитический отчет по рынкам Ближнего Востока (инвесторы, объем
            раундов, ТОП сферы)
          </p>
        </div>
        <div className="card-last">
          <img src={img1} alt="" />
          <h4 className="card-title-last">Новый отчет по MENA</h4>
          <p className="card-text-last">
            Аналитический отчет по рынкам Ближнего Востока (инвесторы, объем
            раундов, ТОП сферы)
          </p>
        </div>
        <div className="card-last">
          <img src={img2} alt="" />
          <h4 className="card-title-last">Новый отчет по MENA</h4>
          <p className="card-text-last">
            Аналитический отчет по рынкам Ближнего Востока (инвесторы, объем
            раундов, ТОП сферы)
          </p>
        </div>
      </div>
    </>
  );
}
