标准模式：box-sizing:content-box;  会被padding撑开
标准模式盒子宽度会被设置的padding撑开，所设置的width为内容宽度（content）
标准模式盒子总宽度/高度：内容区宽度 /高度+padding+border + margin。

怪异模式：box-sizing:border-box; 不会被padding撑开
怪异模式则相当于将盒子的大小固定好，再将内容装入盒子。盒子的大小并不会被padding所撑开。
怪异模式盒子总宽度/高度： width/height + margin 