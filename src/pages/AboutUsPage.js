import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutUsPage = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="relative z-20 w-full top-0">
        <img
          src="/images/nosiy.png"
          alt="background image"
          role="presentation"
          className="absolute z-10 top-noisy"
        />
        {/* <img
          src="/images/nosiy.png"
          alt=""
          className="absolute z-10 second-noisy"
        /> */}
      </div>

      <div className="relative z-10 w-full top-0">
        <div className="absolute w-full contactus-gradient"></div>
      </div>

      <div className="relative w-full z-30">
        <Header>
          <h1 className="t-hidden">Lead Wallet - About Us</h1>
        </Header>

        <main className="container mx-auto pb-24 px-4 force-height">
          <section className="mt-8 text-center">
            <h2 className="font-Montserrat-ExtraBold uppercase text-white text-4xl mb-2">
              ABOUT US
            </h2>
            <p className="text-white w-full md:w-5/6 mx-auto leading-7">
              The Lead Wallet team is committed to providing a sophisticated yet
              simple crypto wallet application that will enable anyone (either
              newbie or expert) to store, send, receive, spend, exchange/swap
              crypto assets at users’ convenience without the need to provide or
              store user data. Lead Wallet will enable users across the globe at
              any time to conveniently spend their cryptocurrency assets in
              exchange for what they’ve always wanted to have or buy. In
              addition, Lead Wallet will constantly research and provide
              excellent blockchain technology and cryptocurrency application
              scenarios that will further the adoption and use cases of
              cryptocurrencies.
            </p>
          </section>

          <section className="mt-16 flex flex-col-reverse md:flex-row w-5/6 mx-auto">
            <div className="w-full md:w-1/3">
              <img
                src="/images/app-product.png"
                alt="Lead wallet product"
                className="mx-auto w-80 md:w-full lg:w-full xl:w-2/3"
              />
            </div>
            <div className="w-full md:w-2/3 text-center md:text-left">
              <p className="text-white leading-7 mb-4">
                Lead Wallet is the world's simplest, most secured and
                decentralized multi-crypto wallet application perfectly designed
                for Defi access and other crypto-related use cases. Lead allows
                users to securely store their crypto assets and can be used for
                transactions on a P2P level without any third-party
                intermediaries. Lead Wallet supports multiple cryptocurrencies
                such as BTC, ETH, DOT, the majority of ERC-20 tokens (including
                LINK, YFI, and major stablecoins), NEO, TRON and over 100 more
                cryptocurrencies. To make our platform even more convenient for
                users, Lead Wallet uses the best User Interface and security
                practices to simplify the use of our platform’s capabilities
                across all networks.
              </p>
            </div>
          </section>

          <section className="mt-8 text-left">
            <p className="text-white w-full md:w-5/6 mx-auto leading-7">
              The application will have the best security features in the
              industry and will be implemented throughout the entire wallet
              ecosystem, hence, providing the safest storage system available in
              the industry. The Lead Wallet team hopes to partner with several
              companies and platforms offering the best wallet services and
              security measures such as auditing and security penetration
              testing, and community bug bounty so as to ensure a safe wallet
              usage environment.
            </p>
          </section>

          <section className="mt-8 text-left">
            <p className="text-white w-full md:w-5/6 mx-auto leading-7 font-extrabold">
              The Lead Wallet Ecosystem is Divided into the Following Service
              and Product Areas:
            </p>

            <div className="text-left">
            <p className="text-white w-full md:w-5/6 mx-auto leading-7">
              LeadWallet | DeFi Access | LeadSender | LeadStake | LeadSig | LeadPay | LeadEx |
              LeadSwap
            </p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default AboutUsPage;
