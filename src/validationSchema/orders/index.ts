import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  status: yup.string().required(),
  wait_staff_id: yup.string().nullable().required(),
  table_id: yup.string().nullable().required(),
});
