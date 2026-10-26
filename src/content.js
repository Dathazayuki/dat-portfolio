import adventureCubeImage from "./assets/projects/adventure-cube.png";
import dreamWitchImage from "./assets/projects/dream-witch.png";
import ludoImage from "./assets/projects/ludo-online.png";
import petcareImage from "./assets/projects/petcare.png";
import presifyImage from "./assets/projects/presify.png";
import zeroMenuImage from "./assets/projects/zero-menu.png";
import zeroMannequinsImage from "./assets/projects/zero-mannequins.png";
import zeroKitchenImage from "./assets/projects/zero-kitchen.png";
import zeroLivingRoomImage from "./assets/projects/zero-living-room.png";
import zeroArchiveImage from "./assets/projects/zero-archive.png";
import zeroLoungeImage from "./assets/projects/zero-lounge.png";
import mangaHomeImage from "./assets/projects/manga2099-home.png";
import mangaLoginImage from "./assets/projects/manga2099-login.png";
import mangaDetailsImage from "./assets/projects/manga2099-details.png";
import mangaReaderImage from "./assets/projects/manga2099-reader.png";

export const profile = {
  name: "Trịnh Minh Đạt", email: "trinhminhdat09102004@gmail.com",
  github: "https://github.com/Dathazayuki",
};

export const skillGroups = [
  { icon: "game", title: "skillGame", caption: "gameCaption", tech: ["Unity", "C#", "State Machines", "Spine 2D", "ScriptableObject", "Object Pooling", "A*", "Distance Culling", "Yarn Spinner"] },
  { icon: "code", title: "skillWeb", caption: "webCaption", tech: ["React", "JavaScript", "HTML / CSS", "Tailwind CSS", "Node.js", "NestJS", "MongoDB", "MySQL", "Prisma", "Figma"] },
  { icon: "globe", title: "skillTools", caption: "toolsCaption", tech: ["Git", "C / C++", "Java"], includeSoftSkills: true },
];

