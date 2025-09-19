const categories = [
  {
    id: "electronics",
    title: "Electronics",
    img: "electronics.png",
    products: [
      {
        name: "GOBOULT Mustang Torq Wireless in Ear Earbuds",
        price: "₹1,799",
        features:
          "60H Playtime, App Support, Quad Mic ENC, 45ms Low Latency, 13mm Driver, Breathing LEDs, Touch Controls, Made in India, IPX5",
        img: "ep1.jpg",
        link: "https://amzn.to/4l8CNZe",
      },
      {
        name: "Boult Crown R Pro Smart Watch",
        price: "₹2,499",
        features:
          "1.43 HD AMOLED, BT Calling, Zinc Alloy Frame, 600 Nits, SpO2 Monitoring",
        img: "ep2.jpg",
        link: "https://amzn.to/45mlij9",
      },
      {
        name: "GM 10 Amp Extension Board – 2m Copper Cord",
        price: "₹339",
        features:
          "4 International Sockets, Master Switch, LED Indicator, Safety Shutter | 4.4★ (3,148 ratings)",
        img: "ep3.jpg",
        link: "https://amzn.to/3GMlwXE",
      },
      {
        name: "XGIMI Horizon S Pro 4K Projector",
        price: "₹1,69,990",
        features:
          "Dolby Vision, 1800 ISO Lumens, 110% BT.2020, Integrated Stand, 2x12W Harman Kardon | 4.5★ (29 ratings)",
        img: "ep4.jpg",
        link: "https://amzn.to/44QzLno",
      },
      {
        name: "XGIMI MoGo 2 Pro 1080P Portable Projector",
        price: "₹34,999",
        features:
          "400 ISO Lumens, WiFi + Bluetooth, 2x8W Speakers, Auto Focus, Object Avoidance, Screen Adaption | 4.2★ (210 ratings)",
        img: "ep5.jpg",
        link: "https://amzn.to/4olgWR5",
      },
      {
        name: "2-in-1 Robotic Vacuum & Mop Cleaner",
        price: "₹21,990",
        features:
          "7800Pa Suction, 7 Weeks Storage, Zero Tangle Brush, 3D Mapping, App + Voice Control | 4.4★ (959 ratings)",
        img: "ep6.jpg",
        link: "https://amzn.to/3IT1I5y",
      },
      {
        name: "Hexagon RGBIC Smart LED Wall Lights (6 Pack)",
        price: "₹5,259",
        features:
          "Music Sync, Scene Modes, Works for Gaming Room, Bedroom, Living Room Decor | 60% Off",
        img: "ep7.jpg",
        link: "https://amzn.to/46xBlfd",
      },
      {
        name: "Handheld Garment Steamer for Clothes",
        price: "₹2,608",
        features:
          "1800W, 24g/min High Steam, 110ml Tank, 15-sec Fast Heat, Vertical & Horizontal Use | 4.4★ (1,725 ratings)",
        img: "ep8.jpg",
        link: "https://amzn.to/44YYwOf",
      },
      {
        name: "2-in-1 Digital Notebook & Drawing Tablet",
        price: "₹6,682",
        features:
          "Battery-Free Pen, Bluetooth, A5 Refillable Notepad, Note-taking + Digital Art + Meetings | 4.1★ (280 ratings)",
        img: "ep9.jpg",
        link: "https://amzn.to/47bvwnO",
      },
      {
        name: "Heated Massage Stadium Seat (25\")",
        price: "₹61,718",
        features:
          "3 heat & massage levels, 6 recline positions, 4.2★ (49 ratings)",
        img: "ep10.jpg",
        link: "https://amzn.to/4m6sNRx",
      },
      {
        name: "ProtoArc Foldable Bluetooth Keyboard",
        price: "₹4,340",
        features:
          "Full-size, numeric keypad, 4.3★ (2,440 ratings)",
        img: "ep11.jpg",
        link: "https://amzn.to/41A1OFs",
      },
      {
        name: "Portable Air Cooler with Remote",
        price: "₹15,145",
        features:
          "Mini AC, 3 Wind Speeds, 3 Modes, 2-4-8H Timer, Colorful Night Light, for Room, Car, Bedroom & Camping | 3.2★ (59 ratings)",
        img: "ep12.jpg",
        link: "https://amzn.to/45k3Wnc",
      },
    ],
  },
  {
    id: "beauty",
    title: "Beauty Finds",
    img: "beauty.png",
    products: [
      {
        name: "Etude Dear Darling Lip Oil Tint",
        price: "₹712",
        features: "Juicy Moisture Formula | Shade 05 | 4.2ml",
        img: "bp1.jpg",
        link: "https://amzn.to/3GIAkGL",
      },
      {
        name: "Vega I-Curl Hair Curler",
        price: "₹771",
        features: "Ceramic Barrel, Quick Heat, LED Indicator",
        img: "bp2.jpg",
        link: "https://amzn.to/4lSzQ02",
      },
    ],
  },
  {
    id: "home",
    title: "Home Gadgets",
    img: "homegadgets.png",
    products: [
      {
        name: "Ambrane 12kPA Suction Vacuum",
        price: "₹1,799",
        features: "Wireless, Compact, HEPA Filter, Mini Orange Vac",
        img: "hp1.jpg",
        link: "https://amzn.to/4kYcSDh",
      },
      {
        name: "One94Store Motion Sensor LED",
        price: "₹299",
        features: "Rechargeable Closet Lamp, USB, Yellow Light",
        img: "hp2.jpg",
        link: "https://amzn.to/4o5BHQs",
      },
      {
        name: "CLAPONE Stone Bath Mat – Diatomaceous Earth Shower Mat",
        price: "₹899",
        features:
          "Non-Slip, Super Absorbent, Quick-Drying, Natural & Easy to Clean | 45 X 35 CM | 4.4★ (272 ratings)",
        img: "hp3.jpg",
        link: "https://amzn.to/4lYu1xO",
      },
      {
        name: "GOMAIHE Toilet Bowl Cleaner Tablets",
        price: "₹299",
        features:
          "Automatic Flush | Blue Bubbles | Mild Lemon Scent | 20 Tablets | Powerful Deep Cleaning",
        img: "hp4.jpg",
        link: "https://amzn.to/4o66oF1",
      },
      {
        name: "AUAUY 2PCS Metal Inkless Pencil (Reusable)",
        price: "₹1,179.68",
        features:
          "Everlasting Replaceable Nib | Eco-Friendly | 4.2★ (2,754 ratings)",
        img: "hp5.jpg",
        link: "https://amzn.to/4o9JnRO",
      },
      {
        name: "Joseph Joseph Cutting Board & Knife Set – 8-Piece",
        price: "₹15,959.00",
        features:
          "Color-Coded Boards, Slim Organizer Case | 4.6★ (3,602 ratings)",
        img: "hp6.jpg",
        link: "https://amzn.to/4o3cjL7",
      },
      {
        name: "uni-ball Kuru Toga M5-1017 Mechanical Pencil",
        price: "₹900",
        features:
          "Auto-Rotating Lead, 0.5mm | Replaceable Eraser | Gunmetal Body | 4.3★ (8,222 ratings)",
        img: "hp7.jpg",
        link: "https://amzn.to/459xfrq",
      },
      {
        name: "Multipurpose Electric Kettle with Accessories",
        price: "₹1,829",
        features:
          "Egg Tray, Idli Stand, Steamer & Grill Plate, Auto Cutoff, Dry Boil Protection, 1.3L | 3.4★ (117 ratings)",
        img: "hp8.jpg",
        link: "https://amzn.to/45crMkV",
      },
      {
        name: "Lockabox One™ Medicine Lock Box",
        price: "₹11,006",
        features:
          "Secure storage, 4.5★ (97 ratings), 12x8x6.6 in",
        img: "hp9.jpg",
        link: "https://amzn.to/3IUrRku",
      },
      {
        name: "vkoocy Nonstick Cookware Set (9-Piece)",
        price: "₹17,689",
        features: "Removable handle, stackable, 4.2★ (162 ratings)",
        img: "hp10.jpg",
        link: "https://amzn.to/40W36ul",
      },
      {
        name: "Rocketbook Erasable Reusable Notebook",
        price: "₹5,635",
        features:
          "32 pages, reusable & cloud-connected, 4.4★ (68,740 ratings)",
        img: "hp11.jpg",
        link: "https://amzn.to/45CFugV",
      },
      {
        name: "AOEVI Adjustable Laptop Stand",
        price: "₹2,668",
        features:
          "360° rotating base, ergonomic & foldable, 4.7★ (2,462 ratings)",
        img: "hp12.jpg",
        link: "https://amzn.to/4oq4Zte",
      },
      {
        name: "STABILO Swing Cool Pastel Highlighters",
        price: "₹653",
        features:
          "Pack of 4 assorted colors, pocket clip design, 4.4★ (36,549 ratings)",
        img: "hp13.jpg",
        link: "https://amzn.to/4otrIVo",
      },
      {
        name: "MATEIN Travel Backpack 40L",
        price: "₹2,999",
        features:
          "Water resistant, flight approved, 17-inch laptop compartment, USB port",
        img: "hp14.jpg",
        link: "https://amzn.to/40Z06gM",
      },
      {
        name: "SOUTH AREA Personal Size Portable Blender (Pink)",
        price: "₹349",
        features:
          "Wireless, USB Rechargeable, Fresh Juice Maker, Smoothies/Shakes, Sports, Camping, Fitness | 3.5★ (769 ratings)",
        img: "hp15.jpg",
        link: "https://amzn.to/45Oc9jE",
      },
      {
        name: "Compact Soundbar with Subwoofer (90W)",
        price: "₹3,499",
        features:
          "Dual Driver, 11.43cm Subwoofer, HDMI ARC, Bluetooth v5.1, Wall Mountable, Glossy Finish | 4.0★ (660 ratings)",
        img: "hp16.jpg",
        link: "https://amzn.to/47tRliI",
      },
    ],
  },
  {
    id: "pet",
    title: "Pet Accessories",
    img: "pet.png",
    products: [
      {
        name: "Qpets® Cat Water Fountain",
        price: "₹1,299",
        features: "LED Light, Cute Floral Dispenser with Filter",
        img: "pp1.jpg",
        link: "https://amzn.to/4lMUE95",
      },
      {
        name: "Amazon Basics Velvet Pet Hut",
        price: "₹779",
        features: "For Cats & Small Dogs, Washable, 40x40x40cm",
        img: "pp2.jpg",
        link: "https://amzn.to/4lKZFie",
      },
    ],
  },
  {
    id: "cutie",
    title: "Cutie Picks",
    img: "cutie.png",
    products: [
      {
        name: "Desidiya® Cat LED Lamp",
        price: "₹799",
        features: "Rechargeable, Silicone, Nursery Decor",
        img: "cp1.jpg",
        link: "https://amzn.to/45kwBIB",
      },
      {
        name: "Kawai Homes Penguin Plushie",
        price: "₹450",
        features: "Crochet Handmade Gift for All Ages",
        img: "cp2.jpg",
        link: "https://amzn.to/46XPX7K",
      },
      {
        name: "3D Crystal Cat Figurine with LED Light Base",
        price: "₹175",
        features:
          "80mm Crystal Ball, Laser Engraved, LED Wooden Base | 4.3★ (147 ratings)",
        img: "cp3.jpg",
        link: "https://amzn.to/4oqKP2u",
      },
      {
        name: "3D Galaxy Crystal Ball LED Night Lamp",
        price: "₹179",
        features:
          "Warm White Glow, Wooden Base, 4.1★ (2,056 ratings)",
        img: "cp4.jpg",
        link: "https://amzn.to/45kElcI",
      },
      {
        name: "bnf Electric Dinosaur Race Track Toy",
        price: "₹2,200",
        features:
          "Chasing race track with music & lights, climbing slide, for kids & toddlers",
        img: "cp5.jpg",
        link: "https://amzn.to/3J8jhys",
      },
      {
        name: "One94Store Jellyfish LED Night Light",
        price: "₹899",
        features:
          "Color changing, aesthetic ambient lamp, jellyfish design",
        img: "cp6.jpg",
        link: "https://amzn.to/45mLri9",
      },
      {
        name: "Desidiya® Lying Panda Night Light",
        price: "₹389",
        features:
          "Soft Silicone, Color-Changing LED Touch Lamp with Timer, for Bedroom & Office | 4.4★ (4,435 ratings)",
        img: "cp7.jpg",
        link: "https://amzn.to/45ieiE9",
      },
      {
        name: "Premium Fur Bean Bag Sofa Bed (Coffee)",
        price: "₹6,900",
        features:
          "Luxury & Attractive Design, Sofa Bean Bag with Beans, for Living Room | 4.0★ (74 ratings)",
        img: "cp8.jpg",
        link: "https://amzn.to/4oDwgZb",
      },
    ],
  },
];


