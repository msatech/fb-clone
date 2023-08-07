
import ChatIcon from '@material-ui/icons/Chat'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import  ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import  LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import PeopleIcon from '@material-ui/icons/People'
import StorefrontIcon from '@material-ui/icons/Storefront'
import  VideoLibraryIcon  from '@material-ui/icons/VideoLibrary'
import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow.js'
import { useStateValue } from '../../ContextApi/StateProvider'


function SidebarComponent() {

  const [{ user }, dispatch] = useStateValue()


    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName} />
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center" />
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SidebarRow Icon={PeopleIcon} title="Friends" />
            <SidebarRow Icon={ChatIcon} title="Messenger" />
            <SidebarRow Icon={StorefrontIcon} title="MarketPlace" />
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon={ExpandMoreIcon} title="Marketplace" />
            
            
        </div>
    )
}

export default SidebarComponent
