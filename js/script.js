let poems = [
    {
        poemText:`
    <p>
        В Новый год желаю вам               <br>
        Счастья, всем вашим мечтам —        <br>
        Исполнения, желания                 <br>
        Чтоб сбывались без страданий!       <br>
    </p>
    <p>
        
        Пусть здоровье не подводит,         <br>
        Беды — просто не приходят,          <br>
        А удача и порядок                   <br>
        Принесут в дома достаток!           <br>
    <p>`,
    bg: `url(img/img1.jpg)`
    },
    {
    poemText:`
    <p>
        Идёт спешит волшебный праздник      <br>
        Он много радости несёт.             <br>
        Пусть будет каждый счастлив         <br>
        И радость в гости вдруг придёт.     <br>
    </p>
    <p>
        Я в Новый Год желаю чуда.           <br>
        Чтоб исполнялись все мечты.         <br>
        И новое, хорошее пришло из ниоткуда.<br>
        И обновило жизненные белые листы.   <br>
    <p>`,
    bg: `url(img/img2.jpg)`    
        
    },
    {   
    poemText:` 
        <p>
        В Новый год по расписанью           <br>
        Счастье пусть войдёт в дома,        <br>
        Все исполнятся желанья,             <br>
        Беды заметёт зима.                  <br>
        </p>
        <p>
        Дед Мороз под руку с внучкой        <br>
        Всем подарки принесёт,              <br>
        И он будет самым лучшим             <br>
        Этот добрый Новый год!              <br>
        <p>`,
        bg: `url(img/img3.jpg)`    
    }
]
let wrapper = document.querySelector('.wrapper');
let btn = document.querySelector('#btn');
let poem = document.querySelector('.poem');
// element.innerHTML - Получить/Изменить код элемента 
btn.addEventListener('click',()=>{    //function  
//Math.random случайное число от 0 до 1, не включая 1
     let randomIndex;
     randomIndex=Math.floor((Math.random()*poems.length));//Math.floor округление в меньшую в меньшую сторону
    poem.innerHTML = '';
    poem.innerHTML = poems[randomIndex].poemText;
    wrapper.style.backgroundImage = poems[randomIndex].bg;
})


















