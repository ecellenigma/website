'use client'
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function HeroParticlejs() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);
  return (
    <div className="relative">
      <Particles
            className="absolute -z-10"
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    // color: {
                    //     value: "#0d47a1",
                    // },
                },
                fpsLimit: 120,
                interactivity: {
                    // detect_on: canvas,
                    events: {
                        onClick: {
                            enable: false,
                            mode: "remove",
                        },
                        onhover: {
                            enable: false,
                            mode: "repulse"
                          },
                        resize: true,
                    },
                    modes: {
                        grab: {
                            distance: 400,
                            line_linked: {
                              opacity: 1
                            }
                          },
                          bubble: {
                            distance: 400,
                            size: 40,
                            duration: 2,
                            opacity: 8,
                            speed: 3
                          },
                          repulse: {
                            distance: 200,
                            duration: 0.4
                          },
                          push: {
                            particles_nb: 4
                          },
                          remove: {
                            particles_nb: 2
                          }
                    },
                },
                particles: {
                    color: {
                        value: "#f26938",
                    },
                    line_linked: {
                        enable: true,
                        distance: 192,
                        color: "#f26938",
                        opacity: 0.936,
                        width: 1
                      },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: "out",
                        random: false,
                        speed: 3,
                        straight: false,
                        bounce: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    },
                    number: {
                        density: {
                            enable: true,
                            value_area: 1000
                        },
                        value: 77,
                    },
                    opacity: {
                        value: 0.5,
                        random: false,
                        anim: {
                            enable: false,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
                        }
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                            width: 0,
                            color: "#000000"
                          },
                          polygon: {
                            nb_sides: 5
                          },
                    },
                    size: {
                        value: 4,
                        random: true,
                        anim: {
                            enable: false,
                            speed: 40,
                            size_min: 0.1,
                            sync: false
                        }
                    },
                },
                detectRetina: true,
            }}
        />     
    </div>
  );
}

export default HeroParticlejs
