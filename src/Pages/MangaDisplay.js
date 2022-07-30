import { useEffect, useState } from "react";
import MeetupList from "../Components/meetups/MeetupList";
import { Dummy_Data } from "../Data/DummyData";

const MangaDisplay = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPages, setLoadedPages] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    let i = 1;
    const pages = [];
    while (i <= 27) {
      const key = i;
      const entry = `https://cdn.black-clover.org/file/sugois/solo-leveling/Chapter-1/${i}.jpg`;
      ++i;
      console.log(entry);
      const page = {
        id: key,
        image: entry,
      };
      pages.push(page);
    }

    setIsLoading(false);
    setLoadedPages(pages);
  }, []);

  return (
    <section>
      <h1>You are now reading Solo Leveling</h1>
      <MeetupList meetups={loadedPages} />
    </section>
  );
};

export default MangaDisplay;
