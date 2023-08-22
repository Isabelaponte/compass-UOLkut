import FriendsSection from "../../components/Friends/FriendsSection";
import HomeHeader from "../../components/Header/HomeHeader";
import ProfilePhoto from "../../components/Profile/ProfilePhoto";
import EditProfile from "../../components/EditProfile/EditProfile";
import ProfileDetails from "../../components/ProfileDetails/ProfileDetails";
import CommunitySection from "../../components/Community/CommunitySection";
import SearchBar from "../../components/Home/SearchBar";

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
