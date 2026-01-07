function PhoneVideo({ videoSrc }) {
  return (
    <video
      src={videoSrc}
      className="w-full h-auto rounded-[42px] relative z-10"
      muted
      playsInline
      controls
    />
  );
}

export default PhoneVideo;
