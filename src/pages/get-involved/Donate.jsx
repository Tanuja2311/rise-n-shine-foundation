import DonateHero from '../../components/donate/DonateHero';
import DonationMethods from '../../components/donate/DonationMethods';
import DonationImpact from '../../components/donate/DonationImpact';
import DonateTrust from '../../components/donate/DonateTrust';

export default function Donate() {
  return (
    <>
      <DonateHero />
      <DonationMethods />
      <DonationImpact />
      <DonateTrust />
    </>
  );
}
