import VolunteerHero from '../../components/volunteer/VolunteerHero';
import HowItWorks from '../../components/volunteer/HowItWorks';
import PVSASection from '../../components/volunteer/PVSASection';
import RegistrationCards from '../../components/volunteer/RegistrationCards';
import HoursApproval from '../../components/volunteer/HoursApproval';

export default function Volunteer() {
  return (
    <>
      <VolunteerHero />
      <HowItWorks />
      <PVSASection />
      <RegistrationCards />
      <HoursApproval />
    </>
  );
}
