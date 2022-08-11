import { useEffect, useState } from "react";
import MeetupList from "../Components/meetups/MeetupList";
import { Dummy_Data } from "../Data/DummyData";
import "../Components/layout/Layout.css";

const MangaDisplay = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPages, setLoadedPages] = useState([]);
  const [count, setCount] = useState(1);
  const results = Dummy_Data.find((pageNum) => pageNum.id === count.toString());
  console.log(results);

  useEffect(() => {
    setIsLoading(true);
    let i = 1;
    const pages = [];
    while (i <= results.pageLimit) {
      const key = i;
      const entry = `https://cdn.black-clover.org/file/sugois/solo-leveling/Chapter-${results.id}/${i}.jpg`;
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
  }, [results]);

  function onNext() {
    setCount(count + 1);
    console.log(count);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  function onLast() {
    setCount(count - 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <section>
      <h1>You are now reading Solo Leveling chapter {results.id}</h1>
      <button className="btn-Last" onClick={onLast}>
        Last Chapter
      </button>
      <button className="btn-Next" onClick={onNext}>
        Next Chapter
      </button>
      <MeetupList meetups={loadedPages} />
    </section>
  );
};

export default MangaDisplay;
