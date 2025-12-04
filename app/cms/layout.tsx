import { getUser } from '@/lib/auth'
import { AdminSidebar } from './components/AdminSidebar'
import './cms.css'

export const metadata = {
  title: 'Admin | Louie Bernstein',
  robots: 'noindex, nofollow',
}

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getUser()

  return (
    <html lang="en">
      <body>
        <div className="admin-layout">
          {user ? (
            <>
              <AdminSidebar user={user} />
              <main className="admin-main">
                <div className="admin-content">
                  {children}
                </div>
              </main>
            </>
          ) : (
            <main className="admin-main admin-main--full">
              {children}
            </main>
          )}
        </div>
      </body>
    </html>
  )
}

