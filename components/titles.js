export const MainTitle = ({ className, children, subText }) => {
  return (
    <div className="mb-10">
      <h1 className={`font-[800] text-[32px] text-tertiary flex items-center ${className}`}>
        <span className="text-purple">/</span>
        {children}
      </h1>
      {subText && <p className="text-tertiary mt-2">{subText}</p>}
    </div>
  );
};

export const SubTitle = ({ className, children, line = false }) => {
  return (
    <h2 className={`font-[600] text-[32px] text-tertiary flex items-center ${className}`}>
      <span className="text-purple">#</span>
      {children}
      {line && <span className="ml-2 max-w-[500px] grow h-[2px] bg-purple"></span>}
    </h2>
  );
};
