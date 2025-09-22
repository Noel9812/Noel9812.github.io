export const PurpleText = ({ children, className }) => {
  return (
    <span className={`text-purple ${className}`}>{children}</span>
  );
};

export const PrimaryText = ({ children, className }) => {
  return (
    <p className={`text-primary ${className}`}>{children}</p>
  );
};

export const SecondaryText = ({ children, className }) => {
  return (
    <p className={`text-secondary ${className}`}>{children}</p>
  );
};

export const TertiaryText = ({ children, className }) => {
  return (
    <p className={`text-tertiary ${className}`}>{children}</p>
  );
};
