import IndexPage from './pages/IndexPage/IndexPage'
import GalleryPage from './pages/GalleryPage/GalleryPage'
import MenuPage from './pages/MenuPage/MenuPage'
import ShoppingBagPage from './pages/ShoppingBagPage/ShoppingBagPage'
import OrderConfirmation from './pages/OrderConfirmation/OrderConfirmation'

const routes = [
  {
    path: '/',
    exact: true,
    component: IndexPage
  },
  {
    path: '/menu',
    exact: true,
    component: MenuPage
  },
  {
    path: '/gallery',
    exact: true,
    component: GalleryPage
  },
  {
    path: '/shopping-bag',
    exact: true,
    component: ShoppingBagPage
  },
  {
    path: '/order-confirmed',
    exact: true,
    component: OrderConfirmation
  }
];

export default routes;