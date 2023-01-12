
import './App.css';
import MyNavbar from './components/mynavbar/mynavbar.js';
import MyLandingPage from './components/landingpage/landingpage';
import NewsSection from './components/newssection/Newssection';
import BlogSection from './components/blogs/blogs';
// import MyFooter from './components/footer/Myfooter';



function App() {
  return (
    <>
    <MyNavbar/>
    <MyLandingPage/>
    <NewsSection/>
    <BlogSection/>
    <MyFooter/>

    </>
  );
}

export default App;
