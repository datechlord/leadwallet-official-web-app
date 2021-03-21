import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Teampage = () => {
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
        <img
          src="/images/nosiy.png"
          alt="background"
          role="presentation"
          className="absolute z-10 bottom-noisy"
        />
      </div>

      <div className="relative z-10 w-full top-0">
        <div className="absolute w-full token-gradient"></div>
      </div>

      <div className="relative w-full z-30">
        <Header>
          <h1 className="t-hidden">Lead Wallet - The Team</h1>
        </Header>

        <main className="container mx-auto pb-12 px-4 force-height">
          <section className="mt-8 text-center">
            <h2 className="Montserrat-Black uppercase text-white text-4xl mb-2">
              TEAM AND ADVISORS
            </h2>
            <p className="text-white w-full md:w-5/6 mx-auto leading-7">
              The Lead team members and advisors are globally distributed with
              members based in Nigeria, India, Singapore, Indonesia, Russia,
              China, etc. The team and advisor panel is continually growing.
            </p>
          </section>

          <section className="mt-20 mx-auto">
            <div className="flex flex-col sm:flex-row w-full lg:w-5/6 mx-auto mb-12">
              <div className="w-full sm:w-1/3 px-4 md:px-6 lg:px-12">
                <img
                  src="/images/obasi.png"
                  alt="Obasi"
                  className="w-full mx-auto"
                  style={{ maxWidth: "200px" }}
                />
              </div>
              <div className="w-full text-center mt-4 sm:mt-0 sm:w-2/3 sm:text-left text-white">
                <h3 className="Montserrat-Black text-xl flex flex-col-reverse sm:justify-start sm:flex-row sm:items-center">
                  Obasi Francis Ifegwu
                  <div className="flex flex-row justify-center">
                    <a
                      href="https://www.linkedin.com/mwlite/in/obasi-francis-ifegwu-79829794"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2"
                    >
                      <img src="/images/linkedin.svg" alt="linkedin" width="30" />
                    </a>
                    <a
                      href="https://www.twitter.com/obasifrancis"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2"
                    >
                      <img src="/images/twitter.svg" alt="twitter" width="30" />
                    </a>
                  </div>
                </h3>
                <h4 className="font-Montserrat-ExtraBold uppercase text-xs mb-4">
                  Chief Executive Officer
                </h4>
                <p>
                  Obasi has over 7 years of experience in the start-up
                  environment and is a Co-founder of Lead Cyber Services Limited
                  (LEAD Wallet). Obasi is charged with the responsibility of
                  daily operations of Lead in order to achieve the vision of
                  Lead Wallet so that millions of users worldwide will have
                  access to cryptocurrencies and financial services use-cases
                  specifically for cryptocurrency.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row w-full lg:w-5/6 mx-auto mb-12">
              <div className="w-full sm:w-1/3 px-4 md:px-6 lg:px-12">
                <img
                  src="/images/henry.png"
                  alt="henry"
                  className="w-full mx-auto"
                  style={{ maxWidth: "200px" }}
                />
              </div>
              <div className="w-full text-center mt-4 sm:mt-0 sm:w-2/3 sm:text-left text-white">
                <h3 className="Montserrat-Black text-xl flex flex-col-reverse sm:justify-start sm:flex-row sm:items-center">
                  Henry Onyebuchi
                  <div className="flex flex-row justify-center">
                    <a
                      href="https://www.linkedin.com/in/henry-onyebuchi-116501123"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2"
                    >
                      <img src="/images/linkedin.svg" alt="linkedin" width="30" />
                    </a>
                    {/* <a
                      href="https://www.twitter.com/Hendobox"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2"
                    >
                      <img src="/images/twitter.svg" alt="" width="30" />
                    </a> */}
                  </div>
                </h3>
                <h4 className="font-Montserrat-ExtraBold uppercase text-xs mb-4">
                  Chief Technology Officer
                </h4>
                <p>
                  Henry is a smart contract engineer, and also a co-founder of
                  Lead wallet. He is passionate about creating blockchain
                  solutions for optimal usage and user convenience. He has
                  experience working with startups, in different capacity at
                  both technical and non-technical.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row w-full lg:w-5/6 mx-auto mb-12">
              <div className="w-full sm:w-1/3 px-4 md:px-6 lg:px-12">
                <img
                  src="/images/ruddy.png"
                  alt="ruddy"
                  className="w-full mx-auto"
                  style={{ maxWidth: "200px" }}
                />
              </div>
              <div className="w-full text-center mt-4 sm:mt-0 sm:w-2/3 sm:text-left text-white">
                <h3 className="Montserrat-Black text-xl flex flex-col-reverse sm:justify-start sm:flex-row sm:items-center">
                  Ruddy Setiadi Gunawan
                  <div className="flex flex-row justify-center">
                    <a
                      href="http://linkedin.com/in/ruddy-setiadi-gunawan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2"
                    >
                      <img src="/images/linkedin.svg" alt="linkedin" width="30" />
                    </a>
                    <a
                      href="https://www.twitter.com/nothereforchat"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2"
                    >
                      <img src="/images/twitter.svg" alt="twitter" width="30" />
                    </a>
                  </div>
                </h3>
                <h4 className="font-Montserrat-ExtraBold uppercase text-xs mb-4">
                  Chief Marketing Officer
                </h4>
                <p>
                  Ruddy has been working in the blockchain world since 2017. He
                  used to work as an independent contractor for Switchain,
                  Remitano, Origin Protocol, and Publish0x. Using his massive
                  experience in the crypto space, Ruddy co-founded Lead Cyber
                  Services Limited (LEAD Wallet). In addition to his experience
                  with cryptocurrency and blockchain-related companies, Ruddy is
                  also the co-founder of SISAS Global, a South American company
                  that uses Big Data to analyze and tackle social and
                  psychological problems.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row w-full lg:w-5/6 mx-auto mb-12">
              <div className="w-full sm:w-1/3 px-4 md:px-6 lg:px-12">
                <img
                  src="/images/kumar.png"
                  alt="kumar"
                  className="w-full mx-auto"
                  style={{ maxWidth: "200px" }}
                />
              </div>
              <div className="w-full text-center mt-4 sm:mt-0 sm:w-2/3 sm:text-left text-white">
                <h3 className="Montserrat-Black text-xl flex flex-col-reverse sm:justify-start sm:flex-row sm:items-center">
                  Jaswant Kumar
                  <div className="flex flex-row justify-center">
                    <a
                      href="https://www.linkedin.com/in/jaswantkumar-lead"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2"
                    >
                      <img src="/images/linkedin.svg" alt="linkedin" width="30" />
                    </a>
                    <a
                      href="https://twitter.com/Lead_JD"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2"
                    >
                      <img src="/images/twitter.svg" alt="twitter" width="30" />
                    </a>
                  </div>
                </h3>
                <h4 className="font-Montserrat-ExtraBold uppercase text-xs mb-4">
                  Chief Operating Officer
                </h4>
                <p>
                  An entrepreneur with more than 7 years of experience in the
                  start-up environment working on different innovative solutions
                  across designing, advertising and management industries to
                  shape and drive businesses with creative ideas. Quickly he
                  grew to realize that in this world, power is concentrated at
                  the top. While the crypto/blockchain scene offers a chance to
                  rewrite the rulebook. He hold a design degree and has won
                  international awards representing India at many world stages.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row w-full lg:w-5/6 mx-auto mb-12">
              <div className="w-full sm:w-1/3 px-4 md:px-6 lg:px-12">
                <img
                  src="/images/eliezer.png"
                  alt="eliezer"
                  className="w-full mx-auto"
                  style={{ maxWidth: "200px" }}
                />
              </div>
              <div className="w-full text-center mt-4 sm:mt-0 sm:w-2/3 sm:text-left text-white">
                <h3 className="Montserrat-Black text-xl flex flex-col-reverse sm:justify-start sm:flex-row sm:items-center">
                  Chianakwalam Eliezer
                  <div className="flex flex-row justify-center">
                    <a
                      href="https://www.linkedin.com/in/eliezer-chianakwalam-a5a9b011b/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2"
                    >
                      <img src="/images/linkedin.svg" alt="linkedin" width="30" />
                    </a>
                    <a
                      href="https://twitter.com/Anc_Eliezer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2"
                    >
                      <img src="/images/twitter.svg" alt="twitter" width="30" />
                    </a>
                  </div>
                </h3>
                <h4 className="font-Montserrat-ExtraBold uppercase text-xs mb-4">
                  Chief Communication Officer
                </h4>
                <p>
                  Eliezer is a business solutions provider with experience in
                  data analysis. He is the Chief Communications Officer of Lead
                  Wallet. He has about three years of experience helping to plan
                  and execute business ideas for start-ups as well as
                  established organizations. He is a Cofounder of ICE and Lead
                  Cyber Services Limited (LEAD Wallet). Eliezer has been
                  actively involved with projects in the blockchain industry for
                  more than 3 years, filling various roles. Through his position
                  as the CCO, he is committed to making Lead wallet a household
                  name within and beyond the blockchain space.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row w-full lg:w-5/6 mx-auto mb-12">
              <div className="w-full sm:w-1/3 px-4 md:px-6 lg:px-12">
                <img
                  src="/images/vinay.png"
                  alt="vinay"
                  className="w-full mx-auto"
                  style={{ maxWidth: "200px" }}
                />
              </div>
              <div className="w-full text-center mt-4 sm:mt-0 sm:w-2/3 sm:text-left text-white">
                <h3 className="Montserrat-Black text-xl flex flex-col-reverse sm:justify-start sm:flex-row sm:items-center">
                  Vinay Yadev
                  <div className="flex flex-row justify-center">
                    <a
                      href="http://linkedin.com/in/vinayyadavlead/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2"
                    >
                      <img src="/images/linkedin.svg" alt="linkedin" width="30" />
                    </a>
                    {/* <a
                      href="https://twitter.com/Anc_Eliezer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2"
                    >
                      <img src="/images/twitter.svg" alt="" width="30" />
                    </a> */}
                  </div>
                </h3>
                <h4 className="font-Montserrat-ExtraBold uppercase text-xs mb-4">
                  Chief Business Development Officer
                </h4>
                <p>
                  Business Development Professional associated with tech
                  industries for more than 11 years, he has extensive work
                  experience across multiple business functions such as sales,
                  marketing, management and financial positions throughout his
                  decade-long career in the hardware, software and internet
                  industries. A true all-round prospect is known for his on-time
                  project delivery. Master in tactics to assist in strategic
                  planning and monitoring the business.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row w-full lg:w-5/6 mx-auto mb-12">
              <div className="w-full sm:w-1/3 px-4 md:px-6 lg:px-12">
                <img
                  src="/images/neil.png"
                  alt="neil"
                  className="w-full mx-auto"
                  style={{ maxWidth: "200px" }}
                />
              </div>
              <div className="w-full text-center mt-4 sm:mt-0 sm:w-2/3 sm:text-left text-white">
                <h3 className="Montserrat-Black text-xl flex flex-col-reverse sm:justify-start sm:flex-row sm:items-center">
                  Neil Mani
                  <div className="flex flex-row justify-center">
                    <a
                      href="https://www.linkedin.com/in/mani-neil-26094b13a"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2"
                    >
                      <img src="/images/linkedin.svg" alt="linkedin" width="30" />
                    </a>
                    {/* <a
                      href="https://twitter.com/Anc_Eliezer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2"
                    >
                      <img src="/images/twitter.svg" alt="" width="30" />
                    </a> */}
                  </div>
                </h3>
                <h4 className="font-Montserrat-ExtraBold uppercase text-xs mb-4">
                  Chief Design Officer
                </h4>
                <p>
                  His work experience spans 7 years and he possesses excellent
                  design leadership skills, strategic design thinking, and User
                  Experience design. Neil is extremely focused on innovation,
                  with a special focus on user experience strategy, setting
                  design goals and metrics, omni-channel solution design, design
                  for enterprise software products, advanced ecosystem research,
                  validation techniques, and setting up a mature UX practice.
                  Neil is well versed with Lean UX, agile, user-centered
                  methodologies, user research, and he’s always learning
                  emerging technologies that have been helping user experience
                  in a few business houses.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row w-full lg:w-5/6 mx-auto mb-12">
              <div className="w-full sm:w-1/3 px-4 md:px-6 lg:px-12">
                <img
                  src="/images/kingsley.png"
                  alt=""
                  className="w-full mx-auto"
                  style={{ maxWidth: "200px" }}
                />
              </div>
              <div className="w-full text-center mt-4 sm:mt-0 sm:w-2/3 sm:text-left text-white">
                <h3 className="Montserrat-Black text-xl flex flex-col-reverse sm:justify-start sm:flex-row sm:items-center">
                  Kingsley Victor
                  <div className="flex flex-row justify-center">
                    <a
                      href="https://www.linkedin.com/in/kingsley-victor-952550169"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2"
                    >
                      <img src="/images/linkedin.svg" alt="linkedin" width="30" />
                    </a>
                    <a
                      href="https://twitter.com/java_warrior"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2"
                    >
                      <img src="/images/twitter.svg" alt="twitter" width="30" />
                    </a>

                    <a
                      href="https://github.com/kingsley-einstein"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2"
                    >
                      <img src="/images/sm-github.svg" alt="github" width="30" />
                    </a>
                  </div>
                </h3>
                <h4 className="font-Montserrat-ExtraBold uppercase text-xs mb-4">
                  Lead Developer
                </h4>
                <p>
                  Kingsley is a full-stack software engineer based in Nigeria.
                  He has over 3 years of experience and a passion for building
                  stuff particularly with Java, JavaScript or Typescript and is
                  a great fan of frameworks/libraries such as Spring Boot,
                  Express, Angular and React. Kingsley is also a budding DevOps
                  engineer who's familiar with Docker, Travis and Jenkins and is
                  open to learning new technologies. He's strongly passionate
                  about RESTful APIs, GraphQL, Microservices, Blockchain, Cloud
                  Computing, Serverless technology, and Big Data. Kingsley is
                  also in love with philosophy and is a fan of Plato, Anselm of
                  Canterbury, Thomas Aquinas, Socrates and Rene Descartes. He
                  has joined the LEAD Wallet to help deliver the core product of
                  Lead wallet.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row w-full lg:w-5/6 mx-auto mb-12">
              <div className="w-full sm:w-1/3 px-4 md:px-6 lg:px-12">
                {/* <img
                  src="/images/"
                  alt=""
                  className="w-full mx-auto"
                  style={{ maxWidth: "200px" }}
                /> */}
              </div>
              <div className="w-full text-center mt-4 sm:mt-0 sm:w-2/3 sm:text-left text-white">
                <h3 className="Montserrat-Black text-xl flex flex-col-reverse sm:justify-start sm:flex-row sm:items-center">
                  Sam Ayorinde
                  <div className="flex flex-row justify-center">
                    <a
                      href="https://www.linkedin.com/in/sam-ayorinde-3b1b9a151"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2"
                    >
                      <img src="/images/linkedin.svg" alt="linkedin" width="30" />
                    </a>
                    <a
                      href="https://twitter.com/i_SamAyorinde"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2"
                    >
                      <img src="/images/twitter.svg" alt="twitter" width="30" />
                    </a>
                    <a
                      href="https://github.com/Sam-Devs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2"
                    >
                      <img src="/images/sm-github.svg" alt="github" width="30" />
                    </a>
                  </div>
                </h3>
                <h4 className="font-Montserrat-ExtraBold uppercase text-xs mb-4">
                  Blockchain/Software Developer
                </h4>
                <p>
                  Sam is a Blockchain/Software Developer with experience developing web apps with high standards and interacting with multiple stakeholders from technical and non-technical backgrounds, ensuring clarity, quality, and continuous delivery. He has worked with technologies such as React, Sass, Bootstrap, CSS, Node, MongoDB, Javascript and currently building full-stack DApps on the Ethereum blockchain with Solidity and Web3. He is a self-starter with a proven ability to leverage multiple technologies to build interactive and innovative applications. 
                </p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Teampage;
