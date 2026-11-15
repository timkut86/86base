'use client'
import { useState } from "react";
import { useSearchParams } from "next/navigation";
export default function _86bid_page(){
    const [apm_page, set_apmp] = useState([{display: `flex`}, {display: `none`}, {display: `none`}, {display: `none`}])
    function changeTo1(){
        set_apmp([{display: `flex`}, {display: `none`}, {display: `none`}, {display: `none`}])
    }
    function changeTo2(){
        set_apmp([{display: `none`}, {display: `flex`}, {display: `none`}, {display: `none`}])
    }
    function changeTo3(){
        set_apmp([{display: `none`}, {display: `none`}, {display: `flex`}, {display: `none`}])
    }
    function changeTo4(){
        set_apmp([{display: `none`}, {display: `none`}, {display: `none`}, {display: `flex`}])
    }
    return(<>
        <main>
            <h2 className="fw5 title"></h2>
            <div className="account_page">
                <div className="account_menu">
                    <div className="cc"><div className="c"></div></div>
                    <div className="account_menu_buttons">
                        <button className="account_menu_btn" onClick={changeTo1}><img src="/icons/light_theme/Home.svg" className="lt"/><img src="/icons/dark_theme/Home.svg" className="dt"/>Home</button>
                        <button className="account_menu_btn" onClick={changeTo2}><img src="/icons/light_theme/User.svg" className="lt"/><img src="/icons/dark_theme/User.svg" className="dt"/>Personal Info</button>
                        <button className="account_menu_btn" onClick={changeTo3}><img src="/icons/light_theme/Shield.svg" className="lt"/><img src="/icons/dark_theme/Shield.svg" className="dt"/>Privacy</button>
                        <button className="account_menu_btn" onClick={changeTo4}><img src="/icons/light_theme/Credit card.svg" className="lt"/><img src="/icons/dark_theme/Credit card.svg" className="dt"/>Payments</button>
                    </div>
                </div>
                <div className="account_page_main">
                    <div className="apm" id="apm1" style={apm_page[0]}>
                        <div className="apm1_user">
                            <img src="/icons/profile_default.png"/>
                            <div className="apm1_user_text">
                                <p className="fw5">User1234567890</p>
                                <p className="fw4">#1234567890</p>
                            </div>
                        </div>
                        <button className="apm1_button" onClick={changeTo2}>
                            <img src="/icons/light_theme/User.svg" className="lt apm1_button_image"/><img src="/icons/dark_theme/User.svg" className="dt apm1_button_image"/>
                            <div className="apm1_button_text">
                                <p className="fw5">Personal Info</p>
                                <p className="fw4">Your name, photo, age, ID, change password, delete ID</p>
                            </div>
                            <img src="/icons/light_theme/Arrow right.svg" className="lt apm1_button_image"/><img src="/icons/dark_theme/Arrow right.svg" className="dt apm1_button_image"/>
                        </button>
                        <button className="apm1_button" onClick={changeTo3}>
                            <img src="/icons/light_theme/Shield.svg" className="lt apm1_button_image"/><img src="/icons/dark_theme/Shield.svg" className="dt apm1_button_image"/>
                            <div className="apm1_button_text">
                                <p className="fw5">Privacy</p>
                                <p className="fw4">Your privacy on 86B services</p>
                            </div>
                            <img src="/icons/light_theme/Arrow right.svg" className="lt apm1_button_image"/><img src="/icons/dark_theme/Arrow right.svg" className="dt apm1_button_image"/>
                        </button>
                        <button className="apm1_button" onClick={changeTo4}>
                            <img src="/icons/light_theme/Credit card.svg" className="lt apm1_button_image"/><img src="/icons/dark_theme/Credit card.svg" className="dt apm1_button_image"/>
                            <div className="apm1_button_text">
                                <p className="fw5">Payments</p>
                                <p className="fw4">Add and delete your payments</p>
                            </div>
                            <img src="/icons/light_theme/Arrow right.svg" className="lt apm1_button_image"/><img src="/icons/dark_theme/Arrow right.svg" className="dt apm1_button_image"/>
                        </button>
                        <button className="apm1_button">
                            <img src="/icons/light_theme/Log out.svg" className="lt apm1_button_image"/><img src="/icons/dark_theme/Log out.svg" className="dt apm1_button_image"/>
                            <div className="apm1_button_text">
                                <p className="fw5">Sign out</p>
                                <p className="fw4">Sign out from all 86B services</p>
                            </div>
                        </button>
                    </div>
                    <div className="apm" id="apm2" style={apm_page[1]}>
                        <div className="apm_title">
                            <button className="round" onClick={changeTo1}><img src="/icons/light_theme/Arrow Left.svg" className="lt"/><img src="/icons/dark_theme/Arrow Left.svg" className="dt"/></button>
                            <h2 className="fw5">Your Info</h2>
                        </div>
                        <div className="apm_string">
                            <p className="fw5">Name</p>
                            <p className="fw4">User1234567890</p>
                            <button><img src="/icons/light_theme/Edit 2.svg" className="lt"/><img src="/icons/dark_theme/Edit 2.svg" className="dt"/></button>
                        </div>
                        <div className="line"></div>
                        <div className="apm_string">
                            <p className="fw5">Second name</p>
                            <p className="fw4"></p>
                            <button><img src="/icons/light_theme/Edit 2.svg" className="lt"/><img src="/icons/dark_theme/Edit 2.svg" className="dt"/></button>
                        </div>
                        <div className="line"></div>
                        <div className="apm_string">
                            <p className="fw5">Photo</p>
                            <p className="fw4"><img src="/icons/profile_default.png"/></p>
                            <button><img src="/icons/light_theme/Edit 2.svg" className="lt"/><img src="/icons/dark_theme/Edit 2.svg" className="dt"/></button>
                        </div>
                        <div className="line"></div>
                        <div className="apm_string">
                            <p className="fw5">ID</p>
                            <p className="fw4">#1234567890</p>
                        </div>
                        <div className="line"></div>
                        <div className="apm_string">
                            <p className="fw5">Password</p>
                            <p className="fw4"></p>
                            <button><img src="/icons/light_theme/Edit 2.svg" className="lt"/><img src="/icons/dark_theme/Edit 2.svg" className="dt"/></button>
                        </div>
                        <h2 className="fw5 apm_">Recovery Code</h2>
                        <p className="apm_">This code can be used once for logging on your ID.<br></br>Last generated:</p>
                        <button className="apm_">Generate</button>
                        <h2 className="fw5 apm_">Delete your ID</h2>
                        <button className="apm_">Delete</button>
                    </div>
                    <div className="apm" id="apm3" style={apm_page[2]}>
                        <div className="apm_title">
                            <button className="round" onClick={changeTo1}><img src="/icons/light_theme/Arrow Left.svg" className="lt"/><img src="/icons/dark_theme/Arrow Left.svg" className="dt"/></button>
                            <h2 className="fw5">Your Privacy</h2>
                        </div>
                        <div className="apm_string apms2">
                            <p className="fw5">Everyone can see my second name</p>
                        </div>
                        <div className="line"></div>
                        <div className="apm_string apms2">
                            <p className="fw5">Everyone can see my photo</p>
                        </div>
                        <h2 className="fw5 apm_">My privacy in the SET</h2>
                        <div className="apm_string apms2">
                            <p className="fw5">Everyone sees "WHO?" instead of my name in all my reviews</p>
                        </div>
                        <div className="line"></div>
                        <div className="apm_string apms2">
                            <p className="fw5">Don't recomend products to me</p>
                        </div>
                    </div>
                    <div className="apm" id="apm3" style={apm_page[3]}>
                        <div className="apm_title">
                            <button className="round" onClick={changeTo1}><img src="/icons/light_theme/Arrow Left.svg" className="lt"/><img src="/icons/dark_theme/Arrow Left.svg" className="dt"/></button>
                            <h2 className="fw5">Payments</h2>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>)
}