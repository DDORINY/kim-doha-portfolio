import { Link } from 'react-router-dom'
export default function NotFound() { return <section className="section empty-state"><span className="eyebrow">404 / NOT FOUND</span><h1>길을 잠깐 잃었습니다.</h1><p>요청하신 페이지가 없거나 이동되었습니다.</p><Link className="button primary" to="/">홈으로 돌아가기</Link></section> }
