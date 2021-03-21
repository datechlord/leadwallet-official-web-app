import React from "react";

export default () => {
  return (
    <div className="py-8 footer-bg">
      <footer className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <div>
            <a href="/" className="logo flex flex-row items-center">
              <img
                src="/images/full-logo-footer.png"
                width="220"
                className="cursor-pointer"
                alt="LEAD wallet logo"
              />
              <span className="t-hidden">home page</span>
            </a>
            <h2 className="uppercase text-white text-md mb-3 mt-4 text-left">
              Follow Us
            </h2>
            <div className="flex flex-row items-center ">
              <a
                href="https://instagram.com/lead_wallet"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <img src="/images/sm-instagram.svg" alt="instagram" width="20" />
                <span className="t-hidden">instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/company/leadwallet"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <img src="/images/sm-linkedin.svg" alt="linkedin" width="20" />
                <span className="t-hidden">linkedin</span>
              </a>
              <a
                href="https://twitter.com/leadwallet"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <img src="/images/sm-twitter.svg" alt="twitter" width="20" />
                <span className="t-hidden">twitter</span>
              </a>
              <a
                href="https://www.reddit.com/r/LeadWallet"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <img src="/images/sm-reddit.svg" alt="reddit" width="20" />
                <span className="t-hidden">reddit</span>
              </a>
              <a
                href="https://github.com/leadwallet"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <img src="/images/sm-github.svg" alt="github" width="20" />
                <span className="t-hidden">github</span>
              </a>
              <a
                href="https://medium.com/@LeadWallet"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <img src="/images/sm-medium.svg" alt="medium" width="20" />
                <span className="t-hidden">medium</span>
              </a>
              <a
                href="https://t.me/Leadwallet"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <img src="/images/sm-telegram.svg" alt="telegram" width="20" />
                <span className="t-hidden">telegram</span>
              </a>
              <a
                href="https://discord.gg/62Zh9Ch"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <img src="/images/sm-discord.svg" alt="discord" width="20" />
                <span className="t-hidden">discord</span>
              </a>
            </div>
          </div>
          {/* <div className="text-white leading-7 text-xs cursor-pointer">
            <div className="font-Montserrat-ExtraBold uppercase">Products</div>
            <div>Business Console</div>
            <div>Settlement Layer</div>
            <div>Crypto Wallets</div>
            <div>LEAD Pride</div>
          </div> */}
          <div className="text-white leading-7 text-xs flex flex-col">
            <a href="/aboutus" className="font-Montserrat-ExtraBold uppercase">
              About Us
            </a>
            {/* <div>Project</div> */}
            <a href="/contactus">Contact Us</a>
            <a href="/team">Team</a>
            {/* <div>Ecosystem</div> */}
            <a href="/token">The Token</a>
          </div>
          {/* <div className="text-white leading-7 text-xs cursor-pointer">
            <div className="font-Montserrat-ExtraBold uppercase">Solutions</div>
            <div>Grow Your Business with our Monetization</div>
            <div>Technology</div>
            <div>The PSP Solution</div>
            <div>Use Your Cryptocurrency</div>
          </div> */}
          <div className="text-white leading-7 text-xs flex flex-col">
            <h3 className="font-Montserrat-ExtraBold uppercase">
              Documentation
            </h3>
            <a
              href="/en/docs/Lead Wallet Whitepaper 1_0_2.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Whitepaper
            </a>
            <a
              href="/en/docs/Privacy Policy.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
            <a
              href="/en/docs/Terms of Service.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
      <div className="footer-copyright text-center py-3 text-white">
        <p fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="#"> Lead Cyber Service Limited </a>
        </p>
      </div>
    </div>
  );
};
