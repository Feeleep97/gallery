const links = [
  "https://ixejganfmx.ufs.sh/f/AP2FYb1qxSGtAN7Gkm1qxSGtrUcBRyuTeOHjgC2Vad7hJfF4",
];

export default function HomePage() {
  const remapedImg = links.map((link, index) => ({
    id: index + 1,
    imgUrl: link,
  }));
  return (
    <main className="">
      <div>
        <div className="flex flex-wrap gap-4">
          {[...remapedImg, ...remapedImg, ...remapedImg].map((img) => (
            <img src={img.imgUrl} key={img.id} alt="gallery img" />
          ))}
        </div>
      </div>
      {}
    </main>
  );
}
