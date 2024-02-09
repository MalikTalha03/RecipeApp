
const Nav = () => {
  return (
    <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono" role="navigation">
        <div className="pl-8">Logo</div>
        <ul className="pr-8 space-x-4">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact</li>
        </ul>
    </nav>
  )
}

export default Nav