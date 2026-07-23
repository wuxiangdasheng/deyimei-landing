# recruit 招商页面重排 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 在不新增任何招商文案的前提下，按用户提供的原文重排 `recruit.html`，并让三种合作方式清晰独立、桌面和手机端均可读。

**Architecture:** 保持单文件 HTML/CSS/JS 架构，只修改 `recruit.html` 的内容区和对应样式。导航、页尾、滚动 reveal、移动菜单等公共结构继续沿用现有实现；Hero、合作方式、结尾文案只使用用户提供的原文。

**Tech Stack:** HTML5、CSS3、原生 JavaScript、Google Fonts（现有 Noto Serif SC / Playfair Display / Great Vibes / Tangerine）。

---

### Task 1: 重排 recruit.html 内容与区块

**Files:**
- Modify: `/Users/sunpeng/cola/outputs/德醫美(香港)/recruit.html`

- [ ] **Step 1: 保留公共结构**

保留现有 `top-bar`、导航链接、移动菜单、页尾、滚动 reveal 和既有品牌 CSS 变量；不新增导航项、联系方式或表单按钮文案。

- [ ] **Step 2: 替换 Hero 文案**

将 Hero 内容替换为用户原文：

```html
<h1>德醫美全港招商雙模式合作</h1>
<p>德醫美團隊深耕保健市場8年，運營30家連鎖門店。2024年引進香港，開設德醫美中醫診所，從中國各地引入多個中醫醫美項目，受到消費者好評且回購率高。</p>
```

不保留原有 `聯乘德醫美`、`開創新藍海`、`Welcome to Join Us`、`登記合作信息`、旧 Hero 描述或未提供的印章文字。

- [ ] **Step 3: 建立三种合作方式内容**

按下面结构使用原文，不改写句子：

```html
<section class="cooperation-section">
  <p>門店加盟、零售據點(美容養生舖/個人皆可參與)</p>
  <article>
    <h2>加盟門店計劃</h2>
    <p>提供統一品牌形象、全套營運管理方案，由選址到日常營運全程跟進指導。</p>
  </article>
  <article>
    <h2>實體舖合作</h2>
    <p>供應三款暢銷養生皇牌產品(祛濕健脾、護肝、女性養巢抗衰)</p>
    <p>同步引入中醫醫美高端技術，項目見效快、無副作用，幫店舖拓客升單，利潤高、回購穩定;</p>
  </article>
  <article>
    <h2>個人副業</h2>
    <p>無需實體鋪面，透過IG、FB、WhatsApp、線上線下分銷，總部免費提供宣傳素材及產品培訓，新手輕鬆起步。</p>
  </article>
</section>
```

桌面端使用三列排版，移动端变成单列；三张卡片共享现有紫色边线、留白和细线风格。

- [ ] **Step 4: 添加结尾原文**

页面结尾只使用：

```html
<p>誠邀全港美容養生店舖及創業人士合作，共拓養生市場商機。</p>
```

不添加电话、地址、WhatsApp、表单、按钮或其他联系信息。

### Task 2: 响应式与视觉验证

**Files:**
- Modify: `/Users/sunpeng/cola/outputs/德醫美(香港)/recruit.html`

- [ ] **Step 1: 检查可见文字来源**

运行：

```bash
rg -n "聯乘|新藍海|Welcome|登記合作|核心優勢|聯絡我們|電話|WhatsApp|地址" '/Users/sunpeng/cola/outputs/德醫美(香港)/recruit.html'
```

预期：`聯乘`、`新藍海`、`Welcome`、`登記合作`、`核心優勢`、`聯絡我們`、`電話`、`地址` 等旧的、未由本次文案提供的招商内容不再出现在页面；`WhatsApp` 仅允许作为用户原文中“透過IG、FB、WhatsApp……”的一部分出现。

- [ ] **Step 2: 检查 HTML 与 CSS 基本完整性**

运行：

```bash
cd '/Users/sunpeng/cola/outputs/德醫美(香港)' && git diff --check
```

预期：无输出、退出码为 0。

- [ ] **Step 3: 检查三种合作方式和移动端规则**

运行：

```bash
rg -n "加盟門店計劃|實體舖合作|個人副業|@media|max-width|cooperation" '/Users/sunpeng/cola/outputs/德醫美(香港)/recruit.html'
```

预期：三种标题各出现一次，存在桌面三列和手机单列规则，未出现文字溢出相关异常。

### Task 3: 保存版本

**Files:**
- Modify: `/Users/sunpeng/cola/outputs/德醫美(香港)/recruit.html`

- [ ] **Step 1: 提交 recruit 页面重构**

```bash
cd '/Users/sunpeng/cola/outputs/德醫美(香港)' && git add recruit.html && git commit -m "refactor: 按原文重排招商合作页面"
```

- [ ] **Step 2: 推送 GitHub 并确认工作区**

```bash
cd '/Users/sunpeng/cola/outputs/德醫美(香港)' && git push && git status --short
```

预期：推送成功，`git status --short` 无输出。
