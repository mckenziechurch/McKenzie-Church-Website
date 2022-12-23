import background from './Background.css'
import Particles from 'react-tsparticles';
import {loadFull} from 'tsparticles'
import twinkles from './twinkles.json'

const loadBackground = (params) => {
    const backgroundInit = async (main) => {
        await loadFull(main)
    };

    return (
      <div className={'twinkleBackground'}>
          <Particles id={'tsparticles'}
          init={backgroundInit}></Particles>
      </div>
    );
};
export default loadBackground;
