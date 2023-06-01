/* eslint-disable react/no-unescaped-entities */
import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'

import state from '../store'

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion'

const Home = () => {
  const snap = useSnapshot(state)

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation('down')}>
            <img 
              src="../../public/threejs.png" 
              alt="logo" 
              className="w-8 h-8 object-contain" 
            />
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className='head-text'>
                LET'S <br /> DO IT <br /> ON 3D !
              </h1>
            </motion.div>
            <motion.div>
              <p>Three.js allows the creation of GPU-accelerated 3D animations using a JavaScript language as part of a website without relying 
                on accommodated browser extensions. This is possible thanks to the advent of WebGL. 
                Top-notch libraries like Three.js or GLGE, SceneJS, PhiloGL or a number of other libraries make it possible for the author to author 
                complex 3D computer animations that display in the browser without the effort required for a traditional stand-alone application or 
                a plugin.
              </p>
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home