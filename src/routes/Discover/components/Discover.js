import React, { useState, useEffect } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';
import APIKit from '../../../spotify'


const Discover =()=> {

  useEffect(() => {
    APIKit.get("browse/new-releases").then(function (response) {
      setnewReleases(response.data.albums.items)
    });
    APIKit.get("browse/featured-playlists").then(function (response) {
      setplaylists(response.data.playlists.items)
    });
    APIKit.get("browse/categories").then(function (response) {
      setcategories(response.data.categories.items)
      console.log(response.data)
    });
    setisLoading(false);
  }, []);

    const [isLoading, setisLoading] = useState(true);
    const [newReleases, setnewReleases] = useState([]);
    const [playlists, setplaylists] = useState([]);
    const [categories, setcategories] = useState([]);

    return (
      <div className="discover">
        <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} load={isLoading}/>
        <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} load={isLoading}/>
        <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" load={isLoading}/>
      </div>
    );
}

export default Discover;