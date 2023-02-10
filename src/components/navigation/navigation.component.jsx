import './navigation.styles.scss'
import { Outlet } from 'react-router-dom';

const Navigation = () => {
    return(
        <>
            <div className="navigationContainer">
                meowmeowmeow
            </div>
            <Outlet/>
            <div>
                
            </div>
        </>
    )
}
export default Navigation;