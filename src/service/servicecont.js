           

const products = [
  {
    name: "LED Sign Board & All Types of Sign Boards",
    img:"./imgs/H0e86a069c3d04a0e8381734875ffb67aL.jpg_720x720q50.avif",
    category: "Exterior",
    description: "Custom LED and various types of signboards including acrylic, glow, flex, and metal boards.",
    materials: ["LED Lights", "Acrylic", "Metal Frame", "Flex"],
    durability: "5-10 years",
    estimated_cost: "₹3,000 - ₹50,000",
    ideal_for: ["Shops", "Offices", "Hospitals", "Malls"],
    installation_process: [
      "Select design and material.",
      "Assemble LED modules or print the board.",
      "Frame mounting and wiring connections.",
      "Waterproof sealing and final touch-ups."
    ],
    material_processing: [
      "Acrylic or metal laser cutting.",
      "Vinyl printing and lamination.",
      "LED module fitting and wiring."
    ],
    reviews: [
      { user: "Rahul K.", rating: 4.8, comment: "Great visibility and durable material." },
      { user: "Neha S.", rating: 4.6, comment: "Perfect for brand advertising!" }
    ]
  },
  {
    name: "ACP Elevation",
    img:"./imgs/acp.jpg",
    category: "Exterior",
    description: "Aluminum Composite Panel (ACP) cladding for modern and stylish building facades.",
    materials: ["Aluminum Sheets", "Polyethylene Core", "Protective Film"],
    durability: "10-15 years",
    estimated_cost: "₹500 - ₹1,500 per sq. ft.",
    ideal_for: ["Commercial Buildings", "Residential Complexes", "Showrooms"],
    installation_process: [
      "Measure and cut ACP sheets.",
      "Install mounting frames.",
      "Fix ACP sheets to the frame.",
      "Seal joints and apply finishing touches."
    ],
    material_processing: [
      "Cutting and shaping ACP sheets.",
      "Drilling and fixing with rivets.",
      "Applying protective coatings."
    ],
    reviews: [
      { user: "Vikram P.", rating: 4.7, comment: "Modern look and easy to maintain." },
      { user: "Anjali R.", rating: 4.5, comment: "Durable and weather-resistant." }
    ]
  },
  {
    name: "CNC & Pattern Elevation",
    img:"./imgs/cnc.jpg",
    category: "Exterior",
    description: "Decorative CNC-cut panels and patterned elevations for an elegant look.",
    materials: ["Wood", "Metal", "Acrylic"],
    durability: "8-12 years",
    estimated_cost: "₹800 - ₹2,000 per sq. ft.",
    ideal_for: ["Hotels", "Offices", "Luxury Residences"],
    installation_process: [
      "Design and finalize patterns.",
      "CNC cutting of materials.",
      "Mounting on frames.",
      "Finishing and polishing."
    ],
    material_processing: [
      "CNC cutting and engraving.",
      "Polishing and painting.",
      "Assembly of panels."
    ],
    reviews: [
      { user: "Rajesh M.", rating: 4.9, comment: "Unique and artistic designs." },
      { user: "Priya T.", rating: 4.6, comment: "Perfect for luxury interiors." }
    ]
  },
  {
    name: "POP False Ceiling",
    img:"./imgs/pop.jpg",
    category: "Interior",
    description: "Plaster of Paris (POP) ceiling designs for a smooth and elegant interior finish.",
    materials: ["POP", "Metal Frames", "Paints"],
    durability: "10-15 years",
    estimated_cost: "₹50 - ₹150 per sq. ft.",
    ideal_for: ["Homes", "Offices", "Showrooms"],
    installation_process: [
      "Frame installation.",
      "Applying POP mixture.",
      "Smoothing and finishing.",
      "Painting and polishing."
    ],
    material_processing: [
      "Mixing POP with water.",
      "Shaping and smoothing.",
      "Drying and painting."
    ],
    reviews: [
      { user: "Suresh D.", rating: 4.5, comment: "Smooth finish and elegant look." },
      { user: "Meena K.", rating: 4.3, comment: "Affordable and durable." }
    ]
  },
  {
    name: "WPC Louver False Ceiling",
    img:"./imgs/wpc.webp",
    category: "Interior",
    description: "Wood Polymer Composite (WPC) louvers for durable and stylish ceiling designs.",
    materials: ["WPC Sheets", "Metal Frames", "Adhesives"],
    durability: "15-20 years",
    estimated_cost: "₹100 - ₹300 per sq. ft.",
    ideal_for: ["Homes", "Offices", "Restaurants"],
    installation_process: [
      "Frame installation.",
      "Cutting and fitting WPC louvers.",
      "Securing with adhesives.",
      "Finishing and polishing."
    ],
    material_processing: [
      "Cutting WPC sheets.",
      "Shaping and smoothing.",
      "Applying protective coatings."
    ],
    reviews: [
      { user: "Arjun S.", rating: 4.7, comment: "Stylish and long-lasting." },
      { user: "Kavita R.", rating: 4.6, comment: "Easy to install and maintain." }
    ]
  },
  {
    name: "ACP False Ceiling",
    img:"./imgs/ACP-False-Ceiling-.jpg",
    category: "Interior",
    description: "Lightweight and moisture-resistant ACP ceilings for modern interiors.",
    materials: ["ACP Sheets", "Metal Frames", "Adhesives"],
    durability: "10-15 years",
    estimated_cost: "₹80 - ₹200 per sq. ft.",
    ideal_for: ["Offices", "Malls", "Homes"],
    installation_process: [
      "Frame installation.",
      "Cutting and fitting ACP sheets.",
      "Securing with adhesives.",
      "Finishing and polishing."
    ],
    material_processing: [
      "Cutting ACP sheets.",
      "Shaping and smoothing.",
      "Applying protective coatings."
    ],
    reviews: [
      { user: "Ravi K.", rating: 4.6, comment: "Lightweight and easy to handle." },
      { user: "Sunita M.", rating: 4.5, comment: "Perfect for modern interiors." }
    ]
  },
  {
    name: "Wall Stickers",
    img:"./imgs/wallstik.webp",
    category: "Interior",
    description: "Self-adhesive decorative wall stickers to enhance home and office walls.",
    materials: ["Vinyl", "Adhesive Backing"],
    durability: "3-5 years",
    estimated_cost: "₹500 - ₹5,000 per sheet",
    ideal_for: ["Homes", "Offices", "Cafes"],
    installation_process: [
      "Clean the wall surface.",
      "Peel and stick the sticker.",
      "Smooth out air bubbles.",
      "Trim excess material."
    ],
    material_processing: [
      "Printing designs on vinyl.",
      "Cutting to size.",
      "Applying adhesive backing."
    ],
    reviews: [
      { user: "Anita P.", rating: 4.4, comment: "Easy to apply and remove." },
      { user: "Rohan G.", rating: 4.2, comment: "Great variety of designs." }
    ]
  },
  {
    name: "Floor Matts",
    img:"./imgs/floormat.webp",
    category: "Interior",
    description: "Durable and stylish floor mats for home and commercial spaces.",
    materials: ["Rubber", "Carpet", "PVC"],
    durability: "5-7 years",
    estimated_cost: "₹1,000 - ₹10,000 per mat",
    ideal_for: ["Homes", "Offices", "Gyms"],
    installation_process: [
      "Measure the area.",
      "Place the mat.",
      "Secure edges if necessary."
    ],
    material_processing: [
      "Cutting to size.",
      "Printing designs.",
      "Applying anti-slip backing."
    ],
    reviews: [
      { user: "Deepak S.", rating: 4.5, comment: "Durable and easy to clean." },
      { user: "Pooja M.", rating: 4.3, comment: "Comfortable and stylish." }
    ]
  },
  {
    name: "WPC Louver TV Unit Showcase",
    img:"./imgs/wpctv.jpeg",
    category: "Interior",
    description: "Elegant and strong WPC louvers for a modern TV unit display.",
    materials: ["WPC Sheets", "Metal Frames", "Adhesives"],
    durability: "15-20 years",
    estimated_cost: "₹10,000 - ₹50,000 per unit",
    ideal_for: ["Homes", "Offices", "Showrooms"],
    installation_process: [
      "Design and measure the space.",
      "Cut and assemble WPC louvers.",
      "Mount on frames.",
      "Finishing and polishing."
    ],
    material_processing: [
      "Cutting WPC sheets.",
      "Shaping and smoothing.",
      "Applying protective coatings."
    ],
    reviews: [
      { user: "Amit R.", rating: 4.8, comment: "Modern and elegant design." },
      { user: "Shweta K.", rating: 4.7, comment: "Sturdy and durable." }
    ]
  },
  {
    name: "Wooden Showcase",
    img:"./imgs/woodshowcase.jpg",
    category: "Interior",
    description: "Premium wooden showcase designs for storing and displaying items.",
    materials: ["Wood", "Glass", "Metal Handles"],
    durability: "20-25 years",
    estimated_cost: "₹15,000 - ₹1,00,000 per unit",
    ideal_for: ["Homes", "Offices", "Museums"],
    installation_process: [
      "Design and measure the space.",
      "Cut and assemble wooden panels.",
      "Install glass and handles.",
      "Finishing and polishing."
    ],
    material_processing: [
      "Cutting and shaping wood.",
      "Polishing and painting.",
      "Assembling with glass and handles."
    ],
    reviews: [
      { user: "Rahul S.", rating: 4.9, comment: "High-quality wood and finish." },
      { user: "Anjali M.", rating: 4.8, comment: "Perfect for displaying valuables." }
    ]
  },
  {
    name: "Aluminum Showcase",
    img:"./imgs/alushowcase.jpg",
    category: "Interior",
    description: "Lightweight and durable aluminum showcases for home and commercial use.",
    materials: ["Aluminum", "Glass", "Adhesives"],
    durability: "15-20 years",
    estimated_cost: "₹10,000 - ₹80,000 per unit",
    ideal_for: ["Homes", "Offices", "Showrooms"],
    installation_process: [
      "Design and measure the space.",
      "Cut and assemble aluminum frames.",
      "Install glass panels.",
      "Finishing and polishing."
    ],
    material_processing: [
      "Cutting and shaping aluminum.",
      "Polishing and painting.",
      "Assembling with glass."
    ],
    reviews: [
      { user: "Vikas P.", rating: 4.7, comment: "Lightweight and easy to move." },
      { user: "Ritu S.", rating: 4.6, comment: "Durable and rust-free." }
    ]
  },
  {
    name: "Wooden Modular Kitchen",
    img:"./imgs/woodkitchen.jpg",
    category: "Interior",
    description: "Custom wooden modular kitchen setups for efficient and stylish cooking spaces.",
    materials: ["Wood", "Laminate", "Hardware"],
    durability: "20-25 years",
    estimated_cost: "₹1,00,000 - ₹5,00,000 per setup",
    ideal_for: ["Homes", "Apartments", "Villas"],
    installation_process: [
      "Design and measure the kitchen space.",
      "Cut and assemble wooden cabinets.",
      "Install countertops and hardware.",
      "Finishing and polishing."
    ],
    material_processing: [
      "Cutting and shaping wood.",
      "Applying laminate finishes.",
      "Assembling with hardware."
    ],
    reviews: [
      { user: "Sanjay K.", rating: 4.9, comment: "Elegant and functional design." },
      { user: "Neha R.", rating: 4.8, comment: "High-quality materials and craftsmanship." }
    ]
  },

];



  
 export default products
  