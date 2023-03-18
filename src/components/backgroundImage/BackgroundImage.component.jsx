import { Outlet } from 'react-router-dom';
import {useState} from 'react';
import './BackgroundImage.styles.scss'

const photos = {
    1: {'alt': 'Katami', 'desc': 'Visual Mapping In The Forest'},
    2: {'alt': 'Seattle', 'desc': 'The City At Night'},
    3: {'alt': 'Flowers', 'desc': 'Purple and Whites'},
    4: {'alt': 'Flowers', 'desc': 'Orange'},
    5: {'alt': 'Borderless', 'desc': 'Colored Lamps Borderless Tokyo'},
    6: {'alt': 'Westlake', 'desc': 'Westlake Street At Night'},
    7: {'alt': 'Flowers', 'desc': 'Pruple In Bloom'},
    8: {'alt': 'Ferris Wheel', 'desc': 'Ferris Wheel At The Pier'},
    9: {'alt': '201', 'desc': '201 Tag'},
    10: {'alt': 'Flowers', 'desc': 'Ready To Polinate'},
    11: {'alt': 'Museum', 'desc': 'Museum OF History & Industry'},
    12: {'alt': 'Bar', 'desc': 'Some Bar Somewhere'},
    13: {'alt': 'Chili Peppers', 'desc': 'Hottest In the World'},
}


const BackgroundImage = () =>{
    const [currentPic, setCurrentPic] = useState(1)

    const debounceButton = (fn) => {
        let timer;
        return function(type){
            if(timer) clearTimeout(timer)
            timer = setTimeout(()=>{
                fn(type);
            },200)
        }
    }

    const nextImage = (type) => {
        let nextPic;
        if(type === 'next'){
            nextPic = currentPic + 1;
            if(nextPic > Object.keys(photos).length){
                nextPic = 1;
            }
        }else{
            nextPic = currentPic - 1;
            if(nextPic < 1){
                nextPic = 1;
            }
        }
        setCurrentPic(nextPic);
    }

    const debouncedNext = debounceButton(nextImage);

    return(
        <>
            <div className="bg">
                <button className='prevImage' onClick={() => debouncedNext('prev')}>&larr;</button>
                <img className='carouselImg' src={require(`../../assets/images/photos/${currentPic}.jpg`)} alt={photos[currentPic]['alt']} />
                <button className='nextImage' onClick={() => debouncedNext('next')}>&rarr;</button>
            </div>
            <Outlet />
        </>
    )
}

export default BackgroundImage;