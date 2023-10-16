import { useSelector } from "react-redux";
export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col mt-2 gap-4">
        <img
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center"
          src={currentUser.avatar}
          alt="profile"
        />
        <input
          id="username"
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg"
        />
        <input
          id="email"
          type="text"
          placeholder="email"
          className="border p-3 rounded-lg"
        />
        <input
          id="password"
          type="text"
          placeholder="password"
          className="border p-3 rounded-lg"
        />
        <button className="bg-slate-700 text-white p-3 uppercase hover:placeholder-opacity-95 disabled:opacity-80 ">
          Update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer"> Delete Account</span>
        <span className="text-red-700 cursor-pointer"> Sign out</span>
      </div>
    </div>
  );
}
