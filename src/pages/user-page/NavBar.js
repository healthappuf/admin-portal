import MenuItem from "./MenuItem";
import logo from "../../images/logo.png";
import {Home, PersonAdd, Settings, List, Person} from '@mui/icons-material';

function NavBar(props) {
    return ( 
        <div className="divide-y-2 divide-gray-400 w-72 text-white bg-menu fixed h-full">
        {/* Logo */}
        <div className="flex  items-center gap-5 py-4 px-6">
          <img src={logo} alt="Logo" className="h-16 w-auto" />
          <p className="font-bold text-2xl">Health App</p>
        </div>

        {/* Menu Options */}
        <ul className=" p-4 pt-10">
            <MenuItem active={props.selectedOption === "Dashboard"} icon={Home} name="Dashboard" setActive={props.setSelectedOption}/>
            <MenuItem active={props.selectedOption === "Patients"} icon={Person} name="Patients" setActive={props.setSelectedOption}/>
            <MenuItem active={props.selectedOption === "Sessions"} icon={List} name="Sessions" setActive={props.setSelectedOption}/>
            <MenuItem active={props.selectedOption === "Add Patient"} icon={PersonAdd} name="Add Patient" setActive={props.setSelectedOption}/>
            <MenuItem active={props.selectedOption === "Settings"} icon={Settings} name="Settings" setActive={props.setSelectedOption}/>
        </ul>
      </div>
     );
}

export default NavBar;