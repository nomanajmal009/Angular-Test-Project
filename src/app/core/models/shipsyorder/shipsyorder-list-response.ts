import { ShipsyOrder } from './shipsyorder';

export interface ShipsyOrderListResponse {
  status: boolean,
  message: String,
  data: Array<ShipsyOrder>;
}
