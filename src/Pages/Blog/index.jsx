import blogpage from '../Blog/blog.module.scss'
import a from '../../assets/img/HeaderImg/a.jpg'
import b from '../../assets/img/HeaderImg/b.jpg'
import c from '../../assets/img/HeaderImg/c.jpg'
import Form from '../../Pages/form/index'
import LatestItemsComponent from '../../components/LatestItemsComponent'

const Blog = () => {
  return (
    <div>
      {/* 
For the  writeup */}

      <div className={blogpage.title}>
        <h1>The Top Ten Most Expensive perfumes in The World</h1>
      </div>

      {/* grid container */}

      <div className={blogpage.blogpage}>

        {/* 
        content
         */}

        <div className={blogpage.content}>

          <div className={blogpage.blogs}>
            <div className={blogpage.blogsImg}>
              <img src={a} alt="" />
            </div>
            <div className={blogpage.blogsText}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Beatae labore non ea adipisci inventore neque iure dignissimos
                odio vel quia unde, atque nostrum. Saepe, ut. Quas natus voluptate tenetur
                veritatis corrupti laborum reiciendis molestias aliquid soluta placeat, cum
                assumenda, nesciunt eius debitis repellendus recusandae unde earum quo! Aspernatur
                animi perspiciatis nemo nobis ipsa autem repellat praesentium fuga eveniet ea corrupti
                officia eaque rerum, in ab, ex at temporibus exercitationem esse quas excepturi provident
                soluta? Aut corporis eaque minus fugit sequi, consequatur placeat maxime perferendis
                saepe officiis voluptas odio ipsam corrupti quis,
                voluptatum quia perspiciatis temporibus beatae. Perferendis hic ad quidem.
              </p>
              <br /> <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Beatae labore non ea adipisci inventore neque iure dignissimos
                odio vel quia unde, atque nostrum. Saepe, ut. Quas natus voluptate tenetur
                veritatis corrupti laborum reiciendis molestias aliquid soluta placeat, cum
                assumenda, nesciunt eius debitis repellendus recusandae unde earum quo! Aspernatur
                animi perspiciatis nemo nobis ipsa autem repellat praesentium fuga eveniet ea corrupti
                officia eaque rerum, in ab, ex at temporibus exercitationem esse quas excepturi provident
                soluta? Aut corporis eaque minus fugit sequi, consequatur placeat maxime perferendis
                saepe officiis voluptas odio ipsam corrupti quis,
                voluptatum quia perspiciatis temporibus beatae. Perferendis hic ad quidem.
              </p>
            </div>
          </div>


          {/* second content */}


          <div className={blogpage.blogsImg}>
            <img src={b} alt="" />
          </div>
          <div className={blogpage.blogsText}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Beatae labore non ea adipisci inventore neque iure dignissimos
              odio vel quia unde, atque nostrum. Saepe, ut. Quas natus voluptate tenetur
              veritatis corrupti laborum reiciendis molestias aliquid soluta placeat, cum
              assumenda, nesciunt eius debitis repellendus recusandae unde earum quo! Aspernatur
              animi perspiciatis nemo nobis ipsa autem repellat praesentium fuga eveniet ea corrupti
              officia eaque rerum, in ab, ex at temporibus exercitationem esse quas excepturi provident
              soluta? Aut corporis eaque minus fugit sequi, consequatur placeat maxime perferendis
              saepe officiis voluptas odio ipsam corrupti quis,
              voluptatum quia perspiciatis temporibus beatae. Perferendis hic ad quidem.
            </p>
          </div>

          {/* third content */}
          <div className={blogpage.blogSideGrid}>
            <div className={blogpage.blogsImgGrid}>
            <img src={c} alt="" />
            </div>
            <div className={blogpage.blogsText}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Beatae labore non ea adipisci inventore neque iure dignissimos
                odio vel quia unde, atque nostrum. Saepe, ut. Quas natus voluptate tenetur
                veritatis corrupti laborum reiciendis molestias aliquid soluta placeat, cum
                assumenda, nesciunt eius debitis repellendus recusandae unde earum quo! Aspernatur
                animi perspiciatis nemo nobis ipsa autem repellat praesentium fuga eveniet ea corrupti
                officia eaque rerum, in ab, ex at temporibus exercitationem esse quas excepturi provident
                soluta? Aut corporis eaque minus fugit sequi, consequatur placeat maxime perferendis
                saepe officiis voluptas odio ipsam corrupti quis,
                voluptatum quia perspiciatis temporibus beatae. Perferendis hic ad quidem.
              </p>
            </div>
          </div>
          <div className={blogpage.lastContent}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Beatae labore non ea adipisci inventore neque iure dignissimos
              odio vel quia unde, atque nostrum. Saepe, ut. Quas natus voluptate tenetur
              veritatis corrupti laborum reiciendis molestias aliquid soluta placeat, cum
              assumenda, nesciunt eius debitis repellendus recusandae unde earum quo! Aspernatur
              animi perspiciatis nemo nobis ipsa autem repellat praesentium fuga eveniet ea corrupti
              officia eaque rerum, in ab, ex at temporibus exercitationem esse quas excepturi provident
              soluta? Aut corporis eaque minus fugit sequi, consequatur placeat maxime perferendis
              saepe officiis voluptas odio ipsam corrupti quis,
              voluptatum quia perspiciatis temporibus beatae. Perferendis hic ad quidem.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Beatae labore non ea adipisci inventore neque iure dignissimos
              odio vel quia unde, atque nostrum. Saepe, ut. Quas natus voluptate tenetur
              veritatis corrupti laborum reiciendis molestias aliquid soluta placeat, cum
              assumenda, nesciunt eius debitis repellendus recusandae unde earum quo! Aspernatur
              animi perspiciatis nemo nobis ipsa autem repellat praesentium fuga eveniet ea corrupti
            </p>
          </div>



        </div>

        {/* sideContent */}

        <div className={blogpage.sideContent}>
           {/* search categories */}
        <div className={blogpage.searchBoxCategories}>
            <input type="text" placeholder='Search'/>

            <ul>
             <h2>Categories</h2>
              <li><a href="">Development(20)</a></li>
              <li><a href="">Designs(40)</a></li>
              <li><a href="">LifeStyle(14)</a></li>
              <li><a href="">Beauty(32)</a></li>
              <li><a href="">Fashion(29)</a></li>
            </ul>
            </div>

             <div className={blogpage.achives}>
              <h2>Achives</h2>
               {/* boxes */}
               <div className={blogpage.Box}>
                     <p>March 2020</p>
                     <p>June 2020</p>
               </div>

               <div className={blogpage.Box}>
                     <p>March 2020</p>
                     <p>June 2020</p>
               </div>

               <div className={blogpage.Box}>
                     <p>March 2020</p>
                     <p>June 2020</p>
               </div>
        </div>


        <div className={blogpage.smallContentBlog}>
        <div className={blogpage.smallContentBlogTitle}>
        <h2>Read Next</h2>
        </div>
              <div className={blogpage.smallContent}>
                    <img src={c} alt="" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                  </p>
              </div>


              <div className={blogpage.smallContent}>
                    <img src={c} alt="" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                 </p>
              </div>

              </div>




        </div>

       

      </div>




<Form />
<LatestItemsComponent />

    </div>
  )
}

export default Blog