const categoryList = document.getElementById('categoryList');
const productList = document.getElementById('productList');
const searchInput = document.getElementById('searchInput');

function renderCategories() {
  categoryList.innerHTML = '';
  categoryList.style.display = 'flex';
  productList.style.display = 'none';

  categories.forEach(cat => {
    const card = document.createElement('div');
    card.className = 'category';
    card.innerHTML = `<img src="${cat.img}" alt="${cat.title}"><h3>${cat.title}</h3>`;
    card.onclick = () => {
      history.pushState({ page: 'products', id: cat.id }, '', `#${cat.id}`);
      showProducts(cat.products);
    };
    categoryList.appendChild(card);
  });
}

function showProducts(products) {
  categoryList.style.display = 'none';
  productList.innerHTML = '';

  const backBtn = document.createElement('button');
  backBtn.textContent = '⬅ Back to Categories';
  backBtn.style.margin = '10px 0';
  backBtn.style.padding = '10px 16px';
  backBtn.style.border = 'none';
  backBtn.style.borderRadius = '8px';
  backBtn.style.backgroundColor = '#ffdfba';
  backBtn.style.fontWeight = 'bold';
  backBtn.style.cursor = 'pointer';
  backBtn.onclick = () => {
    history.pushState({ page: 'categories' }, '', '#categories');
    renderCategories();
    window.scrollTo(0, 0);
  };
  productList.appendChild(backBtn);

  productList.style.display = 'flex';
  productList.style.flexWrap = 'wrap';

  products.forEach(prod => {
    const card = document.createElement('div');
    card.className = 'product';
    card.innerHTML = `
      <img src="${prod.img}" alt="${prod.name}">
      <h4>${prod.name}</h4>
      <p>${prod.features}</p>
      <p><strong>${prod.price}</strong></p>
      <a href="${prod.link}" target="_blank">
        <button class="buy-button">Buy Now</button>
      </a>
    `;
    productList.appendChild(card);
  });
}

