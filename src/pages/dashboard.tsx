import React, { FC } from 'react'
import {
  Input,
} from "@material-tailwind/react";
import { userMenu } from '~/utils/enums';
import CustomSelect from '~/components/ui/CustomSelect';
import { FaSearch } from 'react-icons/fa';
import Header from '~/components/Header/Header';

const Dashboard: FC<any> = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <>
      <Header menuItems={userMenu} />
      <div className='flex justify-between h-16 m-24 pr-24'>
        <CustomSelect className={"w-72"} label={'Ordenar'} options={[]} />
        <div className="w-72">
          <Input label="Buscar mis Cursos" icon={<FaSearch />} />
        </div>

      </div>
      <div className="m-24 w-full py-12">
        {courses.map(item => item)}
      </div>
    </>
  );
}
export default Dashboard