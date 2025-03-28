import React, { useState } from 'react';
import { ChevronRight, FileText, Calendar, User, Send, Paperclip, Smile, Phone, Video, MoreVertical } from 'lucide-react';
import crown from "@/public/Vector.png"
import Image from 'next/image';

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
            avatar: '/api/placeholder/100/100'
        },
        {
            name: 'Assen Stanton',
            rating: 4.5,
            completedProjects: 72,
            price: 50,
            avatar: '/api/placeholder/100/100'
        },
        {
            name: 'Jakob Terff',
            rating: 4.7,
            completedProjects: 93,
            price: 50,
            avatar: '/api/placeholder/100/100'
        }
    ];
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([
        {
            sender: 'Zain Stanton',
            text: 'If required I can quickly ready to review and help improve your assignment basis of my previous academic project and research.',
            time: '10:05 AM',
            avatar: '/api/placeholder/40/40'
        },
        {
            sender: 'You',
            text: 'Great! I need help with my research paper on digital marketing trends.',
            time: '10:07 AM',
            avatar: '/api/placeholder/40/40'
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
                    avatar: '/api/placeholder/40/40'
                }
            ]);
            setMessage('');
        }
    };

    return (
        <>
            <div className="relative flex flex-col items-center mb-12">
                <div className="relative w-16 h-20 right-32">
                    <Image
                        src={crown}
                        alt="Crown"
                        fill
                        className="object-contain opacity-70"
                    />
                </div>
                <h2 className="text-4xl font-bold text-center">How It Works</h2>
            </div>

            <div className="flex w-full max-w-5xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden ">


                {/* Step 01: Fill in a brief */}
                <div className="w-1/2 p-8 border-r border-gray-200">
                    <div className="flex items-center mb-6">
                        <div className="text-4xl font-bold text-purple-600 mr-4">Step 01</div>
                        <h2 className="text-2xl font-semibold">Fill in a brief</h2>
                    </div>
                    <p className="text-gray-600 mb-6">Tell us what you need help with, describe your project requirements, and set the deadline.</p>

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
                <div className="w-1/2 p-8">
                    <div className="flex items-center mb-6">
                        <div className="text-4xl font-bold text-purple-600 mr-4">Step 02</div>
                        <h2 className="text-2xl font-semibold">Choose an expert</h2>
                    </div>
                    <p className="text-gray-600 mb-6">Receive offers from those who can help with assignments, compare their ratings, and pick the best one for your task.</p>

                    <div className="space-y-4">
                        {experts.map((expert, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
                            >
                                <div className="flex items-center">
                                    <img
                                        src={expert.avatar}
                                        alt={expert.name}
                                        className="w-16 h-16 rounded-full mr-4"
                                    />
                                    <div>
                                        <h3 className="font-semibold">{expert.name}</h3>
                                        <div className="flex items-center text-sm text-gray-600">
                                            <span className="text-yellow-500 mr-1">★</span>
                                            {expert.rating} ({expert.completedProjects} projects)
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-lg font-bold text-purple-600">${expert.price}</div>
                                    <button className="mt-2 text-sm text-purple-600 hover:underline">
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>






            <div className="mt-8 flex w-full max-w-5xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">

                <div className="w-full p-8">
                    <div className="flex items-center mb-6">
                        <div className="text-4xl font-bold text-purple-600 mr-4">Step 03</div>
                        <h2 className="text-2xl font-semibold">Get It Done On Time</h2>
                    </div>
                    <p className="text-gray-600 mb-6">Chat with the expert directly, discuss your project in detail, and get professional academic assistance by the deadline.</p>

                    <div className="bg-gray-100 rounded-lg overflow-hidden">
                        {/* Chat Header */}
                        <div className="bg-white p-4 flex items-center justify-between border-b">
                            <div className="flex items-center">
                                <img
                                    src="/api/placeholder/50/50"
                                    alt="Zain Stanton"
                                    className="w-12 h-12 rounded-full mr-4"
                                />
                                <div>
                                    <h3 className="font-semibold">Zain Stanton</h3>
                                    <div className="flex items-center text-xs text-gray-500">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                        Online
                                    </div>
                                </div>
                            </div>
                            <div className="flex space-x-3">
                                <Phone className="text-gray-600 cursor-pointer" size={20} />
                                <Video className="text-gray-600 cursor-pointer" size={20} />
                                <MoreVertical className="text-gray-600 cursor-pointer" size={20} />
                            </div>
                        </div>

                        {/* Chat Messages */}
                        <div className="p-4 space-y-3 max-h-64 overflow-y-auto">
                            {messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`flex items-start ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}
                                >
                                    {msg.sender !== 'You' && (
                                        <img
                                            src={msg.avatar}
                                            alt={msg.sender}
                                            className="w-10 h-10 rounded-full mr-3"
                                        />
                                    )}
                                    <div
                                        className={`
                    p-3 rounded-lg max-w-[70%]
                    ${msg.sender === 'You'
                                                ? 'bg-purple-600 text-white'
                                                : 'bg-white text-gray-800 border'}
                  `}
                                    >
                                        <p className="text-sm">{msg.text}</p>
                                        <div className="text-xs text-opacity-70 mt-1 text-right">
                                            {msg.time}
                                        </div>
                                    </div>
                                    {msg.sender === 'You' && (
                                        <img
                                            src={msg.avatar}
                                            alt={msg.sender}
                                            className="w-10 h-10 rounded-full ml-3"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Message Input */}
                        <div className="p-4 bg-white border-t flex items-center space-x-3">
                            <Paperclip className="text-gray-600 cursor-pointer" size={20} />
                            <Smile className="text-gray-600 cursor-pointer" size={20} />
                            <div className="flex-grow relative">
                                <input
                                    type="text"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Write a Message..."
                                    className="w-full px-4 py-2 border border-gray-300 rounded-full"
                                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                />
                            </div>
                            <button
                                onClick={handleSendMessage}
                                className="bg-purple-600 text-white rounded-full p-2 hover:bg-purple-700 transition"
                            >
                                <Send size={20} />
                            </button>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="w-[200px] mt-4 bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition flex items-center justify-center"
                    >
                        Get Started <ChevronRight className="ml-2" />
                    </button>
                </div>

            </div>



        </>

    );
};

export default ProjectSelectionInterface;