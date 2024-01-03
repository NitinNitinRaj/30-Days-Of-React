export default function SubPanel() {
  return (
    <div className="w-11/12 m-auto rounded-2xl bg-sky-200 my-10 p-10 font-mono">
      <h1 className="text-4xl text-center">SUBSCRIBE</h1>
      <p className="text-center m-10 font-semibold text-lg">
        Sign up with email address to receive news and update
      </p>
      <div className="m-8 flex justify-center">
        <input
          className="mx-2 rounded-md w-50 h-10 px-2"
          type="text"
          placeholder="First Name"
        />
        <input
          className="mx-2 rounded-md w-50 h-10 px-2 "
          type="text"
          placeholder="Last Name"
        />
        <input
          className="mx-2 rounded-md w-50 h-10 px-2"
          type="email"
          placeholder="Email"
        />
      </div>
      <div className="flex justify-center">
        <button className="border-solid rounded-md bg-rose-300 text-white w-72 h-10">
          Subscribe
        </button>
      </div>
    </div>
  );
}
