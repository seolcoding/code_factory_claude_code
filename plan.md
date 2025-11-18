# 🚀 Nomad Korea 웹사이트 개선 계획

## Phase 1: 핵심 페이지 및 네비게이션 구현

### 📋 오버뷰

현재 홈페이지, 로그인, 회원가입 페이지만 구현되어 있습니다. Phase 1에서는 사용자가 도시 정보를 자세히 볼 수 있는 도시 상세 페이지와 사용자 프로필 페이지, 그리고 네비게이션 버튼들이 실제로 작동하도록 링크를 수정하고 기본 정보 페이지들을 구현합니다. 데이터베이스 없이 가짜 데이터로 작업하며, 각 페이지가 독립적으로 실행 가능하도록 완성합니다.

### ✅ 수정/개선 사항

#### 네비게이션 및 라우팅 수정
- [ ] `navigation-bar.tsx` - 로그인/회원가입 버튼이 실제 `/login`, `/register` 페이지로 라우팅되도록 수정
- [ ] `navigation-bar.tsx` - 모바일 햄버거 메뉴 기능 구현 (토글 상태 관리)
- [ ] `hero-section.tsx` - 이메일 가입 폼의 `console.log` 제거 및 `/register` 페이지로 이메일 전달하는 기능 구현
- [ ] `footer.tsx` - 소셜 미디어 링크를 실제 SNS 주소로 변경 (또는 모달로 "준비 중" 안내)

#### 도시 상세 페이지 구현 (`/city/[id]`)
- [ ] `app/city/[id]/page.tsx` 생성 - 동적 라우트로 도시 ID 기반 상세 페이지 구현
- [ ] 도시 상세 페이지 레이아웃 구성:
  - [ ] 히어로 섹션: 도시 대표 이미지, 이름, 국가, 랭킹 배지
  - [ ] 주요 메트릭 카드: 생활비, 인터넷 속도, 안전도, 평점 등 한눈에 보기
  - [ ] 상세 정보 탭: Overview, Living Costs, Safety, Weather, Cafes & Coworking
- [ ] 가짜 상세 데이터 추가 (`lib/data.ts` 확장):
  - [ ] 각 도시별 설명 텍스트 (한글/영문)
  - [ ] 장단점 목록 (Pros & Cons)
  - [ ] 주요 지역/동네 정보 (예: 강남, 홍대 등)
  - [ ] 월별 날씨 데이터 (기온, 강수량)
- [ ] `city-card.tsx` - 카드 클릭 시 `/city/${city.id}` 페이지로 올바르게 이동하는지 확인

#### 사용자 프로필 페이지 구현 (`/profile`)
- [ ] `app/profile/page.tsx` 생성 - 로그인한 사용자 프로필 페이지
- [ ] 프로필 레이아웃 구성:
  - [ ] 사용자 정보 카드: 아바타, 이름, 이메일, 가입일
  - [ ] "내 활동" 섹션: 작성한 리뷰 수, 북마크한 도시 수 (Phase 2에서 구현 예정이므로 현재는 0으로 표시)
  - [ ] 설정 버튼: 프로필 편집, 로그아웃
- [ ] 가짜 사용자 데이터 생성 (`lib/data.ts`):
  - [ ] 샘플 유저 3-5명 (이름, 이메일, 아바타 URL, 가입일)
- [ ] `navigation-bar.tsx` - 로그인 상태일 때 프로필 드롭다운 메뉴 표시 (아바타 클릭 → 프로필/로그아웃)

#### 기본 정보 페이지 구현
- [ ] `app/about/page.tsx` 생성 - 서비스 소개 페이지 (간단한 텍스트 + 이미지)
- [ ] `app/terms/page.tsx` 생성 - 이용약관 페이지 (더미 텍스트)
- [ ] `app/privacy/page.tsx` 생성 - 개인정보처리방침 페이지 (더미 텍스트)
- [ ] `app/contact/page.tsx` 생성 - 연락처 페이지 (이메일 폼, 제출 시 콘솔 로그)
- [ ] `app/forgot-password/page.tsx` 생성 - 비밀번호 재설정 페이지 (이메일 입력, 제출 시 성공 메시지)

#### 인증 개선
- [ ] `app/login/actions.ts` - 에러 발생 시 사용자에게 에러 메시지 표시 (toast 또는 alert)
- [ ] `app/register/actions.ts` - 비밀번호 확인 검증 로직 추가 (`password === confirmPassword`)
- [ ] `app/register/page.tsx` - 비밀번호 강도 표시 UI 추가 (최소 8자 안내)
- [ ] `app/register/page.tsx` - 이용약관 체크박스 필수 검증 추가

### 🧪 작업 완료 후 검증 사항

#### 네비게이션 테스트
- [ ] 홈페이지에서 "로그인" 버튼 클릭 → `/login` 페이지로 이동 확인
- [ ] 홈페이지에서 "회원가입" 버튼 클릭 → `/register` 페이지로 이동 확인
- [ ] 모바일 화면에서 햄버거 메뉴 클릭 → 메뉴 드롭다운 표시 확인
- [ ] Footer의 모든 링크 클릭 → 각 페이지로 올바르게 이동 확인
- [ ] 히어로 섹션 이메일 입력 → `/register?email=xxx` 형식으로 이동 및 이메일 자동 입력 확인

#### 도시 상세 페이지 테스트
- [ ] 도시 카드 클릭 → 해당 도시 상세 페이지로 이동 확인
- [ ] URL `/city/seoul` 직접 입력 → 서울 상세 페이지 렌더링 확인
- [ ] 존재하지 않는 도시 ID 입력 (`/city/invalid`) → 404 또는 "도시를 찾을 수 없습니다" 메시지 표시 확인
- [ ] 상세 페이지에서 탭 클릭 → 각 섹션 내용 전환 확인
- [ ] 반응형 레이아웃: 모바일/태블릿/데스크톱에서 레이아웃 확인

#### 사용자 프로필 페이지 테스트
- [ ] 로그인 후 프로필 아이콘 클릭 → 프로필 페이지 이동 확인
- [ ] 프로필 정보 표시: 이름, 이메일, 가입일 정확히 표시되는지 확인
- [ ] 로그아웃 버튼 클릭 → 로그아웃 후 홈페이지로 리다이렉트 확인
- [ ] 로그인하지 않은 상태에서 `/profile` 접근 → `/login`으로 리다이렉트 확인

#### 정보 페이지 테스트
- [ ] `/about` 페이지 접근 → 서비스 소개 내용 표시 확인
- [ ] `/terms` 페이지 접근 → 이용약관 내용 표시 확인
- [ ] `/privacy` 페이지 접근 → 개인정보처리방침 내용 표시 확인
- [ ] `/contact` 페이지 접근 → 연락처 폼 표시 및 제출 시 콘솔 로그 확인
- [ ] `/forgot-password` 페이지 접근 → 비밀번호 재설정 폼 표시 및 제출 시 성공 메시지 확인

