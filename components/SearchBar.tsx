import { useNavigate } from "react-router-dom";

type SearchProps = {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
};

function SearchBar({ input, setInput }: SearchProps) {
  const navigate = useNavigate();

  // If input is valid, navigate to the city route
  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    navigate(`/${input.trim().toLowerCase()}`);
    setInput("");
  }

  return (
    <form className="relative text-center w-[500px]" onSubmit={handleSearch}>
      <input
        type="text"
        className="w-full rounded-xl px-3 py-2 outline-none text-white ring-2 ring-yellow-400  bg-neutral-800 placeholder:text-neutral-400 placeholder:font-semibold placeholder:text-lg "
        placeholder="Write your city name..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="absolute right-0  bg-gray-800 cursor-pointer px-3 py-2 rounded-xl"
      >
        {" "}
        🔍
      </button>
    </form>
  );
}

export default SearchBar;
