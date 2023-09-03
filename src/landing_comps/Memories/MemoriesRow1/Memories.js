import React from 'react';
import photo1 from '../../../ui/memories/row_1/photo1.png';
import photo2 from '../../../ui/memories/row_1/photo2.png';
import photo3 from '../../../ui/memories/row_1/photo3.png';
import photo4 from '../../../ui/memories/row_1/photo4.png';
import photo5 from '../../../ui/memories/row_1/photo5.png';
import photo6 from '../../../ui/memories/row_1/photo6.png';
import photo7 from '../../../ui/memories/row_1/photo7.png';
import photo8 from '../../../ui/memories/row_1/photo8.png';
import photo9 from '../../../ui/memories/row_1/photo9.png';
// import photo10 from '../../ui/memories/row_1/photo10.png';
// import photo11 from '../../ui/memories/row_1/photo11.png';
// import photo12 from '../../ui/memories/row_1/photo12.png';
// import photo13 from '../../ui/memories/row_1/photo13.png';
// import photo14 from '../../ui/memories/row_1/photo14.png';
// import photo15 from '../../ui/memories/row_1/photo15.png';
// import photo16 from '../../ui/memories/row_1/photo16.png';
// import photo17 from '../../ui/memories/row_1/photo17.png';
// import photo18 from '../../ui/memories/row_1/photo18.png';
import './Memories.css';


function Memories() {
  return (
        <div className="row-1__wrapper">
            <div class="row-1__marquee-infinite">
                <div>
                    <span>
                        <img src={photo1} alt="photo1" />
                        <img src={photo2} alt="photo2" />
                        <img src={photo3} alt="photo3" />
                        <img src={photo4} alt="photo4" />
                        <img src={photo5} alt="photo5" />
                        <img src={photo6} alt="photo6" />
                        <img src={photo7} alt="photo7" />
                        <img src={photo8} alt="photo8" />
                        <img src={photo9} alt="photo9" />
                    </span>
                    <span>
                        <img src={photo1} alt="photo1" />
                        <img src={photo2} alt="photo2" />
                        <img src={photo3} alt="photo3" />
                        <img src={photo4} alt="photo4" />
                        <img src={photo5} alt="photo5" />
                        <img src={photo6} alt="photo6" />
                        <img src={photo7} alt="photo7" />
                        <img src={photo8} alt="photo8" />
                        <img src={photo9} alt="photo9" />
                        {/* <img src={photo10} alt="photo10" />
                        <img src={photo11} alt="photo11" />
                        <img src={photo12} alt="photo12" />
                        <img src={photo13} alt="photo13" />
                        <img src={photo14} alt="photo14" />
                        <img src={photo15} alt="photo15" />
                        <img src={photo16} alt="photo16" />
                        <img src={photo17} alt="photo17" />
                        <img src={photo18} alt="photo18" /> */}
                    </span>

                </div>
            </div>
        </div>
  )
}

export default Memories
