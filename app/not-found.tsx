import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "75vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
        backgroundColor: "var(--color-black)",
        color: "var(--color-white)",
      }}
    >
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "var(--text-h2)",
          marginBottom: "1rem",
        }}
      >
        Page not found
      </h1>
      <p
        style={{
          fontFamily: "var(--font-reading)",
          fontSize: "var(--text-base)",
          color: "var(--color-graphite-light)",
          marginBottom: "2rem",
          maxWidth: "48ch",
        }}
      >
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          padding: "0.75rem 1.75rem",
          backgroundColor: "var(--color-white)",
          color: "var(--color-black)",
          fontFamily: "var(--font-display)",
          fontSize: "var(--text-sm)",
          fontWeight: 700,
          textDecoration: "none",
        }}
      >
        Return to home
      </Link>
    </div>
  );
}