#### 인증 기능 테스트
- [ ] 회원가입 시 비밀번호와 비밀번호 확인이 다를 때 → 에러 메시지 표시 확인
- [ ] 회원가입 시 이용약관 체크하지 않고 제출 → 에러 메시지 표시 확인
- [ ] 로그인 실패 시 → 에러 메시지 사용자에게 표시 확인
- [ ] 비밀번호 8자 미만 입력 시 → 경고 메시지 표시 확인

---

## Phase 2: 리뷰 및 북마크 시스템

### 📋 오버뷰

Phase 2에서는 사용자가 도시에 대한 리뷰를 작성/조회하고, 관심 있는 도시를 북마크할 수 있는 기능을 구현합니다. 리뷰 데이터와 북마크 데이터는 모두 가짜 데이터로 관리하며, LocalStorage 또는 메모리 내 상태로 저장하여 새로고침 시 유지되도록 합니다. 리뷰 시스템은 평점, 텍스트, 사진 첨부(선택)를 포함하며, 북마크는 사용자 프로필 및 도시 카드에서 토글 가능합니다.

### ✅ 수정/개선 사항

#### 리뷰 시스템 - 데이터 구조
- [ ] `types/index.ts` - Review 인터페이스 정의:
  - [ ] id, cityId, userId, userName, userAvatar
  - [ ] rating (1-5), title, content, photos (string[])
  - [ ] createdAt, updatedAt, helpfulCount, isVerifiedStay
- [ ] `lib/data.ts` - 가짜 리뷰 데이터 생성 (각 도시당 3-10개 리뷰)
- [ ] `lib/data.ts` - 리뷰 통계 데이터 추가 (평점 분포: 5성 몇 개, 4성 몇 개 등)

#### 리뷰 시스템 - 컴포넌트 구현
- [ ] `components/review-list.tsx` 생성 - 리뷰 목록 컴포넌트:
  - [ ] 리뷰 정렬 옵션 (최신순, 평점 높은 순, 도움 많은 순)
  - [ ] 페이지네이션 또는 무한 스크롤
  - [ ] 각 리뷰: 사용자 정보, 평점, 제목, 내용, 사진, 작성일, "도움돼요" 버튼
- [ ] `components/review-card.tsx` 생성 - 개별 리뷰 카드 컴포넌트
- [ ] `components/review-form.tsx` 생성 - 리뷰 작성 폼:
  - [ ] 별점 선택 (1-5성)
  - [ ] 제목 입력 (선택)
  - [ ] 내용 입력 (필수, textarea)
  - [ ] 사진 업로드 (선택, 최대 3장) - 실제 업로드는 하지 않고 URL 입력으로 대체
  - [ ] "체류 기간" 선택 (1주일 미만, 1-3개월, 3-6개월, 6개월 이상)
  - [ ] 제출 버튼
- [ ] `components/review-summary.tsx` 생성 - 리뷰 요약 섹션:
  - [ ] 평균 평점 (큰 숫자로 표시)
  - [ ] 총 리뷰 수
  - [ ] 평점 분포 바 차트 (5성~1성 각각 몇 개, 퍼센트)
  - [ ] "리뷰 작성" 버튼

#### 리뷰 시스템 - 페이지 통합
- [ ] `app/city/[id]/page.tsx` - 리뷰 섹션 추가:
  - [ ] `<ReviewSummary />` 컴포넌트 삽입
  - [ ] `<ReviewList />` 컴포넌트 삽입
  - [ ] "리뷰 작성" 버튼 클릭 → 리뷰 작성 모달 또는 폼 영역 표시
- [ ] `lib/review-actions.ts` 생성 - 리뷰 관련 가짜 액션:
  - [ ] `submitReview(data)` - 리뷰 제출 (콘솔 로그 + 메모리에 추가)
  - [ ] `getReviewsByCity(cityId)` - 도시별 리뷰 가져오기
  - [ ] `markReviewHelpful(reviewId)` - 리뷰 "도움돼요" 카운트 증가

#### 북마크 시스템 - 데이터 구조
- [ ] `types/index.ts` - Bookmark 인터페이스 정의:
  - [ ] id, userId, cityId, createdAt
- [ ] `lib/data.ts` - 가짜 북마크 데이터 생성 (샘플 유저별 2-3개 북마크)
- [ ] `lib/bookmark-store.ts` 생성 - 북마크 상태 관리 (React Context 또는 Zustand):
  - [ ] bookmarks 배열
  - [ ] `addBookmark(cityId)`, `removeBookmark(cityId)`
  - [ ] `isBookmarked(cityId)`

#### 북마크 시스템 - UI 구현
- [ ] `components/bookmark-button.tsx` 생성 - 북마크 토글 버튼:
  - [ ] 하트 아이콘 (채워짐/빈 하트)
  - [ ] 클릭 시 북마크 추가/제거
  - [ ] 애니메이션 효과 (하트 커지는 효과)
- [ ] `city-card.tsx` - 카드 우측 상단에 `<BookmarkButton />` 추가
- [ ] `app/city/[id]/page.tsx` - 도시 상세 페이지 히어로 섹션에 `<BookmarkButton />` 추가
- [ ] `app/profile/page.tsx` - "북마크한 도시" 섹션 추가:
  - [ ] 북마크한 도시 목록 표시 (CityCard 재사용)
  - [ ] 북마크 없을 때 빈 상태 메시지

#### 리뷰 필터 및 검색
- [ ] `components/review-list.tsx` - 리뷰 필터 옵션 추가:
  - [ ] 평점 필터 (5성만 보기, 4성 이상 보기 등)
  - [ ] 검증된 체류 리뷰만 보기 (isVerifiedStay = true)
- [ ] `components/review-list.tsx` - 리뷰 검색 기능 (키워드로 리뷰 내용 검색)

### 🧪 작업 완료 후 검증 사항

#### 리뷰 조회 테스트
- [ ] 도시 상세 페이지 방문 → 리뷰 요약 섹션 표시 확인 (평균 평점, 총 리뷰 수)
- [ ] 리뷰 목록 표시 → 각 리뷰 카드에 사용자 정보, 평점, 내용 표시 확인
- [ ] 리뷰 정렬 변경 (최신순 → 평점 높은 순) → 리뷰 순서 변경 확인
- [ ] 평점 분포 바 차트 → 정확한 퍼센트 계산 및 표시 확인
- [ ] 리뷰 사진 클릭 → 이미지 확대 보기 또는 갤러리 모달 표시 확인

#### 리뷰 작성 테스트
- [ ] "리뷰 작성" 버튼 클릭 → 리뷰 작성 폼 표시 확인
- [ ] 로그인하지 않은 상태에서 리뷰 작성 시도 → 로그인 페이지로 리다이렉트 확인
- [ ] 별점 선택 → 선택한 별점 하이라이트 표시 확인
- [ ] 내용 입력 없이 제출 → 에러 메시지 표시 확인
- [ ] 모든 필드 입력 후 제출 → 성공 메시지 표시 및 리뷰 목록에 추가 확인
- [ ] 제출 후 리뷰 목록 새로고침 → 작성한 리뷰 최상단에 표시 확인

