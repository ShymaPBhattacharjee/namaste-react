import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => object => (render) => HTMLElement
// const heading = React.createElement("h1", { id: "heading" }, "Namaste React ");

// jsx element
// const title = (
//   <h1 id="heading" className="head">Namaste React from jsx element</h1>
// );

const TitleComponent = () => (
  <h1 id="heading" className="head">Namaste React from jsx</h1>
);


// const HeadingComponentNormal = function () {
//   return (
//   <div id="container">
//     <TitleComponent />
//     <h1> Namaste React Funtional Component </h1>
//   </div>
// )
// };

//passing jsx component into component i.e Component composition
const HeadingComponent = () => (
    <div id="container">
      <TitleComponent />
      {TitleComponent()}
      <h1> Namaste React Funtional Component </h1>
    </div>
  );

// passing jsx element
// const HeadingComponent = () => (
//     <div id="container">
//       {title}
//       <h1> Namaste React Funtional Component </h1>
//     </div>
//   );

const HeadingComponent2 = () => <h1> Namaste React Funtional Component </h1>

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
// root.render(jsxHeading);
root.render(<HeadingComponent />);


