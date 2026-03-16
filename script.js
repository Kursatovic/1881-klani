const characters = [
    {
        name: "Turgut (Resim Öğretmeni)",
        type: "Mevzi Heykeli (The Bald Artist)",
        age: 65,
        stats: [
            { label: "Sona Kalma Arzusu", value: 100, class: "anger" },
            { label: "Bencillik", value: 100, class: "stealth" },
            { label: "Hareketsizlik", value: 95, class: "luck" }
        ],
        desc: "Kel kafası ve elindeki görünmez resim fırçasıyla savaş alanının en istikrarlı 'heykeli'. Çatışma çıktığında Turgut asla savaşmaz, o sadece hayatta kalan son kişi olmayı bekler. Herkes kurşun atarken o mevzide adeta bir Rönesans tablosu gibi donar kalır. 'Gençler önden ölsün, en son ben kalmalıyım' felsefesinin en ulu temsilcisidir. Silahından çok saklanma yeteneğine güvenir.",
        image: "turgut_statue_moruk_1773616223909.png",
        tagline: "Tablom bitene kadar kimse beni bulamaz, gidin siz ölün.",
        traits: ["Yaşlı Moruk", "Kel Artist", "Hep Sona Kalır", "Mevzi Heykeli", "Sabır Taşı"]
    },
    {
        name: "Emrah (Yapımcı)",
        type: "Sinsi Beyefendi (The Sleeping Producer)",
        age: 31,
        stats: [
            { label: "Uykuya Dalma", value: 100, class: "luck" },
            { label: "Kurnazlık", value: 90, class: "stealth" },
            { label: "İnsanları Birbirine Kırdırma", value: 95, class: "anger" }
        ],
        desc: "Film ve dizi dünyasının kurdu! İstanbul beyefendisi maskesinin altında tam bir prodüktör sinsiliği yatar. Her maçı bir film sahnesi gibi kurgular, iki grubu birbirine kırdırır. Ancak en büyük zaafı uykusudur; tam pusu atılacakken, en kritik anlarda mışıl mışıl uyuyakaldığı efsanelerde yazılıdır. Rakipleri birbirine kırdırdıktan sonra horultusu Erangel semalarında yankılanır.",
        image: "emrah_sneaky_gentleman_1773616237085.png",
        tagline: "Bu sahnede hepiniz öleceksiniz... Ben şurada biraz kestireyim zzz...",
        traits: ["Laf Ebesi", "Birden Uyuyakalan", "İt Köpeği Kırdıran", "Narkoleptik Beyefendi"]
    },
    {
        name: "Özer (Sigortacı)",
        type: "Ağır Vasıta (The Slowest Tortoise)",
        age: 42,
        stats: [
            { label: "Yavaşlık", value: 100, class: "luck" },
            { label: "Asabiyet", value: 95, class: "anger" },
            { label: "Geride Kalma", value: 100, class: "stealth" }
        ],
        desc: "Dünyanın en yavaş loot yapan, en ağır yürüyen insanı. Grubun hep en arkasında, kilometrelerce gerisinde kalır. Arabaya binilmesi gerektiğinde Özer daha binadan çıkmamıştır bile. Bu inanılmaz yavaşlığı yüzünden asabiyeti zirvelerdedir; şekeri düştükçe sağa sola sinirlenip söylenir ama Emrah'a gelince birden dünyanın en kibar adamına dönüşür. Arkadan yürüyen bir sigorta poliçesi gibidir.",
        image: "ozer_grumpy_turtle_1773616253102.png",
        tagline: "Ben gelene kadar ölmezseniz poliçenizi keserim kardeşim!",
        traits: ["Loot Kaplumbağası", "Hep En Arkada", "Şeker Hastası", "Sade Emrah'a Nazik"]
    },
    {
        name: "Kürşat (Tarih Öğretmeni)",
        type: "Piyade Sürat (The Speedy Historian)",
        age: 35,
        stats: [
            { label: "Kontrolsüz Hız", value: 100, class: "luck" },
            { label: "Önden Gitme", value: 100, class: "anger" },
            { label: "Mırç Mırç Yemek", value: 90, class: "luck" }
        ],
        desc: "Gözlüklerinin kalın camları ardından düşmanı herkesten önce görür ve düşünmeden üzerine koşar! Kürşat o kadar hızlı ve hep öndedir ki, takım daha silah bulamadan o 5 kişiye birden tek başına kafa atmış olur. Bir yandan kulaklıkta 'vır vır' tarihi analizler yapar, diğer yandan ağzından o iğrenç 'mırç mırç' yemek sesleri gelir. Aceleci ve dik kafalı yapısıyla ölüme adeta koşarak giden bir mermidir.",
        image: "kursat_midnight_eater_1773616269116.png",
        tagline: "Tarihte de böyle önden atılırdık! Çift kaşarlı dürümümü kim yedi?!",
        traits: ["Önden Koşan Adam", "Mırç Mırç Sesler", "Aşırı Hızlı", "Gözlüklü Lider"]
    },
    {
        name: "Emre (Tarih Öğretmeni)",
        type: "Levazım Subayı (The Zen Master)",
        age: 27,
        stats: [
            { label: "Sakinlik", value: 100, class: "stealth" },
            { label: "Yardımseverlik", value: 95, class: "luck" },
            { label: "Tepkisizlik", value: 90, class: "luck" }
        ],
        desc: "Takımın diğer tarihçisi. Etrafta füzeler patlar, mermiler havada uçuşur, red zone tam kafalarına düşer; Emre'nin yüzünde en ufak bir mimik oynamaz. Sahip olduğu o ürkütücü derecedeki 'aşırı sakinlik' herkesin psikolojisini bozar. Çantasındaki her şeyi tereddütsüz size verir. O donup kalmış bir Zen tapınağı gibidir; sadece tarihi değil, mermileri de sükunetle göğüsler.",
        image: "emre_helper_bot_1773616287800.png",
        tagline: "Vurulduk mu? Olabilir. Al şu bandajı, sakin ol.",
        traits: ["Aşırı Sakin", "Buzdolabı", "Her Şeyi Veren", "Tepkisiz"]
    },
    {
        name: "İsmail Abi (Emekli Bankacı)",
        type: "Sakin Cellat (The Banker Grandpa)",
        age: 55,
        stats: [
            { label: "Orhan Neffreti", value: 100, class: "anger" },
            { label: "Dürüstlük", value: 100, class: "luck" },
            { label: "Çocuk Bakıcılığı", value: 85, class: "stealth" }
        ],
        desc: "Emekli bankacı, nur yüzlü bir dede! Gerçek hayatta torun bakarken sanalda mükemmel bir nişancıya dönüşür. Ancak İsmail Abi'nin o tatlı sakinliği, sadece Orhan ekranda belirene kadardır. Orhan'ın yaptığı saçmalıkları ve arabayı kötü kullanışını gördükçe adeta içinden bir şeytan çıkar. Kredisi ödenmemiş borçluya bakar gibi Orhan'a tiksinerek bakar ama asla arkadan vurmaz.",
        image: "ismail_abi_honorable_cellat_1773616303392.png",
        tagline: "Orhan'ın arabasına binenin hesabına haciz koydururum!",
        traits: ["Orhan'a Gıcık", "Emekli Bankacı", "Asla Arkadan Vurmaz", "Torun Bakan Cellat"]
    },
    {
        name: "Orhan (Otomatçı)",
        type: "Hedef Tahtası (The Worst Driver)",
        age: 19,
        stats: [
            { label: "İğrenç Şoförlük", value: 100, class: "anger" },
            { label: "Takla Atma", value: 100, class: "anger" },
            { label: "Pusu Şansı", value: 0, class: "luck" }
        ],
        desc: "Otomatlara madeni para sıkıştıran Orhan, araba kullanma konusunda evrenin en yeteneksiz yaratığıdır. UAZ, Toros veya Motor fark etmez; Orhan direksiyona geçtiği saniye araç düz yolda bile 18 takla atar. O kadar iğrenç araba kullanır ki, düşmanlar ateş etmeyi bırakıp sadece onun kaza yapışını izlerler. İsmail Abi'nin sinir krizlerinin yegane canlı ve yürüyen sebebidir.",
        image: "stunt_driver_1773611793829.png",
        tagline: "Abi vallahi tümsek oradan aniden çıktı önüme!",
        traits: ["Berbat Şoför", "Kaza Makinesi", "İsmail Abi'nin Belası", "Uçan Otomatçı"]
    },
    {
        name: "Grup Klan Üyesi (Drop Delisi)",
        type: "Göklerin Efendisi (The Drop Seeker)",
        age: 22,
        stats: [
            { label: "Duman Aşkı", value: 100, class: "anger" },
            { label: "Tehlike Körü", value: 100, class: "luck" },
            { label: "Açgözlülük", value: 95, class: "greed" }
        ],
        desc: "Kırmızı duman onun ibadetgahıdır. 1881 klanının en gözü kara -ve biraz da deli- üyesidir. Gökten düşen sandığı gördüğü an bilincini kaybeder; mermilerin vızıltısını duymaz, etraftaki tehlikeyi sezmez. Sadece o kırmızı dumana doğru, sanki hayatının anlamı o kutunun içindeymiş gibi trans halinde koşar.",
        image: "air_drop_chaser_1773611856345.png",
        tagline: "Bırakın o 8x dürbünü! Benim o benim!",
        traits: ["Kırmızı Duman Aşığı", "Drop Uğruna Ölen", "Adrenalin Bağımlısı"]
    },
    {
        name: "Sessiz Yancı",
        type: "Sürüngen (The Grass Snake)",
        age: 29,
        stats: [
            { label: "Sessizlik", value: 100, class: "stealth" },
            { label: "Sürünme", value: 100, class: "stealth" },
            { label: "Yerçekimi Uyum", value: 90, class: "luck" }
        ],
        desc: "Toprakla bir olmuş, sessizce sürünüyor. Çimenden ayırt edilemez, varlığı sadece ayak sesinden (o da varsa) anlaşılır. Yılan kelimesinin bedene bürünmüş hali.",
        image: "prone_snake_1773611874730.png",
        tagline: "Beni göremezsiniz, çünkü ben çimenim.",
        traits: ["Sessiz ve Derinden", "Sürüngen"]
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
        desc: "Oyunu sadece finaldeki tavuk yemeğini kazanmak için bir aracı olarak görür. Şık kıyafetiyle pusuya yatar ve menünün kendisine servis edilmesini bekler.",
        image: "chicken_dinner_winner_gourmet_1773611887767.png",
        tagline: "Kazanmak bizim ekmek kapımız.",
        traits: ["Gurme", "Ziyafet Sever"]
    }
];

