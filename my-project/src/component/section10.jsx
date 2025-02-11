import img from "/src/assets/img/img4.1.png";
import img1 from "/src/assets/img/img4.2.png";
import img2 from "/src/assets/img/img4.3.png";
import img3 from "/src/assets/img/img4.4.png";
import img4 from "/src/assets/img/img4.5.png";

export default function Section10() {
  return (
    <>
      <div className="section10-container">
        <img src={img} alt="" />
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img className="img4g" src={img4} alt="" />
      </div>
    </>
  );
}
