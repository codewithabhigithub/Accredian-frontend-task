import { useState } from 'react'
import Eclipse from './image/Ellipse 1.png'
import Aniversary from './image/Anniversary (7) 1.png'
import Circle from './image/circle.png'
import Mic from './image/Mic.png'
import Dot from './image/Dot.png'
import Right_Arrow from './image/Right Arrow.png'
import Below_Arrow from './image/Arror below.png'
import Man from './image/man.png'
import Wallet from './image/Wallet.png'
import NotePad from './image/Notepad.png'
import Up_Arrow from './image/up Arrow.png'
import Down_Arrow from './image/Down Arrow.png'
import Right_Arrow_White from './image/Right Arrow White.png'
import Right_Arrow_Black from './image/Right Arrow Black.png'
import Cap from './image/Cap.png'
import Modal from './components/Modal'
import Footer from './components/Footer'
import Header from './components/Header'
import Infobar from './components/Inforbar'

const LandingPage = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div>
            <Infobar />
            <Header />
            {/* <div className='w-[1920px] flex justify-center mt-9'>
                <div className='font-mono flex justify-evenly items-center w-[797px] h-[63px] rounded-full bg-[#1A73E826] text-[#4B4B4B] text-2xl font-normal'>
                    <p className='text-[#1A73E8] flex flex-col items-center'>Refer<img className='w-[6px] h-[6px] ' src={Eclipse} alt="Logo" /></p>
                    <p>Benefits</p>
                    <p>FAQs</p>
                    <p>Support</p>
                </div>
            </div> */}
            {/* <div className='w-[1920px] flex justify-center mt-6 '>
                <div className='font-sans text-[#1A202C] w-[1360px] h-[692px] bg-[#EEF5FF] drop-shadow-2xl rounded-3xl flex justify-center items-center -space-x-10'>
                    <div className='ml-10'>
                        <div className='border-black w-[502px] h-[367px] flex flex-col justify-around'>
                            <p className='text-[88px] font-bold'>Let’s Learn & Earn</p>
                            <p className='text-5xl font-normal'>Get a chance to win
                                up-to <span className='text-6xl text-[#1A73E8] font-bold'>Rs. 15,000</span></p>
                        </div>
                        <button className='bg-[#1A73E8] text-[#FFFFFF] rounded-lg w-[192px] h-[54px] px-[45px] py-[8px] mt-10' onClick={() => setShowModal(true)}>Refer Now</button>
                    </div>
                    <img className='w-[814px] h-[725px]' src={Aniversary} alt="Aniversary" />
                </div>
            </div> */}

            <div className="w-full flex justify-center mt-9 px-4">
                <div className="font-mono flex justify-evenly items-center w-full max-w-xl h-16 rounded-full bg-[#1A73E826] text-[#4B4B4B] text-base sm:text-lg lg:text-2xl font-normal">
                    <p className="text-[#1A73E8] flex flex-col items-center">
                        Refer
                        <img className="w-1.5 h-1.5 mt-1" src={Eclipse} alt="Logo" />
                    </p>
                    <p>Benefits</p>
                    <p>FAQs</p>
                    <p>Support</p>
                </div>
            </div>


            <div className="w-full flex justify-center mt-6 px-4">
                <div className="font-sans text-[#1A202C] w-full max-w-[1360px] bg-[#EEF5FF] drop-shadow-2xl rounded-3xl flex flex-col lg:flex-row justify-center items-center lg:space-x-5 space-y-6 lg:space-y-0">
                    {/* Left Section */}
                    <div className="text-center lg:text-left lg:ml-10 px-4 lg:px-0 mt-10 lg:-mt-10">
                        <div className="w-full lg:w-[502px] flex flex-col justify-around space-y-6">
                            <p className="lg:px-8 text-3xl sm:text-5xl lg:text-[88px] font-bold leading-tight">
                                Let’s Learn & Earn
                            </p>
                            <p className="lg:px-8 text-xl sm:text-3xl lg:text-5xl font-normal leading-snug">
                                Get a chance to win up-to{" "}
                                <span className="text-2xl sm:text-4xl lg:text-6xl text-[#1A73E8] font-bold">
                                    Rs. 15,000
                                </span>
                            </p>
                        </div>
                        <button className="lg:ml-8 bg-[#1A73E8] text-[#FFFFFF] rounded-lg w-auto px-8 py-3 text-sm sm:text-base lg:w-[192px] lg:h-[54px] lg:px-[45px] lg:py-[8px] mt-6" onClick={() => setShowModal(true)}>
                            Refer Now
                        </button>
                    </div>

                    {/* Right Section */}
                    <img
                        className="lg:pr-8 w-full max-w-md lg:max-w-[814px] h-auto"
                        src={Aniversary}
                        alt="Aniversary"
                    />
                </div>
            </div>

            <div className='w-full h-[785px] bg-[#EEF5FF] mt-20 flex flex-col items-center justify-around'>
                <p className='font-semibold text-[#1A202C] text-2xl'>How Do I <span className='text-[#1A73E8]'>Refer?</span></p>
                <div className='w-full max-w-[1387px] h-[491px]'>
                    <img className='w-full max-w-[1387px] h-[491px]' src={Circle} alt="Circle" />
                    <div className='flex justify-evenly items-center mt-[-340px] '>
                        <div className=' flex flex-col justify-between items-center'>
                            <img className='w-[88px] h-[66.96px] ml-5 mb-10' src={Man} alt="Man" />
                            <p className=' w-[199px] text-center text-base font-normal text-[#000000]'>Submit referrals easily via our website’s referral section.</p>
                        </div>
                        <div className=' flex flex-col justify-between items-center'>
                            <img className='w-[65.11px] h-[67.38px] ml-5 mb-10' src={NotePad} alt="Notepad" />
                            <p className=' w-[199px] text-center text-base font-normal text-[#000000]'>Earn rewards once your referral joins an Accredian program.</p>
                        </div>
                        <div className=' flex flex-col justify-between items-center'>
                            <img className='w-[65px] h-[67.25px]  mb-10' src={Wallet} alt="Wallet" />
                            <p className=' w-[199px] text-center text-base font-normal text-[#000000]'>Both parties receive a bonus 30 days after program enrollment.</p>
                        </div>
                    </div>
                </div>
                <button className='bg-[#1A73E8] text-[#FFFFFF] rounded-lg w-[236px] h-[64px] px-[50px] py-[8px] font-normal text-xl' onClick={() => setShowModal(true)}>Refer Now</button>
            </div>

            <div className='w-full mt-20'>
                <p className='font-sans font-semibold text-[#1A202C] text-xl sm:text-2xl lg:text-3xl text-center'>What Are The <span className='text-[#1A73E8]'>Referral Benefits?</span></p>
            </div>

            <div className='w-full flex justify-center mt-10'>
                <div className='w-full max-w-[1230px] h-auto lg:h-[54px] flex justify-end'>
                    <div className='w-full max-w-[125.18px] h-auto lg:h-[17px] flex justify-between items-center'>
                        <p className='font-normal text-base sm:text-lg lg:text-xl text-[#3C4852]'>Enrolled</p>
                        <div className='w-full max-w-[34.18px] h-[17px] rounded-full border-2 border-[#3C4852] flex justify-end'>
                            <img src={Dot} alt="Dot" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full flex justify-center -mt-5'>
                <div className='w-[1230px] h-[572px] flex justify-between'>
                    <div className='w-[270px] h-[572px] drop-shadow-2xl'>
                        <div className='bg-[#1A73E8] w-[270px] h-[50px] rounded-tl-lg rounded-tr-lg flex justify-around items-center'>
                            <p className='text-lg font-semibold text-[#FFFFFF]'>ALL PROGRAMS</p>
                            <img src={Right_Arrow_White} alt="" />
                        </div>
                        <div className='bg-[#FFFFFF] w-[270px] h-[522px] rounded-bl-xl rounded-br-xl flex flex-col justify-around items-center'>
                            <div className='w-[213px] h-[50px] flex justify-between items-center'>
                                <p className='text-lg font-semibold text-[#3C4852]'>Product Management</p>
                                <img src={Right_Arrow_Black} alt="" />
                            </div>
                            <div className='w-[213px] h-[50px] flex justify-between items-center'>
                                <p className='text-lg font-semibold text-[#3C4852]'>Strategy & Leadership</p>
                                <img src={Right_Arrow_Black} alt="" />
                            </div>

                            <div className='w-[213px] h-[50px] flex justify-between items-center'>
                                <p className='text-lg font-semibold text-[#3C4852]'>Business Management</p>
                                <img src={Right_Arrow_Black} alt="" />
                            </div>
                            <div className='w-[213px] h-[50px] flex justify-between items-center'>
                                <p className='text-lg font-semibold text-[#3C4852]'>Fintech</p>
                                <img src={Right_Arrow_Black} alt="" />
                            </div>
                            <div className='w-[213px] h-[50px] flex justify-between items-center'>
                                <p className='text-lg font-semibold text-[#3C4852]'>Senior Management</p>
                                <img src={Right_Arrow_Black} alt="" />
                            </div>
                            <div className='w-[213px] h-[50px] flex justify-between items-center'>
                                <p className='text-lg font-semibold text-[#3C4852]'>Data Science</p>
                                <img src={Right_Arrow_Black} alt="" />
                            </div>
                            <div className='w-[213px] h-[50px] flex justify-between items-center'>
                                <p className='text-lg font-semibold text-[#3C4852]'>Digital Transformation</p>
                                <img src={Right_Arrow_Black} alt="" />
                            </div>
                            <div className='w-[213px] h-[50px] flex justify-between items-center'>
                                <p className='text-lg font-semibold text-[#3C4852]'>Business Analytics</p>
                                <img src={Right_Arrow_Black} alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="w-[921px] h-[561px] drop-shadow-2xl">
                        <table class="w-full">
                            <thead class='bg-[#afcef7] w-[921px] h-[58px] rounded-tl-xl rounded-tr-xl'>
                                <tr>
                                    <th class="text-left p-2 text-lg font-bold text-[#1350A0] "><p className='ml-4'>Programs</p></th>
                                    <th class="text-left p-2 text-lg font-bold text-[#1350A0] w-[150px]">Referrer Bonus</th>
                                    <th class="text-left p-2 text-lg font-bold text-[#1350A0] w-[150px]">Referee Bonus</th>
                                </tr>
                            </thead>
                            <tbody class="bg-[#f8fbff] w-[921px] h-[503px] rounded-bl-xl rounded-br-xl ">
                                <tr>
                                    <td class="p-2 flex items-center text-xl font-normal text-[#3C4852] mt-3"><img src={Cap} alt="Cap" className='mr-2 ml-4' /> Professional Certificate Program in Product Management</td>
                                    <td class="p-2 text-xl font-normal text-[#3C4852]">₹ 7,000</td>
                                    <td class="p-2 text-xl font-normal text-[#3C4852]">₹ 9,000</td>
                                </tr>
                                <tr>
                                    <td class="p-2 flex items-center text-xl font-normal text-[#3C4852]"><img src={Cap} alt="Cap" className='mr-2 ml-4' /> PG Certificate Program in Strategic Product Management</td>
                                    <td class="p-2 text-xl font-normal text-[#3C4852]">₹ 9,000</td>
                                    <td class="p-2 text-xl font-normal text-[#3C4852]">₹ 11,000</td>
                                </tr>
                                <tr>
                                    <td class="p-2 flex items-center text-xl font-normal text-[#3C4852]"><img src={Cap} alt="Cap" className='mr-2 ml-4' /> Executive Program in Data Driven Product Management</td>
                                    <td class="p-2 text-xl font-normal text-[#3C4852]">₹ 10,000</td>
                                    <td class="p-2 text-xl font-normal text-[#3C4852]">₹ 10,000</td>
                                </tr>
                                <tr>
                                    <td class="p-2 flex items-center text-xl font-normal text-[#3C4852]"><img src={Cap} alt="Cap" className='mr-2 ml-4 -mt-7' /> Executive Program in Product Management and Digital Transformation</td>
                                    <td class="p-2 text-xl font-normal text-[#3C4852]">₹ 10,000</td>
                                    <td class="p-2 text-xl font-normal text-[#3C4852]">₹ 10,000</td>
                                </tr>
                                <tr>
                                    <td class="p-2 flex items-center text-xl font-normal text-[#3C4852]"><img src={Cap} alt="Cap" className='mr-2 ml-4' /> Executive Program in Product Management</td>
                                    <td class="p-2 text-xl font-normal text-[#3C4852]">₹ 10,000</td>
                                    <td class="p-2 text-xl font-normal text-[#3C4852]">₹ 10,000</td>
                                </tr>
                                <tr>
                                    <td class="p-2 flex items-center text-xl font-normal text-[#3C4852]"><img src={Cap} alt="Cap" className='mr-2 ml-4 ' /> Advanced Certification in Product Management</td>
                                    <td class="p-2 text-xl font-normal text-[#3C4852]">₹ 10,000</td>
                                    <td class="p-2 text-xl font-normal text-[#3C4852]">₹ 10,000</td>
                                </tr>
                                <tr>
                                    <td class="p-2 flex items-center text-xl font-normal text-[#3C4852]"><img src={Cap} alt="Cap" className='mr-2 ml-4 -mt-7' /> Executive Program in Product Management and Project Management</td>
                                    <td class="p-2 text-xl font-normal text-[#3C4852]">₹ 10,000</td>
                                    <td class="p-2 text-xl font-normal text-[#3C4852]">₹ 10,000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className='w-full flex justify-center mt-5 '>
                <div className='w-[90%] max-w-[1230px] h-auto lg:h-[54px] flex justify-end'>
                    <button className='w-full max-w-[174.66px] h-[41px] rounded-lg border-2 border-[#B6B6B6] text-[#9aa0a5] font-semibold text-lg flex items-center justify-center '>Show More <img className='ml-4 ' src={Below_Arrow} alt="Right_Arrow" /></button>
                </div>
            </div>

            <div className='w-full mt-5 flex justify-center '>
                <button className=' bg-[#1A73E8] text-[#FFFFFF] rounded-lg w-full max-w-[236px] h-[64px] px-[50px] py-[8px] font-normal text-xl' onClick={() => setShowModal(true)}>Refer Now</button>
            </div>

            <div className='w-full mt-20 lg:mt-40 flex justify-center'>
                <div className='w-[80%] max-w-[1281px] h-[341px] flex flex-col justify-between'>
                    <p className='font-sans font-semibold text-[#1A202C] text-xl sm:text-2xl lg:text-3xl text-center'>Frequently Asked  <span className='text-[#1A73E8]'>Questions</span></p>

                    <div className='w-[full] flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0 items-center'>
                        <div className='mt-8 w-[259px] h-[auto] lg:h-[244px] flex flex-col lg:justify-between space-y-3'>
                            <button className='lg:w-[259px] lg:h-[68px] border-2 border-[#E2E8F0] rounded-lg font-semibold text-[#1A73E8] text-[16.59px] shadow-2xl '>Eligibility</button>
                            <button className='lg:w-[259px] lg:h-[68px] border-2 border-[#737373] rounded-lg font-semibold text-[#737373] text-[16.73px]'>How To Use?</button>
                            <button className='lg:w-[259px] lg:h-[68px] border-2 border-[#737373] rounded-lg font-semibold text-[#737373] text-[17.02px] '>Terms & Conditions</button>
                        </div>
                        <div className=''>
                            <button className='w-full lg:w-[918.41px] h-auto lg:h-[68px] flex items-center justify-between'><p className='font-semibold text-sm sm:text-base lg:text-lg text-[#1A73E8]'>Do I need to have prior Product Management and Project Management experience to enroll in the program?</p><img src={Up_Arrow} alt="UP Arrow" /></button>
                            <div className='mt-4 flex items-center justify-center'><div className='w-full lg:w-[886.41px] h-auto lg:h-[48px] flex flex-col items-center justify-center'><p className='font-normal text-xs sm:text-sm lg:text-base'>No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it
                                suitable for individuals from any field of work.</p></div></div>
                            <button className='mt-4 w-full lg:w-[770.36px] lg-auto lg:h-[68px] flex items-center justify-center lg:justify-between'><p className='font-semibold text-xs sm:text-sm lg:text-base text-[#000000]'>What is the minimum system configuration required?</p><img src={Down_Arrow} alt="Down Arrow" /></button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className='w-[1920px] mt-20 flex justify-center'>
                <div className='w-[1360px] h-[210px] bg-[#1A73E8] rounded-xl flex items-center justify-around'>
                    <div className='w-[661.22px] h-[80px] flex justify-between'>
                        <div className='w-[80px] h-[80px] rounded-xl bg-[#609ceb] flex items-center justify-center'>
                            <div className='w-[72px] h-[72px] rounded-xl bg-white flex items-center justify-center'>
                                <img className='w-[56px]' src={Mic} alt="Mic" />
                            </div>
                        </div>

                        <div className='font-sans flex flex-col justify-center'>
                            <p className='text-3xl text-[#FFFFFF] font-semibold'>Want to delve deeper into the program?</p>
                            <p className='text-base text-[#F5F5F5] font-medium'>Share your details to receive expert insights from our program team!</p>
                        </div>
                    </div>

                    <button className='w-[200px] h-[52px] rounded-lg bg-[#FFFFFF] text-[#3B82F6] font-semibold text-lg flex items-center justify-center'>Get in touch <img className='ml-2' src={Right_Arrow} alt="Right_Arrow" /></button>
                </div>
            </div> */}

            <div className="w-full mt-20 flex justify-center px-4 ">
                <div className="w-full max-w-[1360px] h-auto lg:h-[210px] bg-[#1A73E8] rounded-xl flex flex-col lg:flex-row items-center justify-between p-6 lg:py-0 lg:px-[100px]">
                    {/* Left Section */}
                    <div className="w-full lg:w-[661.22px] flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
                        {/* Icon Container */}
                        <div className="w-16 h-16 lg:w-[80px] lg:h-[80px] rounded-xl bg-[#609ceb] flex items-center justify-center">
                            <div className="w-14 h-14 lg:w-[72px] lg:h-[72px] rounded-xl bg-white flex items-center justify-center">
                                <img className="w-12 lg:w-[56px]" src={Mic} alt="Mic" />
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="text-center lg:text-left font-sans flex flex-col justify-center lg:ml-4">
                            <p className="text-lg sm:text-xl lg:text-3xl text-[#FFFFFF] font-semibold leading-snug">
                                Want to delve deeper into the program?
                            </p>
                            <p className="text-sm sm:text-base lg:text-base text-[#F5F5F5] font-medium leading-normal mt-2">
                                Share your details to receive expert insights from our program team!
                            </p>
                        </div>
                    </div>

                    {/* Button */}
                    <button className="mt-4 lg:mt-0 w-full max-w-[200px] h-[52px] rounded-lg bg-[#FFFFFF] text-[#3B82F6] font-semibold text-base lg:text-lg flex items-center justify-center">
                        Get in touch
                        <img className="ml-2" src={Right_Arrow} alt="Right Arrow" />
                    </button>
                </div>
            </div>

            <Footer />
            <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
        </div>

    )
}

export default LandingPage
