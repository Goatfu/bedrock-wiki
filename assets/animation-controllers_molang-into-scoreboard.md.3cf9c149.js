import{_ as p,c as r,a as t,w as o,b as n,d as s,e,r as c,o as l}from"./404.md.ce3b5fb6.js";const T='{"title":"MoLang into Scoreboard","description":"","frontmatter":{"title":"MoLang into Scoreboard","mention":["SirLich","MedicalJewel105","shanewolf38"]},"headers":[],"relativePath":"animation-controllers/molang-into-scoreboard.md"}',u={},i=n("p",null,[s("The following provides a method to read any MoLang (variable, query, etc.) into a score instantly. Ensure that the animation name called in the controllers "),n("code",null,"convert"),s(" state matches the name of the animation (animation.namespace.molang_to_score) as defined in the entity.")],-1),k=n("p",null,[n("strong",null,"NOTE:"),s(" These two commands must be run in the world as part of the setup: "),n("code",null,"/scoreboard objectives add MoLang dummy"),n("code",null,'/scoreboard players set "#10" MoLang 10')],-1),q=s("BP/animation_controllers/molang_to_score.animation_controllers.json"),b=e(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;controller.animation.namespace.molang_to_score&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;initial_state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;idle&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;states&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;idle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">{</span> <span class="token property">&quot;convert&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;condition to start conversion&gt;&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;on_exit&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;/scoreboard players set @s MoLang 0&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/scoreboard players set \\&quot;#var\\&quot; MoLang 0&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;v.convert = &lt;variable to convert&gt;;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;v.digit = 1000000000;&quot;</span> <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;convert&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;animations&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;molang_to_score&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;molang_to_score&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;molang_to_score&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;molang_to_score&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;molang_to_score&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;molang_to_score&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;molang_to_score&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;molang_to_score&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;molang_to_score&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;molang_to_score&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;molang_to_score&quot;</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">{</span> <span class="token property">&quot;idle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div>`,1),d=s("BP/animations/molang_to_score.animation.json"),m=e(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;animation.namespace.molang_to_score&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;animation_length&quot;</span><span class="token operator">:</span> <span class="token number">10.0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;anim_time_update&quot;</span><span class="token operator">:</span> <span class="token string">&quot;t.digit = Math.mod(Math.floor(v.convert / v.digit), 10) + 0.1; v.digit = v.digit / 10; return t.digit;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timeline&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;0.0&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;/scoreboard players operation @s MoLang *= \\&quot;#10\\&quot; MoLang&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/scoreboard players operation @s MoLang += \\&quot;#var\\&quot; MoLang&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/scoreboard players set \\&quot;#var\\&quot; MoLang 0&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;1.0&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;/scoreboard players set \\&quot;#var\\&quot; MoLang 1&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;2.0&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;/scoreboard players set \\&quot;#var\\&quot; MoLang 2&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;3.0&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;/scoreboard players set \\&quot;#var\\&quot; MoLang 3&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;4.0&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;/scoreboard players set \\&quot;#var\\&quot; MoLang 4&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;5.0&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;/scoreboard players set \\&quot;#var\\&quot; MoLang 5&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;6.0&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;/scoreboard players set \\&quot;#var\\&quot; MoLang 6&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;7.0&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;/scoreboard players set \\&quot;#var\\&quot; MoLang 7&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;8.0&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;/scoreboard players set \\&quot;#var\\&quot; MoLang 8&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;9.0&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;/scoreboard players set \\&quot;#var\\&quot; MoLang 9&quot;</span> <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p><strong>Explanation:</strong> When the conversion begins, the controller resets the player&#39;s MoLang score and <code>#var</code>&#39;s (fakeplayer) MoLang score. The conversion variable <code>v.convert</code> is initialized and the digit variable <code>v.digit</code> is set to grab the 10th digit (10^10). The first animation then runs, setting the animation time equal to the 10th digit and setting the digit variable to grab the next digit (digit 9, 10^9). Because all timeline indices are run up until the time set, the &quot;0.0&quot; entry of the timeline will always run. This multiplies the player&#39;s MoLang score by 10 to set the correct digit and then adds on the last digit grabbed (for the first run this will always be 0, as <code>#var</code> was reset by the controller). The process then repeats 10 more times to grab all 10 digits of the conversion variable. Recall that each animation grabs the digit set by the previous animation, which is why the animation is run 11 times.</p><p>To perform a test of the conversion in-game, set <code>&lt;condition to start conversion&gt;</code> to <code>q.is_using_item</code> and <code>&lt;variable to convert&gt;</code> to <code>Math.random_integer(0, 9999)</code>. Grab yourself an apple, start eating and watch the numbers roll.</p>`,3);function g(_,h,v,y,M,L){const a=c("CodeHeader");return l(),r("div",null,[i,k,t(a,null,{default:o(()=>[q]),_:1}),b,t(a,null,{default:o(()=>[d]),_:1}),m])}var w=p(u,[["render",g]]);export{T as __pageData,w as default};