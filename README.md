# 利用方法

```
npx create-next-app hogehoge --example https://github.com/thr3a/nextjs-template
```

# TODO

- データベース？
- デプロイ簡単にする

npx prisma migrate dev --name init
npx prisma generate


npx prisma db seed
npx prisma migrate reset


事前準備
初期設定 npx prisma init
既存DBのスキーマ取得 npx prisma db pull
初期マイグレーションSQL生成 npx prisma migrate dev
開発時
DBスキーマの同期 ... npx prisma db push
マイグレーションSQL生成 ... npx prisma migrate dev
Prisma Clientの生成 ... npx prisma generate
本番
マイグレーション履歴の設定 ... npx prisma migrate resolve
マイグレーションの実行 ... npx prisma migrate deploy

npx prisma migrate dev --create-only --name x
npx prisma generate --watch