function init() {
    const grid = document.querySelector('.character-grid');
    
    characters.forEach((char, index) => {
        const card = document.createElement('div');
        card.className = 'char-card';
        
        // Show only the first prominent stat on the card to keep it clean
        let cardStat = char.stats[0];
        let statsHTML = `
            <div class="stat-item">
                <div class="stat-label-row">
                    <span>Öne Çıkan Özellik: ${cardStat.label}</span>
                    <span>%${cardStat.value}</span>
                </div>
                <div class="stat-bar">
                    <div class="stat-fill ${cardStat.class}" style="width: ${cardStat.value}%"></div>
                </div>
            </div>
        `;

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
                <p class="char-desc" style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis;">${char.desc}</p>
            </div>
        `;
        
        card.addEventListener('click', () => openModal(char));
        grid.appendChild(card);
    });
}

const modal = document.getElementById('charModal');
const closeBtn = document.querySelector('.modal-close');

function openModal(char) {
    document.getElementById('modalName').textContent = char.name;
    document.getElementById('modalTagline').textContent = `"${char.tagline}"`;
    document.getElementById('modalType').textContent = char.type;
    document.getElementById('modalDesc').textContent = char.desc;
    
    const statsContainer = document.createElement('div');
    statsContainer.className = 'char-stats';
    statsContainer.style.marginTop = '2rem';
    statsContainer.style.marginBottom = '2rem';
    
    char.stats.forEach(stat => {
        statsContainer.innerHTML += `
            <div class="stat-item" style="margin-bottom: 1rem;">
                <div class="stat-label-row" style="font-size: 1rem;">
                    <span>${stat.label}</span>
                    <span>%${stat.value}</span>
                </div>
                <div class="stat-bar" style="height: 12px;">
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
