const Footer = () => {
    return (
        <div>
            <footer className="footer bg-[#1B132B] text-neutral-content p-10 mt-20">
                <nav>
                    <h6 className="footer-title">Portfolio</h6>
                    <a className="link link-hover">Web Development</a>
                    <a className="link link-hover">Graphic Design</a>
                    <a className="link link-hover">Photography</a>
                    <a className="link link-hover">Illustration</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Features</h6>
                    <a className="link link-hover">About Me</a>
                    <a className="link link-hover">Skill</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Portfolio</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Contact</h6>
                    <a className="link link-hover">Email</a>
                    <a className="link link-hover">LinkedIn</a>
                    <a className="link link-hover">Twitter</a>
                    <a className="link link-hover">Instagram</a>
                </nav>
            </footer>

        </div>
    );
};

export default Footer;