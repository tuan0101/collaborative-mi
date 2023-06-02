import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink
            className={`${selectedPage === lowerCasePage ? "text-yellow" : ""
                } hover:text-yellow transition duration-500`}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    );
};



const Navbar = ({ selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreen = useMediaQuery("(min-width: 768px)");

    return (
        <div>

            <nav className={`z-40 w-full absolute  top-0 py-6`}>
                <div className="flex items-center justify-between mx-auto w-5/6">
                    {/* make bar align to the right */}
                    <h4 className="font-playfair text-3xl font-bold"></h4>  
                    {/* desktop nav */}
                    {isAboveSmallScreen ? (
                        <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
                            <Link
                                page="Home"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="About"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Mission"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Donate"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Contact"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
                
            </nav>
            <div className="fixed right-6 bottom-6">
            <AnchorLink
            className="bg-gradient-rainblue
              hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("home")}
            href="#home"
          >
                        <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-40 max-w-[40px]"
              src="assets/scrollup.png"
            />
          </AnchorLink>
            </div>
                
        </div>
    )
}

export default Navbar;