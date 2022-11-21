import React from 'react';
import '../styles/_discover-item.scss';
import Skeleton from '@mui/material/Skeleton'

export default function DiscoverItem({ images, name, isLoading }) {


  return (
    <>
    {isLoading?
    <>
    <Skeleton variant="rectangular" width={150} height={60} />
    <Skeleton variant="rectangular" width={150} height={20} />
    </>
    :<div className="discover-item animate__animated animate__fadeIn">
      <div
        className="discover-item__art"
        style={{ backgroundImage: `url(${images[0].url})` }}
      />
      <p className="discover-item__title">{name}</p>
    </div>}
    </>
  );
}
