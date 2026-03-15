const characters = [
    {
        name: "Turgut (Resim Öğretmeni)",
        type: "Mevzi Heykeli (The Bald Artist)",
        age: 65,
        stats: [
            { label: "Bencillik", value: 100, class: "anger" },
            { label: "Kancıklık", value: 100, class: "stealth" },
            { label: "Sanat", value: 100, class: "luck" }
        ],
        desc: "Kel kafası ve elindeki resim fırçasıyla tam bir sanatçı! Yaşlı moruk, oyunun ortasında resim yapar gibi saklanır. Şerefsizliği ve bencilliğiyle nam salmış, 'gençler ölsün ben sanatımı icra edeyim' felsefesinin kel efsanesidir.",
        image: "turgut_statue_moruk_1773616223909.png",
        tagline: "Tablom bitene kadar kimse beni bulamaz.",
        traits: ["Yaşlı Moruk", "Kel Artist", "Kancık", "Mevzi Heykeli", "Resim Öğretmeni"]
    },
    {
        name: "Emrah (Yapımcı)",
        type: "Sinsi Beyefendi (The Producer)",
        age: 31,
        stats: [
            { label: "Kurnazlık", value: 100, class: "luck" },
            { label: "Senaryo", value: 100, class: "stealth" },
            { label: "Bütçe", value: 95, class: "luck" }
        ],
        desc: "Film ve dizi dünyasının kurdu! İstanbul beyefendisi maskesinin altında tam bir prodüktör sinsiliği yatar. Her maçı bir film sahnesi gibi kurgular, iki grubu birbirine kırdırıp finali tek başına yapar.",
        image: "emrah_sneaky_gentleman_1773616237085.png",
        tagline: "Bu sahnede hepiniz öleceksiniz, kestik!",
        traits: ["Laf Ebesi", "Film Yapımcısı", "İt Köpeği Kırdıran", "Ete Para Vermeyen"]
    },
    {
        name: "Özer (Sigortacı)",
        type: "Ağır Vasıta (The Insurance Turtle)",
        age: 42,
        stats: [
            { label: "Asabiyet", value: 95, class: "anger" },
            { label: "Poliçe", value: 100, class: "luck" },
            { label: "Açlık", value: 100, class: "anger" }
        ],
        desc: "İyi bir sigortacı ama feci asabi! Dünyanın en yavaş loot yapan insanı, poliçe keser gibi titiz ve hantal. Arabaya en son biner, her şeye sinirlenir. Şekeri düştükçe sigorta primlerini artırır, sadece Emrah'a naziktir.",
        image: "ozer_grumpy_turtle_1773616253102.png",
        tagline: "Ölürseniz kaskınız sigortalı mı kardeşim?",
        traits: ["Asabi Sigortacı", "Loot Kaplumbağası", "Şeker Mağduru", "Vade Farkı"]
    },
    {
        name: "Kürşat (Tarih Öğretmeni)",
        type: "Gece Oburu (The Gözlüklü Historian)",
        age: 35,
        stats: [
            { label: "Tarih", value: 100, class: "luck" },
            { label: "İnatçılık", value: 90, class: "anger" },
            { label: "Açlık", value: 100, class: "anger" }
        ],
        desc: "Gözlüklerinin arkasından tarihi bir perspektifle haritaya bakar. Geceleri durmadan 'vır vır' konuşur ve haritadaki antik yerleşkeleri anlatırken ağzından 'mırç mırç' yemek sesleri eksik olmaz. Dik kafalıdır.",
        image: "kursat_midnight_eater_1773616269116.png",
        tagline: "Bu tepe aslında Selçukluların stratejik noktasıydı.",
        traits: ["Gözlüklü Tarihçi", "Mırç Mırç", "Takım Bozan", "Gece Yiyicisi", "Tarih Öğretmeni"]
    },
    {
        name: "Emre (Tarih Öğretmeni)",
        type: "Levazım Subayı (The History Bot)",
        age: 27,
        stats: [
            { label: "Yardımseverlik", value: 100, class: "luck" },
            { label: "Arşiv", value: 80, class: "stealth" },
            { label: "Cömertlik", value: 100, class: "luck" }
        ],
        desc: "Diğer tarih öğretmenimiz! Adamda mühimmatın tarihi bile var. Her şeyi verir ama bazen öylece tozlu bir kütüphanede kalmış gibi donup kalmasıyla meşhurdur. Kendini bir arşiv botu sanıp öylece durur.",
        image: "emre_helper_bot_1773616287800.png",
        tagline: "Eski mermiler daha deliciydi, alın bunları.",
        traits: ["Yardım Meleği", "Levazım Subayı", "Tozlu Kütüphaneci", "Tarih Öğretmeni"]
    },
    {
        name: "İsmail Abi (Emekli Bankacı)",
        type: "Sakin Cellat (The Banker Grandpa)",
        age: 55,
        stats: [
            { label: "Banka Faizi", value: 100, class: "luck" },
            { label: "Çocuk Bakımı", value: 100, class: "luck" },
            { label: "Onur", value: 90, class: "luck" }
        ],
        desc: "Emekli bankacı, nur yüzlü bir dede! Torun bakarken bir yandan keskin nişancılık yapar. Orhan'ı gördüğü an bankadaki batık krediler aklına gelmiş gibi patlar. Asla arkadan vurmaz, delikanlıdır.",
        image: "ismail_abi_honorable_cellat_1773616303392.png",
        tagline: "Hesabınızda bakiye kalmadı Orhan Bey!",
        traits: ["Emekli Bankacı", "Çocuk Bakıcısı", "Sakin Güç", "Asla Arkadan Vurmaz"]
    },
    {
        name: "Orhan (Otomatçı)",
        type: "Hedef Tahtası (The Vending Machine)",
        age: 19,
        stats: [
            { label: "Otomat Arıza", value: 100, class: "anger" },
            { label: "Bozuk Para", value: 90, class: "luck" },
            { label: "İsmail Aggro", value: 100, class: "anger" }
        ],
        desc: "Otomat işiyle uğraşır ama arabayı otomat gibi sallar! İsmail Abi'nin en büyük kabusu. Her sürüşünde bir felaket, her durağında bir kavga. Taklanın ve bozuk otomata vurulur gibi yenen dayakların adresi.",
        image: "stunt_driver_1773611793829.png",
        tagline: "Otomat gibi patlıyorsun abi, kızma!",
        traits: ["Otomatçı", "İsmail Abi'nin Belası", "Taklacı", "Ehliyetsiz"]
    },
    {
        name: "Grup Klan Üyesi (Drop Delisi)",
        type: "Göklerin Efendisi (The Drop Seeker)",
        age: 22,
        stats: [
            { label: "Açgözlülük", value: 100, class: "greed" },
            { label: "Hız", value: 100, class: "luck" },
            { label: "Duman Aşkı", value: 100, class: "anger" }
        ],
        desc: "Kırmızı duman onun ibadetidir. 1881 klanının en hızlısı, drop için dünyayı yakar. 'AWM benim, 8x benim, her şey benim' diye bağırarak mermiye kafa atar.",
        image: "air_drop_chaser_1773611856345.png",
        tagline: "Drop benim ruhumun gıdasıdır.",
        traits: ["Drop Radar", "Aç Gözlü", "Hızlı Koşucu", "Duman Takipçisi"]
    },
    {
        name: "Sessiz Yancı",
        type: "Sürüngen (The Grass Snake)",
        age: 29,
        stats: [
            { label: "Sessizlik", value: 100, class: "stealth" },
            { label: "Sürünme", value: 100, class: "luck" },
            { label: "Sabır", value: 90, class: "luck" }
        ],
        desc: "İsim beklemede... Toprakla bir olmuş, sessizce sürünüyor. Çimenden ayırt edilemez, varlığı sadece ayak sesinden (o da varsa) anlaşılır.",
        image: "prone_snake_1773611874730.png",
        tagline: "Fırtına sessizliğimden korkar.",
        traits: ["Sessiz ve Derinden", "Çimen Dostu", "Yılan Modu"]
    },
    {
        name: "Takım Gurmesi",
        type: "Pusu Üstadı (The Hidden Gourmet)",
        age: 33,
        stats: [
            { label: "Açlık", value: 100, class: "anger" },
            { label: "Ziyafet", value: 100, class: "luck" },
            { label: "Stil", value: 90, class: "luck" }
        ],
        desc: "İsim beklemede... Tavuğunu yemeden maçı bitirmez. Kazanmak onun için sadece bir akşam yemeği bileti.",
        image: "chicken_dinner_winner_gourmet_1773611887767.png",
        tagline: "Winner Winner Chicken Dinner!",
        traits: ["Gurme", "Şık Giyimli", "Ziyafet Sever"]
    }
];

