import React from "react"
import './index.css'
import band from "../images/band.jpg"
import PageHeader from "../components/page_header"
import TrackPlayer from '../components/track_player'
import UpcomingShows from '../components/show_list'
import BandBios from '../components/band_bios'

export default () => (
    <div>
        <PageHeader />
        <div class='hero-container'>
            <img className='hero-image' src={band} alt="" />
        </div>
        <TrackPlayer />
        <UpcomingShows />
        <BandBios />
    </div>
)
