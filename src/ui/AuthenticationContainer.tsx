function AuthenticationContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full flex-col items-center justify-center text-center text-white lg:mt-16 lg:flex-row lg:gap-7">
      {children}
    </div>
  );
}

export default AuthenticationContainer;
