import { Typography } from "@mui/material";
import Layout from "../components/Layout";
import Details from "../components/profile/Details";

const Profile = () => {
    return (
        <Layout>
            <div className="flex flex-col">
                <Typography variant="h1" my="40px">Profile Page</Typography>
                <div className="bg-secondary rounded-lg">
                    <Details/>
                </div>
            </div>
        </Layout>
    )
}

export default Profile;
