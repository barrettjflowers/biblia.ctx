import { w as writable } from "./index2.js";
const insights = [
  {
    id: "aaron",
    title: "Aaron",
    description: "The first high priest of Israel, brother of Moses and Miriam, who served as spokesperson for Moses before Pharaoh and participated in the golden calf incident at Sinai.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Aaron/",
    href: "",
    scripture: [],
    date: "1597bce-1474bce",
    tags: []
  },
  {
    id: "abel",
    title: "Abel",
    description: "The second son of Adam and Eve, a shepherd who offered an acceptable sacrifice to God but was murdered by his brother Cain out of jealousy.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Abel/",
    href: "",
    scripture: [],
    date: "c.4026bce-c.3896bce",
    tags: []
  },
  {
    id: "abihu",
    title: "Abihu",
    description: "The second son of Aaron the high priest who, along with his brother Nadab, offered unauthorized fire before the Lord and was consumed by fire from heaven.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Abihu/",
    href: "",
    scripture: [],
    date: "1512bce",
    tags: []
  },
  {
    id: "abraham",
    title: "Abraham",
    description: "The patriarch of the Hebrew people, originally named Abram, who left Ur at God's call and became the father of Isaac through Sarah, with his descendants promised to become a great nation.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Abraham/",
    href: "",
    scripture: [],
    date: "2018bce-1843bce",
    tags: []
  },
  {
    id: "absalom",
    title: "Absalom",
    description: "The third son of King David who rebelled against his father, seized the throne, and was killed in battle while fleeing, having died with his long hair caught in a tree.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Absalom/",
    href: "",
    scripture: [],
    date: "1070bce",
    tags: []
  },
  {
    id: "acts-of-apostles",
    title: "Acts of Apostles",
    description: "The fifth book of the New Testament, written by Luke, documenting the early church's spread from Jerusalem to Rome, the work of the apostles, and the founding of Christian congregations.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Acts-Of-Apostles/",
    href: "",
    scripture: [],
    date: "c.33ce-61ce",
    tags: []
  },
  {
    id: "adam",
    title: "Adam",
    description: "The first human being, created by God in His image, placed in the Garden of Eden, given dominion over creation, and whose disobedience brought sin and death to humanity.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Adam/",
    href: "",
    scripture: [],
    date: "4026bce-3096bce",
    tags: []
  },
  {
    id: "adonijah",
    title: "Adonijah",
    description: "The fourth son of King David who attempted to claim the throne after David's decline, was pardoned by Solomon but later executed for plotting against the king.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Adonijah/",
    href: "",
    scripture: [],
    date: "537bce",
    tags: []
  },
  {
    id: "agabus",
    title: "Agabus",
    description: "A Christian prophet in the early church who predicted a famine during Claudius's reign and later bound Paul with his own belt to symbolize his fate in Jerusalem.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Agabus/",
    href: "",
    scripture: [],
    date: "54ce-c.56ce",
    tags: []
  },
  {
    id: "ahab",
    title: "Ahab",
    description: "The seventh king of Israel (c. 940–910 BCE), notorious for his wickedness, idolatry, marriage to Jezebel, and conflict with the prophet Elijah.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Ahab/",
    href: "",
    scripture: [],
    date: "c.940bce",
    tags: []
  },
  {
    id: "ammonites",
    title: "Ammonites",
    description: "A pagan nation descended from Lot, occupying territory east of Jordan, often hostile to Israel, with Molech worship and involved in battles against Judah's kings.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Ammonites/",
    href: "",
    scripture: [],
    date: "911bce-537bce",
    tags: []
  },
  {
    id: "amos",
    title: "Amos",
    description: "A shepherd from Tekoa who prophesied in Israel around 800 BCE, delivering messages of judgment against the nation's social injustice and empty formalism.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Amos/",
    href: "",
    scripture: [],
    date: "c.804bce",
    tags: []
  },
  {
    id: "antonia-tower-of",
    title: "Antonia, Tower of",
    description: "A fortress in Jerusalem adjoining the temple area, built by the Maccabees and later used by Roman soldiers as a barracks and platform for executions.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Antonia-Tower-Of/",
    href: "",
    scripture: [],
    date: "70ce",
    tags: []
  },
  {
    id: "apocrypha",
    title: "Apocrypha",
    description: "Greek writings from the intertestamental period not included in the Hebrew canon, including Judith, Tobit, Maccabees, and Wisdom literature, some used by early Christians.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Apocrypha/",
    href: "",
    scripture: [],
    date: "c.280bce-70ce",
    tags: []
  },
  {
    id: "aram",
    title: "Aram",
    description: "The region of Syria and upper Mesopotamia, home to the Aramaean people, whose kings fought against Israel and who influenced Israel's language and culture.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Aram/",
    href: "",
    scripture: [],
    date: "1078bce",
    tags: []
  },
  {
    id: "ark-of-the-covenant",
    title: "Ark of the Covenant",
    description: "The sacred chest containing the Ten Commandments, Aaron's rod, and manna, overlaid with gold, topped by the mercy seat, and housed in the Most Holy.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Ark-Of-The-Covenant/",
    href: "",
    scripture: [],
    date: "1467bce-642bce",
    tags: []
  },
  {
    id: "assyria",
    title: "Assyria",
    description: "The powerful empire centered on the Tigris River, which conquered Israel in 740 BCE, exiled the ten tribes, and threatened Judah until its fall in 607 BCE.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Assyria/",
    href: "",
    scripture: [],
    date: "c.1473bce-c.900bce",
    tags: []
  },
  {
    id: "athaliah",
    title: "Athaliah",
    description: "The daughter of Ahab and Jezebel who became queen of Judah by killing her grandchildren, ruling for six years before being overthrown by Jehu.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Athaliah/",
    href: "",
    scripture: [],
    date: "899bce-468bce",
    tags: []
  },
  {
    id: "baal",
    title: "Baal",
    description: "The primary Canaanite fertility god, worshipped in various forms, whose prophets contested with Elijah on Mount Carmel and who was tolerated by many Israelites.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Baal/",
    href: "",
    scripture: [],
    date: "997bce-905bce",
    tags: []
  },
  {
    id: "babel",
    title: "Babel",
    description: "The tower built in Shinar whose construction God frustrated by confusing languages, creating the nations and halting human pride; site identified with Babylon.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Babel/",
    href: "",
    scripture: [],
    date: "2030bce",
    tags: []
  },
  {
    id: "babylon",
    title: "Babylon",
    description: "The great city on the Euphrates, capital of the Chaldean empire that conquered Judah, destroyed the temple, and exiled the Jews for 70 years.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Babylon/",
    href: "",
    scripture: [],
    date: "c.645bce-916ce",
    tags: []
  },
  {
    id: "bashan",
    title: "Bashan",
    description: "The fertile region east of the Jordan, known for its oak forests and strong cattle, taken by the Reubenites, Gadites, and half Manasseh.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Bashan/",
    href: "",
    scripture: [],
    date: "1933bce-759bce",
    tags: []
  },
  {
    id: "belshazzar",
    title: "Belshazzar",
    description: "The last king of Babylon, son of Nebuchadnezzar, who saw the writing on the wall during a feast and was slain that night when Darius took the city.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Belshazzar/",
    href: "",
    scripture: [],
    date: "539bce",
    tags: []
  },
  {
    id: "beth-shean",
    title: "Beth-shean",
    description: "The city in the Jordan Valley where Saul's body was hung after battle, later a significant city in Roman times with a temple to Zeus.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Beth-Shean/",
    href: "",
    scripture: [],
    date: "1467bce-993bce",
    tags: []
  },
  {
    id: "caesar",
    title: "Caesar",
    description: "The title of Roman emperors, mentioned in the Gospels regarding the payment of taxes and in Acts regarding Paul's appeal to Caesar for trial at Rome.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Caesar/",
    href: "",
    scripture: [],
    date: "54ce-117ce",
    tags: []
  },
  {
    id: "caesarea",
    title: "Caesarea",
    description: "A major Roman-built port city on the Mediterranean coast of Palestine, named after Caesar Augustus, serving as the seat of Roman government and location of Peter's first Gentile convert.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Caesarea/",
    href: "",
    scripture: [],
    date: "36ce-70ce",
    tags: []
  },
  {
    id: "capernaum",
    title: "Capernaum",
    description: "A city on the northwestern shore of the Sea of Galilee that became the center of Jesus' Galilean ministry, where he taught in the synagogue and performed many miracles.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Capernaum/",
    href: "",
    scripture: [],
    date: "30ce-32ce",
    tags: []
  },
  {
    id: "chorazin",
    title: "Chorazin",
    description: "A city in Galilee near Capernaum that Jesus condemned for its unbelief despite witnessing his powerful works, along with Bethsaida and Capernaum.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Chorazin/",
    href: "",
    scripture: [],
    date: "32ce",
    tags: []
  },
  {
    id: "congregation",
    title: "Congregation",
    description: "An assembly of people gathered for worship, referring specifically to the nation of Israel and later to the Christian body of believers organized for worship and service.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Congregation/",
    href: "",
    scripture: [],
    date: "33ce-36ce",
    tags: []
  },
  {
    id: "corinth",
    title: "Corinth",
    description: "A major Greek city on the isthmus connecting the Peloponnese to mainland Greece, known for its wealth and immorality, where Paul founded a prominent Christian congregation.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Corinth/",
    href: "",
    scripture: [],
    date: "196bce-56ce",
    tags: []
  },
  {
    id: "cornelius",
    title: "Cornelius",
    description: "A Roman centurion stationed in Caesarea, described as devout and God-fearing, who became the first recorded Gentile convert after Peter received a vision from God.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Cornelius/",
    href: "",
    scripture: [],
    date: "36ce",
    tags: []
  },
  {
    id: "cush",
    title: "Cush",
    description: "The son of Ham and grandson of Noah, from whom the Cushite peoples of Africa, particularly Ethiopia, descended according to the table of nations.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Cush/",
    href: "",
    scripture: [],
    date: "993bce-522bce",
    tags: []
  },
  {
    id: "cyrus",
    title: "Cyrus",
    description: "The Persian king who conquered Babylon in 539 BCE and issued the decree allowing the Jews to return to Jerusalem and rebuild the temple, fulfilling Isaiah's prophecy.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Cyrus/",
    href: "",
    scripture: [],
    date: "559bce-530bce",
    tags: []
  },
  {
    id: "damascus",
    title: "Damascus",
    description: "An ancient city of Syria, one of the oldest continuously inhabited cities, where Saul of Tarsus was converted on the road and where he later preached in the synagogues.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Damascus/",
    href: "",
    scripture: [],
    date: "937bce-33ce",
    tags: []
  },
  {
    id: "daniel-book-of",
    title: "Daniel, Book of",
    description: "A prophetic book of the Hebrew Scriptures written by Daniel, containing accounts of his life in Babylon and visions of world empires, including the prophecy of seventy weeks.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Daniel-Book-Of/",
    href: "",
    scripture: [],
    date: "537bce-c.536bce",
    tags: []
  },
  {
    id: "david",
    title: "David",
    description: "The second king of Israel, a man after God's own heart, who defeated Goliath, united the nation, conquered Jerusalem, and received the covenant for an everlasting kingdom.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/David/",
    href: "",
    scripture: [],
    date: "1077bce",
    tags: []
  },
  {
    id: "david-city-of",
    title: "David, City of",
    description: "Another name for Jerusalem, specifically the original Jebusite stronghold captured by David, which became the capital of the united kingdom and the site of the temple.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/David-City-Of/",
    href: "",
    scripture: [],
    date: "c.135ce",
    tags: []
  },
  {
    id: "deluge",
    title: "Deluge",
    description: "The global Flood in Noah's day, sent by God to destroy all flesh because of human wickedness, from which only eight souls in the ark survived.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Deluge/",
    href: "",
    scripture: [],
    date: "2370bce",
    tags: []
  },
  {
    id: "ecclesiastes",
    title: "Ecclesiastes",
    description: "A book of the Hebrew Scriptures written by Solomon, reflecting on the vanity of human striving apart from God and concluding that fearing God is the whole duty of man.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Ecclesiastes/",
    href: "",
    scripture: [],
    date: "1000bce",
    tags: []
  },
  {
    id: "egypt-egyptian",
    title: "Egypt, Egyptian",
    description: "An ancient nation and civilization along the Nile River, where Abraham, Joseph, and Jacob's family sojourned, and from which the Israelites were delivered through Moses.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Egypt-Egyptian/",
    href: "",
    scripture: [],
    date: "1657bce-70ce",
    tags: []
  },
  {
    id: "elijah",
    title: "Elijah",
    description: "A prophet of the northern kingdom of Israel who confronted King Ahab and Queen Jezebel, defeated the prophets of Baal on Mount Carmel, and was taken to heaven in a whirlwind.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Elijah/",
    href: "",
    scripture: [],
    date: "c.940bce-c.905bce",
    tags: []
  },
  {
    id: "elisha",
    title: "Elisha",
    description: "A prophet of Israel who succeeded Elijah and performed twice as many miracles, including healing Naaman of leprosy and resurrecting the Shunammite woman's son.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Elisha/",
    href: "",
    scripture: [],
    date: "c.917bce-913bce",
    tags: []
  },
  {
    id: "ephesus",
    title: "Ephesus",
    description: "A major city of the Roman province of Asia, site of the temple of Artemis and a prominent Christian congregation to which Paul wrote a letter and addressed from Miletus.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Ephesus/",
    href: "",
    scripture: [],
    date: "356bce-53ce",
    tags: []
  },
  {
    id: "esau",
    title: "Esau",
    description: "The firstborn son of Isaac and Rebekah, twin brother of Jacob, who sold his birthright for a meal and later lost the patriarchal blessing, becoming the ancestor of the Edomites.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Esau/",
    href: "",
    scripture: [],
    date: "1858bce",
    tags: []
  },
  {
    id: "esther-book-of",
    title: "Esther, Book of",
    description: "A book of the Hebrew Scriptures recounting how Queen Esther risked her life to save the Jews from extermination through Haman's plot in Persia.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Esther-Book-Of/",
    href: "",
    scripture: [],
    date: "493bce-475bce",
    tags: []
  },
  {
    id: "ethiopia",
    title: "Ethiopia",
    description: "A region in Africa south of Egypt, often associated with the kingdom of Cush, mentioned in connection with the Ethiopian eunuch baptized by Philip.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Ethiopia/",
    href: "",
    scripture: [],
    date: "246bce",
    tags: []
  },
  {
    id: "exodus",
    title: "Exodus",
    description: "The departure of the Israelites from Egypt under Moses' leadership, a foundational event in Israel's history marked by the ten plagues, Passover, and the crossing of the Red Sea.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Exodus/",
    href: "",
    scripture: [],
    date: "1933bce-1513bce",
    tags: []
  },
  {
    id: "ezekiel",
    title: "Ezekiel",
    description: "A priest and prophet among the Jewish exiles in Babylon, who received visions of God's glory, the valley of dry bones, and a future temple.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Ezekiel/",
    href: "",
    scripture: [],
    date: "617bce-c.591bce",
    tags: []
  },
  {
    id: "ezekiel-book-of",
    title: "Ezekiel, Book of",
    description: "A prophetic book of the Hebrew Scriptures written by Ezekiel, containing messages of judgment on Jerusalem and surrounding nations, and visions of restoration and a future temple.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Ezekiel-Book-Of/",
    href: "",
    scripture: [],
    date: "c.591bce",
    tags: []
  },
  {
    id: "ezion-geber",
    title: "Ezion-geber",
    description: "A port city at the northern tip of the Gulf of Aqaba, used by Solomon for ships that sailed to Ophir for gold, and associated with Israel's wilderness journey.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Ezion-Geber/",
    href: "",
    scripture: [],
    date: "998bce-c.911bce",
    tags: []
  },
  {
    id: "ezra",
    title: "Ezra",
    description: "A priest and scribe who led a group of exiles from Babylon to Jerusalem, taught the Law to the people, and helped restore proper worship in the post-exilic period.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Ezra/",
    href: "",
    scripture: [],
    date: "537bce",
    tags: []
  },
  {
    id: "festus",
    title: "Festus",
    description: "Porcius Festus, the Roman governor of Judea who succeeded Felix and heard Paul's defense, deciding to send Paul to Caesar at his appeal.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Festus/",
    href: "",
    scripture: [],
    date: "54ce-58ce",
    tags: []
  },
  {
    id: "firstfruits",
    title: "Firstfruits",
    description: "The first portion of the harvest offered to God, symbolizing dedication of the whole, and used in the New Testament for Christ's resurrection and the early believers.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Firstfruits/",
    href: "",
    scripture: [],
    date: "33ce",
    tags: []
  },
  {
    id: "galatia",
    title: "Galatia",
    description: "A region in central Asia Minor where Paul established Christian congregations, to whom he addressed his letter emphasizing justification by faith rather than Law observance.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Galatia/",
    href: "",
    scripture: [],
    date: "c.277bce",
    tags: []
  },
  {
    id: "galilee",
    title: "Galilee",
    description: "The northern region of Palestine, the main area of Jesus' ministry, where he called his disciples, performed many miracles, and appeared after his resurrection.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Galilee/",
    href: "",
    scripture: [],
    date: "c.32ce",
    tags: []
  },
  {
    id: "genesis-book-of",
    title: "Genesis, Book of",
    description: "The first book of the Bible, written by Moses, covering creation, the fall of man, the Flood, and the patriarchal history of Abraham, Isaac, Jacob, and Joseph.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Genesis-Book-Of/",
    href: "",
    scripture: [],
    date: "1657bce-1513bce",
    tags: []
  },
  {
    id: "gethsemane",
    title: "Gethsemane",
    description: "A garden at the foot of the Mount of Olives where Jesus prayed in agony the night before his crucifixion and where he was betrayed by Judas and arrested.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Gethsemane/",
    href: "",
    scripture: [],
    date: "33ce-c.70ce",
    tags: []
  },
  {
    id: "gilead",
    title: "Gilead",
    description: "A region east of the Jordan River, known for its balm and fertile pastures, allotted to the tribes of Reuben, Gad, and half of Manasseh.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Gilead/",
    href: "",
    scripture: [],
    date: "997bce-759bce",
    tags: []
  },
  {
    id: "hazael",
    title: "Hazael",
    description: "A Syrian king whom Elijah anointed as Hazael, who later became king of Damascus and oppressed Israel during Elisha's time.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Hazael/",
    href: "",
    scripture: [],
    date: "905bce-845bce",
    tags: []
  },
  {
    id: "hebrews-letter-to-the",
    title: "Hebrews, Letter to the",
    description: "A letter of the Christian Greek Scriptures, likely written by Paul, demonstrating the superiority of Christ and the new covenant over the Mosaic Law.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Hebrews-Letter-To-The/",
    href: "",
    scripture: [],
    date: "c.61ce-70ce",
    tags: []
  },
  {
    id: "hebrew-scriptures",
    title: "Hebrew Scriptures",
    description: "The 39 books of the Bible written in Hebrew and Aramaic, forming the Old Testament canon, recording God's dealings with Israel and containing messianic prophecies.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Hebrew-Scriptures/",
    href: "",
    scripture: [],
    date: "c.280bce",
    tags: []
  },
  {
    id: "herod-party-followers-of",
    title: "Herod, Party Followers of",
    description: "A political faction among the Jews during Jesus' time who supported the Herodian dynasty and collaborated with the Romans, often opposing Jesus.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Herod-Party-Followers-Of/",
    href: "",
    scripture: [],
    date: "31ce",
    tags: []
  },
  {
    id: "herodias",
    title: "Herodias",
    description: "The granddaughter of Herod the Great who married her uncle Herod Philip and later her other uncle Herod Antipas, leading to John the Baptist's condemnation and execution.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Herodias/",
    href: "",
    scripture: [],
    date: "32ce-38ce",
    tags: []
  },
  {
    id: "hezekiah",
    title: "Hezekiah",
    description: "A righteous king of Judah who instituted religious reforms, trusted in God against the Assyrian invasion, and was granted an extension of 15 years of life.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Hezekiah/",
    href: "",
    scripture: [],
    date: "732bce-717bce",
    tags: []
  },
  {
    id: "hittites",
    title: "Hittites",
    description: "An ancient people of Anatolia who established a powerful empire, appearing in the Bible as inhabitants of Canaan and as one of the nations Israel was to dispossess.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Hittites/",
    href: "",
    scripture: [],
    date: "905bce-537bce",
    tags: []
  },
  {
    id: "isaac",
    title: "Isaac",
    description: "The son of Abraham and Sarah, born when they were old, the child of promise through whom the covenant line continued, and who was nearly offered as a sacrifice.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Isaac/",
    href: "",
    scripture: [],
    date: "1738bce-1513bce",
    tags: []
  },
  {
    id: "jacob",
    title: "Jacob",
    description: "The son of Isaac and Rebekah, who received the birthright and blessing from his father, fathered the 12 tribes of Israel, and was renamed Israel.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Jacob/",
    href: "",
    scripture: [],
    date: "1858bce-1711bce",
    tags: []
  },
  {
    id: "jehovah",
    title: "Jehovah",
    description: "The personal name of God, meaning He Causes to Become, revealed to Moses at the burning bush and used nearly 7,000 times in the Hebrew Scriptures.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Jehovah/",
    href: "",
    scripture: [],
    date: "537bce-384ce",
    tags: []
  },
  {
    id: "jephthah",
    title: "Jephthah",
    description: "A judge of Israel who delivered the nation from Ammonite oppression and made a vow that resulted in his daughter spending her life in sacred service.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Jephthah/",
    href: "",
    scripture: [],
    date: "c.1173bce",
    tags: []
  },
  {
    id: "jericho",
    title: "Jericho",
    description: "An ancient city west of the Jordan River, the first city conquered by Israel under Joshua through miraculous collapse of its walls, later rebuilt in disobedience.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Jericho/",
    href: "",
    scripture: [],
    date: "1473bce-607bce",
    tags: []
  },
  {
    id: "jeroboam",
    title: "Jeroboam",
    description: "The first king of the northern ten tribes after the kingdom divided, who established calf worship at Dan and Bethel to prevent his subjects from going to Jerusalem.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Jeroboam/",
    href: "",
    scripture: [],
    date: "c.998bce-c.792bce",
    tags: []
  },
  {
    id: "jerusalem",
    title: "Jerusalem",
    description: "The capital city of Israel, chosen by God as the place for His name to dwell, site of the temple, and the city where Jesus was crucified and resurrected.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Jerusalem/",
    href: "",
    scripture: [],
    date: "1070bce-70ce",
    tags: []
  },
  {
    id: "jesus-christ",
    title: "Jesus Christ",
    description: "The Son of God, the promised Messiah, who lived a perfect life, died sacrificially for humanity's sins, was resurrected, and now rules as King at God's right hand.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Jesus-Christ/",
    href: "",
    scripture: [],
    date: "12ce-c.29ce",
    tags: []
  },
  {
    id: "job",
    title: "Job",
    description: "A man from Uz who suffered severe trials but maintained his integrity, proving Satan's challenge wrong and receiving double blessings from God.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Job/",
    href: "",
    scripture: [],
    date: "1657bce-c.1613bce",
    tags: []
  },
  {
    id: "john-good-news-according-to",
    title: "John, Good News According to",
    description: "The fourth Gospel, written by the apostle John, emphasizing Jesus' divinity and featuring his discourses, signs, and the I AM statements.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/John-Good-News-According-To/",
    href: "",
    scripture: [],
    date: "c.44ce-c.98ce",
    tags: []
  },
  {
    id: "jubilee",
    title: "Jubilee",
    description: "The 50th year proclaimed by trumpet throughout Israel, when debts were forgiven, slaves were freed, and ancestral lands were returned to their original owners.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Jubilee/",
    href: "",
    scripture: [],
    date: "1424bce-33ce",
    tags: []
  },
  {
    id: "judea",
    title: "Judea",
    description: "The southern region of Palestine, the territory of the tribe of Judah, where Jerusalem was located and which became a Roman province during Jesus' time.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Judea/",
    href: "",
    scripture: [],
    date: "66ce-70ce",
    tags: []
  },
  {
    id: "lachish",
    title: "Lachish",
    description: "A fortified city in Judah, captured by the Assyrians under Sennacherib, whose siege is recorded in both the Bible and Assyrian inscriptions.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Lachish/",
    href: "",
    scripture: [],
    date: "981bce-607bce",
    tags: []
  },
  {
    id: "lords-evening-meal",
    title: "Lord's Evening Meal",
    description: "The memorial of Christ's death instituted by Jesus on the night of his betrayal, observed with unleavened bread and wine, commemorating his sacrifice.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Lords-Evening-Meal/",
    href: "",
    scripture: [],
    date: "33ce",
    tags: []
  },
  {
    id: "luke",
    title: "Luke",
    description: "A physician and companion of the apostle Paul, who wrote both the Gospel of Luke and the Acts of the Apostles, providing a detailed account of early Christian history.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Luke/",
    href: "",
    scripture: [],
    date: "33ce-61ce",
    tags: []
  },
  {
    id: "lystra",
    title: "Lystra",
    description: "A city in Lycaonia where Paul and Barnabas preached and where Paul was stoned and left for dead, also the home of Timothy.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Lystra/",
    href: "",
    scripture: [],
    date: "49ce",
    tags: []
  },
  {
    id: "maher-shalal-hash-baz",
    title: "Maher-shalal-hash-baz",
    description: "A symbolic name meaning Swift Is the Booty, Fast Is the Plunder, given to Isaiah's son as a prophecy of Assyria's impending conquest.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Maher-Shalal-Hash-Baz/",
    href: "",
    scripture: [],
    date: "740bce",
    tags: []
  },
  {
    id: "man",
    title: "Man",
    description: "A human being, male or female, created in God's image, with man specifically referring to the male of the species and the human race collectively.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Man/",
    href: "",
    scripture: [],
    date: "4026bce",
    tags: []
  },
  {
    id: "matthew-good-news-according-to",
    title: "Matthew, Good News According to",
    description: "The first Gospel, written by the tax collector Matthew, emphasizing Jesus as the promised Messiah and fulfillment of Hebrew prophecies.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Matthew-Good-News-According-To/",
    href: "",
    scripture: [],
    date: "33ce-70ce",
    tags: []
  },
  {
    id: "medes-media",
    title: "Medes, Media",
    description: "An ancient people from the region of Media in northwestern Iran, who joined the Persians in conquering Babylon and are mentioned in Daniel's prophecies.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Medes-Media/",
    href: "",
    scripture: [],
    date: "877bce",
    tags: []
  },
  {
    id: "melchizedek",
    title: "Melchizedek",
    description: "The king of Salem and priest of God Most High who blessed Abraham, a type of Christ who is a priest forever according to the order of Melchizedek.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Melchizedek/",
    href: "",
    scripture: [],
    date: "1933bce",
    tags: []
  },
  {
    id: "moses",
    title: "Moses",
    description: "The great prophet and leader who delivered Israel from Egypt, received the Law at Sinai, led the nation through the wilderness, and wrote the Pentateuch.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Moses/",
    href: "",
    scripture: [],
    date: "1593bce-1473bce",
    tags: []
  },
  {
    id: "nabonidus",
    title: "Nabonidus",
    description: "The last king of Babylon, father of Belshazzar, who spent much of his reign away from the capital while his son ruled as coregent.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Nabonidus/",
    href: "",
    scripture: [],
    date: "c.539bce-522bce",
    tags: []
  },
  {
    id: "nain",
    title: "Nain",
    description: "A village in Galilee where Jesus resurrected the only son of a widow, demonstrating his power over death and compassion for the grieving.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Nain/",
    href: "",
    scripture: [],
    date: "31ce",
    tags: []
  },
  {
    id: "nebuchadnezzar",
    title: "Nebuchadnezzar",
    description: "The king of Babylon who destroyed Jerusalem and the temple, took the Jews into exile, and later acknowledged God's sovereignty after being humbled.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Nebuchadnezzar/",
    href: "",
    scripture: [],
    date: "588bce-582bce",
    tags: []
  },
  {
    id: "nehemiah",
    title: "Nehemiah",
    description: "A Jewish cupbearer to the Persian king Artaxerxes who received permission to rebuild Jerusalem's walls and later served as governor of Judah.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Nehemiah/",
    href: "",
    scripture: [],
    date: "455bce",
    tags: []
  },
  {
    id: "nehemiah-book-of",
    title: "Nehemiah, Book of",
    description: "The biblical book recounting Nehemiah's efforts to rebuild Jerusalem's walls and restore proper worship among the returned exiles.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Nehemiah-Book-Of/",
    href: "",
    scripture: [],
    date: "455bce-443bce",
    tags: []
  },
  {
    id: "nineveh",
    title: "Nineveh",
    description: "The capital of the Assyrian Empire, a great city to which God sent Jonah to call for repentance, which led to the city's temporary sparing from destruction.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Nineveh/",
    href: "",
    scripture: [],
    date: "632bce-625bce",
    tags: []
  },
  {
    id: "noah",
    title: "Noah",
    description: "A righteous man who found favor with God, built the ark to preserve his family and animal life through the global Flood, and became a prophet and preacher of righteousness.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Noah/",
    href: "",
    scripture: [],
    date: "2970bce-2020bce",
    tags: []
  },
  {
    id: "palestine",
    title: "Palestine",
    description: "The land area between the Mediterranean Sea and the Jordan River, named after the Philistines, the biblical Promised Land of Israel.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Palestine/",
    href: "",
    scripture: [],
    date: "638ce",
    tags: []
  },
  {
    id: "paul",
    title: "Paul",
    description: "Formerly Saul of Tarsus, a persecutor of Christians who converted on the road to Damascus and became the apostle to the Gentiles, writing 14 letters of the Christian Scriptures.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Paul/",
    href: "",
    scripture: [],
    date: "33ce-36ce",
    tags: []
  },
  {
    id: "pentateuch",
    title: "Pentateuch",
    description: "The first five books of the Bible, Genesis through Deuteronomy, written by Moses, containing the Law and the foundational history of Israel.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Pentateuch/",
    href: "",
    scripture: [],
    date: "1657bce-c.1473bce",
    tags: []
  },
  {
    id: "pentecost",
    title: "Pentecost",
    description: "A Jewish festival occurring 50 days after Passover, when the holy spirit was poured out on the disciples in Jerusalem, marking the beginning of the Christian congregation.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Pentecost/",
    href: "",
    scripture: [],
    date: "33ce",
    tags: []
  },
  {
    id: "pergamum",
    title: "Pergamum",
    description: "A city in Asia Minor, site of one of the seven congregations in Revelation, known for its library and as a center of pagan worship.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Pergamum/",
    href: "",
    scripture: [],
    date: "c.420bce-133bce",
    tags: []
  },
  {
    id: "persia-persians",
    title: "Persia, Persians",
    description: "An empire that succeeded Babylon under Cyrus the Great, allowing the Jews to return to their homeland, and later figured in prophecies of Daniel.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Persia-Persians/",
    href: "",
    scripture: [],
    date: "550bce-331bce",
    tags: []
  },
  {
    id: "peter",
    title: "Peter",
    description: "One of the 12 apostles of Jesus, originally named Simon, a fisherman who became a leading figure in the early Christian congregation and wrote two epistles.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Peter/",
    href: "",
    scripture: [],
    date: "33ce-49ce",
    tags: []
  },
  {
    id: "phoenicia",
    title: "Phoenicia",
    description: "A coastal region north of Israel, known for seafaring trade and the cities of Tyre and Sidon, whose inhabitants were Canaanites.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Phoenicia/",
    href: "",
    scripture: [],
    date: "31ce-c.58ce",
    tags: []
  },
  {
    id: "pilate",
    title: "Pilate",
    description: "Pontius Pilate, the Roman governor of Judea who presided over Jesus' trial and authorized his crucifixion, later overthrown by the Romans.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Pilate/",
    href: "",
    scripture: [],
    date: "26ce-37ce",
    tags: []
  },
  {
    id: "proselyte",
    title: "Proselyte",
    description: "A convert to Judaism from among the Gentiles who adopted Jewish religious practices, mentioned in the Gospels and Acts.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Proselyte/",
    href: "",
    scripture: [],
    date: "c.125bce-36ce",
    tags: []
  },
  {
    id: "proverbs-book-of",
    title: "Proverbs, Book of",
    description: "A book of the Hebrew Scriptures containing wise sayings, largely from Solomon, offering practical guidance for godly living.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Proverbs-Book-Of/",
    href: "",
    scripture: [],
    date: "717bce",
    tags: []
  },
  {
    id: "psalms-book-of",
    title: "Psalms, Book of",
    description: "A book of the Hebrew Scriptures containing 150 songs and prayers used in Israelite worship, written primarily by David and other inspired composers.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Psalms-Book-Of/",
    href: "",
    scripture: [],
    date: "50ce",
    tags: []
  },
  {
    id: "purim",
    title: "Purim",
    description: "A Jewish festival commemorating the deliverance of the Jews from Haman's plot, as recorded in the book of Esther.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Purim/",
    href: "",
    scripture: [],
    date: "484bce-31ce",
    tags: []
  },
  {
    id: "quirinius",
    title: "Quirinius",
    description: "Publius Sulpicius Quirinius, the Roman governor of Syria who conducted the census that brought Joseph and Mary to Bethlehem for Jesus' birth.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Quirinius/",
    href: "",
    scripture: [],
    date: "21ce-c.49ce",
    tags: []
  },
  {
    id: "rachel",
    title: "Rachel",
    description: "The beloved wife of Jacob, mother of Joseph and Benjamin, who died giving birth to Benjamin and was buried on the road to Bethlehem.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Rachel/",
    href: "",
    scripture: [],
    date: "1781bce",
    tags: []
  },
  {
    id: "rahab",
    title: "Rahab",
    description: "A prostitute of Jericho who hid the Israelite spies and was spared when the city was destroyed, becoming an ancestor of Jesus.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Rahab/",
    href: "",
    scripture: [],
    date: "1473bce",
    tags: []
  },
  {
    id: "revelation-to-john",
    title: "Revelation to John",
    description: "The last book of the Bible, written by the apostle John, revealing future events through symbolic visions, including the end of Satan's system and the new creation.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Revelation-To-John/",
    href: "",
    scripture: [],
    date: "c.96ce",
    tags: []
  },
  {
    id: "sabbath-year",
    title: "Sabbath Year",
    description: "Every seventh year when the land was to lie fallow and debts were to be released, as commanded in the Mosaic Law.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Sabbath-Year/",
    href: "",
    scripture: [],
    date: "1473bce",
    tags: []
  },
  {
    id: "samaria",
    title: "Samaria",
    description: "The capital of the northern kingdom of Israel, built by Omri, and later a Roman city where Philip preached and Simon the sorcerer practiced.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Samaria/",
    href: "",
    scripture: [],
    date: "742bce-740bce",
    tags: []
  },
  {
    id: "samaritan",
    title: "Samaritan",
    description: "An inhabitant of Samaria, regarded by Jews as heretical, but featured in Jesus' parable of the good Samaritan as an example of neighborly love.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Samaritan/",
    href: "",
    scripture: [],
    date: "740bce-537bce",
    tags: []
  },
  {
    id: "sardis",
    title: "Sardis",
    description: "An ancient city in Asia Minor, site of one of the seven congregations in Revelation, criticized for having a reputation of being alive but being dead.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Sardis/",
    href: "",
    scripture: [],
    date: "334bce-17ce",
    tags: []
  },
  {
    id: "sennacherib",
    title: "Sennacherib",
    description: "The Assyrian king who invaded Judah during Hezekiah's reign and besieged Jerusalem, but withdrew after 185,000 of his soldiers were killed by an angel.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Sennacherib/",
    href: "",
    scripture: [],
    date: "732bce",
    tags: []
  },
  {
    id: "seth",
    title: "Seth",
    description: "The third son of Adam and Eve, born after Abel's death, through whom the promised line of descendants leading to the Messiah continued.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Seth/",
    href: "",
    scripture: [],
    date: "2984bce",
    tags: []
  },
  {
    id: "shem",
    title: "Shem",
    description: "The oldest son of Noah who was blessed along with his brothers after the Flood, and from whom the Semitic peoples, including the Israelites, descended.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Shem/",
    href: "",
    scripture: [],
    date: "2468bce-1868bce",
    tags: []
  },
  {
    id: "shishak",
    title: "Shishak",
    description: "An Egyptian pharaoh who invaded Judah during Rehoboam's reign and plundered the temple and royal treasures.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Shishak/",
    href: "",
    scripture: [],
    date: "993bce",
    tags: []
  },
  {
    id: "sisera",
    title: "Sisera",
    description: "The commander of the Canaanite army under King Jabin who was defeated by Deborah and Barak and killed by Jael with a tent peg.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Sisera/",
    href: "",
    scripture: [],
    date: "537bce",
    tags: []
  },
  {
    id: "smyrna",
    title: "Smyrna",
    description: "An ancient city in Asia Minor, site of one of the seven congregations in Revelation, commended for its faithfulness under persecution.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Smyrna/",
    href: "",
    scripture: [],
    date: "c.580bce",
    tags: []
  },
  {
    id: "solomon",
    title: "Solomon",
    description: "The son of David and Bathsheba, king of Israel, renowned for his wisdom, wealth, and building the temple, but later led into idolatry by his foreign wives.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Solomon/",
    href: "",
    scripture: [],
    date: "1014bce-998bce",
    tags: []
  },
  {
    id: "stoics",
    title: "Stoics",
    description: "Followers of a Greek philosophy that emphasized self-control and virtue, some of whom encountered Paul in Athens and heard him speak on the Areopagus.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Stoics/",
    href: "",
    scripture: [],
    date: "c.300bce-c.300ce",
    tags: []
  },
  {
    id: "syria",
    title: "Syria",
    description: "A region north of Israel, also called Aram, whose capital was Damascus, often in conflict with Israel and mentioned in connection with the conversion of Saul.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Syria/",
    href: "",
    scripture: [],
    date: "c.46ce",
    tags: []
  },
  {
    id: "thessalonica",
    title: "Thessalonica",
    description: "A major city in Macedonia where Paul established a congregation, to whom he wrote two letters addressing the Lord's return.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Thessalonica/",
    href: "",
    scripture: [],
    date: "315bce-c.50ce",
    tags: []
  },
  {
    id: "thyatira",
    title: "Thyatira",
    description: "A city in Asia Minor, site of one of the seven congregations in Revelation, commended for love and faith but warned about tolerating false teaching.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Thyatira/",
    href: "",
    scripture: [],
    date: "55ce",
    tags: []
  },
  {
    id: "transfiguration",
    title: "Transfiguration",
    description: "The event where Jesus was transformed before Peter, James, and John, appearing in glory with Moses and Elijah, confirming his divine sonship.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Transfiguration/",
    href: "",
    scripture: [],
    date: "32ce",
    tags: []
  },
  {
    id: "uzziah",
    title: "Uzziah",
    description: "A king of Judah who reigned for 52 years, known for his military strength and building projects, but struck with leprosy for burning incense in the temple.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Uzziah/",
    href: "",
    scripture: [],
    date: "778bce",
    tags: []
  },
  {
    id: "zerubbabel",
    title: "Zerubbabel",
    description: "A descendant of David who led the first group of Jewish exiles back from Babylon and oversaw the rebuilding of the temple in Jerusalem.",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Zerubbabel/",
    href: "",
    scripture: [],
    date: "537bce-515bce",
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
const luke = [
  {
    id: "adam-created",
    title: "Adam created",
    description: "Adam created",
    source: "https://www.jw.org/finder?wtlocale=E&docid=1200000970&srctype=wol&srcid=share&par=114",
    href: "https://cms-imgp.jw-cdn.org/img/p/1102005136/univ/art/1102005136_univ_cnt_3_xl.jpg",
    scripture: [],
    date: "4026bce",
    tags: []
  },
  {
    id: "flood-started",
    title: "Flood started",
    description: "Flood started",
    source: "https://www.jw.org/finder?wtlocale=E&docid=1200000970&srctype=wol&srcid=share&par=117",
    href: "https://cms-imgp.jw-cdn.org/img/p/1102009453/univ/art/1102009453_univ_lsr_xl.jpg",
    scripture: [],
    date: "2370bce",
    tags: []
  },
  {
    id: "flood-stops-raining",
    title: "Flood stops raining",
    description: "Flood stops raining",
    source: "https://www.jw.org/finder?wtlocale=E&docid=2013566&srctype=wol&srcid=share&par=17",
    href: "",
    scripture: [],
    date: "2370bce",
    tags: []
  },
  {
    id: "john-the-baptist-ministry",
    title: "John the Baptist begins his ministry",
    description: "John the Baptist begins his ministry",
    source: "https://wol.jw.org/en/wol/dx/r1/lp-e/1001070146/25130",
    href: "",
    scripture: [],
    date: "29ce",
    tags: []
  },
  {
    id: "jesus-baptized",
    title: "Jesus baptized",
    description: "Jesus baptized",
    source: "https://wol.jw.org/en/wol/d/r1/lp-e/1200002451#h=34:0-34:283",
    href: "https://wol.jw.org/en/wol/mp/r1/lp-e/lfb/2017/727",
    scripture: [],
    date: "c.29ce",
    tags: []
  },
  {
    id: "exodus-begins",
    title: "Exodus from Egypt begins",
    description: "Exodus from Egypt begins",
    source: "https://www.jw.org/finder?wtlocale=E&docid=1200000970&srctype=wol&srcid=share&par=123",
    href: "https://cms-imgp.jw-cdn.org/img/p/202020243/univ/art/202020243_univ_lsr_xl.jpg",
    scripture: [],
    date: "1513bce",
    tags: []
  },
  {
    id: "david-born",
    title: "David born",
    description: "David born",
    source: "https://www.jw.org/en/library/books/Insight-on-the-Scriptures/Chronology/#p260-p261",
    href: "",
    scripture: [],
    date: "1107bce",
    tags: []
  },
  {
    id: "samuel-finished-judges",
    title: "Samuel finished writing Judges",
    description: "Samuel finished writing Judges",
    source: "https://www.jw.org/finder?wtlocale=E&docid=1200000970&srctype=wol&srcid=share&par=262-263",
    href: "",
    scripture: [],
    date: "c.1100bce",
    tags: []
  },
  {
    id: "samuel-finished-ruth",
    title: "Samuel finished writing Ruth",
    description: "Samuel finished writing Ruth",
    source: "https://www.jw.org/finder?wtlocale=E&docid=1200000970&srctype=wol&srcid=share&par=264-265",
    href: "",
    scripture: [],
    date: "c.1090bce",
    tags: []
  },
  {
    id: "writing-of-1-samuel",
    title: "Writing of 1 Samuel finished",
    description: "Writing of 1 Samuel finished",
    source: "https://www.jw.org/finder?wtlocale=E&docid=1200000970&srctype=wol&srcid=share&par=266-267",
    href: "",
    scripture: [],
    date: "c.1078bce",
    tags: []
  },
  {
    id: "jehoiachin-captivity",
    title: "Babylon brings King Jehoiachin and captives from Judah to Babylon",
    description: "Babylon brings King Jehoiachin and captives from Judah to Babylon",
    source: "https://www.jw.org/finder?wtlocale=E&docid=1200003690&srctype=wol&srcid=share&par=5",
    href: "",
    scripture: [],
    date: "617bce",
    tags: []
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
  luke as l,
  settings as s
};
