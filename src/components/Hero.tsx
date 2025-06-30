import React from 'react'
import { Button } from './ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

function Hero() {
  return (
    <div className="relative min-h-screen bg-[#023657] z-100  overflow-hidden ">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/5 to-primary-600/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="her-image absolute right-0 h-full w-[50%] hidden lg:block">
        <div className="rounded-l-full relative bg-primary/10 pl-8 h-full">
          <div className="div rounded-l-full bg-white pl-8 h-full  border border-gray-100">
            <div className="relative h-full w-full">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex space-x-2 py-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="text-xs text-gray-400 font-mono">ZiloTech</div>
              </div>

              {/* Image */}
              <div className="relative w-full h-full ">
                <img
                  className='rounded-l-full w-full h-full object-cover shadow-lg'
                  src="/assets/images/card.png"
                  alt="Our Team at Work"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="content container mx-auto flex items-center min-h-[90vh] relative z-10 relative">
        <div className="bg-white absolute left-[700px] rounded-full hidden lg:block">
           <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path>
              </svg>
        </div>
        <div className="text-center lg:text-left animate-fade-in">
          <div className="inline-flex items-center bg-primary/60 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 animate-slide-in">
            <Sparkles size={16} className="mr-2" />
            Innovation Starts Here
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">
              Zeal Fuels
            </span>
            <br />
            <span className="text-primary">Innovation</span>
          </h1>

          <div className="mb-8 space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              Better Solutions For Your Business
            </h2>
            <p className="text-lg md:text-xl text-white leading-relaxed max-w-2xl">
              Ignite Innovation, Transform Possibilities, and Elevate Your Experience in the Digital Era!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              size="lg"
              className="modern-btn modern-btn-primary px-8 py-6 font-semibold text-lg rounded-full"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}
            >
              Get Started
              <ArrowRight size={20} className="icon-right" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="modern-btn modern-btn-outline px-8 py-6 font-semibold tex-lg rounded-full"
              onClick={() => {
                document.getElementById('about')?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}
            >
              Learn More
            </Button>
          </div>

          {/* Features Section */}
          <div className="d-flex align-items-center justify-content-between flex-wrap mt-16 lg:mt-20 md:mt-12">
            <div className="fact-feature mt-6 flex items-center">
              <div className="icon flex items-center justify-center rounded-full w-8 h-8 border-2 mr-3" style={{ borderColor: '#00DBE4', color: '#00DBE4' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3 className="text-sm md:text-base text-white">60x Faster Project set up time</h3>
            </div>

            <div className="fact-feature mt-6 flex items-center">
              <div className="icon flex items-center justify-center rounded-full w-8 h-8 border-2 mr-3" style={{ borderColor: '#FFD542', color: '#FFD542' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3 className="text-sm md:text-base text-white">Witness a 70% boost in productivity.</h3>
            </div>

            <div className="fact-feature mt-6 flex items-center">
              <div className="icon flex items-center justify-center rounded-full w-8 h-8 border-2 mr-3" style={{ borderColor: '#EF62E9', color: '#EF62E9' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3 className="text-sm md:text-base text-white">Save 4,000+ hours each year.</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero