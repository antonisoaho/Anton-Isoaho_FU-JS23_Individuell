const Dots = () => {
  let i = 0;
  let dots = '';
  while (i < 149) {
    dots += '.';
    i++;
  }

  return <span className="dots">{dots}</span>;
};
export default Dots;
