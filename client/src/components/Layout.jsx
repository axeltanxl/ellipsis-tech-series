import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-5 dark:bg-bg sm:px-6 lg:px-8">
      <div className=" mx-auto w-full max-w-screen-sm font-sans  md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl">
        <Navbar />
      </div>
      <main className=" mx-auto w-full max-w-screen-sm font-sans  md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl">
        {children}
      </main>
    </div>
  );
};

export default Layout;