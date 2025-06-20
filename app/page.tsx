import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen p-10">
      {/* Logo */}
      <div>
        <Image
          src="/next.svg"
          alt="next logo"
          width="180"
          height="38"
        />
      </div>

      {/* Text Section */}
      <div>
        <p>To start edit the file:</p>
        <p>
          <code>app/page.tsx</code>
        </p>
        <p>Save it to see changes</p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-5 mt-10">
        <a
          href="https://vercel.com/new"
          target="_blank"
          className="bg-black text-white p-2 rounded"
        >
          <Image src="/vercel.svg" alt="vercel" width="20" height="20" />
          Deploy Now
        </a>

        <a
          href="https://nextjs.org/docs"
          target="_blank"
          className="border border-gray-300 p-2 rounded"
        >
          Read Docs
        </a>
      </div>

      {/* Footer Links */}
      <div style={{ marginTop: 100 }}>
        <a href="https://nextjs.org/learn">
          <Image src="/file.svg" width={16} height={16} alt="file" /> Learn
        </a>
        <br />
        <a href="https://vercel.com/templates">
          <Image src="/window.svg" width={16} height={16} alt="win" /> Examples
        </a>
        <br />
        <a href="https://nextjs.org">
          <Image src="/globe.svg" width={16} height={16} alt="globe" /> Visit
        </a>
      </div>
    </div>
  );
}
