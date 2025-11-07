What is JSX, and why is it used?
 - JSX is a syntax extension for JavaScript that allows to write HTML like code directly within JavaScript. It is most commonly used with React for building user interfaces. Full form of JSX is - JavaScript XML.

What is the difference between State and Props?
 - Props are like commads passed down from parent components to their child they are read only data that helps to customize a component without letting the child mess with them directly, ensuring a one way flow of information. 
 State is a component's personal diary, holding changeable data that's managed internally, like a counter that updates when you click a button, triggering rerenders to keep the UI clean and interactive.

What is the useState hook, and how does it work?
 - The useState hook in React is a simple way to add changeable data to functional components. We can use it as const [value, setValue] = useState(initial), where 'value' holds the current state and 'setValue' updates it, triggering a rerender to keep the UI in sync.

How can you share state between components in React?
 - State can be shared in React by lifting it up to a common parent and passing it via props, using the Context API for global sharing, or applying state management libraries. We can also use URL parameters or local storage for continuous state sharing.

How is event handling done in React?
 - Event handling in React is done using camelCase event names and by passing functions as event handlers in JSX.