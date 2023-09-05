import myImage from './imageAssets/homeImage.jpg';
import { HeadComp } from '../components/HeadComponent';
import Cookies from 'js-cookie';



export const LandingPage = () => {
    Cookies.remove('jwt');
    Cookies.remove('user');
    return <>
    
    <HeadComp />
    <div className="flex justify-center">

        <div className="w-1/2 flex mt-12 rounded-lg shadow-md">
            <img src={myImage} className='w-1/2 rounded-l-lg' alt="Fds" />
            <div className='ps-4 pe-4 pt-6 border-l-0 rounded-r-lg'>
                <h1 class="text-4xl font-bold text-[#f0f0f0] border-b-2">Track and Control Your Expenses with Ease
                </h1>
                <p class="font-semibold text-2xl mt-4">Introducing Expense Master - Your Personal Financial Manager
                </p>
                <p class="font-semibold mt-8 mb-8">Track your expenses effortlessly and stay in control of your
                    finances. Start managing your money better with our user-friendly expense tracker app. Sign up
                    today! </p>
                <p>Docs on <a href="https://github.com/anuragdaksh7/web-based-expense-tracker">Github</a></p>
            </div>
        </div>

    </div></>
}