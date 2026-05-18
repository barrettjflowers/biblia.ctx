import { w as writable } from "./index.js";
const insights = [
  {
    id: "aaron",
    title: "Aaron",
    description: "The first high priest of Israel, brother of Moses and Miriam, who served as spokesperson for Moses before Pharaoh and participated in the golden calf incident at Sinai.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "abel",
    title: "Abel",
    description: "The second son of Adam and Eve, a shepherd who offered an acceptable sacrifice to God but was murdered by his brother Cain out of jealousy.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "abihu",
    title: "Abihu",
    description: "The second son of Aaron the high priest who, along with his brother Nadab, offered unauthorized fire before the Lord and was consumed by fire from heaven.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "abishag",
    title: "Abishag",
    description: "A young Shunammite woman who served King David in his old age; her marriage to Adonijah after David's death became a political issue.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "abraham",
    title: "Abraham",
    description: "The patriarch of the Hebrew people, originally named Abram, who left Ur at God's call and became the father of Isaac through Sarah, with his descendants promised to become a great nation.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "absalom",
    title: "Absalom",
    description: "The third son of King David who rebelled against his father, seized the throne, and was killed in battle while fleeing, having died with his long hair caught in a tree.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "abusive-speech",
    title: "Abusive Speech",
    description: "Speech that dishonors God and harms others, including cursing, slander, and malicious words, which the Bible condemns as incompatible with righteousness.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "abyss",
    title: "Abyss",
    description: "The deep, boundless pit or bottomless abyss, often associated with the realm of demonic activity and the chaotic waters before creation, also called the 'deep'.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "accident",
    title: "Accident",
    description: "An unforeseen event that occurs without apparent cause; the Bible acknowledges that even unintentional deaths require accountability, as seen in cities of refuge.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "accusation",
    title: "Accusation",
    description: "A formal charge against someone, as in the Christian congregation where accusations must be substantiated by two or three witnesses before disciplinary action.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "acts-of-apostles",
    title: "Acts of Apostles",
    description: "The fifth book of the New Testament, written by Luke, documenting the early church's spread from Jerusalem to Rome, the work of the apostles, and the founding of Christian congregations.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "adam",
    title: "Adam",
    description: "The first human being, created by God in His image, placed in the Garden of Eden, given dominion over creation, and whose disobedience brought sin and death to humanity.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "administration",
    title: "Administration",
    description: "The orderly arrangement of matters in the congregation and in civic affairs, requiring qualified men to handle responsibilities with wisdom and fidelity.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "adonijah",
    title: "Adonijah",
    description: "The fourth son of King David who attempted to claim the throne after David's decline, was pardoned by Solomon but later executed for plotting against the king.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "adoption",
    title: "Adoption",
    description: "The legal transfer of a person into a new family relationship; in the Bible, it describes both literal adoption and the spiritual relationship believers have with God as His sons.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "adornment",
    title: "Adornment",
    description: "The use of jewelry, cosmetics, and fine clothing to enhance appearance; the Bible emphasizes inner beauty and modesty over elaborate outward display.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "adultery",
    title: "Adultery",
    description: "Sexual relations between a married person and someone other than their spouse, condemned as a serious sin that breaks the marriage covenant with God.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "affection",
    title: "Affection",
    description: "Deep emotional attachment and love, including family love, romantic love, and brotherly affection, which the Bible encourages to be expressed with tenderness and self-sacrifice.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "agabus",
    title: "Agabus",
    description: "A Christian prophet in the early church who predicted a famine during Claudius's reign and later bound Paul with his own belt to symbolize his fate in Jerusalem.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "age",
    title: "Age",
    description: "The measure of time from birth; the Bible records lifespans ranging from brief to exceptional, with theocratic significance attached to certain age milestones.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "agriculture",
    title: "Agriculture",
    description: "Farming and tending the land, the primary occupation in biblical times, including crop cultivation, animal husbandry, and the use of plows, terraces, and irrigation.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "ahab",
    title: "Ahab",
    description: "The seventh king of Israel (c. 940–910 BCE), notorious for his wickedness, idolatry, marriage to Jezebel, and conflict with the prophet Elijah.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "ahaz",
    title: "Ahaz",
    description: "The twelfth king of Judah (c. 746–732 BCE), who practiced idolatry, sacrificed his own son, and became a vassal to Assyria rather than trust in God.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "alcoholic-beverages",
    title: "Alcoholic Beverages",
    description: "Intoxicating drinks including wine and beer, which the Bible warns against overusing, requiring moderation and abstinence from drunkenness while prohibiting intoxication in worship.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "alexander-the-great",
    title: "Alexander the Great",
    description: "Macedonian king (356–323 BCE) who conquered the Persian Empire, spreading Greek culture throughout the Near East and creating the Hellenistic era.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "alien-resident",
    title: "Alien Resident",
    description: "A foreigner living in Israel with temporary status, required to obey God's laws and treated with justice but not entitled to land inheritance.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "altar",
    title: "Altar",
    description: "A raised platform for offering sacrifices to God, central to worship from Abel's offering through the temple system, where blood sacrifices atoned for sin.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "ambassador",
    title: "Ambassador",
    description: "A representative sent to negotiate on behalf of a ruler, sometimes used figuratively for Christians as representatives of Christ and ambassadors for reconciliation.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "ammonites",
    title: "Ammonites",
    description: "A pagan nation descended from Lot, occupying territory east of Jordan, often hostile to Israel, with Molech worship and involved in battles against Judah's kings.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "amos",
    title: "Amos",
    description: "A shepherd from Tekoa who prophesied in Israel around 800 BCE, delivering messages of judgment against the nation's social injustice and empty formalism.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "amusements",
    title: "Amusements",
    description: "Activities providing pleasure and recreation; the Bible distinguishes between innocent enjoyment and amusements that become idols or lead to ungodliness.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "ancient-of-days",
    title: "Ancient of Days",
    description: "A title for God used in Daniel's prophecy, depicting an aged, wise figure on a throne who delegates authority and renders divine judgment.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "angel",
    title: "Angel",
    description: "Spiritual beings created by God who serve as His messengers, worship Him, protect believers, and execute His will in the physical world.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "anger",
    title: "Anger",
    description: "Strong displeasure that can be righteous when directed at sin and injustice, but becomes sinful when it seethes, nurses grudges, or leads to unrighteous actions.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "animals",
    title: "Animals",
    description: "Living creatures created before humans, given dominion to humans, used for sacrifice, food, labor, and companionship, with both practical and symbolic significance.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "anointed-anointing",
    title: "Anointed, Anointing",
    description: "The ceremony of applying oil to signify being set apart for sacred service, applied to priests, kings, and occasionally prophets as a symbol of divine appointment.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "anointed-christians",
    title: "Anointed Christians",
    description: "Those who have received God's holy spirit, called 'anointed' as members of the 'little flock' who will rule with Christ in heaven as joint heirs.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "antichrist",
    title: "Antichrist",
    description: "An opponent or pseudo-Christ who denies the Father and the Son, representing apostate forces in the last days; the term appears only in John's epistles.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "antonia-tower-of",
    title: "Antonia, Tower of",
    description: "A fortress in Jerusalem adjoining the temple area, built by the Maccabees and later used by Roman soldiers as a barracks and platform for executions.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "anxiety",
    title: "Anxiety",
    description: "Distressing worry about the future; the Bible commands against anxious thinking, encouraging trust in God and prayer instead of spiraling worry.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "apocrypha",
    title: "Apocrypha",
    description: "Greek writings from the intertestamental period not included in the Hebrew canon, including Judith, Tobit, Maccabees, and Wisdom literature, some used by early Christians.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "apostasy",
    title: "Apostasy",
    description: "The abandonment of true worship, either by individuals turning from righteousness or by entire congregations falling into error and false doctrine.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "apostle",
    title: "Apostle",
    description: "A specially chosen messenger, first the Twelve chosen by Jesus, then others including Paul, tasked with bearing witness and establishing congregations.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "appointment",
    title: "Appointment",
    description: "The designation of individuals to specific roles in congregation service; appointments are made according to ability and spiritual qualifications.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "approach-to-god",
    title: "Approach to God",
    description: "The means by which humans can come before God in worship, through prayer, sacrifice, and the mediation of Christ as High Priest.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "arabah",
    title: "Arabah",
    description: "The desert region south of the Dead Sea, a desolate wilderness traversed by travelers between Judah and the Gulf of Aqaba.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "arabia",
    title: "Arabia",
    description: "The Arabian Peninsula, home to Ishmael's descendants, including the Nabateans and other peoples, traversed by Abraham's family and mentioned in Paul's travels.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "aram",
    title: "Aram",
    description: "The region of Syria and upper Mesopotamia, home to the Aramaean people, whose kings fought against Israel and who influenced Israel's language and culture.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "aramaic",
    title: "Aramaic",
    description: "The Aramaic language, related to Hebrew, spoken in Mesopotamia and Syria, used in certain portions of Daniel and Ezra and in Jesus' time.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "archaeology",
    title: "Archaeology",
    description: "The scientific study of ancient ruins and artifacts that corroborate biblical accounts, confirming historical details of places, persons, and events.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "archangel",
    title: "Archangel",
    description: "A chief angel; Michael is the only archangel named in Scripture, who leads heavenly forces against demonic powers and protects Israel.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "architecture",
    title: "Architecture",
    description: "The art of designing and constructing buildings, from Solomon's temple to homes, demonstrating advanced techniques in foundations, stonework, and decorative elements.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "areopagus",
    title: "Areopagus",
    description: "The hill of Mars in Athens, the ancient council that met to hear Paul's defense of Christianity, marking the first recorded Christian address in Europe.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "ark-of-the-covenant",
    title: "Ark of the Covenant",
    description: "The sacred chest containing the Ten Commandments, Aaron's rod, and manna, overlaid with gold, topped by the mercy seat, and housed in the Most Holy.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "armageddon",
    title: "Armageddon",
    description: "The final battle at the end of the age, when divine powers destroy warmongers and establish righteous rule on earth, as prophesied in Revelation.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "arms-armor",
    title: "Arms, Armor",
    description: "Weapons and protective equipment used in warfare, from swords and spears to shields and armor, with figurative use for spiritual warfare against wicked forces.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "army",
    title: "Army",
    description: "Organized military forces of nations, from Israel's tribal militia to the professional armies of Assyria and Rome, with various ranks and divisions.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "artemis",
    title: "Artemis",
    description: "The Greek goddess of the hunt and fertility, called Diana by the Romans, worshipped especially at Ephesus where her temple was one of the Seven Wonders.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "ashtoreth",
    title: "Ashtoreth",
    description: "The Canaanite goddess of fertility and war, plural 'Ashtaroth,' worshipped by Solomon and associated with the heavenly bodies as a fertility deity.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "assembly",
    title: "Assembly",
    description: "A gathering of people for worship, fellowship, or decision-making, from Israel's national assembly to the Christian congregation meetings.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "association",
    title: "Association",
    description: "Grouping or fellowship with others; in Scripture, both the association of the wicked (to be avoided) and Christian fellowship (to be pursued).",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "assyria",
    title: "Assyria",
    description: "The powerful empire centered on the Tigris River, which conquered Israel in 740 BCE, exiled the ten tribes, and threatened Judah until its fall in 607 BCE.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "astrologers",
    title: "Astrologers",
    description: "Those who study the stars to predict events, including the Magi who visited Jesus, whose craft is condemned as false and incompatible with true worship.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "athaliah",
    title: "Athaliah",
    description: "The daughter of Ahab and Jezebel who became queen of Judah by killing her grandchildren, ruling for six years before being overthrown by Jehu.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "athens",
    title: "Athens",
    description: "The capital of Greece, famous for philosophy, art, and learning, where Paul debated with Epicurean and Stoic philosophers and founded a congregation.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "atonement",
    title: "Atonement",
    description: "The reconciliation between God and humans through the sacrifice of Christ, whose perfect offering satisfied divine justice and provided redemption from sin.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "atonement-day",
    title: "Atonement Day",
    description: "The annual day of fasting in Israel when the high priest entered the Most Holy to make atonement for the nation's sins, pointing to Christ's greater sacrifice.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "attitudes-and-gestures",
    title: "Attitudes and Gestures",
    description: "Physical expressions that convey inward feelings, including kneeling, bowing, raising hands, clapping, and various customs that carry cultural and spiritual meaning.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "baal",
    title: "Baal",
    description: "The primary Canaanite fertility god, worshipped in various forms, whose prophets contested with Elijah on Mount Carmel and who was tolerated by many Israelites.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "babel",
    title: "Babel",
    description: "The tower built in Shinar whose construction God frustrated by confusing languages, creating the nations and halting human pride; site identified with Babylon.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "babylon",
    title: "Babylon",
    description: "The great city on the Euphrates, capital of the Chaldean empire that conquered Judah, destroyed the temple, and exiled the Jews for 70 years.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "babylon-the-great",
    title: "Babylon the Great",
    description: "The world empire of false religion, symbolized as a Harlot sitting on a scarlet beast, to be destroyed in divine judgment as the source of worldly corruption.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "bag",
    title: "Bag",
    description: "A container for carrying items, from money bags for travelers to storage bags for grain, with figurative use for spiritual provision and sustenance.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "bake-baker",
    title: "Bake, Baker",
    description: "The occupation of preparing bread, essential for daily life; Israel's dietary laws included specific requirements about bread and baking processes.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "balaam",
    title: "Balaam",
    description: "A non-Israelite prophet hired by Balak to curse Israel who, prevented by God, instead pronounced blessings, whose donkey spoke to him.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "baptism",
    title: "Baptism",
    description: "Immersion in water symbolizing death to one's old life and resurrection to new life in Christ, required for Christians as an outward testimony of inward faith.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "barak",
    title: "Barak",
    description: "An Israeli military leader who, at Deborah's direction, led Israel against the Canaanite general Sisera, fulfilling the prophetic song of triumph.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "bashan",
    title: "Bashan",
    description: "The fertile region east of the Jordan, known for its oak forests and strong cattle, taken by the Reubenites, Gadites, and half Manasseh.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "beasts-symbolic",
    title: "Beasts, Symbolic",
    description: "Animals used in prophecy to represent nations and political powers, from the four beasts in Daniel to the wild beasts in Revelation's symbolic drama.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "beating",
    title: "Beating",
    description: "The act of striking with a rod or whip, permitted as parental and judicial punishment but prohibited as excessive or unjust physical abuse.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "bee",
    title: "Bee",
    description: "The honey-producing insect, inhabiting hives in hollow trees and rocks, whose honey was valued as food and symbolically represented sweetness and industry.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "belshazzar",
    title: "Belshazzar",
    description: "The last king of Babylon, son of Nebuchadnezzar, who saw the writing on the wall during a feast and was slain that night when Darius took the city.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "benjamin",
    title: "Benjamin",
    description: "The twelfth son of Jacob and youngest son of Rachel, whose tribe produced Israel's first king (Saul) and was allocated territory near Jerusalem.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "bestiality",
    title: "Bestiality",
    description: "Sexual relations between humans and animals, condemned in the Mosaic Law as a capital offense that defiles both the person and the land.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "bethlehem",
    title: "Bethlehem",
    description: "The small town in Judah, David's birthplace and the prophesied location of the Messiah's birth, where Jesus was born in a stable.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "beth-shean",
    title: "Beth-shean",
    description: "The city in the Jordan Valley where Saul's body was hung after battle, later a significant city in Roman times with a temple to Zeus.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "bible",
    title: "Bible",
    description: "The collection of sacred writings, originally in Hebrew and Greek, consisting of 66 books recognized as Scripture, the Word of God to humanity.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "bible-authenticity",
    title: "Bible Authenticity",
    description: "The verification of the Bible as God's Word, supported by historical accuracy, internal consistency, manuscript evidence, and prophetic fulfillment.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "bible-translations",
    title: "Bible Translations",
    description: "The rendering of Scripture from original languages into other languages, from early translations like the Septuagint to modern versions preserving the message.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "birds",
    title: "Birds",
    description: "Flying creatures created on the fifth day, used for food, sacrifice, and symbolism, including doves, eagles, sparrows, and ravens with various meanings.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "birth",
    title: "Birth",
    description: "The beginning of human life, considered in Scripture as planned by God, with children viewed as blessings and heritage from the Lord.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "birthright",
    title: "Birthright",
    description: "The privileges of the firstborn, including double inheritance and leadership, which Esau sold to Jacob and which ultimately passed to Joseph's sons.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "blamelessness",
    title: "Blamelessness",
    description: "A state of being without serious blemish or fault, expected of leaders in the congregation and of individuals walking in integrity before God.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "blessing",
    title: "Blessing",
    description: "Favorable wishes and divine favor bestowed by God, pronounced over people and things, ranging from simple greetings to profound prayers of endowment.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "blood",
    title: "Blood",
    description: "The red fluid in living creatures, representing life itself, whose shedding in sacrifice atoned for sin and whose transfusion in Christ provides redemption.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "boasting",
    title: "Boasting",
    description: "Excessive pride in one's achievements, condemned when it draws glory to self rather than God; contrasted with proper confidence in divine provisions.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "body",
    title: "Body",
    description: "The physical form of humans and animals, used symbolically for the congregation as Christ's body and for the temple of God's spirit in believers.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "bond",
    title: "Bond",
    description: "A legal obligation or covenant, as in the Mosaic Law's regulations about slavery and debt, with spiritual application to the bond of commitment to God.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "bones",
    title: "Bones",
    description: "The skeletal structure of the body, representing the core of being; Joseph's bones were carried from Egypt, and Ezekiel's vision depicted the valley of dry bones.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "book",
    title: "Book",
    description: "A written document, from individual letters to Scripture itself, with specific reference to records of names, genealogical accounts, and the saved book of life.",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "bosom-position",
    title: "Bosom Position",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "bread",
    title: "Bread",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "breast-bosom",
    title: "Breast, Bosom",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "breastpiece",
    title: "Breastpiece",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "builder-building",
    title: "Builder, Building",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "bull",
    title: "Bull",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "burial-burial-places",
    title: "Burial, Burial Places",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "caesar",
    title: "Caesar",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "caesarea",
    title: "Caesarea",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "cain",
    title: "Cain",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "calendar",
    title: "Calendar",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "calf-worship",
    title: "Calf Worship",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "camel",
    title: "Camel",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "cana",
    title: "Cana",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "canaanites",
    title: "Canaanites",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "canon",
    title: "Canon",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "capernaum",
    title: "Capernaum",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "carmel",
    title: "Carmel",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "census",
    title: "Census",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "chaldea-chaldean",
    title: "Chaldea, Chaldean",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "chariot",
    title: "Chariot",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "charts",
    title: "Charts",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "chemosh",
    title: "Chemosh",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "cherethites",
    title: "Cherethites",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "child-children",
    title: "Child, Children",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "childbearing",
    title: "Childbearing",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "chorazin",
    title: "Chorazin",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "christ",
    title: "Christ",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "christian",
    title: "Christian",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "christian-congregation",
    title: "Christian Congregation",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "christian-greek-scriptures",
    title: "Christian Greek Scriptures",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "chronology",
    title: "Chronology",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "circumcision",
    title: "Circumcision",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "citizen-citizenship",
    title: "Citizen, Citizenship",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "city",
    title: "City",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "clay",
    title: "Clay",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "clean-cleanness",
    title: "Clean, Cleanness",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "cloth",
    title: "Cloth",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "clothing",
    title: "Clothing",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "cloud",
    title: "Cloud",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "cobra",
    title: "Cobra",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "colors",
    title: "Colors",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "communication",
    title: "Communication",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "compensation",
    title: "Compensation",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "complaining",
    title: "Complaining",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "congregation",
    title: "Congregation",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "conscience",
    title: "Conscience",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "contention",
    title: "Contention",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "contribution",
    title: "Contribution",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "convention",
    title: "Convention",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "conversion",
    title: "Conversion",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "cooking-cooking-utensils",
    title: "Cooking, Cooking Utensils",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "copyist",
    title: "Copyist",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "corinth",
    title: "Corinth",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "cornelius",
    title: "Cornelius",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "correction",
    title: "Correction",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "corruption",
    title: "Corruption",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "counsel-counselor",
    title: "Counsel, Counselor",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "courage",
    title: "Courage",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "court-judicial",
    title: "Court, Judicial",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "covenant",
    title: "Covenant",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "covetousness",
    title: "Covetousness",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "creation",
    title: "Creation",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "crime-and-punishment",
    title: "Crime and Punishment",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "curse",
    title: "Curse",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "cush",
    title: "Cush",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "custody",
    title: "Custody",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "cutting-off",
    title: "Cutting Off",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "cyrus",
    title: "Cyrus",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "damascus",
    title: "Damascus",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "daniel-book-of",
    title: "Daniel, Book of",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "darius-the-mede",
    title: "Darius the Mede",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "david",
    title: "David",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "david-city-of",
    title: "David, City of",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "day",
    title: "Day",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "day-of-jehovah",
    title: "Day of Jehovah",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "death",
    title: "Death",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "debt-debtor",
    title: "Debt, Debtor",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "declare-righteous",
    title: "Declare Righteous",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "dedication",
    title: "Dedication",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "deluge",
    title: "Deluge",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "demon",
    title: "Demon",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "denarius",
    title: "Denarius",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "desire",
    title: "Desire",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "destruction",
    title: "Destruction",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "devoted-thing",
    title: "Devoted Thing",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "devotion",
    title: "Devotion",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "dew",
    title: "Dew",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "disciple",
    title: "Disciple",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "discipline",
    title: "Discipline",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "diseases-and-treatment",
    title: "Diseases and Treatment",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "disfellowshipping",
    title: "Disfellowshipping",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "district-of-the-jordan",
    title: "District of the Jordan",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "divination",
    title: "Divination",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "divorce",
    title: "Divorce",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "dragnet",
    title: "Dragnet",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "dragon",
    title: "Dragon",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "dress",
    title: "Dress",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "dyes-dyeing",
    title: "Dyes, Dyeing",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "earth",
    title: "Earth",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "ecclesiastes",
    title: "Ecclesiastes",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "eden",
    title: "Eden",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "education",
    title: "Education",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "egypt-egyptian",
    title: "Egypt, Egyptian",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "elijah",
    title: "Elijah",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "elisha",
    title: "Elisha",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "emotions",
    title: "Emotions",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "employment",
    title: "Employment",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "enclave-cities",
    title: "Enclave Cities",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "endurance",
    title: "Endurance",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "enemy",
    title: "Enemy",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "engagement",
    title: "Engagement",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "entertainment",
    title: "Entertainment",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "envy",
    title: "Envy",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "ephesus",
    title: "Ephesus",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "ephod",
    title: "Ephod",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "esau",
    title: "Esau",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "esther-book-of",
    title: "Esther, Book of",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "ethiopia",
    title: "Ethiopia",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "eunuch",
    title: "Eunuch",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "evangelizer",
    title: "Evangelizer",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "eve",
    title: "Eve",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "exclusive-devotion",
    title: "Exclusive Devotion",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "execution-executioner",
    title: "Execution, Executioner",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "exile",
    title: "Exile",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "exodus",
    title: "Exodus",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "expanse",
    title: "Expanse",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "expelling",
    title: "Expelling",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "eye",
    title: "Eye",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "ezekiel",
    title: "Ezekiel",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "ezekiel-book-of",
    title: "Ezekiel, Book of",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "ezekiels-temple",
    title: "Ezekiel's Temple",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "ezion-geber",
    title: "Ezion-geber",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "ezra",
    title: "Ezra",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "faith",
    title: "Faith",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "family",
    title: "Family",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "famine",
    title: "Famine",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "father",
    title: "Father",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "fault-faultfinding",
    title: "Fault, Faultfinding",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "fear",
    title: "Fear",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "festivals",
    title: "Festivals",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "festus",
    title: "Festus",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "field",
    title: "Field",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "fig",
    title: "Fig",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "fire",
    title: "Fire",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "firstborn-firstling",
    title: "Firstborn, Firstling",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "firstfruits",
    title: "Firstfruits",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "fish",
    title: "Fish",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "flesh",
    title: "Flesh",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "flood",
    title: "Flood",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "food",
    title: "Food",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "foot",
    title: "Foot",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "forehead",
    title: "Forehead",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "foreigner",
    title: "Foreigner",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "foreknowledge-foreordination",
    title: "Foreknowledge, Foreordination",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "forgiveness",
    title: "Forgiveness",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "fornication",
    title: "Fornication",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "foundation",
    title: "Foundation",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "fountain-spring",
    title: "Fountain, Spring",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "freedom",
    title: "Freedom",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "friend",
    title: "Friend",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "furnace",
    title: "Furnace",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "galatia",
    title: "Galatia",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "galilee",
    title: "Galilee",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "gate-gateway",
    title: "Gate, Gateway",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "gatherings",
    title: "Gatherings",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "genealogy",
    title: "Genealogy",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "generation",
    title: "Generation",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "generosity",
    title: "Generosity",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "genesis-book-of",
    title: "Genesis, Book of",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "gennesaret",
    title: "Gennesaret",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "gentiles",
    title: "Gentiles",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "gethsemane",
    title: "Gethsemane",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "gibeon-gibeonites",
    title: "Gibeon, Gibeonites",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "gideon",
    title: "Gideon",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "gifts-presents",
    title: "Gifts, Presents",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "gifts-from-god",
    title: "Gifts From God",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "gifts-of-mercy",
    title: "Gifts of Mercy",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "gilead",
    title: "Gilead",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "glory",
    title: "Glory",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "goat",
    title: "Goat",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "god",
    title: "God",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "godly-devotion",
    title: "Godly Devotion",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "gods-and-goddesses",
    title: "Gods and Goddesses",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "gog",
    title: "Gog",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "gold",
    title: "Gold",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "goliath",
    title: "Goliath",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "goodness",
    title: "Goodness",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "good-news",
    title: "Good News",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "gossip-slander",
    title: "Gossip, Slander",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "government",
    title: "Government",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "grafting",
    title: "Grafting",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "grave",
    title: "Grave",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "great-crowd",
    title: "Great Crowd",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "greece-greeks",
    title: "Greece, Greeks",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "hades",
    title: "Hades",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "hagar",
    title: "Hagar",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "hair",
    title: "Hair",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "hallelujah",
    title: "Hallelujah",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "haman",
    title: "Haman",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "hand",
    title: "Hand",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "happiness",
    title: "Happiness",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "hare",
    title: "Hare",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "harlot",
    title: "Harlot",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "har-magedon",
    title: "Har-Magedon",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "harvest",
    title: "Harvest",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "hate",
    title: "Hate",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "hazael",
    title: "Hazael",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "head",
    title: "Head",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "headdress",
    title: "Headdress",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "headship",
    title: "Headship",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "healing",
    title: "Healing",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "heart",
    title: "Heart",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "heaven",
    title: "Heaven",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "hebrews-letter-to-the",
    title: "Hebrews, Letter to the",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "hebrew-scriptures",
    title: "Hebrew Scriptures",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "hell",
    title: "Hell",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "hermon",
    title: "Hermon",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "herod-party-followers-of",
    title: "Herod, Party Followers of",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "herodias",
    title: "Herodias",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "herodotus",
    title: "Herodotus",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "herods-temple",
    title: "Herod's Temple",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "herod-the-great",
    title: "Herod the Great",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "hezekiah",
    title: "Hezekiah",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "high-places",
    title: "High Places",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "high-priest",
    title: "High Priest",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "highway-road",
    title: "Highway, Road",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "hinnom-valley-of",
    title: "Hinnom, Valley of",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "hire-wages",
    title: "Hire, Wages",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "hittites",
    title: "Hittites",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "hobab",
    title: "Hobab",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "holiness",
    title: "Holiness",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "holy-spirit",
    title: "Holy Spirit",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "honor",
    title: "Honor",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "hope",
    title: "Hope",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "horse",
    title: "Horse",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "hospitality",
    title: "Hospitality",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "hour",
    title: "Hour",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "house",
    title: "House",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "humility",
    title: "Humility",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "hunting-and-fishing",
    title: "Hunting and Fishing",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "husband",
    title: "Husband",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "hushai",
    title: "Hushai",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "idol-idolatry",
    title: "Idol, Idolatry",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "illustrations",
    title: "Illustrations",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "image",
    title: "Image",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "immortality",
    title: "Immortality",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "impalement",
    title: "Impalement",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "incense",
    title: "Incense",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "industriousness",
    title: "Industriousness",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "inheritance",
    title: "Inheritance",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "insects",
    title: "Insects",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "inspiration",
    title: "Inspiration",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "installation",
    title: "Installation",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "instruction",
    title: "Instruction",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "integrity",
    title: "Integrity",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "interest",
    title: "Interest",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "isaac",
    title: "Isaac",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "island-isle",
    title: "Island, Isle",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "jachin",
    title: "Jachin",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "jacob",
    title: "Jacob",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "jailer",
    title: "Jailer",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "jealous-jealousy",
    title: "Jealous, Jealousy",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "jebus-jebusites",
    title: "Jebus, Jebusites",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "jehovah",
    title: "Jehovah",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "jephthah",
    title: "Jephthah",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "jericho",
    title: "Jericho",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "jeroboam",
    title: "Jeroboam",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "jerusalem",
    title: "Jerusalem",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "jesus-christ",
    title: "Jesus Christ",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "jewels-and-precious-stone",
    title: "Jewels and Precious Stone",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "job",
    title: "Job",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "john-good-news-according-to",
    title: "John, Good News According to",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "john-the-baptizer",
    title: "John the Baptizer",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "jonah",
    title: "Jonah",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "joppa",
    title: "Joppa",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "jordan",
    title: "Jordan",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "josephus",
    title: "Josephus",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "joy",
    title: "Joy",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "jubilee",
    title: "Jubilee",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "judaism",
    title: "Judaism",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "judas-iscariot",
    title: "Judas Iscariot",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "judea",
    title: "Judea",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "judge",
    title: "Judge",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "judgment-day",
    title: "Judgment Day",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "judgment-seat",
    title: "Judgment Seat",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "justice",
    title: "Justice",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "justification",
    title: "Justification",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "key",
    title: "Key",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "kindness",
    title: "Kindness",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "king",
    title: "King",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "kingdom",
    title: "Kingdom",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "kingdom-of-god",
    title: "Kingdom of God",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "knowledge",
    title: "Knowledge",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "korah",
    title: "Korah",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "lachish",
    title: "Lachish",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "lake-of-fire",
    title: "Lake of Fire",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "lampstand",
    title: "Lampstand",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "landowner",
    title: "Landowner",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "language",
    title: "Language",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "laodicea",
    title: "Laodicea",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "last-days",
    title: "Last Days",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "law",
    title: "Law",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "law-covenant",
    title: "Law Covenant",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "lawlessness",
    title: "Lawlessness",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "leaven",
    title: "Leaven",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "lebanon",
    title: "Lebanon",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "legal-case",
    title: "Legal Case",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "letters",
    title: "Letters",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "levites",
    title: "Levites",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "life",
    title: "Life",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "light",
    title: "Light",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "linen",
    title: "Linen",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "lion",
    title: "Lion",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "liver",
    title: "Liver",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "loan",
    title: "Loan",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "logos",
    title: "Logos",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "lord",
    title: "Lord",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "lords-evening-meal",
    title: "Lord's Evening Meal",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "love",
    title: "Love",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "loving-kindness",
    title: "Loving-Kindness",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "lowliness-of-mind",
    title: "Lowliness of Mind",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "loyalty",
    title: "Loyalty",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "luke",
    title: "Luke",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "luke-good-news-according-to",
    title: "Luke, Good News According to",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "luminary",
    title: "Luminary",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "lystra",
    title: "Lystra",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "magic-and-sorcery",
    title: "Magic and Sorcery",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "magog",
    title: "Magog",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "maher-shalal-hash-baz",
    title: "Maher-shalal-hash-baz",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "malcam",
    title: "Malcam",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "man",
    title: "Man",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "manetho",
    title: "Manetho",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "mankind",
    title: "Mankind",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "man-of-lawlessness",
    title: "Man of Lawlessness",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "manuscripts",
    title: "Manuscripts",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "marketplace",
    title: "Marketplace",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "marriage",
    title: "Marriage",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "matthew-good-news-according-to",
    title: "Matthew, Good News According to",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "matthias",
    title: "Matthias",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "maturity",
    title: "Maturity",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "meal",
    title: "Meal",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "medes-media",
    title: "Medes, Media",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "mediator",
    title: "Mediator",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "meekness",
    title: "Meekness",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "meetings",
    title: "Meetings",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "megiddo",
    title: "Megiddo",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "melchizedek",
    title: "Melchizedek",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "memorial",
    title: "Memorial",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "menstruation",
    title: "Menstruation",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "mercy",
    title: "Mercy",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "mesopotamia",
    title: "Mesopotamia",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "messiah",
    title: "Messiah",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "metals",
    title: "Metals",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "mezuzah",
    title: "Mezuzah",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "mind",
    title: "Mind",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "minister",
    title: "Minister",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "ministry",
    title: "Ministry",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "miracles",
    title: "Miracles",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "miriam",
    title: "Miriam",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "moab-moabites",
    title: "Moab, Moabites",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "molech",
    title: "Molech",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "money",
    title: "Money",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "morals",
    title: "Morals",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "moriah",
    title: "Moriah",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "moses",
    title: "Moses",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "mother",
    title: "Mother",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "mount-mountain",
    title: "Mount, Mountain",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "mourning",
    title: "Mourning",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "murder",
    title: "Murder",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "music",
    title: "Music",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "mustard",
    title: "Mustard",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "naaman",
    title: "Naaman",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "nabonidus",
    title: "Nabonidus",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "naboth",
    title: "Naboth",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "nain",
    title: "Nain",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "name",
    title: "Name",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "nations",
    title: "Nations",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "nazareth",
    title: "Nazareth",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "nebo-mount",
    title: "Nebo, Mount",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "nebuchadnezzar",
    title: "Nebuchadnezzar",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "needles-eye",
    title: "Needle's Eye",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "nehemiah",
    title: "Nehemiah",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "nehemiah-book-of",
    title: "Nehemiah, Book of",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "neighbor",
    title: "Neighbor",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "nephilim",
    title: "Nephilim",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "nest",
    title: "Nest",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "new-covenant",
    title: "New Covenant",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "new-jerusalem",
    title: "New Jerusalem",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "nile",
    title: "Nile",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "nineveh",
    title: "Nineveh",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "noah",
    title: "Noah",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "oath",
    title: "Oath",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "obedience",
    title: "Obedience",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "obeisance",
    title: "Obeisance",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "offerings",
    title: "Offerings",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "oil",
    title: "Oil",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "ointment-and-perfumes",
    title: "Ointment and Perfumes",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "older-man",
    title: "Older Man",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "olive",
    title: "Olive",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "only-begotten",
    title: "Only-Begotten",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "ornaments",
    title: "Ornaments",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "orphan",
    title: "Orphan",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "other-sheep",
    title: "Other Sheep",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "overseer",
    title: "Overseer",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "palace",
    title: "Palace",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "palestine",
    title: "Palestine",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "papyrus",
    title: "Papyrus",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "paradise",
    title: "Paradise",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "parchment",
    title: "Parchment",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "passover",
    title: "Passover",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "patriarchal-society",
    title: "Patriarchal Society",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "paul",
    title: "Paul",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "peace",
    title: "Peace",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "pearl",
    title: "Pearl",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "pentateuch",
    title: "Pentateuch",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "pentecost",
    title: "Pentecost",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "perfection",
    title: "Perfection",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "perfume",
    title: "Perfume",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "pergamum",
    title: "Pergamum",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "persecution",
    title: "Persecution",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "persia-persians",
    title: "Persia, Persians",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "peter",
    title: "Peter",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "pharaoh",
    title: "Pharaoh",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "pharisees",
    title: "Pharisees",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "philistia-philistines",
    title: "Philistia, Philistines",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "philosophy",
    title: "Philosophy",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "phoenicia",
    title: "Phoenicia",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "pilate",
    title: "Pilate",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "pity",
    title: "Pity",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "plague",
    title: "Plague",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "plants",
    title: "Plants",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "poor",
    title: "Poor",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "power-powerful-works",
    title: "Power, Powerful Works",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "praise",
    title: "Praise",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "prayer",
    title: "Prayer",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "preacher-preaching",
    title: "Preacher, Preaching",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "predestination",
    title: "Predestination",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "pregnancy",
    title: "Pregnancy",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "preparation",
    title: "Preparation",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "presence",
    title: "Presence",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "press",
    title: "Press",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "pride",
    title: "Pride",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "priest",
    title: "Priest",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "prison",
    title: "Prison",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "prophecy",
    title: "Prophecy",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "prophet",
    title: "Prophet",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "prophetic-patterns",
    title: "Prophetic Patterns",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "proselyte",
    title: "Proselyte",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "prostitute",
    title: "Prostitute",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "proverbs-book-of",
    title: "Proverbs, Book of",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "psalms-book-of",
    title: "Psalms, Book of",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "purim",
    title: "Purim",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "quail",
    title: "Quail",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "qualities",
    title: "Qualities",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "quarrel",
    title: "Quarrel",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "queen",
    title: "Queen",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "quirinius",
    title: "Quirinius",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "raamses-rameses",
    title: "Raamses, Rameses",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "rachel",
    title: "Rachel",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "rahab",
    title: "Rahab",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "rain",
    title: "Rain",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "rainbow",
    title: "Rainbow",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "ransom",
    title: "Ransom",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "reading",
    title: "Reading",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "rebelliousness",
    title: "Rebelliousness",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "reconciliation",
    title: "Reconciliation",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "re-creation",
    title: "Re-Creation",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "red-sea",
    title: "Red Sea",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "relief",
    title: "Relief",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "repentance",
    title: "Repentance",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "reproof",
    title: "Reproof",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "reptiles",
    title: "Reptiles",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "repurchase-repurchaser",
    title: "Repurchase, Repurchaser",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "respect",
    title: "Respect",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "restoration",
    title: "Restoration",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "resurrection",
    title: "Resurrection",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "retribution",
    title: "Retribution",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "revelation",
    title: "Revelation",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "revelation-to-john",
    title: "Revelation to John",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "reviling",
    title: "Reviling",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "riches",
    title: "Riches",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "righteousness",
    title: "Righteousness",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "river",
    title: "River",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "rod-staff",
    title: "Rod, Staff",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "roman-empire",
    title: "Roman Empire",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "rome",
    title: "Rome",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "ruler",
    title: "Ruler",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "sabbath-day",
    title: "Sabbath Day",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "sabbath-year",
    title: "Sabbath Year",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "sacred-secret",
    title: "Sacred Secret",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "sacrifices",
    title: "Sacrifices",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "salt",
    title: "Salt",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "salt-sea",
    title: "Salt Sea",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "samaria",
    title: "Samaria",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "samaritan",
    title: "Samaritan",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "samson",
    title: "Samson",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "samuel",
    title: "Samuel",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "sanctification",
    title: "Sanctification",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "sanctuary",
    title: "Sanctuary",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "sandal",
    title: "Sandal",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "sanhedrin",
    title: "Sanhedrin",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "sarah",
    title: "Sarah",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "sardis",
    title: "Sardis",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "sargon",
    title: "Sargon",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "satan",
    title: "Satan",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "saul",
    title: "Saul",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "saul-of-tarsus",
    title: "Saul of Tarsus",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "scepter",
    title: "Scepter",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "school",
    title: "School",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "scribe",
    title: "Scribe",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "scroll-roll",
    title: "Scroll, Roll",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "scythian",
    title: "Scythian",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "sea",
    title: "Sea",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "sea-of-galilee",
    title: "Sea of Galilee",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "secretary",
    title: "Secretary",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "seed",
    title: "Seed",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "self-control",
    title: "Self-Control",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "selfishness",
    title: "Selfishness",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "sennacherib",
    title: "Sennacherib",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "senses",
    title: "Senses",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "serpent-snake",
    title: "Serpent, Snake",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "seth",
    title: "Seth",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "seventy-weeks",
    title: "Seventy Weeks",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "sex",
    title: "Sex",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "shear-jashub",
    title: "Shear-jashub",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "sheba",
    title: "Sheba",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "sheep",
    title: "Sheep",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "shem",
    title: "Shem",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "sheol",
    title: "Sheol",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "shepherd",
    title: "Shepherd",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "shiloh",
    title: "Shiloh",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "shining-one",
    title: "Shining One",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "ship",
    title: "Ship",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "shishak",
    title: "Shishak",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "shushan",
    title: "Shushan",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "sign",
    title: "Sign",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "siloam",
    title: "Siloam",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "sin",
    title: "Sin",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "sinai",
    title: "Sinai",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "singleness",
    title: "Singleness",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "sisera",
    title: "Sisera",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "skin",
    title: "Skin",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "sky",
    title: "Sky",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "slave",
    title: "Slave",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "smyrna",
    title: "Smyrna",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "social-gatherings",
    title: "Social Gatherings",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "sodom",
    title: "Sodom",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "solomon",
    title: "Solomon",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "solomons-temple",
    title: "Solomon's Temple",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "song",
    title: "Song",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "son-of-man",
    title: "Son of Man",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "soul",
    title: "Soul",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "sovereignty",
    title: "Sovereignty",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "sower-sowing",
    title: "Sower, Sowing",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "speech",
    title: "Speech",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "spice",
    title: "Spice",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "spirit",
    title: "Spirit",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "spiritism",
    title: "Spiritism",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "spiritual-temple",
    title: "Spiritual Temple",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "star",
    title: "Star",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "steward",
    title: "Steward",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "stoics",
    title: "Stoics",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "stone",
    title: "Stone",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "straw",
    title: "Straw",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "street",
    title: "Street",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "strife",
    title: "Strife",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "submissiveness",
    title: "Submissiveness",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "suffering",
    title: "Suffering",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "superior-authorities",
    title: "Superior Authorities",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "synagogue",
    title: "Synagogue",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "syria",
    title: "Syria",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "systems-of-things",
    title: "Systems of Things",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "tabernacle",
    title: "Tabernacle",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "talent",
    title: "Talent",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "taxation",
    title: "Taxation",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "tax-collector",
    title: "Tax Collector",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "teacher-teaching",
    title: "Teacher, Teaching",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "temple",
    title: "Temple",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "ten-plagues",
    title: "Ten Plagues",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "ten-words",
    title: "Ten Words",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "teraphim",
    title: "Teraphim",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "thessalonica",
    title: "Thessalonica",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "thigh",
    title: "Thigh",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "thinking-ability",
    title: "Thinking Ability",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "thomas",
    title: "Thomas",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "threshing",
    title: "Threshing",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "throne",
    title: "Throne",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "thyatira",
    title: "Thyatira",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "time-indefinite",
    title: "Time Indefinite",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "time-of-the-end",
    title: "Time of the End",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "time-periods",
    title: "Time Periods",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "tithe",
    title: "Tithe",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "titles",
    title: "Titles",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "toe",
    title: "Toe",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "tongue",
    title: "Tongue",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "tools",
    title: "Tools",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "topheth",
    title: "Topheth",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "torment",
    title: "Torment",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "torrent-valley",
    title: "Torrent Valley",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "torture-stake",
    title: "Torture Stake",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "tower",
    title: "Tower",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "tradition",
    title: "Tradition",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "training",
    title: "Training",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "transfiguration",
    title: "Transfiguration",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "translations",
    title: "Translations",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "trap",
    title: "Trap",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "trees",
    title: "Trees",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "triads",
    title: "Triads",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "tribe",
    title: "Tribe",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "tribulation",
    title: "Tribulation",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "trumpet",
    title: "Trumpet",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "truth",
    title: "Truth",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "turtledove",
    title: "Turtledove",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "tyre",
    title: "Tyre",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "understanding",
    title: "Understanding",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "undeserved-kindness",
    title: "Undeserved Kindness",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "ur",
    title: "Ur",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "utensils",
    title: "Utensils",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "uzziah",
    title: "Uzziah",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "valley",
    title: "Valley",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "vellum",
    title: "Vellum",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "vengeance",
    title: "Vengeance",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "venom",
    title: "Venom",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "versions",
    title: "Versions",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "vessels",
    title: "Vessels",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "vine",
    title: "Vine",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "viper",
    title: "Viper",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "virgin",
    title: "Virgin",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "vision",
    title: "Vision",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "vow",
    title: "Vow",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "walking",
    title: "Walking",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "walls",
    title: "Walls",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "war",
    title: "War",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "washing-of-feet",
    title: "Washing of Feet",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "washing-of-hands",
    title: "Washing of Hands",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "watchman",
    title: "Watchman",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "water",
    title: "Water",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "weaving",
    title: "Weaving",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "week",
    title: "Week",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "weights-and-measures",
    title: "Weights and Measures",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "wheat",
    title: "Wheat",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "wickedness",
    title: "Wickedness",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "widow",
    title: "Widow",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "wife",
    title: "Wife",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "wilderness",
    title: "Wilderness",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "wind",
    title: "Wind",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "wine-and-strong-drink",
    title: "Wine and Strong Drink",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "wineskins",
    title: "Wineskins",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "winnowing",
    title: "Winnowing",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "wisdom",
    title: "Wisdom",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "woman",
    title: "Woman",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "wool",
    title: "Wool",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "word-the",
    title: "Word, The",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "work",
    title: "Work",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "world",
    title: "World",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "worship",
    title: "Worship",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "writing",
    title: "Writing",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "year",
    title: "Year",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "yoke",
    title: "Yoke",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "zeal",
    title: "Zeal",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "zebedee",
    title: "Zebedee",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "zerubbabel",
    title: "Zerubbabel",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "zerubbabels-temple",
    title: "Zerubbabel's Temple",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  },
  {
    id: "zion",
    title: "Zion",
    description: "",
    source: "",
    href: "",
    scripture: [],
    date: "",
    tags: []
  }
];
const insight = [
  {
    id: "moabite-stone",
    title: "The Moabite Stone",
    description: "9th-century BCE inscription by King Mesha",
    date: "c. 840 BCE",
    tags: ["inscription", "moabite"]
  },
  {
    id: "rosetta-stone",
    title: "The Rosetta Stone",
    description: "196 BCE Greek inscription key to deciphering hieroglyphs",
    date: "196 BCE",
    tags: ["inscription", "egypt", "translate"]
  },
  {
    id: "gilgamesh",
    title: "Epic of Gilgamesh",
    description: "Ancient Mesopotamian epic poem, one of the earliest works of literature",
    date: "c. 2100 BCE",
    tags: ["epic", "mesopotamia", "sumer"]
  },
  {
    id: "hammurabi",
    title: "Code of Hammurabi",
    description: "Babylonian legal text with 282 laws",
    date: "c. 1754 BCE",
    tags: ["law", "babylon", "mesopotamia"]
  },
  {
    id: "sargon-akkad",
    title: "Sargon of Akkad",
    description: "First emperor of the Akkadian Empire",
    date: "c. 2334 BCE",
    tags: ["king", "akkad", "mesopotamia"]
  },
  {
    id: "narmer-palette",
    title: "Narmer Palette",
    description: "Egyptian ceremonial palette depicting unification of Egypt",
    date: "c. 3100 BCE",
    tags: ["egypt", "unification", "palette"]
  },
  {
    id: "sphinx",
    title: "Great Sphinx of Giza",
    description: "Limestone statue of a reclining sphinx",
    date: "c. 2500 BCE",
    tags: ["egypt", "monument", "giza"]
  },
  {
    id: "pyramids-giza",
    title: "Pyramids of Giza",
    description: "Ancient pyramid complex including Khufu, Khafre, and Menkaure",
    date: "c. 2600 BCE",
    tags: ["egypt", "pyramid", "monument"]
  },
  {
    id: " UR",
    title: "Royal Cemetery of Ur",
    description: "Mesopotamian burial site with rich grave goods",
    date: "c. 2600 BCE",
    tags: ["mesopotamia", "burial", "ur"]
  },
  {
    id: "stele-hammurabi",
    title: "Stele of Hammurabi",
    description: "Black basalt stele with law code and image of Hammurabi",
    date: "c. 1754 BCE",
    tags: ["law", "monument", "babylon"]
  },
  {
    id: "enuma-elish",
    title: "Enuma Elish",
    description: "Babylonian creation epic",
    date: "c. 1200 BCE",
    tags: ["epic", "creation", "babylon"]
  },
  {
    id: "isis-temple",
    title: "Temple of Isis",
    description: "Egyptian temple complex at Philae",
    date: "c. 380 BCE",
    tags: ["egypt", "temple", "philae"]
  },
  {
    id: "deir-el-medinah",
    title: "Village of Deir el-Medina",
    description: "Workers village for tomb builders in the Valley of the Kings",
    date: "c. 1500 BCE",
    tags: ["egypt", "village", "workers"]
  },
  {
    id: "amarna-letters",
    title: "Amarna Letters",
    description: "Diplomatic correspondence from ancient Egypt",
    date: "c. 1400 BCE",
    tags: ["egypt", "correspondence", "diplomacy"]
  },
  {
    id: "tutankhamun",
    title: "Tutankhamun",
    description: "Young pharaoh of the 18th dynasty",
    date: "c. 1323 BCE",
    tags: ["egypt", "pharaoh", "new-kingdom"]
  },
  {
    id: "ramses-ii",
    title: "Ramses II",
    description: "Great pharaoh of the New Kingdom, builder of Abu Simbel",
    date: "c. 1279 BCE",
    tags: ["egypt", "pharaoh", "abu-simbel"]
  },
  {
    id: "solomon-temple",
    title: "Temple of Solomon",
    description: "First temple in Jerusalem built by King Solomon",
    date: "c. 950 BCE",
    tags: ["israel", "temple", "jerusalem"]
  }
];
const defaultSettings = {
  yearsContext: 50,
  dataset: "insight",
  viewType: "list"
};
function loadSettings() {
  return defaultSettings;
}
function createSettingsStore() {
  const { subscribe, set, update } = writable(loadSettings());
  return {
    subscribe,
    set: (value) => {
      update((current) => {
        const merged = { ...current, ...value };
        return merged;
      });
    },
    update: (fn) => {
      update((current) => {
        const updated = fn(current);
        return updated;
      });
    },
    reset: () => {
      set(defaultSettings);
    }
  };
}
const settings = createSettingsStore();
export {
  insights as a,
  insight as i,
  settings as s
};
