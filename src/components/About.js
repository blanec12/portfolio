export default function About() {
  return (
    <section id="about" className="pt-5 min-h-screen scroll-mt-20">
      <div className="flex flex-col items-center justify-center mx-auto">
        <img
          className="rounded-full w-56 h-56"
          alt="avatar"
          src="https://avatars.githubusercontent.com/u/44101795?v=4"
        />
        <div className="container px-5 py-5 mx-auto text-center lg:px-40">
          <h1 className="title-font font-bold text-white text-4xl text-center mb-2">
            Hi, I'm Blane.
          </h1>
          <p className="text-xl mb-5 font-medium text-white">
            Software Engineer & IT Specialist
          </p>
          <p className="lg:w-2/3 mx-auto leading-relaxed font-bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Id
            faucibus nisl tincidunt eget nullam non nisi. Eu lobortis elementum
            nibh tellus molestie nunc non blandit massa. Mauris sit amet massa
            vitae. Ac turpis egestas sed tempus. Arcu risus quis varius quam
            quisque. Elementum tempus egestas sed sed risus. Fermentum iaculis
            eu non diam phasellus vestibulum. Morbi tristique senectus et netus
            et. Amet venenatis urna cursus eget. Blandit libero volutpat sed
            cras ornare arcu.
          </p>
        </div>
      </div>
    </section>
  );
}
