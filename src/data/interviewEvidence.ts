import type { Project } from './projects'

export type EvidenceStatus = 'implemented' | 'validated' | 'in-progress' | 'planned'
type Decision = { title: string; problem: string; decision: string; why: string; tradeoff?: string }
type Verification = { label: string; detail: string; status: EvidenceStatus }
type CodeEvidence = { label: string; description: string; url: string }
type Troubleshooting = { title: string; problem: string; decision: string; verification: string; result: string }
export type DiscussionPoint = { question: string; answer: string; tradeoff?: string; next?: string }
export type InterviewEvidence = {
  keyDecision: string
  verificationSummary: string
  decisions: Decision[]
  troubleshooting: Troubleshooting[]
  verification: Verification[]
  codeEvidence: CodeEvidence[]
  scope: { mine: string[]; team?: string[] }
  discussionPoints: DiscussionPoint[]
}

const blob = (repo: string, branch: string, path: string) => `https://github.com/${repo}/blob/${branch}/${path}`

export const projectInterviewEvidence: Partial<Record<Project['slug'], InterviewEvidence>> = {
  'hawk-ai': {
    keyDecision: 'Frontend → Backend → AI Serving으로 인증·도메인·추론 책임을 분리',
    verificationSummary: 'Schema validation · timeout/error mapping · board/chat integration tests',
    decisions: [
      { title: 'AI Serving 분리', problem: '모델 runtime을 application backend에 포함하면 도메인 로직과 추론 의존성이 결합됩니다.', decision: 'Qwen·LoRA와 LangGraph runtime을 FastAPI AI Serving으로 분리했습니다.', why: '모델과 Backend를 독립적으로 변경·테스트하고 같은 serving 계층에서 board/chat 계약을 제공하기 위해서입니다.', tradeoff: '네트워크 호출, timeout과 upstream failure mapping이 추가됩니다.' },
      { title: 'Backend Gateway', problem: 'Frontend가 AI Serving을 직접 호출하면 인증·서비스 문맥·오류 처리 책임이 분산됩니다.', decision: 'Frontend 요청을 Backend AI Client가 검증한 뒤 AI Serving으로 전달합니다.', why: '권한과 도메인 validation을 Backend에 집중하고 AI 응답 계약을 한곳에서 정규화하기 위해서입니다.' },
      { title: 'Structured Output Validation', problem: 'LLM 응답이 항상 정상 JSON과 필수 필드를 보장하지 않습니다.', decision: 'JSON recovery와 Pydantic parser, Backend 응답 검증을 거쳐 BoardDraft만 UI에 전달합니다.', why: '잘못된 출력이 게시판 domain data로 직접 유입되는 것을 막기 위해서입니다.', tradeoff: '자유 형식 응답보다 schema 변경 관리가 필요합니다.' },
    ],
    troubleshooting: [
      { title: '불완전한 게시글 응답 차단', problem: 'title·summary·content 중 일부가 없거나 JSON 객체가 아닌 응답이 발생할 수 있었습니다.', decision: 'AI Serving parser와 Backend AI Client 양쪽에서 구조와 필수 문자열을 검증했습니다.', verification: 'board chain unit test와 API test, Backend 응답 validation 경로로 확인했습니다.', result: 'Frontend는 예측 가능한 게시글 초안 계약만 받게 됐습니다.' },
      { title: 'AI 서버 장애를 서비스 오류로 변환', problem: 'timeout·연결 실패·비정상 upstream 응답을 그대로 노출할 수 없었습니다.', decision: 'AI Client에서 timeout, connection, response error를 구분해 public error로 변환했습니다.', verification: '명시적 timeout 설정과 response JSON/type 검사 경로를 확인했습니다.', result: 'Backend가 추론 장애를 일관된 서비스 응답으로 처리합니다.' },
    ],
    verification: [
      { label: 'Board schema', detail: 'title·summary·content 필수 필드와 JSON object 검증', status: 'validated' },
      { label: 'AI Client', detail: 'timeout·connection·upstream response 오류 분리', status: 'implemented' },
      { label: 'Board / Chat API', detail: 'ai-serving API와 graph 테스트 파일 존재', status: 'validated' },
      { label: 'Frontend integration', detail: '게시판 작성과 Chatbot 서비스 연결', status: 'implemented' },
    ],
    codeEvidence: [
      { label: 'AI Client', description: 'Backend에서 AI Serving 호출, timeout과 응답 계약 처리', url: blob('hawk-ai-project/backend', 'main', 'client/ai_client.py') },
      { label: 'Board Draft Service', description: '게시판 domain과 AI 생성 초안 연결', url: blob('hawk-ai-project/backend', 'main', 'service/board_draft_service.py') },
      { label: 'Board Chain', description: 'Structured output parsing과 게시글 생성 chain', url: blob('hawk-ai-project/ai-serving', 'main', 'LLM/board_chain.py') },
      { label: 'Chat Graph', description: 'LangGraph intent 분기와 response format', url: blob('hawk-ai-project/ai-serving', 'main', 'LLM/chat_graph.py') },
      { label: 'Board UI', description: 'Frontend 게시판 AI 초안 정규화', url: blob('hawk-ai-project/frontend', 'main', 'src/components/board/sanitizeBoardDraft.js') },
    ],
    scope: { mine: ['게시판 서비스', 'Frontend ↔ Backend 연동', 'Backend ↔ AI Serving 연동', 'LLM 게시글·Chat UI 통합', '구조화 응답과 오류 경로 점검'], team: ['현장 점검 domain', '해안 폐기물 탐지', '공통 인증·인프라', '모바일 서비스'] },
    discussionPoints: [
      {
        question: '왜 AI Serving과 Backend를 분리했나요?',
        answer: 'HAWK-AI에서는 Qwen + LoRA 추론 Runtime과 게시판 도메인 로직의 변경 주기가 달랐습니다. 모델 추론은 FastAPI AI Serving이, 권한·서비스 문맥·요청 검증은 Backend가 담당하게 해 모델 변경이 게시판 로직에 직접 번지는 범위를 줄였습니다.',
        tradeoff: '서비스 간 네트워크 호출과 timeout·upstream 장애를 Backend 오류로 변환하는 책임이 추가됐습니다.',
      },
      {
        question: 'LLM 응답을 왜 그대로 사용하지 않고 검증했나요?',
        answer: 'LLM이 title·summary·content를 항상 정상 JSON으로 반환한다고 보장할 수 없었습니다. AI Serving의 JSON recovery·Pydantic parser와 Backend 응답 검증을 거쳐 필수 문자열을 갖춘 BoardDraft만 게시판 UI에 전달했습니다.',
        tradeoff: '응답 형식이 안정되는 대신 schema를 바꿀 때 AI Serving과 Backend 계약을 함께 관리해야 합니다.',
      },
      {
        question: '실제 운영 환경으로 확장한다면 무엇을 추가하고 싶나요?',
        answer: '현재는 명시적 timeout, 연결·응답 오류 분리와 board/chat 계약 검증까지 구현했습니다. 운영 규모가 커진다면 요청별 inference latency·실패율을 관측하고 모델 version별 응답을 추적할 수 있어야 합니다.',
        next: '향후 retry 정책, inference metric, 모델 version 관리와 AI Serving 장애 격리를 운영 조건에 맞춰 추가로 검토하겠습니다.',
      },
    ],
  },
  dohalm: {
    keyDecision: 'Dataset governance와 training execution을 승인·publication 계약으로 분리',
    verificationSummary: 'Governance workflow · evaluation artifacts · runtime contract evidence',
    decisions: [
      { title: 'Dataset Governance', problem: 'JSONL 파일 존재만으로는 권리·리뷰·학습 사용 승인을 증명할 수 없습니다.', decision: 'Review → Approval → Publication → Training의 상태와 권한을 분리했습니다.', why: '승인된 dataset version만 training input으로 소비하도록 경계를 만들기 위해서입니다.', tradeoff: '학습 전 필수 gate와 metadata 관리 비용이 증가합니다.' },
      { title: 'Model / Adapter / Runtime 분리', problem: 'Base model과 QLoRA adapter, serving 설정을 하나의 파일로 취급하면 identity와 재사용 범위가 불명확합니다.', decision: 'Base·adapter·runtime을 독립 contract와 artifact로 관리합니다.', why: '동일 base에서 adapter를 교체하고 runtime 검증을 독립적으로 수행하기 위해서입니다.' },
      { title: 'Manifest 기반 증거', problem: '파일명만으로는 dataset·config·checkpoint·평가 결과의 관계를 재현하기 어렵습니다.', decision: 'Manifest와 evaluation artifact를 실행 증거로 남깁니다.', why: '승격 판단과 재현 가능한 release identity를 확보하기 위해서입니다.' },
    ],
    troubleshooting: [
      { title: '승인과 실행 권한 혼합 방지', problem: 'Dataset 승인 상태와 training 실행 권한이 같은 boolean으로 축약될 위험이 있었습니다.', decision: 'Governance domain state, publication contract, execution approval boundary를 분리했습니다.', verification: 'ADR과 dataset governance CI workflow로 계약을 점검했습니다.', result: 'Publication되지 않은 dataset이 training entry로 소비되는 경계를 명시했습니다.' },
      { title: '평가 시점 혼합 방지', problem: '서로 다른 candidate와 decoding 조건의 결과를 같은 성능 주장으로 혼합할 수 있었습니다.', decision: 'Evaluation manifest와 comparison policy로 조건과 결과를 함께 기록했습니다.', verification: 'Quick/full comparison 문서와 evaluation artifact 구성으로 확인했습니다.', result: '완료되지 않은 generalization 결과를 완료로 표시하지 않습니다.' },
    ],
    verification: [
      { label: 'Dataset governance', detail: 'CI workflow와 approval/publication domain 구현', status: 'validated' },
      { label: 'Tiny model foundation', detail: 'Tokenizer·model·trainer·tiny overfit evidence', status: 'validated' },
      { label: 'Evaluation pipeline', detail: 'Candidate comparison과 evaluation artifact 구성', status: 'implemented' },
      { label: 'REST / SSE MVP', detail: 'Runtime contract와 SSE client test evidence', status: 'implemented' },
      { label: 'Versioned release', detail: '승인된 production artifact release 정비 중', status: 'in-progress' },
      { label: 'Python SDK', detail: '배포 계약 이후 구현 예정', status: 'planned' },
    ],
    codeEvidence: [
      { label: 'Dataset Governance', description: 'Dataset review·approval 상태와 전이 규칙', url: blob('DohaStudio/DohaLM', 'develop', 'src/data/dataset_governance.py') },
      { label: 'Dataset Publication', description: '학습 가능한 published dataset 계약', url: blob('DohaStudio/DohaLM', 'develop', 'src/data/dataset_publication.py') },
      { label: 'Governance ADR', description: 'Dataset product governance 경계 결정', url: blob('DohaStudio/DohaLM', 'develop', 'docs/decisions/ADR-014-dataset-product-governance-boundary.md') },
      { label: 'Evaluation Runner', description: '설정 기반 모델 평가 실행', url: blob('DohaStudio/DohaLM', 'develop', 'scripts/evaluation/run_evaluation.py') },
      { label: 'Adapter Runtime', description: 'DohaLM adapter runtime 서비스 계약', url: blob('DohaStudio/DohaLM', 'develop', 'docs/service/dohalm-adapter-runtime.md') },
    ],
    scope: { mine: ['Dataset governance', 'Foundation model 구조', 'Training·evaluation pipeline', 'Manifest·runtime contract', 'REST/SSE MVP'], team: undefined },
    discussionPoints: [
      {
        question: '왜 Dataset Governance를 별도 단계로 설계했나요?',
        answer: '학습 파일이 존재하는 것만으로는 데이터의 검토 여부와 사용 권리를 증명할 수 없습니다. DohaLM은 Review·Approval·Rights·Publication 상태를 분리하고, publication된 dataset version만 training input으로 소비하도록 경계를 만들었습니다.',
        tradeoff: '학습 전 승인 gate와 dataset metadata를 계속 관리해야 하는 비용이 생깁니다.',
      },
      {
        question: '왜 Base Model과 Adapter를 별도 Artifact로 관리하나요?',
        answer: 'Qwen Base와 LoRA·QLoRA Adapter는 변경·배포 단위가 다릅니다. 각각의 Artifact Identity를 Manifest에 기록하고 Runtime이 조합을 검증하게 해, 같은 Base에서 Adapter를 교체하면서도 어떤 조합으로 추론했는지 추적할 수 있게 했습니다.',
        tradeoff: '단일 모델 파일보다 manifest와 호환성 검증 항목이 늘어납니다.',
      },
      {
        question: '학습된 모델을 서비스에 배포할 때 무엇을 검증해야 하나요?',
        answer: '현재는 dataset publication, evaluation artifact, model·adapter manifest와 Runtime contract를 승격 근거로 확인합니다. REST·SSE MVP도 동일 identity를 사용하지만, 승인된 production artifact release는 아직 정비 중입니다.',
        next: '향후에는 배포 전 품질 threshold, Base·Adapter 호환성, rollback 가능한 version과 운영 부하 검증을 release gate에 포함하겠습니다.',
      },
    ],
  },
  staccato: {
    keyDecision: '표시 stream FPS와 inference FPS를 분리하고 BBOX frame metadata를 계약에 포함',
    verificationSummary: '20K dataset · mAP50 0.9290 · F1 0.8932 · 4 VM integration QA',
    decisions: [
      { title: 'Stream / Inference FPS 분리', problem: '표시 frame마다 inference하면 AI server 부하와 지연이 증가합니다.', decision: 'CameraWorker의 target_fps와 analysis_fps를 독립 설정했습니다.', why: '관제 stream 연속성과 탐지 처리량을 별도로 조절하기 위해서입니다.', tradeoff: '이벤트 탐지 간격과 자원 사용량을 함께 조정해야 합니다.' },
      { title: 'BBOX Metadata Contract', problem: '좌표만 전달하면 UI가 원본 frame 기준 비율을 계산할 수 없습니다.', decision: 'bbox와 frame_width·frame_height를 함께 전달했습니다.', why: '서로 다른 화면 크기에서도 overlay 좌표 정합성을 유지하기 위해서입니다.' },
      { title: 'Persist before Emit', problem: 'DB 저장 전에 실시간 event를 내보내면 조회할 수 없는 이벤트가 화면에 나타날 수 있습니다.', decision: 'Incident·DetectionLog·RealtimeEvent를 commit한 뒤 Socket.IO emit을 실행합니다.', why: '실시간 표시와 영속 데이터의 순서를 일치시키기 위해서입니다.', tradeoff: 'DB transaction 지연이 emit latency에 포함됩니다.' },
    ],
    troubleshooting: [
      { title: '서로 다른 화면 크기의 BBOX 오버레이', problem: 'AI frame 좌표와 Frontend 렌더 크기가 달라 overlay가 어긋날 수 있었습니다.', decision: 'frame dimensions를 metadata에 포함하고 UI에서 비율 좌표로 변환했습니다.', verification: '실제 CCTV BBOX 화면과 metadata integration QA로 확인했습니다.', result: '관제 화면에서 탐지 box가 원본 차량 위치와 일치했습니다.' },
      { title: '다중 VM 이벤트 흐름 정합성', problem: 'AI·Flask·DB·Frontend가 분리되어 일부 구간 실패를 추적하기 어려웠습니다.', decision: 'DB persistence와 realtime event 상태를 연결하고 4개 VM 전체 흐름을 QA했습니다.', verification: '탐지 → API → DB → Socket.IO → UI 시나리오를 통합 점검했습니다.', result: '모델 결과가 실제 관제 이벤트로 이어지는 흐름을 검증했습니다.' },
    ],
    verification: [
      { label: 'Dataset', detail: '20,000 images · car/truck/bus', status: 'validated' },
      { label: 'Final model', detail: 'Precision 0.9210 · Recall 0.8670 · F1 0.8932 · mAP50 0.9290', status: 'validated' },
      { label: 'BBOX contract', detail: 'bbox와 frame dimensions 전달·overlay 확인', status: 'validated' },
      { label: 'Event persistence', detail: 'DB commit 후 realtime emit 순서 구현', status: 'implemented' },
      { label: '4 VM integration', detail: 'AI·Backend·DB·Frontend 통합 QA', status: 'validated' },
    ],
    codeEvidence: [
      { label: 'Camera Worker', description: 'Stream FPS와 analysis FPS 분리, frame metadata 구성', url: blob('staccato-ai-highway-control/staccato-ai-highway-control', 'main', 'ai-vm/app/camera_worker.py') },
      { label: 'BBOX Store', description: '최신 탐지 metadata 저장과 전달', url: blob('staccato-ai-highway-control/staccato-ai-highway-control', 'main', 'ai-vm/app/bbox_store.py') },
      { label: 'Event Detector', description: 'Tracking·ROI·movement 기반 event 판단', url: blob('staccato-ai-highway-control/staccato-ai-highway-control', 'main', 'ai-vm/app/event_detector.py') },
      { label: 'Incident Event Service', description: 'DB persistence 이후 Socket.IO event 전달', url: blob('staccato-ai-highway-control/staccato-ai-highway-control', 'main', 'flask-vm/app/modules/incident_event/service.py') },
    ],
    scope: { mine: ['Keras·YOLO·RT-DETR 실험', '모델 비교와 선정 참여', 'Frontend MVP', 'Flask API 일부', 'BBOX metadata 연동', '4 VM 통합·QA'], team: ['전체 Backend domain', 'DB 운영 환경', '관제 서비스 공동 구현'] },
    discussionPoints: [
      {
        question: '왜 Stream FPS와 Inference FPS를 분리했나요?',
        answer: '관제 화면의 stream frame마다 추론하면 AI VM 부하와 지연이 커졌습니다. CameraWorker에서 표시 주기인 target_fps와 분석 주기인 analysis_fps를 독립 설정해 화면 연속성과 탐지 처리량을 따로 조절했습니다.',
        tradeoff: 'analysis_fps를 낮추면 자원 사용은 줄지만 짧은 이벤트를 늦게 탐지할 수 있어 운영 조건별 조정이 필요합니다.',
      },
      {
        question: '왜 BBOX와 함께 원본 Frame 크기를 전달했나요?',
        answer: 'xyxy 좌표만으로는 Frontend가 AI 원본 frame과 현재 표시 영역의 비율을 알 수 없습니다. bbox와 frame_width·frame_height를 함께 전달하고 UI에서 렌더 크기에 맞게 좌표를 변환해 서로 다른 화면에서도 overlay 위치를 유지했습니다.',
        tradeoff: '탐지 계약에 frame metadata가 추가되고 송신·수신 양쪽이 같은 좌표 기준을 지켜야 합니다.',
      },
      {
        question: '왜 DB 저장 후 실시간 이벤트를 전송했나요?',
        answer: 'Socket.IO 이벤트를 먼저 보내면 사용자가 알림을 눌렀을 때 아직 DB에 없는 Incident를 조회할 수 있습니다. DetectionLog·Incident·RealtimeEvent를 commit한 뒤 emit해 실시간 UI와 영속 데이터의 순서를 맞췄습니다.',
        tradeoff: 'DB transaction 시간이 실시간 알림 latency에 포함됩니다.',
        next: '처리량이 커지면 outbox처럼 저장과 전송의 재시도를 보장하는 구조를 향후 검토할 수 있습니다.',
      },
    ],
  },
  'doha-studio': {
    keyDecision: '제품 Workflow와 Model·Audio·Vocal Provider의 lifecycle을 repository 계약으로 분리',
    verificationSummary: 'Workspace·Job contract · Dataset·Artifact validation · Provider boundary evidence',
    decisions: [
      { title: 'Async Job Orchestration', problem: 'Music·Stem·Voice 작업을 동기 API로 묶으면 장시간 요청과 부분 실패를 관리하기 어렵습니다.', decision: 'Pipeline Job과 worker, 단계별 상태·cancel·retry를 분리했습니다.', why: '진행 상태와 실패 지점을 저장하고 긴 AI 작업을 재시도하기 위해서입니다.' },
      { title: 'Provider Abstraction', problem: '제품 코드가 특정 Music·Stem·Voice 모델 runtime에 직접 의존하면 교체와 mock test가 어렵습니다.', decision: 'Provider interface와 adapter/factory로 runtime을 제품 domain에서 분리했습니다.', why: '실제 provider와 mock을 같은 contract로 교체하기 위해서입니다.' },
      { title: 'Workspace / Artifact Lifecycle', problem: '파일 path만 저장하면 어느 job·workspace·사용자 선택에서 생성됐는지 추적하기 어렵습니다.', decision: 'Workspace, Job, Artifact와 Result를 독립 domain으로 관리합니다.', why: '생성 lineage와 사용자 선택, export 재현성을 유지하기 위해서입니다.' },
      { title: 'Model / Runtime Separation', problem: 'Base model과 Adapter, serving 설정을 한 artifact로 취급하면 조합과 release identity가 불명확합니다.', decision: 'DohaLM에서 Base·Adapter·Manifest·Runtime 계약을 분리했습니다.', why: '제품과 독립적으로 모델 조합을 검증하고 version을 추적하기 위해서입니다.', tradeoff: 'Repository 간 호환성 및 release contract 관리가 추가됩니다.' },
    ],
    troubleshooting: [
      { title: 'Pipeline 부분 실패와 재시도', problem: '여러 provider 단계 중 하나가 실패하면 전체 결과와 중간 artifact 상태가 불명확해졌습니다.', decision: 'Pipeline step과 job status를 저장하고 cancel/retry API를 분리했습니다.', verification: 'pipeline API와 file access test, cancel/retry migration으로 확인했습니다.', result: '실패 지점과 재시도 가능한 작업 경계가 명확해졌습니다.' },
      { title: '실제 Provider와 개발 Mock 교체', problem: 'GPU runtime 없이 제품 Workflow를 개발·검증해야 했습니다.', decision: 'Interface·factory·mock provider를 같은 호출 계약으로 구성했습니다.', verification: 'Adapter benchmark와 mock implementation, pipeline test로 점검했습니다.', result: '제품 흐름과 모델 runtime 개발을 병렬로 진행할 수 있습니다.' },
    ],
    verification: [
      { label: 'Pipeline API', detail: 'Pipeline 생성·상태·file access test', status: 'validated' },
      { label: 'Cancel / Retry', detail: 'Job state와 migration, UI flow 구현', status: 'implemented' },
      { label: 'Provider adapters', detail: 'ACE-Step·Demucs·Seed-VC adapter와 benchmark', status: 'implemented' },
      { label: 'Workspace contract', detail: 'Workspace REST와 artifact domain validation', status: 'validated' },
      { label: 'External provider family', detail: 'DohaLM·DohaAudio·DohaVocal 연동 고도화 중', status: 'in-progress' },
      { label: 'LLM lifecycle', detail: 'Dataset governance·evaluation artifact·REST/SSE Runtime 계약', status: 'implemented' },
    ],
    codeEvidence: [
      { label: 'Pipeline Service', description: 'Pipeline job orchestration과 상태 전이', url: blob('DohaStudio/DohaMusic', 'main', 'backend/services/pipeline_service.py') },
      { label: 'Pipeline Executor', description: '단계별 AI 작업 실행과 artifact 연결', url: blob('DohaStudio/DohaMusic', 'main', 'backend/pipeline/executor.py') },
      { label: 'Provider Factory', description: '실제·mock AI provider 선택 경계', url: blob('DohaStudio/DohaMusic', 'main', 'backend/ai/factory.py') },
      { label: 'Workspace Model ADR', description: 'Workspace·Job·Artifact domain 결정', url: blob('DohaStudio/DohaMusic', 'main', 'docs/11-decisions/ADR-029-dohamusic-workspace-artifact-domain.md') },
      { label: 'Pipeline Tests', description: 'Pipeline API와 상태 계약 검증', url: blob('DohaStudio/DohaMusic', 'main', 'backend/tests/test_pipeline_api.py') },
      { label: 'Dataset Governance', description: 'DohaLM dataset review·approval 상태와 전이', url: blob('DohaStudio/DohaLM', 'develop', 'src/data/dataset_governance.py') },
      { label: 'Evaluation Runner', description: 'DohaLM 설정 기반 모델 평가 실행', url: blob('DohaStudio/DohaLM', 'develop', 'scripts/evaluation/run_evaluation.py') },
      { label: 'Adapter Runtime', description: 'DohaLM Adapter와 REST/SSE Runtime 계약', url: blob('DohaStudio/DohaLM', 'develop', 'docs/service/dohalm-adapter-runtime.md') },
      { label: 'Audio Provider', description: 'DohaAudio Provider architecture와 책임 경계', url: 'https://github.com/DohaStudio/DohaAudio' },
      { label: 'Vocal Provider', description: 'DohaVocal 권리·Asset lineage Provider 경계', url: 'https://github.com/DohaStudio/DohaVocal' },
    ],
    scope: { mine: ['제품 architecture', 'FastAPI Backend', 'Pipeline orchestration', 'Provider abstraction', 'Workspace·Artifact domain', 'Studio·Result UI'] },
    discussionPoints: [
      {
        question: '왜 AI 작업을 동기 API 하나로 처리하지 않았나요?',
        answer: 'Music·Stem·Voice 단계는 실행 시간이 길고 일부 단계만 실패할 수 있습니다. Pipeline Job과 worker를 분리하고 단계별 상태·cancel·retry를 저장해 요청 연결이 끝나도 진행 상황과 재시도 지점을 유지하도록 구성했습니다.',
        tradeoff: '동기 API보다 상태 전이, 중간 Artifact 정리와 worker 오류 처리가 복잡해집니다.',
      },
      {
        question: '왜 AI Provider를 Product와 분리했나요?',
        answer: '제품 Workflow와 ACE-Step·Demucs·Seed-VC Runtime은 변경 주기와 실행 환경이 다릅니다. Provider interface와 factory 뒤에 모델을 두어 실제 Adapter와 Mock을 같은 계약으로 교체하고 Studio 개발을 Runtime 준비와 분리했습니다.',
        next: 'DohaLM·DohaAudio·DohaVocal은 현재 외부 Provider 연동을 고도화 중이며, 완성된 연결로 표시하지 않습니다.',
      },
      {
        question: '왜 Workspace · Job · Artifact를 분리했나요?',
        answer: 'Workspace는 사용자의 제작 문맥과 선택 상태, Job은 실행과 상태 전이, Artifact는 생성 파일과 lineage를 담당합니다. 파일 path 하나로 축약하지 않아 어떤 작업이 어떤 입력으로 결과를 만들었는지 추적하고 Result·Export를 재현할 수 있습니다.',
        tradeoff: '각 entity의 수명 주기와 삭제·재시도 시 참조 정합성을 별도로 관리해야 합니다.',
      },
      {
        question: '하나의 monorepo 대신 여러 repository로 분리한 trade-off는 무엇인가요?',
        answer: '제품, LLM 모델, Audio와 Vocal Provider의 실행 환경과 변경 주기를 독립적으로 관리할 수 있지만 통합 contract를 별도로 유지해야 합니다. 현재는 Job·Artifact·Manifest 경계를 문서와 코드 증거로 맞추는 데 집중하고 있습니다.',
        tradeoff: '공통 타입 변경과 통합 테스트가 단일 repository보다 느리고 version 호환성 관리가 필요합니다.',
        next: '운영 확장 전에는 실제 변경 빈도를 기준으로 공통 contract package 범위와 자동 통합 검증을 우선 정리하겠습니다.',
      },
    ],
  },
}
