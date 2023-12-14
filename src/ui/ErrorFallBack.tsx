interface Props {
  error: Error;
  resetErrorBoundary: () => void;
}

function ErrorFallBack({ error, resetErrorBoundary }: Props) {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-3 bg-[#202020] bg-[image:linear-gradient(rgba(255,255,255,0.1),rgb(32,32,32)90%),var(--error-img)] bg-cover bg-center bg-no-repeat text-xl text-white bg-blend-darken lg:gap-4">
      <h1 className="text-2xl font-bold ">Something went wrong 😥</h1>
      <p>{error.message}</p>
      <button
        className="rounded-md bg-white px-3 py-2 text-black duration-300 hover:opacity-80 lg:px-2.5 lg:py-2.5"
        onClick={resetErrorBoundary}
      >
        Try again
      </button>
    </div>
  );
}

export default ErrorFallBack;
