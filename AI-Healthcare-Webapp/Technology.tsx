import { Video, Cloud, FileText, Shield } from 'lucide-react';

export default function Technology() {
  return (
    <div className="py-24 bg-white" id="technology">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Advanced AI Technology
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our platform leverages state-of-the-art artificial intelligence and cloud computing to provide secure, reliable healthcare solutions.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="relative">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5"
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
                alt="AI Technology"
              />
            </div>
            <div className="space-y-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <Video className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">HD Video Consultations</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Crystal-clear video calls with doctors using WebRTC technology for real-time communication.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <Cloud className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Cloud Infrastructure</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Scalable cloud storage for medical records with instant access and backup systems.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Digital Health Records</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Comprehensive electronic health records system for managing your medical history.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">HIPAA Compliant</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Military-grade encryption and security protocols ensuring complete patient privacy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}