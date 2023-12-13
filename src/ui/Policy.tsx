function Policy() {
  const lines = Math.random().toString().split(".")[1];

  return (
    <div className="mb-6 flex max-w-[430px] flex-col items-center text-center">
      <div className="max-w-[386px] px-1.5 text-center">
        By signing up, you agree to some{" "}
        <span className="underline">Term of Service</span> and{" "}
        <span className="underline">Privacy Policy</span> that we made it as
        long as possible, exactly are{" "}
        <span className="text-green-400">{lines} lines</span> with full of{" "}
        <span className="text-purple-500">terminology</span> words, you don't
        care anyway, right? You can read it within{" "}
        <span className="text-yellow-300">10</span> seconds, nice 👍
      </div>
      <div className="mt-3">
        Then we will legally sell your infomation because you argeed! 😈{" "}
        <span className="text-red-500">ehehhehehehhehe</span>
      </div>
    </div>
  );
}

export default Policy;
