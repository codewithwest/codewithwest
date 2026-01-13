interface text {
  value?: string;
  className?: string;
}

const ThemedText = ({ value, className }: text) => {
  return <p className={className}>{value}</p>;
};

export default ThemedText;
