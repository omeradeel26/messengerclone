import { styled } from "@mui/material";
import { useData } from "../../context/DataContext";

function Message({ text, author, date }) {
  const { getUser } = useData();
  const user = getUser();

  const styles = {
    container: {
      marginBottom: "10px",
      display: "flex",
      flexDirection: "column",
      alignItems: user.name == author ? "flex-end" : "flex-start",
    },
    messageContainer: {
      borderRadius: "13px",
      padding: "6px 10px",
      backgroundColor: user.name == author ? "#0084FF" : "#E4E6EB",
      color: user.name == author ? "white" : "black",
      fontFamily: "Calibri",
    },
  };

  return (
    <div style={styles.container} title={date}>
      {author !== user.name ? author : ""}
      <div style={styles.messageContainer}>{text}</div>
    </div>
  );
}

export default Message;
