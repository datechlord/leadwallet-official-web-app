import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/common/Card";

const TokenPage = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="relative z-20 w-full top-0">
        <img
          src="/images/nosiy.png"
          alt="background"
          role="presentation"
          className="absolute z-10 top-noisy"
        />
        <img
          src="/images/nosiy.png"
          alt="background"
          role="presentation"
          className="absolute z-10 third-noisy"
        />
      </div>

      <div className="relative z-10 w-full top-0">
        <div className="absolute w-full token-gradient"></div>
      </div>

      <div className="relative w-full z-30">
        <Header>
          <h1 className="t-hidden">Lead Wallet - LEAD Token</h1>
        </Header>

        <main className="container mx-auto pb-12 px-4 force-height">
          <section className="mt-2 text-center">
            <h2 className="Montserrat-Black uppercase text-white text-3xl mb-2">
              WHY LEAD TOKEN?
            </h2>
            <div className="text-white w-5/6 mx-auto leading-7">
              <p className="text-white text-left">
                Lead Token is the native currency that fuels the products and
                services that are delivered on Lead Wallet ecosystem. Thereby
                making Lead token a utility token as it will be needed to access
                some major service areas of the wallet platform.
              </p>
            </div>
            <div className="text-white w-5/6 mx-auto leading-7">
              <p className="text-white text-left">
                The Lead Token is minted on the Ethereum VM as an ERC20 standard
                token. There will only be a total of one billion Lead Token
                supply to ever exist.
              </p>
            </div>
            <div className="text-white w-5/6 mx-auto leading-7">
              <p className="text-white text-left">
                The Lead Wallet revenue is generated from nearly all products and services offered via the Lead Wallet application. It is designed with a deflationary
                monetary system whereby 30% of Lead Wallet quarterly profits are
                used to purchase LEAD from the exchanges and are permanently
                burnt out of circulation.
              </p>
            </div>
            <div className="text-white w-5/6 mx-auto leading-7">
              <p className="text-white text-left">
                Lead Wallet revenue will be generated from all the products and services
                offered via the Lead Wallet application, and we provide a quarterly audit to ensure transparency. Every Quarter, Lead team will conduct an audit of all the earnings
                from Lead Wallet, after which 30% of the total net profit will
                be used to buy back a portion of the Lead token, which will be
                permanently burnt. This process will continue until only 30% of
                the total LEAD supply is left.
              </p>
            </div>

            <h3 className="Montserrat-Black uppercase text-white text-3xl mb-0 mt-8">
              LEAD TOKEN FEATURES AND USE CASES:
            </h3>
            <div className="text-white w-5/6 mx-auto leading-7 mr-2">
              <ul className="text-left">
                <li className="list-disc">
                  Up to 20% discount on purchases when you make payment with
                  LEAD.
                </li>
                <li className="list-disc">
                  Up to 180% early access APY stake rewards when you stake LEAD
                  on Lead Wallet.
                </li>
                <li className="list-disc">
                  Lead can be used as fees for several wallet transactions.
                </li>
                <li className="list-disc">
                  Deflationary Monetary Supply. 30% of Lead Wallet’s quarterly
                  profit will be used to buyback and burn LEAD token until only
                  30% of the total supply is left.
                </li>
                <li className="list-disc">
                  It can be used to trade digital gift cards and also to pay for
                  several Lead Wallet services at a discounted rate.
                </li>
              </ul>
            </div>

            <section className="mt-20">
              <Card className="px-4 md:px-12">
                3
                <div className="grid grid-cols-1 sm:grid-cols-3">
                  <div className="mx-auto w-40 py-8">
                    <img
                      src="/images/payment.svg"
                      width="50"
                      alt="payment icon"
                      role="presentation"
                      className="mx-auto mb-6"
                    />
                    <h4 className="text-white text-center text-2xl font-Montserrat-ExtraBold uppercase">
                      30% PROFIT SHARE
                    </h4>
                  </div>
                  <div className="mx-auto w-40 py-8">
                    <img
                      src="/images/reward.svg"
                      width="50"
                      alt="reward icon"
                      role="presentation"
                      className="mx-auto mb-6"
                    />
                    <h4 className="text-white text-center text-2xl font-Montserrat-ExtraBold uppercase">
                      40% STAKE REWARD
                    </h4>
                  </div>
                  <div className="mx-auto w-40 py-8">
                    <img
                      src="/images/water.svg"
                      width="50"
                      alt="liquidity icon"
                      role="presentation"
                      className="mx-auto mb-6"
                    />
                    <h4 className="text-white text-center text-2xl font-Montserrat-ExtraBold uppercase">
                      100% LIQUIDITY
                    </h4>
                  </div>
                </div>
              </Card>
            </section>
          </section>

          <section className="mt-20 text-center">
            <h3 className="Montserrat-Black uppercase text-white text-3xl mb-2">
              TOKEN DISTRIBUTION
            </h3>
            <p className="text-white w-5/6 mx-auto leading-7 text-left">
              The team only gets 15% of the total token distribution as we do
              not want this project to enrich the select few. We believe that
              the community deserves to get the most out of our project. Please
              take a look at the chart below to see how we are going to
              distribute the tokens:
            </p>
          </section>

          <section className="mt-20 text-center">
            <img
              src="/images/distribution.png"
              alt="token distribution pie chart"
              className="w-full md:w-96 mx-auto"
            />
            <div className="text-white w-full lg:w-2/3 mx-auto mt-12">
              <div className="py-2">
                <img src="/images/bar_1.png" alt="presale 300,000,000 token (unlocked)" className="w-full" />
                <p className="t-hidden">presale 300,000,000 token (unlocked)</p>
              </div>
              <div className="py-2">
                <img src="/images/bar_2.png" alt="marketing 50,000,000 (unlocked)" className="w-full" />
                <p className="t-hidden">marketing 50,000,000 (unlocked)</p>
              </div>
              <div className="py-2">
                <img src="/images/bar_3.png" alt="staking programme 300,000,000 (locked for 10 months)" className="w-full" />
                <p className="t-hidden">staking programme 300,000,000 (locked for 10 months)</p>
              </div>
              <div className="py-2">
                <img src="/images/bar_4.png" alt="Uniswap liquidity 140,000,000 (locked permanently for liquidity)" className="w-full" />
                <p className="t-hidden">Uniswap liquidity 140,000,000 (locked permanently for liquidity)</p>
              </div>
              <div className="py-2">
                <img src="/images/bar_5.png" alt="Team tokens 100,000,000 (locked for 10 months)" className="w-full" />
                <p className="t-hidden">Team tokens 100,000,000 (locked for 10 months)</p>
              </div>
              <div className="py-2">
                <img src="/images/bar_6.png" alt="Dev/ecosystem funds 100,000,000 (locked for 10 months)" className="w-full" />
                <p className="t-hidden">Dev/ecosystem funds 100,000,000 (locked for 10 months)</p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default TokenPage;
