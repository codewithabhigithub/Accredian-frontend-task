import { useState } from 'react'
import logo from './image/logo.png.png'
import Vector from './image/Vector.png'
import Eclipse from './image/Ellipse 1.png'
import Aniversary from './image/Anniversary (7) 1.png'
import Circle from './image/circle.png'
import Accredainnew from './image/accredainnew.webp.png'
import Mic from './image/Mic.png'
import Dot from './image/Dot.png'
import Right_Arrow from './image/Right Arrow.png'
import Below_Arrow from './image/Arror below.png'
import Plus from './image/plus.png'
import Facebook from './image/facebook.png'
import Linkedin from './image/linkedin.png'
import Twitter from './image/twitter.png'
import Instagram from './image/instagram.png'
import Youtube from './image/youtube.png'
import Man from './image/man.png'
import Wallet from './image/Wallet.png'
import NotePad from './image/Notepad.png'
import Up_Arrow from './image/up Arrow.png'
import Down_Arrow from './image/Down Arrow.png'
import Right_Arrow_White from './image/Right Arrow White.png'
import Right_Arrow_Black from './image/Right Arrow Black.png'
import Cap from './image/Cap.png'
import Modal from './components/Modal'

const LandingPage = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div>
            <div className='bg-[#1A73E826] w-[1920px] h-[60px] py-[16px] px-[648px] m-auto'>

                {/* Banner */}
                <div className='font-medium text-base text-[#262626]'>Navigate your ideal career path with tailored expert advice
                    <span className='ml-2 text-[#1A73E8] font-medium'>Contact Expert</span>
                </div>
            </div>

            {/* Navbar */}
            <div className='w-[1920px] h-[79.2px] py-[9.6px] px-[280px] flex'>
                <div className='flex space-x-4 w-[560px] h-[40px]'>
                    <img className='w-[125px] h-[36.6px] mr-4' src={logo} alt="Logo" />
                    <button className='rounded-md flex items-center w-[116px] h-[40px] px-[18px] py-[8px] br-[6px] bg-[#1A73E8] text-[#FFFFFF]'>Courses <img className='ml-2' src={Vector} alt="Vector" /></button>
                </div>
                <div className='text-md w-[800px] h-[40px] text-center font-medium justify-end flex items-center space-x-8'>
                    <p>Refer & Earn</p>
                    <p>Resources</p>
                    <p>About Us</p>
                    <div className='w-[208.01px] h-[40px] flex  justify-between'>
                        <button className='font-medium w-[77px] h-[40px] bg-[#eaedf1] text-[#1A202C] px-[18px] py-[8px] rounded-md'>Login</button>
                        <button className='font-medium w-[115px] h-[40px] bg-[#1A73E8] text-[#FFFFFF] px-[18px] py-[8px] rounded-md'>Try for free</button>
                    </div>
                </div>
            </div>
            <div className='w-[1920px] flex justify-center mt-9'>
                <div className='font-mono flex justify-evenly items-center w-[797px] h-[63px] rounded-full bg-[#1A73E826] text-[#4B4B4B] text-2xl font-normal'>
                    <p className='text-[#1A73E8] flex flex-col items-center'>Refer<img className='w-[6px] h-[6px] ' src={Eclipse} alt="Logo" /></p>
                    <p>Benefits</p>
                    <p>FAQs</p>
                    <p>Support</p>
                </div>
            </div>
            <div className='w-[1920px] flex justify-center mt-6 '>
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
            </div>

            <div className='w-[1920px] h-[785px] bg-[#EEF5FF] mt-20 flex flex-col items-center justify-around'>
                <p className='font-semibold text-[#1A202C] text-2xl'>How Do I <span className='text-[#1A73E8]'>Refer?</span></p>
                <div className='w-[1387px] h-[491px]'>
                    <img className='w-[1387px] h-[491px]' src={Circle} alt="Circle" />
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

            <div className='w-[1920px] mt-20'>
                <p className='font-sans font-semibold text-[#1A202C] text-3xl text-center'>What Are The <span className='text-[#1A73E8]'>Referral Benefits?</span></p>
            </div>

            <div className='w-[1920px] flex justify-center mt-10'>
                <div className='w-[1230px] h-[54px] flex justify-end'>
                    <div className='w-[125.18px] h-[17px] flex justify-between items-center'>
                        <p className='font-normal text-xl text-[#3C4852]'>Enrolled</p>
                        <div className='w-[34.18px] h-[17px] rounded-full border-2 border-[#3C4852] flex justify-end'>
                            <img src={Dot} alt="Dot" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-[1920px] flex justify-center -mt-5'>
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
                    {/* <div className='w-[921px] h-[561px] drop-shadow-2xl'>
                        <div className='bg-[#afcef7] w-[921px] h-[58px] rounded-tl-xl rounded-tr-xl flex items-center justify-between '>
                            <p className='text-xl font-bold text-[#1350A0] ml-8'>Programs</p>
                            <div className='flex justify-between items-center w-[400px] mr-8'>
                                <p className='text-xl font-bold text-[#1350A0]'>Referrer Bonus</p>
                                <p className='text-xl font-bold text-[#1350A0]'>Referee Bonus</p>
                            </div>
                        </div>
                        <div className='bg-[#f8fbff] w-[921px] h-[503px] rounded-bl-xl rounded-br-xl'>
                            <div className='flex justify-between items-center'>
                                <div className='w-[387px]  h-[48px] flex justify items-center'>
                                    <img src={Cap} alt="Cap" className='mr-2 -mt-6' />
                                    <p className='text-xl font-normal text-[#3C4852]'>Professional Certificate Program in Product Management</p>
                                </div>
                                <div className='flex justify-around items-center w-[460px]'>
                                    <p className='text-xl font-normal text-[#3C4852]'>₹ 7,000</p>
                                    <p className='text-xl font-normal text-[#3C4852]'>₹ 9,000</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
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
                                    <td class="p-2 flex items-center text-xl font-normal text-[#3C4852] mt-3"><img src={Cap} alt="Cap" className='mr-2 ml-4'/> Professional Certificate Program in Product Management</td>
                                    <td class="p-2 text-xl font-normal text-[#3C4852]">₹ 7,000</td>
                                    <td class="p-2 text-xl font-normal text-[#3C4852]">₹ 9,000</td>
                                </tr>
                                <tr>
                                    <td class="p-2 flex items-center text-xl font-normal text-[#3C4852]"><img src={Cap} alt="Cap" className='mr-2 ml-4'/> PG Certificate Program in Strategic Product Management</td>
                                    <td class="p-2 text-xl font-normal text-[#3C4852]">₹ 9,000</td>
                                    <td class="p-2 text-xl font-normal text-[#3C4852]">₹ 11,000</td>
                                </tr>
                                <tr>
                                    <td class="p-2 flex items-center text-xl font-normal text-[#3C4852]"><img src={Cap} alt="Cap" className='mr-2 ml-4'/> Executive Program in Data Driven Product Management</td>
                                    <td class="p-2 text-xl font-normal text-[#3C4852]">₹ 10,000</td>
                                    <td class="p-2 text-xl font-normal text-[#3C4852]">₹ 10,000</td>
                                </tr>
                                <tr>
                                    <td class="p-2 flex items-center text-xl font-normal text-[#3C4852]"><img src={Cap} alt="Cap" className='mr-2 ml-4 -mt-7'/> Executive Program in Product Management and Digital Transformation</td>
                                    <td class="p-2 text-xl font-normal text-[#3C4852]">₹ 10,000</td>
                                    <td class="p-2 text-xl font-normal text-[#3C4852]">₹ 10,000</td>
                                </tr>
                                <tr>
                                    <td class="p-2 flex items-center text-xl font-normal text-[#3C4852]"><img src={Cap} alt="Cap" className='mr-2 ml-4'/> Executive Program in Product Management</td>
                                    <td class="p-2 text-xl font-normal text-[#3C4852]">₹ 10,000</td>
                                    <td class="p-2 text-xl font-normal text-[#3C4852]">₹ 10,000</td>
                                </tr>
                                <tr>
                                    <td class="p-2 flex items-center text-xl font-normal text-[#3C4852]"><img src={Cap} alt="Cap" className='mr-2 ml-4 '/> Advanced Certification in Product Management</td>
                                    <td class="p-2 text-xl font-normal text-[#3C4852]">₹ 10,000</td>
                                    <td class="p-2 text-xl font-normal text-[#3C4852]">₹ 10,000</td>
                                </tr>
                                <tr>
                                    <td class="p-2 flex items-center text-xl font-normal text-[#3C4852]"><img src={Cap} alt="Cap" className='mr-2 ml-4 -mt-7'/> Executive Program in Product Management and Project Management</td>
                                    <td class="p-2 text-xl font-normal text-[#3C4852]">₹ 10,000</td>
                                    <td class="p-2 text-xl font-normal text-[#3C4852]">₹ 10,000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className='w-[1920px] flex justify-center mt-5'>
                <div className='w-[1230px] h-[54px] flex justify-end'>
                    <button className='w-[174.66px] h-[41px] rounded-lg border-2 border-[#B6B6B6] text-[#9aa0a5] font-semibold text-lg flex items-center justify-center '>Show More <img className='ml-4 ' src={Below_Arrow} alt="Right_Arrow" /></button>
                </div>
            </div>

            <div className='w-[1920px] mt-5 flex justify-center'>
                <button className='bg-[#1A73E8] text-[#FFFFFF] rounded-lg w-[236px] h-[64px] px-[50px] py-[8px] font-normal text-xl' onClick={() => setShowModal(true)}>Refer Now</button>
            </div>

            <div className='w-[1920px] mt-40 flex justify-center'>
                <div className='w-[1281px] h-[341px] flex flex-col justify-between'>
                    <p className='font-sans font-semibold text-[#1A202C] text-3xl text-center'>Frequently Asked  <span className='text-[#1A73E8]'>Questions</span></p>

                    <div className='flex items-top justify-between w-[1281px]'>
                        <div className='w-[259px] h-[244px] flex flex-col justify-between'>
                            <button className='w-[259px] h-[68px] border-2 border-[#E2E8F0] rounded-lg font-semibold text-[#1A73E8] text-[16.59px] shadow-2xl'>Eligibility</button>
                            <button className='w-[259px] h-[68px] border-2 border-[#737373] rounded-lg font-semibold text-[#737373] text-[16.73px]'>How To Use?</button>
                            <button className='w-[259px] h-[68px] border-2 border-[#737373] rounded-lg font-semibold text-[#737373] text-[17.02px] '>Terms & Conditions</button>
                        </div>
                        <div className=''>
                            <button className='w-[918.41px] h-[68px] flex items-center justify-between'><p className='font-semibold text-[16.88px] text-[#1A73E8]'>Do I need to have prior Product Management and Project Management experience to enroll in the program?</p><img src={Up_Arrow} alt="UP Arrow" /></button>
                            <div className='flex items-center justify-center'><div className='w-[886.41px] h-[48px] flex items-center justify-center'><p className='font-normal text-[15.13px]'>No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it
                                suitable for individuals from any field of work.</p></div></div>
                            <button className='w-[770.36px] h-[68px] flex items-center justify-between'><p className='font-semibold text-[16.73px] text-[#000000]'>What is the minimum system configuration required?</p><img src={Down_Arrow} alt="Down Arrow" /></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-[1920px] mt-20 flex justify-center'>
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
            </div>

            {/* Footer */}
            <div className='w-[1920px] h-[795.88px] bg-[#282828] px-[360px] py-[32px] mt-24'>
                <div className='w-[1200px] h-[731.88px] flex flex-col items-center'>
                    <div className='w-[1152px] h-[59px] flex'>
                        <div className='w-[768px] h-[59px]'>
                            <img className='w-[144px] h-[38.33px]' src={Accredainnew} alt="Circle" />
                        </div>
                        <div className='w-[384px] h-[59px] px-[67px]'>
                            <button className='w-[250px] h-[39px] rounded-lg px-[39.53px] py-[7px] bg-[#007BFF] border-2 border-[#FFFFFF]'><p className='font-sans text-[#FFFFFF] font-medium text-sm '>Schedule 1-on-1 Call Now</p></button>
                            <p className='font-sans text-[#FFFFFF] font-normal text-sm text-center'>Speak with our Learning Advisor</p>
                        </div>
                    </div>
                    <div className='w-[1152px] h-[539.38px] border-t-2 border-white mt-10 flex'>
                        <div className='w-[432px] h-[503.38px] mt-9 pl-4 text-[#FFFFFF]  font-sans font-normal text-sm '>
                            <p className='text-xl mb-4'>Programs</p>
                            <div className='flex flex-col justify-between h-[459.38px] '>
                                <div className='flex'>
                                    <p className='font-bold text-base w-[324px]'>Data Science & AI</p>
                                    <img className='w-[24px] h-[24px] ' src={Plus} alt="Plus" />
                                </div>
                                <div className='flex'>
                                    <p className='font-bold text-base w-[324px]'>Product Management</p>
                                    <img className='w-[24px] h-[24px] ' src={Plus} alt="Plus" />
                                </div>
                                <div className='flex'>
                                    <p className='font-bold text-base w-[324px]'>Digital Transformation</p>
                                    <img className='w-[24px] h-[24px] ' src={Plus} alt="Plus" />
                                </div>
                                <div className='flex'>
                                    <p className='font-bold text-base w-[324px]'>Business Management</p>
                                    <img className='w-[24px] h-[24px]' src={Plus} alt="Plus" />
                                </div>
                                <div className='flex'>
                                    <p className='font-bold text-base w-[324px]'>Project Management</p>
                                    <img className='w-[24px] h-[24px] ' src={Plus} alt="Plus" />
                                </div>
                                <div className='flex'>
                                    <p className='font-bold text-base w-[324px]'>Strategy & Leadership</p>
                                    <img className='w-[24px] h-[24px] ' src={Plus} alt="Plus" />
                                </div>
                                <div className='flex'>
                                    <p className='font-bold text-base w-[324px]'>Senior Management</p>
                                    <img className='w-[24px] h-[24px] ' src={Plus} alt="Plus" />
                                </div>
                                <div className='flex'>
                                    <p className='font-bold text-base w-[324px]'>Fintech</p>
                                    <img className='w-[24px] h-[24px] ' src={Plus} alt="Plus" />
                                </div>
                            </div>
                        </div>
                        <div className='w-[528px] h-[503.38px] mt-9 text-[#FFFFFF] font-sans font-normal text-sm '>
                            <p className='text-xl mt-2'>Contact Us</p>
                            <a href="#" className='block'>Email us (For Data Science Queries): admissions@accredian.com</a>
                            <a href="#" className='block'>Email us (For Product Management Queries):pm@accredian.com</a>
                            <p href="#" className='block'>Data Science Admission Helpline:+91 9079653292 (9 AM - 7 PM)</p>
                            <p href="#" className='block'>Product Management Admission Helpline:+91 9625811095</p>
                            <p href="#" className='block'>Enrolled Student Helpline: +91 7969322507</p>
                            <p href="#" className='block'>Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015</p>
                            <a href="#" className='block text-lg'>Why Accredian</a>
                            <p href="#" className='block text-xl font-light'>Follow Us</p>
                            <div className='flex items-center justify-between w-[200px] mt-2'>
                                <div><img className='' src={Facebook} alt="Facebook" /></div>
                                <div><img className='' src={Linkedin} alt="Linkedin" /></div>
                                <div><img className='' src={Twitter} alt="Twitter" /></div>
                                <div><img className=' ' src={Instagram} alt="Instagram" /></div>
                                <div><img className=' ' src={Youtube} alt="Youtube" /></div>
                            </div>
                        </div>
                        <div className='w-[192px] h-[503.38px] mt-9 text-[#FFFFFF] font-sans font-normal text-sm '>
                            <p className='text-xl mt-2 mb-2'>Accredian</p>
                            <a href="#" className='block'>About</a>
                            <a href="#" className='block'>Career</a>
                            <a href="#" className='block'>Blog</a>
                            <a href="#" className='block'>Admission Policy</a>
                            <a href="#" className='block'>Referral Policy</a>
                            <a href="#" className='block'>Privacy Policy</a>
                            <a href="#" className='block'>Terms Of Services</a>
                            <a href="#" className='block'>Master FAQs</a>
                        </div>
                    </div>
                    <div className='w-[1152px] h-[101px] px-[327.87px] py-[40px]'>
                        <p className='font-sans text-[#FFFFFF] font-normal text-sm text-center'>© 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved</p>
                    </div>
                </div>
            </div>
            <Modal isVisible={showModal} onClose={() => setShowModal(false)}/>
        </div>
        
    )
}

export default LandingPage
