interface Props {
  icon: React.ReactElement;
  children: React.ReactNode;
}

function Button({ icon, children }: Props) {
  return (
    <button className="inline-flex h-12 w-full items-center justify-center gap-2 rounded bg-white/10 px-6 text-base text-white/50 hover:bg-white hover:text-black">
      <span>{icon}</span>
      {children}
    </button>
  );
}

export default Button;
