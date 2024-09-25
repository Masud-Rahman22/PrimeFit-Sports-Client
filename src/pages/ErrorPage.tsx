import Lottie from 'lottie-react';
import ErrorAnimation from '../assets/animations/Animation - 1727301966235.json'

const ErrorPage = () => {
    return (
        <div className='flex items-center justify-center'>
            <div className='w-3/5'>
            <Lottie animationData={ErrorAnimation}></Lottie>
        </div>
        </div>
    );
};

export default ErrorPage;