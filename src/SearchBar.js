import icon1 from './Images/search.png'
import icon2 from './Images/search_voice.png'
import icon3 from './Images/search_image.png'
import './styles/SearchBar.css'
import { useState } from 'react'



export default function SearchBar() {
    const [value, setValue] = useState('');
    const onChange = (event) => {
        setValue(event.target.value);
    }
    return (
        <div ClassName="Bar">
            <input className="searchbar" type="Text" value={value} onChange={onChange} title="Search" />
            <a href="#"> <img className="search" src={icon1} alt="search" /></a>
            <a href="#"> <img className="voice" src={icon2} alt="voice search" /></a>
            <a href="#"> <img className="image" src={icon3} alt="image search" /></a>

        </div>
    )
}