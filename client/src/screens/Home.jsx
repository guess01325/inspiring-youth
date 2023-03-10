import {Link} from "react-router-dom"


export default function Home (props){
    return(
        <div>
            <h1>Inspiring Youth</h1>
            <div>
      <h1>Where Leaders Grow</h1>
      <p>We increase school success and improve overall well-being using sustainable mentoring practices. </p>
      <Link to="/about">Learn More</Link>
      

      </div>
      <div>
        <Link to="registrations/create">Register</Link>
        <p>We support curious and motivated youth and mentors through adventurous programs and a variety of services.</p>
      </div>
      
        </div>
    )
}