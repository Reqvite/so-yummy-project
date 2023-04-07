import { BtnDel } from './ButtonDelete.styled';
import { IconTrash } from '../../assets/svg/favoriteBtn';

export const ButtonDel = ({ battonDel }) => {
  return (
    <>
      <BtnDel battonDel={battonDel}>
        <IconTrash />
      </BtnDel>
    </>
  );
};
