import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto border border-red-800 font-poppins'>
            <h1>this is root</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;