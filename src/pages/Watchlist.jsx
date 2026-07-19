import React from 'react'
import WatchlistItem from '../features/watchlist/components/WatchlistItem'
import { useSelector } from 'react-redux'
import { CiCircleChevLeft } from 'react-icons/ci';
import Button from '../component/Button/Button';
import { useNavigate } from 'react-router-dom';

function Watchlist() {
  const listOfMovie = useSelector((state) => state.watchList.items);
  const navigate = useNavigate()
  function HandleClick() {
    navigate("/")
  }

  return (
    <div className="p-2 bg-gray-900 h-screen flex flex-col gap-5">
      <Button clickHandle={HandleClick } css="text-white text-3xl self-start hover:text-gray-300">
        <CiCircleChevLeft />
      </Button>
      <div>
        <h1 className='text-white text-5xl p-1'>Watch List</h1>
        <hr className='text-white ' />
      </div>
      <div className='p-2 bg-gray-900  flex flex-col gap-5 overflow-y-auto'>
        {listOfMovie.map((item) => <WatchlistItem item={item} />)}
      </div>
    </div>
  )
}

export default Watchlist
