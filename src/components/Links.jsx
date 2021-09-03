import {Link} from 'react-router-dom' 

export default function Links(){
  return(
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/Profile">Profile</Link>
      </li>
      <li>
        <Link to="/Profile/1">Profile1</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/about?name=mark">About?name=mark</Link>
      </li>
    </ul>
  )
}