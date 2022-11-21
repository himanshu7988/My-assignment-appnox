import React from 'react';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeadphonesAlt,
  faHeart,
  faPlayCircle,
  faSearch, faStream,
} from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Avatar } from '../../../assets/images/avatar.svg';
import './_sidebar.scss';
import { NavLink } from 'react-router-dom';

function renderSideBarOption(link, icon, text, { selected }={}) {
  return (
    <NavLink to={link}>
    <div
      className={cx('sidebar__option', { 'sidebar__option--selected': selected })}
    >
      <FontAwesomeIcon icon={icon} />
      <p>{text}</p>
    </div>
    </NavLink>
  )
}

export default function SideBar() {
  
  return (
    <div className="sidebar">
      <NavLink to="/profile">
      <div className="sidebar__profile">
        <Avatar />
        <p>Bob Smith</p>
      </div>
      </NavLink>
    
      <div className="sidebar__options">
        {renderSideBarOption('/', faHeadphonesAlt, 'Discover', { selected: true })}
        {renderSideBarOption('/search', faSearch, 'Search')}
        {renderSideBarOption('/favourites', faHeart, 'Favourites')}
        {renderSideBarOption('/playlists', faPlayCircle, 'Playlists')}
        {renderSideBarOption('/charts', faStream, 'Charts')}
      </div>
    </div>
  );
}
