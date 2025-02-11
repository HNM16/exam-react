import logo from "../assets/img/logo.png"


export default function Navbar() {
    return (
      <div className="all">
        <div className="navbar">
          <img src={logo} alt="logo" />
          <div className="p">
            <p>Кто мы?</p>
            <p>Услуги</p>
            <p className="nav-text">Акселератор</p>
            <p>Новости</p>
          </div>
          <div className="">
            <button className="btn">Войти</button>
          </div>
        </div>

        <div className="start">
          <h1>Запустите </h1>
          <h1 className="techno">Tехнологический IT-бизнес </h1>
          <h1>на международных рынках</h1>
          <p>Открыт набор заявок на акселератор</p>
          <button className="btn11">Подать заявку</button>

        </div>
      </div>
    );

}