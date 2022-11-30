import { MailIcon } from "@heroicons/react/solid";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen scroll-mt-20">
      <div className="container px-5 mx-auto text-center lg:px-40">
        <MailIcon className="mx-auto w-10 mb-4 text-center mt-10" />
        <h1 className="title-font font-medium text-white text-3xl text-center mb-4">
          Contact
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-center mb-10">
          I am interested in part-time freelance opportunties. Please leave a
          message below if you have a question or you'd like to work together.
          I'd love to hear from you!
        </p>
        <div className="container mx-auto text-right m-4">
          <form>
            <input
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 mb-4 transition-colors duration-200 ease-in-out"
              type="text"
              placeholder="Name"
              required
            />
            <input
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 mb-4 transition-colors duration-200 ease-in-out"
              type="text"
              placeholder="Email"
              required
            />
            <textarea
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 mb-4 transition-colors duration-200 ease-in-out"
              rows="5"
              placeholder="Message"
              required
            />
            <button className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg mb-5">
              Send Email
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
