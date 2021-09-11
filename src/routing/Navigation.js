import "./Navigation.scss"
import { BrowserRouter, Link} from "react-router-dom";

function Navigation(){

    return(
        <div className = "navContainer">
            <div className = "titleContainer">FindMyTattooArtist</div>
            <div id = "pageLinks"></div>
        </div>
        
    )
}

export default Navigation;