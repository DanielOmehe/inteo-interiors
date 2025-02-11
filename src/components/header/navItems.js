const InteoNavItems = ({ children }) => {
  return <ul className="sm:hidden flex items-center justify-between gap-12">{children}</ul>;
};

export default InteoNavItems;

export const InteoItems = ({children})=>{
    return <div className="flex items-center justify-between gap-8">{children}</div>
}