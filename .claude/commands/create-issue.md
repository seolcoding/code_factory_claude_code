---
description: GitHub 이슈를 생성합니다
---

# GitHub 이슈 생성

## 프로젝트 컨텍스트
Nomad Korea는 Next.js 16 기반의 한국 디지털 노마드 커뮤니티 플랫폼입니다. React 19, Supabase 인증/데이터베이스, Tailwind CSS, Radix UI 컴포넌트를 사용하며, TypeScript로 타입 안정성을 보장합니다.

## 이슈 생성 요청

$ARGUMENT

## 작업 수행

다음 내용으로 GitHub 이슈를 생성해주세요:

**작업 순서:**
1. 현재 저장소 확인 (git remote -v)
2. 사용자 입력($ARGUMENT)을 분석하여 다음 정보 추출:
   - 이슈 제목 (명확하고 구체적으로)
   - 이슈 본문 (마크다운 형식)
   - **작업 유형** (다음 중 하나를 라벨로 추가):
     - `feature`: 새로운 기능 추가
     - `bug`: 버그 수정
     - `enhancement`: 기존 기능 개선
     - `docs`: 문서 작업
     - `refactor`: 코드 리팩토링
     - `test`: 테스트 추가/수정
     - `chore`: 기타 작업
   - **우선순위** (다음 중 하나를 라벨로 추가):
     - `priority: critical`: 즉시 해결 필요
     - `priority: high`: 높은 우선순위
     - `priority: medium`: 중간 우선순위
     - `priority: low`: 낮은 우선순위
   - **프로젝트 영역** (해당되는 경우 라벨 추가):
     - `area: frontend`: 프론트엔드 작업
     - `area: backend`: 백엔드/API 작업
     - `area: database`: 데이터베이스 작업
     - `area: auth`: 인증 관련
     - `area: ui`: UI/UX 개선

3. gh issue create 명령어로 이슈 생성
4. 생성된 이슈 URL 반환

**이슈 템플릿 구조:**
```markdown
## 설명
[이슈에 대한 명확한 설명]

## 재현 방법 (버그인 경우)
1. ...
2. ...

## 예상 동작
[어떻게 작동해야 하는지]

## 현재 동작 (버그인 경우)
[현재 어떻게 작동하는지]

## 기술 스택
- Next.js 16
- React 19
- Supabase
- Tailwind CSS + Radix UI
```

**중요:**
- 모든 라벨은 --label 플래그로 추가
- 우선순위를 명시하지 않은 경우 'priority: medium' 기본 적용
- 작업 유형을 명시하지 않은 경우 내용을 분석하여 자동 추정
