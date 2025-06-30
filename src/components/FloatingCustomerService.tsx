import React, { useState } from 'react';
import { MessageCircle, X, Headphones, Send, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const FloatingCustomerService = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  if (!isVisible) return null;

  const handleSendMessage = () => {
    if (message.trim()) {
      // Here you would integrate with your customer service system
      console.log('Message sent:', message);
      setMessage('');
      setSent(true);
      setTimeout(() => setSent(false), 4000);
    }
  };

  return (
    <>
      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[80vh] overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-primary-600 text-white p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Headphones size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Customer Support</h3>
                    <p className="text-sm opacity-90">We're here to help!</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsPopupOpen(false)}
                  className="w-8 h-8 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Chat Area */}
            <div className="p-6 space-y-4 max-h-60 overflow-y-auto">
              {/* Welcome message */}
              <div className="flex space-x-3">
                <div className="w-8 h-8 bg-primary bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Headphones size={14} className="text-primary" />
                </div>
                <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                  <p className="text-sm text-gray-800">
                    Hi! 👋 Welcome to ZiloTech support. How can we help you today?
                  </p>
                </div>
              </div>

              {/* Quick action buttons */}
              <div className="space-y-2">
                <p className="text-xs text-gray-500 font-medium">Quick Actions:</p>
                <div className="grid grid-cols-1 gap-2">
                  <button className="flex items-center space-x-2 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-left">
                    <Phone size={16} className="text-primary" />
                    <span className="text-sm">Request a call back</span>
                  </button>
                  <button className="flex items-center space-x-2 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-left">
                    <Mail size={16} className="text-primary" />
                    <span className="text-sm">Send us an email</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Message Input */}
            <div className="p-6 border-t bg-gray-50">
              <div className="space-y-3">
                {sent ? (
                  <div className="flex items-center justify-center text-green-600 animate-fade-in">
                    <span className="text-sm font-semibold">Thank you! Your message has been sent. Our team will get back to you soon.</span>
                  </div>
                ) : (
                  <>
                    <Textarea
                      placeholder="Type your message here..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="resize-none"
                      rows={3}
                    />
                    <div className="flex space-x-2">
                      <Button
                        onClick={handleSendMessage}
                        className="flex-1 bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700"
                        disabled={!message.trim()}
                      >
                        <Send size={16} className="mr-2" />
                        Send Message
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Widget */}
      <div className="fixed bottom-6 right-6 z-40 group">
        {/* Pulsing background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-600 rounded-full animate-ping opacity-75"></div>
        
        {/* Main widget button */}
        <div 
          onClick={() => setIsPopupOpen(true)}
          className="relative bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-full p-4 shadow-2xl cursor-pointer transition-all duration-300 hover:scale-110 animate-bounce"
        >
          <MessageCircle size={24} className="animate-pulse" />
          
          {/* Notification dot */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
          
          {/* Close button (appears on hover) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsVisible(false);
            }}
            className="absolute -top-2 -left-2 w-6 h-6 bg-gray-600 hover:bg-gray-700 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center"
          >
            <X size={12} />
          </button>
        </div>
        
        {/* Tooltip/Preview message */}
        {!isPopupOpen && (
          <div className="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-white text-gray-800 px-4 py-3 rounded-lg shadow-xl border max-w-xs">
              <div className="flex items-center space-x-2 mb-2">
                <Headphones size={16} className="text-primary" />
                <span className="font-semibold text-sm">Need Help?</span>
              </div>
              <p className="text-xs text-gray-600">
                Chat with our customer service team for instant support!
              </p>
              <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white border-r border-b"></div>
            </div>
          </div>
        )}
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-2 -left-2 w-1 h-1 bg-primary-300 rounded-full animate-ping" style={{ animationDelay: '0s', animationDuration: '2s' }}></div>
          <div className="absolute -top-1 -right-3 w-1 h-1 bg-primary-400 rounded-full animate-ping" style={{ animationDelay: '0.5s', animationDuration: '2s' }}></div>
          <div className="absolute -bottom-2 -left-1 w-1 h-1 bg-primary-500 rounded-full animate-ping" style={{ animationDelay: '1s', animationDuration: '2s' }}></div>
          <div className="absolute -bottom-1 -right-2 w-1 h-1 bg-primary-600 rounded-full animate-ping" style={{ animationDelay: '1.5s', animationDuration: '2s' }}></div>
        </div>
      </div>
    </>
  );
};

export default FloatingCustomerService;