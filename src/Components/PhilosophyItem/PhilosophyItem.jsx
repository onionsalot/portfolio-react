import "./PhilosophyItem.scss";

export default function PhilosophyItem({
  idx,
  content,
  setHoverItem,
  hoverItem,
}) {
  const name = content.name;
  const text = content.text;
  const img = content.img;

  function onMouseOver(e) {
    setHoverItem(name);
  }
  function onMouseLeave(e) {
    setHoverItem("");
  }

  return (
    <div
      id={name}
      className="card"
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      <div className="card-heading highlight">
        <span className="highlighted-text main-text">{name}</span>
      </div>
      <div className="card-body main-text">
        <div className="top-hide"> <img src={img} alt="" /></div>
        {text}
        <div className="bot-hide"> <img src={img} alt="" /></div>
      </div>
    </div>
  );
}
