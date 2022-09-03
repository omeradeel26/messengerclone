import { Icon, styled } from "@mui/material";
import { useState } from "react";
import { useData } from "../../context/DataContext";

import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";

export default function SearchBar() {
  const { searchUsers } = useData();
  const style = {
    searchBar: {
      padding: "4px 15px",
      borderRadius: "13px",
      backgroundColor: "#F3F3F5",
      border: "none",
      height: "30px",
      fontSize: "15px",
      color: "#65676B",
      outline: "none",
      width: "75%",
      fontFamily: "Segoe UI",
    },
    searchIcon: {
      zIndex: 3,
      transform: "scale(0.85)",
      color: "#65676B",
    },
    searchContainer: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
    },
  };

  const submitForm = (e) => {
    e.preventDefault();
    searchUsers(document.getElementById("searchUser").value);
    document.getElementById("searchUser").value = '';
  };

  return (
    <form onSubmit={submitForm} style={style.searchContainer}>
      <IconButton type="submit">
        <SearchIcon sx={style.searchIcon} />
      </IconButton>
      <input
        style={style.searchBar}
        placeholder="Enter Username..."
        id="searchUser"
      />
    </form>
  );
}
