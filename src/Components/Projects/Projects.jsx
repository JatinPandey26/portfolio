import React, { useLayoutEffect } from 'react'
import styles from './style.module.scss'
import img from '../../assets/gallery/g5.jpg'
import tsf from '../../assets/projects/tsf2.png'
import talkkr from '../../assets/projects/talkkr.png'
import keeper from '../../assets/projects/keeper.png'
import techza from '../../assets/projects/techzan.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Projects = () => {
    useLayoutEffect(() => {
        const ATTR_NAME = "element-name";
        const ATTR_SECTION_VALUE = "sticky-tabs-scroll-section";
        const ATTR_ITEM_VALUE = "sticky-tabs-item";
        const ATTR_CONTENT_VALUE = "sticky-tabs-content";

        gsap.registerPlugin(ScrollTrigger);

        const tabItems = gsap.utils.toArray(document.querySelectorAll(
            `[${ATTR_NAME}="${ATTR_ITEM_VALUE}"]`
        ))
        const tabContentElements = gsap.utils.toArray(document.querySelectorAll(
            `[${ATTR_NAME}="${ATTR_CONTENT_VALUE}"]`
        ))
        const scrollSection = document.querySelector(
            `[${ATTR_NAME}="${ATTR_SECTION_VALUE}"]`
        );
      
        scrollSection.style.height = `${150 * tabItems.length}vh`;

        tabItems.forEach((item, index) => {
            item.insertAdjacentElement("afterend", tabContentElements[index]);
        });
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: scrollSection,
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
            },
            defaults: {
                ease: "none",
            },
        });

        // set all content element heights to 0, and first to 100%
        gsap.set(tabContentElements, { height: "0%" });
        gsap.set(tabContentElements[0], { height: "100%" });

        for (let i = 0; i < tabContentElements.length - 1; i++) {
            // at the same time, send current tab height to 0
            // and next tab height to 100%
            tl.to(tabContentElements[i], { height: "0%" }).to(
                tabContentElements[i + 1],
                { height: "100%" },
                "<"
            );
        }

    }, [])
    return (
        <section element-name="sticky-tabs-scroll-section">
            <div id="scrollTOPRojects"></div>
            <div className={styles.tabsWrapper}>
                <div className={styles.tabsList}>
                    <div className={styles.tabItem} element-name="sticky-tabs-item">
                        <div className={styles.tabTop} >
                            <h1>TANMAY SACHIN FOUNDATION</h1>
                        </div>
                    </div>
                    <div className={styles.tabContent} element-name="sticky-tabs-content">
                        <div className={styles.left}><p>As a web developer for the <strong>Tanmay Sachin Foundation</strong>, my main task was to develop a website from scratch and optimize it for search engines, while incorporating a payment gateway. I utilized several technologies and tools including <strong>NextJs, ReactJs, Razorpay, Sass CSS, HTML, Tailwind CSS,</strong> and <strong>Git</strong>. Our website was designed to load quickly and effectively with the help of NextJs. We also used various SEO techniques to make the website more visible to search engines. <strong>Razorpay</strong> payment gateway was integrated to facilitate online payments. We utilized Tailwind CSS and Sass to create a visually appealing website that was responsive to all devices. Git was used for version control throughout the development process.</p>
                        <div className={styles.link}>
                                <a href="https://www.tanmaysachinfoundation.com/">TANMAY SACHIN FOUNDATION </a>
                                <svg width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" /></svg>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <img src={tsf} alt="" />
                        </div>
                    </div>
                    <div className={styles.tabItem} element-name="sticky-tabs-item">
                        <div className={styles.tabTop} >
                            <h1>KEEPER APP</h1>
                        </div>
                    </div>
                    <div className={styles.tabContent} element-name="sticky-tabs-content">
                        <div className={styles.left}><p>The interactive user website I developed is a platform that helps individuals to keep important notes. The website provides various features such as note creation, editing, and deletion. One of the advanced features that make this website unique is the ability to pin notes for quick access. Users can also view their notes in a paginated format for easy browsing. The website was developed using modern web technologies such as <strong>ReactJs</strong>, which allowed for a smooth and responsive user experience. Overall, this website is an excellent tool for individuals who need to keep track of important information and want a convenient and user-friendly platform to do so.</p>
                        <div className={styles.link}>
                                <a href="https://keeperapps.netlify.app/">KEEPER APP </a>
                                <svg width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" /></svg>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <img src={keeper} alt="" />
                        </div>
                    </div>
                    <div className={styles.tabItem} element-name="sticky-tabs-item">
                        <div className={styles.tabTop} >
                            <h1>TALKKR</h1>
                        </div>
                    </div>
                    <div className={styles.tabContent} element-name="sticky-tabs-content">
                        <div className={styles.left}><p>The chat app I developed using <strong>React.js</strong> and <strong>Firebase</strong> is a powerful communication tool that enables multiple users to connect and chat in real-time. The app utilizes Firebase's authentication and database capabilities to ensure secure user access and reliable data storage. Users can create profiles, log in securely, and connect with other users in a seamless and intuitive way. The app supports multiple users, allowing individuals to join group chats or chat privately with one another. By using modern web technologies such as React.js and Firebase, we were able to create an efficient and reliable chat app that provides a high-quality user experience. Overall, this app is a valuable communication tool for individuals who want to stay connected and engaged with their peers.</p>
                        <div className={styles.link}>
                                <a href="https://62faa0387d39b7028818fb8b--talkkr.netlify.app/">TALKKR </a>
                                <svg width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" /></svg>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <img src={talkkr} alt="" />
                        </div>
                    </div>
                    <div className={styles.tabItem} element-name="sticky-tabs-item">
                        <div className={styles.tabTop} >
                            <h1>TECHZA</h1>
                        </div>
                    </div>
                    <div className={styles.tabContent} element-name="sticky-tabs-content">
                        <div className={styles.left}><p>The course selling app I developed is a comprehensive platform that enables users to browse and purchase online courses on various subjects. The app is built using <strong>ExpressJs</strong>, <strong>REST API</strong>, <strong>MongoDB</strong>, and <strong>Cloudinary</strong> for the backend, and features <strong>JWT-based authentication</strong> and admin route protection for enhanced security. The frontend was developed using <strong>ReactJs</strong>, <strong>ChakraUI</strong>, <strong>ChartJs</strong>, and <strong>Redux</strong>, and includes unique features such as themes. Payments and subscriptions are implemented using <strong>Razorpay</strong>, providing users with a convenient and secure way to purchase courses. Overall, this app is a valuable tool for individuals seeking to expand their knowledge and skills in a wide range of subjects, while also offering a user-friendly and reliable platform for course providers to sell their content.</p>
                            <div className={styles.link}>
                                <a href="https://techza.vercel.app/">TECHZA </a>
                                <svg width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" /></svg>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <img src={techza} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Projects