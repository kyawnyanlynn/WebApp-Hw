// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1
        style={{
          color: "yellow",
          textAlign: "center",
          fontSize: "48px",
          fontFamily: "Gill Sans",
          marginBottom: "40px",
        }}
      >
        Movie Search App
      </h1>
      <h3
        style={{
          color: "yellow",
          textAlign: "center",
          padding: "10px",
          margin: " 0 auto",
          fontFamily: "Gill Sans",
          fontSize: "20px",
        }}
      >
        以下をクリックして、最も人気のある映画をご覧ください
      </h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "50px",
        }}
      >
        <Link
          style={{
            backgroundColor: "red",
            padding: "10px",
            borderRadius: "5px",
            fontFamily: "Noto Sans JP",
            fontSize: "16px",
          }}
          href="/popular"
        >
          人気の映画を見る
        </Link>
        <Link
          style={{
            backgroundColor: "blue",
            padding: "10px",
            borderRadius: "5px",
            fontFamily: "Noto Sans JP",
            fontSize: "16px",
          }}
          href="/now-playing"
        >
          上映中の映画
        </Link>
      </div>
    </div>
  );
}
