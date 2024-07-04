import { TypeAnimation } from "react-type-animation";
import { TbLocationDown } from "react-icons/tb";
import { Link } from "react-scroll";
import image from "../../assets/home-main.svg";

const Banner = () => {
    const handlePreviewClick1 = () => {
        const link = document.createElement('a');
        link.href = 'https://drive.google.com/file/d/1e8MC2iCUi2wgxsVpQ_z-scgJGp4DCbZn/view';
        link.download = 'Mehedi_Hasan_Resume.pdf'; // Change this to your desired file name
        link.click();
    };

    return (
        <div className="flex lg:flex-row flex-col-reverse justify-center items-center pt-10">
            <div>
                <div className="text-center mb-10">
                    <TypeAnimation
                        sequence={[
                            'Hello',
                            1000,
                            'Hello Everyone',
                            2000,
                            'How are you',
                            2000,
                            'This is me',
                            2000,
                        ]}
                        speed={50}
                        style={{ fontSize: '3em', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </div>
                <div className="text-center ">
                    <h1 className="text-4xl mb-10">
                        Hi There <span>👋🏻</span> I&apos;am <span className="font-bold text-[#643484]">Mehedi Hasan Shihab</span>.
                        <br /> A Junior <span className="font-bold text-[#643484]">Front-End</span> Developer
                    </h1>
                    <div className="flex lg:flex-row flex-col justify-center gap-10">
                        <button onClick={handlePreviewClick1} className="btn bg-transparent border-[#643484] mt-4 text-white hover:bg-[#643484] hover:text-white px-10 hover:border-none flex items-center justify-center">
                            Resume <TbLocationDown className="text-lg ml-2" />
                        </button>
                        <a href="/about" className="btn bg-transparent border-[#643484] mt-4 text-white hover:bg-[#643484] hover:text-white px-10 hover:border-none flex items-center justify-center">
                            About Me <TbLocationDown className="text-lg ml-2" />
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <img className="h-[700px] w-[700px]" src={image} alt="Banner" />
            </div>
        </div>
    );
};

export default Banner;


