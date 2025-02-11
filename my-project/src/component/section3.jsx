import wmn from "../assets/img/woman.png";

export default function Markets() {
  return (
    <div className="box87">
      <h2 className="header87">С какими рынками мы работаем?</h2>

      <div className="list87">
        <div className="item87 active87">Ближний восток</div>
        <div className="item87">Азия</div>
        <div className="item87">Латинская Америка</div>
        <div className="item87">Африка</div>
      </div>

      <div className="wrapper87">
        <div className="side87">
          <h3 className="small-header87">Чем интересен</h3>
          <h3 className="big-header87">РЫНОК MENA:</h3>
          <p className="text87">Саудовская Аравия, Оман, Бахрейн, Катар, Тунис, Египет, Алжир</p>
          <button className="button87">Выйти на рынок</button>

          <div className="person87">
            <img src={wmn} alt="" className="avatar87" />
            <span className="details87">Фатима <br /> Менеджер по MENA</span>
          </div>
        </div>

        <div className="grid87">
          <div className="card87">
            <span className="large87">5,5 <span className="unit87">Млрд</span></span>
            <span className="desc87">Инвестиции pre-seed, seed</span>
          </div>

          <div className="card87">
            <span className="large87">300</span>
            <span className="desc87">Акселераторов, инкубаторов</span>
          </div>

          <div className="card87">
            <span className="large87">73</span>
            <span className="desc87">Венчурных фонда</span>
          </div>

          <div className="card87 download87">
            <span className="icon87">↓</span>
            <span className="desc87">Скачать отчет по рынку MENA</span>
          </div>
        </div>
      </div>
    </div>
  );
}
