export type EventItem = {
    image: string,
    title: string,
    slug: string,
    location: string,
    date: string,
    time: string,
}

export  const events: EventItem[] = [
    {
        title: "React Summit US 2026",
        image: "/images/event1.png",
        slug: "react-summit-us-2026",
        location: "New York City, NY",
        date: "November 17, 2026",
        time: "9:00 AM EST",
    },
    {
        title: "React Advanced London 2026",
        image: "/images/event2.png",
        slug: "react-advanced-london-2026",
        location: "London, United Kingdom",
        date: "October 23, 2026",
        time: "9:00 AM BST",
    },
    {
        title: "JSNation US 2026",
        image: "/images/event3.png",
        slug: "jsnation-us-2026",
        location: "New York City, NY",
        date: "November 20, 2026",
        time: "9:00 AM EST",
    },
    {
        title: "TechCrunch Disrupt 2026",
        image: "/images/event4.png",
        slug: "techcrunch-disrupt-2026",
        location: "San Francisco, CA",
        date: "October 2026",
        time: "9:00 AM PT",
    },
    {
        title: "React Day Berlin 2026",
        image: "/images/event5.png",
        slug: "react-day-berlin-2026",
        location: "Berlin, Germany",
        date: "December 2026",
        time: "9:00 AM CET",
    },
    {
        title: "Open Source Summit Japan 2026",
        image: "/images/event6.png",
        slug: "open-source-summit-japan-2026",
        location: "Tokyo, Japan",
        date: "December 2026",
        time: "9:00 AM JST",
    },
];
