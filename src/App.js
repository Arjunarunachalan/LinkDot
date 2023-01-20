
import './App.css';
import {Button,Stack} from 'react-bootstrap';
import MainHead from './components/MainHead';
import Searchbar from './components/Searchbar/Searchbar';
import LeftSection from './Leftsection/LeftSection';
import Subhead from './components/Subhead/Subhead';
import ProfileSection from './components/ProfileSection/ProfileSection';
import RightCard from './components/RightCard/RightCard';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <MainHead />
    <Searchbar />
    <LeftSection />
    <Subhead />
    <ProfileSection />
    <RightCard />
    <Footer />
  
   
    </>
  );
}

export default App;
