import { TweenMax } from 'gsap';
import React, { useLayoutEffect } from 'react'
import style from './style.module.scss'
import $ from 'jquery'
import myPic from '../../assets/myPic.webp'

const Footer = () => {

    useLayoutEffect(() => {
        var cursor = $(".cursor"),
            follower = $(".cursor-follower");

        var posX = 0,
            posY = 0,
            mouseX = 0,
            mouseY = 0;

        TweenMax.to({}, 0.016, {
            repeat: -1,
            onRepeat: function () {
                posX += (mouseX - posX) / 9;
                posY += (mouseY - posY) / 9;

                TweenMax.set(follower, {
                    css: {
                        left: posX - 20,
                        top: posY - 20,
                    },
                });

                TweenMax.set(cursor, {
                    css: {
                        left: mouseX,
                        top: mouseY,
                    },
                });
            },
        });

        $(document).on("mousemove", function (e) {
            mouseX = e.pageX;
            mouseY = e.pageY;
        });

        $(".wrapper").on("mouseenter", function () {
            cursor.addClass("active");
            follower.addClass("active");
        });

        $(".wrapper").on("mouseleave", function () {
            cursor.removeClass("active");
            follower.removeClass("active");
        });
    }, [])



    return (
        <div className={style.wrapper} >
            <div className={style.linkContainer}>
                <h3 >
                    <a href="https://www.instagram.com/__jatin__xxvi/" target="_blank">
                        INSTAGRAM
                    </a>
                </h3>
                <h3 >
                    <a href="https://www.linkedin.com/in/jatinpandey26/" target="_blank">
                        LINKEDIN
                    </a>
                </h3>
                <h3 >
                    <a href="https://twitter.com/Jatin28773942" target="_blank">
                        TWITTER
                    </a>
                </h3>
            </div>

            <div style={{ display: 'flex' }}>
                <div className={style.left + " wrapper"}>
                    <div>
                        <h1>FOLLOW</h1>
                        <h1>ME</h1>
                    </div>
                    <p>© 2022 HAKAJI. ALL RIGHTS RESERVED.FOR ANY QUESTIONS PLEASE CONTACT <a href="mailto:JATIN26PANDEY@GMAIL.COM" style={{ color: 'black', cursor: 'pointer' }}>JATIN26PANDEY@GMAIL.COM</a></p>
                </div>
                <div className={style.right}>
                    <img src={myPic} alt="" />
                </div>
            </div>
        </div >
    )
}

export default Footer