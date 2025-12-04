export default function Header() {
    const Navstayle = "hover:underline text-blue-200";
  return (
    <div className="bg-gray-900 text-white px-6 py-4">
      <div className="border border-blue-500 flex justify-between p-2 rounded-2xl">
        <p>Ai Prompts</p>
        <div className="flex gap-2">
          <a className={Navstayle} href="/categories">Categories</a> 
          <a className={Navstayle} href="/about">AboutUs</a>
        </div>
      </div>
    </div>
  );
}
