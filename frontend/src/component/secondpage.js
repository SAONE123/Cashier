import SlidePicture from "./slider/slidepicture";

function Secondpage() {
  return (
    <>
      <secondpages>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#c921c9"
            fill-opacity="1"
            d="M0,96L26.7,101.3C53.3,107,107,117,160,133.3C213.3,149,267,171,320,160C373.3,149,427,107,480,128C533.3,149,587,235,640,234.7C693.3,235,747,149,800,122.7C853.3,96,907,128,960,133.3C1013.3,139,1067,117,1120,106.7C1173.3,96,1227,96,1280,96C1333.3,96,1387,96,1413,96L1440,96L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
          ></path>
        </svg>
        <div className="newbox">
          <div className="boxslider">
            <SlidePicture />
          </div>
        </div>
      </secondpages>
    </>
  );
}

export default Secondpage;
