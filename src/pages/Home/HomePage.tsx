import FriendsSection from "../../Components/Friends/FriendsSection";
import HomeHeader from "../../Components/Header/HomeHeader";
import ProfilePhoto from "../../Components/Profile/ProfilePhoto";
import EditProfile from "../../Components/EditProfile/EditProfile";
import ProfileDetails from "../../Components/ProfileDetails/ProfileDetails";
import CommunitySection from "../../Components/Community/CommunitySection";
import SearchBar from "../../Components/Home/SearchBar";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <SearchBar />

      <div className="content">
        <div className="profile">
          <ProfilePhoto />
          <EditProfile />
        </div>

        <ProfileDetails />

        <div className="social">
          <FriendsSection />
          <CommunitySection />
        </div>
      </div>
    </>
  );
};

export default Home;
