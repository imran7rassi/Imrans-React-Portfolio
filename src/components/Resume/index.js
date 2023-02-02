import React from "react";

function Resume() {
  return (
    <section class="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>

      <div>
        <div class="mt-5">
          <h2 className="top-title">Imran Rasi</h2>
          <ul>
            <li>
              Manager of the Afghan Rasa Logistic Company and a Life Student of the GT University.
            </li>
          </ul>

          <p class="mt-5">
            <a href="https://www.linkedin.com/in/imran-rasi-a01a98259/">
              <img
                src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                alt="inkedIn"
              />
            </a>
          </p>

          <a
            href="https://docs.google.com/document/d/e/2PACX-1vRDFU4OVn8Urf97xw1_F1ucjEcH8pYzxKwfpE-DUqoVrsH_MeFpbLnv6AsxCil7RsgagLKG5uHf60bc/pub"
            class="link"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div class="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Proficiencies</h2>
          <ul>
            <li>
            JAVA,<br />
            HTML, <br /> CSS (Bootstrap, HandleBars), <br /> JavaScript,<br /> jQuery,<br /> React.js,<br /> IndexedDB,<br />
            Node.js,<br /> Express.js,<br /> SQL, <br />Sequelize, MongoDB, Mongoose, NoSQL, APIs, Templating.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
