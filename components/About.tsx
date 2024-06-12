import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-4 py-10 self-start">
        <p className="text-4xl text-primary-foreground">About</p>
      </div>
      <div className="flex justify-center items-center h-[500px] w-[360px] bg-primary/40 p-6 rounded-2xl backdrop-filter backdrop-blur-3xl">
        <div className="flex flex-col bg-white w-full h-full rounded-2xl text-gray-700 p-4 px-6 gap-2">
          <div className="flex flex-col pt-2">
            <p className="text-primary text-xl font-semibold">Sindhur V Shabaraya</p>
            <p>Web developer</p>
          </div>

          <p className="py-2">I&apos;m Sindhur, an undergraduate engineering student specializing in computer science. I have a strong focus on planning and precision in web application development.</p>
          
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center -ml-1.5">
              <Image src="/location.png" alt="location" width={30} height={30}/>
              <p>Bangalore, India</p>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-1">
            <p className="text-xl text-primary font-semibold">Work Experience</p>
            <ul className="list-disc px-4 ml-1.5">
              <li>
                <Link href="https://www.npmjs.com/package/create-project-with-dom-wizard" className="hover:underline">
                  DOM-Wizard
                </Link>
              </li>
              <li>
                <Link href="https://www.cosmictech.io/" className="hover:underline">
                  Cosmictech.io
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:underline">
                  Projects
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-row gap-2 absolute bottom-10 -ml-1.5">
          <Image src="/github.png" alt="github" width={30} height={30}/>
          <Link href="mailto:sindhurvshabaraya2318@gmail.com" className="hover:underline">
            <Image src="/mail-purple.png" alt="mail" width={30} height={30}/>
          </Link>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default About;
