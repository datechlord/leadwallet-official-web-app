import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/common/Button";
import InputField from "../components/common/InputField";
import Card from "../components/common/Card";

const ContactUsPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [messsage, setMessage] = useState("");
  const [showThanks, setShowThanks] = useState(false);
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
          className="absolute z-10 second-noisy"
        />
      </div>

      <div className="relative z-10 w-full top-0">
        <div className="absolute w-full contactus-gradient"></div>
      </div>

      <div className="relative w-full z-30">
        <Header>
          <h1 className="t-hidden">Lead Wallet - Contact Us</h1>
        </Header>

        {showThanks ? (
          <main className="container mx-auto pb-48 px-4 force-height">
            <section className="w-full mt-48 text-center">
              <img
                src="/images/check-circle.svg"
                width="100"
                className="mx-auto"
                alt="Submition sent"
                role="presentation"
              />
              <h2 className="font-Montserrat-ExtraBold text-white text-3xl mb-2">
                Thank you for contacting us
              </h2>
              <p className="text-white w-full md:w-5/6 mx-auto leading-7">
                For more information please reach out to:{" "}
                <a
                  className="text-blue-300"
                  href="mailto:contact@leadwallet.io"
                >
                  contact@leadwallet.io
                </a>
              </p>
            </section>
          </main>
        ) : (
          <main className="container mx-auto pb-48 px-4 force-height">
            <section className="mt-8 text-center">
              <h2 className="Montserrat-Black uppercase text-white text-3xl mb-2">
                CONTACT US
              </h2>
              <p className="text-white w-5/6 mx-auto leading-7">
                We are not trying to reinvent the wheel. We are not trying to
                create a new blockchain ecosystem that nobody would use. We
                understand the biggest problem with cryptocurrency adoption is
                the lack of user-friendly and beautifully-designed applications.
                Cryptocurrency wallets are the gateway to adoption as they are
                the first application that newcomers often interact with before
                they start interacting with other kinds of apps. We are trying
                to be the leader of that adoption.
              </p>
            </section>

            <section className="mt-12">
              <Card className="px-4 md:px-12">
                <form>
                <div className="grid gird-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-8">
                  <InputField
                    value={email}
                    placeholder="EMAIL"
                    relation="userEmail"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputField
                    value={name}
                    placeholder="NAME"
                    relation="userName"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-1 mt-8">
                  <InputField
                    type="textarea"
                    value={messsage}
                    relation="textarea"
                    placeholder="SEND MESSAGE"
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div className="mt-8 mb-8">
                  <Button
                    className="w-full md:w-60 py-3 text-xl"
                    onClick={() => setShowThanks(true)}
                  >
                    SUBMIT
                  </Button>
                </div>
                </form>
              </Card>
            </section>
          </main>
        )}

        <Footer />
      </div>
    </div>
  );
};

export default ContactUsPage;
