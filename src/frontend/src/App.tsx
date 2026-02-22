import { RouterProvider, createRouter, createRootRoute, createRoute } from '@tanstack/react-router';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import TechnologyPage from './pages/TechnologyPage';
import FeaturesPage from './pages/FeaturesPage';
import ContactPage from './pages/ContactPage';

// Create root route
const rootRoute = createRootRoute({
  component: () => <RouterProvider router={router} />,
});

// Create individual routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: LandingPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});

const technologyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/technology',
  component: TechnologyPage,
});

const featuresRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/features',
  component: FeaturesPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
});

// Create route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  technologyRoute,
  featuresRoute,
  contactRoute,
]);

// Create router instance
const router = createRouter({ routeTree });

// Register router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
