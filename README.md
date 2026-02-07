// Behzad Ghabaei
// CS 81 - JavaScript
// Assignment 10A - Code Review: StudentCard component
// Instructor Seno
// 2/4/2026

# Module 10A – StudentCard Code Review

## Description
This is a React code review assignment. I reviewed the StudentCard component and added comments to explain the logic behind props, state, and interactivity. A ternary operator is used for a toggle function that uses a button. When the button is clicked the message on the button changes and the tile becomes smaller, or larger to include the bio.  Two files are used which are StudentCard.jsx and App.jsx. The use of Localhost was succesful.  We declare a function, inside tht Button component.  Implement the logic inside that function, then add onClick={toggleBio} to the <button> JSX. Inline style uses camelCasing and double curly braces style={{backgroundColor: 'blue' }}

## What I Learned
- How to use and identify props and state
- How toggle functionality works with useState
- How to better document and explain React components
- The elements were simple. Using p div img is really basic stuff. The syntax was a bit
- new and they could change the readability of the program. Errors could arise from the comments
- syntax. Also the import statement was needed and was critical for the visibiity of the student - card.  It was really difficult to push my files to github and I needed lots of help. I got
- help from github.com by creating a new repository. When a new repository is created in github,
- some push information is given. ( but not a lot )
- I learned about import statements and hooks from react which allow us to use useState,
- to build buttons and handle events, and passing to a function,
- to use the ternary operator to toggle back and forth.
- Hooks let you use different React features from your components. You can either use the built
- in Hooks or combine them to build your own.
- State lets a component "remember" information like user input. For example, a form component
- can use state to store the input value, useState declares a state variable that you can update
- directly.
 
## Screenshot
(Add a screenshot of the running component with your comments visible in the code editor)
This was my screen shot of the code.

<img width="1366" height="730" alt="Assign10A" src="https://github.com/user-attachments/assets/35166c3e-e105-402e-894f-87e003a24f6c" />

## Setup Instructions
1. "Create project with Vite:"
   `npm create vite@latest module10a-studentcard-review -- --template react`
2. "Navigate to project directory:"
   `cd module10a-studentcard-review`
3. "Install dependencies:"
   `npm install`
4. "Start the development server:"
   `npm run dev`
