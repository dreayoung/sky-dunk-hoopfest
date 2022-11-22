import { ImCross } from 'react-icons/im';
import { GiClothes } from 'react-icons/gi';
import { MdLocationOn } from 'react-icons/md';
import { FaRegFrownOpen } from 'react-icons/fa';

function Promoter() {
  return (
    <div className="">
      <section className="mt-4 mb-4 uppercase">
        <div className="flex items-center space-x-2">
          <ImCross color="silver" size={12} />
          <p className="  text-gray-300 text-md whitespace-nowrap">
            No work no school next day
          </p>
          <ImCross color="silver" size={12} />
        </div>
        <div className="flex items-center space-x-2 text-md mt-4">
          <GiClothes color="silver" />
          <p className="text-gray-300 ">Dress Code: All BLACK</p>
        </div>
        <div className="flex items-center space-x-2 text-md mt-4">
          <MdLocationOn color="silver" />
          <p className="text-gray-300 ">Baller Club</p>
        </div>
        <div className="flex items-center space-x-2 text-md mt-4">
          <FaRegFrownOpen color="silver" />
          <p className="text-gray-300 ">No refunds. all sales final</p>
        </div>
      </section>
    </div>
  );
}

export default Promoter;
