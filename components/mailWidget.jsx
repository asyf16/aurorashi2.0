'use client';
import { useState } from 'react';
import { Send, Mail } from 'lucide-react';

export default function MailWidget() {
  const [fromEmail, setFromEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    
    setTimeout(() => {
      setSending(false);
      setSent(true);
      
      setTimeout(() => {
        setFromEmail('');
        setSubject('');
        setMessage('');
        setSent(false);
      }, 3000);
    }, 1500);
  };
  
  return (
    <div className="w-full h-full p-8">
      <div className="flex items-center mb-6">
        <Mail className="h-6 w-6 text-[#5778d4] mr-2" />
        <h3 className="font-textreg font-bold sm:text-xl text-lg text-gray-700">Send a Message</h3>
      </div>
      
      <div className="mb-4 text-sm bg-gray-100 p-3  border-gray-300  border rounded flex items-center">
        <span className="font-medium text-gray-500 mr-2">To:</span>
        <span className="text-gray-700">aurorashi16@gmail.com</span>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="fromEmail" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
          <input
            type="email"
            id="fromEmail"
            className="w-full px-3 py-2 border text-gray-700 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5778d4]"
            value={fromEmail}
            onChange={(e) => setFromEmail(e.target.value)}
            placeholder="your-email@example.com"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
          <input
            type="text"
            id="subject"
            className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5778d4]"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Enter subject"
            required
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea
            id="message"
            className="w-full px-3 py-2 border border-gray-300 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={sending || sent}
          className={`w-full flex justify-center items-center py-2 px-4 rounded-md text-white font-medium transition duration-150 
                     ${sending || sent 
                       ? 'bg-[#699157] cursor-not-allowed' 
                       : 'bg-[#5778d4] hover:bg-[#28479e] focus:outline-none'}`}
        >
          {sending ? (
            <>Sending...</>
          ) : sent ? (
            <>Sent Successfully!</>
          ) : (
            <>
              <Send className="h-4 w-4 mr-2" />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
}