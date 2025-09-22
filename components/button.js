import Link from "next/link";

const VARIANT_CLASSES = {
  PRIMARY: "border-purple hover:bg-purple/20",
  SECONDARY: "border-tertiary hover:bg-tertiary/20",
};

const Button = ({ 
  children,
  className = "",
  type = "submit",
  onClick = () => {},
  variant = "PRIMARY",
  ...rest
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-fit py-2 px-4 border text-tertiary text-center font-medium flex items-center gap-3 hover:opacity-75 ${VARIANT_CLASSES[variant] || VARIANT_CLASSES.PRIMARY} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};


export default Button;
