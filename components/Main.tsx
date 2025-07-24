type Props = {
  children: React.ReactNode;
};

function Main({ children }: Props) {
  return (
    <div className="flex items-center justify-center py-10 px-4 bg-gradient-to-b from-black via-gray-900 to-black min-h-screen">
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl rounded-3xl p-8 w-[60%] text-white">
        {children}
      </div>
    </div>
  );
}

export default Main;
