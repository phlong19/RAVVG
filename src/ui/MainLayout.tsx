interface Props {
  children: React.ReactNode;
  title: string;
  description?: string;
}

function MainLayout({ children, title, description }: Props) {
  return (
    <div className=" text-white">
      <div className="mb-4 h-[85px] text-center lg:mb-2 lg:h-auto lg:text-left">
        <h1 className="text-4xl font-bold lg:text-7xl">{title}</h1>
        {description && <p className="mt-2">{description}</p>}
      </div>
      {/* games list */}
      {children}
    </div>
  );
}

export default MainLayout;
