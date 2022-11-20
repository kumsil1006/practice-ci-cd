# 어떤 이미지를 만들지
# FROM + base Image
# WORKDIR: image file 안에 어떤 디렉토리에 application file 복사할지
# 빈번히 변경될 파일일수록 맨 밑에 쓰면 좋다.
FROM node:18-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --immutable --immutable-cache --check-cache

COPY . .

RUN yarn build

ENTRYPOINT [ "yarn", "start" ]