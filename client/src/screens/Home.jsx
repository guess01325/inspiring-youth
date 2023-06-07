import { Link } from "react-router-dom";
import { Player } from "video-react";
// import "./style/Home.css";

export default function Home(props) {
  return (
    <>
      <div>
        <h1>Inspiring Youth</h1>
      </div>
      <br />
      <div>
        <h1>Where Leaders Grow</h1>

        <p>
          We increase school success and improve overall well-being using
          sustainable mentoring practices.
        </p>

        <Link to="/about">Learn More</Link>
      </div>
      <br />

      <div>
        <Link to="registrations/create">Register</Link>

        <img
          src="https://res.cloudinary.com/otisg/image/upload/v1650296869/gives3_k7m97e.webp"
          alt="react logo"
        />
        <p>
          We support curious and motivated youth and mentors through adventurous
          programs and a variety of services.
        </p>
      </div>
      <br />
      <div>
        <Link to="/donate">Donate</Link>
        <img
          src="https://res.cloudinary.com/otisg/image/upload/v1650295179/giveS1_hkjqmp.webp"
          alt="react logo"
        />
      </div>
      <br />
      <div>
        <Link>Get Involved</Link>
        <p>
          Great things are done by a series of small things brought together
        </p>
        <div>
          <br />
          Vincent Van Gogh
        </div>
        <div className="video">
          <Player
            src="https://video.wixstatic.com/video/63347b_1108524e1cc34d2996d618c72e4b9433/480p/mp4/file.mp4"
            type="video/mp4"
          />
        </div>

        <div className="partners">
          <h1>Our Partners</h1>
          <img src="https://res.cloudinary.com/otisg/image/upload/v1679057135/prevent-partner_jlwurc.webp" />
          <img src="https://res.cloudinary.com/otisg/image/upload/v1679057153/community-level-up_dy7ah5.webp" />
          <img src="https://res.cloudinary.com/otisg/image/upload/v1679057145/culture-coalition_fkpkaq.webp" />
        
        </div>
      </div>
    </>
  );
}
