# AI Service Developer 기술면접 가이드

> 기준일: 2026-08-27  
> 포지셔닝: **AI Service Developer · LLM · AI Backend · Service Integration**  
> 답변 원칙: 구현한 것, 코드로 확인한 것, 이론적으로 알고 있는 것, 향후 설계를 구분해서 말한다.

## 근거와 범위

- HAWK-AI: `backend/main`, `ai-serving/main`, `LLM/main`, `frontend/main`
- DohaLM: 기본 `main`은 현재 LICENSE만 포함한다. 아래 구현 답변은 **`develop` 브랜치**의 governance, evaluation, runtime, adapter 자료를 기준으로 한다.
- STACCATO: 공개 저장소 `staccato-ai-highway-control/staccato-ai-highway-control/main`과 포트폴리오의 검증 수치를 기준으로 한다.
- DohaMusic: `DohaStudio/DohaMusic/main`의 pipeline, provider, workspace/artifact ADR과 테스트를 기준으로 한다.
- 코드 근거: [HAWK Backend AI Client](https://github.com/hawk-ai-project/backend/blob/main/client/ai_client.py), [HAWK Chat Graph](https://github.com/hawk-ai-project/ai-serving/blob/main/LLM/chat_graph.py), [HAWK Schemas](https://github.com/hawk-ai-project/ai-serving/blob/main/LLM/schemas.py), [DohaLM Governance](https://github.com/DohaStudio/DohaLM/blob/develop/src/data/dataset_governance.py), [DohaLM Evaluation](https://github.com/DohaStudio/DohaLM/blob/develop/scripts/evaluation/run_evaluation.py), [STACCATO Camera Worker](https://github.com/staccato-ai-highway-control/staccato-ai-highway-control/blob/main/ai-vm/app/camera_worker.py), [STACCATO Event Service](https://github.com/staccato-ai-highway-control/staccato-ai-highway-control/blob/main/flask-vm/app/modules/incident_event/service.py), [DohaMusic Pipeline Service](https://github.com/DohaStudio/DohaMusic/blob/main/backend/services/pipeline_service.py).

---

## 01 자기소개

### 30초 자기소개

안녕하세요. LLM과 AI 모델을 Python Backend와 실제 서비스 기능으로 연결하는 AI Service Developer 김도하입니다. HAWK-AI에서는 Backend와 AI Serving 사이의 응답 계약과 챗봇·게시글 생성 흐름을 다뤘고, STACCATO에서는 객체 탐지 결과를 API·DB·실시간 관제 UI까지 연결했습니다. 현재는 DohaLM의 데이터 거버넌스·평가·Runtime과 DohaMusic의 비동기 생성 파이프라인을 개발하며 모델과 제품 사이의 경계를 깊게 만들고 있습니다.

### 1분 자기소개

안녕하세요. 저는 모델 자체만 학습하는 것보다 모델 결과가 실제 사용자 기능으로 안전하게 전달되는 과정에 강점이 있는 AI Service Developer 김도하입니다. HAWK-AI에서는 Frontend가 AI 서버를 직접 호출하지 않고 Backend를 거치게 해 인증과 도메인 규칙, timeout과 응답 검증을 한곳에서 관리했습니다. STACCATO에서는 YOLO11s를 최종 모델로 선정하고 BBOX metadata, frame 크기, 이벤트 저장과 Socket.IO 전달 순서를 실제 관제 흐름으로 연결했습니다. DohaLM에서는 데이터 review·approval·publication과 평가 artifact 경계를, DohaMusic에서는 Workspace·Job·Artifact와 provider abstraction을 다루고 있습니다. 이전 5년 8개월의 운영 경험에서 익힌 사용자 흐름과 데이터 관리 관점을 서비스 설계와 검증 기준에 연결하는 것이 제 차별점입니다.

---

## 02 프로젝트 30초 / 1분 소개

### HAWK-AI

**30초:** 폐기물 점검 서비스에 챗봇, 모델 추천, 게시글 초안 생성을 연결한 팀 프로젝트입니다. 저는 Backend와 FastAPI AI Serving 사이의 계약, JSON·필수 필드 검증, LangGraph 의도 분기와 Navigation Action 경계를 중심으로 설명할 수 있습니다. AI 장애가 서비스 전체 오류로 번지지 않도록 timeout과 연결·응답 오류를 구분했습니다.

**1분:** HAWK-AI의 핵심은 AI 결과를 기존 점검·게시판 서비스 안에 안전하게 넣는 것이었습니다. Frontend가 AI Serving을 직접 호출하지 않고 Backend를 통해 요청하도록 해 사용자 권한, 서비스 context와 게시판 domain을 Backend에서 관리했습니다. AI Client는 connect/read timeout과 502·503·504 성격의 오류를 구분하고, 게시글 초안은 title·summary·content를 모두 검증합니다. Chat은 LangGraph로 입력 검증, intent 분류, 일반 답변·일상 대화·Navigation Action을 분리했습니다. 팀 전체 구현을 제 것으로 말하지 않고, 제가 설명 가능한 통합 경계와 검증 근거를 명확히 구분합니다.

### DohaLM

**30초:** 데이터 준비부터 학습·평가·adapter runtime까지 재사용 가능한 한국어 LLM 개발 과정을 제품화하는 프로젝트입니다. 현재 실제 구현은 develop 브랜치에 있으며, dataset governance, publication, evaluation artifact와 REST/SSE runtime 근거가 있습니다. 완료된 상용 모델이라고 말하지 않고 단계별 상태를 구분합니다.

**1분:** DohaLM은 단일 학습 스크립트가 아니라 어떤 데이터와 승인으로 어떤 모델 artifact가 만들어졌는지 추적할 수 있는 제품 경계를 만드는 프로젝트입니다. Review, approval, publication을 분리해 검토 중 데이터와 학습 허용 데이터를 혼동하지 않게 했고 license·rights metadata도 승인 근거에 포함합니다. Tiny foundation 단계는 tokenizer와 training loop를 작은 비용으로 검증하기 위한 것이고, 이후 Qwen 기반 QLoRA와 adapter runtime으로 확장합니다. 평가는 loss 하나가 아니라 candidate 비교와 generation·decoding artifact를 남깁니다. main이 아니라 develop에 구현이 있다는 점과 production release가 아직 진행 중이라는 점을 솔직히 설명합니다.

### STACCATO

**30초:** 고속도로 CCTV 영상의 차량을 탐지하고 이벤트를 DB와 실시간 관제 UI로 전달한 팀 프로젝트입니다. 20,000장 데이터로 비교한 최종 YOLO11s는 Precision 0.9210, Recall 0.8670, F1 0.8932, mAP50 0.9290이었습니다. 저는 모델 비교, BBOX 통합, Flask API와 4 VM 연결·QA를 중심으로 설명합니다.

**1분:** STACCATO는 모델 성능표에서 끝나지 않고 탐지 결과를 운영 이벤트로 만드는 프로젝트입니다. YOLO와 RT-DETR 후보를 동일 지표로 비교하고 서비스 지연과 통합 난이도까지 고려해 YOLO11s를 선택했습니다. Camera worker에서는 영상 stream FPS와 inference FPS를 분리했고, BBOX와 함께 frame_width·frame_height를 전달해 UI가 좌표를 정확히 스케일링하도록 했습니다. 이벤트는 DB commit이 끝난 뒤 Socket.IO로 emit해 사용자가 알림을 받았는데 조회가 안 되는 불일치를 줄였습니다. 다만 실제 대규모 상용 트래픽 운영 경험으로 과장하지 않고 팀 프로젝트 통합·QA 범위로 답합니다.

### DohaMusic

**30초:** 가사·음악·보컬 처리 단계를 하나의 Workspace 안에서 Job과 Artifact로 관리하는 AI 음악 제작 제품입니다. 긴 생성 작업을 synchronous 요청 하나로 묶지 않고 pipeline job으로 저장한 뒤 dispatcher가 실행합니다. Provider abstraction과 cancel·retry 상태 계약이 핵심입니다.

**1분:** DohaMusic은 여러 AI provider의 결과를 단계별 artifact로 연결하는 작업형 제품입니다. Workspace는 사용자의 편집 문맥, Job은 실행 상태와 재시도 단위, Artifact는 재생·다운로드·후속 단계 입력을 나타냅니다. PipelineService는 요청과 input snapshot을 먼저 DB에 저장하고 session을 닫은 뒤 dispatcher에 job id를 넘깁니다. 실패·취소된 작업만 retry할 수 있고 기존 retry가 있으면 재사용해 중복 실행을 막습니다. Provider 추상화는 실제·mock 구현을 교체하기 쉽지만 공통 계약이 공급자별 기능을 지나치게 평준화할 수 있다는 trade-off가 있습니다.

---

## 03 HAWK-AI 질문

### Q1 [INTERMEDIATE] 왜 AI Serving을 Backend와 분리하고 Frontend → Backend → AI Serving 구조를 사용했나요?

**SHORT ANSWER**  
Frontend가 AI 서버를 직접 호출하면 인증, 서비스 context, 모델 주소와 오류 처리가 UI에 노출됩니다. Backend를 gateway로 두어 도메인 규칙과 요청 계약을 관리하고 AI Serving은 추론과 graph 실행에 집중시켰습니다. 대신 hop과 배포 단위가 늘어나는 복잡성은 감수했습니다.

**DEEP ANSWER**  
HAWK에서는 게시판과 점검 데이터가 이미 Backend domain에 있었습니다. 그래서 Backend가 필요한 context를 구성하고 AI Serving에 전달하는 편이 권한과 데이터 경계를 유지하기 쉬웠습니다. 실제 `ai_client.py`는 connect/read timeout, 연결 실패, 503, invalid JSON을 서로 다른 오류로 바꿉니다. AI Serving은 FastAPI와 LangChain·LangGraph 흐름에 집중할 수 있고 GPU 환경도 별도로 배포할 수 있습니다. 반면 작은 서비스라면 monolith가 운영상 더 단순할 수 있으므로, 모델 의존성과 배포 요구가 작다면 분리가 항상 정답은 아닙니다.

**KEY POINTS** Backend는 domain·권한·오류 계약, AI Serving은 추론·graph 책임.  
**FOLLOW-UP** 작은 서비스라면 monolith가 낫지 않나요? 모델 서버가 죽으면 어떻게 하나요?  
**AVOID** “MSA가 무조건 좋아서 분리했습니다.”

### Q2 [ADVANCED] LLM output이 깨진 JSON이면 어떻게 처리했고 Structured Output과 Pydantic이 왜 필요한가요?

**SHORT ANSWER**  
AI Client에서 HTTP body가 JSON인지, 객체인지, 필요한 필드가 문자열인지 순서대로 검증합니다. 게시글은 title·summary·content가 모두 비어 있지 않아야 통과합니다. Structured Output은 생성 결과를 서비스 계약으로 바꾸지만 hallucination 자체를 완전히 제거하지는 못합니다.

**DEEP ANSWER**  
문자열을 바로 화면이나 DB에 사용하면 parsing 실패와 누락 필드가 뒤늦게 나타납니다. HAWK Backend는 invalid JSON과 잘못된 객체·배열 형태를 502 성격의 `AIResponseError`로 바꿉니다. AI Serving의 `BoardDraft` Pydantic schema는 길이와 blank 값을 검증합니다. 이중 검증은 서비스 경계마다 신뢰 수준이 다르기 때문입니다. schema 재시도나 repair 전략은 가능하지만 무한 재시도보다 명확한 실패와 사용자 재시도 안내가 안전합니다.

**KEY POINTS** syntax, shape, required field, business usability를 구분해 검증.  
**FOLLOW-UP** 그냥 문자열로 쓰면 안 되나요? validation 실패 시 재시도할 건가요?  
**AVOID** “Structured Output이면 잘못된 답은 절대 나오지 않습니다.”

### Q3 [INTERMEDIATE] LangChain과 LangGraph를 각각 어디에 왜 사용했나요?

**SHORT ANSWER**  
LangChain은 prompt·model·parser를 연결하는 생성 chain에 사용하고, LangGraph는 입력 검증부터 intent 분기와 응답 formatting까지 상태 흐름에 사용했습니다. 단일 생성은 chain이 단순하고, 조건 분기와 action이 있는 chat은 graph가 읽기 쉽습니다. 모든 요청에 LangGraph가 필요한 것은 아닙니다.

**DEEP ANSWER**  
게시글 생성은 입력을 prompt에 넣고 구조화된 초안을 받는 선형 흐름이라 chain이 맞습니다. Chat은 validate_input, classify_intent, answer·casual·navigation 분기, format_response 단계가 있습니다. `chat_graph.py`에서 StateGraph의 conditional edge로 이 분기를 명시합니다. 이 구조는 node별 테스트와 실패 위치 파악에 유리합니다. 하지만 분기가 두세 개뿐인 작은 로직은 일반 함수가 더 단순할 수 있으므로 graph 비용을 인정해야 합니다.

**KEY POINTS** 선형 생성은 Chain, 상태·조건 분기는 Graph.  
**FOLLOW-UP** LangGraph가 꼭 필요한가요? graph state에는 무엇이 있나요?  
**AVOID** 라이브러리를 썼다는 사실만 말하고 node·edge를 설명하지 못하는 답.

### Q4 [ADVANCED] Chat intent classification과 Navigation Action은 어떻게 구성했고 왜 일반 답변과 분리했나요?

**SHORT ANSWER**  
현재 구현은 navigation verb·route keyword와 서비스 keyword, casual pattern을 규칙 기반으로 분류합니다. Navigation은 LLM 자유 생성이 아니라 allowlist의 내부 path와 label만 반환합니다. 화면 이동은 실행 가능한 command이므로 일반 답변보다 더 엄격한 계약이 필요합니다.

**DEEP ANSWER**  
입력은 빈 값과 500자 제한을 먼저 검증합니다. 그다음 NAVIGATION, BOARD, STATISTICS, INSPECTION, CASUAL_CHAT, GENERAL로 분류합니다. Navigation Action은 `/inspection`, `/histories`, `/analytics` 같은 등록된 route만 생성하고 Backend에서도 허용 path를 다시 sanitize합니다. 이는 prompt injection이나 잘못된 외부 URL 이동을 줄이는 방어입니다. 규칙 기반 분류는 예측 가능하지만 표현 다양성에 약하므로 테스트 corpus를 늘리거나 제한된 classifier로 교체할 수 있습니다.

**KEY POINTS** 답변 text와 실행 action의 신뢰 경계가 다름.  
**FOLLOW-UP** 새로운 route는 어떻게 추가하나요? 규칙 충돌은 어떻게 테스트하나요?  
**AVOID** “LLM이 알아서 intent를 정확히 분류합니다.”

### Q5 [PRESSURE] Qwen을 직접 학습한 건가요, API만 호출한 건가요? Qwen + LoRA는 왜 썼나요?

**SHORT ANSWER**  
HAWK LLM 저장소에는 Qwen 기반 모델 파일과 LoRA 학습·평가·export 스크립트가 있습니다. 저는 팀 전체 학습을 혼자 했다고 말하지 않고, 제가 담당하고 설명 가능한 serving·integration 범위와 저장소 근거를 구분합니다. LoRA는 전체 weight를 다시 학습하지 않고 작은 adapter를 학습해 자원과 배포 비용을 줄이는 선택입니다.

**DEEP ANSWER**  
LoRA는 frozen base weight에 low-rank update를 추가하고 그 adapter parameter를 학습합니다. 그래서 full fine-tuning보다 GPU memory와 artifact 크기가 작습니다. Base model version, tokenizer, adapter config와 weight, prompt format을 함께 관리해야 재현할 수 있습니다. 한계는 domain 변화가 크면 작은 rank가 충분하지 않을 수 있고 base model 의존성이 남는다는 점입니다. 실제 학습 기여와 AI Serving 통합 기여를 GitHub commit과 파일 단위로 구분해 답하겠습니다.

**KEY POINTS** base 전체가 아니라 adapter parameter 학습, 소유 범위 과장 금지.  
**FOLLOW-UP** 어떤 parameter가 학습되나요? base와 adapter 배포 시 무엇을 관리하나요?  
**AVOID** “Qwen을 처음부터 직접 만들었습니다.”

### Q6 [ADVANCED] LLM이 후보 외 model ID를 반환하면 어떻게 해야 하나요?

**SHORT ANSWER**  
LLM 출력은 후보 ID allowlist와 교차 검증해야 합니다. 후보 외 ID는 버리거나 warning으로 남기고, 유효 후보가 없으면 추천 실패로 처리해야 합니다. 존재하지 않는 모델을 그럴듯하게 보정해 저장하면 안 됩니다.

**DEEP ANSWER**  
추천 결과는 자연어가 아니라 catalog entity를 참조하므로 referential integrity가 필요합니다. 요청 시 후보 ID를 함께 전달하고 결과 schema를 검증한 뒤 server-side allowlist를 적용하는 것이 안전합니다. 중복 ID와 ranking 범위도 검사할 수 있습니다. 실패 시 deterministic fallback ranking을 쓰려면 그 기준이 제품 정책으로 정의돼 있어야 합니다. 현재 구현 범위를 넘어 자동 fallback 성능이 검증됐다고 말하지는 않습니다.

**KEY POINTS** 생성 결과도 domain catalog를 통과해야 함.  
**FOLLOW-UP** 유효 후보가 하나만 남으면? fallback 기준은 누가 정하나요?  
**AVOID** LLM이 반환했으니 존재하는 ID라고 가정하는 답.

### Q7 [INTERMEDIATE] AI Serving 장애 시 Backend는 어떻게 동작하고 어떤 fallback이 더 필요한가요?

**SHORT ANSWER**  
현재 Client는 timeout을 504, 연결·503을 서비스 불가, 잘못된 응답을 502 성격으로 구분합니다. 요청 ID, endpoint, status와 elapsed time만 기록하고 민감한 prompt와 context는 로그에서 제외합니다. 제품 fallback은 기능별로 재시도, 수동 입력, 캐시된 결과 중 무엇이 맞는지 정해야 합니다.

**DEEP ANSWER**  
장애를 전부 500으로 처리하면 사용자가 재시도할 수 있는지 판단하기 어렵습니다. HAWK Client는 connect/read timeout을 분리하고 upstream 503도 별도 예외로 바꿉니다. 게시글 초안 생성 실패 시 사용자가 직접 작성할 수 있게 하는 것이 핵심 서비스의 가용성을 지킵니다. retry는 멱등성과 부하 증폭을 고려해 제한적으로 적용해야 합니다. circuit breaker와 queue는 향후 production 설계이며 현재 구현했다고 말하지 않습니다.

**KEY POINTS** 오류 분류, 안전한 로그, AI 없이 가능한 core flow.  
**FOLLOW-UP** retry 횟수는? circuit breaker가 필요한 시점은?  
**AVOID** “fallback이 있어서 항상 성공합니다.”

### Q8 [INTERMEDIATE] 게시판과 AI 생성 기능은 어떻게 연결했나요?

**SHORT ANSWER**  
Backend의 Board Draft Service가 게시판 domain 입력을 AI Client payload로 변환하고 결과 초안을 반환합니다. AI Serving이 title·summary·content를 생성하며 양쪽에서 필수 필드를 검증합니다. 최종 게시글 저장은 사용자의 확인과 기존 게시판 흐름을 따릅니다.

**DEEP ANSWER**  
생성과 저장을 한 요청에서 자동 완료하면 잘못된 내용이 바로 공개될 수 있습니다. 그래서 AI 결과를 draft로 취급하고 Frontend 작성 화면에서 정규화해 사용자가 수정할 수 있게 했습니다. Backend는 location, waste summary, priority 같은 domain field를 snake_case AI payload로 바꿉니다. 응답 필드가 빠지면 게시판 데이터로 넘기지 않습니다. 이 경계가 AI 보조 기능과 authoritative business data를 분리합니다.

**KEY POINTS** AI 결과는 draft, 게시 결정은 기존 domain과 사용자.  
**FOLLOW-UP** 자동 저장하지 않은 이유는? prompt에 어떤 context를 넣나요?  
**AVOID** “AI가 게시글을 자동으로 확정합니다.”

### Q9 [PRESSURE] FastAPI AI Serving 분리는 오히려 복잡하고 LangGraph도 과한 것 아닌가요?

**SHORT ANSWER**  
맞습니다. 서비스가 작고 모델 배포 주기가 같다면 monolith와 일반 함수가 더 경제적입니다. HAWK에서는 GPU·Python 의존성과 기존 Backend domain, 조건형 chat flow가 분리 근거였습니다. 복잡성 비용보다 독립 배포와 계약 테스트 가치가 클 때만 선택해야 합니다.

**DEEP ANSWER**  
분리하면 network failure, timeout, schema versioning과 observability가 추가됩니다. LangGraph도 node와 state를 이해해야 하는 학습 비용이 있습니다. 대신 모델 환경을 Backend와 독립적으로 바꾸고 chat의 분기와 action을 node별로 테스트할 수 있습니다. 저는 기술을 썼다는 사실보다 이 비용을 감당할 이유가 있었는지를 설명하겠습니다. 규모가 줄면 합치는 결정도 합리적입니다.

**KEY POINTS** 선택의 장점과 운영 비용을 같이 인정.  
**FOLLOW-UP** 어떤 지표가 생기면 분리하나요? 다시 합친다면 경계는?  
**AVOID** “마이크로서비스와 LangGraph는 최신이라 좋습니다.”

### Q10 [PRESSURE] 팀 프로젝트에서 실제 본인 범위와 다른 팀원 구현을 어떻게 구분하나요?

**SHORT ANSWER**  
기능 이름이 아니라 제가 변경한 파일, PR, 테스트와 설명 가능한 계약으로 구분합니다. HAWK 전체를 혼자 만들었다고 하지 않고 Backend-AI Serving 통합, 응답 검증과 graph 흐름처럼 근거가 있는 범위를 말합니다. 다른 팀원의 모델 학습이나 Frontend 전체 구현은 팀 결과로 표현합니다.

**DEEP ANSWER**  
면접에서는 “팀이 구현한 것”과 “제가 결정·수정·검증한 것”을 먼저 나눕니다. 제 범위는 왜 그 경계를 선택했는지, 실패 시 어떤 예외가 나는지, 어떤 테스트가 있는지까지 설명할 수 있어야 합니다. commit만으로 공동 설계를 모두 증명할 수 없으므로 회의 결정과 담당표도 함께 봅니다. 반대로 AI 도구나 팀원의 도움을 받았다고 해서 책임이 사라지는 것은 아닙니다. 최종 변경 범위와 검증 기준을 제가 이해하고 승인했는지가 중요합니다.

**KEY POINTS** file·PR·test·설명 가능성으로 ownership 증명.  
**FOLLOW-UP** 특정 PR을 설명해보세요. 다른 사람 코드에서 버그를 찾은 사례는?  
**AVOID** “제가 팀 전체 AI 기능을 만들었습니다.”

---

## 04 DohaLM 질문

### Q11 [BASIC] DohaLM은 어떤 문제를 해결하려는 프로젝트인가요?

**SHORT ANSWER**  
데이터 수집부터 승인, 학습, 평가, adapter runtime까지 재현 가능한 한국어 LLM 개발 과정을 만드는 프로젝트입니다. 단순히 checkpoint 하나를 만드는 것이 아니라 dataset과 model artifact의 계보를 관리합니다. 현재 구현은 develop 브랜치 기준이며 production release는 진행 중입니다.

**DEEP ANSWER**  
모델 파일만 남으면 어떤 데이터 권리와 버전으로 만들었는지 설명하기 어렵습니다. DohaLM은 dataset governance, publication, tokenizer와 training manifest, evaluation artifact를 분리합니다. Foundation phase에서는 tiny model로 기본 학습 경로를 검증하고 reusable phase에서는 Qwen·QLoRA adapter와 runtime 계약을 다룹니다. REST와 SSE MVP 근거도 있지만 모든 기능이 상용 운영 완료된 것은 아닙니다. 단계별 상태를 명시하는 것이 프로젝트의 핵심 태도입니다.

**KEY POINTS** 모델보다 재현 가능한 dataset→training→evaluation→runtime chain.  
**FOLLOW-UP** main에는 왜 코드가 없나요? 완료 기준은 무엇인가요?  
**AVOID** “완성된 자체 foundation model 서비스입니다.”

### Q12 [ADVANCED] Dataset Review, Approval, Publication을 왜 분리하고 license·rights를 왜 관리하나요?

**SHORT ANSWER**  
Review는 품질 검토, Approval은 사용 권한 결정, Publication은 학습 가능한 immutable product를 만드는 단계입니다. 좋은 데이터라도 권리가 불명확하면 학습에 사용하면 안 됩니다. 상태를 분리해야 누가 어떤 근거로 학습을 허용했는지 추적할 수 있습니다.

**DEEP ANSWER**  
하나의 boolean `approved`로 처리하면 품질 통과와 법적 사용 허가, 실제 배포 준비가 섞입니다. Governance domain은 상태 전이와 승인 authority를 관리하고 publication은 승인된 입력으로 versioned artifact를 만듭니다. License, source, rights holder와 사용 범위는 나중에 모델 공개·상업 사용 가능성을 판단하는 근거입니다. publication 이후 데이터를 몰래 바꾸지 않고 새 version을 만들어야 reproducibility를 지킬 수 있습니다. 이 경계는 MLOps라는 이름보다 auditability와 책임 소재를 위한 것입니다.

**KEY POINTS** quality, authority, immutable training input을 분리.  
**FOLLOW-UP** 승인 취소 시 기존 모델은? 개인정보 삭제 요청은?  
**AVOID** “인터넷 공개 데이터면 자유롭게 학습 가능합니다.”

### Q13 [INTERMEDIATE] Foundation Model과 Reusable Model phase를 왜 나누고 DohaLM-Tiny는 왜 만들었나요?

**SHORT ANSWER**  
Tiny 단계는 tokenizer, model shape, loss와 checkpoint 경로가 실제로 동작하는지 낮은 비용으로 검증하기 위한 것입니다. Reusable phase는 base model과 adapter, 평가·배포 계약을 재사용 가능하게 만드는 단계입니다. Tiny 성능을 제품 성능으로 주장하지 않습니다.

**DEEP ANSWER**  
큰 모델로 처음부터 시작하면 데이터 오류와 runtime 오류를 GPU 비용을 쓰면서 발견하게 됩니다. Tiny overfit은 작은 batch에서 loss가 내려가는지 확인해 training loop와 label 처리를 검증합니다. 그다음 Qwen 기반 adapter training으로 전환하면 이미 검증한 data·evaluation 경계를 재사용할 수 있습니다. Foundation과 reusable phase를 나누면 실험 성공과 배포 가능한 artifact를 혼동하지 않습니다. Tiny는 품질 경쟁 모델이 아니라 engineering validation 도구입니다.

**KEY POINTS** 작은 모델은 pipeline 검증, 큰 모델 성능 대체 아님.  
**FOLLOW-UP** tiny overfit은 무엇을 증명하나요? 무엇은 증명하지 못하나요?  
**AVOID** Tiny 결과로 실제 서비스 품질이 검증됐다고 말하기.

### Q14 [ADVANCED] LoRA와 QLoRA 차이, 4-bit와 NF4, rank trade-off를 설명해보세요.

**SHORT ANSWER**  
LoRA는 base를 고정하고 low-rank adapter를 학습합니다. QLoRA는 base weight를 보통 4-bit로 양자화해 memory를 더 줄이면서 adapter는 학습 가능한 정밀도로 유지합니다. NF4는 정규분포 형태의 weight에 맞춘 4-bit 표현이고 rank가 커지면 표현력과 비용이 함께 증가합니다.

**DEEP ANSWER**  
프로젝트에서는 Qwen 기반 QLoRA training과 evaluation 경로를 구현했고, 이론적으로 4-bit base는 optimizer state와 activation 외의 weight memory를 크게 줄입니다. NF4는 균일 간격보다 정규분포 weight를 효율적으로 표현하도록 설계된 datatype입니다. rank가 너무 작으면 domain adaptation capacity가 부족할 수 있고 너무 크면 memory, 학습 시간과 overfitting 위험이 커집니다. learning rate가 과하면 작은 adapter에서도 loss가 불안정해지거나 base capability를 해치는 방향으로 update될 수 있습니다. 최적값은 validation과 generation evaluation으로 선택해야지 고정 정답이 아닙니다.

**KEY POINTS** 실제 구현 범위와 일반 이론을 문장으로 구분.  
**FOLLOW-UP** target module은 어떻게 고르나요? alpha는? learning rate가 크면?  
**AVOID** QLoRA가 항상 full fine-tuning보다 품질이 좋다는 단정.

### Q15 [ADVANCED] Adapter와 Base Model, Model Manifest를 왜 분리하나요?

**SHORT ANSWER**  
작은 adapter를 여러 task에 재사용하고 base weight 중복을 줄이기 위해 분리합니다. 대신 base revision, tokenizer, adapter config와 prompt template 호환성을 manifest로 고정해야 합니다. 파일 이름만으로 조합하면 재현하기 어렵습니다.

**DEEP ANSWER**  
같은 adapter라도 다른 base revision이나 tokenizer와 결합하면 결과가 달라지거나 load가 실패할 수 있습니다. Manifest에는 model identity, base reference, adapter path와 checksum, tokenizer, training dataset version, evaluation 결과와 runtime 요구사항이 필요합니다. Training checkpoint는 optimizer와 scheduler 상태를 포함한 재개용 산출물이고 deployable artifact는 추론에 필요한 최소 검증 패키지라 목적이 다릅니다. release 전 compatibility와 evaluation gate를 통과해야 합니다. 현재 DohaLM은 이 경계를 정비 중이므로 완성된 registry라고 과장하지 않습니다.

**KEY POINTS** checkpoint≠release artifact, manifest가 조합과 계보를 고정.  
**FOLLOW-UP** checksum은 왜 필요한가요? adapter merge는 언제 하나요?  
**AVOID** adapter 파일 하나만 있으면 어디서나 재현된다는 답.

### Q16 [INTERMEDIATE] Runtime에서 REST와 SSE를 왜 둘 다 제공하고 SSE와 WebSocket은 어떻게 다른가요?

**SHORT ANSWER**  
REST는 non-streaming 요청·응답과 상태 확인에 단순하고, SSE는 token이나 event를 서버에서 클라이언트로 순차 전달할 때 적합합니다. SSE는 HTTP 기반 단방향이고 WebSocket은 양방향 persistent channel입니다. 단순 inference streaming에는 SSE가 운영과 재연결 면에서 충분할 수 있습니다.

**DEEP ANSWER**  
모든 client가 streaming을 원하지 않으므로 REST contract를 함께 두면 batch나 테스트가 간단합니다. SSE는 browser EventSource 계열과 proxy 친화적인 text event stream을 제공하고 last-event·reconnect 전략을 둘 수 있습니다. WebSocket은 client가 지속적으로 event를 보내야 하는 collaborative session에 더 적합하지만 connection state 관리가 무겁습니다. DohaLM develop에는 SSE client와 test 근거가 있습니다. 실제 production backpressure와 대규모 connection 운영을 완료했다고 말하지는 않습니다.

**KEY POINTS** 단방향 generation stream=SSE, 지속 양방향=WebSocket.  
**FOLLOW-UP** client disconnect 시 generation은? heartbeat는?  
**AVOID** SSE가 WebSocket보다 항상 우수하다는 답.

### Q17 [ADVANCED] Dataset version이 바뀌면 reproducibility와 evaluation에 어떤 영향이 있나요?

**SHORT ANSWER**  
데이터 분포와 sample identity가 바뀌므로 같은 hyperparameter라도 다른 모델입니다. Dataset manifest와 split, tokenizer, seed, code revision을 model artifact에 연결해야 합니다. 기존 benchmark를 그대로 쓸 수 있는지도 contamination 관점에서 다시 봐야 합니다.

**DEEP ANSWER**  
행 하나가 바뀌어도 training order와 gradient가 달라질 수 있습니다. 그래서 dataset version은 단순 폴더명이 아니라 checksum과 source lineage, filtering config를 포함해야 합니다. train·validation·test split을 다시 만들면 이전 점수와 직접 비교하기 어렵습니다. Evaluation manifest는 model과 dataset, decoding config, metric version을 함께 기록해야 합니다. 완전한 bitwise reproducibility가 어려워도 입력과 판단 근거를 재구성할 수 있어야 합니다.

**KEY POINTS** dataset 변경은 model identity와 비교 가능성을 바꿈.  
**FOLLOW-UP** 삭제 요청이 오면? split leakage는 어떻게 찾나요?  
**AVOID** seed만 같으면 결과가 완전히 같다는 답.

### Q18 [ADVANCED] Evaluation pipeline을 어떻게 설계하고 왜 loss만 보면 안 되나요?

**SHORT ANSWER**  
Loss는 학습 objective를 보여주지만 실제 generation의 정확성, 형식 준수와 유용성을 모두 설명하지 못합니다. 고정된 prompt set, decoding config, baseline·candidate 비교, artifact와 failure sample을 함께 남겨야 합니다. quick test와 full evaluation의 용도도 구분합니다.

**DEEP ANSWER**  
Perplexity가 좋아져도 반복, EOS 실패, instruction 미준수나 hallucination이 늘 수 있습니다. DohaLM evaluation 자료는 candidate 비교, decoding·EOS 진단과 결과 artifact를 분리합니다. 평가 데이터는 training contamination이 없어야 하고 privacy exclusion도 확인해야 합니다. 자동 metric과 사람이 보는 rubric을 함께 사용하되 judge model의 bias도 기록해야 합니다. 배포 gate는 단일 평균보다 핵심 slice별 regression 기준으로 만드는 편이 안전합니다.

**KEY POINTS** loss, generation behavior, format, safety, regression을 함께 평가.  
**FOLLOW-UP** context length가 늘면 memory는 왜 증가하나요? tokenizer vocab과 parameter 관계는?  
**AVOID** validation loss 하나로 모델이 좋아졌다고 단정.

---

## 05 STACCATO 질문

### Q19 [INTERMEDIATE] YOLO와 RT-DETR을 왜 비교했고 YOLO11s를 최종 선택한 이유는 무엇인가요?

**SHORT ANSWER**  
서로 다른 detection 계열을 동일 dataset과 지표로 비교해 정확도뿐 아니라 서비스 통합 가능성을 보려 했습니다. 최종 YOLO11s는 Precision 0.9210, Recall 0.8670, F1 0.8932, mAP50 0.9290이었고 실시간 pipeline에 적용했습니다. 선택은 숫자 하나가 아니라 속도·안정성·구현 경험의 trade-off였습니다.

**DEEP ANSWER**  
YOLO는 one-stage 계열로 실시간 추론 생태계와 배포 도구가 성숙했고, RT-DETR은 transformer 기반 end-to-end detection 후보였습니다. 동일 조건의 Precision, Recall, F1, mAP50과 mAP50-95를 비교했습니다. STACCATO에서는 YOLO11s가 검증 지표와 서비스 처리 요구의 균형이 좋았습니다. 다만 이 선택이 모든 환경에서 YOLO가 우월하다는 뜻은 아닙니다. GPU, 입력 해상도, latency와 class별 recall을 다시 측정하면 선택이 달라질 수 있습니다.

**KEY POINTS** 모델 계열 비교 + 실제 pipeline 적용 가능성.  
**FOLLOW-UP** YOLO와 DETR 구조 차이는? latency 수치는 있나요?  
**AVOID** 측정하지 않은 latency 수치를 만들기.

### Q20 [BASIC] Precision, Recall, F1, mAP50, mAP50-95 차이를 설명해보세요.

**SHORT ANSWER**  
Precision은 탐지했다고 한 것 중 정답 비율, Recall은 실제 객체 중 찾아낸 비율입니다. F1은 둘의 조화 평균이고 mAP는 class별 precision-recall curve의 면적을 평균합니다. mAP50은 IoU 0.5, mAP50-95는 0.5부터 0.95까지 더 엄격한 위치 정확도를 봅니다.

**DEEP ANSWER**  
관제 서비스는 단순 accuracy로 background까지 포함하면 성능이 부풀려질 수 있습니다. Precision이 높으면 오탐 알림이 적고 Recall이 높으면 실제 위험 누락이 적습니다. F1은 두 값의 균형을 보지만 운영 비용을 직접 반영하지는 않습니다. mAP50이 높고 mAP50-95가 낮으면 객체 존재는 찾지만 box 위치가 정밀하지 않을 가능성이 있습니다. 그래서 class별 metric과 실제 영상 시나리오를 함께 봐야 합니다.

**KEY POINTS** metric마다 다른 실패 비용을 측정.  
**FOLLOW-UP** IoU란? accuracy를 안 본 이유는?  
**AVOID** F1과 mAP를 같은 지표처럼 설명하기.

### Q21 [ADVANCED] Precision이 0.9210인데 Recall이 0.8670이면 서비스에 어떤 영향이 있나요?

**SHORT ANSWER**  
오탐은 비교적 적지만 실제 차량이나 이벤트 일부를 놓칠 가능성이 상대적으로 더 큽니다. 안전 관제에서는 false negative 비용이 클 수 있어 class와 사건 유형별 recall을 추가로 봐야 합니다. threshold를 낮추면 recall이 오를 수 있지만 precision과 알림 피로가 나빠질 수 있습니다.

**DEEP ANSWER**  
전체 평균만으로 위험을 단정하면 안 되고 car·truck·bus와 정차·역주행 같은 event별 영향을 나눠야 합니다. Recall을 높이려면 confidence threshold 조정, 어려운 sample 추가, class balancing, augmentation, 해상도와 모델 크기 변경을 실험할 수 있습니다. threshold를 낮추면 더 많은 box가 살아 recall은 오르지만 false positive가 늘 가능성이 큽니다. NMS threshold를 높이면 겹친 box가 더 남고 낮추면 근접 객체를 과하게 제거할 수 있습니다. 운영 기준은 안전 비용과 관제 인력의 확인 비용을 함께 반영해야 합니다.

**KEY POINTS** 안전상 FN 중요, 그러나 FP 알림 피로도 함께 고려.  
**FOLLOW-UP** confidence와 NMS threshold 차이는? recall 목표는 누가 정하나요?  
**AVOID** threshold만 낮추면 성능이 해결된다는 답.

### Q22 [INTERMEDIATE] BBOX를 Frontend로 보낼 때 왜 frame_width와 frame_height가 필요한가요?

**SHORT ANSWER**  
원본 frame 좌표를 브라우저에 표시된 영상 크기로 비례 변환하기 위해 필요합니다. BBOX 좌표, class, confidence, frame dimensions와 timestamp·camera identity가 함께 있어야 어떤 화면의 어느 객체인지 맞출 수 있습니다. 해상도 정보를 빼면 반응형 UI에서 box가 어긋납니다.

**DEEP ANSWER**  
모델은 예를 들어 1920×1080 frame 좌표를 반환하지만 UI canvas는 960×540일 수 있습니다. x와 width에는 displayWidth/frameWidth, y와 height에는 displayHeight/frameHeight 비율을 적용합니다. object-fit이나 letterbox가 있으면 padding offset도 반영해야 합니다. STACCATO의 worker와 bbox store는 frame metadata를 함께 전달하는 근거가 있습니다. 좌표 contract version과 normalized coordinate 사용 여부를 명확히 하는 것이 중요합니다.

**KEY POINTS** 좌표는 기준 frame 없이는 의미가 불완전함.  
**FOLLOW-UP** normalized 좌표의 장단점은? letterbox는 어떻게 처리하나요?  
**AVOID** CSS로 대충 맞추면 된다는 답.

### Q23 [ADVANCED] Stream FPS와 Inference FPS를 왜 분리했나요?

**SHORT ANSWER**  
영상 제공 속도와 모델 분석 속도의 요구가 다르기 때문입니다. 모든 frame을 추론하면 GPU 부하와 지연이 쌓일 수 있어 stream은 부드럽게 유지하고 분석 sampling을 별도로 제어합니다. 대신 빠르게 지나가는 이벤트를 놓칠 수 있는 trade-off가 있습니다.

**DEEP ANSWER**  
Camera worker 코드에는 target_fps와 analysis_fps가 별도 개념으로 있습니다. 영상 전송은 사용자 관제 경험을 위해 일정 속도를 유지하고 inference는 모델 처리량에 맞춰 frame을 선택합니다. queue가 무한히 쌓이지 않도록 최신 frame 우선이나 drop 정책이 필요합니다. analysis FPS가 너무 낮으면 짧은 사건을 놓치고 너무 높으면 stale result와 GPU saturation이 생깁니다. 실제 운영에서는 end-to-end latency, event duration과 GPU utilization을 함께 측정해 조정해야 합니다.

**KEY POINTS** capture/display와 analysis의 backpressure 분리.  
**FOLLOW-UP** frame drop 기준은? tracking과 결합하면?  
**AVOID** FPS를 분리하면 정확도 손실이 없다는 답.

### Q24 [ADVANCED] 왜 DB commit 후 Socket.IO emit 순서를 사용했나요?

**SHORT ANSWER**  
실시간 알림을 받은 사용자가 바로 조회했을 때 DB에 이벤트가 없는 불일치를 줄이기 위해서입니다. 먼저 transaction을 commit해 authoritative state를 만든 뒤 event를 emit합니다. 그렇다고 emit 유실까지 해결되는 것은 아닙니다.

**DEEP ANSWER**  
emit 후 commit하면 commit 실패 시 존재하지 않는 사건을 UI가 본 상태가 됩니다. commit 후 emit은 그 문제를 줄이지만 process가 두 단계 사이에서 죽으면 DB에는 있고 알림은 없을 수 있습니다. production에서는 outbox pattern과 재전송 worker로 원자성에 가까운 보장을 만들 수 있습니다. STACCATO 현재 코드는 persistence-before-notification 순서가 구현 근거입니다. outbox까지 구현했다고 말하지 않고 향후 개선으로 구분합니다.

**KEY POINTS** DB가 source of truth, commit과 message의 dual-write 문제 인정.  
**FOLLOW-UP** emit 실패 시? outbox pattern은? rollback은 언제?  
**AVOID** commit 후 emit이면 완전한 원자성이 보장된다는 답.

### Q25 [PRESSURE] 20,000장이 충분하고 4 VM 통합이 production-ready라고 볼 수 있나요?

**SHORT ANSWER**  
장수만으로 충분함을 판단할 수 없습니다. class 분포, 촬영 환경, 시간대, hard case와 test 독립성을 함께 봐야 합니다. 4 VM 연결은 분산 서비스 통합 경험이지만 대규모 상용 운영을 증명하지는 않습니다.

**DEEP ANSWER**  
20,000장에 유사 frame이 많으면 유효 다양성은 낮을 수 있습니다. class imbalance는 image와 instance 수, rare scenario별 recall로 확인하고 sampling·loss weight·추가 수집으로 대응합니다. Train·validation·test가 같은 영상 구간에서 잘못 나뉘면 leakage도 생깁니다. 4 VM은 AI, Backend, DB, Frontend의 network·contract·배포 QA를 경험했다는 근거입니다. 장애 복구, autoscaling과 장기 observability는 별도 production 과제입니다.

**KEY POINTS** quantity보다 coverage·independence, integration≠production scale.  
**FOLLOW-UP** split은 어떻게 해야 하나요? VM 간 장애는?  
**AVOID** “20K라 충분합니다”, “상용 수준입니다.”

---

## 06 DohaMusic 질문

### Q26 [BASIC] DohaMusic은 어떤 제품 구조이며 Workspace, Job, Artifact를 왜 분리했나요?

**SHORT ANSWER**  
Workspace는 사용자의 음악 제작 문맥, Job은 실행과 상태 전이, Artifact는 단계별 파일 결과입니다. 하나의 row에 모두 넣으면 재시도와 여러 버전 결과를 관리하기 어렵습니다. 세 수명주기가 다르기 때문에 domain을 분리했습니다.

**DEEP ANSWER**  
사용자는 같은 Workspace에서 여러 생성 시도를 할 수 있습니다. 각 Job은 queued·running·completed·failed·cancelled 같은 상태와 input snapshot을 가집니다. 음악, stem, voice-converted, final 파일은 Artifact로 남아 후속 단계 입력이나 다운로드가 됩니다. Artifact 접근은 완료 상태, MIME·확장자, 경로와 RIFF/WAVE header까지 검증합니다. 분리로 관계가 늘지만 audit와 retry가 명확해집니다.

**KEY POINTS** editing context, execution, file lineage의 수명주기 분리.  
**FOLLOW-UP** Artifact를 DB blob으로 저장하지 않은 이유는? Workspace 삭제 시?  
**AVOID** 세 용어를 같은 “프로젝트”로 뭉뚱그리기.

### Q27 [INTERMEDIATE] 왜 synchronous API 하나가 아니라 Job Orchestration을 사용했나요?

**SHORT ANSWER**  
음악 생성과 stem·voice 처리에는 시간이 걸리고 여러 provider 단계가 있습니다. HTTP connection 하나에 묶으면 timeout, 취소, 재시도와 진행 상태를 다루기 어렵습니다. 요청을 먼저 저장하고 dispatcher가 job id를 실행하도록 분리했습니다.

**DEEP ANSWER**  
PipelineService는 validation과 consent를 확인하고 input snapshot과 job을 DB에 만든 뒤 session 밖에서 dispatcher를 호출합니다. API는 job id를 빠르게 반환하고 client는 상태를 조회할 수 있습니다. 각 단계 실패를 기록하면 전체를 처음부터 다시 하지 않고 정책에 따라 재개할 여지가 생깁니다. 반면 queue와 worker 운영, 상태 정합성이라는 복잡성이 추가됩니다. 짧고 즉시 끝나는 작업이라면 synchronous API가 더 단순합니다.

**KEY POINTS** long-running work, 상태·취소·retry, DB 선저장.  
**FOLLOW-UP** dispatcher 호출이 실패하면? 언제 queue가 필요한가요?  
**AVOID** 실제 사용하지 않은 Redis·Celery를 썼다고 말하기.

### Q28 [ADVANCED] Provider abstraction의 장단점과 DohaLM·DohaAudio·DohaVocal 분리 이유는 무엇인가요?

**SHORT ANSWER**  
가사, 음악 생성, stem과 voice conversion은 입력·출력과 runtime 요구가 다릅니다. Provider interface로 orchestration이 특정 구현에 직접 묶이지 않게 하고 mock과 실제 provider를 교체할 수 있습니다. 대신 provider별 고유 기능을 공통분모로 과도하게 줄일 위험이 있습니다.

**DEEP ANSWER**  
Factory가 config에 따라 provider를 선택하면 pipeline executor는 공통 contract만 호출합니다. 테스트에서는 mock으로 상태 전이와 artifact 연결을 빠르게 검증할 수 있습니다. 실제 provider가 timeout, progress, seed나 format을 다르게 지원하므로 capability와 error taxonomy를 별도로 설계해야 합니다. 무리한 interface 통일은 `if provider ==` 분기를 다시 퍼뜨릴 수 있습니다. 따라서 공통 lifecycle과 provider-specific option을 균형 있게 둡니다.

**KEY POINTS** orchestration과 vendor/runtime 경계, capability leakage 인정.  
**FOLLOW-UP** provider가 새 기능을 추가하면? factory의 단점은?  
**AVOID** 추상화만 하면 provider 교체가 비용 없이 된다는 답.

### Q29 [ADVANCED] Provider 실패 시 retry와 idempotency를 어떻게 다뤄야 하나요?

**SHORT ANSWER**  
실패·취소된 Job만 retry하고 이미 생성된 retry가 있으면 그 Job을 반환해 중복 실행을 막습니다. 외부 provider 호출에는 job·step 기반 idempotency key와 artifact 존재 검사가 필요합니다. 무조건 재시도하면 비용이 중복 청구되거나 파일이 중복 생성될 수 있습니다.

**DEEP ANSWER**  
현재 PipelineService는 source 상태와 voice consent·profile readiness를 다시 확인하고 input snapshot으로 새 job을 만듭니다. `retry_for`가 있으면 기존 값을 반환합니다. 각 step은 transient error와 validation error를 구분해야 하며 4xx 성격은 자동 retry하지 않는 편이 맞습니다. provider가 요청을 처리한 뒤 응답만 유실될 수 있으므로 idempotency key로 결과를 조회할 수 있어야 합니다. exponential backoff와 최대 횟수는 비용과 SLA에 맞춰 정합니다.

**KEY POINTS** 상태 gate, dedup, side effect 확인, error 분류.  
**FOLLOW-UP** 409를 쓰는 이유는? retry 중 입력이 바뀌면?  
**AVOID** 실패하면 같은 요청을 계속 보내면 된다는 답.

### Q30 [ADVANCED] undo와 inverse mutation을 왜 고려하나요?

**SHORT ANSWER**  
음악 편집은 사용자가 여러 변경을 시도하므로 이전 상태로 돌아갈 수 있어야 합니다. 원본을 직접 덮어쓰기보다 mutation과 반대 동작, 새 artifact를 기록하면 history와 audit를 유지할 수 있습니다. 모든 외부 side effect가 완전히 되돌려지는 것은 아닙니다.

**DEEP ANSWER**  
DB metadata 변경은 inverse mutation으로 되돌릴 수 있지만 이미 실행된 유료 provider 호출이나 삭제된 외부 파일은 같은 방식으로 복구되지 않을 수 있습니다. 그래서 immutable artifact와 pointer 변경 방식이 안전합니다. command마다 inverse payload와 precondition을 기록하면 concurrent edit 충돌도 확인할 수 있습니다. 저장 비용과 history 정리 정책은 trade-off입니다. 현재는 설계 고려와 domain 계약 수준을 구현 완료 기능처럼 말하지 않습니다.

**KEY POINTS** immutable history, reversible metadata, irreversible side effect 구분.  
**FOLLOW-UP** redo는? concurrent update는? storage 비용은?  
**AVOID** undo가 모든 AI 생성 비용과 외부 호출을 취소한다는 답.

---

## 07 Backend 질문

### Q31 [BASIC] FastAPI와 Flask 차이와 각각 선택할 상황은 무엇인가요?

**SHORT ANSWER**  
FastAPI는 type hint와 Pydantic 기반 validation, OpenAPI, async endpoint 지원이 기본에 가깝습니다. Flask는 core가 작고 확장 조합이 자유로워 기존 구조나 가벼운 service에 적합합니다. HAWK AI Serving은 contract 중심 FastAPI, STACCATO·404RNF Backend는 팀의 Flask 구조와 Socket.IO 통합을 사용했습니다.

**DEEP ANSWER**  
프레임워크 이름만으로 성능이 결정되지는 않고 handler가 blocking 작업을 하면 FastAPI도 느립니다. 모델 request schema와 문서화가 중요하고 async I/O가 많은 신규 API라면 FastAPI가 편합니다. 기존 Flask extension과 팀 경험, 단순한 WSGI app이 있다면 Flask가 경제적입니다. STACCATO에서 Flask를 쓴 경험과 HAWK FastAPI 계약을 모두 설명할 수 있습니다. 선택은 생태계, 팀, 배포 방식과 workload를 기준으로 합니다.

**KEY POINTS** 기능 비교보다 프로젝트 제약과 I/O 모델로 선택.  
**FOLLOW-UP** async가 CPU inference를 빠르게 하나요? WSGI와 ASGI는?  
**AVOID** “FastAPI가 무조건 빠르고 최신입니다.”

### Q32 [BASIC] GET, POST, PUT, PATCH와 주요 HTTP status를 설명해보세요.

**SHORT ANSWER**  
GET은 조회, POST는 생성·command, PUT은 resource 전체 교체, PATCH는 부분 변경에 주로 사용합니다. 400은 잘못된 요청, 401은 인증 필요, 403은 권한 거부, 404는 없음, 409는 현재 상태 충돌, 422는 구조는 읽었지만 validation 실패, 500은 서버 내부 오류입니다. API contract에 일관되게 적용하는 것이 중요합니다.

**DEEP ANSWER**  
HTTP method는 이름보다 safety와 idempotency가 중요합니다. GET은 side effect가 없어야 하고 PUT은 같은 요청 반복 결과가 같아야 합니다. POST도 idempotency key를 도입하면 결제나 생성 중복을 줄일 수 있습니다. DohaMusic은 완료된 Job cancel이나 running Job retry를 409로 막고 invalid prompt option은 422로 구분합니다. 401과 403을 바꾸면 client의 login·권한 안내가 잘못될 수 있습니다.

**KEY POINTS** method semantic, idempotency, 상태 충돌을 연결.  
**FOLLOW-UP** POST도 멱등하게 만들 수 있나요? 404와 403 중 정보 노출은?  
**AVOID** status code를 단순 암기 목록으로만 답하기.

### Q33 [INTERMEDIATE] Pydantic과 SQLAlchemy ORM의 역할과 장단점은 무엇인가요?

**SHORT ANSWER**  
Pydantic은 API 경계에서 type, 필수 값과 domain 제약을 검증하고 serialize합니다. SQLAlchemy ORM은 Python 객체와 relation으로 DB 작업을 표현하고 transaction을 관리합니다. 둘 다 생산성을 높이지만 schema와 query 동작을 모르고 쓰면 validation 누락이나 비효율 query가 생깁니다.

**DEEP ANSWER**  
HAWK `BoardDraft`는 문자열 길이와 blank를 막고 Chat Action은 내부 상대 path만 허용합니다. DohaMusic `PipelineCreate`는 입력을 검증한 뒤 normalized snapshot을 저장합니다. ORM은 parameter binding과 unit-of-work에 유리하지만 lazy loading으로 N+1이 생길 수 있습니다. Query count와 generated SQL을 확인하고 eager loading이나 projection을 선택해야 합니다. 복잡한 집계는 raw SQL이나 explicit query가 더 명확할 수 있습니다.

**KEY POINTS** Pydantic=boundary contract, ORM=persistence abstraction.  
**FOLLOW-UP** N+1이란? lazy/eager loading 차이는?  
**AVOID** ORM을 쓰면 SQL을 몰라도 된다는 답.

### Q34 [INTERMEDIATE] DB transaction, commit, rollback이 왜 필요한가요?

**SHORT ANSWER**  
여러 변경을 하나의 성공·실패 단위로 묶어 중간 상태가 노출되지 않게 합니다. 모든 제약을 통과한 뒤 commit하고 예외가 나면 rollback합니다. 외부 API와 DB를 함께 다룰 때는 DB transaction만으로 원자성이 완성되지 않습니다.

**DEEP ANSWER**  
예를 들어 Job과 input snapshot은 함께 저장돼야 합니다. 중간에 실패하면 session rollback으로 둘 다 반영되지 않게 해야 합니다. STACCATO는 incident commit 후 realtime emit 순서를 사용하지만 이는 dual-write 유실 가능성을 남깁니다. 외부 side effect까지 묶으려면 outbox, saga나 idempotent compensation이 필요합니다. 긴 transaction은 lock과 contention을 늘리므로 외부 inference를 transaction 안에서 기다리지 않는 편이 좋습니다.

**KEY POINTS** atomic DB state와 외부 side effect를 구분.  
**FOLLOW-UP** isolation level은? outbox는 어떻게 동작하나요?  
**AVOID** transaction이면 network call까지 자동 rollback된다는 답.

### Q35 [INTERMEDIATE] Index, JWT와 CORS를 언제 왜 사용하나요?

**SHORT ANSWER**  
Index는 자주 조회·정렬·join하는 column의 탐색을 줄이지만 write와 storage 비용이 있습니다. JWT는 서명된 claim으로 인증 상태를 전달하지만 암호화가 아니며 만료·폐기 전략이 필요합니다. CORS는 browser가 다른 origin 요청을 허용할지 통제하는 정책이지 server 인증을 대신하지 않습니다.

**DEEP ANSWER**  
Job status와 workspace id로 자주 조회한다면 composite index 후보가 될 수 있지만 query plan으로 확인해야 합니다. Index를 너무 많이 만들면 insert와 update가 느려집니다. JWT에는 민감 정보를 넣지 않고 signature, exp, issuer와 audience를 검증해야 합니다. logout·권한 변경을 즉시 반영하려면 short-lived access token과 refresh 정책이 필요합니다. CORS는 필요한 origin·method·header만 열고 `*`와 credential 조합을 피합니다.

**KEY POINTS** 보안과 성능 기능의 한계까지 설명.  
**FOLLOW-UP** composite index 순서는? JWT 탈취 시? preflight란?  
**AVOID** JWT payload가 암호화돼 있다는 답.

---

## 08 LLM 질문

### Q36 [BASIC] Prompt Engineering, Fine-Tuning, RAG는 어떻게 다르고 언제 LoRA를 쓰나요?

**SHORT ANSWER**  
Prompt Engineering은 weight를 바꾸지 않고 지시와 context를 설계합니다. Fine-Tuning·LoRA는 행동 양식이나 domain task를 weight·adapter에 학습하고, RAG는 최신·사내 지식을 검색해 context로 줍니다. 바뀌는 사실은 RAG, 반복되는 형식·행동은 LoRA 후보이며 함께 사용할 수도 있습니다.

**DEEP ANSWER**  
먼저 prompt와 Structured Output만으로 요구가 해결되는지 확인하는 것이 비용이 낮습니다. 최신 문서와 출처가 중요한 질문은 fine-tuning에 사실을 외우게 하기보다 RAG가 관리하기 쉽습니다. LoRA는 특정 tone, format이나 task pattern을 반복적으로 안정화할 때 유용합니다. RAG도 retrieval 실패와 prompt injection이 있고 LoRA도 stale knowledge와 evaluation 비용이 있습니다. HAWK는 structured generation과 adapter 방향, DohaLM은 reusable adapter와 evaluation 경계를 분리해 설명합니다.

**KEY POINTS** knowledge update와 behavior adaptation을 구분.  
**FOLLOW-UP** RAG와 LoRA를 같이 쓰면? fine-tuning data 권리는?  
**AVOID** RAG가 hallucination을 완전히 제거한다는 답.

### Q37 [BASIC] Token, context window, temperature, top-p는 무엇인가요?

**SHORT ANSWER**  
Token은 tokenizer가 text를 나눈 model 입력 단위이고 context window는 한 요청에서 처리 가능한 token 범위입니다. Temperature는 logit 분포의 날카로움을, top-p는 누적 확률 질량 안의 후보만 sampling하도록 조절합니다. 둘은 품질 버튼이 아니라 다양성과 안정성 trade-off입니다.

**DEEP ANSWER**  
한국어 한 글자와 token은 항상 일대일이 아니며 tokenizer에 따라 비용과 길이가 달라집니다. Context가 길어지면 attention KV cache와 연산량이 늘고 정보가 많다고 항상 답이 좋아지지는 않습니다. Structured Output이나 model ID 선택은 낮은 randomness가 유리할 수 있습니다. 창작은 temperature·top-p를 높일 수 있지만 evaluation config를 고정해야 비교가 가능합니다. maximum token과 stop/EOS 처리도 함께 관리합니다.

**KEY POINTS** decoding parameter와 context 비용을 연결.  
**FOLLOW-UP** context가 길면 memory가 왜 늘나요? tokenizer vocab이 크면?  
**AVOID** temperature 0이면 hallucination이 없다는 답.

### Q38 [INTERMEDIATE] Hallucination을 줄이고 streaming inference를 안전하게 제공하려면?

**SHORT ANSWER**  
grounded context, 명확한 prompt, 낮은 randomness, allowlist와 schema validation, 답할 수 없음 정책을 조합합니다. Streaming은 첫 token 체감 시간을 줄이지만 아직 검증되지 않은 부분 응답이 노출될 수 있습니다. 완전 차단이 아니라 위험을 계층적으로 줄이는 문제입니다.

**DEEP ANSWER**  
HAWK는 context가 없으면 확인할 데이터가 없다고 반환하고 Navigation은 allowlist action으로 분리합니다. Model recommendation은 candidate ID를 server-side로 검증해야 합니다. Streaming에서는 JSON 전체 validation이 끝나기 전 chunk를 UI가 실행 가능한 command로 취급하면 안 됩니다. cancel, disconnect, partial result와 final validation 상태를 protocol에 포함할 수 있습니다. Embedding model은 semantic vector retrieval에, generation model은 다음 token 생성에 쓰인다는 역할도 구분해야 합니다.

**KEY POINTS** grounding·validation·action boundary, streaming partial state.  
**FOLLOW-UP** embedding과 generation 차이는? stream 중 오류는?  
**AVOID** “hallucination을 100% 막았습니다.”

---

## 09 Computer Vision 질문

### Q39 [BASIC] Classification, Object Detection, Tracking은 어떻게 다른가요?

**SHORT ANSWER**  
Classification은 이미지 전체 label, Detection은 객체별 class와 bounding box, Tracking은 frame 간 같은 객체 identity를 연결합니다. STACCATO는 detection 결과에 movement·ROI logic을 결합해 event를 만듭니다. Tracking은 detection을 대체하지 않고 시간 정보를 추가합니다.

**DEEP ANSWER**  
Classification만으로는 차량이 어디 있는지 알 수 없습니다. Detection은 매 frame box를 만들지만 같은 차량인지 보장하지 않습니다. ByteTrack 같은 tracker는 high·low confidence detection과 motion을 이용해 track id를 유지합니다. Occlusion과 camera motion에서 id switch가 생길 수 있습니다. 관제 이벤트는 단일 box보다 track history와 ROI·속도 기준을 함께 봐야 오탐을 줄일 수 있습니다.

**KEY POINTS** image, spatial object, temporal identity의 차이.  
**FOLLOW-UP** ByteTrack은? id switch는? event detector는?  
**AVOID** Tracking을 단순 BBOX 그리기로 설명하기.

### Q40 [INTERMEDIATE] IoU와 NMS, anchor-based와 anchor-free 차이는 무엇인가요?

**SHORT ANSWER**  
IoU는 예측 box와 기준 box의 교집합/합집합 비율입니다. NMS는 같은 객체에 겹친 후보 중 confidence가 높은 box를 남기고 나머지를 억제합니다. Anchor-based는 미리 정의한 box prior를, anchor-free는 point나 직접 box 예측을 중심으로 합니다.

**DEEP ANSWER**  
IoU는 matching과 mAP threshold에 사용됩니다. NMS threshold가 너무 낮으면 근접 객체를 하나로 지우고 너무 높으면 중복 box가 남을 수 있습니다. Anchor는 scale·ratio 설계 부담이 있지만 안정된 prior가 도움이 될 수 있습니다. Anchor-free는 head와 tuning을 단순화하지만 모든 문제에서 자동으로 우월한 것은 아닙니다. 실제 모델 version의 head 구조를 확인한 뒤 답하고 YOLO 계열 전체를 하나의 구조로 단정하지 않습니다.

**KEY POINTS** localization overlap, duplicate suppression, prior 설계.  
**FOLLOW-UP** Soft-NMS는? mAP50에서 IoU는? YOLO와 DETR 차이는?  
**AVOID** NMS가 model training 자체라는 답.

### Q41 [INTERMEDIATE] Data augmentation, overfitting과 train/validation/test split을 설명해보세요.

**SHORT ANSWER**  
Augmentation은 현실적인 변형으로 일반화를 높이지만 label 의미를 깨지 않아야 합니다. Training 성능만 좋아지고 validation이 악화되면 overfitting 신호입니다. Validation은 선택·tuning, Test는 최종 독립 평가에 사용합니다.

**DEEP ANSWER**  
도로 영상은 밝기, 날씨, blur, scale과 occlusion 변형이 유효할 수 있습니다. 너무 강한 crop이나 geometric transform은 작은 객체를 지우거나 BBOX를 잘못 만들 수 있습니다. 같은 동영상 인접 frame을 train과 test에 나누면 leakage가 생겨 점수가 과대평가됩니다. 영상·camera·시간대 단위 group split이 더 안전합니다. Loss curve뿐 아니라 class별 precision·recall과 실제 hard case를 확인합니다.

**KEY POINTS** 현실적인 변형, 독립 split, class별 failure 분석.  
**FOLLOW-UP** class imbalance 대응은? early stopping은?  
**AVOID** augmentation은 많을수록 좋다는 답.

---

## 10 System Design 질문

### Q42 [ADVANCED] 모델 서버가 죽어도 서비스 전체가 죽지 않게 하고 inference가 늘면 어떻게 확장하나요?

**SHORT ANSWER**  
Backend와 모델 서버를 timeout·bulkhead로 분리하고 AI 없이 가능한 core flow를 유지합니다. Stateless API replica와 model worker를 독립 확장하고 queue·backpressure를 둡니다. 현재 HAWK의 오류 분리는 구현됐지만 autoscaling과 circuit breaker는 production 제안입니다.

**DEEP ANSWER**  
Health/readiness probe에서 model load 완료를 구분하고 load balancer는 ready instance만 보냅니다. Backend는 짧은 timeout과 제한 retry, 기능별 fallback을 사용합니다. 짧은 chat은 synchronous pool, 긴 생성은 async queue로 나눌 수 있습니다. GPU utilization만 보지 말고 queue depth, p95 latency, timeout, token throughput과 OOM을 봅니다. retry storm을 막기 위해 circuit breaker와 jitter가 필요합니다.

**KEY POINTS** failure isolation, readiness, independent scaling, backpressure.  
**FOLLOW-UP** queue가 필요한 시점은? p95를 왜 보나요?  
**AVOID** “Kubernetes로 해결합니다”처럼 미경험 기술 이름만 답하기.

### Q43 [ADVANCED] GPU 하나에 여러 모델이 있고 model loading이 오래 걸리면 어떻게 하나요?

**SHORT ANSWER**  
모델별 memory·traffic을 측정해 항상 상주할 모델과 on-demand 모델을 나눕니다. startup warm-up, lazy load lock, LRU unload나 별도 worker routing을 고려합니다. Base model과 여러 adapter를 공유하면 중복 memory를 줄일 수 있습니다.

**DEEP ANSWER**  
동시 lazy load는 OOM과 중복 download를 만들 수 있으므로 single-flight lock이 필요합니다. Readiness는 weight load와 warm-up inference가 끝난 뒤 true가 돼야 합니다. 자주 쓰는 base를 상주시키고 adapter를 전환할 수 있지만 adapter compatibility와 concurrency를 검증해야 합니다. cold start가 SLA를 넘으면 pre-warmed replica나 model pool을 둡니다. 저는 GPU 최적화 대규모 운영 경험이 아니라 이 설계 원칙과 현재 adapter runtime 구현 범위를 구분합니다.

**KEY POINTS** memory budget, warm-up, concurrency-safe loading, adapter reuse.  
**FOLLOW-UP** unload 중 요청은? quantization trade-off는?  
**AVOID** 실제 측정 없이 한 GPU에 몇 모델이 된다고 단정.

### Q44 [INTERMEDIATE] File artifact를 DB가 아니라 object storage에 두고 observability를 추가한다면?

**SHORT ANSWER**  
큰 binary는 DB row보다 object storage가 streaming, range, lifecycle과 비용 관리에 유리합니다. DB에는 URI, checksum, MIME, size, lineage와 권한 metadata를 둡니다. 관측 항목은 request/job id, 단계별 latency·error, queue와 model·artifact 상태입니다.

**DEEP ANSWER**  
DohaMusic 현재 구현은 storage path를 DB metadata와 연결하고 path traversal, symlink, MIME·WAV header와 size를 검증합니다. Production object storage에서는 signed URL과 bucket policy로 접근을 제한할 수 있습니다. 로그에는 prompt나 개인정보를 그대로 남기지 않고 correlation id와 상태 전이를 기록합니다. Metric은 p50/p95 latency, provider error rate, retry, queue age, GPU memory와 artifact failure를 봅니다. Trace로 Backend→worker→provider 단계를 연결하면 병목을 찾기 쉽습니다.

**KEY POINTS** binary storage와 metadata 분리, logs·metrics·traces.  
**FOLLOW-UP** checksum은? signed URL 만료는? 어떤 alert를 만들까요?  
**AVOID** 로그에 사용자 prompt와 token을 무조건 남기기.

---

## 11 협업 질문

### Q45 [INTERMEDIATE] 팀 충돌, 다른 사람이 수정 중인 파일, dirty worktree를 어떻게 다루나요?

**SHORT ANSWER**  
먼저 변경 owner와 의도를 확인하고 파일이 아니라 책임 경계를 기준으로 작업을 나눕니다. 이미 수정된 worktree를 임의로 되돌리지 않고 diff를 읽어 제 변경을 그 위에 최소 범위로 적용합니다. 충돌이 안전하게 해소되지 않으면 작업을 멈추고 합의합니다.

**DEEP ANSWER**  
같은 파일을 건드려야 하면 작은 commit과 명확한 순서를 정하고 rebase·merge 전에 각자 변경 목적을 공유합니다. `git status`, `git diff`, branch와 HEAD를 먼저 확인합니다. 사용자나 팀원의 dirty change는 소유권이 불명확하므로 reset하거나 checkout하지 않습니다. Conflict는 두 버전 중 하나를 기계적으로 선택하지 않고 테스트와 domain contract를 기준으로 통합합니다. 중단은 소극적인 행동이 아니라 데이터 손실 방지 결정입니다.

**KEY POINTS** 기존 변경 존중, 책임 경계, 작은 commit, 합의 없는 revert 금지.  
**FOLLOW-UP** 실제 conflict 해결 순서는? branch 전략은?  
**AVOID** “충돌 나면 제 버전으로 덮습니다.”

### Q46 [INTERMEDIATE] PR 리뷰와 테스트 실패 원인 구분에서 무엇을 중요하게 보나요?

**SHORT ANSWER**  
PR에서는 요구사항 충족, 사실과 소유 범위, API·DB contract, 실패 경로와 테스트를 먼저 봅니다. 테스트 실패는 같은 command 재현, stack trace, 변경 diff, 환경·권한·network를 분리해 확인합니다. 환경 실패를 코드 성공으로 숨기지 않습니다.

**DEEP ANSWER**  
Build가 깨지면 type·syntax인지 tool spawn 권한인지 먼저 구분합니다. 같은 test가 clean environment와 CI에서 어떻게 동작하는지 비교합니다. 외부 서비스가 필요하면 mock test와 integration test의 책임을 나눕니다. 리뷰에서는 happy path보다 timeout, validation, rollback과 backward compatibility를 확인합니다. 마지막에는 실제 실행한 command와 못 한 visual 검증을 명시합니다.

**KEY POINTS** reproducibility, error taxonomy, 검증하지 못한 항목 공개.  
**FOLLOW-UP** flaky test는? CI와 local만 다르면?  
**AVOID** “제 컴퓨터에서는 됩니다.”

---

## 12 커리어 전환 질문

### Q47 [INTERMEDIATE] 왜 마케팅·운영에서 AI 서비스 개발로 전환했고 이전 경력이 어떤 도움이 되나요?

**SHORT ANSWER**  
운영 중 반복 확인, 데이터 불일치와 수작업 전달 문제를 계속 경험하면서 기능을 직접 만드는 쪽으로 전환했습니다. 이전 경력은 사용자 흐름, 운영 예외와 데이터 관리 비용을 먼저 보게 해줍니다. 감성적인 도전보다 실제 업무 문제를 구조화하는 경험으로 연결합니다.

**DEEP ANSWER**  
온라인 운영에서는 상품, 콘텐츠, 주문과 교육 정보가 여러 단계에서 전달됩니다. 작은 불일치도 고객 문의와 재작업으로 이어진다는 것을 경험했습니다. 그래서 모델 점수보다 API·DB·Frontend와 장애 흐름까지 연결하는 AI Service Developer 방향을 선택했습니다. STACCATO와 HAWK에서 이 관점을 실제 service integration으로 적용했습니다. 개발 연차는 신입이지만 요구사항과 운영 영향을 보는 시각은 기존 경력에서 가져올 수 있습니다.

**KEY POINTS** 운영 문제→자동화·서비스 설계, 경력 과장 없이 전환.  
**FOLLOW-UP** 왜 AI인가요? 이전 업무 자동화 사례는?  
**AVOID** “마케팅이 싫어서 개발로 왔습니다.”

### Q48 [PRESSURE] 왜 CV에서 LLM으로 확장했고 연구자보다 AI Service Developer라고 하나요?

**SHORT ANSWER**  
CV를 버린 것이 아니라 모델 결과를 서비스로 연결하는 공통 역량을 LLM으로 확장했습니다. 제 강점은 새로운 architecture 논문을 만드는 것보다 모델·Backend·데이터·UI 계약과 검증을 완성하는 데 있습니다. 모델 원리를 이해하되 제품 책임을 중심으로 지원합니다.

**DEEP ANSWER**  
STACCATO에서 detection output이 BBOX contract와 event, DB, UI로 연결돼야 가치가 생기는 것을 배웠습니다. HAWK에서는 LLM output도 schema와 action allowlist가 없으면 서비스 기능이 될 수 없었습니다. DohaLM을 통해 training과 evaluation 경계도 깊게 공부하고 있습니다. 석사 연구 경력이나 대규모 논문 실적이 있다고 말하지 않습니다. 대신 실제 code contract를 설명하고 실패를 검증하는 service engineering 역량을 제시합니다.

**KEY POINTS** modality보다 model-to-service 공통 경계.  
**FOLLOW-UP** 모델 개발 직무에 왜 지원하나요? 연구 역량은 어떻게 보완하나요?  
**AVOID** 연구와 서비스 개발 중 한쪽을 낮추는 답.

---

## 13 약점 / 압박 질문

### Q49 [PRESSURE] Java·대규모 트래픽·상용 LLM·GPU·Kubernetes 경험이 부족한데 괜찮나요?

**SHORT ANSWER**  
그 경험들이 충분하다고 과장하지 않겠습니다. 현재 강점은 Python/FastAPI·Flask 기반 AI service contract, 모델 통합, DB·Frontend 연결과 실패 검증입니다. 부족한 영역은 기존 contract·test를 읽고 작은 범위부터 production 기준으로 보완하겠습니다.

**DEEP ANSWER**  
Java는 프로젝트 사용 경험이 Python보다 적고 Kubernetes와 대규모 GPU 최적화는 실운영 경험이 없습니다. 대신 4 VM 통합, timeout·validation, transaction과 async job 상태를 코드로 다룬 경험이 있습니다. 컨테이너와 Linux 배포 기반은 있으므로 orchestration은 readiness, resource limit, rollout 같은 개념을 lab 환경에서 검증하겠습니다. 상용 LLM 대규모 운영을 했다고 하지 않고 HAWK 통합과 DohaLM runtime 구현 수준을 명확히 말합니다. 입사 후에는 팀의 monitoring과 incident 기록을 먼저 학습해 부족한 운영 감각을 채우겠습니다.

**KEY POINTS** 부족 인정→인접 경험→구체적 보완 계획.  
**FOLLOW-UP** 첫 30일 학습 계획은? Java code review 가능합니까?  
**AVOID** “필요하면 금방 다 할 수 있습니다”만 말하기.

### Q50 [PRESSURE] “그거 Codex가 다 짠 것 아닌가요?”라고 물으면?

**SHORT ANSWER**  
AI 코딩 도구를 개발 보조로 사용한 것은 맞습니다. 하지만 요구사항 정의, 실제 저장소 근거 확인, 구조·변경 범위 결정, 테스트 기준과 실패 원인 분석은 제가 책임졌습니다. 그래서 생성된 코드도 line 단위 동작과 trade-off를 설명하고 검증할 수 있어야 merge합니다.

**DEEP ANSWER**  
도구 사용 여부보다 결과의 기술적 책임을 누가 지는지가 중요하다고 생각합니다. AI에게 탐색·초안·반복 수정을 맡길 수 있지만 repository 사실과 security-sensitive 결정은 원본 코드와 test로 확인합니다. AI가 만든 code가 project pattern을 어기거나 없는 API를 가정하면 diff, type check, unit·integration test와 runtime log로 찾습니다. 인증·권한·데이터 삭제·production secret 같은 작업은 자동 제안을 그대로 실행하지 않습니다. 제가 직접 타이핑했는지보다 요구사항과 설계, 검증, 운영 결과를 설명하고 수정할 수 있는지가 기준입니다.

**KEY POINTS** AI 사용 공개, 책임·검증·설명 가능성 강조.  
**FOLLOW-UP** AI가 틀린 사례는? 어떤 작업은 맡기지 않나요? prompt만 잘 쓰면 개발자는 필요 없나요?  
**AVOID** “AI가 거의 다 했지만 돌아갑니다”, 또는 AI 사용을 숨기기.

---

## 14 바이브코딩 질문

### Q51 [INTERMEDIATE] AI 코딩 도구를 어느 정도 사용하고 생성 코드를 어떻게 검증하나요?

**SHORT ANSWER**  
코드 탐색, 반복적인 초안, 테스트 후보와 문서 정리에 사용합니다. 적용 전에는 repository pattern, API·type·security contract를 확인하고 build, diff check와 대상 test를 실행합니다. UI는 실제 viewport를 보지 못했다면 검증 완료라고 말하지 않습니다.

**DEEP ANSWER**  
먼저 task의 사실과 완료 조건을 제가 정하고 AI에게 좁은 변경을 요청합니다. 결과는 diff로 확인하고 unrelated refactor나 가짜 dependency가 없는지 봅니다. 실패하면 stack trace가 code, environment, permission, network 중 어디에서 왔는지 분리합니다. 외부 repository를 언급하는 답은 실제 branch와 file을 다시 확인합니다. 최종 판단과 merge 책임은 도구가 아니라 개발자에게 있습니다.

**KEY POINTS** scope→review→test→runtime/visual verification→책임.  
**FOLLOW-UP** AI code가 틀렸던 사례는? 검증 비용이 더 크지 않나요?  
**AVOID** “테스트가 통과하면 코드를 이해할 필요가 없습니다.”

### Q52 [PRESSURE] Prompt만 잘 쓰면 개발자가 필요 없고 직접 작성 여부는 중요하지 않은가요?

**SHORT ANSWER**  
Prompt는 요구를 전달하는 수단이지 모호한 요구사항, trade-off와 운영 책임을 대신하지 못합니다. 직접 타이핑 비율보다 code의 동작과 위험을 이해하고 수정할 수 있는지가 더 중요합니다. 다만 이해하지 못한 생성 code를 본인 구현이라고 주장하면 안 됩니다.

**DEEP ANSWER**  
같은 prompt도 repository 상태와 숨은 contract를 모르면 잘못된 변경을 만들 수 있습니다. 개발자는 무엇을 만들지, 어떤 실패를 허용할지, 데이터와 보안 책임을 어떻게 둘지 결정합니다. AI output은 plausible하지만 존재하지 않는 API나 수치를 만들 수 있어 source verification이 필요합니다. 저는 도구를 활용하되 ownership을 file·test·설명 가능성으로 증명합니다. 사고가 나면 prompt가 아니라 merge한 개발자와 팀이 책임진다는 관점입니다.

**KEY POINTS** typing보다 comprehension, decision, verification, operation accountability.  
**FOLLOW-UP** AI에게 맡기지 않는 작업은? code ownership 기준은?  
**AVOID** “앞으로 개발자는 필요 없습니다”, “직접 쓴 코드만 진짜 코드입니다.”

---

## 15 역질문 10개

1. 현재 AI 모델은 연구 조직과 서비스 개발 조직 중 어디에서 관리하고, 배포 책임은 어떻게 나누고 있나요?
2. 모델 결과를 실제 제품 기능으로 연결할 때 현재 가장 큰 기술적 병목은 무엇인가요?
3. LLM output validation과 offline·online evaluation은 어떤 기준으로 운영하고 있나요?
4. 모델·prompt·dataset version과 production request를 연결해 추적하는 방식이 있나요?
5. inference 장애가 발생했을 때 제품 fallback과 incident 대응 절차는 어떻게 되어 있나요?
6. 신입 개발자가 입사 후 처음 맡게 되는 AI 서비스의 책임 범위와 리뷰 과정은 어느 정도인가요?
7. Backend 팀과 모델 팀 사이의 API contract 변경은 어떤 절차로 합의하고 검증하나요?
8. GPU 비용, latency와 모델 품질 사이의 우선순위를 어떤 지표로 결정하나요?
9. 현재 test에서 가장 보강하고 싶은 영역은 model evaluation, integration, load test 중 어디인가요?
10. 이 포지션에서 3개월 뒤 잘 적응했다고 평가하는 구체적인 결과는 무엇인가요?

---

## 16 반드시 외울 20문장

1. HAWK-AI는 AI 결과를 기존 점검·게시판 domain에 안전하게 연결한 팀 프로젝트입니다.
2. Frontend가 AI Serving을 직접 호출하지 않고 Backend를 거쳐 권한, context와 오류 계약을 관리했습니다.
3. Structured Output은 JSON syntax뿐 아니라 필수 필드와 domain allowlist 검증이 함께 있어야 합니다.
4. LangChain은 선형 생성 chain, LangGraph는 상태와 조건 분기에 사용했습니다.
5. LoRA는 frozen base에 low-rank adapter parameter를 학습해 비용과 artifact 크기를 줄입니다.
6. QLoRA는 quantized base와 adapter training을 결합하지만 품질·호환성 검증이 필요합니다.
7. Hallucination은 완전히 제거하는 것이 아니라 grounding, schema, allowlist와 평가로 줄입니다.
8. DohaLM은 모델 파일보다 dataset→training→evaluation→runtime 계보를 제품화하는 프로젝트입니다.
9. DohaLM 실제 구현 근거는 develop 브랜치이며 production release는 진행 중입니다.
10. Training checkpoint와 deployable artifact는 목적과 포함 정보가 다릅니다.
11. STACCATO 최종 YOLO11s 수치는 Precision 0.9210, Recall 0.8670, F1 0.8932, mAP50 0.9290입니다.
12. Precision은 탐지 결과의 신뢰도, Recall은 실제 객체를 놓치지 않은 정도입니다.
13. frame_width와 frame_height는 BBOX를 실제 UI 크기에 맞게 변환하는 기준입니다.
14. Stream FPS와 Inference FPS를 분리해 화면 제공과 GPU 분석 부하를 독립 제어했습니다.
15. DB commit 후 emit은 조회 불일치를 줄이지만 message 유실까지 원자적으로 해결하지는 못합니다.
16. DohaMusic은 Workspace, Job, Artifact의 수명주기를 분리한 비동기 생성 제품입니다.
17. Idempotency는 같은 요청의 재전송이 중복 side effect를 만들지 않게 하는 성질입니다.
18. FastAPI와 Flask 선택은 최신성보다 contract, I/O, 기존 생태계와 팀 기준으로 합니다.
19. DB transaction은 DB 상태를 원자적으로 만들지만 외부 API 호출을 자동 rollback하지 않습니다.
20. AI 도구 사용 여부보다 요구사항·설계·검증·운영 책임을 누가 지는지가 중요합니다.

---

## 17 DO NOT SAY

| 피해야 할 표현 | 이유 | 바꿔 말하기 |
|---|---|---|
| “AI가 거의 다 만들어줬습니다.” | 본인의 판단과 책임 범위가 사라진다. | “도구를 사용했고 요구사항·설계·검증은 제가 책임졌습니다.” |
| “그냥 FastAPI가 좋아서 썼습니다.” | 선택 기준과 trade-off가 없다. | “type contract와 AI Serving 독립 배포 요구를 기준으로 선택했습니다.” |
| “정확히는 모르지만 작동했습니다.” | 재현·운영 책임을 맡길 수 없다. | “확인한 범위와 아직 검증하지 못한 범위를 나누겠습니다.” |
| “성능이 좋아서 YOLO를 선택했습니다.” | 지표와 서비스 조건이 빠진다. | “검증 지표와 실시간 통합 조건의 균형으로 선택했습니다.” |
| “제가 팀 전체를 만들었습니다.” | Git 기록과 역할이 어긋날 위험이 크다. | “팀 결과와 제가 담당한 파일·계약·검증을 구분하겠습니다.” |
| “HAWK에서 hallucination을 막았습니다.” | 완전 차단은 현실적이지 않다. | “grounding, schema와 allowlist로 위험을 줄였습니다.” |
| “DohaLM은 완성된 상용 모델입니다.” | 현재 branch와 release 상태에 맞지 않는다. | “develop에서 단계별 구현 중이고 release gate를 정비 중입니다.” |
| “20,000장이니 데이터는 충분합니다.” | 다양성·분포·leakage를 무시한다. | “장수 외에 class·환경 coverage와 독립 test를 봐야 합니다.” |
| “4 VM이라 대규모 운영 경험입니다.” | 통합 QA와 production scale은 다르다. | “분산 구성 통합 경험이며 대규모 운영은 아직 없습니다.” |
| “Kubernetes는 필요하면 바로 할 수 있습니다.” | 근거 없는 자신감이다. | “실운영 경험은 없고 container·Linux 기반에서 단계적으로 보완하겠습니다.” |
| “JWT는 암호화돼 안전합니다.” | JWT payload는 보통 encoding일 뿐이다. | “서명·만료·issuer 검증과 token 보관 정책이 필요합니다.” |
| “테스트가 통과했으니 문제없습니다.” | test gap과 runtime·visual 문제를 무시한다. | “통과한 검증과 아직 하지 못한 검증을 함께 보고하겠습니다.” |

## 마지막 연습법

1. SHORT ANSWER만 보고 45초 안에 말한다.
2. 면접관이 “왜?”, “어떻게 검증했나요?”, “단점은?”을 물으면 DEEP ANSWER로 확장한다.
3. 모든 답변에서 **현재 구현**과 **향후 production 제안**을 구분한다.
4. 프로젝트마다 실제 코드 파일 하나와 실패 경로 하나를 소리 내어 설명한다.
5. 수치와 branch는 외운 뒤에도 면접 직전 저장소에서 다시 확인한다.
