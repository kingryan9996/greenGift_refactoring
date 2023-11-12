import React, { useRef, useEffect } from "react";
import axios from "axios";
import styles from "styles/SuggestedSearch.module.css";

const SuggestedSearch = ({ obj, idx, searchData, setSearchData, bottom }) => {
  // 네이버 검색 api 호출
  const keyWo = useRef();
  const numRef = useRef(10);
  const botObs = useRef(null);
  const a = useRef(true);

  const GetApi = (obj) => {
    keyWo.current = obj;

    axios
      // .get(
      //   `https://port-0-node-greengift-nx562olfqkxd9g.sel3.cloudtype.app/search/shop?query=${obj}&display=${numRef.current}`
      // )
      .get(`search/shop?query=${obj}&display=${numRef.current}`)
      .then((res) => {
        // console.log(res.data.items)
        setSearchData(res.data.items);
        numRef.current += 10;
      });
  };

  const dragApi = (obj) => {
    //.get(`search/shop?query=${obj}&display=${numRef.current}`)
    // axios
    //   // .get(
    //   //   `http://127.0.0.1:4000/search/shop?query=${obj}&display=${numRef.current}`
    //   // )
    //   .get(
    //     `https://port-0-node-greengift-nx562olfqkxd9g.sel3.cloudtype.app/search/shop?query=${obj}&display=${numRef.current}`
    //   )
    // .then((res) => {
    //   // console.log(res.data.items)
    //   setSearchData(res.data.items);
    //   numRef.current += 10;
    //   a.current = true; //3. 2번 완료후 다시 값을 받아온 뒤에 a.current를 true로 바꿔서 드래그 함수를 실행하게 만들어라
    // });
  };

  useEffect(() => {
    if (searchData) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && a.current) {
            //1. a의 현재값이 트루이면 실행하라
            dragApi(keyWo.current);
            a.current = false; // 2. dragApi를 실행하면 false로 바꿔라
          }
        },
        { threshold: 1, rootMargin: "50px" }
      );
      botObs.current = observer;

      const observer2 = botObs.current;
      observer2.observe(bottom);
    }
  }, [searchData]);

  return (
    <li
      className={styles.SearchList}
      onClick={() => {
        GetApi(obj);
      }}
      key={"categoryList" + idx}
    >
      <figure className={styles.ImgWrap}>
        <img className={styles.Img} src={`/img/${obj}.jpg`} />
        <figcaption>{obj}</figcaption>
      </figure>
    </li>
  );
};

export default SuggestedSearch;
