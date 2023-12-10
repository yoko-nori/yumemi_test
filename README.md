【25卒】ゆめみフロントエンドコーディング試験
# 「都道府県別人口推移」
![image](https://github.com/yoko-nori/yumemi_test/assets/110301900/a3aa9ec2-97e4-448a-9667-31ed2b3aa6fd)

URL : https://yumemi-test-red.vercel.app/  

## 概要
1. RESAS(地域経済分析システム) APIの「都道府県一覧」APIから取得する
2. APIレスポンスから都道府県一覧のチェックボックスを動的に生成する
3. 都道府県にチェックを入れると、RESAS APIから選択された都道府県の「人口構成」を取得する
4. 人口構成APIレスポンスから、X軸:年、Y軸:人口数の折れ線グラフを動的に生成して表示する


## 使用言語
### Web
- React
- TypeScripts

### API
- RESAS API : https://opendata.resas-portal.go.jp/  

### Deploy
- Vercel


## 参考サイト
#### 「React + Highcharts で都道府県の人口をグラフで表示するアプリ」(閲覧日:2023/12/11)
https://zenn.dev/shimapon3/articles/13e3d4b147742c#app.tsx  

#### 「【Git】git-flowを知ろう！　利用時のルールについて」(閲覧日:2023/12/11)
https://cloudsmith.co.jp/blog/efficient/2020/08/1534208.html  

#### 「フロントエンドのテスト手法、何がある？　知っておきたいテストとその戦略を網羅的に解説」(閲覧日:2023/12/11)
https://codezine.jp/article/detail/17672  
  
#### 「ReactでTesting Library/Jestを使ってテストを学ぼう」(閲覧日:2023/12/11)
https://reffect.co.jp/react/react-test#google_vignette  
  
#### 「Jestテスト内でaxiosのインポートエラーができないエラーにハマる」(閲覧日:2023/12/11)
https://chaika.hatenablog.com/entry/2023/08/18/083000#google_vignette  

#### 「"Cannot use import statement outside a module" with Axios」(閲覧日:2023/12/11)
https://stackoverflow.com/questions/73958968/cannot-use-import-statement-outside-a-module-with-axios  

#### 「React Highchart: How set "accessibility.enabled" option to false」(閲覧日:2023/12/11)
https://stackoverflow.com/questions/72829525/react-highchart-how-set-the-accessibility-enabled-option-to-false

#### 「Vercelにデプロイしてみよう」(閲覧日:2023/12/11)
https://typescriptbook.jp/tutorials/vercel-deploy  
  
#### 「Vercelで設定した環境変数をNext.jsで使用する」(閲覧日:2023/12/11)
https://qiita.com/Slowhand0309/items/f954237520d343fa9e4c  
  
