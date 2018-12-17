# Project Elevator - Web
### 프로그램 시작 시 설치 가이드
1. Node.js 설치.
2. 몽고DB 설치.
3. 커맨더 창을 통해 NPM 패키지 설치.
    1. 'npm install -g @angular/cli@latest' 명령어를 통해 Angular-CLI 최신버전 글로벌로 설치.
    2. 프로젝트 상위 루트(Elevator_Angular)에서 'npm install'을 통해 NPM 패키지 설치.
    3. 'Elevator_Angular/angular-src' 경로에서 'npm install'을 통해 NPM 패키지 설치.
4. 경로 'Elevator_Angular/angular-src/src/app/services/handleuser.service.ts'의 파일 실행.
5. 14번째 줄의 ServerAddress 변수의 값을 본인이 사용할 서버 주소로 바꾼다.
    1. 현재는 'http://localhost:3000'로 설정되어 있는데, 'http://xx.yy.zz.ww:PORT' 형태로 바꾼다.
    2. 로컬에서 돌리려면 유지.
6. 'Elevator_Angular/angular-src' 경로에서 'ng build' 명령어를 통해 프로젝트 빌드.
7. 'Elevator_Angular' 경로에서 'npm start'를 통해 서버 실행.
