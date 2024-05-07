import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!"
// );

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am a H1 tag"),
//     React.createElement("h2", {}, "I am a H2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I am a H1 tag"),
//     React.createElement("h2", {}, "I am a H2 tag"),
//   ]),
// ]);

// const jsxHeading = <h1 id="heading">Namaste React using JSX🚀</h1>;

const Title = () => <h1 id="heading">Namaste React using JSX🚀</h1>;
const name = "Shailendra";

// Component Composition
const HeadingComponent = () => (
  <div>
    <Title />
    <h1>Heading Component by {name}</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);
root.render(<HeadingComponent />);
