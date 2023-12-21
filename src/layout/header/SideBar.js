import { useFormik } from "formik";
import { useMutation, gql } from '@apollo/client';
import * as Yup from 'yup';
import { Fragment } from "react";
import toast from "react-hot-toast";

// const servicesSelect = ['Web Development', 'App Development', 'Search Engine Optimization', 'React.Js Development', 'UI/UX Design']

const CREATE_POST = gql`
  mutation createAppointment($data: AppointmentCreateInput!) {
    createAppointment(data: $data) {
      name
      email
      message
    }
  }
`;

const SideBar = () => {
  const [createAppointment] = useMutation(CREATE_POST);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      // services: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required Field!'),
      email: Yup.string().email('Invalid email address').required('Required Field!'),
      // services: Yup.string().required('Required Field!'),
      message: Yup.string().required('Required Field!'),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await createAppointment({
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
    <Fragment>
      <div className="form-back-drop"></div>
      <section className="hidden-bar">
        <div className="inner-box text-center">
          <div className="cross-icon">
            <span className="fa fa-times" />
          </div>
          <div className="title">
            <h4>Get Appointment</h4>
          </div>
          {/*Appointment Form*/}
          <div className="appointment-form">
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="error">{formik.errors.name}</div>
                ) : null}
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="error">{formik.errors.email}</div>
                ) : null}
              </div>
              {/* <div className="form-group">
                <select
                  name="services"
                  id="services"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.services}
                >
                  {servicesSelect.map((service, index) => (
                    <option value={service} key={index}>
                      {service}
                    </option>
                  ))}
                </select>
                {formik.touched.services && formik.errors.services ? (
                  <div className="error">{formik.errors.services}</div>
                ) : null}
              </div> */}
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Please tell us about yourself & your project"
                  rows={6}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                />
                {formik.touched.message && formik.errors.message ? (
                  <div className="error">{formik.errors.message}</div>
                ) : null}
              </div>
              <div className="form-group">
                <button type="submit" className="theme-btn">
                  Submit now
                </button>
              </div>
            </form>
          </div>
          {/*Social Icons*/}
          <div className="social-style-one">
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
            <a href="#">
              <i className="fab fa-pinterest-p" />
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default SideBar;
