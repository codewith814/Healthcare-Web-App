import { ArrowRight, Video, Brain } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-50"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600">
              <Brain className="h-5 w-5" />
              <span className="text-sm font-medium">AI-Powered Healthcare</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              The Future of
              <span className="block gradient-text">Healthcare is Here</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Experience revolutionary healthcare powered by artificial intelligence. 
              Get instant diagnoses, connect with doctors, and manage your health seamlessly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transform transition-all duration-300 hover:scale-105">
                Start Consultation
                <Video className="ml-2 h-5 w-5 group-hover:animate-pulse" />
              </button>
              
              <button className="group flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl text-gray-700 bg-white/80 backdrop-blur border border-gray-200 hover:bg-white/90 hover:border-blue-100 transform transition-all duration-300">
                View Doctors
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl transform rotate-3 blur-2xl opacity-20"></div>
            <img
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80"
              alt="Doctor Video Consultation"
              className="relative rounded-3xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}