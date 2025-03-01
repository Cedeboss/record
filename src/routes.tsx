import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminLayout from './components/layouts/admin/AdminLayout'
import HomeAdmin from './pages/admin/dashboard/HomeAdmin'
import Articles from './pages/admin/article/Articles'
import Messages from './pages/admin/Messages/Messages'
import UserListPage from './pages/admin/users/UserList'
import TodoListPage from './pages/admin/todos/TodoList'
import Auth from './pages/admin/auth/Auth'
import NotFound from './pages/public/NotFound'
import PublicLayout from './components/layouts/public/PublicLayout'
import HomePage from './pages/public/Home'
import Studio from './pages/public/Studio'
import Service from './pages/public/Service'
import Achievement from './pages/public/Achievement'
import LoginPage from './pages/public/auth/Login'
import RegisterPage from './pages/public/auth/Register'
import Contact from './pages/public/Contact'

export default function RoutesApp() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<AdminLayout />}>
            <Route
              path='/admin'
              element={
                // <RequireAuth>
                <HomeAdmin />
                // {/* </RequireAuth> */}
              }
            />
            <Route
              path='/articles'
              element={
                // <RequireAuth>
                <Articles />
                // {/* </RequireAuth> */}
              }
            />
            <Route
              path='/messages'
              element={
                // <RequireAuth>
                <Messages />
                // {/* </RequireAuth> */}
              }
            />
            <Route
              path='/utilisateurs'
              element={
                // <RequireAuth>
                <UserListPage />
                // {/* </RequireAuth> */}
              }
            />
            <Route
              path='/taches'
              element={
                // <RequireAuth>
                <TodoListPage />
                // {/* </RequireAuth> */}
              }
            />
          </Route>
          <Route path='/admin-connexion' element={<Auth />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<PublicLayout />}>
            <Route index element={<HomePage />} />
            <Route path='/studio' element={<Studio />} />
            <Route path='/nos-prestations' element={<Service />} />
            <Route path='/nos-realisations' element={<Achievement />} />
            <Route path='/connexion' element={<LoginPage />} />
            <Route path='/enregistrement' element={<RegisterPage />} />
            <Route path='/contact' element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}
