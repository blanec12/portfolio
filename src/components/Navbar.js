
export default function Navbar() { 
    return(
        <header className="bg-gray-800 md:sticky top-0 z-10">
            <div className="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <div className="title-font font-medium text-white mb-4 md:mb-0 ml-3 text-2xl">
                    Blane Cummings
                </div>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700">
                    <a href="#about" className="mr-5 hover:text-white">About</a>
                    <a href="#projects" className="mr-5 hover:text-white">Projects</a>
                    <a href="#skills" className="mr-5 hover:text-white">Skills</a>
                    <a href="#contact" className="mr-5 hover:text-white">Contact</a>
                </nav>
            </div>
        </header>
    );
}