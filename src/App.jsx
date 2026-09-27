import React, { useState } from "react";
import UserDataSection from "./components/UserDataSection";
import Cards from "./components/Cards";
import "remixicon/fonts/remixicon.css";

function App() {
  const usersData = JSON.parse(localStorage.getItem("userData")) || [];
  const [coverProfile, setCoverProfile] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [userName, setUserName] = useState("");
  const [description, setDescription] = useState("");
  const [likesCount, setLikesCount] = useState("");
  const [postCount, setPostCount] = useState("");
  const [viewsCount, setViewsCount] = useState("");

  const [userData, setUserData] = useState(usersData);

  const sumbitHandler = (e) => {
    e.preventDefault();

    setUserData([
      ...userData,
      {
        coverProfile,
        profileImage,
        userName,
        description,
        likesCount,
        postCount,
        viewsCount,
      },
    ]);

    localStorage.setItem("userData", JSON.stringify(userData));

    setCoverProfile("");
    setProfileImage("");
    setUserName("");
    setDescription("");
    setLikesCount("");
    setPostCount("");
    setViewsCount("");
  };

  const deleteHandler = (idx) => {
    let copyUser = [...userData];
    copyUser.splice(idx, 1);
    setUserData(copyUser);
    localStorage.setItem("userData", JSON.stringify(copyUser));
  };

  return (
    <div className="w-full min-h-screen bg-[#414141] overflow-hidden">
      {/* FORM SECTION */}
      {/* <UserDataSection
        sumbitHandler={sumbitHandler}
        coverProfile={coverProfile}
        profileImage={profileImage}
        userName={userName}
        description={description}
        likesCount={likesCount}
        postCount={postCount}
        viewsCount={viewsCount}
        setCoverProfile={setCoverProfile}
        setDescription={setDescription}
        setLikesCount={setLikesCount}
        setPostCount={setPostCount}
        setUserName={setUserName}
        setViewsCount={setViewsCount}
      /> */}

      <div className="w-full px-4 sm:px-8 lg:px-16 py-8 event-none">
        <h1 className="text-[#f5f5f5] p-8 text-center font-semibold text-5xl">
          Create your Profile{" "}
        </h1>

        <form
          onSubmit={(e) => {
            sumbitHandler(e);
          }}
          className="w-full flex flex-wrap justify-center items-center gap-4 sm:gap-6"
        >
          <input
            value={coverProfile}
            onChange={(e) => {
              setCoverProfile(e.target.value);
            }}
            required
            type="url"
            className="outline-none w-full sm:w-[45%] lg:w-[30%] bg-[#f5f5f5] text-black py-3 sm:py-4 px-4 text-base sm:text-lg rounded-2xl"
            placeholder="Image cover profile"
          />
          <input
            value={profileImage}
            onChange={(e) => {
              setProfileImage(e.target.value);
            }}
            required
            type="url"
            className="outline-none w-full sm:w-[45%] lg:w-[30%] bg-[#f5f5f5] text-black py-3 sm:py-4 px-4 text-base sm:text-lg rounded-2xl"
            placeholder="Image profile"
          />

          <input
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            required
            type="text"
            className="outline-none w-full sm:w-[45%] lg:w-[30%] bg-[#f5f5f5] text-black py-3 sm:py-4 px-4 text-base sm:text-lg rounded-2xl"
            placeholder="Enter user name"
          />
          <input
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            required
            type="text"
            className="outline-none w-full sm:w-[45%] lg:w-[30%] bg-[#f5f5f5] text-black py-3 sm:py-4 px-4 text-base sm:text-lg rounded-2xl"
            placeholder="Enter Description"
          />
          <input
            value={likesCount}
            onChange={(e) => {
              setLikesCount(e.target.value);
            }}
            required
            type="number"
            className="outline-none w-full sm:w-[45%] lg:w-[30%] bg-[#f5f5f5] text-black py-3 sm:py-4 px-4 text-base sm:text-lg rounded-2xl"
            placeholder="Enter likes number"
          />
          <input
            value={postCount}
            onChange={(e) => {
              setPostCount(e.target.value);
            }}
            required
            type="number"
            className="outline-none w-full sm:w-[45%] lg:w-[30%] bg-[#f5f5f5] text-black py-3 sm:py-4 px-4 text-base sm:text-lg rounded-2xl"
            placeholder="Enter Post Number"
          />
          <input
            value={viewsCount}
            onChange={(e) => {
              setViewsCount(e.target.value);
            }}
            required
            type="number"
            className="outline-none w-full sm:w-[45%] lg:w-[30%] bg-[#f5f5f5] text-black py-3 sm:py-4 px-4 text-base sm:text-lg rounded-2xl"
            placeholder="Enter Views Number"
          />
          <button
            className="active:scale-95 transition-all
            w-full sm:w-[45%] lg:w-[30%]
            bg-green-600 font-bold text-center text-black
            py-3 sm:py-4 px-4 text-lg sm:text-xl
            rounded-2xl"
          >
            Add Card
          </button>
        </form>
      </div>

      {/* CARD SECTION */}
      {/* <Cards userData={userData} deleteHandler={deleteHandler()} /> */}
      <div className=" w-full  p-5  flex flex-wrap gap-10 justify-center items-center  overflow-auto  ">
        {userData.map((elem, idx) => {
          return (
            <div
              key={idx}
              className="w-100  bg-[#f5f5f5] rounded-2xl p-5 relative  "
            >
              <div className="w-full h-40 rounded-2xl bg-amber-300">
                <img
                  className="w-full h-full object-cover rounded-2xl"
                  src={elem.coverProfile}
                  alt=""
                />
              </div>
              <div className="w-30 h-30 rounded-full  bg-red-400 absolute top-[20%] left-[35%] border-t-8 border-l-3 border-r-3 border-gray-400">
                <img
                  className="w-full h-full object-cover rounded-full "
                  src={elem.profileImage}
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-4 pt-20">
                <h1 className="text-2xl font-bold ">{elem.userName}</h1>
                <h4 className="text-xl font-semibold pl-4 text-gray-300 text-center ">
                  {elem.description}
                </h4>
              </div>
              <div className="flex justify-between items-center pt-10 font-semibold">
                <div className="flex flex-col justify-center items-center text-gray-700 ">
                  <h1>{elem.likesCount}K</h1>
                  <h2>Likes</h2>
                </div>
                <div className="flex flex-col justify-center items-center text-gray-700 ">
                  <h1>{elem.postCount}</h1>
                  <h2>Posts</h2>
                </div>
                <div className="flex flex-col justify-center items-center text-gray-700 ">
                  <h1>{elem.viewsCount}K</h1>
                  <h2>Views</h2>
                </div>
              </div>
              <div className="flex justify-between items-center pt-10 p-4 text-2xl">
                <h4>
                  <i className="ri-instagram-line"></i>
                </h4>
                <h4>
                  <i className="ri-twitter-x-line"></i>
                </h4>
                <h4>
                  <i className="ri-at-line"></i>
                </h4>
              </div>
              <div className=" flex  flex-col jutify-center item-center">
                <button
                  onClick={() => {
                    deleteHandler(idx);
                  }}
                  className=" active:scale-95 py-2 px-4 bg-red-700 text-2xl cursor-pointer rounded-2xl text-center"
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
