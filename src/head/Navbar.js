import { Link } from "react-router-dom";
import './navbar.css';
import "./nav.jpg"
import { connect } from "react-redux";



const Navbar = ({ data }) => {
    // console.log(data,'data')
    return (
        <div className="nav">
            <div className="nav-l">
                <Link to="/">
                    <img src="https://img.freepik.com/free-photo/shopping-cart-3d-render-icon_460848-7081.jpg?w=996&t=st=1685102254~exp=1685102854~hmac=b73de49c56d6272054fa1cef58a37e9e29d1df2c38bfdf00114220b5450544c3" alt="Logo" className="logo" />
                    <h1 className="nav-h1">Dojo Shop</h1>
                </Link>
            </div>
            <div className="nav-link">
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/cart">
                    <img className="nav-cart-logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACX0lEQVR4nO2ZTWtUMRSGjx+gCK5V0I2g1iqIFDf+AkXcurMIKqIUkYLgzl/gQhBcuHEh1o+qiFhXIsW9GxfiIAz05n1z74yDH7gQ1IkETsHCdMpokntTfCCbIYd7niQnkxCR/zQMa+0xkoakG9I+AZgnOemcWyNNhGSxgsSSBuB2I2W4VGRhUJ+yLLcAOA3gm/ablKZB8qjKLJA8MqwvgDMq8kZyptVqbSD50ctYa/dJzpC8o7UyJTkD4KyKPJScMcbsVpFOI3evUSAJLfpxyRmSd1XkguQMyXO6vO5LzgAYU5Fq1dQJgDHJGZL3RjmjxWgAXoUQOd8AkQ8hRMbrFiF59Z9FfJEDKGucjX5ZljslBP6YUqPIyyASKjJV47I6GUzEWru/ptn4AmBTMBGtk6oGmVsSGgCPUosYYw7HELmYWOR9lGNRURQHEtfHFYmBH53Fe3wCiV/GmB0SC5JPEom8kJgAuJRCxFp7IqqIMeZgApFeu93eGFXEObfWfyjysrohKSD5NPKMTKQSmY44G2+TSKjIRMTZmE4m4pxb599RIszGj6qqtkpKADwLLNEneV1SY629rAnclJwheUhH853kjHNuvV56+p1OZ5vkDLROrLWnZJW8n8xLznS73c2Lx3oA10jujX5GioUx5jjJ7wG34td1y4T6P/lZFMX2uh9Nn/skfAMwp8nNLBMzM2pMdABYn8CfI+mvqZpUb1AM9SowKMZv61IHAL4OSepzqJjokHysCcz5ZHzzd279bTZUTHSMMXuWuTX2iqLYFSpGUqDF+kCPLb7NrpTQ38R4fgMN35vAjozp8AAAAABJRU5ErkJggg==" />
                    {data ? data.length : 0}


                </Link>
            </div>

        </div>
    );
}

const mapStateToProps = (state) => {
    return ({
        data: state.cart.Item,
        loading: state.loading,
        error: state.error
    })
}
export default connect(mapStateToProps, null)(Navbar);