import React from 'react'
import styles from './style'

import { NavBar, Billings, CardDeal, Business, Clients, FeedbackCard, 
  CTA, Stats, Footer, Testimonials, Hero } from './components';



const App = () => (
    <div className="bg-primary w-full overflow-hidden">
      <div>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              < NavBar/>
            </div>
          </div>

        </div>

        <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Hero/>
            </div>
          </div>

          <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Stats/>            
              <Business/>
              <Billings/>
              <CardDeal/>
              <Testimonials/>       
              <Clients/>     
              <CTA/>          
              <Footer/>           
            </div>
          </div>

      </div>
    </div>
  );
export default App


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

// export default App
