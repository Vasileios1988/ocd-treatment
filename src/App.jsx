import React, { useState } from "react";
import Hero from "./components/Hero";
import Booking from "./components/Booking";

function App() {
    const [showBooking, setShowBooking] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            {!showBooking && (
                <Hero onBookClick={() => setShowBooking(true)} />
            )}
            {showBooking && (
                <div className="flex items-center justify-center min-h-screen">
                    <Booking />
                </div>
            )}
        </div>
    );
}

export default App;

