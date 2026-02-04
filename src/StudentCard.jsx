/**
 * This import statement is really important. It must be included for StudentCard to be visible.
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
  const { name, major, year, bio, imageUrl } = props;

  // 2. STATE: This initializes 'showBio' at boolean 'false'. 
  // 'showBio' holds the current visibility, and 'setShowBio' is the function used to update it.
  const [showBio, setShowBio] = useState(false);

  // 3. TOGGLE LOGIC: This function flips the state, on the button.
  // If 'showBio' is true, it becomes false (and vice versa) when the button is clicked.
  // This button function allows a paragraph element with a sentence, to appear or hide.
  const toggleBio = () => {
    setShowBio(!showBio);
  };

  return (
    // 4. JSX STRUCTURE: The container div uses a JavaScript object for inline styling.
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
      {/* 5. IMAGE PROPS: The 'src' and 'alt' are dynamically set using the props we received. */}
      <img
        src={imageUrl}
        alt={name + "'s profile"}
        style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', marginBottom: '12px' }}
      />
      
      {/* 6. DISPLAYING DATA: We use curly braces {} to inject the prop values into the HTML. */}
      <h2 style={{ margin: '0', fontSize: '22px' }}>{name}</h2>
      <p style={{ margin: '4px 0', fontSize: '16px' }}>{major} – {year}</p>

      {/* 7. EVENT HANDLING: The onClick listener triggers our toggleBio function.
          The button text changes dynamically based on the current 'showBio' state. */}
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

      {/* 8. CONDITIONAL RENDERING: This 'Short Circuit' operator says: 
          "If showBio is true, render the <p> tag. If false, do nothing." */}
      {showBio && <p style={{ marginTop: '16px', fontSize: '14px' }}>{bio}</p>}
    </div>
  );
}

export default StudentCard;

