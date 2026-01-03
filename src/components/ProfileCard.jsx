import profileImg from "../assets/images/RizanProfile.JPG";

function ProfileCard() {
  return (
<div className="
  group
  w-[280px] h-[380px] md:w-[320px] md:h-[420px]
  rounded-2xl bg-white overflow-hidden
  shadow-lg
  transition-shadow duration-500
  hover:shadow-2xl
">
        <img
        src={profileImg}
        alt="Rizan Mohammed Ismail"
        className="
          w-full h-full object-cover
          scale-110
          transition-transform duration-500 ease-out
          group-hover:scale-115
        "
      />
    </div>
  );
}

export default ProfileCard;
