
import { socialData, projectsData } from "../mock-data/data"

export default function Home() {

  return (
    <div className='home-page-wrapper'>
      <div className="container">

        {/* home section */}
        <div className="home-content">
          <div><img src={"/main-img.svg"} alt="" /></div>
          <div className="home-heading">
            <span>Hello, I am</span>
            <h2>Nasar</h2>
            <div className="video-heading">
              <h3>Video</h3>
              <h4>Editor</h4>
            </div>
          </div>
        </div>

        {/* projects section */}
        <div className="projects-wrapper">
          <div className="projects-heading">
            <h2>Projects</h2>
            <p>Driven by passion, learned by practice and experimenting.</p>
          </div>
          <div className="projects-content">
            {projectsData.map((item, index) => (
              <div key={item}>
                <iframe height="640" src={item} title={`Video 2`} frameborder="0" allowfullscreen style={{ width: '100%', borderRadius: '30px' }}></iframe>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* contact section */}
      <div className="contact-wrapper">
        <div className="container">
          <div className="social-content-wrapper">
            <div style={{ width: '100%' }}>
              <h4>Find me here</h4>
              <div className="social-content">
                {socialData.map((item, index) => (
                  <div className="social-heading" key={item} style={{ marginBottom: index === 0 ? '20px' : '0px' }}>
                    <img src={item.icon} alt="" />
                    <div>
                      <h3>{item.heading}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-me" style={{ width: '100%' }}>
              <h4>About me</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
