"use client"
import React, { useState } from 'react';

function TestForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </label>
            </div>
            <div>
                <label>
                    Phone:
                    <input type="phone" name="text" value={formData.phone} onChange={handleChange} />
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default TestForm;