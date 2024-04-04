import Button from "./component/Button";
import Input from "./component/Input";
import AppCss from "../src/App.module.css";
import { useState } from "react";
import React from "react";

export default function App() {
  // const [darkMode, setDarkMode] = React.useState(true);

  // function toggleDarkMode() {
  //   setDarkMode((prevMode) => !prevMode);
  // }

  const backColor1 = "#C85401";
  const backColor2 = "#388187";

  const white = "#FEFFFC";

  const trans1 = "112px";
  const trans2 = "38px";

  const paddingLeft1 = "60px";
  const paddingRight1 = "60px";

  const paddingLeft2 = "33px";
  const paddingRight2 = "33px";

  const paddingLeft3 = "15px";
  const paddingRight3 = "15px";

  const weight = "2";

  const [text, setText] = useState([]);
  const operators = ["+", "-", "*", "/"];

  function addToText(val) {
    if (val === "." && text.includes(".")) {
      // If a dot is already present, do not add another dot
      return;
    }

    setText((text) => [...text, val]);
  }

  function zeroHandle(val) {
    if (val === "0" && text.length === 0) {
      console.log("Cannot add zero when no input is present");
      return;
    } else {
      setText((text) => [...text, val]);
    }
  }

  function resetInput() {
    setText([]);
  }

  function calculate() {
    try {
      const input = text.join("");
      setText([eval(input)]);
    } catch {
      setText("Error");
    }
  }

  function del() {
    const textD = text.slice(0, -1);
    setText(textD);
  }

  // function toggleDarkMode() {
  //   setDarkMode((prevMode) => !prevMode);
  // }

  return (
    <div>
      <div className={AppCss.app}>
        <div className={AppCss.header}>
          <span className={AppCss.calc}>calc</span>
          <span className={AppCss.theme}>THEME</span>
        </div>

        <Input text={text} />
        <div className={AppCss.wrapper}>
          <Button symbol="7" handleClick={addToText} />
          <Button symbol="8" handleClick={addToText} />
          <Button symbol="9" handleClick={addToText} />
          <Button
            symbol="DEL"
            color={backColor2}
            font={white}
            weight={weight}
            paddingL={paddingLeft3}
            paddingR={paddingRight3}
            handleClick={del}
          />
          <Button symbol="4" handleClick={addToText} />
          <Button symbol="5" handleClick={addToText} />
          <Button symbol="6" handleClick={addToText} />
          <Button symbol="+" handleClick={addToText} />
          <Button symbol="1" handleClick={addToText} />
          <Button symbol="2" handleClick={addToText} />
          <Button symbol="3" handleClick={addToText} />
          <Button symbol="-" handleClick={addToText} />
          <Button symbol="." handleClick={addToText} />
          <Button symbol="0" handleClick={zeroHandle} />
          <Button symbol="/" handleClick={addToText} />
          <Button symbol="*" handleClick={addToText} />

          <Button
            symbol="RESET"
            handleClick={resetInput}
            color={backColor2}
            font={white}
            pos={trans2}
            weight={weight}
            paddingL={paddingLeft2}
            paddingR={paddingRight2}
          />

          <Button
            symbol="="
            handleClick={calculate}
            color={backColor1}
            font={white}
            pos={trans1}
            weight={weight}
            paddingL={paddingLeft1}
            paddingR={paddingRight1}
          />
        </div>
      </div>
    </div>
  );
}
