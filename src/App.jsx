
import React from 'react'
import './App.css'

function App() {
  const components = ['D38999', '99983D', 'JAN123']
  
  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>Example Factory</h1>
          <p className="subtitle">This is an example factory page.</p>
        </header>

        <div className="factory-image">
          <img
            src="https://static.wikia.nocookie.net/roalddahl/images/3/39/Wonka_Factory_2005.jpg/revision/latest?cb=20230110003943"
            alt="factory"
          />
        </div>

        <div className="info-grid">
          <section className="info-card">
            <h2>Location</h2>
            <p>Monstropolis</p>
          </section>

          <section className="info-card">
            <h2>People</h2>
            <div className="person-card">
              <p>Monty Python</p>
            </div>
          </section>

          <section className="info-card">
            <h2>Components</h2>
            <div className="components-grid">
              {components.map((component, index) => (
                <div key={index} className="component-card">
                  {component}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default App
