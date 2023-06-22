const mapping: Record<string, string> = {
  feedbacks: 'feedback',
  'menu-items': 'menu_item',
  orders: 'order',
  'order-items': 'order_item',
  reservations: 'reservation',
  restaurants: 'restaurant',
  tables: 'table',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
