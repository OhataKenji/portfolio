---
title: 'Stlap: the STory LAnguage Processor'
excerpt: '漫画シナリオをマークダウン風に書く言語。コメントなどプログラミングでは一般的だが小説執筆では一般的でない機能を提供している。
またフラグ管理機能でシーン同士の対応関係も保証されるようになっている。'
coverImage: '/assets/product/stlap/cover.png'
date: '2021-12-01T12:00:00.000Z'
ogImage:
  url: '/assets/product/stlap/cover.png'
---

漫画シナリオをマークダウン風に書く言語。コメントなどプログラミングでは一般的だが小説執筆では一般的でない機能を提供している。
またフラグ管理機能でシーン同士の対応関係も保証されるようになっている。

- 開発期間: 2021/9 ~ 2021/12
- 個人開発
- 使用技術: TypeScript, Node, React, GitHub Actions, GitLab CI/CD

シナリオ執筆用にiPadやパソコンでの作動を見越してCLIとWebの両方で動かせるようにできるTypeScriptを選んだ。
VS Code用にシンタクックスハイライトを作成した。(https://marketplace.visualstudio.com/items?itemName=OhataKenji.stlap-vscode)
シンタックスハイライトという概念はシナリオ執筆にはあまりない。

# 技術的な取り組み

## プレーンテキストベースであることについて
シナリオ作成用のソフトウェアは数多あるが、
そのソフトウェア独自の拡張子でファイルを保存するものが多いため、
今後のメンテナンス状況では使えなくなる危険性がある。

プレーンテキストベースにすることで二度と開けないと言った状況や、
移行しにくい、という状況を減らすことを狙った。

## Tolerant Parser

StlapはLanguage Serverを作成すること(ひいてはVS Codeなどでの言語支援)
を見越してTolerant Parserの考えを利用して実装しています。
Tolerant Parserはパース中にエラーが起きても出来るだけパースを続けるように振る舞います。
これによってコードのエラーがわかりやすくなります。

# エピソード

当時Twitterを見すぎてしまうので使用時間を一日30分に制限していたが、TwitterTwitterのDMでStlapの営業する際にその制限を外したところ、それを言い訳に現在に至るまで無制限にTwitterをしてしまっている。