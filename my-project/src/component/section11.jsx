import img from "/src/assets/img/img5.5.png";
import img1 from "/src/assets/img/img5.1.png";
import img2 from "/src/assets/img/img5.2.png";
import img3 from "/src/assets/img/img5.3.png";
import img4 from "/src/assets/img/img5.4.png";
import img5 from "/src/assets/img/img5.6.png";
import img6 from "/src/assets/img/img6.1.png";
import img7 from "/src/assets/img/img6.2.png";
import img8 from "/src/assets/img/img6.3.png";
import img9 from "/src/assets/img/img6.4.png";
import img10 from "/src/assets/img/img6.5.png";
import img11 from "/src/assets/img/img6.6.png";
import img12 from "/src/assets/img/img6.7.png";
import img13 from "/src/assets/img/img6.8.png";

export default function Section11() {
  return (
    <>
      <h1 className="title-sf7">Эксперты и трекеры программы</h1>
      <div className="row-sf7">
        <img className="small-sf7" src={img} alt="" />
        <img className="big-sf7" src={img1} alt="" />
        <img className="big-sf7" src={img2} alt="" />
        <img className="big-sf8" src={img3} alt="" />
        <img className="big-sf9" src={img4} alt="" />
        <img className="small-sf7" src={img5} alt="" />
      </div>
      <div className="info-sf7">
        <div className="box-sf7">
          <h4>Юрий Ким</h4>
          <p>
            Проведение исследования целевой аудитории позволит сформировать
            Product market fit
          </p>
        </div>
        <div className="box-sf7">
          <h4>Эшли Абрамс</h4>
          <p>
            Проведение исследования целевой аудитории позволит сформировать
            Product market fit
          </p>
        </div>
        <div className="box-sf7">
          <h4>Фатими Юсуф</h4>
          <p>
            Проведение исследования целевой аудитории позволит сформировать
            Product market fit
          </p>
        </div>
        <div className="box-sf7">
          <h4>Майкл Донован</h4>
          <p>
            Проведение исследования целевой аудитории позволит сформировать
            Product market fit
          </p>
        </div>
      </div>
      <h1 className="title-sf7">Наши партнеры</h1>
      <div className="row-sf7">
        <img className="partner-sf7" src={img6} alt="" />
        <img className="partner-sf7" src={img7} alt="" />
        <img className="partner-sf7" src={img8} alt="" />
        <img className="partner-sf7" src={img9} alt="" />
      </div>
      <div className="row-sf7">
        <img className="partner-sf7" src={img10} alt="" />
        <img className="partner-sf7" src={img11} alt="" />
        <img className="partner-sf7" src={img12} alt="" />
        <img className="partner-sf7" src={img13} alt="" />
      </div>
    </>
  );
}
