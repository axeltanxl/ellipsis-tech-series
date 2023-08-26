import { Divider, Typography } from "@mui/material";
import Layout from "../components/Layout";
import NameAvatar from "../components/profile/NameAvatar"
import ProfileForm from "../components/profile/profileForm";


const Profile = () => {


  return (
        <Layout>
            <div className="w-full h-screen mt-4 bg-[url('/images/bgprofile.webp')] rounded-lg bg-no-repeat bg-cover flex justify-center items-center">
                <div className="w-3/5 h-4/5 bg-bg rounded-lg ">
                    <Divider sx={{bgcolor : "primary.main" , width : "100%", height: "20px" }} className="rounded"/>
                    <div className="w-full h-full p-8 flex flex-col">
                        <Typography variant="h1">My Profile</Typography>
                        <div className="w-full h-full flex flex-col items-center">
                            <div className="w-[120px] h-[120px] flex justify-center items-center m-6">
                                <NameAvatar name="John Doe" scale={3} m="0"/>
                            </div>
                            <Divider variant="middle" sx={{bgcolor : "#000000" , width : "100%"}}/>
                            <ProfileForm/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
      );
};

export default Profile;