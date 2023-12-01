function AppContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full flex-col bg-stone-900 text-white md:grid md:grid-cols-[260px_1fr] md:grid-rows-[auto_1fr]">
      {children}
    </div>
  );
}

export default AppContainer;
