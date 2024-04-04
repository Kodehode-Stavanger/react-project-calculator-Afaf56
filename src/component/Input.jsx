import InputCss from "../component/Input.module.css";

export default function Input(props) {
  // console.log(props);
  // function handleChange(e) {
  //   props.setText(e.target.value);
  // }

  return (
    <div className={InputCss.input}>
      <h3>{props.text}</h3>
    </div>
  );
}
