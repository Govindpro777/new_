import React, { useState } from 'react';
import { ChevronRight, FileText, Calendar, User, Send, Paperclip, Smile, Phone, Video, MoreVertical } from 'lucide-react';
import crown from "@/public/Vector.png"
import Image from 'next/image';
import img1 from "@/public/Group 316127895.png"
import img2 from "@/public/Group 316127895 (3).png"
import img3 from "@/public/Group 316127895 (2).png"

const ProjectSelectionInterface = () => {
    const [projectType, setProjectType] = useState('');
    const [projectSubject, setProjectSubject] = useState('');
    const [deadline, setDeadline] = useState('');

    const experts = [
        {
            name: 'Peruvian Deep S.',
            rating: 4.8,
            completedProjects: 85,
            price: 50,
            avatar: img1
        },
        {
            name: 'Assen Stanton',
            rating: 4.5,
            completedProjects: 72,
            price: 50,
            avatar: img2
        },
        {
            name: 'Jakob Terff',
            rating: 4.7,
            completedProjects: 93,
            price: 50,
            avatar: img3
        }
    ];
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([
        {
            sender: 'Zain Stanton',
            text: 'If required I can quickly ready to review and help improve your assignment basis of my previous academic project and research.',
            time: '10:05 AM',
            avatar: img1
        },
        {
            sender: 'You',
            text: 'Great! I need help with my research paper on digital marketing trends.',
            time: '10:07 AM',
            avatar: img2
        }
    ]);

    const handleSendMessage = () => {
        if (message.trim()) {
            setMessages([
                ...messages,
                {
                    sender: 'You',
                    text: message,
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    avatar: img2
                }
            ]);
            setMessage('');
        }
    };

    return (
        <>
            <div className="relative flex flex-col items-center mb-12">
                <div className="relative w-16 h-20 md:right-32 right-0 mx-auto md:mx-0">
                    <Image
                        src={crown}
                        alt="Crown"
                        fill
                        className="object-contain opacity-70"
                    />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-center">How It Works</h2>
            </div>

            <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
                {/* Step 01: Fill in a brief */}
                <div className="w-full md:w-1/2 p-4 md:p-8 border-b md:border-b-0 md:border-r border-gray-200">
                    <div className="flex items-center mb-4 md:mb-6">
                        <div className="text-3xl md:text-4xl font-bold text-purple-600 mr-4">Step 01</div>
                        <h2 className="text-xl md:text-2xl font-semibold">Fill in a brief</h2>
                    </div>
                    <p className="text-gray-600 mb-4 md:mb-6">Tell us what you need help with, describe your project requirements, and set the deadline.</p>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                            <div className="relative">
                                <select
                                    value={projectType}
                                    onChange={(e) => setProjectType(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md appearance-none"
                                >
                                    <option value="">Select Project Type</option>
                                    <option value="web">Web Development</option>
                                    <option value="design">Design</option>
                                </select>
                                <FileText className="absolute right-3 top-3 text-gray-400" size={20} />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Project Subject</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={projectSubject}
                                    onChange={(e) => setProjectSubject(e.target.value)}
                                    placeholder="Describe your project"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                />
                                <User className="absolute right-3 top-3 text-gray-400" size={20} />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Deadline</label>
                            <div className="relative">
                                <input
                                    type="date"
                                    value={deadline}
                                    onChange={(e) => setDeadline(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                />
                                <Calendar className="absolute right-3 top-3 text-gray-400" size={20} />
                            </div>
                        </div>

                        <button
                            type="button"
                            className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition flex items-center justify-center"
                        >
                            Get Started <ChevronRight className="ml-2" />
                        </button>
                    </form>
                </div>

                {/* Step 02: Choose an expert */}
                <div className="w-full md:w-1/2 p-4 md:p-8">
                    <div className="flex items-center mb-4 md:mb-6">
                        <div className="text-3xl md:text-4xl font-bold text-purple-600 mr-4">Step 02</div>
                        <h2 className="text-xl md:text-2xl font-semibold">Choose an expert</h2>
                    </div>
                    <p className="text-gray-600 mb-4 md:mb-6">Receive offers from those who can help with assignments, compare their ratings, and pick the best one for your task.</p>

                    <div className="space-y-4">
                        {experts.map((expert, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between border border-gray-200 rounded-lg p-3 md:p-4 hover:shadow-md transition"
                            >
                                <div className="flex items-center">
                                    <Image
                                        src={expert.avatar}
                                        alt={expert.name}
                                        width={64}
                                        height={64}
                                        className="w-12 h-12 md:w-16 md:h-16 rounded-full mr-2 md:mr-4"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-sm md:text-base">{expert.name}</h3>
                                        <div className="flex items-center text-xs md:text-sm text-gray-600">
                                            <span className="text-yellow-500 mr-1">★</span>
                                            {expert.rating} ({expert.completedProjects} projects)
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-base md:text-lg font-bold text-purple-600">${expert.price}</div>
                                    <button className="mt-1 md:mt-2 text-xs md:text-sm text-purple-600 hover:underline">
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-6 md:mt-8 flex w-full max-w-5xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
                <div className="w-full p-4 md:p-8">
                    <div className="flex items-center mb-4 md:mb-6">
                        <div className="text-3xl md:text-4xl font-bold text-purple-600 mr-4">Step 03</div>
                        <h2 className="text-xl md:text-2xl font-semibold">Get It Done On Time</h2>
                    </div>
                    <p className="text-gray-600 mb-4 md:mb-6">Chat with the expert directly, discuss your project in detail, and get professional academic assistance by the deadline.</p>

                    <div className="bg-gray-100 rounded-lg overflow-hidden">
                        {/* Chat Header */}
                        <div className="bg-white p-3 md:p-4 flex items-center justify-between border-b">
                            <div className="flex items-center">
                                <Image
                                    src={img1}
                                    alt="Zain Stanton"
                                    width={48}
                                    height={48}
                                    className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-3 md:mr-4"
                                />
                                <div>
                                    <h3 className="font-semibold text-sm md:text-base">Zain Stanton</h3>
                                    <div className="flex items-center text-xs text-gray-500">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                        Online
                                    </div>
                                </div>
                            </div>
                            <div className="flex space-x-2 md:space-x-3">
                                <Phone className="text-gray-600 cursor-pointer" size={18} />
                                <Video className="text-gray-600 cursor-pointer" size={18} />
                                <MoreVertical className="text-gray-600 cursor-pointer" size={18} />
                            </div>
                        </div>

                        {/* Chat Messages */}
                        <div className="p-3 md:p-4 space-y-3 max-h-48 md:max-h-64 overflow-y-auto">
                            {messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`flex items-start ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}
                                >
                                    {msg.sender !== 'You' && (
                                        <Image
                                            src={msg.avatar}
                                            alt={msg.sender}
                                            width={40}
                                            height={40}
                                            className="w-8 h-8 md:w-10 md:h-10 rounded-full mr-2 md:mr-3"
                                        />
                                    )}
                                    <div
                                        className={`
                                          p-2 md:p-3 rounded-lg max-w-[75%] md:max-w-[70%]
                                          ${msg.sender === 'You'
                                                ? 'bg-purple-600 text-white'
                                                : 'bg-white text-gray-800 border'}
                                        `}
                                    >
                                        <p className="text-xs md:text-sm">{msg.text}</p>
                                        <div className="text-xs text-opacity-70 mt-1 text-right">
                                            {msg.time}
                                        </div>
                                    </div>
                                    {msg.sender === 'You' && (
                                        <Image
                                            src={msg.avatar}
                                            alt={msg.sender}
                                            width={40}
                                            height={40}
                                            className="w-8 h-8 md:w-10 md:h-10 rounded-full ml-2 md:ml-3"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Message Input */}
                        <div className="p-3 md:p-4 bg-white border-t flex items-center space-x-2 md:space-x-3">
                            <Paperclip className="text-gray-600 cursor-pointer" size={18} />
                            <Smile className="text-gray-600 cursor-pointer" size={18} />
                            <div className="flex-grow relative">
                                <input
                                    type="text"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Write a Message..."
                                    className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-full text-sm"
                                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                />
                            </div>
                            <button
                                onClick={handleSendMessage}
                                className="bg-purple-600 text-white rounded-full p-2 hover:bg-purple-700 transition"
                            >
                                <Send size={18} />
                            </button>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="w-full md:w-[200px] mt-4 bg-purple-600 text-white py-2 md:py-3 rounded-md hover:bg-purple-700 transition flex items-center justify-center"
                    >
                        Get Started <ChevronRight className="ml-2" />
                    </button>
                </div>
            </div>
        </>
    );
};

export default ProjectSelectionInterface;