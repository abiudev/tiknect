const ComingSoon = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-rose-600">
      <div className="text-center text-white p-6 max-w-lg mx-auto">
        <div className="mb-8">
          <img
            src="/tiknect.png"
            alt="Tiknect Logo"
            width={200}
            height={200}
            className="mx-auto"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
        <p className="text-lg mb-6">
          We are working hard to launch something amazing. Stay tuned!
        </p>
        <form className="flex items-center rounded-lg border-red-500 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 rounded-l-md   text-gray-800 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-white text-rose-600 p-2 rounded-lg font-semibold hover:bg-gray-100"
          >
            Notify Me
          </button>
        </form>
      </div>
    </div>
  );
};

export default ComingSoon;
