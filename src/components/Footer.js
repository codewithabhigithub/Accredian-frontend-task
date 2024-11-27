// import React from 'react';
// import Accredainnew from '../image/accredainnew.webp.png'
// import Plus from '../image/plus.png'
// import Facebook from '../image/facebook.png'
// import Linkedin from '../image/linkedin.png'
// import Twitter from '../image/twitter.png'
// import Instagram from '../image/instagram.png'
// import Youtube from '../image/youtube.png'

// const Footer = () => {
//     return (
//         <>
//             {/* Footer */}
//             <div className='w-[1920px] h-[795.88px] bg-[#282828] px-[360px] py-[32px] mt-24'>
//                 <div className='w-[1200px] h-[731.88px] flex flex-col items-center'>
//                     <div className='w-[1152px] h-[59px] flex'>
//                         <div className='w-[768px] h-[59px]'>
//                             <img className='w-[144px] h-[38.33px]' src={Accredainnew} alt="Circle" />
//                         </div>
//                         <div className='w-[384px] h-[59px] px-[67px]'>
//                             <button className='w-[250px] h-[39px] rounded-lg px-[39.53px] py-[7px] bg-[#007BFF] border-2 border-[#FFFFFF]'><p className='font-sans text-[#FFFFFF] font-medium text-sm '>Schedule 1-on-1 Call Now</p></button>
//                             <p className='font-sans text-[#FFFFFF] font-normal text-sm text-center'>Speak with our Learning Advisor</p>
//                         </div>
//                     </div>
//                     <div className='w-[1152px] h-[539.38px] border-t-2 border-white mt-10 flex'>
//                         <div className='w-[432px] h-[503.38px] mt-9 pl-4 text-[#FFFFFF]  font-sans font-normal text-sm '>
//                             <p className='text-xl mb-4'>Programs</p>
//                             <div className='flex flex-col justify-between h-[459.38px] '>
//                                 <div className='flex'>
//                                     <p className='font-bold text-base w-[324px]'>Data Science & AI</p>
//                                     <img className='w-[24px] h-[24px] ' src={Plus} alt="Plus" />
//                                 </div>
//                                 <div className='flex'>
//                                     <p className='font-bold text-base w-[324px]'>Product Management</p>
//                                     <img className='w-[24px] h-[24px] ' src={Plus} alt="Plus" />
//                                 </div>
//                                 <div className='flex'>
//                                     <p className='font-bold text-base w-[324px]'>Digital Transformation</p>
//                                     <img className='w-[24px] h-[24px] ' src={Plus} alt="Plus" />
//                                 </div>
//                                 <div className='flex'>
//                                     <p className='font-bold text-base w-[324px]'>Business Management</p>
//                                     <img className='w-[24px] h-[24px]' src={Plus} alt="Plus" />
//                                 </div>
//                                 <div className='flex'>
//                                     <p className='font-bold text-base w-[324px]'>Project Management</p>
//                                     <img className='w-[24px] h-[24px] ' src={Plus} alt="Plus" />
//                                 </div>
//                                 <div className='flex'>
//                                     <p className='font-bold text-base w-[324px]'>Strategy & Leadership</p>
//                                     <img className='w-[24px] h-[24px] ' src={Plus} alt="Plus" />
//                                 </div>
//                                 <div className='flex'>
//                                     <p className='font-bold text-base w-[324px]'>Senior Management</p>
//                                     <img className='w-[24px] h-[24px] ' src={Plus} alt="Plus" />
//                                 </div>
//                                 <div className='flex'>
//                                     <p className='font-bold text-base w-[324px]'>Fintech</p>
//                                     <img className='w-[24px] h-[24px] ' src={Plus} alt="Plus" />
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='w-[528px] h-[503.38px] mt-9 text-[#FFFFFF] font-sans font-normal text-sm '>
//                             <p className='text-xl mt-2'>Contact Us</p>
//                             <a href="/" className='block'>Email us (For Data Science Queries): admissions@accredian.com</a>
//                             <a href="/" className='block'>Email us (For Product Management Queries):pm@accredian.com</a>
//                             <p href="/" className='block'>Data Science Admission Helpline:+91 9079653292 (9 AM - 7 PM)</p>
//                             <p href="/" className='block'>Product Management Admission Helpline:+91 9625811095</p>
//                             <p href="/" className='block'>Enrolled Student Helpline: +91 7969322507</p>
//                             <p href="/" className='block'>Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015</p>
//                             <a href="/" className='block text-lg'>Why Accredian</a>
//                             <p href="/" className='block text-xl font-light'>Follow Us</p>
//                             <div className='flex items-center justify-between w-[200px] mt-2'>
//                                 <div><img className='' src={Facebook} alt="Facebook" /></div>
//                                 <div><img className='' src={Linkedin} alt="Linkedin" /></div>
//                                 <div><img className='' src={Twitter} alt="Twitter" /></div>
//                                 <div><img className=' ' src={Instagram} alt="Instagram" /></div>
//                                 <div><img className=' ' src={Youtube} alt="Youtube" /></div>
//                             </div>
//                         </div>
//                         <div className='w-[192px] h-[503.38px] mt-9 text-[#FFFFFF] font-sans font-normal text-sm '>
//                             <p className='text-xl mt-2 mb-2'>Accredian</p>
//                             <a href="/" className='block'>About</a>
//                             <a href="/" className='block'>Career</a>
//                             <a href="/" className='block'>Blog</a>
//                             <a href="/" className='block'>Admission Policy</a>
//                             <a href="/" className='block'>Referral Policy</a>
//                             <a href="/" className='block'>Privacy Policy</a>
//                             <a href="/" className='block'>Terms Of Services</a>
//                             <a href="/" className='block'>Master FAQs</a>
//                         </div>
//                     </div>
//                     <div className='w-[1152px] h-[101px] px-[327.87px] py-[40px]'>
//                         <p className='font-sans text-[#FFFFFF] font-normal text-sm text-center'>© 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved</p>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Footer;


