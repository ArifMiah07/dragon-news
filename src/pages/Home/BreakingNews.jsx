import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

const BreakingNews = () => {

    const handleClick = () => {
        console.log('Button clicked!');
      };
    return (
        <div className="w-full border border-gray-300">
            <div className="flex p-3 bg-gray-200 items-center w-full">  
                <Button text="Breaking News" onClick={handleClick} />
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