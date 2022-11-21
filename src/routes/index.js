import React from 'react';
import { Route, Routes } from 'react-router';
import Discover from './Discover';
import Charts from './Charts/charts';
import Search from './Search/search';
import Favourites from './Favourites/favourites';
import Playlists from './Playlists/playlists';
import Profile from './Profile/profile';

export default function RoutesSidebar() {
  // Here you'd return an array of routes
  return(
    <Routes>
      <Route path='/' element={<Discover />} />
      <Route path='/search' element={<Search />} />
      <Route path='/favourites' element={<Favourites />} />
      <Route path='/playlists' element={<Playlists />} />
      <Route path='/charts' element={<Charts />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='*' element={<h1>Error 404 !</h1>} />
    </Routes>
  );
}
