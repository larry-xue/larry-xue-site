export default function PreviewIframe({ url }: { url: string }) {
  return <iframe title="preview" loading="lazy" src={url} className="w-full h-full" />;
}
