背景画像の設定方法

このプロジェクトに背景画像を追加する手順を説明します。

1. ローカル画像を使う場合
   - プロジェクトのルートに `images` フォルダを作成します。
   - 背景画像を `images/bg.jpg` として置きます（ファイル名は自由ですが、`style.css` のパスを同様に変更してください）。
   - `style.css` 内の body セレクタにある `background-image` のコメントを外してパスを指定します。例:
     background-image: url("images/bg.jpg");

2. 外部URLを使う場合
   - `style.css` の body セレクタで以下のように指定します:
     background-image: url("https://example.com/path/to/image.jpg");

3. 表示方法の調整
   - 画像を画面全体に広げたい: `background-size: cover;`
   - 画像全体を表示したい: `background-size: contain;`
   - 背景を固定したい: `background-attachment: fixed;`

4. 読みやすさ対策
   - テキストが背景と重なって読みにくい場合は、`index.html` の直後に `<div class="bg-overlay"></div>` を追加してオーバーレイを有効にしてください。
   - オーバーレイの透明度や色は `style.css` の `.bg-overlay` を調整してください。

5. 確認方法
   - ブラウザで `index.html` を開き、背景が表示されるか確認します。

（補足）画像が OneDrive 上にある場合、相対パスでは動かないことがあるため、プロジェクトフォルダ内にコピーしてください。