import React from 'react';
import './animation.css';

const ParallaxEffect = () => {
    return (
        <section>
            <section className="parallax parallax-1">
                <video autoPlay muted loop>
                    <source src="./Background 1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="parallax-inner">
                    <h1>Scroll Down</h1>
                </div>
            </section>
            <h2>Parallax Effect</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minima fuga debitis quasi eius aliquid
                sapiente? Cumque blanditiis quibusdam, ex totam aliquam provident alias culpa, sit illo, eum doloribus
                doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reprehenderit voluptatum
                aperiam pariatur numquam praesentium recusandae, ipsa at iusto eveniet, distinctio sunt dolore nemo veniam
                maiores vitae deserunt cum ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
                minima fuga debitis quasi eius aliquid sapiente? Cumque blanditiis quibusdam, ex totam aliquam provident alias
                culpa, sit illo, eum doloribus doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
                reprehenderit voluptatum aperiam pariatur numquam praesentium recusandae, ipsa at iusto eveniet, distinctio
                sunt dolore nemo veniam maiores vitae deserunt cum ducimus.</p>
            <section className="parallax parallax-2">
                <video autoPlay muted loop>
                    <source src="video2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="parallax-inner">
                    <h1>Parallax Effect</h1>
                </div>
            </section>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minima fuga debitis quasi eius aliquid
                sapiente? Cumque blanditiis quibusdam, ex totam aliquam provident alias culpa, sit illo, eum doloribus
                doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reprehenderit voluptatum
                aperiam pariatur numquam praesentium recusandae, ipsa at iusto eveniet, distinctio sunt dolore nemo veniam
                maiores vitae deserunt cum ducimus.</p>
            <section className="parallax parallax-3">
                <video autoPlay muted loop>
                    <source src="./Background 1.mp4" type="video/mp4" />
                    
                </video>
                <div className="parallax-inner">
                    <h1>Scroll Up</h1>
                </div>
            </section>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minima fuga debitis quasi eius aliquid
                sapiente? Cumque blanditiis quibusdam, ex totam aliquam provident alias culpa, sit illo, eum doloribus
                doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reprehenderit voluptatum
                aperiam pariatur numquam praesentium recusandae, ipsa at iusto eveniet, distinctio sunt dolore nemo veniam
                maiores vitae deserunt cum ducimus.</p>
        </section>
    );
}

export default ParallaxEffect;
