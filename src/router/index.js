import { createRouter, createWebHashHistory } from 'vue-router'
import Payment from '../views/Payment.vue'
import Events from '../views/Events.vue'
import EventDetail from '../views/EventDetail.vue'
import SeatPlan from '../views/SeatPlan.vue'

const routes = [
  {
    path: '/',
    name: 'Events',
    component: Events
  },

  {
    path: '/event/:id',
    name: "EventDetail",
    component: EventDetail,
  },
  {
    path: '/payment',
    name: 'Payment',
    component: Payment,

  },
  {
    path: '/event/:eventId/SeatPlan/:eventCategoryId',
    name: 'SeatPlan',
    component: SeatPlan
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
