import {
  SiJavascript, SiNodedotjs, SiPython, SiHtml5, SiCss3,
  SiGit, SiGithub,
  SiPhp, SiJquery, SiLaravel, SiWordpress, SiBootstrap,
  SiLinux, SiGnubash, SiCpanel,
  SiJira, SiConfluence, SiGoogle, SiAdobe,
} from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'
import {
  FaPenNib, FaMicrophone, FaVideo,
  FaSearch, FaUsers, FaProjectDiagram, FaMicrosoft,
} from 'react-icons/fa'
import FadeIn from '../animations/FadeIn'
import SkillBadge from '../ui/SkillBadge'
import { skillCategories } from '../../data/skills'

const iconMap = {
  // Languages & Frameworks
  SiJavascript, SiNodedotjs, SiPython, SiHtml5, SiCss3,
  SiPhp, SiJquery, SiLaravel, SiWordpress, SiBootstrap,
  // Systems & Infrastructure
  SiLinux, SiGnubash, SiCpanel, SiGit, SiGithub, VscCode,
  // Project & Product Management
  SiJira, SiConfluence, SiGoogle, FaMicrosoft, FaProjectDiagram,
  // Content & Community
  SiAdobe, FaPenNib, FaMicrophone, FaVideo, FaSearch, FaUsers,
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <h2 className="font-display text-4xl md:text-5xl text-center tracking-wider mb-2">
            My <span className="text-brand">Skills</span>
          </h2>
          <div className="section-divider" />
        </FadeIn>

        <div className="space-y-12 mt-12">
          {skillCategories.map((category, catIdx) => (
            <FadeIn key={category.name} delay={catIdx * 0.1}>
              <h3 className="text-xl font-display tracking-wider text-brand/80 mb-6 text-center">
                {category.name}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-4 max-w-4xl mx-auto">
                {category.skills.map((skill) => {
                  const Icon = iconMap[skill.icon]
                  return Icon ? (
                    <SkillBadge key={skill.name} name={skill.name} icon={Icon} />
                  ) : null
                })}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
