import React, { useState } from "react";
import styles from "styles/ShoppingCart.module.css";
import SuggestedSearch from "./SuggestedSearch";
import SearchItem from "./SearchItem";

const ShoppingCart = () => {
  const popularSearchTerms = ["생일", "결혼", "환갑", "응원", "합격"];

  // 네이버 검색 api 호출
  const [searchData, setSearchData] = useState();
  const [bottom, setBottom] = useState(null);

  const searchCg = (e) => {
    // GetApi(e.target[0].value);
    e.preventDefault();
  };

  return (
    <div className={styles.CartWrap}>
      <article>
        <form
          className={styles.CartForm}
          onSubmit={(e) => {
            searchCg(e);
          }}
        >
          <input
            className={styles.Input}
            color="#000"
            type="text"
            placeholder="원하는 품목을 찾아보세요."
          />
          <button className={styles.Button} type="submit">
            검색
          </button>
        </form>
      </article>

      <ul className={styles.Ul}>
        {/* 배열에 넣어둔 카테고리 목록 노출 */}
        {popularSearchTerms.map((obj, idx) => {
          return (
            <SuggestedSearch
              key={idx}
              obj={obj}
              idx={idx}
              searchData={searchData}
              setSearchData={setSearchData}
              bottom={bottom}
            />
          );
        })}
      </ul>

      <div className={styles.ClickView}>
        {searchData &&
          searchData.map((obj, idx) => {
            return <SearchItem key={idx} obj={obj} idx={idx} />;
          })}
      </div>

      <div className={styles.Bottom} ref={setBottom}>
        바닥
      </div>
    </div>
  );
};

export default ShoppingCart;
