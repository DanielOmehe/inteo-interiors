const PageHeadingLarge = ({ variant, children }) => {
  return <h1 className={`${variant}`}>{children}</h1>;
};

export default PageHeadingLarge;

export const PageHeadingMedium = ({ variant, children }) => {
  return <h2 className={`${variant}`}>{children}</h2>;
};


export const PageHeaderSmall =({variant, children})=>{
    return <h3 className={`${variant}`}>{children}</h3>
}