import React from "react";
import therapyImage from '../images/therapy (1).jpg';
import '../index.css';

export default function Hero( {onBookClick}) {
    return (
        <section className="relative h-screen w-full overflow-hidden flex bg-gray-200">
            {/* Text Side */}
            <div className="z-10 w-full md:w-1/2 h-full flex items-center p-8">
                <div className="max-w-xl text-left">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                        OCD is treatable — with the right help.
                    </h1>
                    <p className="text-xl mb-6">
                        Our team of specialist clinical psychologists delivers evidence-based treatment tailored exclusively to OCD.
                    </p>
                    <button
                        onClick={onBookClick}
                        className="bg-blue-800 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl text-lg transition">
                        Book a Free Consultation
                    </button>
                    <p className="text-sm text-gray-600 mt-4">
                        Confidential. No obligation. For you or someone you care about.
                    </p>
                </div>
            </div>

            {/* Diagonal Image Side */}
            <div className="hidden md:block absolute top-0 right-0 w-1/2 h-full diagonal-clip">
                <img
                    src={therapyImage}
                    alt="therapy session"
                    className="w-full h-full object-cover"
                />
            </div>
        </section>
    );
}
