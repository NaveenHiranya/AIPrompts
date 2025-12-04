import "../App.css";
import Post from "../components/Post";
import VideoPost from "../components/VideoPost";
import AdUnit50 from "../components/AdUnit50";
import AdUnitG from "../components/AdUnitG";
import AdUnitHPF from "../components/AdUnitHPF";

import whatsapp from "../assets/PostImages/whatsapp.svg";
import facebook from "../assets/PostImages/facebook.svg";

export default function App() {
  return (
    <>
      <div className="bg-black text-amber-50 font-bold p-3">
        Vnix-AI Prompts
      </div>

      <p className="bg-gray-700 p-2 text-green-500">
        <span className="font-bold text-red-500">Important:</span> This content
        contains ads. When you click "Get Prompt", an ad may appear. After the
        ad finishes, come back and click again. Ads will only appear a maximum
        of 3 times.
      </p>

      <div className="flex flex-wrap justify-center gap-2 bg-gray-700">

        {/* 1 */}
        <div className="overflow-y-auto">
          <Post
            imgname="image_music_boy.jpg"
            name="Embrace of the Wind"
            link="Embrace-of-the-Wind"
          />

          <VideoPost
            name="Wild white nine tailed fox"
            videoname="ninetailfox.webm"
            link="Wild-white-nine-tailed-fox"
          />

          <AdUnit50 />
        </div>

        {/* 2 */}
        <div className="overflow-y-auto">
          <Post
            imgname="image_music_girl.jpg"
            name="Grace in the Stormlight"
            link="Grace-in-the-Stormlight"
          />

          <VideoPost
            name="Cinematic scene of wild horses"
            videoname="horses_4.webm"
            link="Cinematic-scene-of-wild-horses"
          />

          <Post
            imgname="samurai_4.jpg"
            name="Night City Warrior"
            link="Night-City-Warrior"
          />

          <AdUnitHPF />
        </div>

        {/* 3 */}
        <div className="overflow-y-auto">
          <Post
            imgname="image_drawed_2.jpg"
            name="Black and white portrait"
            link="Black-and-white-portrait"
          />

          <VideoPost
            name="The ornate central airship"
            videoname="Theornate2.webm"
            link="The-ornate-central-airship"
          />

          <Post
            imgname="Art_design.jpg"
            name="A dramatic, stylized portrait"
            link="A-dramatic-stylized-portrait"
          />

          
        </div>

        {/* 4 */}
        <div className="overflow-y-auto">
          <Post
            imgname="image_drawed_1.jpg"
            name="City Wall Confidence"
            link="City-Wall-Confidence"
          />

          <Post
            imgname="flower_girl_3.jpg"
            name="Golden Hour Quiet"
            link="Golden-Hour-Quiet"
          />

          <VideoPost
            name="The temporal fractal of a weeping willow"
            videoname="The_temporal_fractal.webm"
            link="The-temporal-fractal-of-a-weeping-willow"
          />
          <AdUnitG />
          
        </div>

      </div>

      {/* Footer */}
      <div className="flex flex-col items-center gap-2 text-white bg-gray-900 p-3">
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
