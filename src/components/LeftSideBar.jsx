import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EmailIcon from '@mui/icons-material/Email';

const LeftSideBar = () => {
  return (
    <div className='flex flex-col h-full md:h-[90vh] justify-between mr-4'>
      <div className="mt-6 flex flex-col space-y-2">

        <SidebarItem icon={TwitterIcon} label="" />
        <SidebarItem icon={HomeIcon} label="Inicio" />
        <SidebarItem icon={TagIcon} label="Tendencias" />
        <SidebarItem icon={PersonIcon} label="Perfil" />
        <SidebarItem icon={NotificationsIcon} label="Notificaciones" />
        <SidebarItem icon={EmailIcon} label="Mensajes" />
        <SidebarItem icon={MoreHorizIcon} label="Más Opciones" />
      </div>
    </div>
  );
};

const SidebarItem = ({ icon: Icon, label }) => (
  <div className="flex items-center space-x-4 px-2 py-1 hover:bg-slate-200 rounded-full cursor-pointer">
    <Icon fontSize="large" />
    {label && <p>{label}</p>}
  </div>
);

export default LeftSideBar;
