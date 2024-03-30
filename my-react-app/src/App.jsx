import Header from "./Header"
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Button from "./button";
import Student from "./Student";
import UserGreeting from "./UserGreeting";
function App() {
  return(
    <>
    {/* <Header/>
    <Food/>
    <Footer/> */}
    {/* <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Button/>
    <Student name="Spongbob" age={49} isStudent={true}/>
    <Student name="Moath" age="22" isStudent={true}/>
    <Student name="Azoz" age={21} isStudent={true}/>   
    <Student name="Khalid" age={23} isStudent={false}/>   
    <Student name="Lary"/>    */}
    <UserGreeting isLoggedIn={true} username="Moath"/>
    

    </>

  );
}

export default App
