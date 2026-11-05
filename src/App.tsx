import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import TasksPage from './pages/TasksPage'
import AuctionPage from './pages/AuctionPage'
import LobbyPage from './pages/LobbyPage'
import ProfilePage from './pages/ProfilePage'
import DemoPage from './pages/DemoPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to="/tasks" replace />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/auction" element={<AuctionPage />} />
        <Route path="/lobby" element={<LobbyPage />} />
        <Route path="/me" element={<ProfilePage />} />
        <Route path="/demo" element={<DemoPage />} />
      </Route>
    </Routes>
  )
}
