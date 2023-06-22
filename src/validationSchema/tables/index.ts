import * as yup from 'yup';

export const tableValidationSchema = yup.object().shape({
  status: yup.string().required(),
  restaurant_id: yup.string().nullable().required(),
});
