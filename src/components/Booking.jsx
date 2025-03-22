import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Booking(){
    const [submittedData, setSubmittedData] = useState(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        setSubmittedData(data);
    };

    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
            <h2 className="text-2xl font-bold text-center text-blue-800">Book a Session</h2>

            {!submittedData ? (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Select Date</label>
                        <input
                            type="date"
                            {...register("date", { required: true })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.date && (
                            <p className="text-sm text-red-500 mt-1">Date is required</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Select Time</label>
                        <input
                            type="time"
                            {...register("time", { required: true })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.time && (
                            <p className="text-sm text-red-500 mt-1">Time is required</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                    >
                        Submit
                    </button>
                </form>
            ) : (
                <div className="text-center space-y-2">
                    <h3 className="text-lg font-semibold text-green-600">Session booked!</h3>
                    <p className="text-sm text-gray-700">
                        You've booked a session on {submittedData.date} at {submittedData.time}.
                    </p>
                    <button
                        onClick={() => {
                            setSubmittedData(null);
                            reset();
                        }}
                        className="mt-3 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                    >
                        Book another
                    </button>
                </div>
            )}
        </div>
    );
};

