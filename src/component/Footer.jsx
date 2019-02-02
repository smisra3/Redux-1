import React from 'react';

const footerStyle = {
    backgroundColor : 'lightBlue',
    marginTop :'20px'
};

const Footer = () => {
    return (
        <div id="footer">
            <footer className="page-footer font-small cyan darken-3" style={footerStyle}>
                <div className="footer-copyright text-center py-3">© 2018 Copyright:
                    <a href="https://2018.stateofjs.com/introduction/"> 2018.stateofjs.com</a>
                </div>
            </footer>
        </div>
    )
};

export default Footer;