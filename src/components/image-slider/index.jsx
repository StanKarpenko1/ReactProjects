import { useEffect, useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import './styles.css';


export default function ImageSlider({ url, limit = 5, page = 1 }) {

    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false)

    async function fetchImages(getUrl) {
        try {
            setLoading(true)

            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json()

            if (data) {
                setImages(data);
                setLoading(false);
            }

        } catch (e) {
            setErrorMessage(e.message)
            setLoading(false)
        }
    }

    function handlePrev() {
        setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    }

    function handleNext() {
        setCurrentSlide((prev ) => (prev === images.length -1 ? 0 : prev +1))
    }

    useEffect(() => {
        if (url !== '') {
            fetchImages(url)
        }
    }, [url, page, limit])

    console.log(images)


    if (loading) {
        return <div>Loading data! Please wait</div>
    }
    if (errorMessage !== null) {
        return <div>Error occured: {errorMessage} </div>
    }

    return (
        <div className="container">
            <BsArrowLeftCircleFill onClick={handlePrev} className='arrow arrow-left' />
            {images && images.length
                ? images.map((imageItem, index) => (
                    <img
                        key={imageItem.id}
                        alt={imageItem.download_url}
                        src={imageItem.download_url}
                        className={currentSlide === index ? 'current-image' : 'current-image hide-current-image'}
                    />
                ))
                : null
            }
            <BsArrowRightCircleFill onClick={handleNext} className='arrow arrow-right' />
            <span className='circle-indicators'>
                {
                    images && images.length
                        ? images.map((_, i) => <button
                            key={i}
                            className=
                            {currentSlide === i 
                                ? 'current-indicator'
                                : 'current-indicator inactive-indicator'
                            }
                            onClick={() => setCurrentSlide(i)}
                            
                        ></button>)
                        : null
                }

            </span>

        </div>
    )

}