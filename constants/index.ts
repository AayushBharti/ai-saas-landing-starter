export const images = {
  yourlogo: "/assets/yourlogo.svg",
  check: "/assets/check.svg",
  check2: "/assets/check-02.svg",
  loading1: "/assets/loading-01.svg",
  starForgeSymbol: "/assets/starforge-symbol.svg",
  starForgeWhiteSymbol: "/assets/starforge-symbol-white.svg",
  play: "/assets/play.svg",
  gradient: "/assets/gradient.png",
  smallSphere: "/assets/4-small.png",
  grid: "/assets/grid.png",
  homeSmile: "/assets/home-smile.svg",
  file02: "/assets/file-02.svg",
  searchMd: "/assets/search-md.svg",
  plusSquare: "/assets/plus-square.svg",
  recording03: "/assets/recording-03.svg",
  recording01: "/assets/recording-01.svg",
  disc02: "/assets/disc-02.svg",
  chromecast: "/assets/chrome-cast.svg",
  sliders04: "/assets/sliders-04.svg",
  loading: "/assets/loading.png",
  background: "/assets/background.jpg",
  curve: "/assets/hero/curve.png",
  robot: "/assets/hero/robot.jpg",
  heroBackground: "/assets/hero/hero-background.jpg",
  curve1: "/assets/collaboration/curve-1.svg",
  curve2: "/assets/collaboration/curve-2.svg",
  discord: "/assets/collaboration/discord.png",
  figma: "/assets/collaboration/figma.png",
  framer: "/assets/collaboration/framer.png",
  notion: "/assets/collaboration/notion.png",
  photoshop: "/assets/collaboration/photoshop.png",
  protopie: "/assets/collaboration/protopie.png",
  raindrop: "/assets/collaboration/raindrop.png",
  slack: "/assets/collaboration/slack.png",
  service1: "/assets/services/service-1.png",
  service2: "/assets/services/service-2.png",
  service3: "/assets/services/service-3.png",
  lines: "/assets/pricing/lines.svg",
  stars: "/assets/pricing/stars.svg",
  coins: "/assets/roadmap/coins.png",
  done: "/assets/roadmap/done.svg",
  hero: "/assets/roadmap/hero.png",
  roadmap1: "/assets/roadmap/image-1.png",
  roadmap2: "/assets/roadmap/image-2.png",
  roadmap3: "/assets/roadmap/image-3.png",
  roadmap4: "/assets/roadmap/image-4.png",
  undone: "/assets/roadmap/undone.svg",
  notification1: "/assets/notification/image-1.png",
  notification2: "/assets/notification/image-2.png",
  notification3: "/assets/notification/image-3.png",
  notification4: "/assets/notification/image-4.png",
  benefitCard1: "/assets/benefits/card-1.svg",
  benefitCard2: "/assets/benefits/card-2.svg",
  benefitCard3: "/assets/benefits/card-3.svg",
  benefitCard4: "/assets/benefits/card-4.svg",
  benefitCard5: "/assets/benefits/card-5.svg",
  benefitCard6: "/assets/benefits/card-6.svg",
  benefitIcon1: "/assets/benefits/icon-1.svg",
  benefitIcon2: "/assets/benefits/icon-2.svg",
  benefitIcon3: "/assets/benefits/icon-3.svg",
  benefitIcon4: "/assets/benefits/icon-4.svg",
  benefitImage2: "/assets/benefits/image-2.png",
  discordBlack: "/assets/socials/discord.svg",
  facebook: "/assets/socials/facebook.svg",
  instagram: "/assets/socials/instagram.svg",
  telegram: "/assets/socials/telegram.svg",
  twitter: "/assets/socials/twitter.svg",
}

const {
  yourlogo,
  homeSmile,
  file02,
  searchMd,
  plusSquare,
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
  discord,
  figma,
  framer,
  notion,
  photoshop,
  protopie,
  raindrop,
  slack,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  notification2,
  notification3,
  notification4,
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  discordBlack,
  facebook,
  instagram,
  telegram,
  twitter,
} = images

export const navigation = [
  { id: "0", title: "Features", url: "#features" },
  { id: "1", title: "Pricing", url: "#pricing" },
  { id: "2", title: "How to use", url: "#how-to-use" },
  { id: "3", title: "Roadmap", url: "#roadmap" },
  { id: "4", title: "New account", url: "#signup", onlyMobile: true },
  { id: "5", title: "Sign in", url: "#login", onlyMobile: true },
]

export const heroIcons = [homeSmile, file02, searchMd, plusSquare]

export const notificationImages = [notification4, notification3, notification2]

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo]

export const starForgeServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
]

export const starForgeServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
]

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
]

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter."

export const collabContent = [
  { id: "0", title: "Seamless Integration", text: collabText },
  { id: "1", title: "Smart Automation" },
  { id: "2", title: "Top-notch Security" },
]

export const collabApps = [
  { id: "0", title: "Figma", icon: figma, width: 26, height: 36 },
  { id: "1", title: "Notion", icon: notion, width: 34, height: 36 },
  { id: "2", title: "Discord", icon: discord, width: 36, height: 28 },
  { id: "3", title: "Slack", icon: slack, width: 34, height: 35 },
  { id: "4", title: "Photoshop", icon: photoshop, width: 34, height: 34 },
  { id: "5", title: "Protopie", icon: protopie, width: 34, height: 34 },
  { id: "6", title: "Framer", icon: framer, width: 26, height: 34 },
  { id: "7", title: "Raindrop", icon: raindrop, width: 38, height: 32 },
]

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "2.49",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
]

export const benefits = [
  {
    id: "0",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Connect everywhere",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Fast responding",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
]

export const socials = [
  { id: "0", title: "Discord", iconUrl: discordBlack, url: "#" },
  { id: "1", title: "Twitter", iconUrl: twitter, url: "#" },
  { id: "2", title: "Instagram", iconUrl: instagram, url: "#" },
  { id: "3", title: "Telegram", iconUrl: telegram, url: "#" },
  { id: "4", title: "Facebook", iconUrl: facebook, url: "#" },
]
