export const Banner = ({ title, subTitle }) => {
  return (
    <div className="jumbotron">
      <h1 className="display-4">{title}</h1>
      <h2 className="lead">{subTitle}</h2>
    </div>
  );
};
