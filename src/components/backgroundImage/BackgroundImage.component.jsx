import { Outlet } from "react-router-dom";
import './BackgroundImage.styles.scss'
import  Aslan  from '../../assets/images/aslan.jpg';


const BackgroundImage = () =>{
    return(
        <>
            <div className="bg">
                <img className="aslan" src={Aslan} alt="aslan"/>
            </div>
            <Outlet />
        </>
    )
}

export default BackgroundImage;