#### 리뷰 인터랙션 테스트
- [ ] "도움돼요" 버튼 클릭 → 카운트 1 증가 확인
- [ ] 같은 리뷰 "도움돼요" 재클릭 → 중복 방지 메시지 표시 확인
- [ ] 리뷰 필터 (5성만 보기) → 5성 리뷰만 표시 확인
- [ ] 리뷰 검색 ("카페" 입력) → "카페" 키워드 포함 리뷰만 표시 확인

#### 북마크 기능 테스트
- [ ] 도시 카드 하트 아이콘 클릭 → 북마크 추가/제거 토글 확인
- [ ] 북마크 추가 시 → 하트 아이콘 채워짐 애니메이션 확인
- [ ] 북마크 제거 시 → 하트 아이콘 빈 하트로 변경 확인
- [ ] 프로필 페이지 방문 → "북마크한 도시" 섹션에 북마크한 도시 목록 표시 확인
- [ ] 북마크한 도시 없을 때 → "아직 북마크한 도시가 없습니다" 메시지 표시 확인
- [ ] 프로필에서 북마크 제거 → 목록에서 즉시 제거 확인

#### 데이터 영속성 테스트
- [ ] 북마크 추가 후 페이지 새로고침 → 북마크 유지 확인 (LocalStorage)
- [ ] 리뷰 작성 후 페이지 새로고침 → 작성한 리뷰 유지 확인 (메모리 또는 LocalStorage)
- [ ] 브라우저 탭 닫고 다시 열기 → 북마크 데이터 유지 확인

#### 반응형 테스트
- [ ] 모바일 화면에서 리뷰 목록 → 카드 레이아웃 세로 정렬 확인
- [ ] 태블릿 화면에서 리뷰 작성 폼 → 폼 너비 적절히 조정 확인
- [ ] 북마크 버튼 터치 영역 → 모바일에서 충분한 터치 영역 확인

---

## Phase 3: 도시 비교 기능 및 Map/Chart View

### 📋 오버뷰

Phase 3에서는 사용자가 여러 도시를 나란히 비교할 수 있는 비교 페이지와, 필터바에서 선택할 수 있는 **지도 뷰(Map View)**와 **차트 뷰(Chart View)**를 구현합니다. 비교 페이지는 최대 3-4개 도시를 선택하여 주요 지표를 테이블 형식으로 비교할 수 있으며, 지도 뷰는 도시 위치를 지도에 마커로 표시하고, 차트 뷰는 생활비, 인터넷 속도 등을 차트로 시각화합니다.

### ✅ 수정/개선 사항

#### 도시 비교 페이지 (`/compare`)
- [ ] `app/compare/page.tsx` 생성 - 도시 비교 페이지
- [ ] `components/city-compare-selector.tsx` 생성 - 도시 선택 컴포넌트:
  - [ ] 드롭다운 또는 검색 박스로 도시 선택
  - [ ] 최대 4개 도시 선택 가능
  - [ ] 선택한 도시 태그로 표시 (X 버튼으로 제거)
- [ ] `components/city-compare-table.tsx` 생성 - 비교 테이블 컴포넌트:
  - [ ] 행: 메트릭 항목 (생활비, 인터넷 속도, 안전도, 평점, 날씨, AQI 등)
  - [ ] 열: 선택한 도시들
  - [ ] 각 셀: 메트릭 값 + 색상 코딩 (높음/중간/낮음)
  - [ ] 최고값/최저값 하이라이트 표시
- [ ] `components/city-compare-chart.tsx` 생성 - 비교 차트 컴포넌트:
  - [ ] Recharts 라이브러리 추가 (또는 Chart.js)
  - [ ] Radar Chart: 여러 지표를 한눈에 비교
  - [ ] Bar Chart: 생활비, 인터넷 속도 등 개별 지표 비교
- [ ] `app/compare/page.tsx` - URL 쿼리 파라미터로 도시 ID 관리:
  - [ ] 예: `/compare?cities=seoul,busan,jeju`
  - [ ] 공유 가능한 비교 링크 생성 버튼
- [ ] `city-card.tsx` - "비교에 추가" 버튼 추가 (선택 사항)

#### Map View 구현
- [ ] `package.json` - Leaflet 또는 React-Leaflet 라이브러리 추가
- [ ] `types/index.ts` - City 인터페이스에 latitude, longitude 필드 추가
- [ ] `lib/data.ts` - 각 도시에 실제 위도/경도 좌표 추가
- [ ] `components/city-map-view.tsx` 생성 - 지도 뷰 컴포넌트:
  - [ ] 한국 지도 중심으로 표시
  - [ ] 각 도시 마커 표시 (커스텀 아이콘)
  - [ ] 마커 클릭 → 도시 정보 팝업 (이름, 평점, 생활비 등)
  - [ ] 마커 클릭 → 도시 상세 페이지로 이동 링크
- [ ] `city-grid.tsx` - `viewType === 'map'` 조건에서 `<CityMapView />` 렌더링
- [ ] `components/city-map-view.tsx` - 필터/정렬 적용된 도시만 지도에 표시
- [ ] `components/city-map-view.tsx` - 줌 컨트롤, 현재 위치 버튼 추가

#### Chart View 구현
- [ ] `components/city-chart-view.tsx` 생성 - 차트 뷰 컴포넌트
- [ ] `components/city-chart-view.tsx` - 차트 유형 선택 탭:
  - [ ] Bar Chart: 생활비 비교
  - [ ] Line Chart: 평점 추이 (시뮬레이션)
  - [ ] Scatter Plot: 생활비 vs 인터넷 속도
  - [ ] Pie Chart: 안전도 분포
- [ ] `city-grid.tsx` - `viewType === 'chart'` 조건에서 `<CityChartView />` 렌더링
- [ ] `components/city-chart-view.tsx` - 차트 데이터 필터/정렬 적용
- [ ] `components/city-chart-view.tsx` - 차트 호버 시 도시 상세 정보 툴팁 표시
- [ ] `components/city-chart-view.tsx` - 차트 요소 클릭 → 해당 도시 상세 페이지 이동

#### 비교 기능 연동
- [ ] `lib/compare-store.ts` 생성 - 비교 대상 도시 상태 관리:
  - [ ] compareList 배열 (최대 4개)
  - [ ] `addToCompare(cityId)`, `removeFromCompare(cityId)`
  - [ ] LocalStorage에 저장
- [ ] `navigation-bar.tsx` - "비교" 메뉴에 뱃지 표시 (선택한 도시 수)
- [ ] `components/compare-floating-button.tsx` 생성 - 플로팅 버튼:
  - [ ] 도시 선택 시 화면 우하단에 표시
  - [ ] "비교하기 (2)" 형식으로 선택 개수 표시
  - [ ] 클릭 → `/compare` 페이지 이동

