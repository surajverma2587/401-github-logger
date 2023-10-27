export const Banner = ({ title, subTitle }) => {
  return (
    <div class="jumbotron">
      <h1 class="display-4">{title}</h1>
      <h2 class="lead">{subTitle}</h2>
    </div>
  );
};
