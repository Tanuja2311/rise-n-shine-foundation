import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

import Home from './pages/Home'
import About from './pages/about/About'
import OurTeam from './pages/about/OurTeam'
import Awards from './pages/about/Awards'
import Partners from './pages/about/Partners'
import Programs from './pages/programs/Programs'
import FoodRecovery from './pages/programs/FoodRecovery'
import SchoolComposting from './pages/programs/SchoolComposting'
import CommunityServices from './pages/programs/CommunityServices'
import Advocacy from './pages/programs/Advocacy'
import Impact from './pages/Impact'
import Events from './pages/Events'
import GetInvolved from './pages/get-involved/GetInvolved'
import Volunteer from './pages/get-involved/Volunteer'
import Donate from './pages/get-involved/Donate'
import SchoolChapter from './pages/get-involved/SchoolChapter'
import BecomePartner from './pages/get-involved/BecomePartner'
import Resources from './pages/Resources'
import NewsMedia from './pages/NewsMedia'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/about/our-team" element={<OurTeam />} />
        <Route path="/about/awards" element={<Awards />} />
        <Route path="/about/partners" element={<Partners />} />

        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/food-recovery" element={<FoodRecovery />} />
        <Route path="/programs/school-composting" element={<SchoolComposting />} />
        <Route path="/programs/community-services" element={<CommunityServices />} />
        <Route path="/programs/advocacy" element={<Advocacy />} />

        <Route path="/impact" element={<Impact />} />
        <Route path="/events" element={<Events />} />

        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/get-involved/volunteer" element={<Volunteer />} />
        <Route path="/get-involved/donate" element={<Donate />} />
        <Route path="/get-involved/school-chapter" element={<SchoolChapter />} />
        <Route path="/get-involved/become-a-partner" element={<BecomePartner />} />

        <Route path="/resources" element={<Resources />} />
        <Route path="/news-media" element={<NewsMedia />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
