type Props = {
  children: React.ReactNode;
};
function Header({children}: Props) {
    return (
        <div  className="flex justify-between items-center py-5 px-8  bg-black">
           {children} 
        </div>
    )
}

export default Header
