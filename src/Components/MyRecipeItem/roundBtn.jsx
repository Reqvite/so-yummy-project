import { Btn } from './roundBtn.style';

export const RdButton = ({ title, to, variant = 'normal' }) => {
  return (
    <>
      <Btn variant={variant} to={to}>
        {title}
      </Btn>
    </>
  );
};


