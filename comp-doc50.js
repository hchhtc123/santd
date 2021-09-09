(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{559:function(t,n,s){"use strict";s.r(n);var e=s(0),a=s.n(e),o={template:'<section class="markdown"><h2 id="api"><span>API</span><a href="#api" class="anchor">#</a></h2><h4 id="statistic"><span>Statistic</span><a href="#statistic" class="anchor">#</a></h4><table>\n<thead>\n<tr>\n<th>属性</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>decimalSeparator</td>\n<td>设置小数点</td>\n<td>string</td>\n<td>.</td>\n</tr>\n<tr>\n<td>formatter</td>\n<td>自定义数值展示</td>\n<td>(value) =&gt; String</td>\n<td>-</td>\n</tr>\n<tr>\n<td>groupSeparator</td>\n<td>设置千分位标识符</td>\n<td>string</td>\n<td>,</td>\n</tr>\n<tr>\n<td>precision</td>\n<td>数值精度</td>\n<td>number</td>\n<td>-</td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>设置数值的前缀</td>\n<td>string | Slot</td>\n<td>-</td>\n</tr>\n<tr>\n<td>suffix</td>\n<td>设置数值的后缀</td>\n<td>string | Slot</td>\n<td>-</td>\n</tr>\n<tr>\n<td>title</td>\n<td>数值的标题</td>\n<td>string</td>\n<td>-</td>\n</tr>\n<tr>\n<td>value</td>\n<td>数值内容</td>\n<td>string | number</td>\n<td>-</td>\n</tr>\n<tr>\n<td>valueStyle</td>\n<td>设置数值的样式</td>\n<td>style</td>\n<td>-</td>\n</tr>\n</tbody></table>\n<h4 id="statisticcountdown"><span>Statistic.Countdown</span><a href="#statisticcountdown" class="anchor">#</a></h4><table>\n<thead>\n<tr>\n<th>属性</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>format</td>\n<td>格式化倒计时展示，参考 <a href="https://day.js.org/">dayjs</a></td>\n<td>string</td>\n<td>&#39;HH:mm:ss&#39;</td>\n</tr>\n<tr>\n<td>onFinish</td>\n<td>倒计时完成时触发</td>\n<td>() =&gt; void</td>\n<td>-</td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>设置数值的前缀</td>\n<td>string | Slot</td>\n<td>-</td>\n</tr>\n<tr>\n<td>suffix</td>\n<td>设置数值的后缀</td>\n<td>string | Slot</td>\n<td>-</td>\n</tr>\n<tr>\n<td>title</td>\n<td>数值的标题</td>\n<td>string</td>\n<td>-</td>\n</tr>\n<tr>\n<td>value</td>\n<td>数值内容</td>\n<td>number | dayjs</td>\n<td>-</td>\n</tr>\n<tr>\n<td>valueStyle</td>\n<td>设置数值的样式</td>\n<td>style</td>\n<td>-</td>\n</tr>\n</tbody></table>\n</section>'},i=s(8),d={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n  &lt;div>\n    &lt;s-row gutter="{{16}}">\n        &lt;s-col span="{{12}}">\n            &lt;s-statistic\n                title="Active Users" value="{{112893}}"/>\n        &lt;/s-col>\n        &lt;s-col span="{{12}}">\n            &lt;s-statistic\n                title="Account Balance (CNY)" value="{{112893}}" precision="{{2}}"/>\n        &lt;/s-col>\n    &lt;/s-row>\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Statistic, Col, Row} from \'santd\';\n\nexport default {\n    components: {\n        \'s-statistic\': Statistic,\n        \'s-col\': Col,\n        \'s-row\': Row\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="基本"><span>基本</span><a href="#基本" class="anchor">#</a></h4><p>简单的展示。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-statistic":i.X,"s-col":i.o,"s-row":i.R},template:'\n  <div>\n    <s-row gutter="{{16}}">\n        <s-col span="{{12}}">\n            <s-statistic title="Active Users" value="{{112893}}"></s-statistic>\n        </s-col>\n        <s-col span="{{12}}">\n            <s-statistic title="Account Balance (CNY)" value="{{112893}}" precision="{{2}}"></s-statistic>\n        </s-col>\n    </s-row>\n  </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1631157142651">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},c={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n  &lt;div>\n    &lt;s-row gutter="{{16}}">\n        &lt;s-col span="{{12}}">\n            &lt;s-card>\n                &lt;s-statistic\n                    title="Active"\n                    value="{{11.28}}"\n                    precision="{{2}}"\n                    valueStyle="{{valueStyle}}">\n                    &lt;s-icon type="arrow-up" slot="prefix"/>\n                    &lt;template slot="suffix">%&lt;/template>\n                &lt;/s-statistic>\n            &lt;/s-card>\n        &lt;/s-col>\n        &lt;s-col span="{{12}}">\n            &lt;s-card>\n                &lt;s-statistic\n                    title="Idle"\n                    value="{{9.3}}"\n                    precision="{{2}}"\n                    valueStyle="{{valueStyle2}}">\n                    &lt;s-icon type="arrow-down" slot="prefix"/>\n                    &lt;template slot="suffix">%&lt;/template>\n                &lt;/s-statistic>\n            &lt;/s-card>\n        &lt;/s-col>\n    &lt;/s-row>\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Statistic, Col, Row, Icon, Card} from \'santd\';\n\nexport default {\n    components: {\n        \'s-statistic\': Statistic,\n        \'s-icon\': Icon,\n        \'s-col\': Col,\n        \'s-row\': Row,\n        \'s-card\': Card\n    },\n    initData() {\n        return {\n            valueStyle: {\n                color: \'#3f8600\'\n            },\n            valueStyle2: {\n                color: \'#cf1322\'\n            }\n        };\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="在卡片中使用"><span>在卡片中使用</span><a href="#在卡片中使用" class="anchor">#</a></h4><p>在卡片中展示统计数值。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-statistic":i.X,"s-icon":i.z,"s-col":i.o,"s-row":i.R,"s-card":i.k},initData:()=>({valueStyle:{color:"#3f8600"},valueStyle2:{color:"#cf1322"}}),template:'\n  <div>\n    <s-row gutter="{{16}}">\n        <s-col span="{{12}}">\n            <s-card>\n                <s-statistic title="Active" value="{{11.28}}" precision="{{2}}" valueStyle="{{valueStyle}}">\n                    <s-icon type="arrow-up" slot="prefix"></s-icon>\n                    <template slot="suffix">%</template>\n                </s-statistic>\n            </s-card>\n        </s-col>\n        <s-col span="{{12}}">\n            <s-card>\n                <s-statistic title="Idle" value="{{9.3}}" precision="{{2}}" valueStyle="{{valueStyle2}}">\n                    <s-icon type="arrow-down" slot="prefix"></s-icon>\n                    <template slot="suffix">%</template>\n                </s-statistic>\n            </s-card>\n        </s-col>\n    </s-row>\n  </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1631157142655">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},l={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n  &lt;div>\n    &lt;s-row gutter="{{16}}">\n        &lt;s-col span="{{12}}">\n            &lt;s-statistic\n                title="Feedback"\n                value="{{1128}}">\n                &lt;s-icon type="like" slot="prefix"/>\n            &lt;/s-statistic>\n        &lt;/s-col>\n        &lt;s-col span="{{12}}">\n            &lt;s-statistic\n                title="Unmerged"\n                value="{{93}}">\n                &lt;template slot="suffix">/ 100&lt;/template>\n            &lt;/s-statistic>\n        &lt;/s-col>\n    &lt;/s-row>\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Statistic, Col, Row, Icon} from \'santd\';\n\nexport default {\n    components: {\n        \'s-statistic\': Statistic,\n        \'s-icon\': Icon,\n        \'s-col\': Col,\n        \'s-row\': Row\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="单位"><span>单位</span><a href="#单位" class="anchor">#</a></h4><p>通过前缀和后缀添加单位。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-statistic":i.X,"s-icon":i.z,"s-col":i.o,"s-row":i.R},template:'\n  <div>\n    <s-row gutter="{{16}}">\n        <s-col span="{{12}}">\n            <s-statistic title="Feedback" value="{{1128}}">\n                <s-icon type="like" slot="prefix"></s-icon>\n            </s-statistic>\n        </s-col>\n        <s-col span="{{12}}">\n            <s-statistic title="Unmerged" value="{{93}}">\n                <template slot="suffix">/ 100</template>\n            </s-statistic>\n        </s-col>\n    </s-row>\n  </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1631157142647">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},p={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n  &lt;div>\n    &lt;s-row gutter="{{16}}">\n        &lt;s-col span="{{12}}">\n            &lt;s-countdown\n                title="Countdown" value="{{deadline}}" on-finish="handleFinish"/>\n        &lt;/s-col>\n        &lt;s-col span="{{12}}">\n            &lt;s-countdown\n                title="Million Seconds" value="{{deadline}}" format="HH:mm:ss:SSS"/>\n        &lt;/s-col>\n        &lt;s-col span="{{24}}" style="margin-top: 32px">\n            &lt;s-countdown\n                title="Day Level" value="{{deadline}}" format="D 天 H 时 m 分 s 秒"/>\n        &lt;/s-col>\n    &lt;/s-row>\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Statistic, Col, Row} from \'santd\';\n\nexport default {\n    components: {\n        \'s-statistic\': Statistic,\n        \'s-countdown\': Statistic.Countdown,\n        \'s-col\': Col,\n        \'s-row\': Row\n    },\n    initData() {\n        return {\n            deadline: Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30\n        };\n    },\n    handleFinish() {\n        console.log(\'on-finish\');\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="倒计时"><span>倒计时</span><a href="#倒计时" class="anchor">#</a></h4><p>倒计时组件。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-statistic":i.X,"s-countdown":i.X.Countdown,"s-col":i.o,"s-row":i.R},initData:()=>({deadline:Date.now()+1728e5+3e4}),handleFinish(){console.log("on-finish")},template:'\n  <div>\n    <s-row gutter="{{16}}">\n        <s-col span="{{12}}">\n            <s-countdown title="Countdown" value="{{deadline}}" on-finish="handleFinish"></s-countdown>\n        </s-col>\n        <s-col span="{{12}}">\n            <s-countdown title="Million Seconds" value="{{deadline}}" format="HH:mm:ss:SSS"></s-countdown>\n        </s-col>\n        <s-col span="{{24}}" style="margin-top: 32px">\n            <s-countdown title="Day Level" value="{{deadline}}" format="D 天 H 时 m 分 s 秒"></s-countdown>\n        </s-col>\n    </s-row>\n  </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1631157142642">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},r={template:'<section class="markdown"><h1 id="statistic-统计数值"><span>Statistic 统计数值</span><a href="#statistic-统计数值" class="anchor">#</a></h1><p>展示统计数值。</p><h2 id="何时使用"><span>何时使用</span><a href="#何时使用" class="anchor">#</a></h2><ul>\n<li>当需要突出某个或某组数字时。</li>\n<li>当需要展示带描述的统计类数据时使用。</li>\n</ul>\n<h2 id="代码演示"><span>代码演示</span><a href="#代码演示" class="anchor">#</a></h2></section>'};n.default=a.a.defineComponent({components:{readme:o,basic:d,unit:l,card:c,countdown:p,head:r},template:"\n        <div>\n            <head/>\n            <basic/>\n            <card/>\n            <unit/>\n            <countdown/>\n            <readme/>\n        </div>\n    "})}}]);