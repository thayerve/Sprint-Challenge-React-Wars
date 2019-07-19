# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a library that was built to enable developers to code applications faster by having to write less code. We can write components that build DOM elements by using JSX, a sort of hybrid markup that brings JavaScript and HTML together. It has some powerful built-in tools like useState and useEffect that save us from having to write out complicated loops.

2. What does it mean to think in react?

Thinking about web development in terms of using React instead of plain JS means thinking modularly about building reusable, self-contained components for each element that will be rendered. 

3. Describe state.

State is a way to refer to an object in its current form. It keeps track of the value of changing data at a given point. The setState() function allows you to define a variable and a function that resets that variable when called. 

4. Describe props.

'Props' is used as shorthand for whatever properties will be passed to a function.

5. What are side effects, and how do you sync effects in a React component to state or prop changes?

A side effect is a function that runs after the DOM is rendered and can do things like fetching data and updating values and elements. You can use promises, like `.then()`, to update state after an effect runs.


