import { aboutChooseItem, aboutTeam, aboutTestimonialData, projectsCount } from "@/mock-data/about";
import Layout from "@/src/layout/Layout";
import { sliderProps } from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});
const About = () => {
  return (
    <Layout>
      {/* Page Banner Section Start */}
      <section
        className="page-banner pt-210 rpt-150 pb-45 rpb-50 rel z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-lg-11">
              <h1 className="hero-title about-title mb-100 rmb-50 wow fadeInUp delay-0-2s">
                Integrated Solutions
                <img
                  className="mxw-20"
                  src="assets/images/banner/inside-title1.png"
                  alt="title"
                />
                <img
                  className="mxw-40"
                  src="assets/images/banner/inside-title2.png"
                  alt="title"
                />
                Innovating Digital Landscapes
                <span className="arrow">
                  <img
                    className="wow fadeInLeft delay-0-6s"
                    src="assets/images/hero/title-arrow.png"
                    alt="Arrow"
                  />
                </span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Page Banner Section End */}
      {/* Video Area start */}
      <div className="video-area-two rel z-1">
        <div className="container-fluid">
          <div className="video-part style-two mb-40 wow fadeInUp delay-0-2s">
            <img src="assets/images/video/video-two-bg.jpg" alt="Video" />
            <a
              href="https://www.youtube.com/watch?v=9Y7ma241N8k"
              className="mfp-iframe video-play"
            >
              <i className="fas fa-play" />
            </a>
          </div>
        </div>
      </div>
      {/* Video Area end */}
      {/* Who We Are start */}
      <section className="who-we-are-area pt-100 rpt-80 pb-75 rpb-45 rel z-1">
        <div className="container container-1290">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center mb-70 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Who We Are</span>
                <h2>We are Professional and Experience Team </h2>
              </div>
            </div>
          </div>
          <div className="row gap-90">
            {aboutChooseItem?.map((item, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className={`why-choose-item style-two wow fadeInUp delay-0-${index + 2}s`}>
                  <div className="why-choose-header">
                    <i className={item.icon} />
                    <h5>{item.title}</h5>
                  </div>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Who We Are end */}
      {/* Headline area start */}
      <div className="headline-area bgc-primary pt-80 pb-65">
        <div className="container-fluid">
          <div className="headline-wrap marquee">
            <span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Design &amp; Branding</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Web Development</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Mobile Apps</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Design &amp; Branding</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Web Development</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Mobile Apps</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Design &amp; Branding</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Web Development</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Mobile Apps</b>
              </span>
            </span>
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* Team Area start */}
      <section className="team-area pt-130 rpt-100">
        <div className="container-fluid">
          <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center">
            {aboutTeam.map((item, index) => (
              <div className="col" key={index}>
                <div className={`team-member wow fadeInUp delay-0-${index + 2}s`}>
                  <div className="image">
                    <img src={item.img} alt="Team Member" />
                  </div>
                  <div className="content">
                    <h4>{item.title}</h4>
                    <span>{item.designation}</span>
                    {/* <Link legacyBehavior href="/team-details">
                      <a className="read-more">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link> */}
                  </div>
                  <div className="btn-social">
                    {/* <Link legacyBehavior href="/team-details">
                      <a className="read-more">
                        <span>View Details</span>{" "}
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link> */}
                    <div className="social-style-two">
                      {item.social?.map((item) => (
                        <a href={item.link} key={item}>
                          <i className={item.img} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Team Area end */}
      {/* Statistics Area start */}
      <div
        className="statistics-area pt-100 rpt-70 rel z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container">
          <div className="row justify-content-between">
            {projectsCount.map((item, index) => (
              <div className="col-xl-2 col-lg-3 col-6" key={index}>
                <div className={`counter-item counter-text-wrap wow fadeInRight delay-0-${index + 2}s`}>
                  <i className="fal fa-check-circle" />
                  <Counter end={item.count} extraClass={index === 1 && "k"} />
                  <span className="counter-title">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Statistics Area end */}
      {/* Testimonial Area start */}
      <section className="testimonial-section pt-70 rpt-30">
        <div className="container container-1210">
          <div className="row">
            <div className="col-lg-6" >
              <div className="image-border-shape rmb-20 wow fadeInRight delay-0-2s">
                <img
                  src="assets/images/testimonials/testimonials-four.jpg"
                  alt="Testimonial Left Image"
                />
                <div className="bottom-border" />
              </div>

            </div>
            <div className="col-lg-6">
              <div className="testimonial-one-right-part wow fadeInLeft delay-0-2s">
                <Swiper
                  {...sliderProps.testimonialsActiveSwiper}
                  className="testimonials-active"
                >
                  {aboutTestimonialData?.map((testimonial) => (
                    <SwiperSlide className="testimonial-item" key={testimonial}>
                      <div className="author-speech" >
                        <p>
                          <span className="quote">“</span>
                          {testimonial.content}
                          <span className="quote right-quote">“</span>
                        </p>
                      </div>
                      <div className="testimonial-footer">
                        <div className="testimonial-author">
                          <div className="author-image">
                            <img
                              src={testimonial.image}
                              alt="Author Image"
                            />
                          </div>
                          <div className="author-info">
                            <h4>{testimonial.author}</h4>
                            <span className="designation">{testimonial.designation}</span>
                          </div>
                        </div>
                        <div className="ratting style-two">
                          {testimonial.stars.map((star, idx) => (
                            <i
                              key={idx}
                              className={star === 0.5 ? "fas fa-star-half-alt" : "fas fa-star"}
                            />
                          ))}
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="testimonial-controls mt-75 rmt-40">
                  <button className="testimonial-prev slick-arrow">
                    <i className="far fa-chevron-left" />
                  </button>
                  <div className="testimonial-dots">
                    <div className="slick-dots"></div>
                  </div>
                  <button className="testimonial-next slick-arrow">
                    <i className="far fa-chevron-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
};
export default About;
