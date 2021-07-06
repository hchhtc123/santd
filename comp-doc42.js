(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{542:function(t,e,a){"use strict";a.r(e);var s=a(0),n=a.n(s),d={template:'<section class="markdown"><h1 id="rate-评分"><span>Rate 评分</span><a href="#rate-评分" class="anchor">#</a></h1><p>评分组件。</p><h2 id="何时使用"><span>何时使用</span><a href="#何时使用" class="anchor">#</a></h2><ul><li>对评价进行展示。</li><li>对事物进行快速的评级操作。</li></ul><h2 id="代码演示"><span>代码演示</span><a href="#代码演示" class="anchor">#</a></h2></section>'},o=a(8),c={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-rate>&lt;/s-rate>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Rate} from 'santd';\n\nexport default {\n    components: {\n        's-rate': Rate\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="基本"><span>基本</span><a href="#基本" class="anchor">#</a></h4><p>最简单的用法</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-rate":o.P},template:"<div><s-rate></s-rate></div>"}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625554081120"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},l={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div class="san-rate">\n        &lt;s-rate allowHalf="{{true}}" defaultValue="{{2.5}}" />\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Rate} from \'santd\';\n\nexport default {\n    components: {\n        \'s-rate\': Rate\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="半星"><span>半星</span><a href="#半星" class="anchor">#</a></h4><p>支持选中半星。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-rate":o.P},template:'<div class="san-rate"><s-rate allowHalf="{{true}}" defaultValue="{{2.5}}"></s-rate></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625554081126"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};const p=["terrible","bad","normal","good","wonderful"];var r={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div class=\"san-rate\">\n        &lt;s-rate value=\"{{value}}\" on-change=\"handleChange\" tooltips=\"{{desc}}\">&lt;/s-rate>\n        &lt;span s-if=\"value\" class=\"san-rate-text\">{{desc[value - 1]}}&lt;/span>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Rate} from 'santd';\n\nconst desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];\n\nexport default {\n    components: {\n        's-rate': Rate\n    },\n    initData() {\n        return {\n            desc: desc,\n            value: 3\n        }\n    },\n    handleChange(value) {\n        this.data.set('value', value);\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="文案展现"><span>文案展现</span><a href="#文案展现" class="anchor">#</a></h4><p>给评分组件加上文案展示。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-rate":o.P},initData:()=>({desc:p,value:3}),handleChange(t){this.data.set("value",t)},template:'<div class="san-rate"><s-rate value="{{value}}" on-change="handleChange" tooltips="{{desc}}"></s-rate><span s-if="value" class="san-rate-text">{{desc[value - 1]}}</span></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625554081093"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},i={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div class="san-rate">\n        &lt;s-rate defaultValue="{{2}}" disabled="{{true}}" />\n    &lt;/div>\n&lt;/template>\n&lt;script>\n\nimport {Rate} from \'santd\';\n\nexport default {\n    components: {\n        \'s-rate\': Rate\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="只读"><span>只读</span><a href="#只读" class="anchor">#</a></h4><p>只读，无法进行鼠标交互。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-rate":o.P},template:'<div class="san-rate"><s-rate defaultValue="{{2}}" disabled="{{true}}"></s-rate></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625554081080"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},h={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div class="san-rate">\n        &lt;s-rate defaultValue="{{3}}" >&lt;/s-rate> allowClear: true\n        &lt;br />\n        &lt;s-rate defaultValue="{{3}}" allowClear="{{false}}" /> allowClear: false\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Rate} from \'santd\';\n\nexport default {\n    components: {\n        \'s-rate\': Rate\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="清除"><span>清除</span><a href="#清除" class="anchor">#</a></h4><p>支持允许或者禁用清除。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-rate":o.P},template:'<div class="san-rate"><s-rate defaultValue="{{3}}"></s-rate> allowClear: true<br><s-rate defaultValue="{{3}}" allowClear="{{false}}"></s-rate> allowClear: false</div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625554081087"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},x={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div class="san-rate">\n        &lt;s-rate allowHalf="{{true}}">\n            &lt;s-icon type="heart" theme="filled" slot="character" />\n        &lt;/s-rate>\n        &lt;br />\n        &lt;s-rate character="A" allowHalf="{{true}}" />\n        &lt;br />\n        &lt;s-rate character="好" allowHalf="{{true}}" />\n    &lt;/div>\n&lt;/template>\n&lt;script>\n\nimport {Rate, Icon} from \'santd\';\n\nexport default {\n    components: {\n        \'s-rate\': Rate,\n        \'s-icon\': Icon\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="其他字符"><span>其他字符</span><a href="#其他字符" class="anchor">#</a></h4><p>可以将星星替换为其他字符，比如字母，数字，字体图标甚至中文。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-rate":o.P,"s-icon":o.z},template:'<div class="san-rate"><s-rate allowHalf="{{true}}"><s-icon type="heart" theme="filled" slot="character"></s-icon></s-rate><br><s-rate character="A" allowHalf="{{true}}"></s-rate><br><s-rate character="好" allowHalf="{{true}}"></s-rate></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625554081075"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},m={template:'<section class="markdown"><h2 id="api"><span>API</span><a href="#api" class="anchor">#</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>allowClear</td><td>是否允许再次点击后清除</td><td>boolean</td><td>true</td></tr><tr><td>allowHalf</td><td>是否允许半选</td><td>boolean</td><td>false</td></tr><tr><td>autoFocus</td><td>自动获取焦点</td><td>boolean</td><td>false</td></tr><tr><td>character</td><td>自定义字符</td><td>String or slot=&quot;character&quot;</td><td><code>&lt;Icon type=&quot;star&quot; /&gt;</code></td></tr><tr><td>count</td><td>star 总数</td><td>number</td><td>5</td></tr><tr><td>defaultValue</td><td>默认值</td><td>number</td><td>0</td></tr><tr><td>disabled</td><td>只读，无法进行交互</td><td>boolean</td><td>false</td></tr><tr><td>tooltips</td><td>自定义每项的提示信息</td><td>string[]</td><td>-</td></tr><tr><td>style</td><td>自定义样式对象</td><td>object</td><td>-</td></tr><tr><td>value</td><td>当前数，受控值</td><td>number</td><td>-</td></tr><tr><td>on-blur</td><td>失去焦点时的回调</td><td>Function()</td><td>-</td></tr><tr><td>on-change</td><td>选择时的回调</td><td>Function(value: number)</td><td>-</td></tr><tr><td>on-focus</td><td>获取焦点时的回调</td><td>Function()</td><td>-</td></tr><tr><td>on-hoverChange</td><td>鼠标经过时数值变化的回调</td><td>Function(value: number)</td><td>-</td></tr><tr><td>on-keydown</td><td>按键回调</td><td>Function(event)</td><td>-</td></tr></tbody></table><h2 id="方法"><span>方法</span><a href="#方法" class="anchor">#</a></h2><table><thead><tr><th>名称</th><th>描述</th></tr></thead><tbody><tr><td>blur()</td><td>移除焦点</td></tr><tr><td>focus()</td><td>获取焦点</td></tr></tbody></table></section>'};e.default=n.a.defineComponent({components:{desc:d,basic:c,readme:m,half:l,text:r,clear:h,disabled:i,character:x},template:"\n        <div>\n            <desc/>\n            <basic/>\n            <half/>\n            <text/>\n            <disabled/>\n            <clear/>\n            <character/>\n            <readme />\n        </div>\n    "})}}]);