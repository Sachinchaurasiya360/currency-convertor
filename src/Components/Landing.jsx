import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();
  return (
    <div>
        <h1>Welcome to the landing Page of Million dollar startup</h1>
      <button onClick={() => navigate("/Dashboard")}>
        Go to the Dashboard page
      </button>
    </div>
  );
}
export default Landing