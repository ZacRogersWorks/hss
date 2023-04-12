import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Carousel } from "react-bootstrap";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Hospital Safety Solutions</title>
        <meta
          name="description"
          content="Providing solutions for a cleaner and safer workplace.  "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.banner}>
        <img src="/images/HSPA.png" alt="HSPA 2023" />
        <p>
        See You at HSPA Nashville 2023 - Booth #1154
        </p>
      </div>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.sectionContainer}>
            <div className={styles.nav}>
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
            <div className={styles.heroContentContainer}>
              <div className={styles.heroContent}>
                <h1>
                  Providing Solutions For A <span>Cleaner</span> And{" "}
                  <span>Safer</span> Workplace.
                </h1>
                <img
                  className={styles.heroImageMobile}
                  src="./images/heroVirus.webp"
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
                <a href="#contact" className={styles.button}>
                  CONTACT NOW
                </a>
              </div>
              <img
                className={styles.heroImageDesktop}
                src="./images/heroVirus.webp"
              />
            </div>
          </div>
        </section>
        <section className={styles.products}>
          <div className={styles.sectionContainer}>
            <h2>Our Products</h2>
            <div className={styles.productList}>
              <div className={styles.product}>
                <h3>HealthGuard UVC Pass Through Chamber</h3>
                <div className={styles.carouselContainer}>
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
                <a
                  className={styles.button}
                  href="./HSS_Brochure.pdf"
                  target="_blank"
                >
                  DOWNLOAD BROCHURE
                </a>
              </div>
              <div className={styles.product}>
                <h3>HealthGuard UVC Table Top Chamber</h3>
                <div className={styles.carouselContainer}>
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
                <a
                  className={styles.button}
                  href="./HSS_Brochure.pdf"
                  target="_blank"
                >
                  DOWNLOAD BROCHURE
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.products}>
          <div className={styles.sectionContainer}>
            <h2>AUVS Systems</h2>
            <a className={styles.auvs} href="https://www.advanceduvsystems.com/" target="_blank">View more info here</a>
            <div className={styles.productList}>
              <div className={styles.product}>
                <h3>AUVS UV Box</h3>
                <div className={styles.carouselContainer}>
                  <img src="./images/UV_Box_1.jpg" alt="Passthrough" />
                </div>
                <p className={styles.tag}>
                  99.9997% Coronavirus Disinfection in 55 Seconds!
                </p>
                <a
                  className={styles.button}
                  href="./AUVS_Box_Brochure.pdf"
                  target="_blank"
                >
                  DOWNLOAD BROCHURE
                </a>
              </div>
              <div className={styles.product}>
                <h3>AUVS UV Cube</h3>
                <div className={styles.carouselContainer}>
                  <img src="./images/UV_Cube_1.jpg" alt="Passthrough" />
                </div>
                <a
                  className={styles.button}
                  href="./AUVS_Cube_Brochure.pdf"
                  target="_blank"
                >
                  DOWNLOAD BROCHURE
                </a>
              </div>
            </div>
            <p className={styles.comingSoon}>
              More indoor air, office, and HVAC disinfection products COMING
              SOON!
            </p>
          </div>
        </section>
        <section className={styles.blurb}>
          <div className={styles.sectionContainer}>
            <h2>What Is UV-C Light?</h2>
            <img
              className={styles.lightIcon}
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
        <section className={styles.contact} id="contact">
          <div className={styles.sectionContainer}>
            <h2>Request Information</h2>
            <a href="tel:8448896757">(844) UV-WORKS</a>
            <form
              className={styles.form}
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              action="/success"
            >
              <p className={styles.hidden}>
                <label>
                  Don’t fill this out if you’re human:{" "}
                  <input name="bot-field" />
                </label>
              </p>
              <input type="hidden" name="form-name" value="contact" />
              <div className={styles.inputLine}>
                <div className={styles.input}>
                  <label for="name">Name</label>
                  <input type="text" id="name" name="name" />
                </div>
                <div className={styles.input}>
                  <label for="email">Email</label>
                  <input type="email" id="email" name="email" />
                </div>
              </div>
              <div className={styles.inputLine}>
              <div className={styles.input}>
                <label for="phone">Phone</label>
                <input type="tel" id="phone" name="phone" />
              </div>
              <div className={styles.input}>
                <label for="phone">Facility</label>
                <input type="text" id="facility" name="facility" />
              </div>
              </div>
              <div className={styles.inputLine}>
              <div className={styles.input}>
                <label for="address">Address</label>
                <input type="text" id="address" name="address" />
              </div>
              <div className={styles.input}>
                <label for="city">City</label>
                <input type="text" id="city" name="city" />
              </div>
              </div>
              <div className={styles.stateZip}>
                <div className={styles.input}>
                  <label for="State">State</label>
                  <input type="text" id="state" name="state" />
                </div>
                <div className={styles.input}>
                  <label for="zip">Zip</label>
                  <input type="number" id="zip" name="zip" />
                </div>
              </div>
              <div className={styles.input}>
                <label for="message">Message</label>
                <textarea></textarea>
              </div>
              <button className={styles.button} type="submit">
                SEND
              </button>
            </form>
            <footer className={styles.footer}>
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
              <p className={styles.copyright}>
                © 2023 Hospital Safety Solutions - All Rights Reserved.
              </p>
              <p className={styles.createdBy}>
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
