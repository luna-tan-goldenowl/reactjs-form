import { useEffect, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import image1 from './assets/image/classicAndModernView1.png';
import image2 from './assets/image/classicAndModernView2.png';
import image3 from './assets/image/classicAndModernView3.png';
import './Home.scss';

function Home() {

  let navigate = useNavigate();

  let key = localStorage.getItem('account');

  useEffect (() => {
    if (key === null){
      navigate('/');
    }
  })

  return (
    <div className="container">
      <div className="grid-column-1">
        <p className='grid-1-title'>GOODMOODS</p>
        <div className="line">
          <div className="line-1"></div>
          <div className="line-2"></div>
        </div>
        <ul className="grid-1-content">
          <li className='grid-1-li'>FB</li>
          <li className='grid-1-li'>TW</li>
          <li className='grid-1-li'>IG</li>
        </ul>
      </div>

      <div className="grid-column-5-1">
        <div className="casestudy">
          <p>CASE STUDY</p>
          <div className="big-line"></div>
        </div>
        <div className="classic-modern">
          <p>Classic</p>
          <p>& Modern</p>
        </div>
        <div className="change-page">
          <p>Next</p>
          <p>Prev</p>
        </div>
        <div className="page">
          <span>01 / <span className='sum-page'>04</span> </span>
        </div>
      </div>

      <div className="grid-column-5-2">
        <div className="project-detail">
          <p>Project Details</p>
        </div>
        <div className="project-info">
          <p>Las vegas</p>
          <p>2022</p>
          <p>Exterior & Interior</p>
        </div>
        <div className="small-line"></div>
        <div className="see-casestudy">
          <p>See case study</p>
        </div>
        <div className="small-image">
          <img src={image1} alt="image1" />
          <img src={image2} alt="image2" />
          <img src={image3} alt="image3" />
        </div>
      </div>
    </div>

  );
}

export default memo(Home);
