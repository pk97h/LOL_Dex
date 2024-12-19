##  Riot API를 활용한 리그 오브 레전드 정보 앱

리그 오브 레전드의 챔피언과 아이템 정보 그리고 챔피언 로테이션을 조회할 수 있습니다.

![image](https://github.com/user-attachments/assets/79b9daaa-83e4-45ea-94b7-fd828c6ab3d0)

## 목차 

1. 주요기능
2. 개발기간
3. 기술스택
4. 프로젝트 파일 구조
5. 와이어프레임
6. API 명세서

## 주요 기능
- 챔피언 목록 조회 : 모든 챔피언 정보(이름, 타이틀, 이미지) 조회
- 챔피언 상세 정보 조회 : 각 챔피언의 상세 정보(이름, 타이틀, 이미지, 스토리, 스탯) 조회
- 아이템 목록 조회 : 모든 아이템 정보(이름, 타이틀, 이미지) 조회
- 아이템 상세 정보 조회 : 각 아이템의 상세 정보(이름, 타이틀, 이미지) 조회
- 챔피언 로테이션 : 매주 변경되는 무료 챔피언 로테이션 목록 조회

## 개발기간
2024.12.09(월) ~ 2024.12.19(목)

## 🛠 기술 스택

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)


## 프로젝트 파일 구조
```
LOL_Dex/
├── public/ # 정적 파일 (이미지 등)
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── rotation/route.ts # 챔피언 로테이션 API 핸들러
│   │   │   ├── champions/ # 챔피언 목록 페이지
│   │   │   │   ├── page.tsx
│   │   │   │   ├── [id]/ # 챔피언 상세 페이지
│   │   │   │   │   ├── page.tsx
│   │   │   ├── items/ # 아이템 목록 페이지
│   │   │   │   ├── page.tsx
│   │   │   │   ├── [id]/ # 아이템 상세 페이지
│   │   │   │   │   ├── page.tsx
│   │   │   ├── rotation/ # 챔피언 로테이션 페이지
│   │   │   │   ├── page.tsx
│   │   ├── globals.css # 글로벌 css
│   │   ├── layout.tsx # 공통 레이아웃
│   │   ├── page.tsx # 메인 페이지
│   ├── components/
│   │   ├── ChampionImage.tsx # 챔피언 이미지 컴포넌트
│   │   ├── ItemImage.tsx # 아이템 이미지 컴포넌트
│   ├── types/
│   │   ├── Champion.ts # 챔피언 타입 정의
│   │   ├── ChampionRotation.ts # 챔피언 로테이션 타입 정의
│   │   ├── Item.ts # 아이템 타입 정의
│   │   ├── Props.ts # props 타입 정의
│   ├── utils/
│   │   ├── serverApi # API 데이터 호출
└── ...
```

## 와이어프레임 

- 챔피언 목록 페이지: 모든 챔피언 정보(이름, 타이틀, 이미지) 조회
  
  ![image](https://github.com/user-attachments/assets/62b03737-5da6-4151-9f8a-ccfdaebbc798)

- 챔피언 상세 페이지: 각 챔피언의 상세 정보(이름, 타이틀, 이미지, 스토리, 스탯) 조회
  
  ![image](https://github.com/user-attachments/assets/199631da-d1f6-4d42-b7e4-0abc836bffc7)

- 아이템 목록 페이지: 모든 아이템 정보(이름, 타이틀, 이미지) 조회
  
  ![image](https://github.com/user-attachments/assets/a41f24cb-1d86-42ec-8958-5f9e60af51f2)

- 아이템 상세 페이지: 모든 아이템 정보(이름, 타이틀, 이미지) 조회
  
  ![image](https://github.com/user-attachments/assets/3ca0063d-97c6-4aa6-bc9f-d26d9b411edd)

- 챔피언 로테이션 페이지: 로테이션 챔피언 정보(이름, 타이틀, 이미지) 조회
  
  ![image](https://github.com/user-attachments/assets/93b56a2a-e13a-4e66-a0ff-c247847431f2)


## API 명세서

| 기능 | Method | Endpoint | 응답 예시 |
|------|---------|----------|-----------|
| 챔피언 목록 조회 | GET | /api/champions | { data: [ {id, name, title} ] } |
| 챔피언 상세 조회 | GET | /api/champions/[id] | { id, name, stats, blurb } |
| 아이템 목록 조회 | GET | /api/items | { data: [ {id, name, description} ] } |
| 아이템 상세 조회 | GET | /api/items[id] | { data: [ {id, name, description} ] } |
| 챔피언 로테이션 | GET | /api/rotation | { freeChampionIds: [1, 2, 3] } |
 
