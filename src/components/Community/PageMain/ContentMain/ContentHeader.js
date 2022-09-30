import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useCallback } from "react";
import { debounceFunction } from "../../../../utils/utils";
import { Flex } from "../../../@commons";
import * as Styled from "./Content.style";

export const ContentHeader = ({ setSearchValue }) => {
  const updateSearchValue = debounceFunction((target) => {
    setSearchValue((prev) => (prev = target.value));
  }, 500);

  const onChangeSearchEvent = useCallback(
    ({ target }) => {
      updateSearchValue(target);
    },
    [updateSearchValue]
  );

  return (
    <Styled.Header>
      <Flex flexDirection="row" justifyContent="space-around">
        <Link href="/community">
          <Styled.P>커뮤니티</Styled.P>
        </Link>
        <Link href="/ranking">
          <Styled.P>랭킹</Styled.P>
        </Link>
      </Flex>
      <Flex flexDirection="row" justifyContent="center">
        <Styled.SearchContainer>
          <FontAwesomeIcon
            icon={faSearch}
            size="1x"
            style={{
              position: "relative",
              top: 1,
              left: 35,
              color: "black",
              zIndex: 67,
              cursor: "none",
            }}
          />
          <Styled.SearchInput
            type="text"
            placeholder="   검색어를 입력하세요"
            onChange={onChangeSearchEvent}
          />
        </Styled.SearchContainer>
      </Flex>
    </Styled.Header>
  );
};
