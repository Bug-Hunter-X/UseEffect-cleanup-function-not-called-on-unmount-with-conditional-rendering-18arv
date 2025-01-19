# React useEffect Cleanup Function Issue with Conditional Rendering

This repository demonstrates a subtle bug related to the cleanup function in React's `useEffect` hook when used in conjunction with conditional rendering.  Specifically, the cleanup function might not be called when a component is unmounted due to a conditional re-render involving another component of the same type.

## Problem Description

The `MyComponent` uses `useEffect` to log 'Mounted' on mount and 'Unmounted' on unmount. When `MyComponent` is conditionally rendered and another instance is mounted, the cleanup function is not invoked properly, leading to memory leaks or unexpected behavior.

## Solution

The solution involves ensuring that the component that houses the conditional rendering has a unique key prop for each instance of `MyComponent`. This way, React treats them as distinct components, triggering appropriate mount and unmount lifecycle events.

## How to Reproduce

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the console logs to see the missing 'Unmounted' message.
5. Check the solution branch to see the corrected implementation.
