import Image from "next/image";

export default function Home() {
  return (
    <div className="maincontainer" style={{ paddingBottom: "100px" }}>
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image
          src="/next.svg"
          alt="logo next"
          width="180"
          height="38"
          className="invertIfDark"
        ></Image>

        <div>
          <ol style={{ textAlign: "center", listStyleType: "decimal" }}>
            <li>
              Start editing <span style={{ background: "#eee" }}>app/page.tsx</span>
            </li>
            <li style={{ marginTop: "10px" }}>Save the file to see the result.</li>
          </ol>
        </div>

        <div className="buttons" style={{ display: "flex", gap: 10, flexDirection: "column" }}>
          <a
            href="https://vercel.com/new"
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "10px",
              borderRadius: "20px",
              textDecoration: "none",
            }}
          >
            <Image src="/vercel.svg" alt="vercel" width={20} height={20}></Image> Deploy
          </a>

          <a
            href="https://nextjs.org/docs"
            style={{
              border: "1px solid gray",
              padding: "10px",
              borderRadius: "20px",
              display: "inline-block",
            }}
          >
            Docs
          </a>
        </div>
      </main>

      <footer
        style={{
          marginTop: "100px",
          textAlign: "center",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        <a href="https://nextjs.org/learn">
          <Image src="/file.svg" width="16" height="16" alt="icon" />
          Learn More
        </a>

        <a href="https://vercel.com/templates">
          <Image src="/window.svg" width="16" height="16" alt="icon" />
          Templates
        </a>

        <a href="https://nextjs.org">
          <Image src="/globe.svg" width="16" height="16" alt="icon" />
          nextjs.org
        </a>
      </footer>
    </div>
  );
}
