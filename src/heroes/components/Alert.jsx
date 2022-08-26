export const Alert = ({ color, texto }) => {
  return (
    <div className={`alert alert-${color || "primary"}`} role="alert">
      <strong>{texto}</strong>
    </div>
  );
};
