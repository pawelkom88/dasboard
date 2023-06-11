interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

export default function Layout({ children, title }: LayoutProps) {
  return (
    <div className="flex flex-col w-[25rem] rounded-md sm:p-10 border-2 border-purple-400 p-12">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">{title}</h1>
      </div>
      {children}
    </div>
  );
}
