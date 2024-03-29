---
title: 'AI-Kaiwa'
excerpt: 'AIと英会話するWebアプリ。
学習済み言語モデルを動かしているサーバーとやりとりし、WebSpeechAPIで音声認識、発話をすることで擬似的に英会話を可能にした。'
coverImage: '/assets/product/ai-kaiwa/cover.png'
date: '2020-07-01T12:00:00.000Z'
ogImage:
  url: '/assets/product/ai-kaiwa/cover.png'
---

- ソフトウェア名: AI-Kaiwa  

AIと英会話するWebアプリ
学習済み言語モデルを動かしているサーバーとやりとりし、WebSpeechAPIで音声認識、発話をすることで擬似的に英会話を可能にした

- 開発期間: 二ヶ月間 2020/5 ~ 2020/7
- 種別:講義
- 主な使用技術: Docker, Python, Flask, ParlAI, JavaScript, GitLab, Microsoft Teams, Figma   

メンバー数: 5人 (サーバーサイド1人、HTML、CSS担当2人、JavaScript担当2人)  
私はチームリーダーを務め、アイディア出し、デザイン、サーバーサイドを担当しました

チーム開発の講義で研究室メンバーと開発を行っていました。この講義主たる評価の対象が抗議最終回の5~10分のプレゼンテーションであったため、短時間でわかりやすく見栄えして、すごいと思ってもらえるようなアプリケーションを開発することを目標にしていました。
英語でしか研究されていない対話モデルにも日本語が第一言語の人にとっては英会話の練習対象になりうること、英会話レッスンを始める心理的ハードルが多くの人にとっては高いことを思いつき、なおかつ短時間でわかりやすく見栄えするのでこのアイディアを提案しました。

## 技術面について

サーバーサイドは一人で担当していました。
他のメンバーがGitやHTML、CSS、JavaScriptの学習期間の間に最低限動くものを作る必要があったので慣れていたPythonとFlaskを選びました。PythonとFlaskでアプリケーションサーバーを作り、学習済み言語モデルをWebSocket通信で利用できるParlAIというライブラリを利用して言語サーバーを立ててそれらをDocker Composeで接続することでサーバーを構成していました。

## エピソード

AI-Kaiwaは「AI+会話」と「英会話」という二つの意味が込められた洒落ネーミングです。私がつけました。