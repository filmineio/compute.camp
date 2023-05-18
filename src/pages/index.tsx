import { ReactElement } from 'react';
import Landing from 'components/Pages/Landing/Landing';
import Footer from '../components/Common/Footer/Footer';

export default function LandingRoute(): ReactElement {
  return (
    <>
      <Landing />
      <Footer />
    </>
  );
}
