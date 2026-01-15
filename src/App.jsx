import React from 'react';
import './App.css';

// Image assets
const imgContainer = "http://localhost:3845/assets/e8c5657e68e29d2f7443741136b8193bcbd13859.png";
const imgImageAveDeFuego = "http://localhost:3845/assets/4f63484a785ea90bf1c37f921dc7bccd2e709b79.png";
const imgImageGallus = "http://localhost:3845/assets/283b5359742fffc9889b0e4e829f4226488a5f47.png";
const imgImageCasarey = "http://localhost:3845/assets/8fdb56a539d6e9e8ce6cf447c18ae75f93c48bd2.png";
const imgImageMarielen = "http://localhost:3845/assets/bf0b756817cf41d643230cbecb5a1deb54e93ab4.png";
const imgImageSuhar = "http://localhost:3845/assets/2e7ed809be0835a7bce6defae431abc8fe2087ac.png";
const imgImageWhatTheFlock = "http://localhost:3845/assets/0b16cb4fd7490839d95e780d6ec8a27a26f145e6.png";
const imgImageNuwaStone = "http://localhost:3845/assets/c544f7e18ba13de592dfd07676e2ccc9006cfd70.png";
const imgImageThreeBrothersGolf = "http://localhost:3845/assets/5bdef30417ee55032117f4961b94e9f3a13b4c6d.png";
const imgImageAkbal = "http://localhost:3845/assets/6ee9d8275d3db387fd2946c37ba1494e9ffa933f.png";
const imgEditedBanana17679876766961 = "http://localhost:3845/assets/0b927cf5263f8dca448ce8bdb506ec56559f5637.png";
const imgImageBlackAgnes = "http://localhost:3845/assets/524400c78a1f7a7b602605a5d3391663df251720.png";
const imgImageTresDiablos = "http://localhost:3845/assets/11851f8830827df2950bba4d9d6863521c9b9886.png";
const imgImageAguaSalada = "http://localhost:3845/assets/8b826fe0fa130259951d9a52942c41ccb7e6fffb.png";
const imgImageTheUnAgency = "http://localhost:3845/assets/73fc6d9c98f3c8b428987b1b0c9ff057d036651c.png";
const imgVector = "http://localhost:3845/assets/c43a520d74402c5ccf0bac0335640cab6243b478.svg";
const imgVector1 = "http://localhost:3845/assets/9e06a6c0543c9d6072095c242210dff0bb1655d5.svg";
const imgIcon = "http://localhost:3845/assets/138bc6671fe8b7654c81faefe3eb040825ae4d42.svg";
const imgVector2 = "http://localhost:3845/assets/052d44c9435d53b54decb43200195f90707676b5.svg";
const imgVector3 = "http://localhost:3845/assets/a7072cb3bfac38d9445337d938e1afde9aa424d5.svg";

