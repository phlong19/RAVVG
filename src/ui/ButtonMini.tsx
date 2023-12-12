function ButtonMini({ children }: { children: React.ReactNode }) {
  return (
    <button className="rounded-md bg-zinc-700 px-2.5 py-1 duration-200 hover:bg-white hover:text-black xl:hidden">
      {children}
    </button>
  );
}

export default ButtonMini;
