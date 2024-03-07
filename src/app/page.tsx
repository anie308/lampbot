import Image from "next/image";
import twitter from "../assets/twiiter.svg";
import telegram from "../assets/telegram.svg";
import logo from "../assets/logo.svg";
import pic from "../assets/pic.png";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex flex-col bg-black items-start w-full h-full lg:min-h-screen p-[10px] lg:p-[20px_100px]">
      <div className="text-white flex justify-between items-center w-full">
        <div>
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>
        </div>
        <div className="flex items-center space-x-[5px] lg:space-x-[10px]">
          <a
            href="https://www.telegram.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={telegram} alt="twitter" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={twitter} alt="twitter" />
          </a>
        </div>
      </div>
      <div className="border box-shad flex flex-col-reverse lg:flex-row items-start w-full mt-[20px]  rounded-[16px] gap-[20px] lg:h-[500px]">
        <div className="w-full lg:w-[55%] min-h-full flex flex-col items-start justify-center  px-[15px] lg:px-[30px]">
          <p className="text-[#FFFF01] font-nick uppercase text-[24px] lg:text-[40px]">
            Lamps on Blast⚡
          </p>
          <p className="w-[90%] text-[20px] text-white font-manrope leading-[32px]">
            Empowering the trillion dollar blockchain economy with lightning
            speed multichain trading tools.
          </p>
          <p className="font-manrope mt-[20px] text-white text-[20px]">V.1 coming soon on <span className="font-[800]">Blast️</span></p>
          <div className="mt-[40px] w-full grid lg:grid-cols-2 items-center gap-[40px] ">
            <div>
              <p className="text-[14px] text-[#FFFF01] font-nick">Enter {`Password`}</p>
              <input type="text" className="w-full border border-[#FFFFFF66] bg-transparent h-[56px] rounded-[5px] font-manrope px-[15px] outline-none mt-[5px]" placeholder="Password" />
            </div>
            <div>
              <p className="text-[14px] text-[#FFFF01] font-nick">Enter {`Twitter Username`}</p>
              <input type="text" className="w-full border border-[#FFFFFF66] bg-transparent h-[56px] rounded-[5px] font-manrope px-[15px] outline-none mt-[5px]" placeholder="@twitter username" />
            </div>
          </div>
          <button className="linear w-full h-[56px] mt-[20px] mb-[30px] lg:mb-0 rounded-[8px]">
            <p className="text-[20px] font-nick text-black">Get early access</p>
          </button>
        </div>
        <div className="w-full lg:w-[45%]   rounded-t-[16px] lg:rounded-t-none lg:rounded-r-[16px]">
          <Image src={pic} className="lg:h-[500px] w-full rounded-t-[16px] lg:rounded-t-none lg:rounded-r-[16px]" alt="pic" />
        </div>
      </div>
    </main>
  );
}
