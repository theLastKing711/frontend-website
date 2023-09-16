import loadingImage from "./Spinner-1s-200px.svg";

const LoadingIcon = () => {
  return (
    <div style={{ position: "relative" }}>
      <img src={loadingImage} width={30} height={30} />
    </div>
  );
};

export default LoadingIcon;
