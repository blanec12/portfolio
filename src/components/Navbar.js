export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky p-5 top-0 z-50">
      <div className="mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="title-font font-medium text-white mb-4 md:mb-0 md:ml-8 text-2xl">
          Blane Cummings
        </div>
        <nav className="md:mr-8 md:ml-4 md:py-1 md:pl-4 md:border-gray-700">
          <a href="#about" className="mr-5 hover:text-white">
            About
          </a>
          <a href="#projects" className="mr-5 hover:text-white">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#contact" className="mr-5 hover:text-white">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
