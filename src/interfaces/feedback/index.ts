import { UserInterface } from 'interfaces/user';
import { RestaurantInterface } from 'interfaces/restaurant';
import { GetQueryInterface } from 'interfaces';

export interface FeedbackInterface {
  id?: string;
  customer_id: string;
  restaurant_id: string;
  comment: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  restaurant?: RestaurantInterface;
  _count?: {};
}

export interface FeedbackGetQueryInterface extends GetQueryInterface {
  id?: string;
  customer_id?: string;
  restaurant_id?: string;
  comment?: string;
}
