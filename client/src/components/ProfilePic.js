


export default function ProfilePicture({ imageSrc, width, height}){
    return (
        <img
          src={imageSrc}
          alt="profile-pic"
          style={{
            borderRadius: "1000px",
          }}
          width={width}
          height={height}
        />
    );
  };