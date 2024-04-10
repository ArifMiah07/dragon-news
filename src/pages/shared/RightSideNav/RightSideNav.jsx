import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';


const RightSideNav = () => {
    return (
        <div>
            <div className="flex flex-col gap-5 ">
                <h2 className="text-xl font-bold">Login with</h2>
                <div className="flex p-5 flex-col ">
                    <button className="btn btn-outline">
                    <FcGoogle />
                        Login with Google
                    </button>
                    <button className="btn btn-outline">
                    <FaGithub />
                        Login with Github
                    </button>
                    </div>
            </div>
            <div className="flex flex-col gap-4">
                <h2 className="text-xl font-bold">Find us</h2>
                <div className="flex p-5 flex-col ">
                    <a className="flex justify-center items-start" href="https://www.facebook.com/"><button className="items-start btn w-full rounded-none btn-outline">
                    <FaFacebook />
                        Facebook
                    </button></a>
                    <a className="flex justify-center items-start" href="https://twitter.com/"><button className="items-start btn w-full rounded-none btn-outline">
                    <FaTwitter />
                        Twitter
                    </button></a>
                    <a className="flex justify-center items-start" href="https://www.instagram.com/"><button className="items-start btn rounded-none  w-full btn-outline">
                    <FaInstagram />
                        Instagram
                    </button></a>
                </div>
            </div>
            {/* q zoon */}
            <div>
                <h1 className="text-xl">Q-Zone</h1>
                <div>
                    <img src={qZone1} alt="" />
                </div>
                <div>
                    <img src={qZone2} alt="" />
                </div>
                <div>
                    <img src={qZone3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;