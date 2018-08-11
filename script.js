let contacts = [
    {
        name: "Fatima Khan",
        image: "",
        lastMsg: "Hey!",
        lastMsgStatus: "sent",
        status: "Using Whatsapp",
        email: "fatime@gmail.com",
        phone: "14131051"
},
{
    name: "Fatima Khan",
    image: "",
    lastMsg: "Hey!",
    lastMsgStatus: "sent",
    status: "Using Whatsapp",
    email: "fatime@gmail.com",
    phone: "14131051"
},
{
    name: "Fatima Khan",
    image: "",
    lastMsg: "Hey!",
    lastMsgStatus: "sent",
    status: "Using Whatsapp",
    email: "fatime@gmail.com",
    phone: "14131051"
}
];
function initialize() {
    let cc = document.querySelector("#contact-list");
    for (let i=0; i<contacts.length ; i++) {
        cc.innerHTML += `
    <section class="container">
            <div class="person-img"></div>
            <div class= "all">
            <div class="info">
            <h4 class="name">Fatima Khan</h4>
        <div class="mxg-container">
            <i class="fas fa-check"></i>
            <p class="mxg">Hellow how r u? reply</p>
            </div>
        </div>
            <p class="time">Yesterday</p>
    </div>
    </section>
        `
    }
}