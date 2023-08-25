import FriendsSection from "../../Components/Friends/FriendsSection";
import HomeHeader from "../../Components/Header/HomeHeader";
import ProfilePhoto from "../../Components/Profile/ProfilePhoto";
import EditProfile from "../../Components/EditProfile/EditProfile";
import ProfileDetails from "../../Components/ProfileDetails/ProfileDetails";
import CommunitySection from "../../Components/Community/CommunitySection";
import SearchBar from "../../Components/Home/SearchBar";

import classes from "./HomePage.module.css";
import api from "../../service/api";
import {useEffect} from "react";

const Home = () => {

  async function getProfileById(id: number) {
    const profile = await api.get(`/profiles/${id}`);
    console.log(profile.data);
    return profile.data;
  }

  useEffect(() => {getProfileById(2)}, [])

  return (
    <>
      <HomeHeader />
      <SearchBar />

      <div className={classes.content}>
        <div className={classes.profile}>
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
