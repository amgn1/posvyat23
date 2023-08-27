import React from 'react';
import photo1 from '../../../ui/memories/row_2/photo1.png';
import photo2 from '../../../ui/memories/row_2/photo2.png';
import photo3 from '../../../ui/memories/row_2/photo3.png';
import photo4 from '../../../ui/memories/row_2/photo4.png';
import photo5 from '../../../ui/memories/row_2/photo5.png';
import photo6 from '../../../ui/memories/row_2/photo6.png';
import photo7 from '../../../ui/memories/row_2/photo7.png';
import photo8 from '../../../ui/memories/row_2/photo8.png';
import photo9 from '../../../ui/memories/row_2/photo9.png';
import './MemoriesRow2.css';

// TODO: догрузить остальные фото
function MemoriesRow2() {
  return (
        <div className="row-2__wrapper">
            <div class="row-2__marquee-infinite">
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
                    </span>

                </div>
            </div>
        </div>
  )
}

export default MemoriesRow2