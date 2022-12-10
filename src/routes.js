import Prducts from './pages/Products/Products.jsx'
import Home from './pages/Home/Home.jsx'
import Creators from './pages/Creators/Creators.jsx'
import MainProduct from './Components/MainProduct/MainProduct.jsx'

let routes = [
    { path: '/', element: <Home /> },
    { path: '/creators', element: <Creators /> },
    { path: '/products', element: <Prducts /> },
    { path: '/products/:productId', element: <MainProduct /> }
]

export default routes