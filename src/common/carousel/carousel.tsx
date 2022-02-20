import React from 'react';
import s from './style.module.css'

type CarouselType = {
    delay: number
    data: Array<{ title: string }>
    length: number
}

const Carousel = ({delay, data, length}: CarouselType) => {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        //@ts-ignore
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === data.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className={s.slideshow}>
            <div
                className={s.slideshowSlider}
                style={{transform: `translate3d(${-index * 33}%, 0, 0)`, width: `${length * 540}px`}}
            >
                {data.map((el, index) => {
                        const firstWord = el.title.split('-')[0]
                        const secondWords = el.title.split('-')[1]
                        return <div
                            className={s.slide}
                            key={index}
                        >
                            <p className={s.slide__title}><span
                                className={s.slide__title__first}>{firstWord}</span>-{secondWords}</p>
                        </div>
                    }
                )}
            </div>

            <div className={s.slideshowDots}>
                {data.map((_, idx) => (
                    <div
                        key={idx}
                        className={`${s.slideshowDot} ${index === idx && s.slideshowDot + ' ' + s.active}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
