/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <nav>
            <ul>
              <li>
                <a
                  href="https://www.creative-tim.com?ref=nukr-default-footer"
                  target="_blank"
                >
                  AGAIN team
                </a>
              </li>
              <li>
                <a
                  href="http://presentation.creative-tim.com?ref=nukr-default-footer"
                  target="_blank"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="http://blog.creative-tim.com?ref=nukr-default-footer"
                  target="_blank"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, Made with <span style={ { color: '#ff6c31',fontFamily: 'monospace',fontWeight: 'bold' }}>love</span> in <span style={ { color: '#ff6c31',fontFamily: 'monospace',fontWeight: 'bold' }}>Tangier</span>, <span style={ { color: '#ff6c31',fontFamily: 'monospace',fontWeight: 'bold' }}>Morocco</span>.
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
