export const profile = {
  name: '김도하',
  role: 'AI Service Developer',
  intro: 'AI 모델을 웹 서비스, API, 데이터베이스, 배포 환경과 연결해 실제로 사용할 수 있는 제품으로 구현하는 개발자입니다.',
  email: 'jihun22400669@gmail.com',
  github: 'https://github.com/DDORINY',
  notion: 'https://app.notion.com/p/doreen1004/0-AI-320bec735c3780c7bfcffcc2425e59f2',
  education: [{ title: 'AI 서비스 개발 교육 과정', period: '교육 기간 입력 예정', description: '웹 기반 개발 역량과 Python, 머신러닝, 딥러닝, 컴퓨터 비전, AI API 연동을 학습했습니다.' }],
  skills: {
    'AI / Data': ['Python', 'Machine Learning', 'Deep Learning', 'Computer Vision', 'YOLO'],
    Frontend: ['Next.js', 'React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
    Backend: ['Flask', 'FastAPI', 'Spring Boot', 'REST API', 'JWT'],
    'Database / Infra': ['MySQL', 'VM Infra', 'GitHub Pages'],
    Tools: ['Git', 'GitHub', 'Figma', 'Notion'],
  },
}

export const learningTracks = [
  { key: '01', title: 'Python', description: 'AI 개발의 기반 문법과 데이터 처리, 모듈 활용을 학습합니다.', topics: ['Fundamentals', 'Data Handling', 'Automation'] },
  { key: '02', title: 'Machine Learning', description: '전처리부터 모델 학습과 평가까지 머신러닝 흐름을 익힙니다.', topics: ['Preprocessing', 'Training', 'Evaluation'] },
  { key: '03', title: 'Deep Learning', description: '신경망의 구조와 학습 원리를 이해하고 모델을 실험합니다.', topics: ['Neural Networks', 'Training Loop', 'Experiments'] },
  { key: '04', title: 'Computer Vision', description: '이미지와 영상을 데이터로 다루고 시각 문제를 해결합니다.', topics: ['Image Processing', 'OpenCV', 'Video Pipeline'] },
  { key: '05', title: 'YOLO / Object Detection', description: '객체 탐지 모델과 ROI 기반 이벤트 판단을 실습합니다.', topics: ['YOLO', 'Object Detection', 'ROI Logic'] },
  { key: '06', title: 'AI API Integration', description: 'Flask와 FastAPI로 추론 결과를 웹 서비스에 연결합니다.', topics: ['Flask', 'FastAPI', 'API Design'] },
]
