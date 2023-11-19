// import myImage from './imageAssets/homeImage.jpg';
import { HeadComp } from '../components/HeadComponent';
import Cookies from 'js-cookie';



export const LandingPage = () => {
    Cookies.remove('jwt');
    Cookies.remove('user');
    return <>

        <HeadComp />
        {/* <div className="flex justify-center">

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

        </div> */}
        <div className='mt-8 px-4 sm:px-16 mb-4'>
            <div>
                <h1 className='text-xl sm:text-4xl  font-semibold text-green-500'>
                    Welcome to Budgetaid: Your Personal Budgeting Companion
                </h1>
                <h2 className='text-lg sm:text-2xl  font-semibold text-green-600 mt-2'>
                    Take Control of Your Finances, Effortlessly
                </h2>
                <p className='font-semibold text-md sm:text-lg px-4 mt-4 text-gray-300'>
                    Are you ready to transform the way you manage your money?<br/>
                    Meet SmartWallet, your all-in-one solution for stress-free budgeting.
                </p>
                <div className=''>
                    <p className='text-lg sm:text-xl px-4 mt-4 font-semibold text-gray-200'>
                            Key Features:
                    </p>
                    <ul className='px-6 mt-2 text-xs sm:text-sm text-gray-300'>
                        
                        <li className=' text-sm font-semibold before:content-["📊"] py-1'>
                            Visualize Your Finances: Gain a clear overview of your income, expenses, and savings with our interactive charts and graphs.
                        </li>
                        <li className=' text-sm font-semibold before:content-["📅"] py-1'>
                            Streamlined Transactions: Effortlessly categorize and track your expenses in real-time, ensuring that you are always in control of your spending.
                        </li>
                        <li className=' text-sm font-semibold before:content-["🎯"] py-1'>
                            Set and Achieve Goals: Define your financial objectives, whether it's saving for a dream vacation or paying off debts. SmartWallet helps you stay on track.
                        </li>
                    </ul>
                </div>
                <div>
                    <p className='text-lg sm:text-xl px-4 mt-4 font-semibold text-gray-200'>Why Choose SmartWallet?</p>
                    <ul className='px-6 mt-2 text-gray-300'>
                        <li className=' text-sm font-semibold before:content-["✨"] py-1'>
                            User-Friendly Interface: No more confusing spreadsheets or complex calculations. SmartWallet is designed for simplicity, making budgeting a breeze for everyone.
                        </li>
                        <li className=' text-sm font-semibold before:content-["📱"] py-1'>
                            Access Anywhere, Anytime: Whether you're on your computer, tablet, or smartphone, SmartWallet is always at your fingertips, providing you with real-time financial insights wherever you go.
                        </li>
                        <li className=' text-sm font-semibold before:content-["🌐"] py-1'>
                            Cloud-Based Sync: Your data is synced securely in the cloud, ensuring that you have the most up-to-date information across all your devices.
                        </li>
                    </ul>

                    
                </div>
            </div>
        </div>
    </>
}