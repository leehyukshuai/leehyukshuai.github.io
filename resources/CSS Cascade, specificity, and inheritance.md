# CSS: Cascade, specificity, and inheritance

## 继承

1. 每个 CSS 属性页都列出了属性是否被继承，但我们通常可以通过常识来判断哪些属性属于默认继承。比如font和color、background-color都是继承的。但是有关盒模型的属性border、margin、padding是不继承的。
2. 我们可以通过通用属性值决定是否继承：inherit(继承父部件), initial(使用浏览器自带样式), unset(~revert)(将属性重置为自然值，也就是如果属性是自然继承那么就是 `inherit`，否则和 `initial` 一样)。以及关键字`all`，它的值只能是通用属性值中的一个。

## 层叠

有时，一个部件可能对应了多种样式，计算机该决定使用哪一种样式呢？答案是通过优先级判断。样式的优先级可以看作一个四位数，如果是内联样式，第一位为1，否则为零；第二位由选择器中的id数决定；第三位是类（包含伪类）；第四位是元素（包括伪元素）。举个例子：h1>p::first-letter:hover

## [Review of the cascade concept](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_layers#review_of_the_cascade_concept)

The C in CSS stands for "Cascading". It is the method by which styles cascade together. The user agent goes through several, very clearly-defined steps to determine the values that get assigned to every property for every element. We will briefly list these steps here and then dig deeper into step 4, cascade layers, which is what you came here to learn:

1. **Relevance:** Find all the declaration blocks with a selector match for each element.
2. **Importance:** Sort rules based on if they are normal or important. Important styles are those that have the [`!important`](https://developer.mozilla.org/en-US/docs/Web/CSS/important) flag set.
3. **Origin:** Within each of the two importance buckets, sort rules by author, user, or user-agent origin.
4. **Layers:** Within each of the six origin importance bucket, sort by cascade layer. The layer order for normal declarations is from first layer created to last, followed by unlayered normal styles. This order is inverted for important styles, with unlayered important styles having the lowest precedence.
5. **Specificity:** For competing styles in the origin layer with precedence, sort declarations by [specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity).
6. **Proximity:** When two selectors in the origin layer with precedence have the same specificity, the property value from the last declared selector with the highest specificity wins.

For each step, only the declarations "still in the running" move on to "compete" in the next step. If only one declaration is in the running, it "wins", and the subsequent steps are moot.