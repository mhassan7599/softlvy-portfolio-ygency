import { aboutCounter, chooseUs, headLineWrapMarquee, headlineArea, provideSevices, recentWorkGallery, skillsWrap, teamMembers } from "@/mock-data/home";
import Layout from "@/src/layout/Layout";
import { sliderProps } from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});

const Index = () => {
  return (
    <Layout footer={2}>
      {/* Hero Section Start */}
      <section
        className="hero-area-two pt-220 rpt-150 pb-80 rpb-50 rel z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container">
          <h1 className="hero-title mb-100 rmb-50 wow fadeInUp delay-0-2s">
            Innovative
            <span className="arrow">
              <img
                className="wow fadeInLeft delay-0-6s"
                src="assets/images/hero/title-arrow.png"
                alt="Arrow"
              />
            </span>
            Web Solutions
          </h1>
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-3 col-lg-4">
              <div className="hero-two-content mb-50 wow fadeInRight delay-0-2s">
                <p style={{ fontSize: '14px', lineHeight: '25px' }}>
                  Crafting seamless digital experiences through top-tier web development, intuitive UI/UX design, robust app development, and impactful SEO strategies. Elevating brands by merging innovation with user-centric solutions for optimal online presence and visibility.
                </p>
                <img
                  className="mt-20"
                  src="assets/images/hero/arrow.png"
                  alt="Arrow"
                />
                <div className="authors-text mt-45">
                  <img src="assets/images/hero/author1.png" alt="Author" />
                  <img src="assets/images/hero/author2.png" alt="Author" />
                  <img src="assets/images/hero/author3.png" alt="Author" />
                  <img src="assets/images/hero/author4.png" alt="Author" />
                  <i className="fal fa-plus" />
                  <span className="text">100+ Popular Clients</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-two-image mb-50 wow zoomIn delay-0-2s">
                <img src="assets/images/hero/hero-two.jpg" alt="Hero" />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="hero-two-btn mb-50 wow fadeInLeft delay-0-2s">
                <Link legacyBehavior href="/about">
                  <a className="explore-more">
                    <i className="fas fa-arrow-right" />{" "}
                    <span>Explore more</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}
      {/* Advertise Area Start */}
      <section className="advertise-banner-area rel z-1">
        <div className="container container-1290">
          <div className="row">
            <div className="col-lg-7 wow fadeInUp delay-0-2s">
              <div
                className="advertise-banner style-one bgc-primary"
                style={{
                  backgroundImage:
                    "url(assets/images/banner/add-banner-bg.png)",
                }}
              >
                <div className="image">
                  <img src="assets/images/banner/add-banner.png" alt="Banner" />
                </div>
                <div className="content mt-20">
                  <span className="number">150+</span>
                  <h6>Project Complete</h6>
                  <hr />
                  <p>Innovative Solutions for Digital Growth</p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 wow fadeInUp delay-0-4s">
              <div
                className="advertise-banner style-two bg-white"
                style={{
                  backgroundImage: "url(assets/images/banner/star-vector.png)",
                }}
              >
                <h3>Innovative Web Development Solutions</h3>
                <hr className="mb-35" />
                <div className="authors-text">
                  <img src="assets/images/hero/author1.png" alt="Author" />
                  <img src="assets/images/hero/author2.png" alt="Author" />
                  <img src="assets/images/hero/author3.png" alt="Author" />
                  <img src="assets/images/hero/author4.png" alt="Author" />
                  <i className="fal fa-plus" />
                  <span className="text">
                    We denounce indignatione dislike mende charms
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Advertise Area End */}
      {/* Skills Area Start */}
      <section className="skills-area pt-100 rpt-70 rel z-1">
        <div className="container container-1590">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <h2>Here are Numerous Topics That Will Enhance Your Skills</h2>
              </div>
            </div>
          </div>
          <div className="skills-wrap">
            {skillsWrap?.map((item, i) => (
              <div className="skill-item" key={i}>
                <img src={item.img} alt="Skill Icon" />
                <span className="text">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Skills Area End */}
      {/* About Us Area start */}
      <section className="about-area pt-100 rpt-70 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7">
              <div className="about-content">
                <div className="section-title mb-40 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">About Company</span>
                  <h2>We’re Award-winning Innovative Web Solutions</h2>
                </div>
                <div className="text-left-border mt-60 mb-65 wow fadeInUp delay-0-2s">
                  <p>
                    We excel in web development, UI/UX design, app creation, and SEO optimization, consistently delivering successful projects. Our commitment to innovation and quality ensures client satisfaction, driving measurable results and expanding digital influence across various industries.
                  </p>
                </div>
                <div className="about-counter">
                  <div className="row">
                    {aboutCounter?.map((item, index) => (
                      <div className="col-md-4 col-sm-6" key={index}>
                        <div className={`counter-item-two counter-text-wrap wow fadeInUp delay-0-${index + 2}s`}>
                          <Counter end={item.count} extraClass={"percent"} />
                          <span className="counter-title">
                            {item.title}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="image-border-shape wow fadeInRight delay-0-2s">
                <img
                  src="assets/images/about/about-image-shape.png"
                  alt="About Image Shape"
                />
                <div className="bottom-border" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Area end */}
      {/* Service Style Four start */}
      <section
        className="service-area-four pt-110 rpt-85 pb-100 rpb-70"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Popular Services</span>
                <h2>We Provide Amazing Web Design Solutions</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {provideSevices?.map((item, index) => (
              <div className="col-xl-3 col-lg-4 col-sm-6" key={index}>
                <div className={`service-four-item ${index % 2 === 0 ? 'wow fadeInUp' : 'wow fadeInDown'} delay-0-${index + 2}s`}>
                  <div className="content">
                    <div className="icon-btn">
                      <i className={item.icon} />
                      <Link legacyBehavior href={item.path}>
                        <a className="more-btn">
                          <i className="far fa-arrow-right" />
                        </a>
                      </Link>
                    </div>
                    <h5>
                      <Link legacyBehavior href={item.path}>
                        <a>{item.title}</a>
                      </Link>
                    </h5>
                  </div>
                  <div className="image">
                    <img
                      src={item.img}
                      alt="Service"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Service Style Four end */}
      {/* Headline area start */}
      <div className="headline-area bgc-primary pt-80 pb-65">
        <div className="container-fluid">
          <div className="headline-wrap marquee">
            <span>
              {headlineArea.map((item, index) => (
                <span className="marquee-item" key={index}>
                  <i className="fas fa-star-of-life" />
                  <b>{item}</b>
                </span>
              ))}
            </span>
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* Project Timeline-two Area start */}
      <section className="project-timeline-two-area pt-130 rpt-100 rel z-1">
        <div className="container container-1290">
          <div className="row">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title mb-70 rmb-30 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Recent Works Gallery</span>
                <h2>Lat’s Look Our Recent Project Gallery</h2>
              </div>
            </div>
            <div className="col-xl-6 col-lg-4 text-lg-end">
              <Link legacyBehavior href="/projects">
                <a className="explore-more rmb-50 wow fadeInRight delay-0-2s">
                  <i className="fas fa-arrow-right" /> <span>Explore more</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="row gap-90">
            {recentWorkGallery?.map((item, index) => (
              <div className="col-lg-6" key={index}>
                <div className={`project-timeline-two wow fadeInUp delay-0-${index + 2}s`}>
                  <span className="serial-number">{`0${index + 1}`}</span>
                  <h4>
                    <Link legacyBehavior href="/project-details">
                      <a>{item.title}</a>
                    </Link>
                  </h4>
                  <div className="image">
                    <img
                      src={item.imageSrc}
                      alt="Project TimeLine Image"
                    />
                  </div>
                  <div className="right-btn">
                    <a href="#">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Project Timeline Two Area end */}
      {/* Team Area start */}
      <section className="team-area pt-75 rpt-45">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-20">Team Members</span>
                <h2>Meet Our Professionals Team</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center">
            {teamMembers?.map((item, index) => (
              <div className="col">
                <div className={`team-member wow fadeInUp delay-0-${index + 2}s`}>
                  <div className="image">
                    <img src={item.imageSrc} alt="Team Member" />
                  </div>
                  <div className="content">
                    <h4>{item.name}</h4>
                    <span>{item.designation}</span>
                    <Link legacyBehavior href="/team-details">
                      <a className="read-more">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Team Area end */}
      {/* Why Choose Us start */}
      <section className="demo-area pt-100 rpt-70 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-8">
              <div className="why-choose-us-content">
                <div className="section-title mb-60 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">Why Choose Us</span>
                  <h2>Web Design Company That You Can Trust</h2>
                </div>
                <div className="row gap-60">
                  {chooseUs.map((item, index) => (
                    <div className="col-md-6" key={index}>
                      <div className={`why-choose-item wow fadeInUp delay-0-${index + 2}s`}>
                        <div className="why-choose-header">
                          <i className="far fa-chevron-right" />
                          <h5>{item.title}</h5>
                        </div>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="why-choose-right wow fadeInLeft delay-0-2s">
                <img
                  src="assets/images/services/why-choose-right.png"
                  alt="Why Choose Right"
                />
                <div className="why-choose-border-shape" />
                <div className="text-shape">
                  <img
                    className="text"
                    src="assets/images/services/web-design-text.svg"
                    alt="Web Design Text"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us end */}
      {/* Pricing style three start */}
      <section
        className="pricing-area-three pt-75 rpt-100 pb-85 rpb-55"
        style={{
          backgroundImage:
            "url(assets/images/background/pricing-bg-dot-shape.png)",
        }}
      >
        <div className="container container-1290">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-20">Pricing Package</span>
                <h2>Best Pricing Package For All Web Design Solutions</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="pricing-plan-item wow fadeInUp delay-0-2s">
                <div className="icon">
                  <i className="flaticon-abstract" />
                </div>
                <h5>Regular Package</h5>
                <span className="price-text">
                  <span className="before">$</span>
                  <span className="price">18.3</span>{" "}
                  <span className="after">/per month</span>
                </span>
                <ul className="list-style-one">
                  <li>Landing Page Design</li>
                  <li>Web Development</li>
                  <li>SEO Optimizations</li>
                  <li>Mobile Applications Design</li>
                  <li>Quality Assurance</li>
                  <li>Customs Services</li>
                </ul>
                <Link legacyBehavior href="/pricing">
                  <a className="theme-btn w-100">
                    Choose Package <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="pricing-plan-item wow fadeInUp delay-0-4s">
                <span className="badge">
                  <i className="fas fa-star-of-life" />
                  <i className="fas fa-star-of-life" />
                  popular package
                  <i className="fas fa-star-of-life" />
                  <i className="fas fa-star-of-life" />
                </span>
                <div className="icon">
                  <i className="flaticon-liquid" />
                </div>
                <h5>Silver Package</h5>
                <span className="price-text">
                  <span className="before">$</span>
                  <span className="price">49.3</span>{" "}
                  <span className="after">/per month</span>
                </span>
                <ul className="list-style-one">
                  <li>Landing Page Design</li>
                  <li>Web Development</li>
                  <li>SEO Optimizations</li>
                  <li>Mobile Applications Design</li>
                  <li>Quality Assurance</li>
                  <li>Customs Services</li>
                </ul>
                <Link legacyBehavior href="/pricing">
                  <a className="theme-btn w-100">
                    Choose Package <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="pricing-plan-item wow fadeInUp delay-0-6s">
                <div className="icon">
                  <i className="flaticon-petals" />
                </div>
                <h5>Golden Package</h5>
                <span className="price-text">
                  <span className="before">$</span>
                  <span className="price">98.3</span>{" "}
                  <span className="after">/per month</span>
                </span>
                <ul className="list-style-one">
                  <li>Landing Page Design</li>
                  <li>Web Development</li>
                  <li>SEO Optimizations</li>
                  <li>Mobile Applications Design</li>
                  <li>Quality Assurance</li>
                  <li>Customs Services</li>
                </ul>
                <Link legacyBehavior href="/pricing">
                  <a className="theme-btn w-100">
                    Choose Package <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing style three end */}
      {/* Headline area start */}
      <div className="headline-area style-two bgc-primary pt-80 pb-65">
        <div className="container-fluid">
          <div className="headline-wrap marquee">
            <span>
              {headLineWrapMarquee?.map((item, index) => (
                <span className="marquee-item" key={index}>
                  <i className="fas fa-star-of-life" />
                  <b>{item}</b>
                </span>
              ))}
            </span>
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* Testimonial Area start */}
      <section className="testimonial-section pt-130 rpt-90 rpb-40 pb-70">
        <div className="container container-1210">
          <div className="row">
            <div className="col-lg-6">
              <div className="image-border-shape rmb-20 wow fadeInRight delay-0-2s">
                <img
                  src="assets/images/testimonials/testimonials-four.jpg"
                  alt="Testimonial Left Image"
                />
                <div className="bottom-border" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonial-one-right-part">
                <Swiper
                  {...sliderProps.testimonialsActiveSwiper}
                  className="testimonials-active wow fadeInUp delay-0-2s"
                >
                  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> On the other hand we
                        denounce with see righteous indignation and dislike men
                        who are beguiled and demoralized by the charms offset
                        pleasure moments line desire that they cannot foresee
                        pain and trouble that are bound ensue and equal blame
                        belongs their duty{" "}
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/testimonials/author1.png"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-info">
                          <h4>James N. Johnson</h4>
                          <span className="designation">CEO &amp; Founder</span>
                        </div>
                      </div>
                      <div className="ratting style-two">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> On the other hand we
                        denounce with see righteous indignation and dislike men
                        who are beguiled and demoralized by the charms offset
                        pleasure moments line desire that they cannot foresee
                        pain and trouble that are bound ensue and equal blame
                        belongs their duty{" "}
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/testimonials/author1.png"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-info">
                          <h4>James N. Johnson</h4>
                          <span className="designation">CEO &amp; Founder</span>
                        </div>
                      </div>
                      <div className="ratting style-two">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> On the other hand we
                        denounce with see righteous indignation and dislike men
                        who are beguiled and demoralized by the charms offset
                        pleasure moments line desire that they cannot foresee
                        pain and trouble that are bound ensue and equal blame
                        belongs their duty{" "}
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/testimonials/author1.png"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-info">
                          <h4>James N. Johnson</h4>
                          <span className="designation">CEO &amp; Founder</span>
                        </div>
                      </div>
                      <div className="ratting style-two">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> On the other hand we
                        denounce with see righteous indignation and dislike men
                        who are beguiled and demoralized by the charms offset
                        pleasure moments line desire that they cannot foresee
                        pain and trouble that are bound ensue and equal blame
                        belongs their duty{" "}
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/testimonials/author1.png"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-info">
                          <h4>James N. Johnson</h4>
                          <span className="designation">CEO &amp; Founder</span>
                        </div>
                      </div>
                      <div className="ratting style-two">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="testimonial-controls mt-75 rmt-40 wow fadeInUp delay-0-2s">
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
export default Index;
