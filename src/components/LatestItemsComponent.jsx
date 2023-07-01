import latestItems from '../assets/styles/latestItems.module.scss'
import CategoriesProp from './CategoriesProp'
import ButtonProp from './ButtonProp'
import beautifulAfrican from '../assets/img/HeaderImg/beautiful-african-female-feeling-grateful.jpg'

const LatestItemsComponent = () => {
  return (
    <div className={latestItems.latest}>
    <div className={latestItems.latestCategory}>
        <CategoriesProp 
        title="Latest News"
        text="add our new arrivals to your weekly ineup"
        />
        <ButtonProp/>
    </div>

    <div className={latestItems.wrapper}>

      <div className={latestItems.content}>
        <div className={latestItems.imgWrapper}>
        <img src= {beautifulAfrican} alt="" />
        <div className={latestItems.detail}>
         <p>Price : $120:00</p>
         <p>Lorem, ipsum dolor.</p>
        </div>
        </div>
      </div>


      <div className={latestItems.content}>
        <div className={latestItems.imgWrapper}>
        <img src= {beautifulAfrican} alt="" />
        <div className={latestItems.detail}>
         <p>Price : $120:00</p>
         <p>Lorem, ipsum dolor.</p>
        </div>
        </div>
      </div>


      <div className={latestItems.content}>
        <div className={latestItems.imgWrapper}>
        <img src= {beautifulAfrican} alt="" />
        <div className={latestItems.detail}>
         <p>Price : $120:00</p>
         <p>Lorem, ipsum dolor.</p>
        </div>
        </div>
      </div>


    </div>

    </div>
  )
}

export default LatestItemsComponent