import { SocialIcon } from "react-social-icons";

export default function Footer() {
    return (
        <footer className="bg-gray-800 md:sticky b-0 z-10">
            <p className="text-center text-green-500 font-medium mt-20">blanecummings@hotmail.com</p>
            <div className="mx-auto flex flex-wrap p-5 flex-row items-center justify-center">
                <SocialIcon className="mr-1" style={{ height: 40, width: 40 }} bgColor="white" url="https://github.com/blanec12"/>
                <SocialIcon className="mr-1" style={{ height: 40, width: 40 }} bgColor="white" url="https://codepen.io/blanec12"/>
                <SocialIcon className="mr-1" style={{ height: 40, width: 40 }} bgColor="white" url="https://twitter.com/cummingsblane"/>
                <SocialIcon className="mr-1" style={{ height: 40, width: 40 }} bgColor="white" url="https://www.linkedin.com/in/blane-cummings-b0a9b8167"/>
            </div>
            <p className="text-center text-sm">© 2022 Blane Cummings</p>
        </footer>
    );
}