function App() {
  return (
    <div className="app-container">
      {/* Background Elements */}
      <div className="background-container-1">
        <div className="background-overlay">
          <img alt="" className="background-image" src={imgContainer} />
        </div>
      </div>
      <div className="background-gradient"></div>
      
      {/* Hero Background Text */}
      <div className="hero-background-text">
        <p className="hero-text-large">UNAGENCY</p>
      </div>

      {/* Navigation */}
      <nav className="navigation">
        <div className="nav-logo">
          <img alt="The unAgency" src={imgImageTheUnAgency} />
        </div>
        <div className="nav-menu">
          <p>Menu</p>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-logo-container">
            <img alt="The unAgency" src={imgImageTheUnAgency} className="hero-logo" />
          </div>
          <div className="hero-subtitle">
            <p>Where creativity meets strategy.</p>
            <p>We don't follow the rules—we <span className="bold-text">rewrite</span> them.</p>
          </div>
          <div className="scroll-indicator">
            <p>Scroll</p>
            <div className="scroll-icon">
              <img alt="" src={imgVector2} />
              <img alt="" src={imgVector3} />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <h2 className="section-title">PROJECTS</h2>
        
        <div className="projects-grid">
          {/* Row 1 */}
          <div className="project-item">
            <div className="project-image-container">
              <img alt="Ave de Fuego" src={imgImageAveDeFuego} className="project-image" />
              <div className="project-overlay"></div>
            </div>
            <div className="project-info">
              <div className="project-title-group">
                <h3 className="project-title">AVE DE FUEGO</h3>
                <p className="project-subtitle">Tequila Extra Añejo</p>
              </div>
              <p className="project-category">Spirits Packaging</p>
            </div>
          </div>

          <div className="project-item">
            <div className="project-image-container">
              <img alt="Gallus" src={imgImageGallus} className="project-image" />
              <div className="project-overlay"></div>
            </div>
            <div className="project-info">
              <div className="project-title-group">
                <h3 className="project-title">GALLUS</h3>
                <p className="project-subtitle">Islay Single Malt Scotch Whisky</p>
              </div>
              <p className="project-category">Spirits Packaging</p>
            </div>
          </div>

          <div className="project-item">
            <div className="project-image-container">
              <img alt="Casarey" src={imgImageCasarey} className="project-image" />
              <div className="project-overlay"></div>
            </div>
            <div className="project-info">
              <div className="project-title-group">
                <h3 className="project-title">CASAREY</h3>
                <p className="project-subtitle">Tequila Extra Añejo</p>
              </div>
              <p className="project-category">Spirits Packaging</p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="project-item project-item-large">
            <div className="project-image-container project-image-large">
              <img alt="Marielen" src={imgImageMarielen} className="project-image" />
              <div className="project-overlay"></div>
            </div>
            <div className="project-info">
              <div className="project-title-group">
                <h3 className="project-title">MARIELEN</h3>
                <p className="project-subtitle">Rioja Crianza · Tempranillo</p>
              </div>
              <p className="project-category">Spirits Packaging</p>
            </div>
          </div>

          <div className="project-item project-item-large">
            <div className="project-image-container project-image-large">
              <img alt="Suhar" src={imgImageSuhar} className="project-image" />
              <div className="project-overlay"></div>
            </div>
            <div className="project-info">
              <div className="project-title-group">
                <h3 className="project-title">SUHAR</h3>
                <p className="project-subtitle">Rioja Crianza · Tempranillo</p>
              </div>
              <p className="project-category">Spirits Packaging</p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="project-item project-item-wide">
            <div className="project-image-container project-image-wide">
              <img alt="What The Flock" src={imgImageWhatTheFlock} className="project-image" />
              <div className="project-overlay"></div>
            </div>
            <div className="project-info">
              <div className="project-title-group">
                <h3 className="project-title">WHAT THE FLOCK</h3>
                <p className="project-subtitle">Ready to Drink</p>
              </div>
              <p className="project-category">Beverage Packaging</p>
            </div>
          </div>

          {/* Row 4 */}
          <div className="project-item">
            <div className="project-image-container">
              <img alt="Nuwa Stone" src={imgImageNuwaStone} className="project-image" />
              <div className="project-overlay"></div>
            </div>
            <div className="project-info">
              <div className="project-title-group">
                <h3 className="project-title">NUWA STONE</h3>
              </div>
              <p className="project-category">Branding & Visual Identity</p>
            </div>
          </div>

          <div className="project-item">
            <div className="project-image-container">
              <img alt="Three Brothers Golf" src={imgImageThreeBrothersGolf} className="project-image" />
              <div className="project-overlay"></div>
            </div>
            <div className="project-info">
              <div className="project-title-group">
                <h3 className="project-title">THREE BROTHERS GOLF</h3>
              </div>
              <p className="project-category">Branding & Visual Identity</p>
            </div>
          </div>

          <div className="project-item">
            <div className="project-image-container">
              <img alt="Akbal" src={imgImageAkbal} className="project-image" />
              <div className="project-overlay"></div>
            </div>
            <div className="project-info">
              <div className="project-title-group">
                <h3 className="project-title">AKBAL</h3>
                <p className="project-subtitle">Tequila Extra Añejo</p>
              </div>
              <p className="project-category">Spirits Packaging</p>
            </div>
          </div>

          {/* Row 5 */}
          <div className="project-item project-item-large">
            <div className="project-image-container project-image-large">
              <img alt="Black Agnes" src={imgImageBlackAgnes} className="project-image" />
              <div className="project-overlay"></div>
            </div>
            <div className="project-info">
              <div className="project-title-group">
                <h3 className="project-title">BLACK AGNES</h3>
                <p className="project-subtitle">Islay Single Malt Scotch Whisky</p>
              </div>
              <p className="project-category">Spirits Packaging</p>
            </div>
          </div>

          <div className="project-item project-item-large">
            <div className="project-image-container project-image-large">
              <img alt="Tres Diablos" src={imgImageTresDiablos} className="project-image" />
              <div className="project-overlay"></div>
            </div>
            <div className="project-info">
              <div className="project-title-group">
                <h3 className="project-title">TRES DIABLOS</h3>
                <p className="project-subtitle">Tequila</p>
              </div>
              <p className="project-category">Spirits Packaging</p>
            </div>
          </div>

          {/* Row 6 */}
          <div className="project-item project-item-wide">
            <div className="project-image-container project-image-wide">
              <img alt="Agua Salada" src={imgImageAguaSalada} className="project-image" />
              <div className="project-overlay"></div>
            </div>
            <div className="project-info">
              <div className="project-title-group">
                <h3 className="project-title">AGUA SALADA</h3>
                <p className="project-subtitle">Tequila Reposado</p>
              </div>
              <p className="project-category">Spirits Packaging</p>
            </div>
          </div>
        </div>

        <button className="show-less-button">Show Less</button>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-container">
          <h2 className="section-title">ABOUT</h2>
          
          <div className="about-content">
            <div className="about-main-text">
              <p>
                We are the <span className="italic-text glitch-text">glitch</span> in the agency model. 
                A collective of rogue creatives obsessed with the absolute.
              </p>
            </div>
            
            <div className="about-description">
              <div className="about-description-column">
                <p>
                  Traditional agencies sell time and bloated processes. We sell impact. 
                  We have surgically removed the account managers, the endless meetings, 
                  and the layers of middle-management that dilute vision.
                </p>
              </div>
              <div className="about-description-column">
                <p>
                  What remains is pure potency. Direct access to elite talent. Radical transparency. 
                  Relentless execution. We don't just build digital products; we engineer market dominance.
                </p>
              </div>
            </div>

            <div className="about-services">
              <div className="service-item">
                <div className="service-number">01</div>
                <div className="service-label">Visceral Strategy</div>
              </div>
              <div className="service-item">
                <div className="service-number">02</div>
                <div className="service-label">Radical Design</div>
              </div>
              <div className="service-item">
                <div className="service-number">03</div>
                <div className="service-label">Kinetic Dev</div>
              </div>
              <div className="service-item">
                <div className="service-number">04</div>
                <div className="service-label">Total Impact</div>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="trusted-by-section">
          <p className="trusted-by-label">Trusted By</p>
          <div className="trusted-by-logos">
            <span>JMRPACKING</span>
            <span>TBG GOLF</span>
            <span>BELTECH</span>
            <span>CASTELLANA IMPORTACIONES</span>
            <span>NUWA STONE</span>
            <span>NORTHWEST</span>
            <span>OKAPI ENERGY</span>
            <span>JMRPACKING</span>
            <span>3BG GOLF</span>
            <span>BELTECH</span>
            <span>CASTELLANA IMPORTACIONES</span>
            <span>NUWA STONE</span>
            <span>NORTHWEST</span>
            <span>OKAPI ENERGY</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-left">
            <h2 className="contact-title">LET'S TALK</h2>
            
            <form className="contact-form">
              <div className="form-input">
                <input type="text" placeholder="NAME" />
              </div>
              <div className="form-input">
                <input type="email" placeholder="EMAIL" />
              </div>
              <div className="form-textarea">
                <textarea placeholder="MESSAGE"></textarea>
              </div>
              <button type="submit" className="send-button">
                Send Inquiry
                <img alt="" src={imgIcon} className="send-icon" />
              </button>
            </form>
          </div>

          <div className="contact-right">
            <div className="locations-section">
              <h3 className="locations-title">Locations</h3>
              <div className="locations-list">
                <div className="location-item">
                  <span className="location-name">San Diego</span>
                  <div className="location-details">
                    <span>USA</span>
                    <span>PST</span>
                  </div>
                </div>
                <div className="location-item">
                  <span className="location-name">Tijuana</span>
                  <div className="location-details">
                    <span>MX</span>
                    <span>PST</span>
                  </div>
                </div>
                <div className="location-item">
                  <span className="location-name">Guadalajara</span>
                  <div className="location-details">
                    <span>MX</span>
                    <span>CST</span>
                  </div>
                </div>
                <div className="location-item">
                  <span className="location-name">London</span>
                  <div className="location-details">
                    <span>UK</span>
                    <span>GMT</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-info-section">
              <h3 className="contact-info-title">Contact</h3>
              <a href="mailto:hello@theunagencyco.com" className="contact-email">
                hello@theunagencyco.com
              </a>
            </div>

            <div className="footer-bottom">
              <p className="copyright">© 2026 The unAgency</p>
              <div className="social-links">
                <a href="#" className="social-link">Instagram</a>
                <a href="#" className="social-link">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