function searchProducts() {
  const query = searchInput.value.toLowerCase().trim();
  categoryList.innerHTML = '';
  productList.innerHTML = '';
  categoryList.style.display = 'none';
  productList.style.display = 'none';

  if (!query) {
    renderCategories();
    return;
  }

  let foundCategory = false;
  let foundProducts = [];

  categories.forEach(cat => {
    if (cat.title.toLowerCase().includes(query)) {
      foundCategory = true;
      const card = document.createElement('div');
      card.className = 'category';
      card.innerHTML = `<img src="${cat.img}" alt="${cat.title}"><h3>${cat.title}</h3>`;
      card.onclick = () => {
        history.pushState({ page: 'products', id: cat.id }, '', `#${cat.id}`);
        showProducts(cat.products);
      };
      categoryList.appendChild(card);
    }

    cat.products.forEach(prod => {
      if (
        prod.name.toLowerCase().includes(query) ||
        prod.features.toLowerCase().includes(query)
      ) {
        foundProducts.push(prod);
      }
    });
  });

  if (foundCategory) categoryList.style.display = 'flex';
  if (foundProducts.length > 0) {
    productList.style.display = 'flex';
    foundProducts.forEach(prod => {
      const card = document.createElement('div');
      card.className = 'product';
      card.innerHTML = `
        <img src="${prod.img}" alt="${prod.name}">
        <h4>${prod.name}</h4>
        <p>${prod.features}</p>
        <p><strong>${prod.price}</strong></p>
        <a href="${prod.link}" target="_blank">
          <button class="buy-button">Buy Now</button>
        </a>
      `;
      productList.appendChild(card);
    });
  }

  if (!foundCategory && foundProducts.length === 0) {
    productList.style.display = 'flex';
    const msg = document.createElement('p');
    msg.textContent = "No products found.";
    msg.style.fontSize = '1.1rem';
    msg.style.color = '#999';
    productList.appendChild(msg);
  }
}

function handleHashChange() {
  const hash = window.location.hash.replace('#', '');
  const category = categories.find(c => c.id === hash);
  if (category) {
    showProducts(category.products);
  } else {
    renderCategories();
  }
}

window.addEventListener('popstate', (event) => {
  if (event.state && event.state.page === 'products') {
    const cat = categories.find(c => c.id === event.state.id);
    if (cat) showProducts(cat.products);
  } else {
    renderCategories();
  }
});
window.addEventListener('hashchange', handleHashChange);
window.addEventListener('load', handleHashChange);
