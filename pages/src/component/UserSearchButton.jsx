import React, { useRef, useState } from "react";
import styles from "styles/id.module.css";

import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const UserSearchButton = () => {
  const [inputVisible, setInputVisible] = useState(false);
  const searchInput = useRef();

  // 인풋창 표시 상태를 변경하는 함수를 작성하세요./////////
  //
  const toggleInput = () => {
    setInputVisible(!inputVisible);
  };

  const searchFormFN = (e) => {
    e.preventDefault();

    axios.get("/api").then((res) => {
      let newValue = res.data.filter(
        (obj) => obj.NickName == searchInput.current.value
      );

      if (newValue[0]?.NickName == undefined) {
        return alert("등록되지 않은 유저입니다.");
      }
      router.push(`/GiftTree/${newValue[0]?.UserID}`);
      toggleInput();
      searchInput.current.value = "";
    });
  };

  return (
    <div className={styles.searchWrap}>
      <form
        onSubmit={(e) => {
          searchFormFN(e);
        }}
        className={styles.searchForm}
      >
        <motion.input
          ref={searchInput}
          className={`${styles.searchInput} ${
            inputVisible ? styles.showInput : styles.hideInput
          }`}
          placeholder="친구 검색"
          // framerMotion Setting //
          initial={{ opacity: 0, x: "20px" }}
          animate={{
            opacity: inputVisible ? 1 : 0,
            x: inputVisible ? "0px" : "10px",
          }}
          transition={{ duration: 0.2 }}
          // framerMotion Setting //
        />

        <button
          onClick={toggleInput}
          className={styles.buttonStyle}
          type="button"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} style={{ width: "25px" }} />
        </button>
      </form>
    </div>
  );
};

export default UserSearchButton;
