import './App.css';
import Header from './components/Header';
import Item from './components/item'
import Accessories from './assets/Desktop-Accessories.jpg'
import ModelS from './assets/Desktop-ModelS.jpeg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg'
import ModelY from './assets/Desktop-ModelY.jpeg'
import SolarPanels from './assets/Desktop-SolarPanels.jpeg'
import SolarRoofs from './assets/Desktop-SolarRoof.jpeg'

function App() {
  return (
    <div className="App">
        <Header/>
        <div className="item__container">
            <Item 
                title="Lower cost solar panels"
                desc = "Refundable"
                desclink=''
                backgroundimg = {SolarPanels}
                leftBtnText = 'ORDER NOW'
                leftBtnLink = ''
                rightBtnText = 'LEARN MORE'
                rightBtnLink = ''
                twoButtons = 'true'
                first
            />
            <Item 
                title="Solar Roofs"
                desc = "Refundable"
                desclink=''
                backgroundimg = {SolarRoofs}
                leftBtnText = 'ORDER NOW'
                leftBtnLink = ''
                rightBtnText = 'LEARN MORE'
                rightBtnLink = ''
                twoButtons = 'true'
                
            />
            <Item 
                title="Model S"
                desc = "Refundable"
                desclink=''
                backgroundimg = {ModelS}
                leftBtnText = 'ORDER NOW'
                leftBtnLink = ''
                rightBtnText = 'LEARN MORE'
                rightBtnLink = ''
                twoButtons = 'true'
                
            />
            <Item 
                title="Model Y"
                desc = "Refundable"
                desclink=''
                backgroundimg = {ModelY}
                leftBtnText = 'ORDER NOW'
                leftBtnLink = ''
                rightBtnText = 'LEARN MORE'
                rightBtnLink = ''
                twoButtons = 'true'
                
            />
            <Item 
                title="Model X"
                desc = "Refundable"
                desclink=''
                backgroundimg = {ModelX}
                leftBtnText = 'ORDER NOW'
                leftBtnLink = ''
                rightBtnText = 'LEARN MORE'
                rightBtnLink = ''
                twoButtons = 'true'
                
            />
            <Item 
                title="Model 3"
                desc = "Refundable"
                desclink=''
                backgroundimg = {Model3}
                leftBtnText = 'ORDER NOW'
                leftBtnLink = ''
                rightBtnText = 'LEARN MORE'
                rightBtnLink = ''
                twoButtons = 'true'
                
            />
            <Item 
                title="Accessories"
                desc = "Refundable"
                desclink=''
                backgroundimg = {Accessories}
                leftBtnText = 'ORDER NOW'
                leftBtnLink = ''
                rightBtnText = 'LEARN MORE'
                rightBtnLink = ''
                twoButtons = 'true'
                
            />
        </div>
    </div>
  );
}

export default App;
