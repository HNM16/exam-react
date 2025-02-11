import img from "/src/assets/img/img8.1.png"
import img1 from "/src/assets/img/img8.2.png"
import img2 from "/src/assets/img/inp.png"

export default function Section14() {
    return (
      <>
        <div className="back1">
          <div className="bback" style={{ width: "80%", margin: "auto" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "84px",
              }}
            >
              <div>
                <h2 className="p99" style={{ color: "white" }}>Остались вопросы?</h2>
                <p className="p99">Оставьте заявку и наша команда свяжется с вами</p>
              </div>
              <div>
                <p>Или напишите нам:</p>
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <img src={img} alt="" />
                    <p>Telegram</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <img src={img1} alt="" />
                    <p>Whatsapp</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-container">
              <input type="text" placeholder="Имя" className="input-pole" />
              <input type="email" placeholder="Почта" className="input-pole" />
              <div className="phone-input">
                <span className="down-icon"></span>
                <span className="phone-code">(+971)</span>
                <span className="flag">🇦🇪</span>
              </div>
              <button className="submit-button">Оставить заявку</button>
            </div>
          </div>
        </div>
      </>
    );
}