export type DevelopmentStatus = 'verified' | 'in-progress' | 'planned' | 'blocked'

export type LLMStage = {
  id: string
  label: string
  status: DevelopmentStatus
  evidence: string
}

export const repositoryUrl = 'https://github.com/DDORINY/DohaLM/tree/develop'
const documentRoot = 'https://github.com/DDORINY/DohaLM/blob/develop/docs'

export const statusLabels: Record<DevelopmentStatus, string> = {
  verified: 'VERIFIED',
  'in-progress': 'IN PROGRESS',
  planned: 'PLANNED',
  blocked: 'BLOCKED',
}

export const hawkServiceFlow = ['Dataset', 'Qwen Base', 'LoRA Fine-Tuning', 'FastAPI AI Serving', 'Backend AI Client', 'Board / Chat Frontend'] as const

export const hawkContributions = [
  '게시판 기능 구현',
  '게시판 Frontend ↔ Backend 연결',
  'Backend ↔ FastAPI AI Serving 연결',
  'Qwen + LoRA 게시글 생성 서비스 연동',
  '구조화 응답 처리',
  'Chat API / Navigation Action 연동',
  'AI 추천 결과 Frontend UI 연결',
] as const

export const hawkEvidence = [
  { label: 'MODEL', value: 'Qwen + LoRA' },
  { label: 'INFERENCE', value: 'FastAPI' },
  { label: 'BOARD API', value: 'POST /api/ai/board' },
  { label: 'CHAT API', value: 'POST /api/ai/chat' },
  { label: 'ORCHESTRATION', value: 'LangChain / LangGraph' },
  { label: 'SERVICE PATH', value: 'Frontend → Backend → AI Serving' },
] as const

export const structuredOutputFlow = ['LLM Output', 'JSON Recovery', 'Pydantic Parser', 'Validation', 'title / summary / content'] as const

export const langGraphNodes = [
  { label: 'START', detail: 'Request' },
  { label: 'validate_input', detail: 'Schema & context' },
  { label: 'classify_intent', detail: 'Intent routing' },
  { label: 'NAVIGATION', detail: 'create_navigation_action' },
  { label: 'OTHER', detail: 'generate_answer' },
  { label: 'format_response', detail: 'Structured response' },
  { label: 'END', detail: 'Board / Chat UI' },
] as const

export const langGraphIntents = ['GENERAL', 'INSPECTION', 'BOARD', 'STATISTICS', 'NAVIGATION'] as const

export const dohaLmArchitecture = ['Dataset Governance', 'Tokenizer / Dataset', 'Foundation Training', 'Evaluation', 'Model / Adapter Artifact', 'Inference Runtime', 'REST / SSE API'] as const

export const dohaLmPhases = [
  { phase: 'PHASE 1', title: 'FOUNDATION MODEL', status: 'in-progress' as DevelopmentStatus, items: ['DohaLM-Tiny · VERIFIED', 'Candidate evaluation · IN PROGRESS', 'Dataset governance · IN PROGRESS', 'Training readiness · VERIFIED'] },
  { phase: 'PHASE 2', title: 'REUSABLE MODEL', status: 'in-progress' as DevelopmentStatus, items: ['Qwen', 'LoRA / QLoRA Adapter', 'Model Manifest', 'Validator / Loader'] },
  { phase: 'PHASE 3', title: 'RUNTIME & DISTRIBUTION', status: 'in-progress' as DevelopmentStatus, items: ['FastAPI REST · IMPLEMENTED', 'SSE MVP · IMPLEMENTED', 'Versioned release · IN PROGRESS', 'Python SDK · PLANNED'] },
] as const

export const trainingPipeline = ['Raw Dataset', 'Validation', 'Split', 'Tokenizer', 'Training', 'Checkpoint', 'Evaluation', 'Artifact / Manifest'] as const

export const llmStackGroups = [
  { label: 'MODEL / TRAINING', items: ['Qwen', 'Transformers', 'PEFT', 'LoRA', 'QLoRA', 'PyTorch'] },
  { label: 'SERVING', items: ['FastAPI', 'SSE', 'Pydantic', 'HuggingFace Pipeline'] },
  { label: 'ORCHESTRATION', items: ['LangChain', 'LangGraph', 'Structured Output'] },
  { label: 'DATA / EVALUATION', items: ['JSONL', 'Dataset Validation', 'Evaluation Pipeline', 'Model Manifest'] },
] as const

