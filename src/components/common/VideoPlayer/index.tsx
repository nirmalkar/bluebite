import React from 'react';

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
  videoId,
  title = 'video',
}) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="relative pb-[56.25%] h-0 overflow-hidden max-w-full bg-black">
      <iframe
        title={title}
        src={embedUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
      />
    </div>
  );
};

export default YouTubeEmbed;
