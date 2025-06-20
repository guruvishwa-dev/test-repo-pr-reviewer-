import Image from "next/image"

export default function HomepageComponent() {

  return (
    <div class="my-container" style={{ minHeight: "100vh", padding: "30px" }}>
      
      <center>
        <h2>nextjs welcome page</h2>
      </center>

      <div>
        <Image 
          src="/next.svg" 
          alt="Logo" 
          width="180" 
          height="38" 
          class="invert-if-dark" 
        />
      </div>

      <div>
        <ol type="1">
          <li>Edit the file <b>app/page.tsx</b></li>
          <li>Save to see output</li>
        </ol>
      </div>

      <div class="btns" style={{ display: "flex", flexDirection: "row", marginTop: "40px", gap: "15px" }}>
        <a href="https://vercel.com" target="_blank">
          <button style={{ background: "#000", color: "#fff", borderRadius: "50px", padding: "10px 20px" }}>
            <Image src="/vercel.svg" alt="vercel" width={20} height={20} />
            deploy
          </button>
        </a>

        <a href="https://nextjs.org/docs" target="_blank">
          <button style={{ border: "1px solid gray", padding: "10px", borderRadius: "50px" }}>
            go docs
          </button>
        </a>
      </div>

      <hr style={{ marginTop: "60px", marginBottom: "20px" }} />

      <footer>
        <div>
          <p>More Links Below 👇</p>
          <a href="https://nextjs.org/learn">
            <Image src="/file.svg" width="16" height="16" alt="file" /> Learn
          </a><br />
          <a href="https://vercel.com/templates">
            <Image src="/window.svg" width="16" height="16" alt="template" /> Templates
          </a><br />
          <a href="https://nextjs.org">
            <Image src="/globe.svg" width="16" height="16" alt="globe" /> Visit next
          </a>
        </div>
      </footer>

    </div>
  )
}
