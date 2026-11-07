"use client"; 
import { useRef, useState } from "react";
export default function Banners(){
    let banner_let = useRef(0)
    const [banner_postion, setPosition] = useState({transform: `translateX(${-100 * banner_let.current}%)`})
    function switch_banners1(){
        banner_let.current += 1;
        if (banner_let.current == 4) banner_let.current = 0;
        update()
    }
    function switch_banners2(){
        banner_let.current -= 1;
        if (banner_let.current == -1) banner_let.current = 3;
        update()
    }
    function update(){
        setPosition({transform: `translateX(${-100 * banner_let.current}%)`});
    }
    return(<>
        <div className="banner-container" id="banner-container">
            <div className="banner_wrapper" id="bw1" style={banner_postion}><div className="banner" id="b1"><img src="/Room/room_logo_light.svg"/><p className="ROOM-m">SHARE YOUR MOMENTS</p><img src="/"/><button>Enter</button></div></div>
            <div className="banner_wrapper" id="bw2" style={banner_postion}><div className="banner" id="b2"></div></div>
            <div className="banner_wrapper" id="bw3" style={banner_postion}><div className="banner" id="b3"></div></div>
            <div className="banner_wrapper" id="bw4" style={banner_postion}><div className="banner" id="b4"></div></div>
        </div>
        <div className="banner_mn_btns">
            <div className="banner_mn_btn" id="banner_mn_btn_1" onClick={switch_banners2}><div/><img src="/icons/light_theme/Arrow left.svg" className="lt"/><img src="/icons/dark_theme/Arrow left.svg" className="dt"/></div>
            <div className="banner_mn_btn" id="banner_mn_btn_2" onClick={switch_banners1}><div/><img src="/icons/light_theme/Arrow right.svg" className="lt"/><img src="/icons/dark_theme/Arrow right.svg" className="dt"/></div>
        </div>
    </>)
}