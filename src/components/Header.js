import { Link } from "react-router";
import useOnline from "../utils/Useonline";
const Header = () => {
  const onlineStatus=useOnline()
    return (
      <div className="flex justify-between border-solid bg-green-50 shadow-lg border-black sticky" >

        <img
          className="w-24"
          src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg"
          alt="logo-img"
        />
  
     <ul className="flex pr-[200px] pt-10">
          {onlineStatus?"🟢":"🔴"}
          <li className="ps-6"> <Link to='/'> home </Link> </li>
          <li className="ps-6" > <Link to='/about'> about </Link></li>
          <li className="ps-6" > <Link to='/contact'> contacts </Link></li>
          <li className="ps-6" >cart</li>
        </ul>
     </div>
      
    );
  };

  export default Header;