import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import CoachesRefereesPage from "./pages/CoachesRefereesPage";
import ClubsPage from "./pages/ClubsPage";
import CompetetionsPage from "./pages/CompetetionsPage";
import EventsPage from "./pages/EventsPage";
import AccreciditationAffiliationPage from "./pages/AccreciditationAffiliationPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import "./style.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/coaches-referees",
          element: <CoachesRefereesPage />,
        },
        {
          path: "/clubs",
          element: <ClubsPage />,
        },
        {
          path: "/competitions",
          element: <CompetetionsPage />,
        },
        {
          path: "/events",
          element: <EventsPage />,
        },
        {
          path: "/accerciditation-affliation",
          element: <AccreciditationAffiliationPage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/contact-us",
          element: <ContactPage />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
