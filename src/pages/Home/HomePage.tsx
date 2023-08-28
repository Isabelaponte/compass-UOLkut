import FriendsSection from "../../Components/Friends/FriendsSection";
import HomeHeader from "../../Components/Header/HomeHeader";
import ProfilePhoto from "../../Components/Profile/ProfilePhoto";
import EditProfile from "../../Components/EditProfile/EditProfile";
import ProfileDetails from "../../Components/ProfileDetails/ProfileDetails";
import CommunitySection from "../../Components/Community/CommunitySection";
import SearchBar from "../../Components/Home/SearchBar";

import classes from "./HomePage.module.css";
import api from "../../service/api";
import { useEffect, useState } from "react";

import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

const Home = () => {

  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userBithDate, setUserBithDate] = useState("");
  const [userCountry, setUserCountry] = useState("");
  const [userCity, setUserCity] = useState("");
  const [userRelationship, setUserRelationship] = useState("");
  const [userProfession, setUserProfession] = useState("");

  async function getProfileById(id: number) {
    const profile = await api.get(`/${id}`);

    const email = profile.data.email;
    const name = profile.data.name;
    const birthDate = profile.data.birth_date;
    const country = profile.data.country;
    const city = profile.data.city;
    const relationship_status = profile.data.relationship_status;
    const profession = profile.data.profession;

    setUserEmail(`${email}`);
    setUserName(`${name}`);
    setUserBithDate(`${birthDate}`);
    setUserCountry(`${country}`);
    setUserCity(`${city}`);
    setUserRelationship(`${relationship_status}`);
    setUserProfession(`${profession}`);

    return profile.data;
  }

  async function getProfile(email: string) {
    const profile = await api.get(`?email=${email}`);

    if (profile.data.length > 1) {
      console.log("error: Não foi possível conectar com a conta!");
      //realizar LOGOUT
    }

    const profileId = profile.data[0].id;

    const profileData = await getProfileById(profileId);
    return profileData;

  }

  useEffect(() => {
    const token = Cookies.get("auth_token");
    if (token) {
      const decodedToken = jwtDecode(token);
      getProfile(decodedToken.email);
    }
  }, []);

  return (
    <>
      <HomeHeader />
      <SearchBar />

      <div className={classes.content}>
        <div className={classes.profile}>
          <ProfilePhoto name={userName} country={userCountry} relationship={userRelationship} />
          <EditProfile />
        </div>

        <ProfileDetails
          email={userEmail}
          name={userName}
          birth_date={userBithDate}
          country={userCountry}
          city={userCity}
          relationship={userRelationship}
          profession={userProfession}
        />

        <div className="social">
          <FriendsSection />
          <CommunitySection />
        </div>
      </div>
    </>
  );
};

export default Home;
