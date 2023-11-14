import styles from "styles/molecules/SearchInputBox.module.scss";
import React, { useRef, useState } from "react";
import axios from "axios";

import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Button from "component/atoms/Button";
import Input from "component/atoms/Input";

const SearchInputBox = () => {
  const router = useRouter();
  const [inputVisible, setInputVisible] = useState(false);
  const [searchInput, setSearchInput] = useState<string>("");

  // 인풋창 표시 상태를 변경하는 함수를 작성하세요./////////
  //
  const toggleInput = () => {
    setInputVisible(!inputVisible);
    if (!inputVisible) {
      setSearchInput("");
    }
  };

  const searchFormFN = () => {
    console.log("searchInput : ", searchInput);

    // axios.get("/api").then((res) => {
    //   console.log("res", res);
    //   let newValue = res.data.filter(
    //     (obj) => obj.NickName == searchInput.current.value
    //   );

    //   if (newValue[0]?.NickName == undefined) {
    //     return alert("등록되지 않은 유저입니다.");
    //   }
    //   router.push(`/wish/${newValue[0]?.UserID}`);
    //   toggleInput();
    //   searchInput.current.value = "";
    // });
  };

  return (
    <div className={styles.SearchInputBox}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          searchFormFN();
        }}
      >
        <div
          className={`${styles.SearchInput} ${inputVisible && styles.visible}`}
        >
          <Input
            value={searchInput}
            onChange={(res) => {
              setSearchInput(res);
            }}
            placeholder="친구 검색"
          />
        </div>
        <Button active={inputVisible && true} onClick={toggleInput}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Button>
      </form>
    </div>
  );
};

export default SearchInputBox;
