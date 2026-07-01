import type { RouteRecord } from 'vite-react-ssg'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Work from './pages/Work'
import WorkDetail from './pages/WorkDetail'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Privacy from './pages/Privacy'
import Styleguide from './pages/Styleguide'
import NotFound from './pages/NotFound'

// Every known route is prerendered to static HTML (see vite.config ssgOptions).
// The dynamic /work/:slug uses getStaticPaths; unknown paths fall back to 404.html.
export const routes: RouteRecord[] = [
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: 'work', Component: Work },
      {
        path: 'work/:slug',
        Component: WorkDetail,
        getStaticPaths: () => ['/work/sample-academy'],
      },
      { path: 'services', Component: Services },
      { path: 'about', Component: About },
      { path: 'contact', Component: Contact },
      { path: 'blog', Component: Blog },
      { path: 'privacy', Component: Privacy },
      // Hidden internal QA surface: noindex (Head) + blocked in robots.txt.
      { path: 'styleguide', Component: Styleguide },
      { path: '*', Component: NotFound },
    ],
  },
]
