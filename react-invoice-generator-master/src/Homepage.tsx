import { useNavigate } from "react-router-dom"

const HomePage = () => {
  const navigate = useNavigate()

  return (
    <div className="center">
      <h1 className="fs-30">Shades Designers</h1>
      <button
        onClick={() => navigate("/generator")}
        style={{
          backgroundColor: "#2DA8F8",
          color: "#fff",
          padding: "0.75rem 1.5rem",
          borderRadius: "0.5rem",
          fontWeight: 600,
          marginTop: "20px",
        }}
      >
        Open Invoice Generator
      </button>
    </div>
  )
}

export default HomePage