### 🧪 작업 완료 후 검증 사항

#### 도시 비교 페이지 테스트
- [ ] `/compare` 페이지 접근 → 도시 선택 인터페이스 표시 확인
- [ ] 도시 2개 선택 → 비교 테이블 표시 확인
- [ ] 도시 4개 선택 → 모든 도시 비교 테이블 표시 확인
- [ ] 5번째 도시 선택 시도 → "최대 4개까지 선택 가능" 메시지 표시 확인
- [ ] 비교 테이블에서 최고값 → 초록색 하이라이트 확인
- [ ] 비교 테이블에서 최저값 → 빨간색 하이라이트 확인
- [ ] Radar Chart 표시 → 각 도시별 다각형 오버레이 확인
- [ ] 공유 버튼 클릭 → URL 쿼리 파라미터 포함된 링크 복사 확인
- [ ] 복사한 링크로 접근 → 동일한 도시 비교 결과 표시 확인

#### Map View 테스트
- [ ] 필터바에서 "Map" 뷰 선택 → 지도 표시 확인
- [ ] 지도에 모든 도시 마커 표시 확인
- [ ] 마커 클릭 → 도시 정보 팝업 표시 확인
- [ ] 팝업에서 도시 이름 클릭 → 도시 상세 페이지 이동 확인
- [ ] 검색 필터 적용 ("서울") → 서울 마커만 표시 확인
- [ ] 정렬 변경 → 지도 마커는 모두 표시 유지 확인 (정렬은 영향 없음)
- [ ] 줌 인/아웃 → 지도 확대/축소 정상 작동 확인
- [ ] 모바일 화면 → 지도 터치 제스처 (핀치 줌, 드래그) 작동 확인

#### Chart View 테스트
- [ ] 필터바에서 "Chart" 뷰 선택 → 차트 표시 확인
- [ ] Bar Chart 탭 → 생활비 비교 막대 그래프 표시 확인
- [ ] Scatter Plot 탭 → 생활비 vs 인터넷 속도 산점도 표시 확인
- [ ] 차트 호버 → 도시 상세 정보 툴팁 표시 확인
- [ ] 차트 요소 클릭 → 해당 도시 상세 페이지 이동 확인
- [ ] 필터 적용 → 차트 데이터 필터링 확인
- [ ] 정렬 변경 → 차트 순서 변경 확인
- [ ] 모바일 화면 → 차트 반응형 크기 조정 확인

#### 비교 기능 통합 테스트
- [ ] 도시 카드 "비교에 추가" 클릭 → compareList에 추가 확인
- [ ] 플로팅 버튼 표시 → "비교하기 (1)" 표시 확인
- [ ] 여러 도시 추가 → 플로팅 버튼 숫자 증가 확인
- [ ] 플로팅 버튼 클릭 → `/compare?cities=...` 페이지 이동 확인
- [ ] 네비게이션 "비교" 메뉴 뱃지 → 선택한 도시 수 표시 확인
- [ ] 페이지 새로고침 → 비교 목록 유지 확인 (LocalStorage)

#### 데이터 정확성 테스트
- [ ] 지도 마커 위치 → 실제 도시 위치와 일치 확인
- [ ] 비교 테이블 값 → 도시 데이터와 정확히 일치 확인
- [ ] 차트 값 → 도시 데이터와 정확히 일치 확인
- [ ] 필터 적용 후 지도/차트 → 필터된 도시만 표시 확인

---

## Phase 4: 커뮤니티 기능 (Meetups, Community)

### 📋 오버뷰

Phase 4에서는 노마드들이 서로 만나고 소통할 수 있는 밋업 시스템과 커뮤니티 포럼을 구현합니다. 밋업은 도시별로 예정된 모임을 조회하고 참가 신청할 수 있으며, 커뮤니티는 게시판 형식으로 질문/정보 공유가 가능합니다. 모든 데이터는 가짜 데이터로 관리되며, 실시간 채팅 대신 댓글 시스템으로 구현합니다.

### ✅ 수정/개선 사항

#### Meetup 데이터 구조
- [ ] `types/index.ts` - Meetup 인터페이스 정의:
  - [ ] id, title, description, cityId, organizerId
  - [ ] date, time, location (장소명, 주소)
  - [ ] maxParticipants, currentParticipants
  - [ ] tags (카테고리: 네트워킹, 코워킹, 식사, 액티비티 등)
  - [ ] coverImage, createdAt
- [ ] `lib/data.ts` - 가짜 밋업 데이터 생성 (10-15개, 여러 도시)
- [ ] `types/index.ts` - MeetupParticipant 인터페이스 정의:
  - [ ] meetupId, userId, userName, userAvatar, joinedAt

#### Meetup 페이지 (`/meetups`)
- [ ] `app/meetups/page.tsx` 생성 - 밋업 목록 페이지
- [ ] `components/meetup-card.tsx` 생성 - 밋업 카드 컴포넌트:
  - [ ] 커버 이미지, 제목, 날짜/시간, 장소
  - [ ] 참가자 수 / 최대 인원
  - [ ] 태그 뱃지
  - [ ] "참가하기" 버튼
- [ ] `components/meetup-list.tsx` 생성 - 밋업 목록 컴포넌트:
  - [ ] 그리드 레이아웃
  - [ ] 필터: 도시별, 카테고리별, 날짜별
  - [ ] 정렬: 최신순, 날짜 빠른 순, 인기순
- [ ] `app/meetups/page.tsx` - 빈 상태: "예정된 밋업이 없습니다" 메시지

#### Meetup 상세 페이지 (`/meetups/[id]`)
- [ ] `app/meetups/[id]/page.tsx` 생성 - 밋업 상세 페이지
- [ ] 밋업 상세 레이아웃:
  - [ ] 커버 이미지, 제목, 주최자 정보
  - [ ] 날짜/시간, 장소 (지도 미리보기)
  - [ ] 상세 설명
  - [ ] 참가자 목록 (아바타 그리드)
  - [ ] "참가하기" / "참가 취소" 버튼
  - [ ] 댓글 섹션 (Q&A)
- [ ] `components/meetup-participants.tsx` 생성 - 참가자 목록 컴포넌트
- [ ] `lib/meetup-actions.ts` 생성 - 밋업 액션:
  - [ ] `joinMeetup(meetupId)` - 참가 신청
  - [ ] `leaveMeetup(meetupId)` - 참가 취소
  - [ ] `getMeetupById(id)` - 밋업 상세 조회

#### Meetup 생성 기능
- [ ] `app/meetups/new/page.tsx` 생성 - 밋업 생성 페이지
- [ ] `components/meetup-form.tsx` 생성 - 밋업 생성 폼:
  - [ ] 제목, 설명, 도시 선택, 날짜/시간 선택
  - [ ] 장소 입력, 최대 인원 설정
  - [ ] 카테고리 선택 (체크박스)
  - [ ] 커버 이미지 URL 입력
