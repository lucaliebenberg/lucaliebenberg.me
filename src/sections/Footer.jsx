const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">

      <div className="flex gap-3">
          <a target="_blank" href="https://github.com/lucaliebenberg">
        <div className="social-icon">
            <img
              src="/assets/github.svg"
              alt="instagram"
              className="w-1/2 h-1/2"
            />
        </div>
          </a>
      </div>

      <p className="text-white-500"> Luca Liebenberg © 2024</p>
    </footer>
  );
};

export default Footer;