import React from 'react';
import Accredainnew from '../image/accredainnew.webp.png';
import Plus from '../image/plus.png';
import Facebook from '../image/facebook.png';
import Linkedin from '../image/linkedin.png';
import Twitter from '../image/twitter.png';
import Instagram from '../image/instagram.png';
import Youtube from '../image/youtube.png';

const Footer = () => {
    return (
        <div className="w-full bg-[#282828] py-8 mt-12 lg:mt-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
            <div className="max-w-[1200px] mx-auto">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                    {/* Left Column */}
                    <div className="flex justify-start items-center space-x-4 mb-4 md:mb-0">
                        <img className="w-[144px] h-[38.33px]" src={Accredainnew} alt="Accredian Logo" />
                    </div>
                    {/* Right Column */}
                    <div className="text-center md:text-right">
                        <button className="w-[250px] h-[39px] rounded-lg bg-[#007BFF] border-2 border-[#FFFFFF] mb-2">
                            <p className="font-sans text-[#FFFFFF] font-medium text-sm">Schedule 1-on-1 Call Now</p>
                        </button>
                        <p className="font-sans text-[#FFFFFF] font-normal text-sm">Speak with our Learning Advisor</p>
                    </div>
                </div>

                {/* Middle Section: Programs and Contact Us */}
                <div className="flex flex-col md:flex-row justify-between border-t-2 border-white pt-8">
                    {/* Programs */}
                    <div className="w-full md:w-[432px] mb-8 md:mb-0 text-[#FFFFFF]">
                        <p className="text-xl mb-4">Programs</p>
                        <div className="space-y-4">
                            {['Data Science & AI', 'Product Management', 'Digital Transformation', 'Business Management', 'Project Management', 'Strategy & Leadership', 'Senior Management', 'Fintech'].map((program, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                    <p className="font-bold text-base w-[300px]">{program}</p>
                                    <img className="w-[24px] h-[24px]" src={Plus} alt="Plus" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Us */}
                    <div className="w-full md:w-[528px] mb-8 md:mb-0 text-[#FFFFFF]">
                        <p className="text-xl mb-4">Contact Us</p>
                        <div className="space-y-2">
                            <a href="/" className="block">Email us (For Data Science Queries): admissions@accredian.com</a>
                            <a href="/" className="block">Email us (For Product Management Queries): pm@accredian.com</a>
                            <p className="block">Data Science Admission Helpline: +91 9079653292 (9 AM - 7 PM)</p>
                            <p className="block">Product Management Admission Helpline: +91 9625811095</p>
                            <p className="block">Enrolled Student Helpline: +91 7969322507</p>
                            <p className="block">Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015</p>
                            <a href="/" className="block text-lg mt-4">Why Accredian</a>
                            <p className="text-xl font-light mt-4">Follow Us</p>
                            <div className="flex justify-between space-x-4 mt-2">
                                <img className="w-6 h-6" src={Facebook} alt="Facebook" />
                                <img className="w-6 h-6" src={Linkedin} alt="Linkedin" />
                                <img className="w-6 h-6" src={Twitter} alt="Twitter" />
                                <img className="w-6 h-6" src={Instagram} alt="Instagram" />
                                <img className="w-6 h-6" src={Youtube} alt="Youtube" />
                            </div>
                        </div>
                    </div>

                    {/* Accredian Section */}
                    <div className="w-full md:w-[192px] text-[#FFFFFF]">
                        <p className="text-xl mb-4">Accredian</p>
                        <div className="space-y-2">
                            <a href="/" className="block">About</a>
                            <a href="/" className="block">Career</a>
                            <a href="/" className="block">Blog</a>
                            <a href="/" className="block">Admission Policy</a>
                            <a href="/" className="block">Referral Policy</a>
                            <a href="/" className="block">Privacy Policy</a>
                            <a href="/" className="block">Terms Of Services</a>
                            <a href="/" className="block">Master FAQs</a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="text-center mt-8">
                    <p className="font-sans text-[#FFFFFF] font-normal text-sm">© 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