- [ ] 로그인한 사용자만 밋업 생성 가능 (미들웨어 또는 클라이언트 체크)
- [ ] 제출 시 가짜 데이터 추가 및 `/meetups/[id]` 페이지로 리다이렉트

#### Community 포럼 데이터 구조
- [ ] `types/index.ts` - Post 인터페이스 정의:
  - [ ] id, title, content, authorId, authorName, authorAvatar
  - [ ] category (질문, 정보공유, 후기, 구인 등)
  - [ ] tags, viewCount, likeCount, commentCount
  - [ ] isPinned, isClosed, createdAt, updatedAt
- [ ] `types/index.ts` - Comment 인터페이스 정의:
  - [ ] id, postId, authorId, authorName, authorAvatar
  - [ ] content, likeCount, createdAt
- [ ] `lib/data.ts` - 가짜 포스트 데이터 생성 (15-20개)
- [ ] `lib/data.ts` - 가짜 댓글 데이터 생성 (포스트당 2-5개)

#### Community 포럼 페이지 (`/community`)
- [ ] `app/community/page.tsx` 생성 - 커뮤니티 포럼 목록 페이지
- [ ] `components/post-list.tsx` 생성 - 포스트 목록 컴포넌트:
  - [ ] 테이블 또는 카드 레이아웃
  - [ ] 각 포스트: 제목, 작성자, 카테고리, 조회수, 댓글 수, 작성일
  - [ ] 고정 포스트 상단 표시
  - [ ] 페이지네이션
- [ ] `components/post-filters.tsx` 생성 - 필터/정렬 컴포넌트:
  - [ ] 카테고리 필터 (전체, 질문, 정보공유 등)
  - [ ] 정렬: 최신순, 인기순, 조회수순
  - [ ] 검색 (제목/내용)
- [ ] `app/community/page.tsx` - "글 작성" 버튼 (로그인 필요)

#### Community 포스트 상세 페이지 (`/community/[id]`)
- [ ] `app/community/[id]/page.tsx` 생성 - 포스트 상세 페이지
- [ ] 포스트 상세 레이아웃:
  - [ ] 제목, 작성자 정보, 카테고리, 작성일, 조회수
  - [ ] 본문 내용 (마크다운 지원 선택 사항)
  - [ ] "좋아요" 버튼, 공유 버튼
  - [ ] 댓글 목록
  - [ ] 댓글 작성 폼
- [ ] `components/comment-list.tsx` 생성 - 댓글 목록 컴포넌트
- [ ] `components/comment-form.tsx` 생성 - 댓글 작성 폼
- [ ] `lib/community-actions.ts` 생성 - 커뮤니티 액션:
  - [ ] `createPost(data)` - 포스트 작성
  - [ ] `likePost(postId)` - 포스트 좋아요
  - [ ] `addComment(postId, content)` - 댓글 작성

#### Community 포스트 작성 페이지
- [ ] `app/community/new/page.tsx` 생성 - 포스트 작성 페이지
- [ ] `components/post-form.tsx` 생성 - 포스트 작성 폼:
  - [ ] 제목, 카테고리 선택, 내용 (textarea)
  - [ ] 태그 입력 (쉼표로 구분)
  - [ ] 미리보기 기능 (선택 사항)
- [ ] 로그인한 사용자만 포스트 작성 가능

#### 사이드바 연동
- [ ] `sidebar.tsx` - "Monthly meetups" 숫자를 실제 밋업 데이터 개수로 표시
- [ ] `sidebar.tsx` - "Active travelers" 프로필 이미지를 실제 유저 데이터로 표시
- [ ] `sidebar.tsx` - "Join our community chat" 버튼을 `/community` 페이지로 링크

### 🧪 작업 완료 후 검증 사항

#### Meetup 목록 테스트
- [ ] `/meetups` 페이지 접근 → 밋업 카드 목록 표시 확인
- [ ] 도시 필터 적용 ("서울") → 서울 밋업만 표시 확인
- [ ] 카테고리 필터 적용 ("네트워킹") → 네트워킹 밋업만 표시 확인
- [ ] 날짜 정렬 (빠른 순) → 가장 빠른 날짜 밋업 먼저 표시 확인
- [ ] 밋업 카드 클릭 → 밋업 상세 페이지 이동 확인

#### Meetup 상세 페이지 테스트
- [ ] 밋업 상세 정보 표시 → 제목, 날짜, 장소, 설명 확인
- [ ] 참가자 목록 표시 → 참가자 아바타 그리드 확인
- [ ] "참가하기" 버튼 클릭 → 참가자 수 증가 및 내 아바타 추가 확인
- [ ] "참가 취소" 버튼 클릭 → 참가자 수 감소 및 내 아바타 제거 확인
- [ ] 최대 인원 초과 시 → "참가하기" 버튼 비활성화 확인
- [ ] 로그인하지 않은 상태 → "로그인이 필요합니다" 메시지 확인

#### Meetup 생성 테스트
- [ ] `/meetups/new` 페이지 접근 → 밋업 생성 폼 표시 확인
- [ ] 필수 필드 누락 시 제출 → 에러 메시지 표시 확인
- [ ] 모든 필드 입력 후 제출 → 밋업 생성 성공 및 상세 페이지 이동 확인
- [ ] 생성한 밋업 → 밋업 목록에 표시 확인
- [ ] 로그인하지 않은 상태 → `/login` 페이지로 리다이렉트 확인

#### Community 포럼 목록 테스트
- [ ] `/community` 페이지 접근 → 포스트 목록 표시 확인
- [ ] 카테고리 필터 ("질문") → 질문 포스트만 표시 확인
- [ ] 검색 ("노마드") → "노마드" 키워드 포함 포스트 표시 확인
- [ ] 정렬 (인기순) → 좋아요 많은 포스트 먼저 표시 확인
- [ ] 고정 포스트 → 상단에 고정되어 표시 확인
- [ ] 포스트 클릭 → 포스트 상세 페이지 이동 확인

#### Community 포스트 상세 테스트
- [ ] 포스트 상세 정보 표시 → 제목, 내용, 작성자, 작성일 확인
- [ ] 조회수 증가 → 페이지 방문 시 조회수 1 증가 확인
- [ ] "좋아요" 버튼 클릭 → 좋아요 수 증가 확인
- [ ] 댓글 목록 표시 → 기존 댓글 표시 확인
- [ ] 댓글 작성 → 댓글 추가 및 목록에 표시 확인
- [ ] 로그인하지 않은 상태 → 댓글 작성 폼 대신 "로그인이 필요합니다" 메시지 확인

#### Community 포스트 작성 테스트
- [ ] `/community/new` 페이지 접근 → 포스트 작성 폼 표시 확인
- [ ] 제목 누락 시 제출 → 에러 메시지 표시 확인
- [ ] 모든 필드 입력 후 제출 → 포스트 생성 성공 및 상세 페이지 이동 확인
- [ ] 생성한 포스트 → 커뮤니티 목록 최상단에 표시 확인
- [ ] 로그인하지 않은 상태 → `/login` 페이지로 리다이렉트 확인

