// const heading = React.createElement("h1", {id: "heading"}, "Hello World from React");
/**
 * React.createElement takes three args:
 * - first one is the tag
 * - second one are the attributes of the tag
 * - Third one is the value of the tag or the child
 *
 * crateElement() will create a object.
 * This object comes with props -- and the props are nothing but the value and the attributes
 *
 */

/**
 * Suppose we want to create something more complex
 *
 * <div id="parent">
 *  <div id="child">
 *    <h1>I am H1 tag</h1>
 *    <h2>I am H2 tag</h2>
 *  </div>
 *  <div id="child2">
 *    <h1>I am H1 tag</h1>
 *    <h2>I am H2 tag</h2>
 *  </div>
 * </div>
 * 
 * we will keep sending child tags in the third arg of the createElement. 
 * In case we have multiple tags at the same level, we will send an array
 */
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am H1 tag"),
    React.createElement("h2", {}, "I am H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am H1 tag"),
    React.createElement("h2", {}, "I am H2 tag"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); // render will create a h1 html tag from the object created by createElement
/**
 * React element (which is an object) === render ==> HTML element (understandable by browser)
 */
