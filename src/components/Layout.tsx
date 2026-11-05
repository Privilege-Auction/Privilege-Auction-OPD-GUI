import { NavLink, Outlet } from 'react-router-dom'
import styles from './Layout.module.css'

const links = [
  { to: '/tasks', label: 'Задачи' },
  { to: '/auction', label: 'Аукцион' },
  { to: '/lobby', label: 'Лобби' },
  { to: '/me', label: 'Профиль' },
  { to: '/demo', label: 'Демо' },
]

export default function Layout() {
  return (
    <div>
      <header className={styles.header}>
        <strong className={styles.logo}>Аукцион привилегий</strong>
        <nav className={styles.nav}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  )
}
