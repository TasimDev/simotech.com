'use client'

import { useEffect } from "react";



const FormComponent = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
    };

    useEffect(() => {
        // Add any client-side specific logic here
        // For example, event listeners or API calls
        if (typeof window !== 'undefined') {
            // Your client-side logic here
        }

        // Cleanup function if needed
        return () => {
            // Cleanup logic
        };
    }, []); // Empty dependency array ensures this runs only once on mount

    return (
        <form onSubmit={handleSubmit} className="form">
            <div className="info">
                <div className="label">
                    <label htmlFor="name">Name *</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div className="label">
                    <label htmlFor="phone">Phone *</label>
                    <input type="text" name="phone" id="phone" />
                </div>
            </div>
            <div className="label">
                <label htmlFor="email">Email *</label>
                <input type="email" name="email" id="email" />
            </div>
            <div className="label">
                <label htmlFor="project">A little bit about your project *</label>
                <textarea name="project" id="project" cols="30" rows="10"></textarea>
            </div>
            <input className="btn-submit" type="submit" value="Get started" />
        </form>
    );
};

export default FormComponent;