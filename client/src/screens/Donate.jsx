import { Link } from "react-router-dom";

export default function Donate(props) {
  return (
    <>
    <div>
      <h1>SUPPORT US</h1>
    </div>
      <div>
        <a
          href="https://www.gofundme.com/f/inspiring-youth-and-mentors?utm_campaign=p_cp+share-sheet&utm_medium=copy_link_all&utm_source=customer"
          target="_blank"
        >
          GoFundMe
        </a>
        <Link to="wish-list">Wish List</Link>
      </div>
      <br></br>
      <div>
        <p>
          Our strength is amplified with collective action, and you can help
          make a difference with Inspiring Youth and Mentors right now! The
          support we receive is a huge driver for the good work we do in
          addressing some of society’s most challenging problems. Donate today
          and support our community in making a lasting impact.
        </p>
      </div>
      <br></br>
      <div>
        <p>
          Below we will provide two options Go Fund Me for monetary donations
          and Wish List for material donations.
        </p>
      </div>
      <br></br>

      <div>
        ​
        <p>
          Our wish list shows exactly what material items we are looking to have
          donated for upcoming programs (things like pens, pencils, makeup
          tools, family style video games etc) to be directed to our GoFundMe
          page. If you'd like your monetary donation to go toward a specific
          program, please leave us a note. or Click the GoFundMe button
        </p>
      </div>
      <br></br>
      <div>
        <p> Thank you for your donation!</p>
      </div>
      <div>
<br></br>
<h1>We Welcome Your Donations</h1>
      </div>

    </>
  );
}
