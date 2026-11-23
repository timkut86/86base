import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "The SET - 86base",
  description: "",
};
import "../../css/SET.css"
export default function SET(){ 
    return(<>
        <main className="SET_main">
            <div className="SET_block">
              <img className="SET_title_logo" src="/SET/logo_green.svg"/>
              <div className="SET_title">
                  <p className="SET-text">everything!</p>
                  <Link className="btn" href="https://set-60yn.onrender.com/">Go shopping</Link>
              </div>
            </div>
            <p className="SET-text italic">Shop of EveryThing (SET) is a good marketplace of everything. Only high-quality products directly from manufacturers. SET everything!</p>
            <h2 className="SET-title">SET your wardrobe</h2>
            <div className="SET_image_block">
              <img src="/SET/The SET's products examples/wardrobe/1.avif"/>
              <img src="/SET/The SET's products examples/wardrobe/2.avif" alt="" />
              <img src="/SET/The SET's products examples/wardrobe/3.jpg" alt="" />
            </div>
            <h2 className="SET-title">SET your self</h2>
            <div className="SET_image_block">
              <img src="/SET/The SET's products examples/self/1.avif"/>
              <img src="/SET/The SET's products examples/self/2.png"/>
              <img src="/SET/The SET's products examples/self/3.jpg"/>
            </div>
            <h2 className="SET-title">SET your home</h2>
            <div className="SET_image_block">
              <img src="/SET/The SET's products examples/home/1.avif"/>
              <img src="/SET/The SET's products examples/home/2.avif"/>
              <img src="/SET/The SET's products examples/home/3.avif"/>
            </div>
            <p className="SET-text italic">The Shop of EveryThing is not a real marketplace.</p>
        </main>
    </>)
}