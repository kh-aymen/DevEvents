import ExploreBtn from "@/components/ExploreBtn";
import EventCard from "@/components/EventCard";
import {events, type EventItem} from "@/lib/constants"

const Page = () => {
    return (
        <section>
            <h1 className='text-center'>The Hub for Every Dev <br/> Event You Can't Miss</h1>
            <p className='text-center mt-5'>Hackathons, Meetups, and Conference, All in One place</p>
            <ExploreBtn/>
            <div className='mt-20 space-y-7'>
                <h3>Featured Events</h3>
                <ul className='events list-none'>
                    {events.map((event: EventItem) => (
                        <li key={event.title}>
                            <EventCard image={event.image} title={event.title} slug={event.slug} date={event.date} time={event.time} location={event.location} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>

    )
}
export default Page
