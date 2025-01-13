import React, { useState, useEffect, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function ContactForm({ style }) {
    useEffect(() => {
        if (typeof window !== "undefined") {
            require("tw-elements");
        }
    }, []);
    const [state, handleSubmit] = useForm("contact");
    const [status, setStatus] = useState('');
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        message: '',
    });

    // Use useEffect to update the status based on form submission state
    useEffect(() => {
        if (state.succeeded) {
            setStatus('Message sent successfully!');
            setFormData({ email: '', subject: '', message: '' }); // Reset form after success
        } else if (state.errors && state.errors.length > 0) {
            setStatus('Failed to send message. Please try again later.');
        }
    }, [state.succeeded, state.errors]); // Effect depends on state changes

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const siblingRef = useRef(null);
    const [targetSiblingStyle, setTargetSiblingStyle] = useState({});

    useEffect(() => {
        const siblingElement = siblingRef.current;

        if (!siblingElement) return;

        const handleResize = () => {
            const width = siblingElement.offsetWidth;
            const height = siblingElement.offsetHeight;

            if (window.matchMedia('(min-width: 720px)').matches) {
                // After md breakpoint: Swap width and height
                setTargetSiblingStyle({
                    width:  `${width}px`,
                });
            } else {
                // Reset for small screens
                setTargetSiblingStyle({
                    width: `${width}px`,
                });
            }
        };

        const resizeObserver = new ResizeObserver(handleResize);
        resizeObserver.observe(siblingElement);

        // Initial call to set the styles
        handleResize();

        // Cleanup the observer on component unmount
        return () => resizeObserver.disconnect();
    }, []);

    return (
        <form onSubmit={handleSubmit} className="chat chat-end" style={style}>
            <div className="chat-header text-black">
                <div className="mb-1">
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        className="input input-xs md:input-sm w-full max-w-xs p-4"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={targetSiblingStyle}
                    />
                </div>
            </div>
            <div ref={siblingRef} className="chat-bubble w-[65%] md:w-[33%] py-3 flex border-transparent">
                <div>
                    <div className="pb-1 border-b-2 mb-2 flex justify-center">
                        <input
                            type="text"
                            placeholder="Subject"
                            name="subject"
                            className="input input-sm md:input-md w-full max-w-xs my-1"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex justify-center">
                        <div className="flex">
                            <textarea
                                placeholder="Message"
                                name="message"
                                className="textarea textarea-bordered w-full max-w-xs resize-none border-r-0 pr-[35px]"
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                            <div
                                className="flex justify-center items-end textarea textarea-bordered p-0 border-l-0 border-transparent ml-[-25px] h-[98%]"
                                style={{ backgroundColor: '#1D232A' }}
                            >
                                <button
                                    type="submit"
                                    className="rounded-full w-[20px] h-[20px] text-white"
                                    style={{
                                        fontSize: '10px',
                                        backgroundColor: '#00B5FF',
                                    }}
                                >
                                    <FontAwesomeIcon icon={faArrowUp} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="chat-footer opacity-50 text-black">{status}</div>
        </form>
    );
}
