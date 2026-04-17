import EventsHero from '../components/events/EventsHero';
import UpcomingEvents from '../components/events/UpcomingEvents';
import PastEvents from '../components/events/PastEvents';

export default function Events() {
  return (
    <>
      <EventsHero />
      <UpcomingEvents />
      <PastEvents />
    </>
  );
}
