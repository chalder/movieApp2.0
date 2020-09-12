import React from 'react'

const HeroImage = ({ image, title, text }) => {
    const heroimage = {
        background: `
            linear-gradient(
                to bottom, rgba(0,0,0,0)
                39%,rgba(0,0,0,0)
                41%,rgba(0,0,0,0.65)
                100%
            ),
            url(${image}),
            #1c1c1c`,
        backgroundSize: '100%, cover',
        // backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center, center',
        width: '100%',
        height: '600px',
        position: 'relative',
        animation: 'animateHeroimage 1s',
    };

    return (
        <div style={heroimage}>
            <div className="heroimage-content">
                <div className="heroimage-text">
                    <h1>{title}</h1>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default HeroImage;