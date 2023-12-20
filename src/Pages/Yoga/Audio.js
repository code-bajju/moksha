import React, { useRef, useState } from 'react';

const MSC = () => {
  const audioRef = useRef(null);
  const [audioContext, setAudioContext] = useState(null);

  const initializeAudio = async () => {
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const audioElement = audioRef.current;
      const source = audioContext.createMediaElementSource(audioElement);
      source.connect(audioContext.destination);
      setAudioContext(audioContext);

      // Auto-play the audio on initialization
      await audioContext.resume();
      await audioElement.play();
    } catch (error) {
      console.error('Error initializing audio:', error);
    }
  };

  const playBackgroundMusic = async () => {
    try {
      if (audioContext && audioContext.state === 'suspended') {
        await audioContext.resume();
      }

      const audioElement = audioRef.current;
      if (audioElement) {
        await audioElement.play();
      }
    } catch (error) {
      console.error('Error playing audio:', error);
    }
  };

  const stopBackgroundMusic = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
      // audioElement.pause();
      audioElement.currentTime = 0;
    }
  };

  return (
    <>
      <button onClick={playBackgroundMusic}>Play Music</button>
      <button onClick={stopBackgroundMusic}>Stop Music</button>

      <audio ref={audioRef} loop>
        <source src="audio.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      {/* Initialize audio context on component mount */}
      <div style={{ display: 'none' }} onLoad={initializeAudio()}></div>
    </>
  );
};

export default MSC;
