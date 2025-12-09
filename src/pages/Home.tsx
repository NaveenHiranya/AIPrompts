import "../App.css";
import Post from "../components/Post";
// import VideoPost from "../components/VideoPost";
// import AdUnit50 from "../components/AdUnit50";
// import AdUnitG from "../components/AdUnitG";
// import AdUnitHPF from "../components/AdUnitHPF";
                   
import Header from "../components/Header";
import whatsapp from "../assets/PostImages/whatsapp.svg";
import facebook from "../assets/PostImages/facebook.svg";

import {posts} from "../data/posts";
// import AdUnit50 from "../components/AdUnit50";

export default function App() {
  return (
    <>
      <Header />
      <div>
        <p>Images:</p>
        <div className="flex gap-2 flex-nowrap overflow-x-scroll no-scrollbar">
          {posts.map(
            (post) =>
              post.imgname &&
              post.ratio === "small" && (
                <Post name={post.name} imgname={post.imgname} link={post.id} />
              )
          )}
        </div>
      </div>
      {/* <div>
        <p>Images:</p>
        <div className="flex gap-2 border flex-nowrap overflow-x-auto">
          {posts.map(
            (post) =>
              post.imgname &&
              post.ratio === "large" && (
                <Post name={post.name} imgname={post.imgname} link={post.id} />
              )
          )}
        </div>
      </div> */}
      {/* <div>
        <p>Images:</p>
        <div className="flex gap-2 flex-wrap">
          {posts.map(
            (post) =>
              post.imgname &&
              post.ratio === "medium" && (
                <Post name={post.name} imgname={post.imgname} link={post.id} />
              )
          )}
        </div>
      </div> */}
      
      {/* Footer */} 
      <div className="flex flex-col items-center gap-2 text-white bg-black p-3">
        <a
          className="border flex w-max bg-gray-600 px-3 py-1 items-center font-bold text-white rounded-xl"
          href="https://www.facebook.com/profile.php?id=61584396424767"
        >
          <img className="w-10" src={facebook} /> Facebook
        </a>

        <a
          className="border flex w-max bg-gray-600 px-3 py-1 items-center font-bold text-white rounded-xl"
          href="https://whatsapp.com/channel/0029Vb72MKU5kg6ycjRgtS2U"
        >
          <img className="w-10" src={whatsapp} /> Whatsapp
        </a>

        <p>Developed By Vnix</p>
        <a href="/contact">contact</a>
      </div>
    </>
  );
}
