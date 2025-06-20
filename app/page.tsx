import Image from 'next/image'

export default function homepage() {
  return (
    <div style={{ padding: 40 }}>
      
      <h1>NextJS App!!</h1>

      <div style={{ textAlign: "center", marginTop: 20 }}>
        <Image
          src="/next.svg"
          alt="NextJS logo"
          width={180}
          height={38}
        ></Image>
      </div>

      <div style={{ marginTop: 30 }}>
        <p>Step 1: open the file</p>
        <code>app/page.tsx</code>
        <p>Step 2: Save and refresh!</p>
      </div>

      <div style={{ marginTop: 40 }}>
        <a href="https://vercel.com/new">
          <button style={{ backgroundColor: "black", color: "white", padding: 10 }}>
            Deploy
            <Image src="/vercel.svg" width={20} height={20} alt="vercel" />
          </button>
        </a>
        <a href="https://nextjs.org/docs" style={{ marginLeft: 20 }}>
          <button>Docs</button>
        </a>
      </div>

      <div style={{ marginTop: 60 }}>
        <h2>Extra Links</h2>
        <ul>
          <li>
            <a href="https://nextjs.org/learn">
              <Image src="/file.svg" width={16} height={16} alt="file" /> Learn
            </a>
          </li>
          <li>
            <a href="https://vercel.com/templates">
              <Image src="/window.svg" width={16} height={16} alt="window" /> Templates
            </a>
          </li>
          <li>
            <a href="https://nextjs.org">
              <Image src="/globe.svg" width={16} height={16} alt="globe" /> NextJS site
            </a>
          </li>
        </ul>
      </div>

    </div>
  )
}
