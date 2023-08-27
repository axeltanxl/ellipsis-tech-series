import Layout from "../components/Layout";
import HomeCards from "../components/HomeCards";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="flex justify-center items-center w-full h-[28vw] bg-gradient-to-l from-indigo-300 to-white ">
        <div className="flex justify-center items-center pb-24 mt-16 xs:flex-col sm:flex-row xs:mx-8 sm:mx-10 md:mx-16">
          <div className="flex flex-col justify-center">
            <div className="xs:hidden sm:flex items-center mx-4 mt-10 sm:ml-8 md:ml-12 lg:ml-16 xl:ml-20 sm:-mr-10 lg:-mr-16 font-bold sm:text-2xl lg:text-5xl xl:text-6xl worksans w-[90%]">
              Take charge of your kidney health.
            </div>
            <div className="m-4 sm:ml-8 md:ml-12 lg:ml-16 xl:ml-20 sm:-mr-10 lg:-mr-16 w-4/5">
              To live your life to the fullest, we're continuing to find ways to
              help understand and manage kidney health
            </div>
            <div className="flex flex-row m-4 sm:ml-8 md:ml-12 lg:ml-16 xl:ml-20 sm:-mr-10 lg:-mr-16 w-4/5">
              <button
                className="px-8 py-2 mr-6 rounded-lg bg-light_green hover:bg-green-200 text-lg border-0"
                onClick={() => navigate("/login")}
              >
                Get Started
              </button>
              {/* <button className="px-6 py-1 rounded-lg bg-light_orange hover:bg-orange-200 text-lg">
                Learn More
              </button> */}
            </div>
          </div>
          <div className="flex justify-center items-center sm:mt-10">
            <div className="flex justify-start xs:w-3/4 sm:w-1/2 h-full mt-10 pb-10 bg-light_orange rounded-2xl">
              <img
                src="./src/assets/woman_eating.png"
                alt="Woman eating healthy food"
                className="object-cover object-left-top w-full h-full -mt-10 -ml-10 rounded-2xl z-10"
              />
            </div>
          </div>
          <div className="sm:hidden flex justify-center text-center m-4 ml-4 font-bold text-2xl worksans">
            Take charge of your kidney health.
          </div>
        </div>

        {/* <div className="flex justify-center items-center xs:flex-col sm:flex-row xs:my-12 sm:my-16 md:my-20 lg:my-24 xl:my-28 xs:mx-8 sm:mx-10 md:mx-16">
          <div className="flex justify-center items-center sm:mt-10">
            <div className="flex justify-start xs:w-3/4 sm:w-1/2 h-full mt-10 pb-10 bg-light_purple rounded-2xl">
              <img
                src="./src/assets/oatmeal.png"
                alt="Oatmeal"
                className="object-cover object-left-top w-full h-full -mt-10 -ml-10 rounded-2xl z-10"
              />
            </div>
          </div>
          <div className="items-center xs:m-4 sm:mx-4 xs:ml-4 sm:mr-8 md:mr-12 lg:mr-16 xl:mr-20 sm:-ml-10 lg:-ml-16 sm:my-0 sm:w-4/5 lg:w-1/2 xs:text-2xl lg:text-4xl xl:text-5xl flex justify-center xs:text-center sm:text-start w-3/4 font-bold">
            Log foods and know their sodium levels.
          </div>
        </div> */}

        {/* <div className="flex justify-center items-center xs:flex-col sm:flex-row xs:my-12 sm:my-16 md:my-20 lg:my-24 xl:my-28 xs:mx-8 sm:mx-10 md:mx-16">
        <div className="xs:hidden sm:flex items-center mx-4 sm:ml-8 md:ml-12 lg:ml-16 xl:ml-20 sm:-mr-10 lg:-mr-16 sm:w-4/5 lg:w-1/2 font-bold sm:text-2xl lg:text-4xl xl:text-5xl">
          Find lower-sodium restaurants nearby.
        </div>
        <div className="flex justify-center items-center sm:mt-10">
          <div className="flex justify-start xs:w-3/4 sm:w-1/2 h-full mt-10 pb-10 bg-light_green rounded-2xl">
            <img
              src="./src/assets/restaurants.png"
              alt="Restaurants"
              className="object-cover object-left-top w-full h-full -mt-10 -ml-10 rounded-2xl z-10"
            />
          </div>
        </div>
        <div className="sm:hidden flex justify-center text-center m-4 ml-4 font-bold text-2xl">
          Find lower-sodium restaurants nearby.
        </div>
      </div> */}
      </div>

      <div className="flex flex-col justify-center items-center mt-8">
        <div className=" xs:text-2xl lg:text-4xl xl:text-5xl xs:text-center sm:text-start font-bold">
          The tools for your health management
        </div>
        {/* <div className="flex flex-row text-base">
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
        </div> */}
        <HomeCards />
      </div>

      {/* <div className="flex flex-col justify-center items-center">
        <div className=" xs:text-2xl lg:text-4xl xl:text-5xl xs:text-center sm:text-start font-bold">
          Stories from users.
        </div>
        <div className="flex flex-row text-base">
          <div>hello</div>
          <div>hello</div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className=" xs:text-2xl lg:text-4xl xl:text-5xl xs:text-center sm:text-start font-bold">
          CTA
        </div>
        <div>hello</div>
      </div> */}
      {/* </div> */}
    </Layout>
  );
};

export default HomePage;
