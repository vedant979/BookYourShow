
import {Rows} from "../Rows/Rows"
import "./Banner.css"
export const Banner = () => {
  return (
    <div className='banner-comps'>
        <div className='list-comp'>
            <div className='movie-list'>
                <Rows/>
                <Rows/>
                <Rows/>
                <Rows/>
                <Rows/>
            </div>
        </div>
    </div>
  )
}
