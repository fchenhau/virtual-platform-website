import React, { useState, useEffect, useRef } from 'react';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'

const Test = () => {

    const refParallax = useRef(null);

    return (
        <Parallax pages={3} scrolling={true} horizontal={false} ref={refParallax}>
            <ParallaxLayer offset={0} speed={0.5} style={{ backgroundColor: 'red'}}>
                <div>
                    <img src="https://picsum.photos/300/200" width="300px" height="auto" />
                    <button onClick={() => refParallax.current.scrollTo(1)}>Scroll to page 2</button>
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={0.5} style={{ backgroundColor: 'green'}}>
                <div>
                    <img src={"https://picsum.photos/300/200"} />
                    <button onClick={() => refParallax.current.scrollTo(2)}>Scroll to page 3</button>
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={2} speed={0.5} style={{ backgroundColor: 'blue'}}>
                <div>
                    <img src={"https://picsum.photos/300/200"} />
                    <button onClick={() => refParallax.current.scrollTo(0)}>Back to top</button>
                </div>
            </ParallaxLayer>

            <ParallaxLayer offset={1.6} speed={-0.1} style={{ pointerEvents: 'none' }}>
                <img src={"https://picsum.photos/200/200"} />
            </ParallaxLayer>
        </Parallax>
    )
};

export default (Test);