#### 사이드바 연동 테스트
- [ ] 사이드바 "Monthly meetups" → 실제 이번 달 밋업 개수 표시 확인
- [ ] 사이드바 "Active travelers" → 실제 유저 아바타 표시 확인
- [ ] 사이드바 "Join our community chat" 클릭 → `/community` 페이지 이동 확인

---

## Phase 5: UX/UI 개선 및 접근성

### 📋 오버뷰

Phase 5에서는 사용자 경험과 접근성을 대폭 개선합니다. 다크 모드, 모바일 반응형 개선, 로딩 상태, 에러 처리, 접근성(a11y) 기준 준수, 스켈레톤 스크린 등을 구현하여 프로덕션 수준의 품질을 확보합니다. 또한 사용자 온보딩, 빈 상태 디자인, 알림 시스템(Toast) 등 세부 UX를 완성합니다.

### ✅ 수정/개선 사항

#### 다크 모드 구현
- [ ] `app/layout.tsx` - next-themes 라이브러리 추가 및 ThemeProvider 설정
- [ ] `components/theme-toggle.tsx` 생성 - 다크모드 토글 버튼 (sun/moon 아이콘)
- [ ] `navigation-bar.tsx` - 우측에 다크모드 토글 추가
- [ ] `app/globals.css` - 다크모드 CSS 변수 정의 확인 및 누락된 색상 추가
- [ ] 모든 컴포넌트 - 다크모드에서 색상 대비 테스트 및 수정
- [ ] 이미지 - 다크모드에서 배경색이 어두울 때 이미지 밝기 조정 (CSS filter)

#### 로딩 상태 및 스켈레톤 스크린
- [ ] `components/skeleton/city-card-skeleton.tsx` 생성 - CityCard 스켈레톤
- [ ] `components/skeleton/review-skeleton.tsx` 생성 - Review 스켈레톤
- [ ] `components/skeleton/post-skeleton.tsx` 생성 - Post 스켈레톤
- [ ] `app/city/[id]/loading.tsx` 생성 - 도시 상세 페이지 로딩 상태
- [ ] `app/meetups/loading.tsx` 생성 - 밋업 목록 로딩 상태
- [ ] `app/community/loading.tsx` 생성 - 커뮤니티 로딩 상태
- [ ] `city-grid.tsx` - 필터/정렬 변경 시 로딩 스피너 표시

#### 에러 처리 및 빈 상태
- [ ] `app/error.tsx` 생성 - 글로벌 에러 페이지
- [ ] `app/city/[id]/not-found.tsx` 생성 - 도시 없음 404 페이지
- [ ] `components/empty-state.tsx` 생성 - 재사용 가능한 빈 상태 컴포넌트:
  - [ ] 아이콘, 제목, 설명, CTA 버튼
- [ ] `city-grid.tsx` - 검색 결과 없을 때 EmptyState 사용
- [ ] `app/profile/page.tsx` - 북마크 없을 때 EmptyState 사용
- [ ] `components/review-list.tsx` - 리뷰 없을 때 EmptyState 사용
- [ ] `app/meetups/page.tsx` - 밋업 없을 때 EmptyState 사용
- [ ] `app/community/page.tsx` - 포스트 없을 때 EmptyState 사용

#### Toast 알림 시스템
- [ ] `package.json` - sonner 또는 react-hot-toast 라이브러리 추가
- [ ] `app/layout.tsx` - Toaster 컴포넌트 추가
- [ ] `lib/toast.ts` - toast helper 함수 (success, error, info, warning)
- [ ] 모든 액션 (리뷰 작성, 북마크, 밋업 참가 등) - 성공/실패 시 toast 표시
- [ ] 폼 제출 시 - 성공/에러 toast 표시

#### 모바일 반응형 개선
- [ ] `navigation-bar.tsx` - 모바일 메뉴 드로어 구현:
  - [ ] 햄버거 버튼 클릭 → 사이드 메뉴 슬라이드
  - [ ] 메뉴 항목: 홈, 밋업, 커뮤니티, 비교, 로그인/프로필
  - [ ] 오버레이 클릭 → 메뉴 닫기
- [ ] `sidebar.tsx` - 모바일에서 하단 시트 또는 숨김 처리
- [ ] `filter-bar.tsx` - 모바일에서 필터 버튼 → 모달로 필터 옵션 표시
- [ ] `components/city-compare-table.tsx` - 모바일에서 가로 스크롤 가능하게 수정
- [ ] 모든 폼 - 모바일에서 input 크기 및 터치 영역 최적화
- [ ] 모든 버튼 - 최소 터치 영역 44x44px 확보

#### 접근성 (a11y) 개선
- [ ] 모든 이미지 - 의미 있는 alt 텍스트 추가
- [ ] 모든 버튼 - aria-label 추가 (아이콘 버튼)
- [ ] 모든 폼 - label과 input 연결 (htmlFor, id)
- [ ] 폼 에러 - aria-invalid, aria-describedby로 에러 메시지 연결
- [ ] 모달/다이얼로그 - focus trap, ESC 키로 닫기 구현
- [ ] 키보드 네비게이션 - Tab 순서 확인 및 focus visible 스타일 추가
- [ ] Skip to content 링크 - 메인 콘텐츠로 바로 이동
- [ ] 색상 대비 - WCAG AA 기준 확인 (최소 4.5:1)
- [ ] 시맨틱 HTML - div 남용 제거, section, article, nav 등 사용
- [ ] 스크린 리더 테스트 - NVDA/VoiceOver로 주요 페이지 테스트

#### 사용자 온보딩
- [ ] `components/onboarding-modal.tsx` 생성 - 첫 방문 시 온보딩 모달:
  - [ ] 서비스 소개 3-4단계 슬라이드
  - [ ] "시작하기" 버튼
  - [ ] LocalStorage에 "온보딩 완료" 저장
- [ ] `app/page.tsx` - 첫 방문 시 온보딩 모달 표시

#### 애니메이션 및 트랜지션
- [ ] `city-card.tsx` - 호버 시 부드러운 스케일 애니메이션
- [ ] `components/bookmark-button.tsx` - 북마크 추가 시 하트 펄스 애니메이션
- [ ] 페이지 전환 - Framer Motion으로 페이지 전환 애니메이션 (선택 사항)
- [ ] 모달/드로어 - 열고 닫을 때 페이드/슬라이드 애니메이션
- [ ] 리스트 아이템 - 스크롤 시 fade-in 애니메이션 (Intersection Observer)

#### 성능 개선 (이미지)
- [ ] 모든 이미지 - next/image 컴포넌트로 교체
- [ ] 이미지 lazy loading - loading="lazy" 속성 확인
- [ ] 이미지 최적화 - webp 포맷 사용, placeholder blur 추가
- [ ] `city-card.tsx` - 이미지 우선순위 설정 (priority for above-the-fold)

### 🧪 작업 완료 후 검증 사항

