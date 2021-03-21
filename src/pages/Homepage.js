import React, { useRef } from "react";
import Carousel from "react-elastic-carousel";
import Button from "../components/common/Button";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RoadmapItem from "../components/common/RoadmapItem";

const HomePage = () => {
  const carouselRef = useRef(null);

  return (
    <div className="w-full overflow-hidden">
      <div className="relative z-20 w-full top-0">
        <img
          src="/images/nosiy.png"
          alt="background image"
          role="presentation"
          className="absolute z-10 top-noisy"
        />
        <img
          src="/images/nosiy.png"
          alt="background image"
          role="presentation"
          className="absolute z-10 third-noisy"
        />
        {/* <img
          src="/images/nosiy.png"
          alt=""
          className="absolute z-10 fourth-noisy"
        />
        <img
          src="/images/nosiy.png"
          alt=""
          className="absolute z-10 fifth-noisy"
        /> */}
      </div>

      <div className="relative z-10 w-full top-0">
        <div className="absolute w-full home-gradient"></div>
      </div>

      <div className="relative w-full z-30">
        <Header>
          <h1 className="t-hidden">Lead Wallet</h1>
        </Header>

        <main className="container mx-auto pb-48 px-4 force-height">
          <h2 className="Montserrat-Black uppercase text-white text-3xl sm:text-4xl md:text-5xl text-center">
            WORLD'S Simplest Crypto Wallet and Defi Access
          </h2>

          <p className="uppercase text-white text-xl text-center">
            Store, Spend, Swap, Stake
          </p>

          <div className="mt-8 flex flex-row justify-center">
            <Button
              bgColor="transparent"
              showBorder={true}
              className="flex flex-row items-center text-xl w-full md:w-64 justify-center"
              onClick={() =>
                window.open(
                  "https://uniswap.info/token/0x1dd80016e3d4ae146ee2ebb484e8edd92dacc4ce",
                  "_blank"
                )
              }
            >
              <img
                src="/images/uniswap.svg"
                width="24"
                alt="uniswap"
                role="presentation"
                className="mr-2"
              />
              Uniswap
            </Button>
          </div>

          <div className="mt-8 flex flex-row justify-center">
            <Button
              bgColor="transparent"
              showBorder={true}
              className="flex flex-row items-center text-xl w-full md:w-64 justify-center"
              onClick={() =>
                window.open(
                  "https://www.youtube.com/watch?v=ML7uOJAETpc&feature=youtu.be&ab_channel=LeadWallet",
                  "_blank"
                )
              }
            >
              <img src="/images/play.svg" width="36" alt="watch lead wallet demo" role="presentation" className="mr-2" />
              Watch Demo
            </Button>
          </div>

          <div className="w-full mx-auto mt-12 mb-2">
            <Carousel
              itemsToShow={1}
              showArrows={false}
              enableAutoPlay={true}
              autoPlaySpeed={5000}
              onNextEnd={(_, currentPage) => {
                if (currentPage === 3) {
                  setTimeout(() => carouselRef.current.goTo(0), 5000);
                }
              }}
              ref={carouselRef}
              renderPagination={({ pages, activePage, onClick }) => (
                <div className="flex flex-row mt-4">
                  {pages.map((page, idx) => {
                    const isActive = page === activePage;
                    return (
                      <div
                        key={idx}
                        className={`w-2 h-2 mx-2 rounded-full cursor-pointer bg-white border-gray-500 ${
                          isActive ? "" : "opacity-50"
                        }`}
                        onClick={() => onClick(page)}
                      ></div>
                    );
                  })}
                </div>
              )}
            >
              <div className="w-full md:w-2/3 text-white text-center">
                <img
                  src="/images/store.svg"
                  alt="in app store demo"
                  role="presentation"
                  width="100"
                  className="mx-auto"
                />
                <h3 className="Montserrat-Black uppercase text-2xl mb-1">
                  Store
                </h3>
                <p>
                  Lead Wallet is a decentralized multi-crypto wallet application
                  perfectly designed for DeFi access and cross-chain
                  capabilities. Lead allows users to securely store their crypto
                  assets and can be used for transactions on a P2P level without
                  any third party intermediaries. Lead Wallet supports multiple
                  cryptocurrencies such as BTC, ETH, DOT, the majority of ERC-20
                  tokens, and 100 more cryptocurrencies. To make our platform
                  even more convenient for users, Lead Wallet uses the best User
                  Interface and security practices to simplify the use of our
                  platform capabilities across all networks.
                </p>
              </div>
              <div className="w-full md:w-2/3 text-white text-center">
                <img
                  src="/images/spend.svg"
                  alt="in app spend demo"
                  role="presentation"
                  width="100"
                  className="mx-auto"
                />
                <h3 className="Montserrat-Black uppercase text-2xl mb-1">
                  Spend
                </h3>
                <p>
                  Cryptocurrencies are meant to be spent like real currencies.
                  The Lead C-marketplace is synonymous to an e-marketplace where
                  goods are exchanged digitally. Hence, with the C-marketplace
                  listed in Lead Wallet, users are able to spend their
                  cryptocurrencies on the goods and services directly on the
                  Lead Wallet application.
                </p>
              </div>
              <div className="w-full md:w-2/3 text-white text-center">
                <img
                  src="/images/swap.svg"
                  alt="in app swap demo"
                  role="presentation"
                  width="100"
                  className="mx-auto"
                />
                <h3 className="Montserrat-Black uppercase text-2xl mb-1">
                  Swap
                </h3>
                <p>
                  You will be able to instantly swap from one crypto asset to
                  another and from crypto to fiat by using our Swap feature. Our
                  crypto wallet is designed to be as user-friendly as possible
                  with minimal learning curves. For example, you will be able to
                  instantly swap from BTC to YFI or from LINK to USDT or other
                  supported crypto assets. This is perfect for users who want to
                  provide liquidity to various DeFi protocols using different
                  crypto assets.
                </p>
              </div>
              <div className="w-full md:w-2/3 text-white text-center">
                <img
                  src="/images/stake.svg"
                  alt="in app stake demo"
                  role="presentation"
                  width="100"
                  className="mx-auto"
                />
                <h3 className="Montserrat-Black uppercase text-2xl mb-1">
                  Stake
                </h3>
                <p>
                  This Lead feature allows users to hold PoS based coins and
                  other related coins by staking them directly in their Lead
                  Wallet account, in exchange for a certain amount of staking
                  rewards according to how the blockchain rewards users who
                  staked coins. You will receive extra benefits if you decide to
                  stake using Lead Wallet. This feature which is also known as a
                  Stake-as-a-Service (SaaS) is beneficial both to stakers and
                  blockchains built on PoS and other related staking algorithms.
                </p>
              </div>
            </Carousel>
          </div>

          <div className="w-full mb-12">
            <img
              src="/images/wallet-preview.png"
              alt="app wallet preview"
              className="w-full lg:w-2/3 mx-auto"
            />
          </div>

          <div className="mb-16 text-center text-white">
            <h3 className="Montserrat-Black uppercase text-2xl mb-4">
              HOW IT WORKS
            </h3>
            <p className="w-full md:w-2/3 mx-auto">
              To enjoy all the products and services offered by Lead Wallet, as
              an iOS or Android user, all you need to do is to head over to the
              Android play store or iOS app store to download Lead Wallet. It
              takes less than a minute to set up your Lead wallet account to
              start benefiting from Lead wallet services.
            </p>
          </div>

          <div className="mb-16 text-center text-white">
            <h3 className="Montserrat-Black uppercase text-2xl mb-4">
              WHY LEAD?
            </h3>
            <p className="w-full md:w-2/3 mx-auto">
              We are not trying to reinvent the wheel. We are not trying to
              create a new blockchain ecosystem that nobody would use. We
              understand the biggest problem with cryptocurrency adoption is the
              lack of user-friendly and beautifully-designed applications.
              Cryptocurrency wallets are the gateway to adoption as they are the
              first application that newcomers often interact with before they
              start interacting with other kinds of apps. We are trying to be
              the leader of that adoption.
            </p>
          </div>

          <div className="w-full mb-24">
            <img
              src="/images/ecosystem.png"
              alt="visual example of ecosystem"
              className="w-full sm:w-2/3 max-w-xl mx-auto"
            />
          </div>

          <div className="mb-16 text-center text-white">
            <h3 className="Montserrat-Black uppercase text-2xl mb-4">
              LEARN ABOUT LEAD TOKEN
            </h3>
            <p className="w-full md:w-2/3 mx-auto">
              LEAD Token is an ERC-20 token that fuels the products and services
              that are delivered on Lead Wallet. With this, LEAD token is
              basically the heart of the Lead Wallet app. LEAD token is designed
              from the ground up to have natural demand as the services of Lead
              Wallet themselves get more popular.
            </p>
          </div>

          <div className="mb-16 text-center text-white">
            <h3 className="Montserrat-Black uppercase text-2xl mb-4">
              MISSION AND VISION
            </h3>
            <p className="w-full md:w-2/3 mx-auto">
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
          </div>

          <div className="mb-16 text-center text-white">
            <h3 className=" uppercase text-2xl mb-4">ROADMAP</h3>
            <div className="w-full sm:w-2/3 lg:w-1/3 mx-auto">
              <RoadmapItem
                phase={1}
                description="Researched the Lead Wallet Idea and its viability"
              />
              <RoadmapItem
                phase={2}
                description="Assemble Core team members and launched project development."
              />
              <RoadmapItem
                phase={3}
                description="completion of the Lead Wallet website and whitepaper."
              />
              <RoadmapItem
                phase={4}
                description="Completion of Lead Wallet MVP"
              />
              <RoadmapItem
                phase={5}
                description="Launch Lead Wallet on play store and Apple Store."
              />
              <RoadmapItem
                phase={6}
                description="Launch a global marketing and promotion campaign."
              />
              <RoadmapItem
                phase={7}
                description="Lead Wallet Update: MultiSender and Staking Features integration"
              />
              <RoadmapItem
                phase={8}
                description="Lead Wallet Update: MultiSender and Staking Features integration"
              />
              <RoadmapItem
                phase={9}
                description="Improve Staking Service to accommodate more PoS and DPoS cryptocurrencies"
              />
              <RoadmapItem
                phase={10}
                description="Acquire Crypto Exchange, Payment and Regulatory Licenses."
              />
              <RoadmapItem
                phase={11}
                description="Launch Lead Swap and Exchange Services."
              />
              <RoadmapItem
                phase={12}
                description="Launch Global Awareness Campaign (Regional Lead Meetups
                  globally) to expose the Lead Wallet brand."
                hideBar={true}
              />
            </div>
          </div>

          {/* <div id="mc_embed_signup">
            <form
              action="https://gmail.us2.list-manage.com/subscribe/post?u=a59a82003746cc8ec56a684de&amp;id=8b078d5141"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
              noValidate
            >
              <div id="mc_embed_signup_scroll">
                <label htmlFor="mce-EMAIL">Subscribe</label>
                <input
                  type="email"
                  defaultValue=""
                  name="EMAIL"
                  className="email"
                  id="mce-EMAIL"
                  placeholder="email address"
                  required
                />
                <div
                  style={{ position: "absolute", left: "-5000px" }}
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="b_a59a82003746cc8ec56a684de_8b078d5141"
                    tabIndex="-1"
                    defaultValue=""
                  />
                </div>
                <div className="clear">
                  <input
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="button"
                  />
                </div>
              </div>
            </form>
          </div> */}
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
