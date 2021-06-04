import './Navigation.css';
import {Link} from "react-router-dom";

const Navigation = () => {

    return (
        <div className="navigation">
            <Link to="/">
                <i className="material-icons">home</i>
            </Link>
            <Link to="/">
                <i className="material-icons">help</i>
            </Link>
            <Link to="/">
                <i className="material-icons">poll</i>
            </Link>
            <Link to="/">
                <i className="material-icons">show_chart</i>
            </Link>
        </div>
    );
};

export default Navigation;
