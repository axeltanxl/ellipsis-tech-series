import { Home } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const HomeCards = () => {
  const navigate = useNavigate();

  const posts = [
    {
      title: "Keep Track of Food and Their Sodium and Sugar Content",
      // desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people what they did for their anxiety, and some",
      img: "https://blog.fitbit.com/wp-content/uploads/2017/06/0530_7ReasonsFoodLogging_Blog_Hero.jpg",
      // authorLogo: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      // authorName: "Sidi dev",
      // date: "Jan 4 2022",
      // href: "javascript:void(0)",
    },
    {
      title: "Search Nearby Restaurants and Monitor Sodium and Sugar Levels",
      // desc: "According to him, â€œI'm still surprised that this has happened. But we are surprised because we are so surprised.â€More revelations about Whittington will be featured in the film",
      img: "./src/assets/map.png",
      // authorLogo: "https://api.uifaces.co/our-content/donated/FJkauyEa.jpg",
      // authorName: "Micheal",
      // date: "Jan 4 2022",
      // href: "javascript:void(0)",
    },
    {
      title: "Receive Personalised Analytics and Recommendations",
      // desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks. I realized today that I have all this stuff that",
      img: "https://cdn.dribbble.com/users/10611599/screenshots/17941758/media/8f1d9bf84ca9769c4f9e32a4a21cb6c0.png?resize=400x0",
      // authorLogo: "https://randomuser.me/api/portraits/men/46.jpg",
      // authorName: "Luis",
      // date: "Jan 4 2022",
      // href: "javascript:void(0)",
    },
  ];

  return (
    <section className="mx-auto px-4 max-w-screen-xl md:px-8 pb-8">
      <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((items, key) => (
          <article
            className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm"
            key={key}
            onClick={() => navigate("/login")}
          >
            <a href={items.href}>
              <img
                src={items.img}
                loading="lazy"
                alt={items.title}
                className="w-full h-48 rounded-t-md"
              />
              <div className="flex items-center pt-2 ml-4 mr-2">
                <div className="ml-3">
                  <span className="block text-gray-900">
                    {items.authorName}
                  </span>
                  <span className="block text-gray-400 text-sm">
                    {items.date}
                  </span>
                </div>
              </div>
              <div className=" ml-4 mr-2 mb-3">
                <h3 className="text-xl text-gray-900">{items.title}</h3>
                <p className="text-gray-400 text-sm mt-1">{items.desc}</p>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default HomeCards;
