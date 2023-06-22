import * as yup from 'yup';

export const orderItemValidationSchema = yup.object().shape({
  special_request: yup.string(),
  order_id: yup.string().nullable().required(),
  menu_item_id: yup.string().nullable().required(),
});
