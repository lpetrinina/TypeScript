function ToursLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className='bg-slate-500 w-1/2 rounded py-2 mb-4'>
        <h1 className='text-3xl text-white text-center'>Nested Layout</h1>
      </header>
      {children}
    </div>
  );
}

export default ToursLayout;
