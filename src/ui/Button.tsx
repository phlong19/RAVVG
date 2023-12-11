interface Props {
  icon: React.ReactElement;
  children: React.ReactNode;
}

function Button({ icon, children }: Props) {
  return (
    <button className="mt-2.5 inline-flex h-12 w-full shrink-0 items-center justify-center gap-2 rounded bg-white/10 px-6 text-base text-white/50">
      <span>{icon}</span>
      {children}
    </button>
  );
}

export default Button;
