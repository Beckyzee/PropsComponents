import Icon1 from './src/images/search.PNG'
import Icon2 from './src/images/search_voice.PNG'
import Icon3 from './src/images/search_image.PNG'
import '../src/styles/SearchBar.css'
import { useState } from 'react'



export default function SearchBar() {
    const [value, setValue] = useState('');
    const onChange = (event) => {
        setValue(event.target.value);
    }
    return (
        <div ClassName="Bar">
            <input className="searchbar" type="Text" value={value} onChange={onChange} title="Search" />
            <a href="#"> <img className="search" src={Icon1} alt="search" /></a>
            <a href="#"> <img className="voice" src={Icon2} alt="voice search" /></a>
            <a href="#"> <img className="image" src={Icon3} alt="image search" /></a>

        </div>
    )
}