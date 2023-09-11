export default function YouTubeVideo({ url }: { url: string }) {
  return (
    <iframe
      width="100%"
      className="aspect-video"
      src={url}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
}
