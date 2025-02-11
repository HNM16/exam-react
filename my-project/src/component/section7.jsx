import brand1 from "../assets/img/Group 713.png";
import brand2 from "../assets/img/Group 714.png";
import brand3 from "../assets/img/Group 715.png";
import brand4 from "../assets/img/Group 716.png";
import brand5 from "../assets/img/Group 717.png";
import brand6 from "../assets/img/Group 718.png";



export default function Request() {
    return (
      <>
        <div className="bg4">
          <div className="request">
            <div className="zayavka">
              <h1>Попадите на радары инвесторов и партнеров</h1>
              <p>
                В результате прохождения обучения мы создадим профили вашей
                компании на всех международных скаутинговых площадках
              </p>
              <button className="btn5">Записаться в акселератор</button>
                    </div>
                    <div className="brands1">
                        <div className="row1">
<img src={brand1} alt="" />
<img src={brand2} alt="" />
<img src={brand3} alt="" />
                        </div>
                        <div className="row2">
<img src={brand4} alt="" />
<img src={brand5} alt="" />
<img src={brand6} alt="" />

                        </div>
                    </div>
          </div>
        </div>
      </>
    );
}