function init() {
    const grid = document.querySelector('.character-grid');
    
    characters.forEach((char, index) => {
        const card = document.createElement('div');
        card.className = 'char-card';
        
        let statsHTML = '';
        char.stats.forEach(stat => {
            statsHTML += `
                <div class="stat-item">
                    <div class="stat-label-row">
                        <span>${stat.label}</span>
                        <span>%${stat.value}</span>
                    </div>
                    <div class="stat-bar">
                        <div class="stat-fill ${stat.class}" style="width: ${stat.value}%"></div>
                    </div>
                </div>
            `;
        });

        card.innerHTML = `
            <div class="char-img-container">
                <img src="${char.image}" alt="${char.name}">
            </div>
            <div class="char-info">
                <span class="char-type">${char.type}</span>
                <h2 class="char-name">${char.name}</h2>
                <div class="char-stats">
                    ${statsHTML}
                </div>
                <p class="char-desc">${char.desc}</p>
            </div>
        `;
        
        card.addEventListener('click', () => openModal(char));
        grid.appendChild(card);
    });
}

const modal = document.getElementById('charModal');
const closeBtn = document.querySelector('.modal-close');

function openModal(char) {
    document.getElementById('modalImg').src = char.image;
    document.getElementById('modalName').textContent = char.name;
    document.getElementById('modalTagline').textContent = char.tagline;
    document.getElementById('modalType').textContent = char.type;
    document.getElementById('modalDesc').textContent = char.desc;
    
    const statsContainer = document.createElement('div');
    statsContainer.className = 'char-stats';
    statsContainer.style.marginTop = '1.5rem';
    
    char.stats.forEach(stat => {
        statsContainer.innerHTML += `
            <div class="stat-item">
                <div class="stat-label-row">
                    <span>${stat.label}</span>
                    <span>%${stat.value}</span>
                </div>
                <div class="stat-bar">
                    <div class="stat-fill ${stat.class}" style="width: ${stat.value}%"></div>
                </div>
            </div>
        `;
    });

    const body = document.querySelector('.modal-body');
    const existingStats = body.querySelector('.char-stats');
    if (existingStats) existingStats.remove();
    body.insertBefore(statsContainer, document.getElementById('modalDesc'));

    const traitsContainer = document.getElementById('modalTraits');
    traitsContainer.innerHTML = '';
    char.traits.forEach(trait => {
        const span = document.createElement('span');
        span.className = 'trait-chip';
        span.textContent = trait;
        traitsContainer.appendChild(span);
    });
    
    modal.style.display = 'flex';
}

closeBtn.onclick = () => modal.style.display = 'none';
window.onclick = (e) => { if(e.target == modal) modal.style.display = 'none'; }

document.addEventListener('DOMContentLoaded', init);
