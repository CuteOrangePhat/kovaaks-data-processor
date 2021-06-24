import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <div className="flex flex-col text-center flex-navigation bg-purple-400 mr-4 shadow-navigation sticky top-0">
            <Link className="pt-5" to="/">
                <i className="material-icons">home</i>
            </Link>
            <Link className="pt-5"  to="/">
                <i className="material-icons">help</i>
            </Link>
            <Link className="pt-5"  to="/">
                <i className="material-icons">poll</i>
            </Link>
            <Link className="pt-5"  to="/">
                <i className="material-icons">show_chart</i>
            </Link>
        </div>
    );
};

export default Navigation;
