import IndexPage from './pages/IndexPage/IndexPage'
import GalleryPage from './pages/GalleryPage/GalleryPage'
import MenuPage from './pages/MenuPage/MenuPage'
import ShoppingBagPage from './pages/ShoppingBagPage/ShoppingBagPage'
import CheckOutPage from './pages/CheckOutPage/CheckOutPage'

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
    path: '/check-out',
    exact: true,
    component: CheckOutPage
  }
];

export default routes;