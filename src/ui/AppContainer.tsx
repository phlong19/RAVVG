function AppContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-stone-900 text-white lg:block">
      {children}
    </div>
  );
}

export default AppContainer;
