import styles from './style.module.scss'
import $ from 'jquery'
import { TweenMax } from 'gsap/gsap-core'
import React, { useLayoutEffect } from 'react'
import HomeLeft from '../HomeLeftSection/HomeLeft'
import HomeRight from '../HomeRightSide/HomeRight'


const HomeSection = () => {


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
    <>
      <div className={styles.wrapper + ' wrapper'}>
        <div id="scrollToHome"></div>
        <HomeLeft />
        <HomeRight />
      </div>
      <div className="cursor"></div>
      <div className="cursor-follower"></div>
      <h1 className={styles.welcome}>WELCOME HERE !!!!</h1>
    </>
  )
}

export default HomeSection