export const overviewCards = [
  { code: 'TOKENIZER', title: 'Korean Tokenizer', description: '한국어 말뭉치를 기반으로 SentencePiece Unigram 토크나이저를 학습하고 운영 Bundle로 검증했습니다.' },
  { code: 'MODEL', title: 'Transformer From Scratch', description: 'Embedding, Causal Attention, Feed Forward Network, Pre-LayerNorm과 LM Head를 PyTorch로 직접 구현했습니다.' },
  { code: 'TRAINING', title: 'Training Foundation', description: 'AMP, Gradient Accumulation, Checkpoint와 Resume를 포함한 재현 가능한 학습 시스템을 구성했습니다.' },
  { code: 'EVIDENCE', title: 'Evidence-Driven Development', description: '구현 여부가 아니라 테스트와 실행 증거를 기준으로 각 개발 단계의 완료 상태를 판단합니다.' },
] as const
export const developmentRows: LLMStage[] = [
  { id: 'environment', label: '환경 및 설정', status: 'verified', evidence: 'Windows·Python·PyTorch·CUDA·GPU 실행 환경 검증' },
  { id: 'data', label: '데이터 파이프라인', status: 'verified', evidence: '승인 데이터 처리·검증·lineage 흐름 구현' },
  { id: 'tokenizer', label: '16k Unigram Tokenizer', status: 'verified', evidence: 'operating-16k-v2/unigram-16k 운영 승인' },
  { id: 'components', label: 'Transformer Components', status: 'verified', evidence: 'Embedding·Attention·FFN·Pre-LN 모듈 테스트' },
  { id: 'integrated-model', label: 'Integrated Model', status: 'verified', evidence: 'Forward·Shifted Loss·Greedy Generation 검증' },
  { id: 'trainer', label: 'Trainer Foundation', status: 'verified', evidence: 'FP16 AMP·Checkpoint·Resume 검증' },
  { id: 'overfit', label: 'Tiny Corpus Overfit', status: 'verified', evidence: '동일 64문서 1,000-step memorization 검증' },
  { id: 'pilot', label: 'Pilot / Candidate A Evidence', status: 'in-progress', evidence: 'develop 실행 문서와 상단 README 상태가 충돌해 증거 상태 검토 중' },
  { id: 'pretraining', label: 'Additional Pretraining', status: 'blocked', evidence: '추가 학습 승인·데이터 조건·Gate 8 검토 필요' },
  { id: 'evaluation', label: 'Generalization Evaluation', status: 'planned', evidence: '평가 계획만 존재하며 일반화 결과 없음' },
  { id: 'sft', label: 'SFT', status: 'planned', evidence: '계획·scaffold만 존재' },
  { id: 'api-ui', label: 'FastAPI / Chat UI', status: 'planned', evidence: '서버·프론트엔드 scaffold만 존재' },
]

export const pipelineStages: LLMStage[] = [
  { id: 'corpus', label: 'Korean Corpus', status: 'verified', evidence: 'Approved source scope' },
  { id: 'validation', label: 'Data Validation', status: 'verified', evidence: 'Schema·license·lineage' },
  { id: 'sp-tokenizer', label: 'SentencePiece', status: 'verified', evidence: '16k Unigram bundle' },
  { id: 'packing', label: 'Token Packing', status: 'verified', evidence: 'Packed token sampling' },
  { id: 'transformer', label: 'Transformer', status: 'verified', evidence: 'Decoder-only model' },
  { id: 'training', label: 'Tiny Training', status: 'verified', evidence: 'Trainer + overfit evidence' },
  { id: 'eval', label: 'Evaluation', status: 'planned', evidence: 'No generalization result' },
  { id: 'fine-tuning', label: 'SFT', status: 'planned', evidence: 'Plan only' },
  { id: 'inference', label: 'FastAPI Inference', status: 'planned', evidence: 'Scaffold only' },
  { id: 'frontend', label: 'Next.js Chat UI', status: 'planned', evidence: 'Scaffold only' },
]

export const modelSpecs = [
  ['Architecture', 'Decoder-only Transformer'],
  ['Transformer Layers', '6'],
  ['Hidden Size', '384'],
  ['Attention Heads', '6'],
  ['Head Dimension', '64'],
  ['FFN Size', '1,536'],
  ['Context Length', '256'],
  ['Vocabulary', '16,000'],
  ['Normalization', 'Pre-LayerNorm'],
  ['Position Embedding', 'Learned Absolute'],
  ['Weight Tying', 'Applied'],
  ['Parameters', '16,889,856'],
] as const

export const architectureFlow = [
  'TOKEN IDS',
  'TOKEN + POSITION EMBEDDING',
  '6 × TRANSFORMER BLOCK',
  'PRE-LN · CAUSAL MHA · RESIDUAL',
  'PRE-LN · FFN · RESIDUAL',
  'FINAL LAYERNORM',
  'TIED LM HEAD',
  'NEXT TOKEN LOGITS',
] as const

export const tokenizerFacts = [
  ['METHOD', 'SentencePiece Unigram'],
  ['VOCABULARY', '16,000'],
  ['OPERATING BUNDLE', 'operating-16k-v2/unigram-16k'],
  ['SPECIAL TOKEN IDS', '0–7'],
] as const

export const tokenizerChecks = ['Vocabulary size', 'Special token mapping', 'Encode / decode round trip', 'Sample UNK 0%', 'Artifact identity', 'Operating bundle approval'] as const

export const modelModules = [
  { label: 'EMBEDDING', values: ['Token Embedding', 'Learned Position Embedding'] },
  { label: 'ATTENTION', values: ['Causal Multi-Head Attention', 'Causal Mask', 'Padding Mask'] },
  { label: 'TRANSFORMER BLOCK', values: ['Pre-LayerNorm', 'Residual Connection', 'Feed Forward Network'] },
  { label: 'LANGUAGE MODELING', values: ['Tied LM Head', 'Shifted Cross-Entropy', 'Greedy Generation'] },
] as const

