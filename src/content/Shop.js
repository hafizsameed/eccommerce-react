
import "./Shop.css"
import Game_cards from "./Components/Shop-Cards/Game-Cards";
import Cloth_cards from "./Components/Shop-Cards/Cloth-Cards";
import Decour_cards from "./Components/Shop-Cards/Decour-Cards";
import sale from "./sale.png"




const Shop = () => {
    return (
        <div className="Shop">
            <div className="sale-div">
                <div className="sale-color"></div>
                <img src={sale} alt="Sale" className="Sale-img" />
                <span className="sale-title">
                    <h1>Summer Sale</h1>
                    <p>70% Off !!!!</p>
                    </span>
                <div className="sale-color2"></div>
            </div>
            <section className="Shop-g">

                <div className="game-div">
                    {/* <img src="https://cdn.homeshopping.pk/templates/ResGarden/images/bannr-homepage-small.gif" alt="" className="game-div-img" /> */}
                    <img src="https://wallpaperaccess.com/full/1329171.jpg" alt="" className="game-div-img" />
                    <h3 className="game-div-h3" >Acquire hardware for ultimate gaming</h3>
                    <Game_cards />
                </div>
                <div className="cloth-div">
                    {/* <img className="cloth-div-img" src="https://previews.123rf.com/images/stylephotographs/stylephotographs1606/stylephotographs160600049/58112233-panorama-with-many-shirts-on-clothing-rack-in-assorted-shades-of-grey-3d-rendering.jpg" alt="" /> */}
                    <img className="cloth-div-img" src="https://thumbs.dreamstime.com/b/clothing-rack-women-s-closet-organizing-clothes-spring-cleaning-fashion-store-outlet-sale-panoramic-black-white-230844318.jpg" alt="" />
                    <h3 className="cloth-div-h3" >Scroll through the Best</h3>

                    <Cloth_cards />
                </div>

                <div className="decour-div">
                    <img className="decour-div-img" src="https://images.photowall.com/interiors/65231/landscape/wallpaper/room40.jpg?w=2000&q=80" alt="" />
                    <h3 className="decour-div-h3" >Showcase your Creativity</h3>

                    <Decour_cards />
                </div>



            </section>




        </div>
    );
}

export default Shop;