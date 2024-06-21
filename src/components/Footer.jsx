import React from 'react';

const Footer = () => {
    return (
        <div className={'py-8 flex flex-row justify-center items-center gap-2 text-2xl'}>
            <a
                href="http://linkedin.com/in/jossid-ivan-daza-lobo-7544b711a"
                target="_blank"
            ><i className="fa-brands fa-linkedin"></i
            ></a>
            <a
                href="https://github.com/jivandaza"
                target="_blank"
            ><i className="fa-brands fa-github"></i
            ></a>
            <a
                href="https://api.whatsapp.com/send?phone=573006586235"
                target="_blank"
            ><i className="fa-brands fa-square-whatsapp"></i
            ></a>
        </div>
    );
};

export default Footer;
