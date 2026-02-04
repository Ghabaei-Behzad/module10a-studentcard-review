/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App;
*/
/*
import StudentCard from './StudentCard';

function App() {
  return (
    <div>
      <StudentCard
        name="Emily Carter"
        major="Computer Science"
        year="Sophomore"
        bio="I enjoy building interactive web apps and working on open source projects in my spare time."
        imageUrl="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=150&h=150&fit=crop&crop=face"
      />
    </div>
  );
}

export default App;
*/
import StudentCard from './StudentCard';

function App() {
  return (
    <div>
      {/* 
        PROPS IN ACTION:
        Here we "pass" data into StudentCard like attributes. 
        Everything like name="Emily Carter" becomes part of the 'props' object in the child component.
      */}
      <StudentCard
        name="Emily Carter"
        major="Computer Science"
        year="Sophomore"
        bio="I enjoy building interactive web apps and working on open source projects in my spare time."
        imageUrl="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=150&h=150&fit=crop&crop=face"
      />
    </div>
  );
}

export default App;

