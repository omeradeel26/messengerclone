import { styled } from "@mui/material";
import { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";

const SearchContainer = styled("div")({
  position: "relative",
  width: "100%",
});

export default function SearchBarNav({searchMessages}) {
  const [style, setStyle] = useState({
    searchBar: {
      padding: "4px",
      borderRadius: "18px",
      backgroundColor: "#F3F3F5",
      border: "none",
      height: "30px",
      fontSize: "15px",
      paddingLeft: "33px",
      color: "#65676B",
      outline: "none",
      position: "relative",
      width: "87%",
      transform: "translateX(-100%)",
      left: "100%",
      fontFamily: "Segoe UI",
    },
    searchIcon: {
      position: "absolute",
      zIndex: 3,
      top: 8,
      left: 10,
      transform: "scale(0.85)",
      color: "#65676B",
    },
    backButton: {
      position: "absolute",
      display: "none",
    },
  });

  const changeStyle = () => {
    setStyle({
      searchBar: { ...style.searchBar, width: "79%", paddingLeft: "8px" },
      searchIcon: { ...style.searchIcon, display: "none" },
      backButton: { ...style.backButton, display: "block" },
    });
  };

  const returnStyle = () => {
    setStyle({
      searchBar: { ...style.searchBar, width: "87%", paddingLeft: "33px" },
      searchIcon: { ...style.searchIcon, display: "block" },
      backButton: { ...style.backButton, display: "none" },
    });
  };

  return (
    <SearchContainer>
      <SearchIcon sx={style.searchIcon} />
      <IconButton sx={style.backButton} onClick={returnStyle}>
        <ArrowBackIcon />
      </IconButton>
      <input
        style={style.searchBar}
        placeholder="Search Messenger"
        onFocus={changeStyle}
        onBlur={returnStyle}
        onChange={searchMessages}
      />
    </SearchContainer>
  );
}
