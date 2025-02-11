import img3 from "../assets/img/3.png"
import img4 from "../assets/img/Vector (4).png"
import img5 from "../assets/img/Vector(5).png"
import img6 from "../assets/img/123.png"


export default function Section4() {
    return (
      <div className="box6">
        <h1 className="h1" style={{ marginTop: "10%" }}>
          Об акселераторе IT бизнеса
        </h1>
        <p style={{ width: "70%", marginTop: "3%" }}>
          Программа акселератора расчитана на 8 недель интенсивного онлайн курса
          с вебинарами приглашенных экспертов по международным рынкам, разборами
          ваших идей и проектов
        </p>
        <div className="box7">
          <div className="box8">
            <img className="img4" src={img3} alt="" />
            <h2 style={{marginTop:"5%"}}>Месяца обучения</h2>
          </div>
          <div className="box8">
            <img className="img4" src={img4} alt="" />
            <h2 style={{marginTop:"5%"}}>Месяца обучения</h2>
          </div>
          <div className="box8">
            <img className="img4" src={img5} alt="" />
            <h2 style={{marginTop:"5%"}}>Месяца обучения</h2>
          </div>
            </div>
            <img className="img10" src={img6} alt="" />
      </div>
    );
}