import ButtonCss from "../component/Button.module.css";

export default function Button(props) {
  // console.log(props);
  return (
    <div className="buttons">
      <button
        className={ButtonCss.btn}
        style={{
          backgroundColor: props.color,
          color: props.font,
          fontWeight: props.weight,
          translate: props.pos,
          paddingLeft: props.paddingL,
          paddingRight: props.paddingR,
        }}
        onClick={() => props.handleClick(props.symbol)}
      >
        {props.symbol}
      </button>
    </div>
  );
}
