import { Carousel } from 'react-bootstrap';

function NewsSection() {
  return (
    <Carousel className='' style={{width:'70%',height:'100vh',display:'flex',justifyContent:'center',marginLeft:'150px',borderRadius:'10px'}}>
        
      <Carousel.Item style={{}} >
      <h1 className='text-center mt-5 mb-5'>
            News
        </h1>
        <img
          className="d-block w-100"
          src="Assests/images/news1.jpg"
          alt="First news"
          style={{width:'100%',height:'100%'}}
        />
        <Carousel.Caption style={{backgroundColor:''}}>
          <h3>Pakistan to miss World Cup with heavy heart</h3>
          <p>Three-time world champions Pakistan will be missing the 16-team event following their inability to finish among top four spots in the Asia Cup. All the other Asian hockey-playing countries – India, Japan, Malaysia, and Korea – will be seen in action.For the first time, sixteen countries are competing in the Hockey World Cup that earlier was restricted to just 12 countries.Yet, Pakistan who are ranked 17th in the world are missing the four-yearly action.“It is really unfortunate that a country like Pakistan is not part of the 16-team World Cup. We cannot get an easier opportunity of qualifying for the event. It was just a cakewalk, yet we missed it. As a former world champion, I feel really bad and depressed not to see Pakistan as one of the contesting teams in India,” Khawaja Junaid, one of the members of World Cup 1994 winning team said. “I am really concerned about the Pakistan hockey players who could have gained necessary exposure by playing against the world’s best teams,” he said.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <h1 className='text-center mt-5 mb-5'>
            News
        </h1>
        <img
          className="d-block w-100"
          src="Assests/images/news2.jpg"
          alt="Second news"
          style={{}}
        />
        <Carousel.Caption style={{backgroundColor:'black'}}>

          <h3>Pakistan Hockey Federation Under Fire for Failure to Qualify for 2023 Hockey World Cup</h3>
          <p>Pakistan’s Hockey woes continue as the Men in Green failed to qualify for the 2023 Hockey World Cup. Pakistan, currently       ranked  17th in the world, failed to qualify for the mega-event after a disappointing outing in the Asia Cup.Former Pakistani hockey player, Khawaja Junaid, lashed out at the Pakistan Hockey Federation (PHF) when the country was left out of the Men’s Hockey World Cup 2023. After Pakistan failed to finish among the top four in the Asia Cup, he said, “It is really unfortunate that a country like Pakistan is not part of the 16-team World Cup.”</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <h1 className='text-center mt-5 mb-5'>
            News
        </h1>
        <img
          className="d-block w-100"
          src="Assests/images/news3.jpg"
          alt="Third news"
        />

        <Carousel.Caption style={{backgroundColor:'black'}}>
          <h3>Training camp for Asian Games in February</h3>
          <p>Sources within the Pakistan Hockey Federation (PHF) said that during the domestic season different competitions will be organised. The training camp probable players will also participate in the domestic events.The Asian Games will be held from September 23 to October 8 in Hangzhou, China. Keeping in mind that there is still a long time before the Asian Games the national team's training camp will be organised in three phases.It has to be mentioned that Green-shirts head coach Siegfried Aikman had also recommended to arrange the first phase of the training camp in February. He also recommended to PHF that Green-shirts should play maximum international matches against top Asian and European teams.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <h1 className='text-center mt-5 mb-5'>
            News
        </h1>
        <img
          className="d-block w-100"
          src="Assests/images/news4.jpg"
          alt="Fourth news"
        />
        <Carousel.Caption style={{backgroundColor:'black'}}>
          <h3>Mardan, Peshawar Secure Win In PM Youth Talent Hunt Women Hockey League</h3>
          <p>PESHAWAR, (APP - UrduPoint / Pakistan Point News - 4th Jan, 2023 ) :Spirited Mardan and strong Peshawar recorded opening day victory in the Prime Minister Muhammad Shehbaz Sharif Youth Women Talent Hunt Hockey League which got underway here at Abdul Wali Khan sports Complex on Wednesday.Former national athlete Mariyyah Samin, Deputy Director Shaheed Benazir Bhutto Women University formally inaugurated the Championship with representative and Assistant Project Manager Higher education Commissioner (HEC) Iftikhar Alam. Teams from Bannu, Mardan, Peshawar, Swat and Hazara are taking part in the event which will continue till January 10.In the opening match, Mardan defeated Hazara by 3-0 in which Nida, Mehaq and Asma scored one goal each in the 45th, 59th and 66th minute on the field attempt. Both Mardan and Hazara tied the tally till the end of the first two quarters but these were the two last quarters in which Mardan kept up the pressure and scored three goals.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}


export default NewsSection;