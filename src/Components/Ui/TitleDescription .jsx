const TitleDescription = ({ title, description, top_SmallText }) => {
  return (
    <div className="text-center">
      <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
        {top_SmallText}
      </h2>

      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </p>
      <p className="mt-4 mb-11 max-w-2xl text-xl text-gray-500 lg:mx-auto">
        {description}
      </p>
    </div>
  );
};

export default TitleDescription;
