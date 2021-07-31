module Css = Button_Css;

[@react.component]
let make = (~className=?, ~onClick=?, ~children) => {
  <button ?onClick className={Cn.fromList([Css.button, className->Cn.take])}>
    children
  </button>;
};
