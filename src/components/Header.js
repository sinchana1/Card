import CheckBox from "./CheckBox";

const Header = () => {
    return (
        <div className="nav-container">
            <div className="position-relative">
                <CheckBox />
            </div>
            <div className="cart-block">
                <div>
                    <h3 className="selected-list">2/2 ITEMS SELECTED</h3>
                </div>
                <div className="nav-right d-flex align-center">
                    <h4 className="mr-5">REMOVE</h4>
                    <div className="line mr-5"></div>
                    <h4 className="mr-5">MOVE TO WISHLIST</h4>
                </div>
            </div>
        </div>
    )
}

export default Header;