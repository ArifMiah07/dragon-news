// import BeautifulButton from "../../components/BeautifulButton";
// import Button from "../../components/Button/Button";
import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import NavBar from "../shared/NavBar/NavBar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";


const Home = () => {

    // const handleClick = () => {
    //     alert('Button clicked!');
    //   };

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <NavBar></NavBar>
            {/* <h1 className="font-poppins font-bold uppercase">this is home</h1> */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border border-red-700">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2 text-center">
                    <h1>newa coming soon</h1>
                    {/* <Button text="Click Me" onClick={handleClick} />
                    <BeautifulButton text="Click Me" onClick={handleClick}></BeautifulButton>
                    <button
                        className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-red-500 text-white font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg focus:outline-none focus:ring focus:ring-purple-400 focus:ring-opacity-50 transition-all duration-300"
                        onClick={handleClick}
                    >hwkkk9</button> */}
                </div>
                <div  className="border border-red-700">
                    <RightSideNav></RightSideNav>
                </div>
            </div>

        </div>
    );
};

export default Home;