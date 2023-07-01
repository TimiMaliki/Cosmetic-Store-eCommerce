import categoriesProp from '../assets/styles/categoriesProp.module.scss'

const CategoriesProp = (props) => {
  return (
    <div className={categoriesProp.categoriesProp}>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
     
    </div>
   
  )
}

export default CategoriesProp