const Spacer = ({ size }) => {
  return size === "sm" ? (
    <div style={{ height: "20px" }} />
  ) : size === "md" ? (
    <div style={{ height: "80px" }} />
  ) : size === "lg" ? (
    <div style={{ height: "120px" }} />
  ) : null;
};

export default Spacer;