export const modelChecks = ['Shape', 'Backward', 'Causal Mask', 'Parameter Count', 'CPU Smoke', 'CUDA FP16 Smoke', 'State Dict Round Trip'] as const

export const trainerFeatures = ['FP16 Automatic Mixed Precision', 'Gradient Accumulation', 'Gradient Clipping', 'Cosine LR Schedule', 'Packed Token Sampling', 'Checkpoint Save', 'Checkpoint Resume', 'VRAM Measurement'] as const

export const trainingFlow = ['PACKED TOKEN BATCH', 'FORWARD', 'SHIFTED LM LOSS', 'AMP SCALED BACKWARD', 'GRADIENT ACCUMULATION', 'GRADIENT CLIPPING', 'OPTIMIZER + SCHEDULER', 'CHECKPOINT + LOGGING'] as const

export const hardwareSpecs = [
  ['GPU', 'NVIDIA GeForce RTX 3060 Ti'],
  ['VRAM', '8,192 MiB'],
  ['GPU Count', 'Single GPU'],
  ['OS', 'Windows 11'],
  ['Python', '3.12.5'],
  ['PyTorch', '2.7.1+cu118'],
  ['CUDA Build', '11.8'],
  ['Precision', 'FP16 Mixed Precision'],
] as const

export const gates = [
  ['GATE 1', 'Environment & Configuration'],
  ['GATE 2', 'Data Pipeline'],
  ['GATE 3', 'Tokenizer'],
  ['GATE 4', 'Model Components'],
  ['GATE 5', 'Integrated Model'],
  ['GATE 6', 'Trainer Foundation'],
  ['GATE 7', 'Tiny Corpus Overfit'],
] as const

export const evidenceMetrics = [
  { value: '571', label: 'GATE TESTS PASSED' },
  { value: '99.9047%', label: 'PACKED TOP-1' },
  { value: '4 / 4', label: 'EXACT CONTINUATIONS' },
  { value: 'VERIFIED', label: 'CHECKPOINT / RESUME' },
] as const

export const verifiedResults = ['16k Unigram Tokenizer', '16,889,856 Parameters', 'Forward & Shifted Loss', 'Greedy Generation', 'FP16 CUDA Training', 'Checkpoint Save & Resume', '1,000-step Tiny Overfit', '571 Gate Tests'] as const
export const notCompleted = ['Additional / Full Pretraining', 'Generalization Evaluation', 'SFT', 'FastAPI Inference', 'Next.js Chat UI', 'Production Deployment', 'Leaderboard Submission'] as const

export const governancePrinciples = ['Approved Data Only', 'Raw Data Excluded from Git', 'Source Immutability', 'Data Lineage Recording', 'License Verification', 'Privacy Review', 'Train / Evaluation Leakage Prevention', 'Large Artifacts Excluded'] as const

export const roadmap = [
  { phase: 'PHASE 0–4', label: 'Environment · Data · Tokenizer · Model', status: 'verified' as DevelopmentStatus },
  { phase: 'PHASE 5 FOUNDATION', label: 'Trainer · Checkpoint · Tiny Overfit', status: 'verified' as DevelopmentStatus },
  { phase: 'GATE 8 REVIEW', label: 'Pretraining evidence convergence', status: 'in-progress' as DevelopmentStatus },
  { phase: 'NEXT', label: 'Evaluation · SFT', status: 'planned' as DevelopmentStatus },
  { phase: 'SERVICE', label: 'FastAPI · Next.js · Deployment', status: 'planned' as DevelopmentStatus },
] as const

export const documents = [
  { category: 'PROJECT', title: 'Project Overview', status: 'review', href: `${documentRoot}/project/overview.md` },
  { category: 'PROJECT', title: 'Scope & Goals', status: 'review', href: `${documentRoot}/project/scope-and-goals.md` },
  { category: 'ARCHITECTURE', title: 'Model Architecture', status: 'approved', href: `${documentRoot}/architecture/model-architecture.md` },
  { category: 'TRAINING', title: 'Tokenizer Design', status: 'implemented', href: `${documentRoot}/training/tokenizer-design.md` },
  { category: 'TRAINING', title: 'Trainer Foundation', status: 'implemented', href: `${documentRoot}/training/trainer-foundation.md` },
  { category: 'DATA', title: 'Data Strategy', status: 'review', href: `${documentRoot}/data/data-strategy.md` },
  { category: 'QUALITY', title: 'Test Strategy', status: 'review', href: `${documentRoot}/quality/test-strategy.md` },
  { category: 'QUALITY', title: 'Gate 7 Evidence', status: 'approved', href: `${documentRoot}/training/aihub-71748-gate7-tiny-overfit.md` },
  { category: 'ROADMAP', title: 'Development Roadmap', status: 'review', href: `${documentRoot}/quality/development-roadmap.md` },
  { category: 'ADR', title: 'Architecture Decisions', status: 'index', href: `${documentRoot}/decisions/README.md` },
] as const
