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

# 技術的な取り組み

Language Serverを作成することを見越してTolerant Parserとして実装することでエラーをわかりやすくした。

テキストベースにすること
ソフトウェア独自の拡張子で、今後全く使えなくなるといった可能性を低くした。

シナリオや作文の世界にはないシンタクックスハイライトの作成(VS Code)。

# エピソード

当時Twitterを見すぎてしまうので使用時間を一日30分に制限していたが、TwitterTwitterのDMでStlapの営業する際にその制限を外したところ、それを言い訳に現在に至るまで無制限にTwitterをしてしまっている。