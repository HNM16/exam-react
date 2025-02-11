import logo from "../assets/img/logo.png";

export default function Footer() {
  return (
    <>
      <footer className="bgfooter">
        <div className="logo-footer">
          <img src={logo} alt="" />
          <p>Все права защищены</p>
        </div>
        <div className="footer-text">
          <p>Кто мы?</p>
          <p>Услуги</p>
          <p>Акселератор</p>
          <p className="p99">Новости</p>
        </div>
        <div className="footer-desc">
          <p className="p99">Dubai, Single Business Tower 1503, Business Bay</p>
          <p className="p99">Sales@innoma.vc</p>
        </div>
      </footer>
    </>
  );
}
