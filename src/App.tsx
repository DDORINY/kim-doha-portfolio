import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Contact from './pages/Contact'
import AILearning from './pages/AILearning'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ProjectDetail from './pages/ProjectDetail'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import SideProjectDetail from './pages/SideProjectDetail'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/side-projects/:slug" element={<SideProjectDetail />} />
        <Route path="/ai-learning" element={<AILearning />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
