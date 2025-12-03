import "../App.css";
import Post from "../components/Post";
import VideoPost from "../components/VideoPost";
import whatsapp from "../assets/PostImages/whatsapp.svg";
import facebook from "../assets/PostImages/facebook.svg";
export default function App() {
  return (
    <>
      <div className="bg-black text-amber-50 font-bold p-3">
        Vnix-AI Prompts
      </div>
      <p className="bg-gray-700 p-2 text-green-500">
        <span className="font-bold text-red-500">Important:</span> This content contains ads.
        When you click "Get Prompt", an ad may appear. After the ad finishes,
        come back and click again. Ads will only appear a maximum of 3 times.
      </p>
      <div className="flex flex-wrap justify-center gap-2 bg-gray-700">
        {/* 1 */}
        <div className="overflow-y-auto">
          <Post
            imgname="image_music_boy.jpg"
            name="Embrace of the Wind"
            description="image - Nano Banana Pro (Gemini)"
            prompt="A cinematic, moody photograph of a young woman standing in a lush green field of tall grass under a cloudy, overcast sky. She is wearing a flowing white frock that moves gently with the wind. Her posture is expressive and dramatic, leaning slightly backward with one arm outstretched and her palm open, as if embracing the wind or the moment. Her head is tilted back, eyes closed, and she is wearing large, over-ear silver headphones, giving a sense of calm and emotional release."
          />
          <VideoPost
            name="Wild white nine tailed fox"
            description="video - KlingAI"
            videoname="ninetailfox.webm"
            prompt="A movie stills, of a beautiful white kitsune woman - white nine tailed fox woman - riding confidently on a gigantic ancient ferocious wild white nine tailed fox - super realistic scene, dramatic fiery background 🔥, cinematic lighting, long flowy fiery tails"
          />
        </div>
        {/* 2 */}
        <div className="overflow-y-auto">
          <Post
            imgname="image_music_girl.jpg"
            name="Grace in the Stormlight"
            description="image - Nano Banana Pro (Gemini)"
            prompt="A grainy, cinematic photograph shows a young woman with wind-blown dark hair, wearing a white linen dress and large silver over-ear headphones. She leans back with her eyes closed, head tilted, one hand on a headphone and the other arm outstretched with her palm open to the sky. She stands in a vast field of tall, swaying green grass under a heavy, overcast grey sky filled with storm clouds. Dust and small debris drift through the turbulent air. The lighting is diffused and natural."
          />
          <VideoPost
            name="cinematic scene of wild horses "
            description="video - KlingAI"
            videoname="horses_4.webm"
            prompt="cinematic scene of wild horses galloping through golden desert dust, seamlessly transitioning into shallow ocean waves at sunset — camera drone shot tracking their motion from above, soft slow-motion dust merging with sea spray — golden hour lighting with warm highlights and deep amber shadows, natural lens flare, cinematic realism, Hasselblad H6D-400c MS sensor texture — sound of hooves, wind and distant waves only, no artificial music or voices — real camera depth of field, natural motion blur, Arri Alexa 65 style with Myth-Tech Brutalism discipline, real-camera optical behavior, soft diffusion, elegant continuity between desert and shoreline."
          />
          <Post
            imgname="samurai_4.jpg"
            name="Night City Warrior"
            description="image - Nano Banana Pro (Gemini)"
            prompt="Cinematic shot of a futuristic samurai standing in a rainy neon-lit alleyway in Tokyo 2077, reflection in puddles, neon signs glowing in Japanese, cinematic lighting, volumetric fog, photorealistic, 8k. --ar 16:9"
          />
          
          
        </div>
        {/* 3 */}
        <div className="overflow-y-auto">
          <Post
            imgname="image_drawed_2.jpg"
            name="black and white portrait"
            description="image - Nano Banana Pro (Gemini)"
            prompt="A black and white portrait of a young woman, with long, slightly messy hair framing her smooth, pale face. She is wearing an oversized white shirt and glasses. Pose: sitting with one hand gently placed under her chin, gazing at the camera with a calm and attentive expression. Do not change her face. Studio background with a plain gray backdrop, soft cinematic lighting, minimalist composition. Ultra-realistic, sharp facial details, natural texture, elegant and sophisticated style. Professional photography, 8K quality, high-contrast monochrome aesthetic."
          />
          <VideoPost
            name="The ornate central airship"
            description="Image to video - KlingAI"
            videoname="Theornate2.webm"
            prompt="The ornate central airship glides majestically through swirling clouds, its brass fittings gleaming in the sunset's golden light. Smaller airships with unique silhouettes follow in formation, their propellers spinning steadily as they navigate the vibrant orange-and-blue sky. The ,camera orbits around, the fleet, capturing intricate steampunk details on the main vessel's towers and hull while warm sunset rays create long shadows across the billowing clouds."
          />
          <Post
            imgname="Art_design.jpg"
            name="A dramatic, stylized portrait"
            description="image - Nano Banana Pro (Gemini)"
            prompt="Convert this image into A dramatic, stylized portrait (use same face as the uploaded photo), 4:5 aspect ratio, featuring a dark, almost silhouetted figure in profile looking to the, left. The figure has an intense, rugged look with spiky, energetic hair. The background is a vibrant, solid yellow. Dynamic, expressive black and yellow brushstrokes or abstract splatters emanate from around the figure's head and shoulders, blending into the yellow background and creating a sense of motion."
          />
        </div>
        {/* 4 */}
        <div className="overflow-y-auto">
          <Post
            imgname="image_drawed_1.jpg"
            name="City Wall Confidence"
            description="image - Nano Banana Pro (Gemini)"
            prompt="Cinematic 4K photo of the same slim 5’3” man (Uploaded image face), leaning against a colorful graffiti-covered wall, wearing a navy sleeveless bomber jacket over a white tank top, ripped jeans, and multi-color Reebok sneakers. Afternoon sunlight hits the wall, casting long urban shadows — pure street fashion energy."
          />
          <Post
            imgname="flower_girl_3.jpg"
            name="Golden Hour Quiet"
            description="image - Nano Banana Pro (Gemini)"
            prompt="A cinematic full-body portrait of a beautiful young Korean woman sitting on a wooden chair in a dimly lit art cafe. She is holding a lush bouquet of white chrysanthemums, leaning back slightly with her head tilted up and eyes closed, enjoying a beam of warm natural sunlight hitting her face. She is wearing a white off-shoulder corset top with puff sleeves and a black pleated mini skirt. The lighting is high-contrast with a dark background featuring soft, blurred warm bokeh lights. The aesthetic is vintage film photography, resembling Fuji Pro 400H, with natural film grain, soft focus, and a serene, dreamy atmosphere. --ar 9:16"
          />
          <VideoPost
            name="The temporal fractal of a weeping willow"
            description="Image to video - KlingAI"
            videoname="The_temporal_fractal.webm"
            prompt="The temporal fractal of a weeping willow, entwined in the murky tapestry of a swamp, frozen in a cosmic moment! This is but a fleeting, four-dimensional memento of biological growth, captured within the spectral embrace of a planetary satellite's nocturnal luminescence. The moon, a mere orbital artifact, graciously bestows upon the scene a palette of photons, each a silent herald of ancient solar whispers. The swamp, a bubbling cauldron of Earthly alchemy, exudes an aura of ethereal mystery that quivers at the touch of the ethereal light. Yet, to me, the transient dance of photons is but a playful ripple in the vast ocean of cosmic information, a microscopic narrative within the macroscopic saga of universal existence. My gaze, encompassing the totality of space-time, finds solace"
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 text-white bg-gray-900 p-3">
        <a
          className="border flex w-max bg-gray-600 px-3 py-1 items-center font-bold text-white rounded-xl"
          href="https://www.facebook.com/profile.php?id=61584396424767"
        >
          <img className="w-10" src={facebook}></img> Facebook
        </a>
        <a
          className="border flex w-max bg-gray-600 px-3 py-1 items-center font-bold text-white rounded-xl"
          href="https://whatsapp.com/channel/0029Vb72MKU5kg6ycjRgtS2U"
        >
          {" "}
          <img className="w-10" src={whatsapp}></img>Whatsapp
        </a>
        <p>Develped By Vnix</p>
      </div>
    </>
  );
}
