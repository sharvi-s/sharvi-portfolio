// Cursor
const cur=document.getElementById('cur');
document.addEventListener('mousemove',e=>{cur.style.left=e.clientX+'px';cur.style.top=e.clientY+'px';});
document.querySelectorAll('a,button,.stat-box,.exp-card,.proj-card,.sk,.soc,.ni').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cur.style.width='28px';cur.style.height='28px';cur.style.opacity='.72';});
  el.addEventListener('mouseleave',()=>{cur.style.width='16px';cur.style.height='16px';cur.style.opacity='1';});
});

document.querySelectorAll('.exp-card').forEach(el=>{
  el.addEventListener('mousemove',e=>{
    const r=el.getBoundingClientRect();
    el.style.setProperty('--mx',`${e.clientX-r.left}px`);
    el.style.setProperty('--my',`${e.clientY-r.top}px`);
  });
});

// Typed
const ph=['AI/ML Builder','Data Engineer','Software Engineer','Software Developer','Product Management'];
let pi=0,ci=0,del=false;
const tel=document.getElementById('ttext');
function ty(){const w=ph[pi];if(!del){tel.textContent=w.slice(0,++ci);if(ci===w.length){del=true;setTimeout(ty,1800);return;}}else{tel.textContent=w.slice(0,--ci);if(ci===0){del=false;pi=(pi+1)%ph.length;}}setTimeout(ty,del?45:90);}
setTimeout(ty,1200);

// Scroll reveal (generic)
const io=new IntersectionObserver(entries=>entries.forEach((e,i)=>{if(e.isIntersecting)setTimeout(()=>e.target.classList.add('vis'),i*70);}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Experience slide from left/right
const expIO=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('exp-vis');}),{threshold:.15});
document.querySelectorAll('.exp-item').forEach(el=>expIO.observe(el));

// Projects zoom on scroll
const pIO=new IntersectionObserver(entries=>entries.forEach((e,i)=>{if(e.isIntersecting)setTimeout(()=>e.target.classList.add('pvis'),i*120);}),{threshold:.1});
document.querySelectorAll('.proj-card').forEach(el=>pIO.observe(el));

// Skill chips zoom on scroll
const skIO=new IntersectionObserver(entries=>entries.forEach((e,i)=>{if(e.isIntersecting)setTimeout(()=>e.target.classList.add('svis'),i*60);}),{threshold:.05});
document.querySelectorAll('.sk').forEach(el=>skIO.observe(el));



// 3D tilt
document.querySelectorAll('.proj-card').forEach(c=>{
  c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`perspective(850px) translate(${x*12}px,${y*12}px) rotateX(${-y*5}deg) rotateY(${x*5}deg) scale(1.025)`;});
  c.addEventListener('mouseleave',()=>c.style.transform='');
});

document.querySelectorAll('.exp-card').forEach(c=>{
  c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`perspective(900px) rotateX(${-y*2.5}deg) rotateY(${x*2.5}deg) translateY(-3px)`;});
  c.addEventListener('mouseleave',()=>c.style.transform='');
});

// Mail
function sendMail(){
  const n=document.getElementById('fn').value.trim(),e=document.getElementById('fe').value.trim(),m=document.getElementById('fm').value.trim();
  if(!n||!e||!m){alert('Please fill in name, email and message.');return;}
  document.getElementById('envelope').classList.add('sent');
  setTimeout(()=>document.getElementById('thanks').classList.add('show'),500);
  const s=document.getElementById('fs').value||'Portfolio Contact';
  window.location.href='mailto:sharvisp2@gmail.com?subject='+encodeURIComponent(s)+'&body='+encodeURIComponent('From: '+n+' <'+e+'>\n\n'+m);
}
