import { Formik } from 'formik';
import { Button, Input, Textarea, Heading, TextForm } from './BookForm.styled';
import { useDispatch } from 'react-redux';
import { setFormData } from '../../../../../redux/slice';

const BookForm = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Heading>Book your campervan now</Heading>
      <TextForm>Stay connected! We are always ready to help you.</TextForm>
      <Formik
        initialValues={{ email: '', name: '', date: '', comment: '' }}
        // validate={values => {
        //   const errors = {};
        //   if (!values.email) {
        //     errors.email = 'Required';
        //   } else if (
        //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        //   ) {
        //     errors.email = 'Invalid email address';
        //   }
        //   return errors;
        // }}
        onSubmit={(values, action) => {
          dispatch(setFormData(values));
          action.resetForm();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <Input
              type="name"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              placeholder="Name"
            />
            <Input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="Email"
            />
            {errors.email && touched.email && errors.email}
            <Input
              type="text"
              name="date"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.date}
              placeholder="Booking date"
            />
            <Textarea
              name="comment"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.comment}
              placeholder="Comment"
            />

            <Button type="submit" disabled={isSubmitting}>
              Send
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default BookForm;
