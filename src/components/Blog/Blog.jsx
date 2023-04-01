import React from 'react';

const Blog = () => {
    return (
        <div className='my-5' id='myAnswers'>
            <h2 className='text-center pb-2'>Question and Answers blog</h2>
            <div className='border border-3 p-3 mb-2 rounded'>
            <h3>Props vs state?</h3>
            <p>React state is mutable and it's value can be changed. Where as Props is immutable, it is read
                only. Props are used to send data from one one component to other, unidirectionally.
                State is local to a component. can not be used in othe components, But Props allow child components to read values from parent comoponents.
                Props comes as an object. We can not change it's content once it's asigned. But we can change the value of state by invoking setState function.
            </p>
            </div>
            <div className='border border-3 p-3 mb-2 rounded'>
            <h3>How does useState work?</h3>
            <p>We import the useState hook from react library and the invoke it inside a component.The useState hook allows us to track the state. We can set the initial value of the state by using useState hook.The useState hook returns two elements in an array. One is the initial value, other is a function. By destructuring, we can store the value in a variable. And we also get the function that can change theat value of the state.</p>
            </div>
            <div className='border border-3 p-3 mb-2 rounded'>
            <h3>Purpose of useEffect other than fetching data</h3>
            <p>The useEffect hook allows us to perform side effects in our components.
                Other than fetching data useEffect is also used to directly updating the DOM and timers.By using this Hook, we can tell React that your component needs to do something after render.
            </p>
            </div>
            <div className='border border-3 p-3 mb-2 rounded'>
            <h3>How Does React work?</h3>
            <p> React JS is a JavaScript-based UI development library.It divides the UI into different reusable components.React components work similarly to JavaScript functions. React maintains a virtual DOM and updates the only necessary parts/components of the UI promptly by using diff algorithm.</p>
            </div>
        </div>
    );
};

export default Blog;