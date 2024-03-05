import AboutView from '../components/about/AboutView';
import Footer from '../components/common/footer/Footer';
import './pages.scss';

const About = () => {
  return (
    <div className="aboutpage page">
      <AboutView />
      <Footer />
    </div>
  );
};
export default About;
