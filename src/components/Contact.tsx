import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className="contact">
            <h2>Contact Me</h2>
            <p>If you would like to get in touch, feel free to reach out via email or connect with me on social media!</p>
            <ul>
                <li>Email: your.email@example.com</li>
                <li>LinkedIn: <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">yourprofile</a></li>
                <li>GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">yourusername</a></li>
            </ul>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Contact;