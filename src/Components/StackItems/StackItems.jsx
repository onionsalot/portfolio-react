import "./StackItems.scss";

export default function StackItems({ stackItem, setHoverItem }) {
  const name = stackItem.name;
  function onMouseEnter(e) {
    console.log(e.target.id);
    setHoverItem(e.target.id);
  }
  function onMouseLeave(e) {
    setHoverItem(null);
  }

  return (
    <div className="item tech-bottom" id={name} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {name}
    </div>
  );
}