export const projects = [
  {
    id: "zero", title: "ZERO", type: "game", visual: "zero",
    images: [
      { src: zeroMenuImage, width: 1919, height: 1079, caption: { en: "ZERO — main menu, The Shift Never Ends", vi: "ZERO — menu chính, The Shift Never Ends" } },
      { src: zeroMannequinsImage, width: 1869, height: 894, caption: { en: "ZERO — mannequins in a dark underground passage (Flooded Cistern)", vi: "ZERO — những ma-nơ-canh trong hầm ngập nước (Flooded Cistern)" } },
      { src: zeroKitchenImage, width: 1902, height: 882, caption: { en: "ZERO — the eerie chef and hotel kitchen environment", vi: "ZERO — đầu bếp quái dị và bối cảnh nhà bếp khách sạn" } },
      { src: zeroLivingRoomImage, width: 1024, height: 546, caption: { en: "ZERO — eerie living room with vintage decor and dim lighting", vi: "ZERO — phòng khách quạnh quẽ với nội thất cổ điển và ánh đèn vàng mờ ảo" } },
      { src: zeroArchiveImage, width: 1024, height: 447, caption: { en: "ZERO — gloomy archive room filled with confidential files and old typewriters", vi: "ZERO — phòng lưu trữ tài liệu u ám với các dãy tủ hồ sơ và máy đánh chữ cũ" } },
      { src: zeroLoungeImage, width: 1024, height: 438, caption: { en: "ZERO — eerie jazz lounge and stage surrounded by uncanny mannequins", vi: "ZERO — quầy bar nhạc jazz ma mị với sân khấu và những ma-nơ-canh bất động" } },
    ],
    date: "2026",
    tech: ["Unity 6", "C#", "URP", "Dynamic Object Pooling", "AI Navigation", "Unity Test Framework", "Input System", "Cinemachine", "Tripo3D / Meshy AI", "Clean Architecture"],
    format: { en: "PSYCHOLOGICAL HORROR · ANOMALY HUNT", vi: "KINH DỊ TÂM LÝ · TÌM ĐIỂM DỊ THƯỜNG" },
    status: { en: "In Development", vi: "Đang phát triển" },
    description: {
      en: "A first-person psychological horror game inspired by The Exit 8, expanded into a multi-stage campaign featuring infinite stairway loops, anomaly hunting rules, and intense survival minigames.",
      vi: "Game kinh dị tâm lý góc nhìn thứ nhất lấy cảm hứng từ The Exit 8, mở rộng thành chiến dịch 5 chặng kịch tính với quy luật vòng lặp cầu thang vô tận, giải đố tìm điểm dị thường và các minigame sinh tồn rùng rợn.",
    },
    contributions: {
      en: [
        "Engineered the infinite stairway loop with directional arrow mechanics and ~55% anomaly rates, implementing floor progression (0 → 8) with strict reset penalties and elevator transitions.",
        "Architected a Zero-Allocation Dynamic Segment Object Pooling system (5 active segments streaming via anchor points) without runtime instantiate/destroy or teleportation.",
        "Developed a comprehensive anomaly subsystem with strict AnomalyBehaviour lifecycles, 3-tier pacing (UneasyNormal, Minor, Major), diversity history tracking, and camera frustum/raycast gaze detection.",
        "Structured a 5-stage campaign (Backrooms Chase, Daruma Hall, Calling Corridor, Watchful Hall, Flooded Cistern) decoupled through standardized IMinigameSession interfaces and Additive scene loading.",
        "Built a responsive FirstPersonController with head bob, roll tilt, and surface footsteps, alongside a horror death State Machine (Jumpscare → Frozen → Blackout → Respawn) with FOV zoom punches and blood overlays.",
        "Enforced Clean Architecture with isolated Assembly Definitions (.asmdef), an in-editor static analyzer (CodePolicyValidator) enforcing strict code metrics, and over 80 automated EditMode and PlayMode tests.",
      ],
      vi: [
        "Thiết kế cơ chế vòng lặp cầu thang vô tận với quy luật mũi tên chỉ hướng và tỷ lệ dị thường ~55%; xây dựng hệ thống tiến trình tầng (0 → 8) phạt reset khi đi sai và mở thang máy chuyển chặng khi hoàn thành.",
        "Xây dựng hệ thống Dynamic Segment Object Pooling (5 tầng active nối tiếp nhau theo điểm neo) đảm bảo chuyển động liền mạch, hoàn toàn không gọi Instantiate/Destroy hay dịch chuyển teleport người chơi.",
        "Phát triển hệ sinh thái dị thường kế thừa AnomalyBehaviour với vòng đời chặt chẽ, AnomalyPacingDirector phân tầng 3 cấp độ, theo dõi lịch sử trải nghiệm (EncounterDiversityHistory) và kiểm tra góc nhìn camera Frustum/Raycast.",
        "Thiết kế chiến dịch 5 chặng liên hoàn (Backrooms Chase, Daruma Hall, Calling Corridor, Watchful Hall, Flooded Cistern) độc lập hóa qua interface IMinigameSession và chuyển cảnh Additive Loading mượt mà.",
        "Xây dựng FirstPersonController tích hợp Head Bob, Camera Roll tilt, tiếng bước chân theo bề mặt và State Machine xử lý cái chết (Jumpscare → Frozen → Blackout → Respawn) kết hợp hiệu ứng giật FOV và tràn máu màn hình.",
        "Áp dụng Clean Architecture phân tách rõ rệt Assembly (.asmdef), xây dựng công cụ phân tích tĩnh trong Editor (CodePolicyValidator) kiểm soát chất lượng code, cùng hơn 80 unit & integration test (EditMode & PlayMode).",
      ],
    },
    links: [
      {
        kind: "drive",
        url: "https://drive.google.com/drive/folders/1VecR2UaDWEQ20lgLwuAdnbdLbfc2Dh57",
        label: {
          en: "Demo video & Playable build (Drive)",
          vi: "Video demo & Bản chơi thử (Drive)",
        },
      },
    ],
  },
  {
    id: "dream-witch", title: "Dream Witch", type: "game", visual: "witch", featured: true,
    images: [{ src: dreamWitchImage, width: 1265, height: 653, caption: { en: "Dream Witch — combat gameplay and player HUD", vi: "Dream Witch — gameplay chiến đấu và HUD người chơi" } }],
    date: "03 — 07 / 2026", tech: ["Unity", "C#", "A* Pathfinding", "Spine 2D", "State Machine", "Distance Culling", "ScriptableObject", "Yarn Spinner"],
    format: { en: "2D METROIDVANIA", vi: "METROIDVANIA 2D" },
    status: { en: "Project", vi: "Dự án" },
    description: {
      en: "A world to explore. A new form to master. A 2D action platformer built around character transformation.",
      vi: "Khám phá thế giới, làm chủ hình dạng mới. Game hành động platformer 2D với cơ chế biến đổi hình dạng nhân vật.",
    },
    contributions: {
      en: [
        "Built Form Switch and character transformation mechanics for a 2D Metroidvania action platformer.",
        "Integrated Spine 2D skeletal animations for fluid player combat, responsive actions, and visual effects.",
        "Structured gameplay systems using State Machines and a data-driven ScriptableObject architecture.",
        "Implemented A* enemy pathfinding and built a custom Distance Culling system for performance optimization.",
      ],
      vi: [
        "Xây dựng cơ chế Form Switch và biến đổi hình dạng nhân vật cho game Metroidvania hành động platformer 2D.",
        "Tích hợp Spine 2D cho chuyển động mượt mà, animation chiến đấu sắc nét và hiệu ứng thị giác ấn tượng.",
        "Tổ chức kiến trúc gameplay bằng State Machine kết hợp ScriptableObject theo hướng data-driven.",
        "Áp dụng thuật toán tìm đường A* cho quái và tự xây dựng cơ chế Distance Culling để tối ưu hiệu năng.",
      ],
    },
    links: [
      {
        kind: "drive",
        url: "https://drive.google.com/drive/folders/1XHRHLK7Wgd_ZtFNQWjv0JrRYse1uE8DH",
        label: {
          en: "Demo video & Playable build (Drive)",
          vi: "Video demo & Bản chơi thử (Drive)",
        },
      },
      { kind: "code", url: "https://github.com/Dathazayuki/Doan_DreamWitch" },
    ],
  },
  {
    id: "manga2099", title: "Manga2099", type: "design", featured: true, team: 5, imageLayout: "portrait",
    images: [
      { src: mangaHomeImage, width: 435, height: 813, caption: { en: "Manga2099 — home screen design", vi: "Manga2099 — thiết kế màn hình trang chủ" } },
      { src: mangaLoginImage, width: 386, height: 811, caption: { en: "Manga2099 — sign-in screen design", vi: "Manga2099 — thiết kế màn hình đăng nhập" } },
      { src: mangaDetailsImage, width: 394, height: 787, caption: { en: "Manga2099 — manga details screen design", vi: "Manga2099 — thiết kế màn hình thông tin truyện" } },
      { src: mangaReaderImage, width: 382, height: 818, caption: { en: "Manga2099 — chapter reader screen design", vi: "Manga2099 — thiết kế màn hình đọc truyện" } },
    ],
    tech: ["Figma", "UI/UX Design", "Prototyping"],
    format: { en: "UI/UX · MANGA READING APP", vi: "UI/UX · ỨNG DỤNG ĐỌC TRUYỆN" },
    status: { en: "Team design project", vi: "Dự án thiết kế nhóm" },
    description: {
      en: "UI/UX design in Figma for an online licensed manga reading app, created by a five-person design team.",
      vi: "Thiết kế UI/UX bằng Figma cho ứng dụng đọc truyện tranh bản quyền online, thực hiện cùng nhóm thiết kế 5 người.",
    },
    contributions: {
      en: ["Designed the main homepage and web interface.", "Designed the ranking screen.", "Designed search and filtering screens.", "Designed the manga information screen.", "Designed the manga upload screen."],
      vi: ["Thiết kế màn hình chính và giao diện trang chủ web.", "Thiết kế màn hình xếp hạng.", "Thiết kế màn hình tìm kiếm và lọc truyện.", "Thiết kế màn hình thông tin truyện.", "Thiết kế màn hình đăng truyện."],
    },
    links: [
      { kind: "prototype", url: "https://www.figma.com/proto/ddMuz3osmxhdTd4iR6kvGw/Project-UI-UX?node-id=1069-73&p=f&t=HbYxRq2uxGq9jLQy-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1069%3A73&show-proto-sidebar=1" },
      { kind: "video", url: "https://www.youtube.com/watch?v=abnT43qV6z0" },
      { kind: "figma", url: "https://www.figma.com/design/ddMuz3osmxhdTd4iR6kvGw/Project-UI-UX?node-id=0-1&p=f" },
    ],
    accessNote: { en: "The Figma design and prototype are password-protected. Contact me for access.", vi: "Thiết kế và prototype Figma có mật khẩu bảo vệ. Vui lòng liên hệ để được truy cập." },
  },
  {
    id: "petcare", title: "PetCare", type: "web", visual: "petcare", team: 4,
    images: [{ src: petcareImage, width: 1876, height: 911, caption: { en: "PetCare — About us page", vi: "PetCare — trang Về chúng tôi" } }],
    duration: { en: "4 months", vi: "4 tháng" },
    tech: ["JavaScript", "Node.js", "MongoDB", "Tailwind CSS", "Axios", "Cloudinary", "Vercel"],
    format: { en: "PET CARE PLATFORM", vi: "NỀN TẢNG CHĂM SÓC THÚ CƯNG" },
    status: { en: "Team project", vi: "Dự án nhóm" },
    description: {
      en: "A pet care platform connecting pet owners, administrators, veterinarians and staff, with an integrated online store.",
      vi: "Nền tảng chăm sóc thú cưng cho người dùng, quản trị viên, bác sĩ và nhân viên, tích hợp cửa hàng trực tuyến.",
    },
    teamContributions: {
      en: ["Designed the user interface and implemented the frontend with Tailwind CSS.", "Built the online store and shopping functionality.", "Developed frontend and backend, designed the MongoDB database and deployed with Vercel; used Axios and Cloudinary."],
      vi: ["Thiết kế giao diện người dùng và lập trình frontend bằng Tailwind CSS.", "Xây dựng cửa hàng trực tuyến cùng chức năng bán hàng.", "Phát triển frontend/backend, thiết kế cơ sở dữ liệu MongoDB và triển khai bằng Vercel; sử dụng Axios và Cloudinary."],
    }, links: [{ kind: "live", url: "https://cn-web-pet-care.vercel.app/home" }],
  },
  {
    id: "presify", title: "Presify", type: "web", visual: "slides", team: 7,
    images: [{ src: presifyImage, width: 1918, height: 919, caption: { en: "Presify — Japanese slide editor and properties panel", vi: "Presify — trình chỉnh sửa slide tiếng Nhật và bảng thuộc tính" } }],
    duration: { en: "5 months", vi: "5 tháng" },
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Axios"],
    format: { en: "COLLABORATIVE SLIDE EDITOR", vi: "ỨNG DỤNG CỘNG TÁC LÀM SLIDE" },
    status: { en: "Team project · VI / JP", vi: "Dự án nhóm · VI / JP" },
    description: {
      en: "A Vietnamese–Japanese slide creation project designed for editable templates, shared presentations and multi-user collaboration.",
      vi: "Dự án tạo slide song ngữ Việt–Nhật, hướng đến mẫu có thể chỉnh sửa, chia sẻ bài trình chiếu và cộng tác nhiều người dùng.",
    },
    teamContributions: {
      en: ["Managed the project and designed the database.", "Designed multi-user slide editing and access permissions.", "Developed user interfaces for template projects and personal projects."],
      vi: ["Quản lý dự án và thiết kế cơ sở dữ liệu.", "Thiết kế tính năng nhiều người dùng chỉnh sửa slide và phân quyền truy cập.", "Phát triển giao diện cho trang dự án mẫu và dự án của tôi."],
    },
    links: [
      {
        kind: "drive",
        url: "https://drive.google.com/drive/folders/1hUPuxvh95OD5xT3AsPn4KShgbm9RSkfo",
        label: {
          en: "Demo video & Preview (Drive)",
          vi: "Video demo & Bản chơi thử (Drive)",
        },
      },
    ],
  },
  {
    id: "adventure-cube", title: "Adventure Cube", type: "game", visual: "cube", date: "07 / 2025",
    images: [{ src: adventureCubeImage, width: 1911, height: 863, caption: { en: "Adventure Cube — platforms, coins and obstacles", vi: "Adventure Cube — đường đi, tiền xu và chướng ngại vật" } }],
    tech: ["Unity", "C#", "Object Pooling", "Mobile"],
    format: { en: "3D CASUAL · MOBILE", vi: "CASUAL 3D · DI ĐỘNG" },
    status: { en: "Personal project", vi: "Dự án cá nhân" },
    description: {
      en: "Keep moving. Chase your high score. A mobile casual game with collectible coins, obstacles and multiple player skins.",
      vi: "Di chuyển không ngừng, chinh phục điểm cao. Game casual trên điện thoại với tiền xu, chướng ngại vật và nhiều skin nhân vật.",
    },
    contributions: {
      en: ["Built a complete mobile 3D casual game with multiple player skins.", "Implemented cube movement, coin collection, obstacles and enemies.", "Used Object Pooling for an endless map, a Singleton for global management and Coroutines for smooth movement."],
      vi: ["Phát triển game casual 3D trên điện thoại hoàn chỉnh với nhiều skin nhân vật.", "Xây dựng điều khiển Cube, thu thập xu, vượt chướng ngại vật và kẻ thù.", "Kết hợp Object Pooling tạo map vô tận, Singleton quản lý toàn cục và Coroutine cho chuyển động mượt mà."],
    },
    links: [
      {
        kind: "drive",
        url: "https://drive.google.com/drive/folders/1tAUGODwgMRZV5Azn3gv9wnKlhP2eTjNN",
        label: {
          en: "Demo video & Playable build (Drive)",
          vi: "Video demo & Bản chơi thử (Drive)",
        },
      },
      { kind: "code", url: "https://github.com/Dathazayuki/Adventure-Cube" },
    ],
  },
  {
    id: "ludo-online", title: "LUDO 3D Online", type: "game", visual: "ludo", date: "11 — 12 / 2025",
    images: [{ src: ludoImage, width: 1073, height: 719, caption: { en: "LUDO 3D Online — multiplayer board and dice roll", vi: "LUDO 3D Online — bàn cờ nhiều người chơi và lượt tung xúc xắc" } }],
    tech: ["Unity", "C#", "C", "Networking"],
    format: { en: "ONLINE MULTIPLAYER", vi: "NHIỀU NGƯỜI CHƠI TRỰC TUYẾN" },
    status: { en: "Project", vi: "Dự án" },
    description: {
      en: "A familiar board game, connected. Online 3D Ludo with a Unity client and a C server handling game logic and player connections.",
      vi: "Cờ cá ngựa quen thuộc, kết nối trực tuyến. Game 3D với client Unity và server C xử lý logic cùng kết nối nhiều người chơi.",
    },
    contributions: {
      en: ["Built a Unity client focused on 3D presentation, effects and network interactions.", "Used the FX Kandol Pack for visual effects.", "Implemented a C server for game logic and multiplayer connections."],
      vi: ["Xây dựng client Unity với giao diện 3D, hiệu ứng và tương tác mạng.", "Sử dụng FX Kandol Pack cho hiệu ứng hình ảnh.", "Lập trình server bằng C để xử lý logic và kết nối nhiều người chơi."],
    },
    links: [
      {
        kind: "drive",
        url: "https://drive.google.com/drive/folders/1nN03Extcc4DjOg8VgLNKuz6mXddoR33L",
        label: {
          en: "Demo video & Playable build (Drive)",
          vi: "Video demo & Bản chơi thử (Drive)",
        },
      },
      { kind: "code", url: "https://github.com/Dathazayuki/Ludo3DOnline" },
    ],
  },

];

