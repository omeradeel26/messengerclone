


export default function ProfilePicture({ imageSrc }){
    return (
        <img
          src={imageSrc}
          alt="profile-pic"
          style={{
            borderRadius: "1000px",
          }}
          width="30px"
          height="30px"
        />
    );
  };