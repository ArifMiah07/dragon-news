import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div >
            <div className="flex items-center w-full">  
            <h1 className="btn btn-secondary">Breaking</h1>
                <Marquee pauseOnHover={true} speed={100}>
                    <div className="flex gap-8">
                        <Link to={`/`}>
                        I can be a React component, multiple React components, or just some text....
                        </Link>
                        <Link to={`/`}>
                        I can be a React component, multiple React components, or just some text....
                        </Link>
                        <Link to={`/`}>
                        I can be a React component, multiple React components, or just some text....
                        </Link>
                        <Link to={`/`}>
                        I can be a React component, multiple React components, or just some text....
                        </Link>
                        <Link to={`/`}>
                        I can be a React component, multiple React components, or just some text....
                        </Link>
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default BreakingNews;