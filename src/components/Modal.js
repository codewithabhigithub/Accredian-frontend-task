import React, { useState } from 'react';
import axios from 'axios';
import logo from '../image/logo.png.png'

const Modal = ({ isVisible, onClose }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [referralMessage, setReferralMessage] = useState('');
    const [statusMessage, setStatusMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/referrals', {
                name,
                email,
                referralMessage,
            });

            if (response.status === 201) {
                setStatusMessage('Referral submitted successfully!');
                setName('');
                setEmail('');
                setReferralMessage('');
            }
        } catch (error) {
            setStatusMessage('Error submitting referral. Please try again.');
        }
    };

    if (!isVisible) return null
    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-[600px] flex flex-col'>
                <buttom className='text-black font-bold text-xl place-self-end cursor-pointer' onClick={() => onClose()}>X</buttom>
                <div className='bg-white p-2 rounded'>
                    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <img
                                alt="logo"
                                src={logo}
                                className="mx-auto w-auto"
                            />
                        </div>

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            id="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                        Email
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="email"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="referralMessage" className="block text-sm font-medium leading-6 text-gray-900">
                                        Referral Message
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            id="referralMessage"
                                            value={referralMessage}
                                            onChange={(e) => setReferralMessage(e.target.value)}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            required
                                        ></textarea>
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Submit
                                    </button>
                                </div>
                                {statusMessage && <p className="text-red-500">{statusMessage}</p>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
