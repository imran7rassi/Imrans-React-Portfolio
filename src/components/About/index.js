import React from 'react';

function About() {
 console.log('ABOUT')
    return(
        <section className="container">
            <h2 class="top-title">Imran Rasi</h2>
            <hr></hr>
            <div>
                <img class="mb-5" id="avatar" src="https://avatars.githubusercontent.com/u/111325853?s=400&u=55e0c01d7b3e749e7e5e1711792a1f5ae49a5be3&v=4" alt="Michael Giddings" />

                <p>
                My name is Imran Rasi and I am a BBA degree graduate and current Georgia Tech Coding Bootcamp Student. I am a hard-working, detail-oriented Software Developer passionate about learning, researching, and writing code and I relish the opportunity to take my programming skills and experience to a company where I can continue to learn and grow as a professional software developer.
                </p>

            </div>
        </section>
    )
}

export default About;