import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Product } from './pages/ProductPage'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
      </Route>
    </Routes>
  )
}