import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Home</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
        }}
      >
        <div>
          <h1>Assalomu aleykum</h1>
          <button
            onClick={() => navigate("/store")}
            type="button"
            className="btn btn-primary"
            style={{ alignItems: "center", textAlign: "center" }}
          >
            Kirish
          </button>
        </div>
      </div>
    </>
  );
}
