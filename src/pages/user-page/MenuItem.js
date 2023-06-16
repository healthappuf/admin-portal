import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const MenuItem = props => {
  return (
    <div className={"flex cursor-pointer justify-between p-4 rounded-md " + (props.active && "bg-menu-highlighted-item")} onClick={() => props.setActive(props.name)}>
      <div className="flex gap-4">
        {<props.icon />}
        <span className="text-md font-bold">{props.name}</span>
      </div>
      {props.active && <KeyboardArrowRightIcon />}
    </div>
  );
};

export default MenuItem;
