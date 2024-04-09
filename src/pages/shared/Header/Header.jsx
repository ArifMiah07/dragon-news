import logo from'../../../assets/logo.png';
import moment from 'moment-timezone';
const Header = () => {
    return (
        <div className='flex flex-col items-center'>
            <img src={logo} alt="" />
            <p className='text-[18px] font-poppins'>Journalism Without Fear or Favour</p>
            <p className='text-xl'>{moment().format('ddd, MMMM D, YYYY, h:mm:ss a')}</p>
        </div>
    );
};

export default Header;