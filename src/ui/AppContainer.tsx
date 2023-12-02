function AppContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full flex-col bg-stone-900 text-white lg:grid lg:grid-cols-[260px_1fr] lg:grid-rows-[auto_1fr]">
      {children}
    </div>
  );
}

export default AppContainer;
