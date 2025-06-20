import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="page-container">
      <h1>Welcome to Next js!</h1>

      <div className="logo-place" style={{ textAlign: 'center' }}>
        <Image
          src="/next.svg"
          alt="next image"
          width="180px"
          height="38px"
        />
      </div>

      <div>
        <ul>
          <li>Edit the file <b>app/page.tsx</b></li>
          <li>See the change after saving.</li>
        </ul>
      </div>

      <div className="buttonsArea" style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
        <a
          href="https://vercel.com"
          target="_blank"
          className="vercel-button"
        >
          <Image src="/vercel.svg" width="20px" height="20px" alt="vercel logo" />
          <span>Deploy now</span>
        </a>

        <a
          href="https://nextjs.org/docs"
          className="docs-link"
        >
          Documentation
        </a>
      </div>

      <footer className="bottom-footer" style={{ marginTop: '80px' }}>
        <p>Useful Links:</p>
        <a href="https://nextjs.org/learn">
          <Image src="/file.svg" width={16} height={16} alt="file" />
          Learn Next
        </a>
        <br />
        <a href="https://vercel.com/templates">
          <Image src="/window.svg" width={16} height={16} alt="template" />
          Templates
        </a>
        <br />
        <a href="https://nextjs.org">
          <Image src="/globe.svg" width={16} height={16} alt="globe" />
          Visit Site
        </a>
      </footer>
    </div>
  )
}
