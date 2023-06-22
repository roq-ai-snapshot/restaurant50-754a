import * as yup from 'yup';

export const reservationValidationSchema = yup.object().shape({
  date_time: yup.date().required(),
  customer_id: yup.string().nullable().required(),
  table_id: yup.string().nullable().required(),
});
