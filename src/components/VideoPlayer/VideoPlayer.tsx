import React, { Ref, SyntheticEvent, useEffect, useRef } from 'react';
import { VideoStyles } from './Styles';

interface VideoProps {
  src: string;
  delay?: number;
}

export default function VideoPlayer({ src, delay }: VideoProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setTimeout(() => videoRef.current?.play(), delay || 1000);
  }, []);

  return (
    <VideoStyles>
      <video ref={videoRef} muted loop>
        <source src={src} type="video/mp4" />
      </video>
    </VideoStyles>
  );
}