#### 다크 모드 테스트
- [ ] 다크모드 토글 클릭 → 모든 페이지 다크모드 적용 확인
- [ ] 새로고침 → 다크모드 설정 유지 확인
- [ ] 모든 페이지에서 색상 대비 확인 (텍스트 가독성)
- [ ] 이미지 배경 → 다크모드에서 부자연스럽지 않은지 확인

#### 로딩 상태 테스트
- [ ] 도시 상세 페이지 로딩 → 스켈레톤 스크린 표시 확인
- [ ] 필터 변경 시 → 로딩 스피너 표시 확인
- [ ] 밋업 목록 로딩 → 스켈레톤 스크린 표시 확인
- [ ] 스켈레톤 스크린 → 실제 콘텐츠와 유사한 레이아웃 확인

#### 에러 처리 테스트
- [ ] 존재하지 않는 도시 ID → 404 페이지 표시 확인
- [ ] 네트워크 에러 시뮬레이션 → 에러 페이지 표시 확인
- [ ] 에러 페이지에서 "다시 시도" 버튼 → 페이지 재로드 확인
- [ ] 빈 상태 (검색 결과 없음) → EmptyState 컴포넌트 표시 확인

#### Toast 알림 테스트
- [ ] 북마크 추가 → "북마크에 추가되었습니다" toast 표시 확인
- [ ] 리뷰 작성 성공 → "리뷰가 등록되었습니다" toast 표시 확인
- [ ] 폼 에러 → "필수 항목을 입력해주세요" toast 표시 확인
- [ ] Toast 자동 닫기 → 3-5초 후 자동으로 사라지는지 확인

#### 모바일 반응형 테스트
- [ ] 모바일 (375px) → 모든 페이지 레이아웃 확인
- [ ] 햄버거 메뉴 → 사이드 메뉴 정상 작동 확인
- [ ] 필터 바 → 모바일에서 모달로 표시 확인
- [ ] 비교 테이블 → 가로 스크롤 가능 확인
- [ ] 버튼 터치 영역 → 최소 44px 확보 확인
- [ ] 폼 input → 모바일 키보드 표시 시 레이아웃 깨지지 않는지 확인

#### 접근성 테스트
- [ ] 키보드만으로 네비게이션 → Tab으로 모든 요소 접근 가능 확인
- [ ] 스크린 리더 (NVDA) → 주요 페이지 읽기 테스트
- [ ] 모든 이미지 alt 텍스트 → 의미 전달 확인
- [ ] 폼 에러 → 스크린 리더로 에러 메시지 읽기 확인
- [ ] 색상 대비 → WebAIM Contrast Checker로 모든 텍스트 4.5:1 이상 확인
- [ ] Skip to content 링크 → Tab 키로 표시 및 작동 확인

#### 온보딩 테스트
- [ ] 첫 방문 시 → 온보딩 모달 표시 확인
- [ ] 온보딩 완료 후 재방문 → 모달 표시 안 됨 확인
- [ ] "건너뛰기" 버튼 → 온보딩 모달 닫기 확인

#### 애니메이션 테스트
- [ ] 도시 카드 호버 → 부드러운 스케일 애니메이션 확인
- [ ] 북마크 추가 → 하트 펄스 애니메이션 확인
- [ ] 모달 열기/닫기 → 페이드/슬라이드 애니메이션 확인
- [ ] 페이지 전환 → 부드러운 전환 효과 확인

#### 이미지 최적화 테스트
- [ ] 네트워크 탭 → 이미지 webp 포맷 확인
- [ ] 이미지 로딩 → lazy loading 작동 확인
- [ ] Lighthouse 성능 점수 → 이미지 최적화 점수 확인

---

## Phase 6: 성능 최적화 및 SEO

### 📋 오버뷰

Phase 6에서는 프로덕션 배포를 위한 최종 준비로 성능 최적화, SEO 메타 태그, Open Graph, 구조화된 데이터(JSON-LD), sitemap.xml, robots.txt 등을 구현합니다. Core Web Vitals 개선, 번들 사이즈 최적화, 캐싱 전략을 적용하여 프로덕션 환경에서 최상의 성능을 발휘하도록 합니다.

### ✅ 수정/개선 사항

#### SEO 메타 태그
- [ ] `app/layout.tsx` - 기본 메타 태그 추가:
  - [ ] title, description, keywords
  - [ ] viewport, charset
  - [ ] favicon, apple-touch-icon
- [ ] `app/page.tsx` - 홈페이지 전용 메타 태그 (Metadata API)
- [ ] `app/city/[id]/page.tsx` - 도시별 동적 메타 태그:
  - [ ] title: "도시명 - 노마드코리아"
  - [ ] description: 도시 설명
  - [ ] keywords: 도시명, 노마드, 디지털노마드 등
- [ ] `app/meetups/[id]/page.tsx` - 밋업별 동적 메타 태그
- [ ] `app/community/[id]/page.tsx` - 포스트별 동적 메타 태그

#### Open Graph 및 Twitter Cards
- [ ] `app/layout.tsx` - 기본 OG 태그:
  - [ ] og:title, og:description, og:image, og:url
  - [ ] og:type="website"
- [ ] `app/city/[id]/page.tsx` - 도시별 OG 이미지 (도시 대표 이미지)
- [ ] `app/meetups/[id]/page.tsx` - 밋업별 OG 이미지 (커버 이미지)
- [ ] Twitter Card 메타 태그 (twitter:card, twitter:title, twitter:image)
- [ ] `public/og-image.png` 생성 - 기본 OG 이미지 (1200x630px)

#### 구조화된 데이터 (JSON-LD)
- [ ] `app/city/[id]/page.tsx` - Place Schema:
  - [ ] name, description, image, address, geo (lat/lng)
- [ ] `app/meetups/[id]/page.tsx` - Event Schema:
  - [ ] name, description, startDate, location, organizer
- [ ] `app/community/[id]/page.tsx` - Article Schema:
  - [ ] headline, author, datePublished, image
- [ ] `components/structured-data.tsx` 생성 - JSON-LD 스크립트 렌더링 컴포넌트

#### Sitemap 및 Robots.txt
- [ ] `app/sitemap.ts` 생성 - 동적 sitemap 생성:
  - [ ] 모든 도시 페이지 URL
  - [ ] 모든 밋업 페이지 URL
  - [ ] 정적 페이지 (about, terms, privacy 등)
- [ ] `app/robots.ts` 생성 - robots.txt 설정:
  - [ ] Allow: /
  - [ ] Sitemap: https://example.com/sitemap.xml
- [ ] sitemap priority 설정 (홈: 1.0, 도시: 0.8, 기타: 0.5)

#### 성능 최적화 - 코드 스플리팅
- [ ] 대형 컴포넌트 → dynamic import로 변경:
  - [ ] `components/city-map-view.tsx` (Leaflet)
  - [ ] `components/city-chart-view.tsx` (Recharts)
  - [ ] `components/onboarding-modal.tsx`
