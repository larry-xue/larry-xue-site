export default function PreviewIframe({ url }: { url: string }) {
  return <iframe src={url} className="w-full h-full" />;
}
