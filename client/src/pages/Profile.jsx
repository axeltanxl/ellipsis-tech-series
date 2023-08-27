import { Divider, Typography } from "@mui/material";
import Layout from "../components/Layout";
import Details from "../components/profile/Details";

const Profile = () => {
  const handleLogout = () => {
    localStorage.removeItem("jwt");
  };

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center my-10">
        <div className="xs:w-4/5 lg:w-3/5 h-4/5 bg-bg rounded-lg ">
          <div className="w-full h-full p-8 flex flex-col">
            <div className="flex flex-row justify-between items-center">
              <div className="xs:text-2xl md:text-3xl xl:text-4xl font-semibold mb-2">
                Profile Page
              </div>
              <button
                className="text-sm border-0 h-8 px-3 text-black bg-gray-100 hover:bg-red-100 rounded-lg "
                onClick={handleLogout}
              >
                Log out
              </button>
            </div>
            <div className="w-full h-full flex flex-col items-center">
              <Divider
                variant="middle"
                sx={{ bgcolor: "#000000", width: "100%" }}
              />
              <Details />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
