import Lottie from 'lottie-react';
import ErrorAnimation from '../assets/animations/Animation - 1727301966235.json'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex items-center justify-center'>
            <div className='w-3/5'>
            <Lottie animationData={ErrorAnimation}></Lottie>
            <Link to='/' className='text-3xl text-red-400 text-center mt-10 ml-10 transition-all duration-300 ease-in-out bg-transparent hover:bg-red-400 hover:text-white hover:scale-105 p-2 rounded'>GO BACK TO HOME....</Link>
        </div>
        </div>
    );
};

export default ErrorPage;