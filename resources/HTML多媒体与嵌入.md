# HTML多媒体与嵌入

## 小知识

- 关于size的大小单位：`em`代表相对于当前对象内文本的字体尺寸。
- 为使图片居中，可以在img的样式表中添加：display: block; margin: 0 auto;。其中block的含义是以块级部件显示，auto的意思是左右等宽。
- 绝对不要随意使用其他服务器的图片(hotlinking)，这是危险的。

## 图片的嵌入

- 使用\<img\>内联标签，可选属性：src, width, height, title(图片名), alt(对图片的描述)
- 使用\<figure\>标签，并嵌套\<img\>作为图表，\<figcaption\>作为说明文字。
- 使用css中的background-image属性，比如`background-image: url(""../images/bg.png")`

## 视频的嵌入

- 使用\<video\>标签插入视频，可选属性src, height, width, autoplay, loop, muted, preload, poster, controls。poster可以设置封面图，还是比较有用的。当使用src后，标签中的后备内容将作为视频无法播放时的替补显示。
- 因为浏览器对不同视频格式的支持不同，因此最好停止使用src属性，而是在video标签内使用source元素，\<source src="..." type="video/mp4"\>。其中type属性很有用，可以方便浏览器判断是否支持从而快速跳过或者加载。
- 使用track显示音轨文本。`<track kind="subtitles" src="subtitles_en.vtt" srclang="en">`。

## 音频的嵌入

- \<audio\>使用方式几乎与视频格式相同，除了无法设置大小和封面等视觉元素。