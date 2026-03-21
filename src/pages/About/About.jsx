import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import templeHero from '../../assets/temple_about_hero.png';
import templeInner from '../../assets/temple_inner.png';
import templeFest from '../../assets/temple_fest.png';
import './About.css';

const About = () => {
  const [currentImg] = useState(0);
  const images = [templeHero, templeInner, templeFest];

  const historyRows = [
    {
      layout: 'split',
      image: templeInner,
      content: (
        <>
          <p>Panemangalore is a village in Bantwal Taluk, having a population of about 6,000. Situated on the left bank of the river Netravati, it is predominantly agricultural. The Gowda Saraswat Brahman settlement in the Village is closely spread around the Temple, and composes of 90 families with 400 Members.</p>
          <p>The road in front of the Temple has rows of shops and establishments on both sides, which belong to the community. No G.S.B. household in Panemangalore is more than a kilometer away from the Temple, and hence the community life is closely associated with the Temple. About 80 devotees offer prayers at the Temple every day.</p>
        </>
      )
    },
    {
      point: "1. Origin of the Temple (1825)",
      content: (
        <>
          <p>The Origin of the Temple is traced to a challenge faced by the community in Panemangalore. As per an oral account, in the distant past, the small community in Panemangalore was attached for all religious purposes to our Bantwal Temple, situated on the Right Bank of the Netravati.</p>
          <p><strong>The Resolve</strong></p>
          <p>It was customary to go to Bantwal Temple for the annual UPAKARMA ceremony by crossing the river by boat. One Year the party of men from Panemangalore reached Bantwal somewhat late due to floods. Finding the Temple doors closed and locked, they resolved to construct a community Temple at any cost.</p>
          <p>The challenge was met and soon a Temple was built. Vedamurthi Sri Ramachandra Bhat’s household deity <strong>Sri Venkataramana Swami</strong> with Sridevi and Bhudevi was installed as Patta Devaru. Historians conservatively fix the year of the Pratistha of the Temple as circa 1825 A.D.</p>
          <p><strong>Divine Installation of Veera Vittala</strong></p>
          <p>Following the establishment, the business in the place declined, leading the elders to consult His Holiness the Swamiji of Sri Kashi Matha Samsthan. It was proposed that <strong>Sri Veera Vittala Murti</strong>, which was being worshipped as the household deity of the Prabhu Family of Bantwal, be installed as Patta Devaru.</p>
          <p>This proposal was carried out, and since then, Lord Veera Vittala has been the primary deity of the temple. The original Patta Devaru, Sri Venkataramana, remains in the sanctum and is carried in Utsavas twice a year.</p>
        </>
      )
    },
    {
      point: "2. The Great Flood of 1923",
      content: (
        <>
          <p>A defining event in the history of Panemangalore is the <strong>Great Flood of August 7th, 1923</strong>. The merciless waters razed almost all mud structures to the ground. Since the Temple was a stone structure situated on elevated ground, it spared the sanctum from total destruction, providing a sanctuary for the community.</p>
          <p>Despite the devastation and migration that followed, the undaunted spirit of the community wiped off the deep scars of the disaster within two decades.</p>
        </>
      )
    },
    {
      point: "3. Deities & Pujavidhis",
      content: (
        <>
          <p><strong>Patta Devaru:</strong> VEERA VITTALA, a Panchaloha Murti positioned on a Lotus Pita (7.5" tall), holding the Shankha with Abhaya Mudra.</p>
          <p><strong>Pujavidhi:</strong> Based on Vaishnava Agama and Tantrasara, with Trikala Puja at 6:30 AM, 12 Noon, and 8 PM.</p>
          <p>The temple is also enriched by various Parivara Devaru, including stone shrines for Hanumanta and Garuda, and a Naga Shrine built in 1962.</p>
        </>
      )
    },
    {
      point: "4. Sacred Assets & Utsavas",
      content: (
        <p>The most important Utsava is the <strong>Lakshadipotsava</strong> on Kartika Suddha Hunnime. The temple's processions are graced by the <strong>Silver Lalaki</strong>, an 8-pillared chariot weighing 39.7 kg, inaugurated by H.H. Sri Sudhindra Tirtha Swamiji in 1964.</p>
      )
    },
    {
      point: "5. Management & Social Legacy",
      content: (
        <>
          <p>The temple has always served as a rallying point for corporate welfare. The <strong>Kalyana Mantapa</strong> (1961) and the <strong>Sharada High School</strong> (1964) stand as living testaments to the community's vision for education and social service.</p>
          <p>The dedication of staff like the late manager Sri P. Ekanath Bhat, who served for four decades, ensures that the administrative and spiritual life of the temple continues smoothly for future generations.</p>
        </>
      )
    },
    {
      point: "Sri Veera Vittala Devaru",
      isMainHeading: true,
      layout: 'split',
      image: templeInner,
      background: 'colored',
      content: (
        <>
          <p>Sri Veera Vittala is the presiding deity of the shrine. The idol is a beautiful Panchaloha Murti representing Lord Vishnu in the form of Veera Vittala.</p>
          <p>The deity is highly revered by the G.S.B. community and the annual ceremonies reflect the deep devotion and heritage of the temple.</p>
        </>
      )
    },
    {
      point: "Swamiji Name Here",
      isMainHeading: true,
      layout: 'split',
      image: templeFest,
      background: 'white',
      content: (
        <>
          <p>Swamiji para</p>
        </>
      )
    }
  ];

  return (
    <div className="about-page">
      <header className="about-hero">
        <div className="container">
          <div className="about-hero-image-container">
            <img
              src={images[currentImg]}
              alt="Temple Heritage"
              className="about-hero-image"
            />
          </div>

          <p className="hero-subtitle">Sri Veera Vittala Venkataramana Swamy Temple, Panemangalore</p>
          <div className="accent-line"></div>
        </div>
      </header>

      <div className="history-article">
        {historyRows.map((row, index) => {
          const isSplit = row.layout === 'split' || index === 0;
          const isColored = row.background === 'colored';

          return (
            <section
              key={index}
              className={`history-row ${isSplit ? 'split-layout' : ''} ${isColored ? 'colored-section' : ''}`}
            >
              {row.isMainHeading && (
                <div className="main-section-heading">
                  <h2>{row.point}</h2>
                </div>
              )}

              <div className={isSplit ? 'split-layout-content' : 'standard-layout'}>
                {isSplit ? (
                  <>
                    <div className="history-image-column">
                      <img src={row.image || templeInner} alt={row.point || "Temple Section"} />
                    </div>
                    <div className="text-column">
                      {row.point && !row.isMainHeading && (
                        <div className="side-point">
                          <h3>{row.point}</h3>
                        </div>
                      )}
                      <div className="para-content">
                        {row.content}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {row.point && (
                      <div className="side-point">
                        <h3>{row.point}</h3>
                      </div>
                    )}
                    <div className="para-content">
                      {row.content}
                    </div>
                  </>
                )}
              </div>
            </section>
          );
        })}
      </div>

      <footer className="article-footer">
        <div className="container">
          <div className="quote-divider">
            <p>"The temple today stands as a symbol of sacrifice made by every member of the community. It is indeed a worthy tribute to the collective will of the people."</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
