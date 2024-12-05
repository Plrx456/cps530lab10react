import React from 'react';

const App = () => {
  return (
    <div className="container my-5">
      <header className="text-center mb-5">
        <h1 className="display-4">Building a React Web Page with Vite</h1>
        <p className="lead text-muted">
          Learn how to set up React with Vite and style it using Bootstrap.
        </p>
      </header>

      <main>
        <section className="mb-4">
          <h2 className="h4">Installation Process</h2>
          <p>
            To create this project, I used <strong>Vite</strong> for a fast and efficient React setup. Here are the steps I followed:
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
            I edited the <code>App.jsx</code> file to include sections explaining the process of installation, building the page, and troubleshooting.
          </p>
          <p>
            I used Bootstrap's grid system and utility classes for styling, making the page responsive and visually appealing.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="h4">Challenges and Solutions</h2>
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
                  I initially misunderstood the setup process. Referring to the Vite documentation solved the issue.
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
                  Understanding the `src` directory took time. I explored online resources to grasp it better.
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
                  Restarting the server fixed the issue when the browser didn't refresh after code changes.
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-center mt-5">
        <p className="text-muted">
          © 2024 Lab 10 Cps 530 | Built with React, Vite, and Bootstrap
        </p>
      </footer>
    </div>
  );
};

export default App;
