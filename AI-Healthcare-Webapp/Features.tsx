import { Brain, Stethoscope, Clock, Shield, Video, Cloud, FileText, ImagePlus } from 'lucide-react';

const features = [
  {
    name: 'AI-Powered Diagnostics',
    description: 'Advanced machine learning algorithms for accurate medical diagnostics and predictions.',
    icon: Brain,
    gradient: 'from-blue-500 to-indigo-500'
  },
  {
    name: 'Medical Image Analysis',
    description: 'Upload and analyze medical images for instant AI-powered diagnostic insights.',
    icon: ImagePlus,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Video Consultations',
    description: 'Connect with doctors instantly through secure video calls.',
    icon: Video,
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    name: 'Cloud Storage',
    description: 'Your medical records are encrypted and stored safely in the cloud.',
    icon: Cloud,
    gradient: 'from-orange-500 to-red-500'
  },
  {
    name: 'Digital Prescriptions',
    description: 'Receive and manage prescriptions digitally after consultations.',
    icon: FileText,
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    name: '24/7 Availability',
    description: 'Round-the-clock access to healthcare services and support.',
    icon: Clock,
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    name: 'Secure & Private',
    description: 'Your health data is protected with enterprise-grade security.',
    icon: Shield,
    gradient: 'from-teal-500 to-green-500'
  },
  {
    name: 'Symptom Checker',
    description: 'AI-powered symptom analysis for preliminary health insights.',
    icon: Stethoscope,
    gradient: 'from-pink-500 to-rose-500'
  }
];

export default function Features() {
  return (
    <div className="py-24 relative overflow-hidden" id="services">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            <span className="gradient-text">Comprehensive</span> Healthcare Solutions
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Combining cutting-edge AI technology with expert medical care for a seamless healthcare experience
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="feature-card group"
            >
              <div className={`absolute top-0 left-0 h-2 w-full bg-gradient-to-r ${feature.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.gradient} bg-opacity-10`}>
                <feature.icon className={`h-6 w-6 bg-gradient-to-r ${feature.gradient} [&>path]:fill-white`} />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{feature.name}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}