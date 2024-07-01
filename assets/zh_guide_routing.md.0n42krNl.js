import{_ as s,c as a,o as i,a3 as n}from"./chunks/framework.d61ZGgo0.js";const E=JSON.parse('{"title":"路由","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"zh/guide/routing.md","filePath":"zh/guide/routing.md","lastUpdated":1719813944000}'),e={name:"zh/guide/routing.md"},p=n(`<h1 id="routing" tabindex="-1">路由 <a class="header-anchor" href="#routing" aria-label="Permalink to &quot;路由 {#routing}&quot;">​</a></h1><h2 id="file-based-routing" tabindex="-1">基于文件的路由 <a class="header-anchor" href="#file-based-routing" aria-label="Permalink to &quot;基于文件的路由 {#file-based-routing}&quot;">​</a></h2><p>VitePress 使用基于文件的路由，这意味着生成的 HTML 页面是从源 Markdown 文件的目录结构映射而来的。例如，给定以下目录结构：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>├─ guide</span></span>
<span class="line"><span>│  ├─ getting-started.md</span></span>
<span class="line"><span>│  └─ index.md</span></span>
<span class="line"><span>├─ index.md</span></span>
<span class="line"><span>└─ prologue.md</span></span></code></pre></div><p>生成的 HTML 页面会是这样：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>index.md                  --&gt;  /index.html (可以通过 / 访问)</span></span>
<span class="line"><span>prologue.md               --&gt;  /prologue.html</span></span>
<span class="line"><span>guide/index.md            --&gt;  /guide/index.html (可以通过 /guide/ 访问)</span></span>
<span class="line"><span>guide/getting-started.md  --&gt;  /guide/getting-started.html</span></span></code></pre></div><p>生成的 HTML 可以托管在任何支持静态文件的 Web 服务器上。</p><h2 id="root-and-source-directory" tabindex="-1">根目录和源目录 <a class="header-anchor" href="#root-and-source-directory" aria-label="Permalink to &quot;根目录和源目录 {#root-and-source-directory}&quot;">​</a></h2><p>VitePress 项目的文件结构中有两个重要的概念：项目根目录 (<strong>project root</strong>) 和源目录 (<strong>source directory</strong>)。</p><h3 id="project-root" tabindex="-1">项目根目录 <a class="header-anchor" href="#project-root" aria-label="Permalink to &quot;项目根目录 {#project-root}&quot;">​</a></h3><p>项目根目录是 VitePress 将尝试寻找 <code>.vitepress</code> 特殊目录的地方。<code>.vitepress</code> 目录是 VitePress 配置文件、开发服务器缓存、构建输出和可选主题自定义代码的预留位置。</p><p>当从命令行运行 <code>vitepress dev</code> 或 <code>vitepress build</code> 时，VitePress 将使用当前工作目录作为项目根目录。要将子目录指定为根目录，需要将相对路径传递给命令。例如，如果 VitePress 项目位于 <code>./docs</code>，应该运行 <code>vitepress dev docs</code>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>├─ docs                    # 项目根目录</span></span>
<span class="line"><span>│  ├─ .vitepress           # 配置目录</span></span>
<span class="line"><span>│  ├─ getting-started.md</span></span>
<span class="line"><span>│  └─ index.md</span></span>
<span class="line"><span>└─ ...</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs</span></span></code></pre></div><p>这将导致以下源代码到 HTML 的映射：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docs/index.md            --&gt;  /index.html (可以通过 / 访问)</span></span>
<span class="line"><span>docs/getting-started.md  --&gt;  /getting-started.html</span></span></code></pre></div><h3 id="source-directory" tabindex="-1">源目录 <a class="header-anchor" href="#source-directory" aria-label="Permalink to &quot;源目录 {#source-directory}&quot;">​</a></h3><p>源目录是 Markdown 源文件所在的位置。默认情况下，它与项目根目录相同。但是，可以通过 <a href="./../reference/site-config#srcdir"><code>srcDir</code></a> 配置选项对其进行配置。</p><p><code>srcDir</code> 选项是相对于项目根目录解析的。例如，对于 <code>srcDir: &#39;src&#39;</code>，文件结构将如下所示：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.                          # 项目根目录</span></span>
<span class="line"><span>├─ .vitepress              # 配置目录</span></span>
<span class="line"><span>└─ src                     # 源目录</span></span>
<span class="line"><span>   ├─ getting-started.md</span></span>
<span class="line"><span>   └─ index.md</span></span></code></pre></div><p>生成的源代码到 HTML 的映射：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>src/index.md            --&gt;  /index.html (可以通过 / 访问)</span></span>
<span class="line"><span>src/getting-started.md  --&gt;  /getting-started.html</span></span></code></pre></div><h2 id="linking-between-pages" tabindex="-1">链接页面 <a class="header-anchor" href="#linking-between-pages" aria-label="Permalink to &quot;链接页面 {#linking-between-pages}&quot;">​</a></h2><p>在页面之间链接时，可以使用绝对路径和相对路径。请注意，虽然 <code>.md</code> 和 <code>.html</code> 扩展名都可以使用，但最佳做法是省略文件扩展名，以便 VitePress 可以根据配置生成最终的 URL。</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- Do --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">Getting Started</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">./getting-started</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">Getting Started</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">../guide/getting-started</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- Don&#39;t --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">Getting Started</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">./getting-started.md</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">Getting Started</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">./getting-started.html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>在<a href="./asset-handling">资源处理</a>中了解有关链接到资源（例如图像）的更多信息。</p><h3 id="linking-to-non-vitepress-pages" tabindex="-1">链接到非 VitePress 页面 <a class="header-anchor" href="#linking-to-non-vitepress-pages" aria-label="Permalink to &quot;链接到非 VitePress 页面 {#linking-to-non-vitepress-pages}&quot;">​</a></h3><p>如果想链接到站点中不是由 VitePress 生成的页面，需要使用完整的 URL（在新选项卡中打开）或明确指定 target：</p><p><strong>输入</strong></p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">Link to pure.html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">/pure.html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){target=&quot;_self&quot;}</span></span></code></pre></div><p><strong>输出</strong></p><p><a href="/pure.html" target="_self">Link to pure.html</a></p><div class="tip custom-block"><p class="custom-block-title">注意</p><p>在 Markdown 链接中，<code>base</code> 会自动添加到 URL 前面。这意味着，如果想链接到 <code>base</code> 之外的页面，则链接中需要类似 <code>../../pure.html</code> 的内容（由浏览器相对于当前页面解析）。</p><p>或者，可以直接使用锚标记语法：</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/pure.html&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> target</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;_self&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Link to pure.html&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div></div><h2 id="generating-clean-url" tabindex="-1">生成简洁的 URL <a class="header-anchor" href="#generating-clean-url" aria-label="Permalink to &quot;生成简洁的 URL {#generating-clean-url}&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">需要服务器支持</p><p>要使 VitePress 提供简洁 URL，需要服务器端支持。</p></div><p>默认情况下，VitePress 将入站链接解析为以 <code>.html</code> 结尾的 URL。但是，一些用户可能更喜欢没有 .html 扩展名的“简洁 URL”——例如，<code>example.com/path</code> 而不是 <code>example.com/path.html</code>。</p><p>某些服务器或托管平台 (例如 Netlify、Vercel 或 GitHub Pages) 提供将 <code>/foo</code> 之类的 URL 映射到 <code>/foo.html</code> (如果存在) 的功能，而无需重定向：</p><ul><li>Netlify 和 GitHub Pages 是默认支持的。</li><li>Vercel 需要在 <a href="https://vercel.com/docs/concepts/projects/project-configuration#cleanurls" target="_blank" rel="noreferrer">vercel.json 中启用 cleanUrls 选项</a>。</li></ul><p>如果可以使用此功能，还可以启用 VitePress 自己的 <a href="./../reference/site-config#cleanurls"><code>cleanUrls</code></a> 配置选项，以便：</p><ul><li>页面之间的入站链接是在没有 <code>.html</code> 扩展名的情况下生成的。</li><li>如果当前路径以 <code>.html</code> 结尾，路由器将执行客户端重定向到无扩展路径。</li></ul><p>但是，如果无法为服务器配置此类支持，则必须手动采用以下目录结构：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>├─ getting-started</span></span>
<span class="line"><span>│  └─ index.md</span></span>
<span class="line"><span>├─ installation</span></span>
<span class="line"><span>│  └─ index.md</span></span>
<span class="line"><span>└─ index.md</span></span></code></pre></div><h2 id="route-rewrites" tabindex="-1">路由重写 <a class="header-anchor" href="#route-rewrites" aria-label="Permalink to &quot;路由重写 {#route-rewrites}&quot;">​</a></h2><p>可以自定义源目录结构和生成页面之间的映射。当有一个复杂的项目结构时，它很有用。例如，假设有一个包含多个包的 monorepo，并且希望将文档与源文件一起放置，如下所示：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>├─ packages</span></span>
<span class="line"><span>│  ├─ pkg-a</span></span>
<span class="line"><span>│  │  └─ src</span></span>
<span class="line"><span>│  │      ├─ pkg-a-code.ts</span></span>
<span class="line"><span>│  │      └─ pkg-a-docs.md</span></span>
<span class="line"><span>│  └─ pkg-b</span></span>
<span class="line"><span>│     └─ src</span></span>
<span class="line"><span>│         ├─ pkg-b-code.ts</span></span>
<span class="line"><span>│         └─ pkg-b-docs.md</span></span></code></pre></div><p>希望像这样生成 VitePress 页面：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>packages/pkg-a/src/pkg-a-docs.md  --&gt;  /pkg-a/index.html</span></span>
<span class="line"><span>packages/pkg-b/src/pkg-b-docs.md  --&gt;  /pkg-b/index.html</span></span></code></pre></div><p>可以通过像这样配置 <a href="./../reference/site-config#rewrites"><code>rewrites</code></a> 选项来实现此目的：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// .vitepress/config.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  rewrites: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;packages/pkg-a/src/pkg-a-docs.md&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;pkg-a/index.md&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;packages/pkg-b/src/pkg-b-docs.md&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;pkg-b/index.md&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><code>rewrites</code> 选项还支持动态路由参数。在上面的示例中，如果有很多包，则列出所有路径会很冗长。鉴于它们都具有相同的文件结构，可以像这样简化配置：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  rewrites: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;packages/:pkg/src/(.*)&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;:pkg/index.md&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>重写路径是使用 <code>path-to-regexp</code> 包编译的——请参阅其<a href="https://github.com/pillarjs/path-to-regexp#parameters" target="_blank" rel="noreferrer">文档</a>以获取更多语法。</p><div class="warning custom-block"><p class="custom-block-title">开启重写功能时使用相对链接</p><p>启用重写后，<strong>相对链接应基于重写的路径</strong>。例如，为了创建从 <code>packages/pkg-a/src/pkg-a-code.md</code> 到 <code>packages/pkg-b/src/pkg-b-code.md</code> 的相对链接，应该使用：</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">Link to PKG B</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">../pkg-b/pkg-b-code</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div></div><h2 id="dynamic-routes" tabindex="-1">动态路由 <a class="header-anchor" href="#dynamic-routes" aria-label="Permalink to &quot;动态路由 {#dynamic-routes}&quot;">​</a></h2><p>可以使用单个 Markdown 文件和动态数据生成许多页面。例如，可以创建一个 <code>packages/[pkg].md</code> 文件，为项目中的每个包生成相应的页面。这里，<code>[pkg]</code> 段是一个路由参数，用于区分每个页面。</p><h3 id="paths-loader-file" tabindex="-1">路径加载文件 <a class="header-anchor" href="#paths-loader-file" aria-label="Permalink to &quot;路径加载文件 {#paths-loader-file}&quot;">​</a></h3><p>由于 VitePress 是静态站点生成器，因此<strong>必须</strong>在构建时确定可能的页面路径。因此，动态路由页面必须伴随<strong>路径加载文件</strong>。对于 <code>packages/[pkg].md</code>，我们需要 <code>packages/[pkg].paths.js</code> (也支持 <code>.ts</code>)：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>└─ packages</span></span>
<span class="line"><span>   ├─ [pkg].md         # 路由模板</span></span>
<span class="line"><span>   └─ [pkg].paths.js   # 路由路径加载器</span></span></code></pre></div><p>路径加载器应该提供一个带有 <code>paths</code> 方法的对象作为其默认导出。<code>paths</code> 方法应返回具有 <code>params</code> 属性的对象数组。这些对象中的每一个都将生成一个相应的页面。</p><p>给定以下 <code>paths</code> 数组：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// packages/[pkg].paths.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  paths</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      { params: { pkg: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;foo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      { params: { pkg: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;bar&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>生成的 HTML 页面将会是：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>└─ packages</span></span>
<span class="line"><span>   ├─ foo.html</span></span>
<span class="line"><span>   └─ bar.html</span></span></code></pre></div><h3 id="multiple-params" tabindex="-1">多参数 <a class="header-anchor" href="#multiple-params" aria-label="Permalink to &quot;多参数 {#multiple-params}&quot;">​</a></h3><p>动态路由可以包含多个参数：</p><p><strong>文件结构</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>└─ packages</span></span>
<span class="line"><span>   ├─ [pkg]-[version].md</span></span>
<span class="line"><span>   └─ [pkg]-[version].paths.js</span></span></code></pre></div><p><strong>路径加载器</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  paths</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { params: { pkg: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;foo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, version: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;1.0.0&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { params: { pkg: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;foo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, version: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2.0.0&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { params: { pkg: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;bar&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, version: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;1.0.0&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { params: { pkg: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;bar&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, version: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2.0.0&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>输出</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>└─ packages</span></span>
<span class="line"><span>   ├─ foo-1.0.0.html</span></span>
<span class="line"><span>   ├─ foo-2.0.0.html</span></span>
<span class="line"><span>   ├─ bar-1.0.0.html</span></span>
<span class="line"><span>   └─ bar-2.0.0.html</span></span></code></pre></div><h3 id="dynamically-generating-paths" tabindex="-1">动态生成路径 <a class="header-anchor" href="#dynamically-generating-paths" aria-label="Permalink to &quot;动态生成路径 {#dynamically-generating-paths}&quot;">​</a></h3><p>路径加载器模块在 Node.js 中运行，并且仅在构建期间执行。可以使用本地或远程的任何数据动态生成路径数组。</p><p>从本地文件生成路径：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fs </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;fs&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  paths</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fs</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">readdirSync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;packages&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">pkg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { params: { pkg }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>从远程数据生成路径：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  async</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> paths</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> pkgs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://my-api.com/packages&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pkgs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">pkg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        params: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          pkg: pkg.name,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          version: pkg.version</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="accessing-params-in-page" tabindex="-1">访问页面中的参数 <a class="header-anchor" href="#accessing-params-in-page" aria-label="Permalink to &quot;访问页面中的参数 {#accessing-params-in-page}&quot;">​</a></h3><p>可以使用参数将附加数据传递到每个页面。Markdown 路由文件可以通过 <code>$params</code> 全局属性访问 Vue 表达式中的当前页面参数：</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> package name: {{ $params.pkg }}</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> version: {{ $params.version }}</span></span></code></pre></div><p>还可以通过 <a href="./../reference/runtime-api#usedata"><code>useData</code></a> 运行时 API 访问当前页面的参数。这在 Markdown 文件和 Vue 组件中都可用：</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { useData } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// params 是一个 Vue ref</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">params</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(params.value)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="rendering-raw-content" tabindex="-1">渲染原始内容 <a class="header-anchor" href="#rendering-raw-content" aria-label="Permalink to &quot;渲染原始内容 {#rendering-raw-content}&quot;">​</a></h3><p>传递给页面的参数将在客户端 JavaScript payload 中序列化，因此应该避免在参数中传递大量数据，例如从远程 CMS 获取的原始 Markdown 或 HTML 内容。</p><p>相反，可以使用每个路径对象上的 <code>content</code> 属性将此类内容传递到每个页面：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  async</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> paths</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> posts</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://my-cms.com/blog-posts&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> posts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">post</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        params: { id: post.id },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        content: post.content </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 原始 Markdown 或 HTML</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>然后，使用以下特殊语法将内容呈现为 Markdown 文件本身的一部分：</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- @content --&gt;</span></span></code></pre></div>`,88),t=[p];function l(h,k,d,r,c,o){return i(),a("div",null,t)}const y=s(e,[["render",l]]);export{E as __pageData,y as default};
