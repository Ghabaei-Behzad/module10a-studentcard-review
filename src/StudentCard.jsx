// Behzad Ghabaei
// CS 81
// Assignment 10A
// Instructor Seno
// 2/4/2026

/**
 * The useState Hook provides those two things:
 * A state variable to retain the data between renders.
 * A state setter function to update the variable and trigger
 * React to render the component again.
 * Adding a state variable 
 * To add a state variable, import useState from React at the top of the file:
 * This import statement is really important. It must be included for StudentCard
 * to be visible, useState is a Hook from react.
 * const [state variale, and setter function] = useState(false).
 * The [ and ] syntax here is called array destructuring and it lets you read values
 * from an array. The array returned by useState always has exactly two items.
 * In React, useState, as well as any other function starting with “use”, is called a Hook.
 */
import React, { useState } from 'react';

/**
 * Here is a short summary on our component.
 * The StudentCard component is a UI "tile" designed to display a student's 
 * profile information. It demonstrates how to receive external data (props) 
 * and manage internal interactivity (state) to show or hide a bio.
 */
function StudentCard(props) {
  // 1. PROPS: We extract (destructure) the data passed from the parent (App.jsx).
  // These variables (name, major, etc.) are read-only and define what the card displays.
  // <StudentCard/> is inside a <div> and <StudentCard/> has an attibute of bio="I enjoy..."
  // the button makes bio reappear or dissappear. A ternary operator is used.
  //  We see bio has a sentence in App.jsx
  
  const { name, major, year, bio, imageUrl } = props;

  // 2. STATE: This initializes 'showBio' at boolean 'false'. 
  // 'showBio' holds the current visibility, and 'setShowBio' is the function used to update it.
  const [showBio, setShowBio] = useState(false);

  // 3. TOGGLE LOGIC: This function flips the state, on the button.
  // If 'showBio' is true, it becomes false (and vice versa) when the button is clicked.
  // This button function allows <div><StudentCard bio="I enjoyed..."/></div> to appear or hide.
  const toggleBio = () => {
    setShowBio(!showBio);
  };

  return (
    // 4. JSX STRUCTURE: The container div uses a JavaScript object for inline styling.
    // Here is the style for our <div> element.
    <div style={{
      maxWidth: '350px',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '12px',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      margin: '20px auto',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }}>
      {/* 5. IMAGE PROPS: The 'src' and 'alt' are dynamically set using the props we received. 
        * This produced a circular portrait, borderRadius allows this.
        */}
      <img
        src={imageUrl}
        alt={name + "'s profile"}
        style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', marginBottom: '12px' }}
      />
      
      {/* 6. DISPLAYING DATA: We use curly braces {} to inject the prop values into the HTML. */}
      <h2 style={{ margin: '0', fontSize: '22px' }}>{name}</h2>
      <p style={{ margin: '4px 0', fontSize: '16px' }}>{major} – {year}</p>

      {/* 
        * 7. EVENT HANDLING: The onClick listener triggers our toggleBio function.
        * The button text changes dynamically based on the current 'showBio' state. The ternary
        * operator demonstrates that If showBio is boolean true, then button will display 'Hide Bio'
        */}
      <button onClick={toggleBio} style={{
        marginTop: '12px',
        padding: '8px 16px',
        fontSize: '14px',
        borderRadius: '6px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: '#007BFF',
        color: 'white'
      }}>
        {showBio ? 'Hide Bio' : 'Show Bio'}
      </button>

      {/* 
        * 8. CONDITIONAL RENDERING: This 'Short Circuit' operator says: 
        * "If showBio is true, render the <p> tag. If false, do nothing." 
        * we can see that the attribute bio is in curly braces.
        * bio is our focus.  At the bottom 'export default' makes the
        * component available or import.
        */}
      {showBio && <p style={{ marginTop: '16px', fontSize: '14px' }}>{bio}</p>}
    </div>
  );
}

export default StudentCard;