export const copy = {
  en: {
    pageTitle: "Trịnh Minh Đạt — Game & Web Developer",
    pageDescription: "Trịnh Minh Đạt — Game & Web Developer in Hanoi. Explore Unity games, React web apps and collaborative projects including PetCare and Presify.",
    roleGame: "GAME DEVELOPER", roleWeb: "WEB DEVELOPER",
    disciplineGame: "GAME DEVELOPMENT", disciplineWeb: "WEB DEVELOPMENT",
    navProjects: "Work", navAbout: "About", navExperience: "Journey", navSkills: "Skills", navContact: "Let's talk",
    skip: "Skip to content", home: "Back to home", menu: "Toggle navigation", navigation: "Main navigation", switchLanguage: "Switch to Vietnamese",
    eyebrow: "A DEVELOPER'S PLAYGROUND", hello: "Hey, I'm Đạt", intro: "I turn ideas into things you can play. And things you can use.",
    introSub: "Game & web developer based in Hanoi. Building gameplay with Unity and web experiences with React, one thoughtful detail at a time.",
    explore: "Explore my work", resume: "Download CV", scroll: "A LITTLE SCROLL GOES A LONG WAY", location: "HANOI, VIETNAM",
    heroNote: "WHERE LOGIC MEETS IMAGINATION", gameLane: "Worlds worth playing.", webLane: "Interfaces worth using.",
    projectsLabel: "SELECTED WORK", projectsTitle: "Made to be", projectsAccent: "experienced.",
    projectsSub: "From personal experiments to team-built products. A look at what I build, and how I think.",
    all: "Everything", games: "Games", web: "Web apps", design: "UI/UX", projectCount: "projects", details: "Explore project", featured: "FEATURED",
    illustration: "CSS illustration", team: "Team", people: "people", duration: "Duration", timeline: "Timeline", status: "Status",
    gallery: "Project screenshots", previousImage: "Previous image", nextImage: "Next image", showImage: "Show image", imageCount: "images",
    contributions: "What I worked on", teamContributions: "Our team's contributions", teamNote: "Built as a team. The contributions below describe the team's work.",
    stack: "Built with", code: "View source", live: "Visit website", video: "Watch demo", drive: "Demo video & Playable build (Drive)", figma: "View Figma design", prototype: "Try prototype", close: "Close project", preview: "Project illustration, not a product screenshot",
    aboutLabel: "BEHIND THE CODE", aboutTitle: "Curious mind.", aboutAccent: "Builder at heart.",
    aboutLead: "I'm Trịnh Minh Đạt, a Vietnamese–Japanese IT student at Hanoi University of Science and Technology.",
    aboutBody: "I enjoy connecting creative ideas with structured systems: a satisfying player mechanic, a clear interface, or a backend that brings it all together. I learn by building, solving problems and working with a team.",
    education: "Education", university: "Hanoi University of Science and Technology", degree: "Vietnamese–Japanese Information Technology", present: "2022 — Present",
    languages: "Languages", languageList: "Vietnamese · Japanese · English", focus: "My approach", focusText: "Understand. Build. Refine.",
    journeyLabel: "THE JOURNEY", journeyTitle: "Learning by", journeyAccent: "doing.", internship: "Game Developer Intern", internshipDate: "09 Jun — 05 Sep 2025",
    internshipText: "Hands-on game development at Xgame Studio, from a personal mobile game to production minigames and playable ads.",
    internshipItems: ["Developed Adventure Cube as a personal game project.", "Contributed Basketball and BaseBall minigames to the released Prison Escape Simulator.", "Developed playable ads for Prison Escape Simulator."],
    skillsLabel: "MY TOOLKIT", skillsTitle: "The tools behind", skillsAccent: "the experience.",
    skillsSub: "Different tools. The same drive to make things work well.", skillGame: "Gameplay & systems", skillWeb: "Web & interfaces", skillTools: "Foundations & teamwork",
    gameCaption: "From player input to a world that reacts.", webCaption: "From the first interaction to the database.", toolsCaption: "The habits and tools that connect it all.",
    softSkills: ["Problem solving", "Teamwork", "Communication", "Leadership"],
    contactLabel: "NEXT CHAPTER", contactTitle: "Let's build", contactAccent: "something good.",
    contactText: "Have a game, a web project, or an opportunity in mind? I'd love to hear about it.", emailLabel: "DROP ME A LINE", copied: "Email copied", copyEmail: "Copy email address", copyFailed: "Couldn't copy. Please use the email link.",
    footer: "Built with care, code & a little curiosity.", top: "Back to top", viewGithub: "Find me on GitHub",
  },
  vi: {
    pageTitle: "Trịnh Minh Đạt — Lập trình Game & Web",
    pageDescription: "Portfolio Trịnh Minh Đạt — Lập trình Game & Web tại Hà Nội. Khám phá game Unity, ứng dụng React cùng các dự án nhóm PetCare và Presify.",
    roleGame: "LẬP TRÌNH GAME", roleWeb: "LẬP TRÌNH WEB",
    disciplineGame: "PHÁT TRIỂN GAME", disciplineWeb: "PHÁT TRIỂN WEB",
    navProjects: "Dự án", navAbout: "Về mình", navExperience: "Hành trình", navSkills: "Kỹ năng", navContact: "Kết nối",
    skip: "Đến nội dung chính", home: "Về đầu trang", menu: "Mở hoặc đóng điều hướng", navigation: "Điều hướng chính", switchLanguage: "Chuyển sang tiếng Anh",
    eyebrow: "KHÔNG GIAN SÁNG TẠO CỦA MÌNH", hello: "Chào bạn, mình là Đạt", intro: "Biến ý tưởng thành trải nghiệm để chơi. Và sản phẩm để dùng.",
    introSub: "Lập trình Game & Web tại Hà Nội. Xây dựng gameplay bằng Unity và trải nghiệm web bằng React, chăm chút từng chi tiết nhỏ.",
    explore: "Khám phá dự án", resume: "Tải CV", scroll: "CUỘN XUỐNG ĐỂ KHÁM PHÁ", location: "HÀ NỘI, VIỆT NAM",
    heroNote: "KHI LOGIC GẶP TRÍ TƯỞNG TƯỢNG", gameLane: "Thế giới để khám phá.", webLane: "Giao diện để trải nghiệm.",
    projectsLabel: "DỰ ÁN TIÊU BIỂU", projectsTitle: "Tạo nên những", projectsAccent: "trải nghiệm.",
    projectsSub: "Từ thử nghiệm cá nhân đến sản phẩm cùng đội nhóm. Những gì mình xây dựng và cách mình tư duy.",
    all: "Tất cả", games: "Game", web: "Ứng dụng web", design: "UI/UX", projectCount: "dự án", details: "Khám phá dự án", featured: "NỔI BẬT",
    illustration: "Minh họa CSS", team: "Đội nhóm", people: "người", duration: "Thời gian", timeline: "Giai đoạn", status: "Trạng thái",
    gallery: "Ảnh thực tế dự án", previousImage: "Ảnh trước", nextImage: "Ảnh tiếp theo", showImage: "Xem ảnh", imageCount: "ảnh",
    contributions: "Phần việc của mình", teamContributions: "Đóng góp của đội nhóm", teamNote: "Dự án được thực hiện cùng đội nhóm. Phần dưới mô tả công việc của cả đội.",
    stack: "Công nghệ sử dụng", code: "Xem mã nguồn", live: "Truy cập website", video: "Xem video demo", drive: "Video demo & Bản chơi thử (Drive)", figma: "Xem thiết kế Figma", prototype: "Trải nghiệm prototype", close: "Đóng dự án", preview: "Hình minh họa dự án, không phải ảnh sản phẩm",
    aboutLabel: "PHÍA SAU NHỮNG DÒNG CODE", aboutTitle: "Luôn tò mò.", aboutAccent: "Không ngừng tạo dựng.",
    aboutLead: "Mình là Trịnh Minh Đạt, sinh viên Công nghệ thông tin Việt–Nhật tại Đại học Bách khoa Hà Nội.",
    aboutBody: "Mình thích kết nối ý tưởng sáng tạo với hệ thống có cấu trúc: một cơ chế nhân vật thú vị, giao diện dễ dùng hay backend liên kết mọi thứ. Mình học qua việc xây dựng sản phẩm, giải quyết vấn đề và làm việc cùng đồng đội.",
    education: "Học vấn", university: "Đại học Bách khoa Hà Nội", degree: "Công nghệ thông tin Việt–Nhật", present: "2022 — Hiện tại",
    languages: "Ngôn ngữ", languageList: "Tiếng Việt · Tiếng Nhật · Tiếng Anh", focus: "Cách mình làm", focusText: "Thấu hiểu. Xây dựng. Cải tiến.",
    journeyLabel: "HÀNH TRÌNH", journeyTitle: "Trưởng thành qua", journeyAccent: "từng dự án.", internship: "Thực tập sinh Game Developer", internshipDate: "09/06 — 05/09/2025",
    internshipText: "Trực tiếp phát triển game tại Xgame Studio, từ game mobile cá nhân đến minigame và playable ads cho sản phẩm phát hành.",
    internshipItems: ["Phát triển dự án game cá nhân Adventure Cube.", "Tham gia phát triển hai minigame Basketball và BaseBall cho Prison Escape Simulator đã phát hành.", "Phát triển playable ads cho Prison Escape Simulator."],
    skillsLabel: "BỘ CÔNG CỤ", skillsTitle: "Công nghệ tạo nên", skillsAccent: "trải nghiệm.",
    skillsSub: "Nhiều công cụ khác nhau. Cùng mong muốn làm sản phẩm thật tốt.", skillGame: "Gameplay & hệ thống", skillWeb: "Web & giao diện", skillTools: "Nền tảng & làm việc nhóm",
    gameCaption: "Từ thao tác người chơi đến thế giới tương tác.", webCaption: "Từ tương tác đầu tiên đến cơ sở dữ liệu.", toolsCaption: "Công cụ và cách làm việc kết nối mọi thứ.",
    softSkills: ["Giải quyết vấn đề", "Làm việc nhóm", "Giao tiếp", "Lãnh đạo"],
    contactLabel: "CHƯƠNG TIẾP THEO", contactTitle: "Cùng tạo nên", contactAccent: "điều thú vị.",
    contactText: "Bạn có ý tưởng game, dự án web hay cơ hội hợp tác? Mình rất mong được lắng nghe.", emailLabel: "GỬI MÌNH MỘT LỜI NHẮN", copied: "Đã sao chép email", copyEmail: "Sao chép địa chỉ email", copyFailed: "Chưa sao chép được. Bạn có thể dùng liên kết email.",
    footer: "Được tạo nên từ sự chăm chút, code và óc tò mò.", top: "Về đầu trang", viewGithub: "Kết nối trên GitHub",
  },
};
