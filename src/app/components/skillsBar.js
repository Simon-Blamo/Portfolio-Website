import LanguageIcon from './langIcon'
import Ruby_Icon from '../assets/langIcons/ruby-96.png'
import C_Icon from '../assets/langIcons/c-programming-96.png'
import Cplusplus_Icon from '../assets/langIcons/c++-96.png'
import Java_Icon from '../assets/langIcons/java-96.png'
import Spring_Boot_Icon from '../assets/langIcons/icons8-spring-boot-96.png'
import Python_Icon from '../assets/langIcons/python-96.png'
import HTML_Icon from '../assets/langIcons/html-96.png'
import CSS_Icon from '../assets/langIcons/css3-96.png'
import JavaScript_Icon from '../assets/langIcons/javascript-96.png'
import Flask_Icon from '../assets/langIcons/flask-128.png'
import React_Icon from '../assets/langIcons/react-100.png'
import Bootstrap_Icon from '../assets/langIcons/icons8-bootstrap-96.png'
import Tailwind_Icon from '../assets/langIcons/tailwind-css-96.png'
import MongoDB_Icon from '../assets/langIcons/mongodb-96.png'
import Postgres_Icon from '../assets/langIcons/postgres-96.png'
import RStudio_Icon from '../assets/langIcons/r-project-96.png'
import Git_Icon from '../assets/langIcons/git-96.png'
import Github_Icon from '../assets/langIcons/github-96.png'
import Linux_Icon from '../assets/langIcons/linux-96.png'
import Mac_Icon from '../assets/langIcons/macos-96.png'
import Windows_Icon from '../assets/langIcons/windows-96.png'
export default function SkillsBar() {
    const skills = {
        ruby: {
            img: Ruby_Icon,
            alt: "Ruby",
            title: "Ruby"
        },
        c: {
            img: C_Icon,
            alt: "C (programming language)",
            title: "C"
        },
        cplusplus: {
            img: Cplusplus_Icon,
            alt: "C++",
            title: "C++"
        },
        java: {
            img: Java_Icon,
            alt: "Java",
            title: "Java"
        },
        spring: {
            img: Spring_Boot_Icon,
            alt: "Spring Boot",
            title: "Spring Boot"
        },
        python: {
            img: Python_Icon,
            alt: "Python",
            title: "Python"
        },
        html: {
            img: HTML_Icon,
            alt: "HTML",
            title: "HTML"
        },
        css: {
            img: CSS_Icon,
            alt: "CSS",
            title: "CSS"
        },
        javascript: {
            img: JavaScript_Icon,
            alt: "JavaScript",
            title: "JavaScript"
        },
        flask: {
            img: Flask_Icon,
            alt: "Flask",
            title: "Flask"
        },
        react: {
            img: React_Icon,
            alt: "React",
            title: "React"
        },
        bootstrap: {
            img: Bootstrap_Icon,
            alt: "Bootstrap",
            title: "Bootstrap"
        },
        tailwind: {
            img: Tailwind_Icon,
            alt: "Tailwind",
            title: "Tailwind"
        },
        mongoDB: {
            img: MongoDB_Icon,
            alt: "Mongo DB",
            title: "Mongo DB"
        },
        postgres: {
            img: Postgres_Icon,
            alt: "Postgres",
            title: "Postgres"
        },
        rStudio: {
            img: RStudio_Icon,
            alt: "R-Studio",
            title: "R-Studio"
        },
        git: {
            img: Git_Icon,
            alt: "Git",
            title: "Git"
        },
        github: {
            img: Github_Icon,
            alt: "Github",
            title: "Github"
        },
        linux: {
            img: Linux_Icon,
            alt: "Linux",
            title: "Linux"
        },
        mac: {
            img: Mac_Icon,
            alt: "Mac",
            title: "Mac"
        },
        windows: {
            img: Windows_Icon,
            alt: "Windows",
            title: "Windows"
        },

    }
    return (
        <div className='w-full flex flex-wrap'>
            <LanguageIcon>
                {skills.ruby}
            </LanguageIcon>
            <LanguageIcon>
                {skills.c}
            </LanguageIcon>
            <LanguageIcon>
                {skills.cplusplus}
            </LanguageIcon>
            <LanguageIcon>
                {skills.java}
            </LanguageIcon>
            <LanguageIcon>
                {skills.spring}
            </LanguageIcon>
            <LanguageIcon>
                {skills.python}
            </LanguageIcon>
            <LanguageIcon>
                {skills.html}
            </LanguageIcon>
            <LanguageIcon>
                {skills.css}
            </LanguageIcon>
            <LanguageIcon>
                {skills.javascript}
            </LanguageIcon>
            <LanguageIcon>
                {skills.flask}
            </LanguageIcon>
            <LanguageIcon>
                {skills.react}
            </LanguageIcon>
            <LanguageIcon>
                {skills.bootstrap}
            </LanguageIcon>
            <LanguageIcon>
                {skills.tailwind}
            </LanguageIcon>
            <LanguageIcon>
                {skills.mongoDB}
            </LanguageIcon>
            <LanguageIcon>
                {skills.postgres}
            </LanguageIcon>
            <LanguageIcon>
                {skills.rStudio}
            </LanguageIcon>
            <LanguageIcon>
                {skills.git}
            </LanguageIcon>
            <LanguageIcon>
                {skills.github}
            </LanguageIcon>
            <LanguageIcon>
                {skills.linux}
            </LanguageIcon>
            <LanguageIcon>
                {skills.mac}
            </LanguageIcon>
            <LanguageIcon>
                {skills.windows}
            </LanguageIcon>
        </div>
    )
}