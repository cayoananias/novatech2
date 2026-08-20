import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Recycle, Heart, Brain, Sparkles, Leaf, Accessibility, Menu, X, ArrowRight, Mail, Target, Eye, Gem, MapPin, Send, CheckCircle2, Phone } from 'lucide-react';
import logo from '../images/logo.png';
import './styles.css';

const sections = ['Início','Sobre','Missão','Impacto','Como funciona'];

function App(){
  const [active,setActive]=useState('Início');
  const [open,setOpen]=useState(false);
  const [page,setPage]=useState('home');
  const go=(id)=>{setActive(id);setPage('home');setOpen(false);window.setTimeout(()=>document.getElementById(id.toLowerCase().replaceAll(' ','-'))?.scrollIntoView({behavior:'smooth'}),0);};
  const contact=()=>{setPage('contact');setOpen(false);window.scrollTo({top:0,behavior:'smooth'});};
  return <div className="app">
    <header className="header"><button className="logo" onClick={()=>go('Início')}><span className="logo-mark"><img className="logo-image" src={logo} alt="" /></span><span>Nova<span>Tech</span></span></button>
      <nav>{sections.map(s=><button className={page==='home'&&active===s?'active':''} onClick={()=>go(s)} key={s}>{s}</button>)}<button className={page==='contact'?'active':''} onClick={contact}>Contato</button></nav>
      <button className="menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
    </header>
    {open&&<div className="mobile-nav">{sections.map(s=><button onClick={()=>go(s)} key={s}>{s}</button>)}<button onClick={contact}>Contato <ArrowRight size={16}/></button></div>}

    {page==='contact'?<ContactPage onBack={()=>go('Início')}/>:<main>
      <section id="início" className="hero"><div className="hero-glow"/><div className="hero-content">
        <span className="eyebrow"><Recycle size={15}/> tecnologia circular</span>
        <h1>Do descarte para<br/><em>o brincar.</em></h1>
        <p>A NovaTech transforma resíduos eletrônicos em brinquedos sustentáveis e sensoriais, criando experiências de inclusão, aprendizado e diversão para todas as crianças.</p>
        <div className="actions"><button className="primary" onClick={()=>go('Sobre')}>Conheça a NovaTech <ArrowRight size={18}/></button><button className="secondary" onClick={()=>go('Impacto')}>Nosso impacto</button></div>
        <div className="hero-stats"><div><strong>♻</strong><span>Economia<br/>circular</span></div><div><strong>♥</strong><span>Brincar<br/>inclusivo</span></div><div><strong>∞</strong><span>Futuro<br/>consciente</span></div></div>
      </div><div className="hero-art"><div className="orb orb1"/><div className="orb orb2"/><div className="toy-card"><div className="toy-icon"><img className="toy-logo-image" src={logo} alt="Logo NovaTech Toy" /></div><span>brinquedo sensorial</span><strong>feito com propósito</strong></div></div></section>

      <section id="sobre" className="section intro"><div className="section-title"><span>01 — SOBRE NÓS</span><h2>Repensar o que<br/>parece <em>descartável.</em></h2></div><div className="intro-copy"><p>A NovaTech nasceu de uma ideia simples: <b>o lixo eletrônico pode ter uma segunda vida.</b> Em vez de terminar em um aterro, componentes e materiais ganham novas formas para estimular a criatividade, a autonomia e a conexão.</p><p>Unimos tecnologia, sustentabilidade e design inclusivo para criar brinquedos que fazem sentido para diferentes formas de brincar.</p></div></section>

      <section id="missão" className="section cards"><div className="section-title centered"><span>02 — NOSSO PROPÓSITO</span><h2>Uma nova forma de<br/><em>construir o futuro.</em></h2></div><div className="card-grid"><InfoCard icon={<Target/>} title="Missão" text="Transformar resíduos eletrônicos em ferramentas de inclusão, aprendizado e diversão, criando brinquedos sustentáveis e sensoriais que conectam todas as crianças — neurotípicas e neurodivergentes — através do brincar universal."/><InfoCard icon={<Eye/>} title="Visão" text="Ser a marca referência em brinquedos inclusivos e economia circular na América Latina, demonstrando que a tecnologia descartada pode se transformar em um futuro mais acolhedor, consciente e acessível para a infância."/><InfoCard icon={<Gem/>} title="Valores" text="Inclusão pelo brincar, sustentabilidade, criatividade, acessibilidade, responsabilidade social e inovação com propósito. Cada decisão deve gerar impacto positivo para pessoas e planeta."/></div></section>

      <section id="impacto" className="section impact"><div className="impact-head"><div><span>03 — IMPACTO</span><h2>Pequenas peças.<br/><em>Grandes possibilidades.</em></h2></div><p>Quando tecnologia e criatividade se encontram, materiais que seriam descartados podem virar ferramentas de desenvolvimento e novas histórias.</p></div><div className="impact-grid"><Impact icon={<Leaf/>} num="01" title="Planeta" text="Reduzimos o descarte e damos novo ciclo a componentes eletrônicos."/><Impact icon={<Accessibility/>} num="02" title="Inclusão" text="Criamos experiências pensadas para diferentes necessidades e formas de interação."/><Impact icon={<Heart/>} num="03" title="Infância" text="Estimulamos aprendizado, autonomia, imaginação e diversão por meio do brincar."/></div></section>

      <section id="como-funciona" className="section process"><div className="section-title centered"><span>04 — COMO FUNCIONA</span><h2>Do eletrônico usado ao<br/><em>brinquedo com propósito.</em></h2></div><div className="steps"><Step n="01" icon={<Recycle/>} title="Recebemos" text="Materiais e componentes eletrônicos que ainda podem ganhar uma nova função."/><Step n="02" icon={<Sparkles/>} title="Transformamos" text="Selecionamos, higienizamos e projetamos novas possibilidades de uso."/><Step n="03" icon={<Brain/>} title="Criamos" text="Desenvolvemos brinquedos sensoriais e inclusivos com design consciente."/><Step n="04" icon={<Heart/>} title="Conectamos" text="Levamos experiências de brincar que unem crianças, criatividade e futuro."/></div></section>

      <section className="contact"><div><span>05 — FALE COM A NOVATECH</span><h2>Vamos transformar<br/><em>o futuro juntos?</em></h2><p>Quer conhecer o projeto, apoiar nossa iniciativa ou conversar sobre uma parceria?</p></div><button className="contact-cta" onClick={contact}>Falar com a equipe <ArrowRight size={18}/></button></section>
    </main>}
    <footer><img className="footer-logo" src={logo} alt="Logo NovaTech Toy"/><div className="footer-copy"><p>Tecnologia descartada. Futuro reinventado.</p><small>Projeto realizado por alunos da E.E. João Ramalho.</small><small>© 2026 NovaTech. Economia circular e inclusão pelo brincar.</small></div></footer>
  </div>
}
function InfoCard({icon,title,text}){return <article className="info-card"><div className="card-icon">{icon}</div><h3>{title}</h3><p>{text}</p></article>}
function Impact({icon,num,title,text}){return <article className="impact-card"><div className="impact-icon">{icon}</div><span>{num}</span><h3>{title}</h3><p>{text}</p></article>}
function Step({n,icon,title,text}){return <article className="step"><div className="step-top"><span>{n}</span><div>{icon}</div></div><h3>{title}</h3><p>{text}</p></article>}
function ContactPage({onBack}){
  const [sent,setSent]=useState(false);
  const submit=(event)=>{event.preventDefault();setSent(true)};
  return <main className="contact-page"><div className="contact-intro"><button className="back-link" onClick={onBack}><ArrowRight size={17}/> Voltar para início</button><span className="eyebrow"><Mail size={15}/> contato</span><h1>Vamos criar<br/><em>possibilidades?</em></h1><p>Tem uma ideia, parceria ou quer levar o brincar inclusivo para mais pessoas? Conte para a gente.</p><div className="details"><a href="mailto:contato@novatech.com.br"><Mail/> contato@novatech.com.br</a><a href="tel:+551140000000"><Phone/> (11) 4000-0000</a><span><MapPin/> São Paulo, SP</span></div></div><form className="contact-form" onSubmit={submit}>{sent?<div className="success"><CheckCircle2 size={44}/><h2>Mensagem recebida.</h2><p>Obrigado por escrever. Nossa equipe retorna em breve.</p><button type="button" className="secondary" onClick={()=>setSent(false)}>Enviar outra mensagem</button></div>:<><div className="form-head"><span>FALE COM A EQUIPE</span><h2>Seu próximo passo começa aqui.</h2></div><label>Seu nome<input required name="name" placeholder="Como podemos chamar você?" /></label><label>E-mail<input required type="email" name="email" placeholder="voce@exemplo.com" /></label><label>Assunto<select name="subject" defaultValue=""><option value="" disabled>Selecione um assunto</option><option>Parcerias</option><option>Projeto e impacto</option><option>Doação de materiais</option><option>Imprensa</option></select></label><label>Mensagem<textarea required name="message" rows="4" placeholder="Escreva sua mensagem..."></textarea></label><button className="primary submit" type="submit">Enviar mensagem <Send size={17}/></button></>}</form></main>
}
createRoot(document.getElementById('root')).render(<App/>);
