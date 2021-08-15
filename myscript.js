
function changeArticle(articleNumber1)
{
    var article=`<h3 class= > ${blogs[articleNumber].title}</h3>
    <p>${blogs[articleNumber].article}</p>
    <h4 class="author">${blogs[articleNumber].author}</h4>
    <img src="${blogs[articleNumber].image}"
        alt="" height="80" width="80"></img>`

    articleDiv.innerHTML =article;
}

blogs=[
    {
        title:"Wearable devices could use your breathing patterns like a password",
        article: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eveniet, molestiae illo corporis tempora
        beatae modi harum. Libero eum nisi aliquid eos molestias non numquam harum officia amet? Corrupti,
        exercitationem.
        Voluptatum sed laborum corporis eaque incidunt nemo culpa quis vitae sit qui, deserunt minus quam
        aperiam fugiat libero odio quas sunt. Earum sunt amet obcaecati blanditiis voluptatibus, quaerat quasi
        culpa.
        Fuga dolore provident natus? Molestiae, ea? Saepe quis ipsa quae voluptatem, dignissimos animi, expedita
        laboriosam, veritatis velit sit provident atque praesentium recusandae odio dolores odit repudiandae
        facilis hic ducimus? Voluptas.
        Eligendi deserunt reiciendis, quia dolores culpa perferendis ullam tenetur harum maiores cumque,
        assumenda error quis dolor rem dolore voluptas suscipit, nulla eveniet minima asperiores ea dolorem.
        Quis similique obcaecati deleniti!
        Odit nulla quod, assumenda quibusdam, amet laudantium iure rerum, neque nam itaque ab blanditiis tempore
        error sint tempora! Eum est expedita natus quod ipsa excepturi recusandae aperiam voluptas! Ipsum,
        omnis!
        Veniam est voluptates libero officiis, qui inventore velit quia ipsa quasi repellat ea magnam dolorem
        alias laudantium eveniet ratione minima cumque dicta pariatur quod molestias ex reprehenderit a iure?
        Debitis?
        Inventore cumque atque reprehenderit, similique rerum odio nobis fugit ratione dolore placeat aut fugiat
        magnam soluta dignissimos necessitatibus excepturi quas quidem nostrum facilis minus! Dolor laudantium
        numquam aspernatur voluptatem accusantium!
        Distinctio alias inventore sint veniam voluptate magnam! Molestias doloremque, beatae sequi odio id quia
        autem sed numquam fuga illo voluptatibus vel quidem dolorum voluptas architecto, error mollitia quisquam
        repudiandae ullam!
        Omnis, voluptate nulla. Consectetur eum totam cumque commodi suscipit consequatur vero reiciendis
        aperiam placeat necessitatibus labore vel, voluptates hic! Maiores cumque, molestiae laudantium
        temporibus autem asperiores aspernatur ipsum reiciendis distinctio.
        Id a quasi natus fugiat dolor doloremque sunt mollitia, explicabo, impedit unde voluptates cum maiores
        inventore quis qui praesentium molestiae laboriosam nostrum quod vero iusto deleniti provident quam
        aliquam! Molestias!</p>`,
        author: "Chris Stokel-Walker",
        image:"https://images.newscientist.com/wp-content/uploads/2021/07/30153952/gettyimages-1252358868_web.jpg?width=800"
    }
    ,
    {
    title:"Demo Article 2",
        article: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eveniet, molestiae illo corporis tempora
        beatae modi harum. Libero eum nisi aliquid eos molestias non numquam harum officia amet? Corrupti,
        exercitationem.
        Voluptatum sed laborum corporis eaque incidunt nemo culpa quis vitae sit qui, deserunt minus quam
        aperiam fugiat libero odio quas sunt. Earum sunt amet obcaecati blanditiis voluptatibus, quaerat quasi
        culpa.
        Fuga dolore provident natus? Molestiae, ea? Saepe quis ipsa quae voluptatem, dignissimos animi, expedita
        laboriosam, veritatis velit sit provident atque praesentium recusandae odio dolores odit repudiandae
        facilis hic ducimus? Voluptas.
        Eligendi deserunt reiciendis, quia dolores culpa perferendis ullam tenetur harum maiores cumque,
        assumenda error quis dolor rem dolore voluptas suscipit, nulla eveniet minima asperiores ea dolorem.
        Quis similique obcaecati deleniti!
        Odit nulla quod, assumenda quibusdam, amet laudantium iure rerum, neque nam itaque ab blanditiis tempore
        error sint tempora! Eum est expedita natus quod ipsa excepturi recusandae aperiam voluptas! Ipsum,
        omnis!
        Veniam est voluptates libero officiis, qui inventore velit quia ipsa quasi repellat ea magnam dolorem
        alias laudantium eveniet ratione minima cumque dicta pariatur quod molestias ex reprehenderit a iure?
        Debitis?`
        ,
        author: "Someone Random",
        image:"https://www.maybelline.com/~/media/mny/us/face-makeup/modules/pathing-switcher/face-category-pathing-switcher.jpg"
    },
    {
            title:"Can a robot ever be conscious and how would we know if it were?",
            article: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eveniet, molestiae illo corporis tempora
            beatae modi harum. Libero eum nisi aliquid eos molestias non numquam harum officia amet? Corrupti,
            exercitationem.
            Voluptatum sed laborum corporis eaque incidunt nemo culpa quis vitae sit qui, deserunt minus quam
            aperiam fugiat libero odio quas sunt. Earum sunt amet obcaecati blanditiis voluptatibus, quaerat quasi
            culpa.
            Fuga dolore provident natus? Molestiae, ea? Saepe quis ipsa quae voluptatem, dignissimos animi, expedita
            laboriosam, veritatis velit sit provident atque praesentium recusandae odio dolores odit repudiandae
            facilis hic ducimus? Voluptas.
            Eligendi deserunt reiciendis, quia dolores culpa perferendis ullam tenetur harum maiores cumque,
            assumenda error quis dolor rem dolore voluptas suscipit, nulla eveniet minima asperiores ea dolorem.
            Quis similique obcaecati deleniti!
            Odit nulla quod, assumenda quibusdam, amet laudantium iure rerum, neque nam itaque ab blanditiis tempore
            error sint tempora! Eum est expedita natus quod ipsa excepturi recusandae aperiam voluptas! Ipsum,
            omnis!
            Veniam est voluptates libero officiis, qui inventore velit quia ipsa quasi repellat ea magnam dolorem
            alias laudantium eveniet ratione minima cumque dicta pariatur quod molestias ex reprehenderit a iure?
            Debitis?`
            ,
            author: "Someone Random",
            image:"https://www.maybelline.com/~/media/mny/us/face-makeup/modules/pathing-switcher/face-category-pathing-switcher.jpg"
        }
    ]



var articleDiv = document.querySelector(".articles");
articleNumber=0;
changeArticle(articleNumber);

nextBtn=document.querySelector(".nextBtn");
prevBtn=document.querySelector(".prevBtn");

nextBtn.addEventListener("click",function()
{
    articleNumber++;
    if(articleNumber==blogs.length)
        articleNumber=0;
    changeArticle(articleNumber);
});

prevBtn.addEventListener("click",function()
{
    articleNumber--;
    if(articleNumber==-1)
        articleNumber=blogs.length-1;
    changeArticle(articleNumber);
})

