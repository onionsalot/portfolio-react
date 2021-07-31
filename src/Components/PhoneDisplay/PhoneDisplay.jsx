import "./PhoneDisplay.scss";
// import phone from "../../images/Phone.gif"

export default function PhoneDisplay( {phoneClass, video}) {
  return (
    <>
      <div className={phoneClass}>
        <div className="content">
          <img src={video} alt="" />
        </div>
      </div>
    </>
  );
}
