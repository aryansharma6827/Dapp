import React, { Component } from 'react'
import bank from '../bank.png'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.js'
import { Link } from 'react-router-dom';
import NewPage from './newpage';
class Main extends Component {
  render() {
    return (
      <div  >
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <div >
                  <div >
                    <main
                      role="main"

                    >
                      <NewPage />
                    </main>
                  </div>
                </div>
              }
            />
            <Route
              path="/new"
              element={
                <div >
                  <div >
                    <main
                      role="main"


                    >
                      <App />
                    </main>
                  </div>
                </div>
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
export default Main;