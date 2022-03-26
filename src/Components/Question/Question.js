import React from "react";
import "./Question.css";

const Question = () => {
  return (
    <div className="container bg-gray">
      <div className="row">
        <div className="col-md-4 my-4 col-sm-1 question">
          <h3>How does react work </h3>
          <p>
            React makes it painless to create interactive UIs.It defines the
            logical structure of documents and the way a document is accessed
            and manipulated.to make it faster, React implements a virtual DOM
            that is basically a DOM tree representation in JavaScript. So when
            it needs to read or write to the DOM, it will use the virtual
            representation of it. Then the virtual DOM will try to find the most
            efficient way to update the browser’s DOM.
          </p>
        </div>
        <div className="col-md-4 question col-sm-1">
          <div className="row">
            <h3>Props vs State </h3>
            <div className="col-md-6 ">
              <p> Props are read-only.</p>
              <p>Props are immutable.</p>
              <p>Props can be accessed by the child component. </p>
              <p>Stateless component can have Props. </p>
              <p> Props make components reusable.</p>
            </div>
            <div className="col-md-6 ">
              <p>State changes can be asynchronous.</p>
              <p>State is mutable.</p>
              <p>State cannot be accessed by child components.</p>
              <p>Stateless components cannot have State.</p>
              <p>State cannot make components reusable.</p>
              <p></p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-1 question">
          <h3>How useState work</h3>
          <p>
            useState is a Hook (function) that allows you to have state
            variables in functional components. You pass the initial state to
            this function and it returns a variable with the current state value
            (not necessarily the initial state) and another function to update
            this value.Whereas the state in a class is always an object, with
            Hooks, the state can be any type. Each piece of state holds a single
            value, which can be an object, an array, a boolean, or any other
            type you can imagine
          </p>
        </div>
      </div>
    </div>
  );
};

export default Question;
