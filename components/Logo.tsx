import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="relative text-4xl font-bold uppercase tracking-wide text-white">
      Sky <span className="absolute top-4 text-yellow-400">Pulse</span>
    </Link>
  );
}

export default Logo;
