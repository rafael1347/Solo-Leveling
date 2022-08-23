import { useEffect, useState } from "react";
import MeetupList from "../Components/meetups/MeetupList";
import { Dummy_Data } from "../Data/DummyData";
import "../Components/layout/Layout.css";
import { useLocation } from "react-router-dom";
import { chapter } from "../Pages/AllMeetups";

const MangaDisplay = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPages, setLoadedPages] = useState([]);
  const location = useLocation();
  console.log(location.state ? location.state.chapter : 1);
  const [count, setCount] = useState(
    location.state ? location.state.chapter : 1
  );
  const results = Dummy_Data.find((pageNum) => pageNum.id === count.toString());
  console.log(results);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    setIsLoading(true);
    let i = 1;
    const pages = [];
    while (i <= results.pageLimit) {
      const key = i;
      if (results.id == 168 || results.id < 118) {
        const entry = `https://cdn.black-clover.org/file/sugois/solo-leveling/Chapter-${results.id}/${i}.jpg`;
        ++i;
        const page = {
          id: key,
          image: entry,
        };
        pages.push(page);
      } else if (results.id > 117 && results.id < 150) {
        const entry = `https://cdn.black-clover.org/file/sugois/solo-leveling/Vol.2-Chapter-${results.id}/${i}.jpg`;
        ++i;
        const page = {
          id: key,
          image: entry,
        };
        pages.push(page);
      } else if (results.id > 149 && results.id < 165) {
        if (i < 10 && results.id != 164) {
          const entry = `https://cdn.black-clover.org/file/sugois/solo-leveling/Chapter-${results.id}/00${i}.jpg`;
          ++i;
          const page = {
            id: key,
            image: entry,
          };
          pages.push(page);
          ///put else for chapter 165
        } else if (i > 9 && results.id != 164) {
          const entry = `https://cdn.black-clover.org/file/sugois/solo-leveling/Chapter-${results.id}/0${i}.jpg`;
          ++i;
          const page = {
            id: key,
            image: entry,
          };
          pages.push(page);
        }
      } else if (results.id > 164) {
        if (i < 10) {
          const entry = `https://cdn.black-clover.org/file/sugois/solo-leveling/Chapter-${results.id}/0${i}.jpg`;
          ++i;
          const page = {
            id: key,
            image: entry,
          };
          pages.push(page);
        } else {
          const entry = `https://cdn.black-clover.org/file/sugois/solo-leveling/Chapter-${results.id}/${i}.jpg`;
          ++i;
          const page = {
            id: key,
            image: entry,
          };
          pages.push(page);
        }
      } else {
        const entry = `https://cdn.black-clover.org/file/sugois/solo-leveling/Chapter-${results.id}/0${i}.jpg`;
        ++i;
        const page = {
          id: key,
          image: entry,
        };
        pages.push(page);
      }
    }
    //chapter 144 not working till 149
    //infinite loop at 152
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
    if (count !== 1) {
      setCount(count - 1);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }
  return (
    <section>
      <h2 className="h2">You are reading Chapter {count}</h2>
      <br />
      <MeetupList meetups={loadedPages} />
      <button className="btn-Last" onClick={onLast}>
        Last Chapter
      </button>
      <button className="btn-Next" onClick={onNext}>
        Next Chapter
      </button>
    </section>
  );
};

export default MangaDisplay;
