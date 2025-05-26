import React from 'react';

export default function VideoFace() {
    return (
        <div className="flex justify-center items-center">
            <video 
                src="C:\Users\iisha\bothaha\create-simli-agent\media\generated_watermark.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-[350px] h-[350px] object-contain"
            />
        </div>
    );
}
