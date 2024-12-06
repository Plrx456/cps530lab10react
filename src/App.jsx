import React from 'react';

const App = () => {
  return (
    <div className="container my-5">
      <header className="text-center mb-5">
        <h1 className="display-4">Building a Web Page with React and Vite</h1>
      </header>

      <main>
        <section className="mb-4">
          <h2 className="h4">Installation Process</h2>
          <p>
            To create this project, I used Vite for the React setup. This is what I did.
          </p>
          <ul className="list-group">
            <li className="list-group-item">Installed Vite using <code>npm create vite@latest my-react-app</code>.</li>
            <li className="list-group-item">Chose React as the framework during setup.</li>
            <li className="list-group-item">Installed all dependencies using <code>npm install</code>.</li>
            <li className="list-group-item">Started the development server using <code>npm run dev</code>.</li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="h4">How the Page Was Built</h2>
          <p>
            Edited the <code>App.jsx</code> file to have information about how to setup this webpage and issues that arrised. 
          </p>
          <p>
            I used Bootstrap's grid system and utility classes for style points and straight up responsiveness. 
          </p>
        </section>

        <section className="mb-4">
          <h2 className="h4">Challenges</h2>
          <div className="accordion" id="challengesAccordion">
            <div className="accordion-item">
              <h3 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Challenge 1: Initial Setup
                </button>
              </h3>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#challengesAccordion"
              >
                <div className="accordion-body">
                  The initial process took some understanding and trial and error, the documentation made the process slightly better.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h3 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Challenge 2: Folder Structure
                </button>
              </h3>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#challengesAccordion"
              >
                <div className="accordion-body">
                  It was not intuitive (to me atleast) for the main page to be in a src folder, again through playing around i figured it out.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h3 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Challenge 3: Browser Not Refreshing
                </button>
              </h3>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#challengesAccordion"
              >
                <div className="accordion-body">
                  Being used to HTML it was confusing when refreshing the page did not change even though I updated the code. Restarting the connection fixed it.
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-center mt-5">
        <p className="text-muted">
          CPS530 Lab10 Sarthak Pradhan (Copy at your own risk) | Built with React, Vite, and Bootstrap
        </p>
      </footer>
    </div>
  );
};

export default App;
