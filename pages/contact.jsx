import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import { gql, useMutation } from "@apollo/client";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import * as Yup from "yup";

const CREATE_POST = gql`
  mutation createContact($data: ContactCreateInput!) {
    createContact(data: $data) {
      name
      email
      phone
      message
    }
  }
`;

const Contact = () => {
  const [createContact] = useMutation(CREATE_POST);

  const initialValues = {
    name: "",
    phone: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required Field!"),
    phone: Yup.string().required("Required Field!"),
    email: Yup.string().email("Invalid email address").required("Required Field!"),
    message: Yup.string().required("Required Field!"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await createContact({
          variables: { data: values },
        });
        toast.success("Added successfully!")
        resetForm();
      } catch (error) {
        console.error('Error creating post:', error);
      }
    },
  });

  return (
    <Layout>
      {/* Page Banner Start */}
      <PageBanner pageName={"Contact"} />
      {/* Page Banner End */}
      {/* Contact Form Area start */}
      <section className="contact-page-area py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <div className="our-location-part rmb-55 wow fadeInUp delay-0-2s">
                <div className="row">
                  <div className="col-xl-10">
                    <div className="section-title mb-60">
                      <span className="sub-title mb-15">Contact Us</span>
                      <h2>Ready to Work Your Next Projects</h2>
                    </div>
                  </div>
                </div>
                <div className="row gap-80 pb-30">
                  <div className="col-sm-12">
                    <div className="our-location-address mb-40">
                      <h5>Pakistan</h5>
                      <p>Ali Town, Punjab, Lahore</p>
                      <a className="mailto" href="mailto:support@gmail.com">
                        softlvy@gmail.com
                      </a>
                      <br />
                      <a className="callto" href="callto:+00012345688">
                        <i className="fas fa-phone" /> +000 (123) 456 88
                      </a>
                    </div>
                  </div>
                </div>
                <h4>Follow Us</h4>
                <div className="social-style-two pt-15">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="contact-page-form form-style-one wow fadeInUp delay-0-2s">
                <div className="section-title mb-35">
                  <span className="sub-title mb-15">Get Free Quote</span>
                  <h3>Drop Us a Message</h3>
                </div>
                <form className="contactForm" onSubmit={formik.handleSubmit}>
                  <div className="row gap-60 pt-15">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="name">
                          <i className="far fa-user" />
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className={`form-control ${formik.touched.name && formik.errors.name ? "is-invalid" : ""}`}
                          placeholder="Full Name"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.name}
                        />
                        {formik.touched.name && formik.errors.name ? <div className="invalid-feedback">{formik.errors.name}</div> : null}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="phone_number">
                          <i className="far fa-phone" />
                        </label>
                        <input
                          type="text"
                          id="phone"
                          name="phone"
                          className={`form-control ${formik.touched.phone && formik.errors.phone ? "is-invalid" : ""}`}
                          placeholder="Phone Number"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.phone}
                        />
                        {formik.touched.phone && formik.errors.phone ? <div className="invalid-feedback">{formik.errors.phone}</div> : null}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="email">
                          <i className="far fa-envelope" />
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className={`form-control ${formik.touched.email && formik.errors.email ? "is-invalid" : ""}`}
                          placeholder="Email address"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? <div className="invalid-feedback">{formik.errors.email}</div> : null}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="message">
                          <i className="far fa-pencil" />
                        </label>
                        <textarea
                          name="message"
                          id="message"
                          className={`form-control ${formik.touched.message && formik.errors.message ? "is-invalid" : ""
                            }`}
                          rows={2}
                          placeholder="Message"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.message}
                        />
                        {formik.touched.message && formik.errors.message ? (
                          <div className="invalid-feedback">{formik.errors.message}</div>
                        ) : (
                          <div className="help-block with-errors" />
                        )}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group pt-5 mb-0">
                        <button type="submit" className="theme-btn style-two w-100">
                          Send Message us <i className="far fa-arrow-right" />
                        </button>
                        <div id="msgSubmit" className="hidden" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Form Area end */}
      {/* Location Map Area Start */}
      <div className="contact-page-map mb-120 rpb-90 wow fadeInUp delay-0-2s">
        <div className="container-fluid">
          <div className="our-location">
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m12!1m10!1m3!1d142190.2862584524!2d-74.01298319978558!3d40.721725351435126!2m1!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1663473911885!5m2!1sen!2sbd"
              style={{ border: 0, width: "100%" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            /> */}
          </div>
        </div>
      </div>
      {/* Location Map Area End */}
      {/* footer area start */}
    </Layout>
  );
};
export default Contact;
