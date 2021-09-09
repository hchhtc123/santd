(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{544:function(n,e,t){"use strict";t.r(e);var a=t(0),s=t.n(a),o={template:'<section class="markdown"><h2 id="api"><span>API</span><a href="#api" class="anchor">#</a></h2><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>dateCellRender</td>\n<td>自定义渲染日期单元格，返回内容会被追加到单元格</td>\n<td>SanNode</td>\n<td>无</td>\n</tr>\n<tr>\n<td>dateFullCellRender</td>\n<td>自定义渲染日期单元格，返回内容覆盖单元格</td>\n<td>SanNode</td>\n<td>无</td>\n</tr>\n<tr>\n<td>defaultValue</td>\n<td>默认展示的日期</td>\n<td><a href="https://day.js.org/">dayjs</a></td>\n<td>默认日期</td>\n</tr>\n<tr>\n<td>disabledDate</td>\n<td>不可选择的日期</td>\n<td>(currentData: dayjs) =&gt; bool</td>\n<td>无</td>\n</tr>\n<tr>\n<td>fullscreen</td>\n<td>是否全屏显示</td>\n<td>boolean</td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>mode</td>\n<td>初始模式，<code>month/year</code></td>\n<td>string</td>\n<td><code>month</code></td>\n</tr>\n<tr>\n<td>monthCellRender</td>\n<td>自定义渲染月单元格，返回内容会被追加到单元格</td>\n<td>SanNode</td>\n<td>无</td>\n</tr>\n<tr>\n<td>monthFullCellRender</td>\n<td>自定义渲染月单元格，返回内容覆盖单元格</td>\n<td>SanNode</td>\n<td>无</td>\n</tr>\n<tr>\n<td>validRange</td>\n<td>设置可以显示的日期</td>\n<td>[<a href="https://day.js.org/">dayjs</a>, <a href="https://day.js.org/">dayjs</a>]</td>\n<td>无</td>\n</tr>\n<tr>\n<td>value</td>\n<td>展示日期</td>\n<td><a href="https://day.js.org/">dayjs</a></td>\n<td>当前日期</td>\n</tr>\n<tr>\n<td>on-panelChange</td>\n<td>日期面板变化回调</td>\n<td>function(date: dayjs, mode: string)</td>\n<td>无</td>\n</tr>\n<tr>\n<td>on-select</td>\n<td>点击选择日期回调</td>\n<td>function(date: dayjs）</td>\n<td>无</td>\n</tr>\n<tr>\n<td>on-change</td>\n<td>日期变化回调</td>\n<td>function(date: dayjs）</td>\n<td>无</td>\n</tr>\n<tr>\n<td>headerRender</td>\n<td>自定义头部内容</td>\n<td>SanNode</td>\n<td>无</td>\n</tr>\n</tbody></table>\n</section>'},d=t(8),l={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-calendar on-panelChange=\"panelChange\" />\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Calendar} from 'santd';\n\nexport default {\n    components: {\n        's-calendar': Calendar\n    },\n    panelChange({value, mode}) {\n        console.log(value, mode);\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="基本"><span>基本</span><a href="#基本" class="anchor">#</a></h4><p>一个通用的日历面板，支持年/月切换。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-calendar":d.j},panelChange({value:n,mode:e}){console.log(n,e)},template:'\n    <div>\n        <s-calendar on-panelChange="panelChange"></s-calendar>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1631157145121">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},r=(t(597),t(2)),c=t.n(r);var i={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-calendar>\n            &lt;ul class=\"events\" slot=\"dateCellRender\">\n                &lt;li s-for=\"item in getListData(value)\">\n                    &lt;s-badge status=\"{{item.type}}\" text=\"{{item.content}}\" />\n                &lt;/li>\n            &lt;/ul>\n            &lt;template slot=\"monthCellRender\">\n                &lt;div class=\"notes-month\" s-if=\"getMonthData(value)\">\n                    &lt;section>{{getMonthData(value)}}&lt;/section>\n                    &lt;span>Backlog number&lt;/span>\n                &lt;/div>\n            &lt;/template>\n        &lt;/s-calendar>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport dayjs from 'dayjs';\nimport {Calendar, Badge} from 'santd';\n\nfunction getListData(value) {\n    let listData;\n    switch (value.date()) {\n        case 8:\n            listData = [\n                { type: 'warning', content: 'This is warning event.' },\n                { type: 'success', content: 'This is usual event.' }\n            ];\n            break;\n        case 10:\n            listData = [\n                { type: 'warning', content: 'This is warning event.' },\n                { type: 'success', content: 'This is usual event.' },\n                { type: 'error', content: 'This is error event.' }\n            ];\n            break;\n        case 15:\n            listData = [\n                { type: 'warning', content: 'This is warning event' },\n                { type: 'success', content: 'This is very long usual event。。....' },\n                { type: 'error', content: 'This is error event 1.' },\n                { type: 'error', content: 'This is error event 2.' },\n                { type: 'error', content: 'This is error event 3.' },\n                { type: 'error', content: 'This is error event 4.' }\n            ];\n            break;\n        default:\n    }\n    return listData || [];\n}\n\nfunction getMonthData(value) {\n    if (value.month() === 8) {\n        return 1394;\n    }\n}\n\nexport default {\n    components: {\n        's-calendar': Calendar,\n        's-badge': Badge\n    },\n    getListData(value) {\n        return getListData(value);\n    },\n    getMonthData(value) {\n        return getMonthData(value);\n    }\n}\n&lt;/script>\n\n&lt;style>\n.events {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n.events .san-badge-status {\n    overflow: hidden;\n    white-space: nowrap;\n    width: 100%;\n    text-overflow: ellipsis;\n   font-size: 12px;\n}\n.notes-month {\n    text-align: center;\n    font-size: 28px;\n}\n.notes-month section {\n    font-size: 28px;\n}\n&lt;/style></code></pre>",text:'\n<h4 id="通知事项日历"><span>通知事项日历</span><a href="#通知事项日历" class="anchor">#</a></h4><p>一个复杂的应用示例，用插槽 <code>dateCellRender</code> 和 <code>monthCellRender</code> 来自定义需要追加的渲染的数据。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-calendar":d.j,"s-badge":d.g},getListData:n=>function(n){let e;switch(n.date()){case 8:e=[{type:"warning",content:"This is warning event."},{type:"success",content:"This is usual event."}];break;case 10:e=[{type:"warning",content:"This is warning event."},{type:"success",content:"This is usual event."},{type:"error",content:"This is error event."}];break;case 15:e=[{type:"warning",content:"This is warning event"},{type:"success",content:"This is very long usual event。。...."},{type:"error",content:"This is error event 1."},{type:"error",content:"This is error event 2."},{type:"error",content:"This is error event 3."},{type:"error",content:"This is error event 4."}]}return e||[]}(n),getMonthData:n=>function(n){if(8===n.month())return 1394}(n),template:'\n    <div>\n        <s-calendar>\n            <ul class="events" slot="dateCellRender">\n                <li s-for="item in getListData(value)">\n                    <s-badge status="{{item.type}}" text="{{item.content}}"></s-badge>\n                </li>\n            </ul>\n            <template slot="monthCellRender">\n                <div class="notes-month" s-if="getMonthData(value)">\n                    <section>{{getMonthData(value)}}</section>\n                    <span>Backlog number</span>\n                </div>\n            </template>\n        </s-calendar>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1631157145111">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},p={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div style=\"width: 300px;border: 1px solid #ddd;border-radius: 4px\">\n        &lt;s-calendar fullscreen=\"{{false}}\" on-panelChange=\"panelChange\" />\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport * as dayjs from 'dayjs';\nimport {Calendar} from 'santd';\n\nexport default {\n    components: {\n        's-calendar': Calendar\n    },\n    initData() {\n        return {\n            validRange: [dayjs.default(), dayjs.default().add(10, 'd')]\n        }\n    },\n    getValue(value) {\n        return value.format('YYYY-MM-DD');\n    },\n    selectDate(param) {\n        console.log('on select', param.format('YYYY-MM-DD'));\n    },\n    panelChange(param) {\n        console.log('on panel change', param.value, param.mode);\n    },\n    change(param) {\n        console.log('on change', param);\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="卡片模式"><span>卡片模式</span><a href="#卡片模式" class="anchor">#</a></h4><p>用于嵌套在空间有限的容器中。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-calendar":d.j},initData:()=>({validRange:[c.a(),c.a().add(10,"d")]}),getValue:n=>n.format("YYYY-MM-DD"),selectDate(n){console.log("on select",n.format("YYYY-MM-DD"))},panelChange(n){console.log("on panel change",n.value,n.mode)},change(n){console.log("on change",n)},template:'\n    <div style="width: 300px;border: 1px solid #ddd;border-radius: 4px">\n        <s-calendar fullscreen="{{false}}" on-panelChange="panelChange"></s-calendar>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1631157145099">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},h={template:'<section class="markdown"><h1 id="calendar-日历"><span>Calendar 日历</span><a href="#calendar-日历" class="anchor">#</a></h1><p>按照日历形式展示数据的容器。</p><h2 id="何时使用"><span>何时使用</span><a href="#何时使用" class="anchor">#</a></h2><p>当数据是日期或按照日期划分时，例如日程、课表、价格日历等，农历等。目前支持年/月切换。</p><h2 id="代码演示"><span>代码演示</span><a href="#代码演示" class="anchor">#</a></h2></section>'},g={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-alert message=\"You selected date: {{displayDate}}\" />\n        &lt;s-calendar on-panelChange=\"panelChange\" on-select=\"handleSelect\" />\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport dayjs from 'dayjs';\nimport {Calendar, Alert} from 'santd';\n\nexport default {\n    components: {\n        's-calendar': Calendar,\n        's-alert': Alert\n    },\n    computed: {\n        displayDate() {\n            const selectedValue = this.data.get('selectedValue');\n            return selectedValue && selectedValue.format('YYYY-MM-DD');\n        }\n    },\n    initData() {\n        return {\n            value: dayjs('2017-01-25'),\n            selectedValue: dayjs('2017-01-25')\n        }\n    },\n    handleSelect(value) {\n        this.data.set('value', value);\n        this.data.set('selectedValue', value);\n    },\n    panelChange({value}) {\n        this.data.set('value', value);\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="选择功能"><span>选择功能</span><a href="#选择功能" class="anchor">#</a></h4><p>一个通用的日历面板，支持年/月切换。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-calendar":d.j,"s-alert":d.b},computed:{displayDate(){const n=this.data.get("selectedValue");return n&&n.format("YYYY-MM-DD")}},initData:()=>({value:c()("2017-01-25"),selectedValue:c()("2017-01-25")}),handleSelect(n){this.data.set("value",n),this.data.set("selectedValue",n)},panelChange({value:n}){this.data.set("value",n)},template:'\n    <div>\n        <s-alert message="You selected date: {{displayDate}}"></s-alert>\n        <s-calendar on-panelChange="panelChange" on-select="handleSelect"></s-calendar>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1631157145093">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},u=t(22),m=t.n(u);c.a.extend(m.a);var v={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div style="width: 300px; border: 1px solid #d9d9d9; border-radius: 4px;">\n        &lt;s-calendar on-panelChange="panelChange" headerRender="{{headerRender}}" fullscreen="{{false}}" s-ref="calendar">\n            &lt;div style="padding: 10px;" slot="headerRender">\n                &lt;div style="margin-bottom: 10px;">Custom header&lt;/div>\n                &lt;s-row type="flex" justify="space-between">\n                    &lt;s-col>\n                        &lt;s-group size="small" value="{{type}}" on-change="handleTypeChange" name="customgroup">\n                            &lt;s-radiobutton value="month">Month&lt;/s-radiobutton>\n                            &lt;s-radiobutton value="year">Year&lt;/s-radiobutton>\n                        &lt;/s-group>\n                    &lt;/s-col>\n                    &lt;s-col>\n                        &lt;s-select\n                            size="small"\n                            class="my-year-select"\n                            value="{{getYear(value)}}"\n                            on-change="handleYearChange"\n                        >\n                        &lt;s-option s-for="year in getYears(value)" value="{{year}}">{{year}}&lt;/s-option>\n                        &lt;/s-select>\n                    &lt;/s-col>\n                    &lt;s-col>\n                        &lt;s-select\n                            size="small"\n                            value="{{getMonth(value)}}"\n                            on-change="handleMonthChange"\n                        >\n                            &lt;s-option s-for="month in getMonths(value)" value="{{month.value}}">{{month.label}}&lt;/s-option>\n                        &lt;/s-select>\n                    &lt;/s-col>\n                &lt;/s-row>\n            &lt;/div>\n        &lt;/s-calendar>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport dayjs from \'dayjs\';\nimport {Calendar, Grid, Radio, Select} from \'santd\';\nimport localeData from \'dayjs/plugin/localeData\';\n\ndayjs.extend(localeData);\n\nexport default {\n    components: {\n        \'s-calendar\': Calendar,\n        \'s-row\': Grid.Row,\n        \'s-col\': Grid.Col,\n        \'s-group\': Radio.Group,\n        \'s-radiobutton\': Radio.Button,\n        \'s-select\': Select,\n        \'s-option\': Select.Option\n    },\n    computed: {\n        displayDate() {\n            const selectedValue = this.data.get(\'selectedValue\');\n            return selectedValue && selectedValue.format(\'YYYY-MM-DD\');\n        },\n    },\n    getYear(value) {\n        return value && String(value.year());\n    },\n    getYears(value) {\n        const options = [];\n        const year = value.year();\n        for (let i = year - 10; i &lt; year + 10; i++) {\n            options.push(String(i));\n        }\n        return options;\n    },\n    getMonth(value) {\n        return value && String(value.month());\n    },\n    getMonths(value) {\n        const options = [];\n        const localeData = value.localeData();\n\n        for (let i = 0; i &lt; 12; i++) {\n            options.push({label: localeData.monthsShort(value.month(i)), value: String(i)});\n        }\n        return options;\n    },\n    handleTypeChange(e) {\n        this.ref(\'calendar\').handleHeaderTypeChange(e);\n    },\n    handleYearChange(value) {\n        this.ref(\'calendar\').handleYearChange(value);\n    },\n    handleMonthChange(value) {\n        this.ref(\'calendar\').handleMonthChange(value);\n    },\n    handleSelect(value) {\n        this.data.set(\'value\', value);\n        this.data.set(\'selectedValue\', value);\n    },\n    panelChange(value) {\n        console.log(value);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="自定义头部"><span>自定义头部</span><a href="#自定义头部" class="anchor">#</a></h4><p>自定义日历头部内容。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-calendar":d.j,"s-row":d.y.Row,"s-col":d.y.Col,"s-group":d.O.Group,"s-radiobutton":d.O.Button,"s-select":d.S,"s-option":d.S.Option},computed:{displayDate(){const n=this.data.get("selectedValue");return n&&n.format("YYYY-MM-DD")}},getYear:n=>n&&String(n.year()),getYears(n){const e=[],t=n.year();for(let n=t-10;n<t+10;n++)e.push(String(n));return e},getMonth:n=>n&&String(n.month()),getMonths(n){const e=[],t=n.localeData();for(let a=0;a<12;a++)e.push({label:t.monthsShort(n.month(a)),value:String(a)});return e},handleTypeChange(n){this.ref("calendar").handleHeaderTypeChange(n)},handleYearChange(n){this.ref("calendar").handleYearChange(n)},handleMonthChange(n){this.ref("calendar").handleMonthChange(n)},handleSelect(n){this.data.set("value",n),this.data.set("selectedValue",n)},panelChange(n){console.log(n)},template:'\n    <div style="width: 300px; border: 1px solid #d9d9d9; border-radius: 4px;">\n        <s-calendar on-panelChange="panelChange" headerRender="{{headerRender}}" fullscreen="{{false}}" s-ref="calendar">\n            <div style="padding: 10px;" slot="headerRender">\n                <div style="margin-bottom: 10px;">Custom header</div>\n                <s-row type="flex" justify="space-between">\n                    <s-col>\n                        <s-group size="small" value="{{type}}" on-change="handleTypeChange" name="customgroup">\n                            <s-radiobutton value="month">Month</s-radiobutton>\n                            <s-radiobutton value="year">Year</s-radiobutton>\n                        </s-group>\n                    </s-col>\n                    <s-col>\n                        <s-select size="small" class="my-year-select" value="{{getYear(value)}}" on-change="handleYearChange">\n                        <s-option s-for="year in getYears(value)" value="{{year}}">{{year}}</s-option>\n                        </s-select>\n                    </s-col>\n                    <s-col>\n                        <s-select size="small" value="{{getMonth(value)}}" on-change="handleMonthChange">\n                            <s-option s-for="month in getMonths(value)" value="{{month.value}}">{{month.label}}</s-option>\n                        </s-select>\n                    </s-col>\n                </s-row>\n            </div>\n        </s-calendar>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1631157145082">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'};e.default=s.a.defineComponent({components:{readme:o,desc:h,basic:l,customrender:i,small:p,select:g,customheader:v},template:"\n        <div>\n            <desc/>\n            <basic/>\n            <customrender/>\n            <small/>\n            <select/>\n            <customheader/>\n            <readme/>\n        </div>\n    "})},597:function(n,e,t){var a=t(4),s=t(598);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[n.i,s,""]]);var o={insert:"head",singleton:!1};a(s,o);n.exports=s.locals||{}},598:function(n,e,t){(e=t(5)(!1)).push([n.i,"\n.events {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n.events .san-badge-status {\n    overflow: hidden;\n    white-space: nowrap;\n    width: 100%;\n    text-overflow: ellipsis;\n   font-size: 12px;\n}\n.notes-month {\n    text-align: center;\n    font-size: 28px;\n}\n.notes-month section {\n    font-size: 28px;\n}\n",""]),n.exports=e}}]);