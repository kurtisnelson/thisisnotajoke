import React from "react"

const ResumePage = () => {
  return (
    <main>
      <title>Kurt Nelson | Senior Android Engineer</title>
      <div className="resume">
        <h1>Kurt Nelson</h1>

        <h2>Senior Android Developer</h2>

        <blockquote>
          <p>
            <a href="kurtisnelson@gmail.com">kurtisnelson@gmail.com</a>
            (407) 512-0689
          </p>
        </blockquote>

        <hr />

        <h3 id="experience">Experience</h3>

        <dl>
          <dt>Uber</dt>
          <dd>
            <em>Senior Software Engineer</em>
          <br/>
            <strong>August 2018-February 2021</strong>
            <br />I was on the Mobile Foundations team working across our suite
            of apps.
          </dd>

          <dt>Google</dt>
          <dd>
            <em>Android Engineer</em>
          <br/>
            <strong>December 2015-April 2018</strong>
            <br />I started on the Google Glass/Wearables team and primarily
            worked on the companion app for a new class of consumer hardware
            products. I then worked on Android app foundations making
            cold-startup faster and shrinking APK size along with improving the
            internal developer experience.
          </dd>

          <dt>The Iron Yard</dt>
          <dd>
            <em>Ruby Instructor</em>
          <br/>
            <strong>June 2015-December 2015</strong>
            <br />I taught two 3-month cohorts of backend engineering to
            complete beginners in Nashville, TN.
          </dd>

          <dt>Atlanta Coding Company</dt>
          <dd>
            <em>Owner</em>
          <br/>
            <strong>December 2014-May 2015</strong>
            <br />I decided to head out on my own and operate freelance, some of
            my clients included: Monsieur, an Android powered bartending machine
            Scoutmob, a marketing and discount coupon app
          </dd>

          <dt>Big Nerd Ranch</dt>
          <dd>
            <em>Android Engineer &amp; Instructor</em>
          <br/>
            <strong>August 2012-December 2014</strong>
            <br />I have done both Ruby and Ruby on Rails backend and Android
            development for consulting clients varying from multi-nationals to
            one man startups. Additionally I taught the Android Bootcamp for
            corporate clients and am highly knowledgeable in the project process,
            from Pivotal Tracker to keeping your Git history sane. I continued
            teaching the Android Bootcamp on a contract basis.
          </dd>

          <dt>Georgia Tech Research Institute</dt>
          <dd>
            <em>Signature Technology Lab Co-op</em>
          <br/>
            <strong>May 2011–July 2012</strong>
            <br />
            In addition to holding a US Department of Defense Secret clearance,
            I supported both a Windows Domain and a Linux enterprise
            environment. I was responsible for a data center&#8217;s day to day
            operations and assisted users with support tickets.
          </dd>
        </dl>

        <hr />

        <h3 id="skills">Skills</h3>

        <ol>
          <li>Android, Android Wear</li>
          <li>Ruby, Java, Go, C, JS</li>
          <li>Ruby on Rails &amp; Ember</li>
          <li>PostgresQL &amp; MySQL</li>
          <li>Continuous Integration</li>
          <li>Test Driven Development</li>
          <li>RESTful APIs</li>
          <li>Linux deployment</li>
          <li>AWS, Google Cloud</li>
          <li>DNS</li>
          <li>Datacenter Ops</li>
        </ol>

        <hr />

        <h3 id="education">Education</h3>

        <dl>
          <dt>Georgia Institute of Technology</dt>
          <dd>
            <em>Bachelor of Science in Computer Science</em>
            <strong>2009-2014</strong>
            System architecture and information internetworks threads.
          </dd>

          <dt>Winter Park High School</dt>
          <dd>
            <em>International Baccalaureate Diploma</em>
            <strong>2005-2009</strong>
          </dd>
        </dl>

        <hr />
      </div>
    </main>
  )
}

export default ResumePage
