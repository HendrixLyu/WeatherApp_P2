const Temperature = ({ value, className }) => {
  //可以全局复用
  return <span className={className}> {value} ℃ </span>;
};

export default Temperature;
