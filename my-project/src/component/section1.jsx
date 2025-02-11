import img1 from "../assets/img/img1.png";
import img2 from "../assets/img/rocket 1.png";

export default function Section1({h1}) {
  return (
    <div className="box1">
          <h1 className="h1">{h1}</h1>
      <div className="box2">
        <div className="box3">
          <h3 className="h1">Аналитические исследования</h3>
          <p className="p2">
            Одним из наших ключевых направлений является анализ технологических
            трендов на международных рынках. Мы проводим анализ на основе
            публичных исследований McKinsey, BCG, PWC, Deloitte, Accenture, BCG,
            EY, Crunchbase, Dealroom, F6S, PitchBook а также агрегируем и
            анализируем данные из открытых международных источников патенты,
            медиа, научные публикации
          </p>
          <button className="btn1">Узнать подробнее</button>
        </div>
        <img src={img1} alt="" />
      </div>
      <div className="box2">
        <img src={img2} alt="" />
        <div className="box3">
          <h3 className="h1">Онлайн акселератор для IT бизнеса</h3>
          <p className="p2">
            Одним из наших ключевых направлений является анализ технологических
            трендов на международных рынках. Мы проводим анализ на основе
            публичных исследований McKinsey, BCG, PWC, Deloitte, Accenture, BCG,
            EY, Crunchbase, Dealroom, F6S, PitchBook а также агрегируем и
            анализируем данные из открытых международных источников патенты,
            медиа, научные публикации
          </p>
          <button className="btn1">Узнать подробнее</button>
        </div>
      </div>
      <h1 className="h1" style={{ marginTop: "10%" }}>
        Для кого мы?
      </h1>
      <div className="box4" style={{marginTop:"5%"}}>
        <div className="box5">
          <h1 style={{ color: "#1178B280",fontSize:"50px",fontWeight:"700" }}>01</h1>
          <h2 style={{marginTop:"3%"}}>IT проекты на стадии идеи</h2>
          <p style={{marginTop:"3%"}}>
            Для стартапов, которые планируют привлечь международные инвестиции,
            протестировать спрос и запустить продукт
          </p>
        </div>
        <div className="box5">
          <h1 style={{ color: "#1178B280",fontSize:"50px",fontWeight:"700" }}>02</h1>
          <h2 style={{marginTop:"3%"}}>IT проекты на стадии идеи</h2>
          <p style={{marginTop:"3%"}}>
            Для стартапов, которые планируют привлечь международные инвестиции,
            протестировать спрос и запустить продукт
          </p>
        </div>
        <div className="box5">
          <h1 style={{ color: "#1178B280",fontSize:"50px",fontWeight:"700" }}>03</h1>
          <h2 style={{marginTop:"3%"}}>IT проекты на стадии идеи</h2>
          <p style={{marginTop:"3%"}}>
            Для стартапов, которые планируют привлечь международные инвестиции,
            протестировать спрос и запустить продукт
          </p>
        </div>
          </div>
          
          
    </div>
  );
}
