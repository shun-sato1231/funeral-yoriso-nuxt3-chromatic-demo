<div align="center"><img src="https://cloud.yoriso.com/img/logo/white-logo.png" width="200"/></div>

# funeral-yoriso

よりそう葬儀サービス

# ローカル環境構築

## 前提条件

- クライアント PC: macOS
- git
- docker for mac

## コードを配置する

```bash
$ git clone git@github.com:minrevi/funeral-yoriso
```

## サーバ起動

```bash
$ cd funeral-yoriso
$ docker-compose up
```

## 動作確認

下記の環境をブラウザで閲覧する。

- local：http://localhost:3002/sogi
- develp：https://www.dev.yoriso.com/sogi
- produnction:未定

## IDE 設定

### 自動整形（prettier）の設定

#### VSCODE

以下の設定でファイル保存時に自動で整形が適用されます。

1. プラグイン「prettier」をインストール
   https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
2. Command + , で Settings を開く　（　画面左下の歯車アイコンでも開ける　）
3. format で検索し、「Editor: Default Formatter」 に prettier を選択
4. Editor:Format On Save にチェック

### intelliJ

https://pleiades.io/help/idea/prettier.html#ws_prettier_install

## AWS 環境構築

terraform で管理しています

動作確認環境

Terraform v0.12.19
provider.aws v4.13.0

ローカルで実行する際は AWS の credential 設定が必要です

```
# 初回
terraform init

# dev環境選択
terraform workspace select dev

# pro環境選択
terraform workspace select pro

# デプロイ
terraform apply

※ ecr追加後にimageのプッシュしておかないとecsが成功しないので手動で追加する
https://docs.aws.amazon.com/AmazonECR/latest/userguide/ECR_GetStarted.html
```

# cloudfront の cache invalidation

- lambda@Edge によりクエリパラメーター `createinvalidation` でアクセスされた場合リクエスト時に cloudfront の createinvalidation を発行します。

例)

- https://www.dev.yoriso.com/sogi/voice_replace/?createinvalidation
  - 発行されるパス: /sogi/voice\*replace/
- https://www.dev.yoriso.com/sogi/voice_replace/?createinvalidation=*
  - 発行されるパス: /sogi/voice*replace/*
