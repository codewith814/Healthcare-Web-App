import { useState } from 'react';

const VideoConsultation = () => {
  const [roomName, setRoomName] = useState('');
  const [showMeeting, setShowMeeting] = useState(false);

  const handleJoinMeeting = () => {
    if (roomName.trim() !== '') {
      setShowMeeting(true);
    } else {
      alert('Please enter a room name to start the consultation.');
    }
  };

  return (
    <div className="flex flex-col items-center p-8 space-y-4">
      <h1 className="text-3xl font-bold text-center text-blue-800">Video Consultation with Doctor</h1>

      {!showMeeting ? (
        <>
          <input
            type="text"
            placeholder="Enter Room Name"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-full max-w-md"
          />
          <button
            onClick={handleJoinMeeting}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Start Video Call
          </button>
        </>
      ) : (
        <iframe
          src={`https://meet.jit.si/${encodeURIComponent(roomName)}`}
          allow="camera; microphone; fullscreen; display-capture"
          style={{ width: '100%', height: '80vh', border: 0 }}
          title="Jitsi Video Consultation"
        />
      )}
    </div>
  );
};

export default VideoConsultation;
