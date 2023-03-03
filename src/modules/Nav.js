import '../Nav.css';
import { Link } from "react-router-dom";
export default function Nav() {
    return (
        
            
        <nav>
            
                <ul>
                    <li className='menu-item'><Link to="/">Home</Link></li>
                    <li className='menu-item'><Link to="/forms">Forms</Link></li>
                    <li className='menu-item'><Link to="/users">Users</Link></li>
                
                </ul>
                <div className="hamburger">P</div>
            </nav>
     
    )

}