- [ ] next/dynamic 사용 시 loading fallback 추가
- [ ] 라이브러리 번들 사이즈 분석 → @next/bundle-analyzer 사용

#### 성능 최적화 - 캐싱
- [ ] `next.config.ts` - 이미지 캐싱 설정:
  - [ ] remotePatterns 허용 (Unsplash 등)
  - [ ] minimumCacheTTL 설정
- [ ] API 라우트 → Cache-Control 헤더 추가 (선택 사항)
- [ ] 정적 데이터 → React Server Components로 서버 캐싱

#### 성능 최적화 - Core Web Vitals
- [ ] LCP (Largest Contentful Paint) 개선:
  - [ ] 히어로 이미지 preload
  - [ ] 폰트 preload
  - [ ] above-the-fold 이미지 priority
- [ ] CLS (Cumulative Layout Shift) 개선:
  - [ ] 이미지 width/height 명시
  - [ ] 스켈레톤 스크린 크기 일치
- [ ] FID (First Input Delay) 개선:
  - [ ] 인터랙티브 요소 우선 로드
  - [ ] 큰 JS 파일 코드 스플리팅
- [ ] INP (Interaction to Next Paint) 개선:
  - [ ] 이벤트 핸들러 최적화
  - [ ] debounce/throttle 적용 (검색 input 등)

#### 성능 최적화 - 폰트
- [ ] next/font/google - Google Fonts 최적화
- [ ] 폰트 preload 설정
- [ ] font-display: swap 설정
- [ ] 폰트 서브셋 설정 (한글, 영문만)

#### 분석 및 모니터링
- [ ] Lighthouse 스크립트 → package.json에 추가
- [ ] `app/layout.tsx` - Google Analytics 또는 Vercel Analytics 추가 (선택 사항)
- [ ] Web Vitals 측정 → useReportWebVitals 훅 구현 (선택 사항)

#### 프로덕션 빌드 최적화
- [ ] `next.config.ts` - 프로덕션 설정:
  - [ ] compress: true
  - [ ] swcMinify: true
  - [ ] reactStrictMode: true
- [ ] 환경 변수 → .env.production 파일 생성
- [ ] 불필요한 console.log → production 빌드에서 제거

### 🧪 작업 완료 후 검증 사항

#### SEO 메타 태그 테스트
- [ ] 홈페이지 → View Source에서 title, description 확인
- [ ] 도시 상세 페이지 → 도시명 포함된 title 확인
- [ ] 모든 페이지 → viewport, charset 메타 태그 확인
- [ ] favicon → 브라우저 탭에 아이콘 표시 확인

#### Open Graph 테스트
- [ ] Facebook Sharing Debugger → OG 태그 크롤링 확인
- [ ] Twitter Card Validator → Twitter Card 미리보기 확인
- [ ] 도시 페이지 공유 → 도시 이미지가 OG 이미지로 표시 확인
- [ ] 밋업 페이지 공유 → 밋업 커버 이미지 표시 확인

#### 구조화된 데이터 테스트
- [ ] Google Rich Results Test → 도시 페이지 Place Schema 검증
- [ ] Google Rich Results Test → 밋업 페이지 Event Schema 검증
- [ ] Google Rich Results Test → 커뮤니티 포스트 Article Schema 검증
- [ ] Schema.org Validator → JSON-LD 구문 오류 확인

#### Sitemap 및 Robots 테스트
- [ ] `/sitemap.xml` 접근 → XML 파일 생성 확인
- [ ] Sitemap에 모든 도시 URL 포함 확인
- [ ] `/robots.txt` 접근 → Allow, Sitemap 설정 확인
- [ ] Google Search Console → Sitemap 제출 및 크롤링 확인 (선택 사항)

#### 성능 테스트 - Lighthouse
- [ ] 홈페이지 Lighthouse 점수:
  - [ ] Performance: 90+ 목표
  - [ ] Accessibility: 95+ 목표
  - [ ] Best Practices: 95+ 목표
  - [ ] SEO: 95+ 목표
- [ ] 도시 상세 페이지 Lighthouse 점수 → 모든 지표 90+ 목표
- [ ] 모바일 Lighthouse 점수 → 데스크톱과 유사한 점수 확인

#### 성능 테스트 - Core Web Vitals
- [ ] LCP → 2.5초 이내 확인 (Good)
- [ ] CLS → 0.1 이하 확인 (Good)
- [ ] FID → 100ms 이내 확인 (Good)
- [ ] INP → 200ms 이내 확인 (Good)
- [ ] Chrome DevTools → Performance 탭에서 병목 확인

#### 번들 사이즈 테스트
- [ ] `npm run build` → 번들 사이즈 확인
- [ ] Bundle Analyzer → 가장 큰 패키지 확인
- [ ] 대형 라이브러리 (Leaflet, Recharts) → dynamic import 확인
- [ ] First Load JS → 100KB 이하 목표 (gzipped)

#### 캐싱 테스트
- [ ] 이미지 재방문 → 브라우저 캐시 사용 확인 (Network 탭)
- [ ] 정적 페이지 재방문 → 캐시 헤더 확인
- [ ] 동적 데이터 → 적절한 revalidation 시간 확인

#### 폰트 최적화 테스트
- [ ] 네트워크 탭 → 폰트 preload 확인
- [ ] 폰트 로딩 → FOIT/FOUT 없이 부드러운 렌더링 확인
- [ ] 폰트 파일 → woff2 포맷 사용 확인

#### 프로덕션 빌드 테스트
- [ ] `npm run build` → 빌드 에러 없이 성공 확인
- [ ] `npm run start` → 프로덕션 서버 실행 확인
- [ ] 프로덕션 환경 → console.log 제거 확인
- [ ] 모든 페이지 → 정상 작동 확인

#### 최종 통합 테스트
- [ ] 모든 페이지 방문 → 404 에러 없는지 확인
- [ ] 모든 링크 클릭 → 올바른 페이지로 이동 확인
- [ ] 모든 폼 제출 → 정상 작동 확인
- [ ] 다양한 브라우저 (Chrome, Safari, Firefox) → 호환성 확인
- [ ] 다양한 디바이스 (Mobile, Tablet, Desktop) → 반응형 확인

---

## 📝 작업 방식 안내

각 Phase는 독립적으로 실행 가능하도록 설계되었습니다. 각 Phase 작업을 시작할 때는:

1. 해당 Phase의 오버뷰를 읽고 전체 맥락 이해
2. 수정/개선 사항 체크박스를 하나씩 완료하며 진행
3. 작업 완료 후 검증 사항을 모두 테스트
4. 다음 Phase로 넘어가기 전에 현재 Phase가 완전히 작동하는지 확인

모든 데이터는 `lib/data.ts`의 가짜 데이터를 사용하며, 데이터베이스 연동은 하지 않습니다. LocalStorage 또는 메모리 내 상태로 사용자 인터랙션(북마크, 리뷰 작성 등)을 관리합니다.
