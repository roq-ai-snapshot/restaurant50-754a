import * as yup from 'yup';

export const feedbackValidationSchema = yup.object().shape({
  comment: yup.string().required(),
  customer_id: yup.string().nullable().required(),
  restaurant_id: yup.string().nullable().required(),
});
