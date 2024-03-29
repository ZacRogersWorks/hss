import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
// import styles from "../styles/Home.module.css";
import { Carousel } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    const myForm = e.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => router.push("/success"))
      .catch((error) => alert(error));
  };

  return (
    <>
      <Head>
        <title>Hospital Safety Solutions</title>
        <meta
          name="description"
          content="Manufacturing the UV Pass-Through Disinfection Chamber technology since 2016. UV Countertop Disinfection Stations, IAQ Specialists improving indoor room air quality, w/many units to choose from & 99.1 % 1st pass kill rates in HVAC's."
        />
        <meta
          name="keywords"
          content="pass through chamber, UV, disinfection chamber, UV, pass-through chamber, UVC, pass-through chamber, IQ, indoor air quality, UV, HVAC, HVAC UV, SPD, disinfection, disinfection, sterilization, UV, disinfection, UV sterilization, UV disinfect doors, disinfection station"
          />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <div className="banner">
        <div className="bannerItem">
          <img src="/images/hspa-logo-white.png" alt="HSPA 2024"/>
          <p>See You at HSPA 2024 Las Vegas - Booth #1038</p>
        </div>
        <div className="podcast">
          <p>Listen to our feature on</p>
          <a
            className="podcastLink"
            href="https://traffic.libsyn.com/beyondclean/BC_HSS_VS1.mp3"
            target="_blank"
          >
            Beyond Clean Podcast
          </a>
        </div>
      </div>
      <main className="main">
        <section className="hero">
          <div className="sectionContainer">
            <div className="nav">
              <img src="./images/HSS_Logo.png" alt="Virus Image" />
              <a href="tel:8448896757">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34.118"
                  height="34.118"
                  viewBox="0 0 34.118 34.118"
                >
                  <path
                    id="Icon_awesome-phone-alt"
                    data-name="Icon awesome-phone-alt"
                    d="M33.144,24.109l-7.463-3.2a1.6,1.6,0,0,0-1.866.46L20.51,25.409A24.7,24.7,0,0,1,8.7,13.6L12.741,10.3A1.6,1.6,0,0,0,13.2,8.43L10,.967A1.61,1.61,0,0,0,8.17.041l-6.93,1.6A1.6,1.6,0,0,0,0,3.2,30.916,30.916,0,0,0,30.919,34.118a1.6,1.6,0,0,0,1.559-1.239l1.6-6.93a1.619,1.619,0,0,0-.934-1.839Z"
                    transform="translate(0 0)"
                    fill="#fff"
                  />
                </svg>
              </a>
            </div>
            <div className="heroContentContainer">
              <div className="heroContent">
                <h1>
                  Providing Solutions For A <span>Cleaner</span> And{" "}
                  <span>Safer</span> Workplace.
                </h1>
                <img
                  className="heroImageMobile"
                  src="./images/heroVirus.webp"
                  alt="Virus Image"
                />
                <p>
                  Our patented UV technologies for surface and air disinfection
                  can help reduce the human error that arises from current
                  cleaning/disinfecting protocols.
                  <br />
                  <br />
                  Our products are extremely relevant in SPD’s, ORs, ICUs, NICUs
                  and in other areas & other markets.
                </p>
                <a href="#contact" className="button">
                  CONTACT NOW
                </a>
              </div>
              <img
                className="heroImageDesktop"
                src="./images/heroVirus.webp"
                alt="Virus Image"
              />
            </div>
          </div>
        </section>
        <section className="products">
          <div className="sectionContainer">
            <h2>Our Products</h2>
            <div className="productList">
              <div className="product">
                <h3>HealthGuard UVC Pass Through Chamber</h3>
                <div className="carouselContainer">
                  <Carousel>
                    <Carousel.Item>
                      <img
                        className="w-100"
                        src="./images/passthrough_1.jpg"
                        alt="Passthrough"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="w-100"
                        src="./images/passthrough_2.jpg"
                        alt="Passthrough"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="w-100"
                        src="./images/passthrough_3.jpg"
                        alt="Passthrough"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="w-100"
                        src="./images/passthrough_4.jpg"
                        alt="Passthrough"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="w-100"
                        src="./images/passthrough_5.jpg"
                        alt="Passthrough"
                      />
                    </Carousel.Item>
                  </Carousel>
                </div>
                <a className="button" href="./HSS_Brochure.pdf" target="_blank">
                  DOWNLOAD BROCHURE
                </a>
              </div>
              <div className="product">
                <h3>HealthGuard UVC Table Top Chamber</h3>
                <div className="carouselContainer">
                  <Carousel>
                    <Carousel.Item>
                      <img
                        className="w-100"
                        src="./images/tabletop_1.jpg"
                        alt="Passthrough"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="w-100"
                        src="./images/tabletop_2.jpg"
                        alt="Passthrough"
                      />
                    </Carousel.Item>
                  </Carousel>
                </div>
                <a className="button" href="./HSS_Brochure.pdf" target="_blank">
                  DOWNLOAD BROCHURE
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="products">
          <div className="sectionContainer">
            <h2>AUVS Systems</h2>
            <div className="productList">
              <div className="product">
                <h3>AUVS UV Box</h3>
                <div className="carouselContainer">
                  <img src="./images/UV_Box_1.jpg" alt="Passthrough" />
                </div>
                <p className="tag">
                  99.9997% Coronavirus Disinfection in 55 Seconds!
                </p>
                <a
                  className="button"
                  href="./AUVS_Box_Brochure.pdf"
                  target="_blank"
                >
                  DOWNLOAD BROCHURE
                </a>
              </div>
              <div className="product">
                <h3>AUVS UV Cube</h3>
                <div className="carouselContainer">
                  <img src="./images/UV_Cube_1.jpg" alt="Passthrough" />
                </div>
                <a
                  className="button"
                  href="./AUVS_Cube_Brochure.pdf"
                  target="_blank"
                >
                  DOWNLOAD BROCHURE
                </a>
              </div>
            </div>
            <p className="comingSoon">
              More indoor air, office, and HVAC disinfection products COMING
              SOON!
            </p>
          </div>
        </section>
        <section className="blurb">
          <div className="sectionContainer">
            <h2>What Is UV-C Light?</h2>
            <img
              className="lightIcon"
              src="./images/LightIcon.png"
              alt="Light Icon"
            />
            <p>
              UV-C rays never actually make it to the Earth’s surface (the ozone
              layer blocks them), so the only UVC light humans are exposed to is
              artificial.
              <br /> <br />
              UV-C light damages the genetic material (DNA or RNA) in bacteria
              and viruses, inhibiting their ability to replicate and, in turn,
              causing their normal cellular functions, like reproduction, to
              break down.
            </p>
          </div>
        </section>
        <section className="contact" id="contact">
          <div className="sectionContainer">
            <h2>Request Information</h2>
            <a href="tel:8448896757">(844) UV-WORKS</a>
            <form
              className="form"
              name="contact-form"
              // method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              // action="/success"
              onSubmit={handleSubmit}
            >
              <p className="hidden">
                <label htmlFor="bot-field">
                  Disregard if you are human:
                  <input name="bot-field" />
                </label>
              </p>
              <input type="hidden" name="form-name" value="contact-form" />
              <div className="inputLine">
                <div className="input">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" />
                </div>
                <div className="input">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" />
                </div>
              </div>
              <div className="inputLine">
                <div className="input">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" name="phone" />
                </div>
                <div className="input">
                  <label htmlFor="facility">Facility</label>
                  <input type="text" id="facility" name="facility" />
                </div>
              </div>
              <div className="inputLine">
                <div className="input">
                  <label htmlFor="address">Address</label>
                  <input type="text" id="address" name="address" />
                </div>
                <div className="input">
                  <label htmlFor="city">City</label>
                  <input type="text" id="city" name="city" />
                </div>
              </div>
              <div className="stateZip">
                <div className="input">
                  <label htmlFor="state">State</label>
                  <input type="text" id="state" name="state" />
                </div>
                <div className="input">
                  <label htmlFor="zip">Zip</label>
                  <input type="number" id="zip" name="zip" />
                </div>
              </div>
              <div className="input">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message"></textarea>
              </div>
              <button className="button" type="submit">
                SEND
              </button>
            </form>
            <footer className="footer">
              <img src="./images/HSS_Logo.png" alt="Logo" />
              <p>
                848 E Main St
                <br />
                Suite #800
                <br />
                Ephrata, PA 17552
              </p>
              <a href="tel:8448896757">(844) UV-WORKS</a>
              <a href="mailto:info@hospitalsafetysolutions.com">
                info@hospitalsafetysolutions.com
              </a>
              <p className="copyright">
                © 2023 Hospital Safety Solutions - All Rights Reserved.
              </p>
              <p className="createdBy">
                Site designed & built by
                <a href="www.zacrogers.works" target="_blank">
                  ZacRogers.works
                </a>
              </p>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}
