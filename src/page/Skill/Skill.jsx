import './Skill.css'
import React, { useEffect, useRef, useState } from 'react'
import { FaSkyatlas, FaHtml5, FaCss3Alt, FaBootstrap, FaGithub, FaGitAlt } from "react-icons/fa"
import { RiJavascriptFill, RiReactjsFill, RiPhpLine } from "react-icons/ri"
import { FaWordpress } from "react-icons/fa6"
import { GrMysql } from "react-icons/gr"

const targets = [
  { name: "HTML", icon: <FaHtml5 className="html" />, percent: 95 },
  { name: "CSS", icon: <FaCss3Alt className="css" />, percent: 90 },
  { name: "Bootstrap", icon: <FaBootstrap className="boot" />, percent: 80 },
  { name: "JavaScript", icon: <RiJavascriptFill className="js" />, percent: 75 },
  { name: "React.js", icon: <RiReactjsFill className="react" />, percent: 85 },
  { name: "Github", icon: <FaGithub className="git" />, percent: 81 },
  { name: "Git", icon: <FaGitAlt className="git" />, percent: 78 },
  { name: "WordPress", icon: <FaWordpress className="wordpress" />, percent: 90 },
  { name: "PHP", icon: <RiPhpLine className="php" />, percent: 78 },
  { name: "MySQL", icon: <GrMysql className="mysql" />, percent: 90 }
]

export default function Skill() {
  const [counts, setCounts] = useState(targets.map(() => 0))
  const refs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index)
            startCounting(index, targets[index].percent)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    refs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const startCounting = (index, target) => {
    let current = 0
    const interval = setInterval(() => {
      current++
      setCounts(prev => {
        const updated = [...prev]
        updated[index] = current
        return updated
      })
      if (current >= target) clearInterval(interval)
    }, 20)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const circle = entry.target.querySelector('.circle')
          const number = circle.querySelector('.number')
          const target = parseInt(number.innerText)
          let current = 0

          const interval = setInterval(() => {
            current++
            number.innerText = current + '%'
            circle.style.setProperty('--percent', current)
            if (current >= target) clearInterval(interval)
          }, 20)

          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.2 })

    document.querySelectorAll('.ski').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="skill">
      <button className="skilbtn">
        <span><FaSkyatlas /></span> What can I do ?
      </button>

      <div className="skil-box">
        <div className="skil-box-left">
          <h1 style={{ fontWeight: 900, marginBottom: 20 }}>Technical Skills</h1>

          {targets.map((skill, index) => (
            <div
              className="skil-card"
              key={index}
              ref={el => (refs.current[index] = el)}
              data-index={index}
            >
              <h4><span>{skill.icon}</span> {skill.name}</h4>
              <p>{counts[index]}%</p>
              <div className="bar" style={{ width: `${counts[index]}%` }}></div>
            </div>
          ))}
        </div>

        <div className="skil-box-right">
          <h1 style={{ fontWeight: 900, marginBottom: 20 }}>Soft Skills</h1>

          <div className="ski">
            <h2>Responsive Design</h2>
            <div className="circle" style={{ '--percent': 0 }}>
              <div className="number">95%</div>
            </div>
          </div>

          <div className="ski">
            <h2>Problem Solving</h2>
            <div className="circle" style={{ '--percent': 0 }}>
              <div className="number">80%</div>
            </div>
          </div>

          <div className="ski">
            <h2>Teamwork</h2>
            <div className="circle" style={{ '--percent': 0 }}>
              <div className="number">90%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
