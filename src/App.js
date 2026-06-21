import { useState, useRef, useEffect, useCallback } from "react";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://lilzeudpdbweeeawisoz.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxpbHpldWRwZGJ3ZWVlYXdpc296Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEzMDg0MTIsImV4cCI6MjA5Njg4NDQxMn0.NLvcUb88onb3iLed1nch5TleIi9isXuCilk2BwmLTrM";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const CLASS_HISTORY = [
  {class_name:"Founding Mother",semester:"April 1998",nmd:null,nme:null,president:null},
  {class_name:"Charter",semester:"Fall 1998",nmd:null,nme:null,president:null},
  {class_name:"Alpha",semester:"Spring 1999",nmd:null,nme:null,president:null},
  {class_name:"Beta",semester:"Fall 1999",nmd:null,nme:null,president:null},
  {class_name:"Gamma",semester:"2000",nmd:null,nme:null,president:null},
  {class_name:"Delta",semester:"Fall 2001",nmd:null,nme:null,president:null},
  {class_name:"Epsilon",semester:"2002",nmd:null,nme:null,president:null},
  {class_name:"Zeta",semester:"~2003",nmd:null,nme:null,president:null},
  {class_name:"Eta",semester:"Fall 2004",nmd:null,nme:null,president:null},
  {class_name:"Theta",semester:"Fall 2005",nmd:null,nme:null,president:null},
  {class_name:"Iota",semester:"Spring 2006",nmd:null,nme:null,president:null},
  {class_name:"Kappa",semester:"Fall 2006",nmd:null,nme:null,president:null},
  {class_name:"Lambda",semester:"Spring 2007",nmd:null,nme:null,president:null},
  {class_name:"Mu",semester:"Fall 2007",nmd:null,nme:null,president:null},
  {class_name:"Nu",semester:"Spring 2008",nmd:null,nme:null,president:null},
  {class_name:"Xi",semester:"Fall 2008",nmd:null,nme:null,president:null},
  {class_name:"Omicron",semester:"Spring 2009",nmd:null,nme:null,president:null},
  {class_name:"Pi",semester:"Fall 2009",nmd:null,nme:null,president:null},
  {class_name:"Rho",semester:"Fall 2010",nmd:"Irene Yi-Ling Yang",nme:null,president:null},
  {class_name:"Sigma",semester:"Spring 2011",nmd:null,nme:null,president:null},
  {class_name:"Tau",semester:"Fall 2011",nmd:"Irene Yi-Ling Yang",nme:null,president:null},
  {class_name:"Upsilon",semester:"Fall 2012",nmd:"Cindy Nguyen",nme:null,president:"Lizzy Hall"},
  {class_name:"Phi",semester:"Spring 2013",nmd:"Alysia Thao",nme:null,president:"Lizzy Hall"},
  {class_name:"Chi",semester:"Fall 2013",nmd:"Elizabeth Hall",nme:null,president:"Jessica Pham"},
  {class_name:"Psi",semester:"Spring 2014",nmd:"Lydia Chang",nme:null,president:"Jessica Pham"},
  {class_name:"Alpha Alpha",semester:"Fall 2014",nmd:"Cecilia Ko",nme:"Esther Shim",president:"Angela Adams"},
  {class_name:"Alpha Beta",semester:"Fall 2015",nmd:"Phenix Tang",nme:"Mabel Xu",president:"Mabel Xu"},
  {class_name:"Alpha Gamma",semester:"Fall 2016",nmd:"Teresa Tran",nme:"Dianna Wong",president:"Stephanie Ujjin"},
  {class_name:"Alpha Delta",semester:"Spring 2017",nmd:"Siyu Lin",nme:"Ivy Hu",president:"Stephanie Ujjin"},
  {class_name:"Alpha Epsilon",semester:"Fall 2017",nmd:"Ivy Hu",nme:"Rachel Xu",president:"Teresa Tran"},
  {class_name:"Alpha Zeta",semester:"Spring 2018",nmd:"Thunwa Klaihathai",nme:"Eva Wei",president:"Teresa Tran"},
  {class_name:"Alpha Eta",semester:"Fall 2018",nmd:"Yulanda Huang",nme:"Ivy Hu",president:"Thunwa Klaihathai"},
  {class_name:"Alpha Theta",semester:"Spring 2019",nmd:"Leslie Tran",nme:"Ava Wei",president:"Thunwa Klaihathai"},
  {class_name:"Alpha Iota",semester:"Fall 2019",nmd:"Kelsey Kim",nme:"Tiffany Chan",president:"Yulanda Huang"},
  {class_name:"Alpha Kappa",semester:"Spring 2020",nmd:"Reina Garrett",nme:"Sejal Mistry",president:"Yulanda Huang"},
  {class_name:"Alpha Lambda",semester:"Spring 2021",nmd:"Jenny Nguyen",nme:"Hanna Zheng",president:"Sejal Mistry"},
  {class_name:"Alpha Mu",semester:"Fall 2021",nmd:"Ashley Go",nme:"Danny Wang",president:"Alyssa Lombres"},
  {class_name:"Alpha Nu",semester:"Spring 2022",nmd:"Karen Lu",nme:"Elyssa Levitt",president:"Alyssa Lombres"},
  {class_name:"Alpha Xi",semester:"Fall 2022",nmd:"Katelyn Li",nme:"Lise Xu",president:"Anna Zheng"},
  {class_name:"Alpha Omicron",semester:"Spring 2023",nmd:"Savannah Young",nme:"Eujin Kang",president:"Anna Zheng"},
  {class_name:"Alpha Pi",semester:"Fall 2023",nmd:"Jani Christopher",nme:"Camille Argarin",president:"Savannah Young"},
  {class_name:"Alpha Rho",semester:"Spring 2024",nmd:"Janellyn Bong",nme:"Muriel Ren",president:"Savannah Young"},
  {class_name:"Alpha Sigma",semester:"Fall 2024",nmd:"Nitya Neema",nme:"Vina Bui",president:"Grace Conn"},
  {class_name:"Alpha Tau",semester:"Spring 2025",nmd:"Thaomy Pham",nme:"Michelle Jasadipura",president:"Grace Conn"},
  {class_name:"Alpha Upsilon",semester:"Fall 2025",nmd:"Angie Lin",nme:"Tina Ngo",president:"Simone Cho"},
  {class_name:"Alpha Phi",semester:"Spring 2026",nmd:"Saahithya Gutta",nme:"Samantha Ferrer-Smallwood",president:"Simone Cho"},
];

const ASR_MEMBERS = [
  {id:"FM1",name:"Irene Hsiao Chuan Chien",nickname:null,class_name:"Founding Mother",semester:"April 1998",bigId:null,dynasty:null,lineNumber:1,delettered:false},
  {id:"FM2",name:"Sandra Chu",nickname:null,class_name:"Founding Mother",semester:"April 1998",bigId:null,dynasty:null,lineNumber:2,delettered:false},
  {id:"FM3",name:"Young Jeon",nickname:null,class_name:"Founding Mother",semester:"April 1998",bigId:null,dynasty:null,lineNumber:3,delettered:false},
  {id:"FM4",name:"Debbie Kwon",nickname:null,class_name:"Founding Mother",semester:"April 1998",bigId:null,dynasty:null,lineNumber:4,delettered:false},
  {id:"FM5",name:"Angela Mai Lu",nickname:null,class_name:"Founding Mother",semester:"April 1998",bigId:null,dynasty:null,lineNumber:5,delettered:false},
  {id:"FM6",name:"Lynn Nguyen",nickname:null,class_name:"Founding Mother",semester:"April 1998",bigId:null,dynasty:null,lineNumber:6,delettered:false},
  {id:"FM7",name:"Yalin Anne See",nickname:null,class_name:"Founding Mother",semester:"April 1998",bigId:null,dynasty:"Lola",lineNumber:7,delettered:false},
  {id:"FM8",name:"Yeon Gyo Anna Suh",nickname:null,class_name:"Founding Mother",semester:"April 1998",bigId:null,dynasty:null,lineNumber:8,delettered:false},
  {id:"FM9",name:"Juliette Cheng Taylor",nickname:null,class_name:"Founding Mother",semester:"April 1998",bigId:null,dynasty:null,lineNumber:9,delettered:false},
  {id:"FM10",name:"Jessica Yoo",nickname:null,class_name:"Founding Mother",semester:"April 1998",bigId:null,dynasty:null,lineNumber:10,delettered:false},
  {id:"FM11",name:"Suzanne Yoo",nickname:null,class_name:"Founding Mother",semester:"April 1998",bigId:null,dynasty:null,lineNumber:11,delettered:false},
  {id:"FM12",name:"Jasmine Yu",nickname:null,class_name:"Founding Mother",semester:"April 1998",bigId:null,dynasty:null,lineNumber:12,delettered:false},
  {id:"13",name:"Helen Baik",nickname:null,class_name:"Charter",semester:"Fall 1998",bigId:null,dynasty:null,lineNumber:1,delettered:false},
  {id:"14",name:"Judy Hong",nickname:null,class_name:"Charter",semester:"Fall 1998",bigId:null,dynasty:null,lineNumber:2,delettered:false},
  {id:"15",name:"Haeyong Kwak",nickname:null,class_name:"Charter",semester:"Fall 1998",bigId:"FM12",dynasty:null,lineNumber:3,delettered:false},
  {id:"16",name:"Ester Lee",nickname:null,class_name:"Charter",semester:"Fall 1998",bigId:null,dynasty:null,lineNumber:4,delettered:false},
  {id:"17",name:"Johanna Lee",nickname:null,class_name:"Charter",semester:"Fall 1998",bigId:null,dynasty:null,lineNumber:5,delettered:false},
  {id:"18",name:"Sophia Cheung",nickname:null,class_name:"Alpha",semester:"Spring 1999",bigId:"FM7",dynasty:"Lola",lineNumber:1,delettered:false},
  {id:"19",name:"Mimi Hsing",nickname:null,class_name:"Alpha",semester:"Spring 1999",bigId:null,dynasty:null,lineNumber:2,delettered:false},
  {id:"20",name:"Ji-Eun Kim",nickname:null,class_name:"Alpha",semester:"Spring 1999",bigId:null,dynasty:null,lineNumber:3,delettered:false},
  {id:"21",name:"Melissa Lee",nickname:null,class_name:"Alpha",semester:"Spring 1999",bigId:null,dynasty:null,lineNumber:4,delettered:false},
  {id:"22",name:"Christine Tan",nickname:null,class_name:"Alpha",semester:"Spring 1999",bigId:null,dynasty:null,lineNumber:5,delettered:false},
  {id:"23",name:"Eunice Wang",nickname:null,class_name:"Alpha",semester:"Spring 1999",bigId:"15",dynasty:null,lineNumber:6,delettered:false},
  {id:"24",name:"Sunny Wu",nickname:null,class_name:"Alpha",semester:"Spring 1999",bigId:"FM2",dynasty:null,lineNumber:7,delettered:false},
  {id:"25",name:"Carmen Cheng",nickname:null,class_name:"Beta",semester:"Fall 1999",bigId:null,dynasty:null,lineNumber:1,delettered:false},
  {id:"26",name:"Julie Kang",nickname:null,class_name:"Beta",semester:"Fall 1999",bigId:null,dynasty:null,lineNumber:2,delettered:false},
  {id:"27",name:"Mary Kao",nickname:null,class_name:"Beta",semester:"Fall 1999",bigId:"18",dynasty:"Lola",lineNumber:3,delettered:false},
  {id:"28",name:"Anita Hsu",nickname:null,class_name:"Beta",semester:"Fall 1999",bigId:"24",dynasty:null,lineNumber:4,delettered:false},
  {id:"29",name:"Julie Lee",nickname:null,class_name:"Beta",semester:"Fall 1999",bigId:null,dynasty:null,lineNumber:5,delettered:false},
  {id:"30",name:"Eugenie Ooi",nickname:null,class_name:"Beta",semester:"Fall 1999",bigId:null,dynasty:null,lineNumber:6,delettered:false},
  {id:"31",name:"Gemma Suh",nickname:null,class_name:"Beta",semester:"Fall 1999",bigId:"FM2",dynasty:null,lineNumber:7,delettered:false},
  {id:"32",name:"Li Wang",nickname:null,class_name:"Beta",semester:"Fall 1999",bigId:null,dynasty:null,lineNumber:8,delettered:false},
  {id:"33",name:"Gwen Dao",nickname:null,class_name:"Gamma",semester:"2000",bigId:null,dynasty:null,lineNumber:1,delettered:false},
  {id:"34",name:"Trinh Le",nickname:null,class_name:"Gamma",semester:"2000",bigId:"31",dynasty:null,lineNumber:2,delettered:false},
  {id:"35",name:"Teri Lee",nickname:null,class_name:"Gamma",semester:"2000",bigId:"28",dynasty:null,lineNumber:3,delettered:false},
  {id:"36",name:"Theuec N Ju",nickname:null,class_name:"Gamma",semester:"2000",bigId:null,dynasty:null,lineNumber:4,delettered:false},
  {id:"37",name:"Vivian Lee",nickname:null,class_name:"Gamma",semester:"2000",bigId:null,dynasty:null,lineNumber:5,delettered:false},
  {id:"38",name:"Lisa Schultheiss",nickname:null,class_name:"Gamma",semester:"2000",bigId:"24",dynasty:null,lineNumber:6,delettered:false},
  {id:"39",name:"Amy Teng",nickname:null,class_name:"Gamma",semester:"2000",bigId:"27",dynasty:"Lola",lineNumber:7,delettered:false},
  {id:"40",name:"Grace Chan",nickname:null,class_name:"Delta",semester:"Fall 2001",bigId:null,dynasty:null,lineNumber:1,delettered:false},
  {id:"41",name:"Hsiao-Ting Chou",nickname:null,class_name:"Delta",semester:"Fall 2001",bigId:null,dynasty:null,lineNumber:2,delettered:false},
  {id:"42",name:"Quyen Dam",nickname:null,class_name:"Delta",semester:"Fall 2001",bigId:null,dynasty:null,lineNumber:3,delettered:false},
  {id:"43",name:"Sandy Duong",nickname:null,class_name:"Delta",semester:"Fall 2001",bigId:null,dynasty:null,lineNumber:4,delettered:false},
  {id:"44",name:"Ming-Ai Hii",nickname:null,class_name:"Delta",semester:"Fall 2001",bigId:null,dynasty:null,lineNumber:5,delettered:false},
  {id:"45",name:"Peggy Lee",nickname:null,class_name:"Delta",semester:"Fall 2001",bigId:null,dynasty:null,lineNumber:6,delettered:false},
  {id:"46",name:"Anne Nguyen",nickname:null,class_name:"Delta",semester:"Fall 2001",bigId:null,dynasty:null,lineNumber:7,delettered:false},
  {id:"47",name:"Stephanie Young",nickname:null,class_name:"Delta",semester:"Fall 2001",bigId:null,dynasty:null,lineNumber:8,delettered:false},
  {id:"48",name:"Crystal Cook",nickname:null,class_name:"Epsilon",semester:"2002",bigId:null,dynasty:null,lineNumber:1,delettered:false},
  {id:"49",name:"Judy Insixiengmay",nickname:null,class_name:"Epsilon",semester:"2002",bigId:"39",dynasty:"Lola",lineNumber:2,delettered:false},
  {id:"50",name:"Jennifer Lee",nickname:null,class_name:"Epsilon",semester:"2002",bigId:null,dynasty:null,lineNumber:3,delettered:false},
  {id:"53",name:"Iris Liaw",nickname:null,class_name:"Zeta",semester:"Zeta",bigId:"49",dynasty:"Lola",lineNumber:1,delettered:false},
  {id:"54",name:"Linda Liu",nickname:null,class_name:"Zeta",semester:"Zeta",bigId:null,dynasty:null,lineNumber:2,delettered:false},
  {id:"55",name:"Celine",nickname:null,class_name:"Zeta",semester:"Zeta",bigId:null,dynasty:"Pasithea",lineNumber:3,delettered:false},
  {id:"56",name:"Crystal Ni",nickname:null,class_name:"Zeta",semester:"Zeta",bigId:null,dynasty:null,lineNumber:4,delettered:false},
  {id:"57",name:"Poou Seele",nickname:null,class_name:"Zeta",semester:"Zeta",bigId:null,dynasty:null,lineNumber:5,delettered:false},
  {id:"58",name:"Pam Song",nickname:null,class_name:"Zeta",semester:"Zeta",bigId:null,dynasty:null,lineNumber:6,delettered:false},
  {id:"59",name:"Amy Tang",nickname:null,class_name:"Zeta",semester:"Zeta",bigId:"38",dynasty:null,lineNumber:7,delettered:false},
  {id:"60",name:"Angela Wang",nickname:null,class_name:"Zeta",semester:"Zeta",bigId:null,dynasty:null,lineNumber:8,delettered:false},
  {id:"61",name:"Tiffney Kim",nickname:"Ajuma",class_name:"Eta",semester:"Fall 2004",bigId:null,dynasty:null,lineNumber:1,delettered:false},
  {id:"62",name:"Olivia Wu",nickname:"Perfect Ten",class_name:"Eta",semester:"Fall 2004",bigId:"55",dynasty:"Pasithea",lineNumber:2,delettered:false},
  {id:"63",name:"Ashley Chung",nickname:"Roadrunner",class_name:"Theta",semester:"Fall 2005",bigId:null,dynasty:null,lineNumber:1,delettered:false},
  {id:"64",name:"Julie Leung",nickname:"Tweety",class_name:"Theta",semester:"Fall 2005",bigId:null,dynasty:null,lineNumber:2,delettered:false},
  {id:"65",name:"Kate Pornsopone",nickname:"Lola",class_name:"Theta",semester:"Fall 2005",bigId:"53",dynasty:"Lola",lineNumber:3,delettered:false},
  {id:"66",name:"Cindy Shin",nickname:"Boo",class_name:"Theta",semester:"Fall 2005",bigId:null,dynasty:null,lineNumber:4,delettered:false},
  {id:"67",name:"Ashley Chen",nickname:"Pumba",class_name:"Iota",semester:"Spring 2006",bigId:"65",dynasty:"Lola",lineNumber:1,delettered:false},
  {id:"70",name:"Nikki Yu",nickname:"Belle",class_name:"Iota",semester:"Spring 2006",bigId:null,dynasty:null,lineNumber:2,delettered:false},
  {id:"71",name:"Mei-Hong Liu",nickname:"Egg Roll",class_name:"Kappa",semester:"Fall 2006",bigId:"67",dynasty:"Lola",lineNumber:1,delettered:false},
  {id:"72",name:"Crystal Yang",nickname:"Bubbalicious",class_name:"Kappa",semester:"Fall 2006",bigId:"53",dynasty:null,lineNumber:2,delettered:false},
  {id:"73",name:"Duong Pham",nickname:null,class_name:"Kappa",semester:"Fall 2006",bigId:null,dynasty:null,lineNumber:3,delettered:false},
  {id:"74",name:"Arisa Mitsunaga",nickname:null,class_name:"Kappa",semester:"Fall 2006",bigId:null,dynasty:null,lineNumber:4,delettered:false},
  {id:"75",name:"Jessica Chen",nickname:"Panda",class_name:"Kappa",semester:"Fall 2006",bigId:null,dynasty:null,lineNumber:5,delettered:false},
  {id:"76",name:"Nancy Xiong",nickname:"Chili",class_name:"Lambda",semester:"Spring 2007",bigId:"65",dynasty:"Lola",lineNumber:1,delettered:false},
  {id:"77",name:"Linda Nguyen",nickname:null,class_name:"Lambda",semester:"Spring 2007",bigId:"61",dynasty:null,lineNumber:2,delettered:false},
  {id:"78",name:"Stephanie Franklyn",nickname:"Ace",class_name:"Lambda",semester:"Spring 2007",bigId:"71",dynasty:"Lola",lineNumber:3,delettered:false},
  {id:"79",name:"Janice Wu",nickname:null,class_name:"Lambda",semester:"Spring 2007",bigId:"66",dynasty:null,lineNumber:4,delettered:false},
  {id:"80",name:"Tien Nguyen",nickname:"Oreo",class_name:"Lambda",semester:"Spring 2007",bigId:"59",dynasty:null,lineNumber:5,delettered:false},
  {id:"81",name:"Si-Ing Chen",nickname:"Tokyo",class_name:"Mu",semester:"Fall 2007",bigId:"67",dynasty:"Snuggle Bear",lineNumber:1,delettered:false},
  {id:"87",name:"Michelle Cheng",nickname:"Sonata",class_name:"Mu",semester:"Fall 2007",bigId:"70",dynasty:null,lineNumber:2,delettered:false},
  {id:"88",name:"Jenni Simpliciano",nickname:"Tink",class_name:"Mu",semester:"Fall 2007",bigId:null,dynasty:null,lineNumber:3,delettered:false},
  {id:"89",name:"Thuan Yen Tran",nickname:"Tasty",class_name:"Mu",semester:"Fall 2007",bigId:null,dynasty:null,lineNumber:4,delettered:false},
  {id:"90",name:"Patricia Tran",nickname:"Pointe",class_name:"Mu",semester:"Fall 2007",bigId:"72",dynasty:null,lineNumber:5,delettered:false},
  {id:"91",name:"Shuyan Wei",nickname:"Cherie",class_name:"Mu",semester:"Fall 2007",bigId:"62",dynasty:"Pasithea",lineNumber:6,delettered:false},
  {id:"92",name:"Ellen Yeun",nickname:"Lenox",class_name:"Mu",semester:"Fall 2007",bigId:null,dynasty:null,lineNumber:7,delettered:false},
  {id:"93",name:"Rachel Chang",nickname:"Sharp",class_name:"Nu",semester:"Spring 2008",bigId:"65",dynasty:"Lola",lineNumber:1,delettered:false},
  {id:"94",name:"Britanny Ng",nickname:"Polo",class_name:"Nu",semester:"Spring 2008",bigId:"80",dynasty:null,lineNumber:2,delettered:false},
  {id:"95",name:"Christina Abney",nickname:"Monkey",class_name:"Xi",semester:"Fall 2008",bigId:"88",dynasty:null,lineNumber:1,delettered:false},
  {id:"96",name:"Katy Chow",nickname:"Cesar",class_name:"Xi",semester:"Fall 2008",bigId:"94",dynasty:null,lineNumber:2,delettered:false},
  {id:"97",name:"Laura Insixiengmay",nickname:null,class_name:"Xi",semester:"Fall 2008",bigId:null,dynasty:null,lineNumber:3,delettered:false},
  {id:"98",name:"Angela Kang",nickname:"Snapshot",class_name:"Xi",semester:"Fall 2008",bigId:"90",dynasty:null,lineNumber:4,delettered:false},
  {id:"99",name:"Debbi Kuo",nickname:"Pasithea",class_name:"Xi",semester:"Fall 2008",bigId:"91",dynasty:"Pasithea",lineNumber:5,delettered:false},
  {id:"100",name:"Jenny Lu",nickname:null,class_name:"Xi",semester:"Fall 2008",bigId:"78",dynasty:"Lola",lineNumber:6,delettered:false},
  {id:"101",name:"Karen Nguyen",nickname:"Lucky7",class_name:"Xi",semester:"Fall 2008",bigId:"93",dynasty:"Lola",lineNumber:7,delettered:false},
  {id:"102",name:"Irene Yi-Ling Yang",nickname:"Doodle",class_name:"Xi",semester:"Fall 2008",bigId:"87",dynasty:null,lineNumber:8,delettered:false},
  {id:"103",name:"Qin Zheng",nickname:"Chicken Little",class_name:"Xi",semester:"Fall 2008",bigId:"71",dynasty:"Lola",lineNumber:9,delettered:false},
  {id:"104",name:"Aisabelle Chong",nickname:"Daisy",class_name:"Omicron",semester:"Spring 2009",bigId:"71",dynasty:"Lola",lineNumber:1,delettered:false},
  {id:"105",name:"Camille DeJesus",nickname:null,class_name:"Omicron",semester:"Spring 2009",bigId:null,dynasty:null,lineNumber:2,delettered:false},
  {id:"106",name:"Kim Duong",nickname:"Moxie",class_name:"Omicron",semester:"Spring 2009",bigId:null,dynasty:"Moxie",lineNumber:3,delettered:false},
  {id:"107",name:"Thu Le",nickname:null,class_name:"Omicron",semester:"Spring 2009",bigId:null,dynasty:null,lineNumber:4,delettered:false},
  {id:"108",name:"Xiu Lin",nickname:"Dixie",class_name:"Omicron",semester:"Spring 2009",bigId:"75",dynasty:null,lineNumber:5,delettered:false},
  {id:"109",name:"Sandy Liu",nickname:"LA Style",class_name:"Omicron",semester:"Spring 2009",bigId:"88",dynasty:null,lineNumber:6,delettered:false},
  {id:"110",name:"Thao Nguyen",nickname:"Luna",class_name:"Omicron",semester:"Spring 2009",bigId:null,dynasty:"Luna",lineNumber:7,delettered:false},
  {id:"111",name:"Mei Brasel",nickname:"BB Crazie",class_name:"Pi",semester:"Fall 2009",bigId:null,dynasty:null,lineNumber:1,delettered:false},
  {id:"112",name:"Sarah Franklyn",nickname:"Rhapsody",class_name:"Pi",semester:"Fall 2009",bigId:null,dynasty:null,lineNumber:2,delettered:false},
  {id:"114",name:"Elizabeth Hall",nickname:"Diva",class_name:"Pi",semester:"Fall 2009",bigId:"98",dynasty:"Hall",lineNumber:3,delettered:false},
  {id:"115",name:"Ji Yeon Lee",nickname:"Kuromi",class_name:"Pi",semester:"Fall 2009",bigId:"103",dynasty:"Lola",lineNumber:4,delettered:false},
  {id:"116",name:"Cindy Nguyen",nickname:"Cocoa",class_name:"Pi",semester:"Fall 2009",bigId:"108",dynasty:null,lineNumber:5,delettered:false},
  {id:"117",name:"Susan Moua",nickname:"Starburst",class_name:"Pi",semester:"Fall 2009",bigId:"110",dynasty:"Luna",lineNumber:6,delettered:false},
  {id:"118",name:"Krizel Roque",nickname:"Athena",class_name:"Pi",semester:"Fall 2009",bigId:"99",dynasty:"Pasithea",lineNumber:7,delettered:false},
  {id:"119",name:"Phuong Tran",nickname:null,class_name:"Pi",semester:"Fall 2009",bigId:"90",dynasty:null,lineNumber:8,delettered:false},
  {id:"120",name:"Cassie Chan",nickname:"Cheery",class_name:"Rho",semester:"Fall 2010",bigId:"117",dynasty:"Luna",lineNumber:1,delettered:false},
  {id:"121",name:"Lydia Chang",nickname:"Impression",class_name:"Rho",semester:"Fall 2010",bigId:"116",dynasty:null,lineNumber:2,delettered:false},
  {id:"122",name:"Grace Han",nickname:"Touche",class_name:"Rho",semester:"Fall 2010",bigId:"106",dynasty:"Moxie",lineNumber:3,delettered:false},
  {id:"123",name:"Raya Hsiung",nickname:"Snuggle Bear",class_name:"Rho",semester:"Fall 2010",bigId:"81",dynasty:"Snuggle Bear",lineNumber:4,delettered:false},
  {id:"124",name:"Sue Kim",nickname:"Encore",class_name:"Rho",semester:"Fall 2010",bigId:"104",dynasty:"Lola",lineNumber:5,delettered:false},
  {id:"125",name:"Jessica Pham",nickname:"Mosaic",class_name:"Rho",semester:"Fall 2010",bigId:"114",dynasty:"Hall",lineNumber:6,delettered:false},
  {id:"126",name:"Alysia Thao",nickname:"Bubbles",class_name:"Rho",semester:"Fall 2010",bigId:"101",dynasty:"Lola",lineNumber:7,delettered:false},
  {id:"127",name:"Jenny Bang",nickname:"Radiance",class_name:"Sigma",semester:"Spring 2011",bigId:"112",dynasty:null,lineNumber:1,delettered:false},
  {id:"128",name:"Somally Chheng",nickname:"Serenity",class_name:"Sigma",semester:"Spring 2011",bigId:null,dynasty:null,lineNumber:2,delettered:false},
  {id:"129",name:"Quynh-Vu Dinh",nickname:"Dulce",class_name:"Sigma",semester:"Spring 2011",bigId:"118",dynasty:"Pasithea",lineNumber:3,delettered:false},
  {id:"130",name:"Samantha Gonzales",nickname:"Voltage",class_name:"Sigma",semester:"Spring 2011",bigId:null,dynasty:null,lineNumber:4,delettered:false},
  {id:"131",name:"Mihui Lim",nickname:"Boombox",class_name:"Sigma",semester:"Spring 2011",bigId:"102",dynasty:null,lineNumber:5,delettered:false},
  {id:"132",name:"Angela Adams",nickname:"Shimmer",class_name:"Tau",semester:"Fall 2011",bigId:"125",dynasty:"Hall",lineNumber:1,delettered:false},
  {id:"133",name:"Katy Blanton",nickname:null,class_name:"Tau",semester:"Fall 2011",bigId:"123",dynasty:null,lineNumber:2,delettered:false},
  {id:"134",name:"Melinda Erickson",nickname:"Versatile",class_name:"Tau",semester:"Fall 2011",bigId:"128",dynasty:null,lineNumber:3,delettered:false},
  {id:"135",name:"Anna Ishii",nickname:"En Avant",class_name:"Tau",semester:"Fall 2011",bigId:"99",dynasty:"Pasithea",lineNumber:4,delettered:false},
  {id:"136",name:"Judy Nguyen",nickname:"Chic",class_name:"Tau",semester:"Fall 2011",bigId:"124",dynasty:"Lola",lineNumber:5,delettered:false},
  {id:"137",name:"Tania Tran",nickname:"Pixie",class_name:"Tau",semester:"Fall 2011",bigId:"120",dynasty:"Luna",lineNumber:6,delettered:false},
  {id:"138",name:"Christina Chen",nickname:"Allure",class_name:"Upsilon",semester:"Fall 2012",bigId:"126",dynasty:"Lola",lineNumber:1,delettered:false},
  {id:"139",name:"Michelle Clum",nickname:"Macchiato",class_name:"Upsilon",semester:"Fall 2012",bigId:"129",dynasty:"Pasithea",lineNumber:2,delettered:false},
  {id:"140",name:"Phenix Tang",nickname:"Vesta",class_name:"Upsilon",semester:"Fall 2012",bigId:"121",dynasty:null,lineNumber:3,delettered:false},
  {id:"141",name:"Venus Tang",nickname:"Amavel",class_name:"Upsilon",semester:"Fall 2012",bigId:"135",dynasty:"Pasithea",lineNumber:4,delettered:false},
  {id:"142",name:"Kimberly Song",nickname:"Mirage",class_name:"Upsilon",semester:"Fall 2012",bigId:"124",dynasty:"Lola",lineNumber:5,delettered:false},
  {id:"143",name:"Mabel Xu",nickname:"Spotlight",class_name:"Upsilon",semester:"Fall 2012",bigId:"131",dynasty:null,lineNumber:6,delettered:false},
  {id:"144",name:"Yoonji Hur",nickname:"Aequus",class_name:"Phi",semester:"Spring 2013",bigId:"134",dynasty:null,lineNumber:1,delettered:false},
  {id:"145",name:"Emma Jang",nickname:"Amplify",class_name:"Phi",semester:"Spring 2013",bigId:"130",dynasty:null,lineNumber:2,delettered:false},
  {id:"146",name:"Cecilia Ko",nickname:"Vogue",class_name:"Phi",semester:"Spring 2013",bigId:"120",dynasty:"Luna",lineNumber:3,delettered:false},
  {id:"147",name:"Amy Nguyen",nickname:"Effervescence",class_name:"Phi",semester:"Spring 2013",bigId:"137",dynasty:"Luna",lineNumber:4,delettered:false},
  {id:"148",name:"Phuong Thao Nguyen",nickname:"Devier",class_name:"Phi",semester:"Spring 2013",bigId:"132",dynasty:null,lineNumber:5,delettered:false},
  {id:"149",name:"Esther Shim",nickname:"Forte",class_name:"Phi",semester:"Spring 2013",bigId:"122",dynasty:"Moxie",lineNumber:6,delettered:false},
  {id:"150",name:"Jasmine Ewe",nickname:"S.T.U.D.",class_name:"Chi",semester:"Fall 2013",bigId:"138",dynasty:"Lola",lineNumber:1,delettered:false},
  {id:"151",name:"Rita Han",nickname:"Infinity",class_name:"Chi",semester:"Fall 2013",bigId:"125",dynasty:"Hall",lineNumber:2,delettered:false},
  {id:"152",name:"Mirabel Jin",nickname:"Neptune",class_name:"Chi",semester:"Fall 2013",bigId:"123",dynasty:"Snuggle Bear",lineNumber:3,delettered:false},
  {id:"153",name:"Jiyoung Lee",nickname:"Chloe",class_name:"Chi",semester:"Fall 2013",bigId:"146",dynasty:"Luna",lineNumber:4,delettered:false},
  {id:"154",name:"Ashley Lin",nickname:"Jubilance",class_name:"Chi",semester:"Fall 2013",bigId:"144",dynasty:null,lineNumber:5,delettered:false},
  {id:"155",name:"Young-Ju Park",nickname:"Enchant",class_name:"Chi",semester:"Fall 2013",bigId:"134",dynasty:null,lineNumber:6,delettered:false},
  {id:"156",name:"Nhuy Phan",nickname:"Zealous",class_name:"Chi",semester:"Fall 2013",bigId:"140",dynasty:null,lineNumber:7,delettered:false},
  {id:"157",name:"Sally Seo",nickname:"Godiva",class_name:"Chi",semester:"Fall 2013",bigId:"141",dynasty:"Pasithea",lineNumber:8,delettered:false},
  {id:"158",name:"T-On Yu",nickname:"Sniper",class_name:"Chi",semester:"Fall 2013",bigId:"143",dynasty:null,lineNumber:9,delettered:false},
  {id:"159",name:"Shantell Escanuela",nickname:"Nike",class_name:"Psi",semester:"Spring 2014",bigId:"149",dynasty:"Moxie",lineNumber:1,delettered:false},
  {id:"160",name:"Jacqueline Szeto",nickname:"Azalea",class_name:"Psi",semester:"Spring 2014",bigId:"140",dynasty:null,lineNumber:2,delettered:false},
  {id:"161",name:"Stephanie Ujjin",nickname:"Snow Angel",class_name:"Psi",semester:"Spring 2014",bigId:"139",dynasty:"Pasithea",lineNumber:3,delettered:false},
  {id:"162",name:"Christine Yang",nickname:"Leonida",class_name:"Psi",semester:"Spring 2014",bigId:"120",dynasty:"Luna",lineNumber:4,delettered:false},
  {id:"163",name:"Lauren Folger",nickname:"Darya",class_name:"Alpha Alpha",semester:"Fall 2014",bigId:"151",dynasty:"Hall",lineNumber:1,delettered:false},
  {id:"164",name:"Siyu Lin",nickname:"Dovey",class_name:"Alpha Alpha",semester:"Fall 2014",bigId:"150",dynasty:"Lola",lineNumber:2,delettered:false},
  {id:"165",name:"Zhenni Ren",nickname:"Ausrine",class_name:"Alpha Alpha",semester:"Fall 2014",bigId:"152",dynasty:"Snuggle Bear",lineNumber:3,delettered:false},
  {id:"166",name:"Haemin Song",nickname:"Deluxe",class_name:"Alpha Alpha",semester:"Fall 2014",bigId:"157",dynasty:"Pasithea",lineNumber:4,delettered:false},
  {id:"167",name:"Teresa Tran",nickname:"Marvel",class_name:"Alpha Alpha",semester:"Fall 2014",bigId:"147",dynasty:"Luna",lineNumber:5,delettered:false},
  {id:"168",name:"Dianna Wong",nickname:"Expose",class_name:"Alpha Alpha",semester:"Fall 2014",bigId:"159",dynasty:"Moxie",lineNumber:6,delettered:false},
  {id:"169",name:"Ivy Hu",nickname:"Pearle",class_name:"Alpha Beta",semester:"Fall 2015",bigId:"161",dynasty:"Pasithea",lineNumber:1,delettered:false},
  {id:"170",name:"Rachel Xu",nickname:"Seirios",class_name:"Alpha Beta",semester:"Fall 2015",bigId:"165",dynasty:"Snuggle Bear",lineNumber:2,delettered:false},
  {id:"171",name:"Samantha Badeau",nickname:"Crusade",class_name:"Alpha Gamma",semester:"Fall 2016",bigId:"145",dynasty:null,lineNumber:1,delettered:false},
  {id:"172",name:"Thunwa Klaihathai",nickname:"XENA",class_name:"Alpha Gamma",semester:"Fall 2016",bigId:"163",dynasty:"Hall",lineNumber:2,delettered:false},
  {id:"173",name:"Jisu Lee",nickname:"Onya",class_name:"Alpha Gamma",semester:"Fall 2016",bigId:"169",dynasty:"Pasithea",lineNumber:3,delettered:false},
  {id:"174",name:"Eva Wei",nickname:"Astra",class_name:"Alpha Delta",semester:"Spring 2017",bigId:"161",dynasty:"Pasithea",lineNumber:1,delettered:false},
  {id:"175",name:"Cindy Zhang",nickname:"Camellia",class_name:"Alpha Delta",semester:"Spring 2017",bigId:"158",dynasty:null,lineNumber:2,delettered:false},
  {id:"176",name:"Yulanda Huang",nickname:"Roseate",class_name:"Alpha Epsilon",semester:"Fall 2017",bigId:"172",dynasty:"Hall",lineNumber:1,delettered:false},
  {id:"177",name:"Kelsey Kim",nickname:"Vega",class_name:"Alpha Epsilon",semester:"Fall 2017",bigId:"174",dynasty:"Pasithea",lineNumber:2,delettered:false},
  {id:"178",name:"Tiffany Chan",nickname:"Jade",class_name:"Alpha Zeta",semester:"Spring 2018",bigId:"167",dynasty:"Luna",lineNumber:1,delettered:false},
  {id:"179",name:"Valerie Lin",nickname:"Cordelia",class_name:"Alpha Zeta",semester:"Spring 2018",bigId:"164",dynasty:"Lola",lineNumber:2,delettered:false},
  {id:"180",name:"Leslie Tran",nickname:"Arinne",class_name:"Alpha Zeta",semester:"Spring 2018",bigId:"168",dynasty:"Moxie",lineNumber:3,delettered:false},
  {id:"181",name:"Ava Wei",nickname:"Elektra",class_name:"Alpha Zeta",semester:"Spring 2018",bigId:"167",dynasty:"Luna",lineNumber:4,delettered:false},
  {id:"182",name:"Gina Zheng",nickname:"Leilani",class_name:"Alpha Zeta",semester:"Spring 2018",bigId:"164",dynasty:"Lola",lineNumber:5,delettered:false},
  {id:"183",name:"Linda Folger",nickname:"Ilaria",class_name:"Alpha Eta",semester:"Fall 2018",bigId:"172",dynasty:"Hall",lineNumber:1,delettered:false},
  {id:"184",name:"Reina Garrett",nickname:"Stella",class_name:"Alpha Eta",semester:"Fall 2018",bigId:"177",dynasty:"Pasithea",lineNumber:2,delettered:false},
  {id:"185",name:"Anna Huang",nickname:"Lutea",class_name:"Alpha Eta",semester:"Fall 2018",bigId:"180",dynasty:"Moxie",lineNumber:3,delettered:false},
  {id:"186",name:"Jenny Nguyen",nickname:"Anjeze",class_name:"Alpha Eta",semester:"Fall 2018",bigId:"180",dynasty:"Moxie",lineNumber:4,delettered:false},
  {id:"187",name:"Thao Nguyen2",nickname:"Pleiades",class_name:"Alpha Eta",semester:"Fall 2018",bigId:"170",dynasty:"Snuggle Bear",lineNumber:5,delettered:false},
  {id:"188",name:"Lucy Xiao",nickname:"Hesperus",class_name:"Alpha Eta",semester:"Fall 2018",bigId:"175",dynasty:null,lineNumber:6,delettered:false},
  {id:"189",name:"Vicky Zhang",nickname:"B612",class_name:"Alpha Eta",semester:"Fall 2018",bigId:"170",dynasty:"Snuggle Bear",lineNumber:7,delettered:false},
  {id:"190",name:"Hanna Zheng",nickname:"Hestia",class_name:"Alpha Eta",semester:"Fall 2018",bigId:"169",dynasty:"Pasithea",lineNumber:8,delettered:false},
  {id:"191",name:"Vy Le",nickname:"Alquemie",class_name:"Alpha Theta",semester:"Spring 2019",bigId:"176",dynasty:"Hall",lineNumber:1,delettered:false},
  {id:"192",name:"Sejal Mistry",nickname:"Aasira",class_name:"Alpha Theta",semester:"Spring 2019",bigId:"176",dynasty:"Hall",lineNumber:2,delettered:false},
  {id:"193",name:"Ellie Thiengwongs",nickname:"Betelgeuse",class_name:"Alpha Theta",semester:"Spring 2019",bigId:"187",dynasty:"Snuggle Bear",lineNumber:3,delettered:false},
  {id:"194",name:"Ashley Go",nickname:"Hina",class_name:"Alpha Iota",semester:"Fall 2019",bigId:"184",dynasty:"Pasithea",lineNumber:1,delettered:false},
  {id:"195",name:"Katelyn Li",nickname:"Vespira",class_name:"Alpha Iota",semester:"Fall 2019",bigId:"193",dynasty:"Snuggle Bear",lineNumber:2,delettered:false},
  {id:"196",name:"Daphne Lin",nickname:"Selene",class_name:"Alpha Iota",semester:"Fall 2019",bigId:"190",dynasty:"Pasithea",lineNumber:3,delettered:false},
  {id:"197",name:"Alyssa Lombres",nickname:"Solana",class_name:"Alpha Iota",semester:"Fall 2019",bigId:"193",dynasty:"Snuggle Bear",lineNumber:4,delettered:false},
  {id:"198",name:"Karen Lu",nickname:"Kotori",class_name:"Alpha Iota",semester:"Fall 2019",bigId:"182",dynasty:"Lola",lineNumber:5,delettered:false},
  {id:"199",name:"Keri Lu",nickname:"Rheia",class_name:"Alpha Iota",semester:"Fall 2019",bigId:"190",dynasty:"Pasithea",lineNumber:6,delettered:false},
  {id:"200",name:"Silvy Park",nickname:"Mira",class_name:"Alpha Iota",semester:"Fall 2019",bigId:"179",dynasty:"Lola",lineNumber:7,delettered:false},
  {id:"201",name:"Danny Wang",nickname:"Alcina",class_name:"Alpha Iota",semester:"Fall 2019",bigId:"181",dynasty:"Luna",lineNumber:8,delettered:false},
  {id:"202",name:"Anna Zheng",nickname:"Aureole",class_name:"Alpha Iota",semester:"Fall 2019",bigId:"182",dynasty:"Lola",lineNumber:9,delettered:false},
  {id:"203",name:"Michelle Zheng",nickname:"Vetra",class_name:"Alpha Iota",semester:"Fall 2019",bigId:"185",dynasty:"Moxie",lineNumber:10,delettered:false},
  {id:"204",name:"Michelle Zhu",nickname:"Citrine",class_name:"Alpha Iota",semester:"Fall 2019",bigId:"178",dynasty:"Luna",lineNumber:11,delettered:false},
  {id:"205",name:"Katelyn Choe",nickname:"Avina",class_name:"Alpha Kappa",semester:"Spring 2020",bigId:"183",dynasty:"Hall",lineNumber:1,delettered:false},
  {id:"206",name:"Kristen Steinmetz",nickname:"Eira",class_name:"Alpha Kappa",semester:"Spring 2020",bigId:"186",dynasty:"Moxie",lineNumber:2,delettered:false},
  {id:"207",name:"Jennifer Zhu",nickname:"Peony",class_name:"Alpha Kappa",semester:"Spring 2020",bigId:"189",dynasty:"Snuggle Bear",lineNumber:3,delettered:false},
  {id:"208",name:"Jamie Lee",nickname:"Elora",class_name:"Alpha Lambda",semester:"Spring 2021",bigId:"194",dynasty:"Pasithea",lineNumber:1,delettered:false},
  {id:"209",name:"Elyssa Levitt",nickname:"Zoria",class_name:"Alpha Lambda",semester:"Spring 2021",bigId:"192",dynasty:"Hall",lineNumber:2,delettered:false},
  {id:"210",name:"Michelle Lin",nickname:"Lilah",class_name:"Alpha Lambda",semester:"Spring 2021",bigId:"201",dynasty:"Luna",lineNumber:3,delettered:false},
  {id:"211",name:"Jules Walters",nickname:"Hemera",class_name:"Alpha Lambda",semester:"Spring 2021",bigId:"196",dynasty:"Pasithea",lineNumber:4,delettered:false},
  {id:"212",name:"Camille Argarin",nickname:"Haliya",class_name:"Alpha Mu",semester:"Fall 2021",bigId:"197",dynasty:"Snuggle Bear",lineNumber:1,delettered:false},
  {id:"213",name:"Jenny Chen",nickname:"Alacritas",class_name:"Alpha Mu",semester:"Fall 2021",bigId:"205",dynasty:"Hall",lineNumber:2,delettered:false},
  {id:"214",name:"Jani Christopher",nickname:"Kyla",class_name:"Alpha Mu",semester:"Fall 2021",bigId:"200",dynasty:"Lola",lineNumber:3,delettered:false},
  {id:"215",name:"Grace Jang",nickname:"Alamea",class_name:"Alpha Mu",semester:"Fall 2021",bigId:"196",dynasty:"Pasithea",lineNumber:4,delettered:false},
  {id:"216",name:"Eujin Kang",nickname:"Rosella",class_name:"Alpha Mu",semester:"Fall 2021",bigId:"198",dynasty:"Lola",lineNumber:5,delettered:false},
  {id:"217",name:"Jocelyn Kosasi",nickname:"Lilia",class_name:"Alpha Mu",semester:"Fall 2021",bigId:"199",dynasty:"Pasithea",lineNumber:6,delettered:false},
  {id:"218",name:"Alex Le",nickname:"Kalea",class_name:"Alpha Mu",semester:"Fall 2021",bigId:"203",dynasty:"Moxie",lineNumber:7,delettered:false},
  {id:"219",name:"Jennifer Mai",nickname:"Ayla",class_name:"Alpha Mu",semester:"Fall 2021",bigId:"208",dynasty:"Pasithea",lineNumber:8,delettered:false},
  {id:"220",name:"An Nguyen",nickname:"Auzlyn",class_name:"Alpha Mu",semester:"Fall 2021",bigId:"191",dynasty:"Hall",lineNumber:9,delettered:false},
  {id:"221",name:"Muriel Ren",nickname:"Nepheline",class_name:"Alpha Mu",semester:"Fall 2021",bigId:"204",dynasty:"Luna",lineNumber:10,delettered:false},
  {id:"222",name:"Autumn Starbird",nickname:"Pilea",class_name:"Alpha Mu",semester:"Fall 2021",bigId:"205",dynasty:null,lineNumber:11,delettered:false},
  {id:"223",name:"Lise Xu",nickname:"Maia",class_name:"Alpha Mu",semester:"Fall 2021",bigId:"195",dynasty:"Snuggle Bear",lineNumber:12,delettered:false},
  {id:"224",name:"Savannah Young",nickname:"Dara",class_name:"Alpha Mu",semester:"Fall 2021",bigId:"197",dynasty:"Snuggle Bear",lineNumber:13,delettered:false},
  {id:"225",name:"Janellyn Bong",nickname:"Leonis",class_name:"Alpha Nu",semester:"Spring 2022",bigId:"207",dynasty:"Snuggle Bear",lineNumber:1,delettered:false},
  {id:"226",name:"Sarah Han",nickname:"Ciela",class_name:"Alpha Nu",semester:"Spring 2022",bigId:"202",dynasty:"Lola",lineNumber:2,delettered:false},
  {id:"227",name:"Jolie Lanier",nickname:"Achara",class_name:"Alpha Nu",semester:"Spring 2022",bigId:"209",dynasty:"Hall",lineNumber:3,delettered:false},
  {id:"228",name:"Jordan Sul",nickname:"Caelus",class_name:"Alpha Nu",semester:"Spring 2022",bigId:"202",dynasty:"Lola",lineNumber:4,delettered:false},
  {id:"229",name:"Rebekah Yohler",nickname:"Eirene",class_name:"Alpha Nu",semester:"Spring 2022",bigId:"186",dynasty:"Moxie",lineNumber:5,delettered:false},
  {id:"230",name:"Grace Conn",nickname:"Leta",class_name:"Alpha Xi",semester:"Fall 2022",bigId:"224",dynasty:"Snuggle Bear",lineNumber:1,delettered:false},
  {id:"231",name:"Emily Freeman",nickname:"Ainakea",class_name:"Alpha Xi",semester:"Fall 2022",bigId:"215",dynasty:"Pasithea",lineNumber:2,delettered:false},
  {id:"232",name:"Angie Lin",nickname:"Iress",class_name:"Alpha Xi",semester:"Fall 2022",bigId:"201",dynasty:"Luna",lineNumber:3,delettered:false},
  {id:"233",name:"Jessica Luu",nickname:"Ophira",class_name:"Alpha Xi",semester:"Fall 2022",bigId:"221",dynasty:"Luna",lineNumber:4,delettered:false},
  {id:"234",name:"Thaomy Pham",nickname:"Aruvi",class_name:"Alpha Xi",semester:"Fall 2022",bigId:"214",dynasty:"Lola",lineNumber:5,delettered:false},
  {id:"235",name:"Lexi Putman",nickname:"Luscinia",class_name:"Alpha Xi",semester:"Fall 2022",bigId:"216",dynasty:"Lola",lineNumber:6,delettered:false},
  {id:"236",name:"Kati Putman",nickname:"Kiana",class_name:"Alpha Xi",semester:"Fall 2022",bigId:"217",dynasty:"Pasithea",lineNumber:7,delettered:false},
  {id:"237",name:"Malia Tamisin",nickname:"Lucrecia",class_name:"Alpha Xi",semester:"Fall 2022",bigId:"218",dynasty:"Moxie",lineNumber:8,delettered:false},
  {id:"238",name:"Vanessa Thakkar",nickname:"Kun Ana",class_name:"Alpha Xi",semester:"Fall 2022",bigId:"212",dynasty:"Snuggle Bear",lineNumber:9,delettered:false},
  {id:"239",name:"Vina Bui",nickname:"KOMODO",class_name:"Alpha Omicron",semester:"Spring 2023",bigId:"227",dynasty:"Hall",lineNumber:1,delettered:false},
  {id:"240",name:"Sonika Chan",nickname:"Nivalis",class_name:"Alpha Omicron",semester:"Spring 2023",bigId:"205",dynasty:"Hall",lineNumber:2,delettered:false},
  {id:"241",name:"Katie Dao",nickname:"Khione",class_name:"Alpha Omicron",semester:"Spring 2023",bigId:"228",dynasty:"Lola",lineNumber:3,delettered:false},
  {id:"242",name:"Zoie Daughtry",nickname:"Erytheia",class_name:"Alpha Omicron",semester:"Spring 2023",bigId:"228",dynasty:"Lola",lineNumber:4,delettered:false},
  {id:"243",name:"Lena Do",nickname:"Anastasia",class_name:"Alpha Omicron",semester:"Spring 2023",bigId:"225",dynasty:"Snuggle Bear",lineNumber:5,delettered:false},
  {id:"244",name:"Tanvi Gaddameedi",nickname:"PERSEPH6NE",class_name:"Alpha Omicron",semester:"Spring 2023",bigId:"209",dynasty:"Hall",lineNumber:6,delettered:false},
  {id:"245",name:"Michelle Jasadipura",nickname:"Alasia",class_name:"Alpha Omicron",semester:"Spring 2023",bigId:"223",dynasty:"Snuggle Bear",lineNumber:7,delettered:false},
  {id:"246",name:"Selina Li",nickname:"Aumia",class_name:"Alpha Omicron",semester:"Spring 2023",bigId:"219",dynasty:"Pasithea",lineNumber:8,delettered:false},
  {id:"247",name:"Nitya Neema",nickname:"Arcelia",class_name:"Alpha Omicron",semester:"Spring 2023",bigId:"226",dynasty:"Lola",lineNumber:9,delettered:false},
  {id:"248",name:"Aashna Patel",nickname:"Avani",class_name:"Alpha Omicron",semester:"Spring 2023",bigId:"220",dynasty:"Hall",lineNumber:10,delettered:false},
  {id:"249",name:"Sophia Cheng",nickname:"Lien",class_name:"Alpha Pi",semester:"Fall 2023",bigId:"234",dynasty:"Lola",lineNumber:1,delettered:false},
  {id:"250",name:"Simone Cho",nickname:"Nalani",class_name:"Alpha Pi",semester:"Fall 2023",bigId:"236",dynasty:"Pasithea",lineNumber:2,delettered:false},
  {id:"251",name:"Samantha Ferrer-Smallwood",nickname:"Esmeralda",class_name:"Alpha Pi",semester:"Fall 2023",bigId:"233",dynasty:"Luna",lineNumber:3,delettered:false},
  {id:"252",name:"Saahithya Gutta",nickname:"Evryn",class_name:"Alpha Pi",semester:"Fall 2023",bigId:"230",dynasty:"Snuggle Bear",lineNumber:4,delettered:false},
  {id:"253",name:"Lana Jalayer",nickname:"Odessa",class_name:"Alpha Pi",semester:"Fall 2023",bigId:"229",dynasty:"Moxie",lineNumber:5,delettered:false},
  {id:"254",name:"Tina Ngo",nickname:"Kamea",class_name:"Alpha Pi",semester:"Fall 2023",bigId:"237",dynasty:"Moxie",lineNumber:6,delettered:false},
  {id:"255",name:"Anupama Arvind",nickname:"Saranyu",class_name:"Alpha Rho",semester:"Spring 2024",bigId:"242",dynasty:"Lola",lineNumber:1,delettered:false},
  {id:"256",name:"Leslie Dang",nickname:"Supernova",class_name:"Alpha Rho",semester:"Spring 2024",bigId:"248",dynasty:"Hall",lineNumber:2,delettered:false},
  {id:"257",name:"Lena Dinh",nickname:"Mairen",class_name:"Alpha Rho",semester:"Spring 2024",bigId:"239",dynasty:"Hall",lineNumber:3,delettered:false},
  {id:"258",name:"Audrey Djunaidi",nickname:"Naruna",class_name:"Alpha Rho",semester:"Spring 2024",bigId:"240",dynasty:"Hall",lineNumber:4,delettered:false},
  {id:"259",name:"Christy Foo",nickname:"Cassia",class_name:"Alpha Rho",semester:"Spring 2024",bigId:"235",dynasty:"Lola",lineNumber:5,delettered:false},
  {id:"260",name:"Alice Lee",nickname:"Eliara",class_name:"Alpha Rho",semester:"Spring 2024",bigId:"241",dynasty:"Lola",lineNumber:6,delettered:false},
  {id:"261",name:"Vivian Li",nickname:"Misa",class_name:"Alpha Rho",semester:"Spring 2024",bigId:"242",dynasty:"Lola",lineNumber:7,delettered:false},
  {id:"262",name:"Grace Moon",nickname:"Evalina",class_name:"Alpha Rho",semester:"Spring 2024",bigId:"235",dynasty:"Lola",lineNumber:8,delettered:false},
  {id:"263",name:"Melanie Nguyen",nickname:"Rosabelle",class_name:"Alpha Rho",semester:"Spring 2024",bigId:"243",dynasty:"Snuggle Bear",lineNumber:9,delettered:false},
  {id:"264",name:"Emily Shin",nickname:"Aethra",class_name:"Alpha Rho",semester:"Spring 2024",bigId:"247",dynasty:"Lola",lineNumber:10,delettered:false},
  {id:"265",name:"Emma Berney",nickname:"Syntheia",class_name:"Alpha Sigma",semester:"Fall 2024",bigId:"246",dynasty:"Pasithea",lineNumber:1,delettered:false},
  {id:"266",name:"Lilian Fitch",nickname:"Yuena",class_name:"Alpha Sigma",semester:"Fall 2024",bigId:"249",dynasty:"Lola",lineNumber:2,delettered:false},
  {id:"267",name:"Jessica Ngo",nickname:"Celaria",class_name:"Alpha Sigma",semester:"Fall 2024",bigId:"245",dynasty:"Snuggle Bear",lineNumber:3,delettered:false},
  {id:"268",name:"Cammie Phansavanh",nickname:"Kalista",class_name:"Alpha Sigma",semester:"Fall 2024",bigId:"250",dynasty:"Pasithea",lineNumber:4,delettered:false},
  {id:"269",name:"Annie Shi",nickname:"Akoya",class_name:"Alpha Sigma",semester:"Fall 2024",bigId:"251",dynasty:"Luna",lineNumber:5,delettered:false},
  {id:"270",name:"Saachi Singh",nickname:"Shani",class_name:"Alpha Sigma",semester:"Fall 2024",bigId:"238",dynasty:"Snuggle Bear",lineNumber:6,delettered:false},
  {id:"271",name:"Tien Tran",nickname:"Auraleia",class_name:"Alpha Sigma",semester:"Fall 2024",bigId:"244",dynasty:"Hall",lineNumber:7,delettered:false},
  {id:"272",name:"Syruis Zhang",nickname:"Ilyana",class_name:"Alpha Sigma",semester:"Fall 2024",bigId:"232",dynasty:"Luna",lineNumber:8,delettered:false},
  {id:"273",name:"Chloe Andayan",nickname:"Callisea",class_name:"Alpha Tau",semester:"Spring 2025",bigId:"256",dynasty:"Hall",lineNumber:1,delettered:false},
  {id:"274",name:"Eryna Furuta",nickname:"Saerilyn",class_name:"Alpha Tau",semester:"Spring 2025",bigId:"262",dynasty:"Lola",lineNumber:2,delettered:false},
  {id:"275",name:"Anishka Manavalan",nickname:"Arezou",class_name:"Alpha Tau",semester:"Spring 2025",bigId:"253",dynasty:"Moxie",lineNumber:3,delettered:false},
  {id:"276",name:"Jocelyn Pham",nickname:"Emilia",class_name:"Alpha Tau",semester:"Spring 2025",bigId:"254",dynasty:"Moxie",lineNumber:4,delettered:false},
  {id:"277",name:"Rose Pollard",nickname:"Iridessa",class_name:"Alpha Tau",semester:"Spring 2025",bigId:"255",dynasty:"Lola",lineNumber:5,delettered:false},
  {id:"278",name:"Laeh Ramsey",nickname:"Lunessa",class_name:"Alpha Tau",semester:"Spring 2025",bigId:"264",dynasty:"Lola",lineNumber:6,delettered:false},
  {id:"279",name:"Tiffany Vinh",nickname:"Janarã",class_name:"Alpha Tau",semester:"Spring 2025",bigId:"260",dynasty:"Lola",lineNumber:7,delettered:false},
  {id:"280",name:"Elyn Wadstein",nickname:"Sitara",class_name:"Alpha Tau",semester:"Spring 2025",bigId:"252",dynasty:"Snuggle Bear",lineNumber:8,delettered:false},
  {id:"281",name:"Eshani Alford",nickname:"Aquaria",class_name:"Alpha Upsilon",semester:"Fall 2025",bigId:"272",dynasty:"Luna",lineNumber:1,delettered:false},
  {id:"282",name:"Carissa Choi",nickname:"Yunara",class_name:"Alpha Upsilon",semester:"Fall 2025",bigId:"268",dynasty:"Pasithea",lineNumber:2,delettered:false},
  {id:"283",name:"Hyerin Chung",nickname:"Nami",class_name:"Alpha Upsilon",semester:"Fall 2025",bigId:"266",dynasty:"Lola",lineNumber:3,delettered:false},
  {id:"284",name:"Maleah Corvacho",nickname:"Novaria",class_name:"Alpha Upsilon",semester:"Fall 2025",bigId:"267",dynasty:"Snuggle Bear",lineNumber:4,delettered:false},
  {id:"285",name:"Jocelyn Doan",nickname:"Callais",class_name:"Alpha Upsilon",semester:"Fall 2025",bigId:"269",dynasty:"Luna",lineNumber:5,delettered:false},
  {id:"286",name:"Isabella Edrish",nickname:"Sappheiros",class_name:"Alpha Upsilon",semester:"Fall 2025",bigId:"269",dynasty:"Luna",lineNumber:6,delettered:false},
  {id:"287",name:"Misora Furuya",nickname:"Noreva",class_name:"Alpha Upsilon",semester:"Fall 2025",bigId:"258",dynasty:"Hall",lineNumber:7,delettered:false},
  {id:"288",name:"Chia Garcia",nickname:"Heleia",class_name:"Alpha Upsilon",semester:"Fall 2025",bigId:"259",dynasty:"Lola",lineNumber:8,delettered:false},
  {id:"289",name:"Kaitlynn Nguyen",nickname:"Ollyra",class_name:"Alpha Upsilon",semester:"Fall 2025",bigId:"263",dynasty:"Snuggle Bear",lineNumber:9,delettered:false},
  {id:"290",name:"Ellie Wang",nickname:"Senara",class_name:"Alpha Upsilon",semester:"Fall 2025",bigId:"252",dynasty:"Snuggle Bear",lineNumber:10,delettered:false},
  {id:"291",name:"Amy Yuan",nickname:"Aiko",class_name:"Alpha Upsilon",semester:"Fall 2025",bigId:"272",dynasty:"Luna",lineNumber:11,delettered:false},
  {id:"292",name:"Sherry Zhou",nickname:"Yuhua",class_name:"Alpha Upsilon",semester:"Fall 2025",bigId:"270",dynasty:"Snuggle Bear",lineNumber:12,delettered:false},
  {id:"293",name:"Danielle Acas",nickname:"Mayarah",class_name:"Alpha Phi",semester:"Spring 2026",bigId:"280",dynasty:"Snuggle Bear",lineNumber:1,delettered:false},
  {id:"294",name:"Emi Arlong",nickname:"Nytheria",class_name:"Alpha Phi",semester:"Spring 2026",bigId:"279",dynasty:"Lola",lineNumber:2,delettered:false},
  {id:"295",name:"Bhuvanthi Chapalamadugu",nickname:"Twyla",class_name:"Alpha Phi",semester:"Spring 2026",bigId:"277",dynasty:"Lola",lineNumber:3,delettered:false},
  {id:"296",name:"Kayleigh Fong",nickname:"Adelyne",class_name:"Alpha Phi",semester:"Spring 2026",bigId:"274",dynasty:"Lola",lineNumber:4,delettered:false},
  {id:"297",name:"Arushi Mishra",nickname:"Lynnea",class_name:"Alpha Phi",semester:"Spring 2026",bigId:"280",dynasty:"Snuggle Bear",lineNumber:5,delettered:false},
  {id:"298",name:"Hilda Ngo",nickname:"Meilani",class_name:"Alpha Phi",semester:"Spring 2026",bigId:"257",dynasty:"Hall",lineNumber:6,delettered:false},
  {id:"299",name:"Gretchen O'Neal",nickname:"Eellaya",class_name:"Alpha Phi",semester:"Spring 2026",bigId:"275",dynasty:"Moxie",lineNumber:7,delettered:false},
  {id:"300",name:"Jaeyun Sim",nickname:"Erivela",class_name:"Alpha Phi",semester:"Spring 2026",bigId:"265",dynasty:"Pasithea",lineNumber:8,delettered:false},
  {id:"301",name:"Marie Torres",nickname:"Milena",class_name:"Alpha Phi",semester:"Spring 2026",bigId:"276",dynasty:"Moxie",lineNumber:9,delettered:false},
  {id:"302",name:"Alexis Vu",nickname:"Reira",class_name:"Alpha Phi",semester:"Spring 2026",bigId:"276",dynasty:"Moxie",lineNumber:10,delettered:false},
  {id:"303",name:"Phoebe Warren",nickname:"Lunavie",class_name:"Alpha Phi",semester:"Spring 2026",bigId:"273",dynasty:"Hall",lineNumber:11,delettered:false},
];

const DYNASTY_COLORS = {
  "Lola":"#e91e8c","Luna":"#7c3aed","Hall":"#0ea5e9",
  "Moxie":"#f59e0b","Snuggle Bear":"#10b981","Pasithea":"#f43f5e",
};

const CLASS_ORDER = ["Founding Mother","Charter","Alpha","Beta","Gamma","Delta","Epsilon","Zeta","Eta","Theta","Iota","Kappa","Lambda","Mu","Nu","Xi","Omicron","Pi","Rho","Sigma","Tau","Upsilon","Phi","Chi","Psi","Alpha Alpha","Alpha Beta","Alpha Gamma","Alpha Delta","Alpha Epsilon","Alpha Zeta","Alpha Eta","Alpha Theta","Alpha Iota","Alpha Kappa","Alpha Lambda","Alpha Mu","Alpha Nu","Alpha Xi","Alpha Omicron","Alpha Pi","Alpha Rho","Alpha Sigma","Alpha Tau","Alpha Upsilon","Alpha Phi"];

function classColor(cn){const idx=CLASS_ORDER.indexOf(cn);const hue=idx<0?200:(idx*137.5)%360;return `hsl(${hue},55%,52%)`;}
const NODE_W=156,NODE_H=64,H_GAP=18,V_GAP=70;

function buildTree(members){const byId={};members.forEach(m=>{byId[m.id]={...m,children:[]};});const roots=[];members.forEach(m=>{if(m.bigId&&byId[m.bigId])byId[m.bigId].children.push(byId[m.id]);else roots.push(byId[m.id]);});return{roots,byId};}

function layoutTree(roots){const positions={};function measure(n){if(!n.children.length){n._sw=NODE_W;return NODE_W;}const total=n.children.reduce((s,c)=>s+measure(c)+H_GAP,-H_GAP);n._sw=Math.max(total,NODE_W);return n._sw;}function place(n,x,y){positions[n.id]={x:x+(n._sw||NODE_W)/2,y};let cx=x;n.children.forEach(c=>{place(c,cx,y+NODE_H+V_GAP);cx+=(c._sw||NODE_W)+H_GAP;});}let ox=0;roots.forEach(r=>{measure(r);place(r,ox,0);ox+=(r._sw||NODE_W)+60;});return positions;}

function getLineage(id,byId){const s=new Set();const up=mid=>{s.add(mid);const m=byId[mid];if(m?.bigId)up(m.bigId);};const down=mid=>{s.add(mid);(byId[mid]?.children||[]).forEach(c=>down(c.id));};up(id);down(id);return s;}

// ─── Login ────────────────────────────────────────────────────────────────────
function LoginScreen(){
  const[email,setEmail]=useState("");const[password,setPassword]=useState("");const[error,setError]=useState("");const[loading,setLoading]=useState(false);
  const handleLogin=async()=>{if(!email.trim()||!password.trim()){setError("Please enter your email and password.");return;}setLoading(true);setError("");const{error:err}=await supabase.auth.signInWithPassword({email:email.trim(),password});setLoading(false);if(err)setError(err.message);};
  return(
    <div style={{width:"100vw",height:"100vh",background:"#06060f",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'DM Sans',sans-serif"}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,700;1,400&display=swap');*{box-sizing:border-box;margin:0;padding:0}`}</style>
      <div style={{width:360,background:"#0c0c1c",border:"1px solid #1a1a2e",borderRadius:16,padding:36}}>
        <div style={{textAlign:"center",marginBottom:28}}>
          <div style={{fontFamily:"'Playfair Display',serif",fontSize:26,color:"#f5f5f5"}}>ΑΣΡ <span style={{fontStyle:"italic",fontWeight:400,fontSize:20,color:"#c0392b"}}>Family Tree</span></div>
          <div style={{fontSize:10,color:"#333",marginTop:4,letterSpacing:1}}>UGA · ALPHA CHAPTER</div>
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:12}}>
          <div><div style={{fontSize:11,color:"#444",marginBottom:4}}>Email</div><input type="email" placeholder="you@uga.edu" value={email} onChange={e=>setEmail(e.target.value)} onKeyDown={e=>e.key==="Enter"&&handleLogin()} style={{width:"100%",background:"#101020",border:"1px solid #22223a",borderRadius:8,color:"#e8e8f0",padding:"9px 12px",fontFamily:"'DM Sans',sans-serif",fontSize:13,outline:"none"}}/></div>
          <div><div style={{fontSize:11,color:"#444",marginBottom:4}}>Password</div><input type="password" placeholder="••••••••" value={password} onChange={e=>setPassword(e.target.value)} onKeyDown={e=>e.key==="Enter"&&handleLogin()} style={{width:"100%",background:"#101020",border:"1px solid #22223a",borderRadius:8,color:"#e8e8f0",padding:"9px 12px",fontFamily:"'DM Sans',sans-serif",fontSize:13,outline:"none"}}/></div>
          {error&&<div style={{fontSize:12,color:"#e74c3c",background:"#e74c3c11",border:"1px solid #e74c3c22",borderRadius:8,padding:"8px 12px"}}>{error}</div>}
          <button onClick={handleLogin} disabled={loading} style={{marginTop:4,background:"#c0392b",color:"#fff",border:"none",borderRadius:8,padding:"10px 0",fontSize:13,fontWeight:600,cursor:loading?"wait":"pointer",fontFamily:"'DM Sans',sans-serif",opacity:loading?0.7:1}}>{loading?"Signing in…":"Sign In"}</button>
        </div>
        <div style={{marginTop:20,fontSize:11,color:"#2a2a3a",textAlign:"center"}}>Access is restricted to chapter leadership.<br/>Contact your NMD or President to request access.</div>
      </div>
    </div>
  );
}

// ─── Admin Dashboard ──────────────────────────────────────────────────────────
function AdminDashboard({currentUser,onClose}){
  const[users,setUsers]=useState([]);const[loading,setLoading]=useState(true);
  const[inviteEmail,setInviteEmail]=useState("");const[invitePassword,setInvitePassword]=useState("");const[inviteRole,setInviteRole]=useState("member");
  const[inviteError,setInviteError]=useState("");const[inviteSuccess,setInviteSuccess]=useState("");const[inviting,setInviting]=useState(false);
  const fetchUsers=useCallback(async()=>{setLoading(true);const{data,error}=await supabase.from("user_roles").select("*").order("created_at",{ascending:false});if(!error)setUsers(data||[]);setLoading(false);},[]);
  useEffect(()=>{fetchUsers();},[fetchUsers]);
  const updateRole=async(userId,newRole)=>{await supabase.from("user_roles").update({role:newRole}).eq("id",userId);setUsers(u=>u.map(x=>x.id===userId?{...x,role:newRole}:x));};
  const createUser=async()=>{
    if(!inviteEmail.trim()||!invitePassword.trim()){setInviteError("Email and password are required.");return;}
    if(invitePassword.length<6){setInviteError("Password must be at least 6 characters.");return;}
    setInviting(true);setInviteError("");setInviteSuccess("");
    const{data,error}=await supabase.auth.signUp({email:inviteEmail.trim(),password:invitePassword,options:{emailRedirectTo:window.location.origin}});
    if(error){setInviteError(error.message);setInviting(false);return;}
    if(data.user){await supabase.from("user_roles").upsert({id:data.user.id,email:inviteEmail.trim(),role:inviteRole});setInviteSuccess(`Account created for ${inviteEmail.trim()}!`);setInviteEmail("");setInvitePassword("");setInviteRole("member");fetchUsers();}
    setInviting(false);
  };
  const inp={width:"100%",background:"#06060f",border:"1px solid #1a1a2e",borderRadius:7,color:"#e8e8f0",padding:"8px 11px",fontFamily:"'DM Sans',sans-serif",fontSize:13,outline:"none"};
  return(
    <div style={{position:"fixed",inset:0,background:"#06060fcc",zIndex:100,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'DM Sans',sans-serif"}} onClick={onClose}>
      <div style={{width:600,maxHeight:"85vh",background:"#0c0c1c",border:"1px solid #1a1a2e",borderRadius:16,overflow:"hidden",display:"flex",flexDirection:"column"}} onClick={e=>e.stopPropagation()}>
        <div style={{padding:"18px 24px",borderBottom:"1px solid #1a1a2e",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <div><div style={{fontSize:16,fontWeight:600,color:"#f0f0f0"}}>User Management</div><div style={{fontSize:11,color:"#444",marginTop:2}}>Admin only · {users.length} accounts</div></div>
          <button onClick={onClose} style={{background:"none",border:"none",color:"#444",cursor:"pointer",fontSize:22}}>×</button>
        </div>
        <div style={{overflowY:"auto",flex:1}}>
          <div style={{padding:"18px 24px",borderBottom:"1px solid #0f0f1f"}}>
            <div style={{fontSize:12,fontWeight:600,color:"#c0392b",textTransform:"uppercase",letterSpacing:0.8,marginBottom:12}}>Create Account</div>
            <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
              <input style={{...inp,flex:2,minWidth:160}} type="email" placeholder="Email address" value={inviteEmail} onChange={e=>setInviteEmail(e.target.value)}/>
              <input style={{...inp,flex:1.5,minWidth:120}} type="password" placeholder="Set password" value={invitePassword} onChange={e=>setInvitePassword(e.target.value)}/>
              <select style={{...inp,flex:1,minWidth:100}} value={inviteRole} onChange={e=>setInviteRole(e.target.value)}><option value="member">Member</option><option value="admin">Admin</option></select>
              <button onClick={createUser} disabled={inviting} style={{background:"#c0392b",color:"#fff",border:"none",borderRadius:7,padding:"8px 14px",fontSize:13,fontWeight:500,cursor:inviting?"wait":"pointer",whiteSpace:"nowrap",opacity:inviting?0.7:1}}>{inviting?"Creating…":"+ Create"}</button>
            </div>
            {inviteError&&<div style={{fontSize:12,color:"#e74c3c",marginTop:8}}>{inviteError}</div>}
            {inviteSuccess&&<div style={{fontSize:12,color:"#10b981",marginTop:8}}>{inviteSuccess}</div>}
          </div>
          <div style={{padding:"18px 24px"}}>
            <div style={{fontSize:12,fontWeight:600,color:"#555",textTransform:"uppercase",letterSpacing:0.8,marginBottom:12}}>All Accounts</div>
            {loading?<div style={{color:"#333",fontSize:13,padding:"20px 0"}}>Loading…</div>:users.length===0?<div style={{color:"#333",fontSize:13,padding:"20px 0"}}>No accounts yet.</div>:(
              <div style={{display:"flex",flexDirection:"column",gap:6}}>
                {users.map(u=>(
                  <div key={u.id} style={{display:"flex",alignItems:"center",gap:12,padding:"10px 14px",background:"#0a0a18",border:"1px solid #12121f",borderRadius:10}}>
                    <div style={{flex:1,minWidth:0}}>
                      <div style={{fontSize:13,color:"#ccc",fontWeight:500,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{u.email}</div>
                      {u.id===currentUser.id&&<div style={{fontSize:10,color:"#444",marginTop:1}}>you</div>}
                    </div>
                    <select value={u.role||"member"} onChange={e=>updateRole(u.id,e.target.value)} disabled={u.id===currentUser.id}
                      style={{background:"#06060f",border:`1px solid ${u.role==="admin"?"#c0392b44":"#1a1a2e"}`,borderRadius:6,color:u.role==="admin"?"#c0392b":"#555",padding:"4px 8px",fontSize:12,fontFamily:"'DM Sans',sans-serif",cursor:u.id===currentUser.id?"not-allowed":"pointer",outline:"none"}}>
                      <option value="member">Member</option><option value="admin">Admin</option>
                    </select>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── By Class Tab ─────────────────────────────────────────────────────────────
function ByClassTab({members,byId,onPickMember}){
  const byClass={};CLASS_ORDER.forEach(c=>{byClass[c]=[];});
  members.forEach(m=>{if(byClass[m.class_name])byClass[m.class_name].push(m);});
  const nodeC=m=>m.dynasty&&DYNASTY_COLORS[m.dynasty]?DYNASTY_COLORS[m.dynasty]:classColor(m.class_name);
  const getLineNum=m=>{if(m.id.startsWith('FM'))return Number(m.id.replace('FM',''));const n=Number(m.id);return isNaN(n)?null:n;};
  return(
    <div style={{padding:"80px 32px 60px",overflowY:"auto",height:"100vh",boxSizing:"border-box",background:"#06060f"}}>
      {CLASS_ORDER.filter(c=>byClass[c].length>0).map(cn=>{
        const ch=CLASS_HISTORY.find(h=>h.class_name===cn);
        const sem=byClass[cn][0]?.semester;
        return(
          <div key={cn} style={{marginBottom:48}}>
            <div style={{marginBottom:14,paddingBottom:12,borderBottom:"1px solid #0f0f1f"}}>
              <div style={{display:"flex",alignItems:"baseline",gap:12,marginBottom:8}}>
                <div style={{fontFamily:"'Playfair Display',serif",fontSize:22,color:"#f5f5f5"}}>{cn}</div>
                <div style={{fontSize:12,color:"#333"}}>{sem}</div>
                <div style={{fontSize:11,color:"#2a2a3a",marginLeft:"auto"}}>{byClass[cn].length} members</div>
              </div>
              {(ch?.nmd||ch?.nme||ch?.president)&&(
                <div style={{display:"flex",gap:20,flexWrap:"wrap"}}>
                  {ch?.nmd&&<div style={{display:"flex",alignItems:"center",gap:6}}><span style={{fontSize:9,color:"#f43f5e",textTransform:"uppercase",letterSpacing:.8,fontWeight:600}}>NMD</span><span style={{fontSize:12,color:"#c0687a"}}>{ch.nmd}</span></div>}
                  {ch?.nme&&<div style={{display:"flex",alignItems:"center",gap:6}}><span style={{fontSize:9,color:"#0ea5e9",textTransform:"uppercase",letterSpacing:.8,fontWeight:600}}>NME</span><span style={{fontSize:12,color:"#4a9fc0"}}>{ch.nme}</span></div>}
                  {ch?.president&&<div style={{display:"flex",alignItems:"center",gap:6}}><span style={{fontSize:9,color:"#10b981",textTransform:"uppercase",letterSpacing:.8,fontWeight:600}}>President</span><span style={{fontSize:12,color:"#4ab891"}}>{ch.president}</span></div>}
                </div>
              )}
            </div>
            <div style={{display:"flex",flexWrap:"wrap",gap:10}}>
              {byClass[cn].map(m=>{
                const c=nodeC(m);
                const big=m.bigId?byId[m.bigId]:null;
                const littles=(byId[m.id]?.children||[]);
                const lineNum=getLineNum(m);
                return(
                  <div key={m.id} onClick={()=>onPickMember(m)}
                    style={{background:"#0c0c1c",border:`1px solid ${c}22`,borderRadius:12,padding:"10px 14px",cursor:"pointer",minWidth:160,maxWidth:220,flex:"1 1 160px",transition:"all .15s",borderLeft:`3px solid ${c}`,position:"relative"}}
                    onMouseEnter={e=>e.currentTarget.style.background="#101028"}
                    onMouseLeave={e=>e.currentTarget.style.background="#0c0c1c"}>
                    <div style={{position:"absolute",top:8,right:10,fontSize:9,color:"#2a2a3a",fontWeight:600}}>#{lineNum}</div>
                    <div style={{fontSize:12,fontWeight:600,color:"#f0f0f0",paddingRight:24,lineHeight:1.3}}>{m.name}</div>
                    {m.nickname&&<div style={{fontSize:11,color:c,fontStyle:"italic",marginTop:2}}>{m.nickname}</div>}
                    {m.dynasty&&<div style={{fontSize:9,color:c,opacity:.6,marginTop:2,textTransform:"uppercase",letterSpacing:.5}}>{m.dynasty}</div>}
                    {big&&<div style={{marginTop:7,paddingTop:7,borderTop:"1px solid #0f0f1f"}}>
                      <div style={{fontSize:9,color:"#2a2a3a",textTransform:"uppercase",letterSpacing:.6,marginBottom:2}}>Big</div>
                      <div style={{fontSize:11,color:"#555"}}>{big.name}{big.nickname&&<span style={{color:nodeC(big),marginLeft:4,fontStyle:"italic"}}>· {big.nickname}</span>}</div>
                    </div>}
                    {littles.length>0&&<div style={{marginTop:6}}>
                      <div style={{fontSize:9,color:"#2a2a3a",textTransform:"uppercase",letterSpacing:.6,marginBottom:2}}>Littles</div>
                      <div style={{fontSize:11,color:"#555"}}>{littles.map(l=>l.nickname||l.name.split(" ")[0]).join(", ")}</div>
                    </div>}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Class History Tab ────────────────────────────────────────────────────────
function ClassHistoryTab(){
  return(
    <div style={{padding:"80px 24px 40px",overflowY:"auto",height:"100vh",boxSizing:"border-box"}}>
      <div style={{maxWidth:760,margin:"0 auto"}}>
        <div style={{fontFamily:"'Playfair Display',serif",fontSize:22,color:"#f0f0f0",marginBottom:4}}>Class History</div>
        <div style={{fontSize:11,color:"#333",marginBottom:28,letterSpacing:.8}}>NMD (MAMA) · NME (PAPA) · PRESIDENT</div>
        <div style={{display:"flex",flexDirection:"column",gap:2}}>
          {[...CLASS_HISTORY].reverse().map((ch,i)=>(
            <div key={ch.class_name} style={{display:"grid",gridTemplateColumns:"160px 1fr 1fr 1fr",gap:12,padding:"10px 16px",background:i%2===0?"#0a0a18":"transparent",borderRadius:8,alignItems:"center"}}>
              <div>
                <div style={{fontSize:13,color:"#e0e0e0",fontWeight:500}}>{ch.class_name}</div>
                <div style={{fontSize:10,color:"#333",marginTop:1}}>{ch.semester}</div>
              </div>
              <div style={{fontSize:12,color:ch.nmd?"#f43f5e":"#222"}}>{ch.nmd||"—"}</div>
              <div style={{fontSize:12,color:ch.nme?"#0ea5e9":"#222"}}>{ch.nme||"—"}</div>
              <div style={{fontSize:12,color:ch.president?"#10b981":"#222"}}>{ch.president||"—"}</div>
            </div>
          ))}
        </div>
        <div style={{display:"grid",gridTemplateColumns:"160px 1fr 1fr 1fr",gap:12,padding:"8px 16px",marginTop:8}}>
          <div/>
          <div style={{fontSize:10,color:"#f43f5e",letterSpacing:.8,textTransform:"uppercase"}}>NMD (Mama)</div>
          <div style={{fontSize:10,color:"#0ea5e9",letterSpacing:.8,textTransform:"uppercase"}}>NME (Papa)</div>
          <div style={{fontSize:10,color:"#10b981",letterSpacing:.8,textTransform:"uppercase"}}>President</div>
        </div>
      </div>
    </div>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────
export default function App(){
  const[session,setSession]=useState(null);const[userRole,setUserRole]=useState(null);const[authLoading,setAuthLoading]=useState(true);
  const[showDashboard,setShowDashboard]=useState(false);const[activeTab,setActiveTab]=useState("tree");
  const[members,setMembers]=useState(ASR_MEMBERS);const[selected,setSelected]=useState(null);const[highlighted,setHighlighted]=useState(null);
  const[search,setSearch]=useState("");const[searchResults,setSearchResults]=useState([]);
  const[zoom,setZoom]=useState(0.5);const[pan,setPan]=useState({x:80,y:100});const[isPanning,setIsPanning]=useState(false);
  const[dynastyFilter,setDynastyFilter]=useState(null);const[colorMode,setColorMode]=useState("dynasty");
  const[panel,setPanel]=useState(null);const[form,setForm]=useState({name:"",nickname:"",class_name:"Alpha Phi",bigId:""});
  const panStart=useRef(null);const svgRef=useRef(null);
  const isAdmin=userRole==="admin";

  useEffect(()=>{
    supabase.auth.getSession().then(async({data:{session}})=>{setSession(session);if(session)await fetchRole(session.user.id);setAuthLoading(false);});
    const{data:{subscription}}=supabase.auth.onAuthStateChange(async(_event,session)=>{setSession(session);if(session)await fetchRole(session.user.id);else setUserRole(null);});
    return()=>subscription.unsubscribe();
  },[]);

  const fetchRole=async(userId)=>{const{data}=await supabase.from("user_roles").select("role").eq("id",userId).single();setUserRole(data?.role||"member");};
  const handleSignOut=async()=>{await supabase.auth.signOut();setSession(null);setUserRole(null);setShowDashboard(false);};

  const active=members.filter(m=>!dynastyFilter||m.dynasty===dynastyFilter);
  const{roots,byId}=buildTree(active);const positions=layoutTree(roots);
  const vals=Object.values(positions);
  const bounds=vals.length?{minX:Math.min(...vals.map(p=>p.x))-NODE_W/2-60,minY:Math.min(...vals.map(p=>p.y))-40,maxX:Math.max(...vals.map(p=>p.x))+NODE_W/2+60,maxY:Math.max(...vals.map(p=>p.y))+NODE_H+60}:{minX:0,minY:0,maxX:1200,maxY:800};
  const svgW=bounds.maxX-bounds.minX,svgH=bounds.maxY-bounds.minY;

  useEffect(()=>{const el=svgRef.current;const fn=e=>{e.preventDefault();setZoom(z=>Math.max(0.08,Math.min(3,z*(e.deltaY>0?.92:1.09))));};el?.addEventListener("wheel",fn,{passive:false});return()=>el?.removeEventListener("wheel",fn);},[]);

  const onMouseDown=e=>{if(e.target.closest(".nc"))return;setIsPanning(true);panStart.current={x:e.clientX-pan.x,y:e.clientY-pan.y};};
  const onMouseMove=e=>{if(isPanning)setPan({x:e.clientX-panStart.current.x,y:e.clientY-panStart.current.y});};
  const onMouseUp=()=>setIsPanning(false);

  const doSearch=q=>{setSearch(q);if(!q.trim()){setSearchResults([]);return;}const lq=q.toLowerCase();setSearchResults(members.filter(m=>(m.name.toLowerCase().includes(lq)||(m.nickname&&m.nickname.toLowerCase().includes(lq))||(m.class_name&&m.class_name.toLowerCase().includes(lq)))).slice(0,7));};
  const pick=m=>{setHighlighted(m.id);setSelected(m.id);setSearch("");setSearchResults([]);setPanel(null);setActiveTab("tree");};
  const nodeC=m=>colorMode==="dynasty"&&m.dynasty&&DYNASTY_COLORS[m.dynasty]?DYNASTY_COLORS[m.dynasty]:classColor(m.class_name);
  const focusedLineage=highlighted?getLineage(highlighted,byId):null;
  const selM=selected?(byId[selected]||members.find(m=>m.id===selected)):null;

  const addMember=()=>{if(!form.name.trim()||!isAdmin)return;const nm={id:String(Date.now()),name:form.name.trim(),nickname:form.nickname.trim()||null,class_name:form.class_name,semester:"Spring 2026",bigId:form.bigId||null,dynasty:null,lineNumber:null,delettered:false};setMembers(p=>[...p,nm]);setForm({name:"",nickname:"",class_name:"Alpha Phi",bigId:""});setPanel(null);};

  const DYNASTIES=Object.keys(DYNASTY_COLORS);
  const edges=[];active.forEach(m=>{if(m.bigId&&positions[m.id]&&positions[m.bigId]){const inFocus=focusedLineage?focusedLineage.has(m.id)&&focusedLineage.has(m.bigId):true;edges.push({id:m.id,from:positions[m.bigId],to:positions[m.id],inFocus,dynasty:m.dynasty,member:m});}});

  if(authLoading)return(<div style={{width:"100vw",height:"100vh",background:"#06060f",display:"flex",alignItems:"center",justifyContent:"center"}}><div style={{color:"#222",fontFamily:"'DM Sans',sans-serif",fontSize:13}}>Loading…</div></div>);
  if(!session)return<LoginScreen/>;

  return(
    <div style={{width:"100vw",height:"100vh",background:"#06060f",fontFamily:"'DM Sans',sans-serif",overflow:"hidden",position:"relative",cursor:activeTab==="tree"?(isPanning?"grabbing":"grab"):"default"}}
      onMouseDown={activeTab==="tree"?onMouseDown:undefined} onMouseMove={activeTab==="tree"?onMouseMove:undefined} onMouseUp={activeTab==="tree"?onMouseUp:undefined} onMouseLeave={activeTab==="tree"?onMouseUp:undefined}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,700;1,400&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}::-webkit-scrollbar{width:4px}::-webkit-scrollbar-thumb{background:#222}
        .nc{cursor:pointer}
        input,select{background:#101020;border:1px solid #22223a;border-radius:8px;color:#e8e8f0;padding:8px 11px;font-family:'DM Sans',sans-serif;font-size:13px;width:100%;outline:none}
        input:focus,select:focus{border-color:#c0392b}input::placeholder{color:#444}select option{background:#101020}
        .btn{border:none;border-radius:8px;padding:8px 14px;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:500;cursor:pointer;transition:all .15s}
        .bp{background:#c0392b;color:#fff}.bp:hover{background:#a83226}
        .bg{background:transparent;color:#666;border:1px solid #22223a}.bg:hover{color:#ccc;border-color:#444}
      `}</style>

      {/* Header */}
      <div style={{position:"absolute",top:0,left:0,right:0,zIndex:10,padding:"14px 20px",display:"flex",alignItems:"center",gap:14,background:"linear-gradient(180deg,#06060f 60%,transparent)",pointerEvents:"none"}}>
        <div style={{pointerEvents:"all"}}>
          <div style={{fontFamily:"'Playfair Display',serif",fontSize:22,color:"#f5f5f5"}}>ΑΣΡ <span style={{fontStyle:"italic",fontWeight:400,fontSize:17,color:"#c0392b"}}>Family Tree</span></div>
          <div style={{fontSize:9,color:"#444",marginTop:1,letterSpacing:.8}}>UGA · ALPHA CHAPTER · EST. APRIL 2, 1998</div>
        </div>

        {/* Tabs */}
        <div style={{pointerEvents:"all",display:"flex",gap:2,background:"#101020",border:"1px solid #22223a",borderRadius:8,padding:3}}>
          {[["tree","Tree"],["byclass","By Class"],["history","Class History"]].map(([k,l])=>(
            <button key={k} onClick={()=>setActiveTab(k)} style={{padding:"5px 12px",borderRadius:6,border:"none",fontSize:11,fontWeight:500,cursor:"pointer",background:activeTab===k?"#c0392b":"transparent",color:activeTab===k?"white":"#666",transition:"all .15s"}}>{l}</button>
          ))}
        </div>

        <div style={{flex:1}}/>

        {/* Search */}
        <div style={{position:"relative",pointerEvents:"all",zIndex:100}}>
          <input placeholder="Search by name or line name…" value={search} onChange={e=>doSearch(e.target.value)} onKeyDown={e=>{if(e.key==="Escape"){setSearch("");setSearchResults([]);}}} style={{width:240}}/>
          {searchResults.length>0&&(
            <div style={{position:"absolute",top:"calc(100% + 4px)",left:0,right:0,background:"#101020",border:"1px solid #22223a",borderRadius:10,overflow:"hidden",zIndex:200}}>
              {searchResults.map(m=>(
                <div key={m.id} style={{padding:"8px 12px",cursor:"pointer",borderBottom:"1px solid #16162a"}} onMouseEnter={e=>e.currentTarget.style.background="#18183a"} onMouseLeave={e=>e.currentTarget.style.background="transparent"} onClick={()=>pick(m)}>
                  <div style={{fontSize:13,color:"#e8e8f0",fontWeight:500}}>{m.name}</div>
                  <div style={{fontSize:11,color:"#555",display:"flex",gap:8}}>{m.nickname&&<span style={{color:nodeC(m)}}>{m.nickname}</span>}<span>{m.class_name}</span>{m.dynasty&&<span>· {m.dynasty}</span>}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Auth + admin controls */}
        <div style={{pointerEvents:"all",display:"flex",alignItems:"center",gap:8}}>
          {isAdmin&&(<><button className="btn bp" onClick={()=>{setPanel("add");setSelected(null);}}>+ Add</button><button className="btn bg" onClick={()=>setShowDashboard(true)} style={{padding:"8px 10px",fontSize:15}} title="User Management">⚙</button></>)}
          <div style={{display:"flex",alignItems:"center",gap:8,background:"#101020",border:"1px solid #1a1a2e",borderRadius:8,padding:"5px 10px"}}>
            <div style={{width:7,height:7,borderRadius:"50%",background:isAdmin?"#c0392b":"#333"}}/>
            <span style={{fontSize:11,color:"#555",maxWidth:140,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{session.user.email}</span>
            <button onClick={handleSignOut} style={{background:"none",border:"none",color:"#333",cursor:"pointer",fontSize:11,padding:0,marginLeft:2}}>Sign out</button>
          </div>
        </div>
        {highlighted&&activeTab==="tree"&&<button className="btn bg" style={{pointerEvents:"all"}} onClick={()=>{setHighlighted(null);setSelected(null);}}>✕ Clear</button>}
      </div>

      {/* Dynasty filter — tree only */}
      {activeTab==="tree"&&(
        <div style={{position:"absolute",top:68,left:20,zIndex:9,display:"flex",gap:6,flexWrap:"wrap",pointerEvents:"all"}}>
          <button onClick={()=>setDynastyFilter(null)} style={{padding:"4px 10px",borderRadius:20,border:"1px solid",fontSize:11,fontWeight:500,cursor:"pointer",borderColor:!dynastyFilter?"white":"#2a2a3a",background:!dynastyFilter?"#c0392b":"transparent",color:!dynastyFilter?"white":"#666",transition:"all .2s"}}>All Lines</button>
          {DYNASTIES.map(d=>(<button key={d} onClick={()=>setDynastyFilter(dynastyFilter===d?null:d)} style={{padding:"4px 10px",borderRadius:20,border:`1px solid ${DYNASTY_COLORS[d]}`,fontSize:11,fontWeight:500,cursor:"pointer",background:dynastyFilter===d?DYNASTY_COLORS[d]+"33":"transparent",color:dynastyFilter===d?DYNASTY_COLORS[d]:"#666",transition:"all .2s"}}>{d}</button>))}
        </div>
      )}

      {/* Stats */}
      {activeTab==="tree"&&(
        <div style={{position:"absolute",top:68,right:20,zIndex:9,background:"#0c0c1c",border:"1px solid #1a1a2e",borderRadius:10,padding:"8px 16px",display:"flex",gap:20,alignItems:"center",pointerEvents:"none"}}>
          <div style={{textAlign:"center"}}><div style={{fontSize:20,fontWeight:700,color:"#f5f5f5",fontFamily:"'Playfair Display',serif"}}>{members.length}</div><div style={{fontSize:9,color:"#444",textTransform:"uppercase",letterSpacing:.8}}>Members</div></div>
          <div style={{textAlign:"center"}}><div style={{fontSize:20,fontWeight:700,color:"#f5f5f5",fontFamily:"'Playfair Display',serif"}}>{CLASS_ORDER.length}</div><div style={{fontSize:9,color:"#444",textTransform:"uppercase",letterSpacing:.8}}>Classes</div></div>
          <div style={{textAlign:"center"}}><div style={{fontSize:11,fontWeight:600,color:"#c0392b"}}>Newest</div><div style={{fontSize:10,color:"#888"}}>Alpha Phi SP26</div></div>
        </div>
      )}

      {/* Zoom controls — tree only */}
      {activeTab==="tree"&&(
        <div style={{position:"absolute",bottom:24,right:20,zIndex:10,display:"flex",flexDirection:"column",gap:4}}>
          {[["＋",()=>setZoom(z=>Math.min(3,z*1.2))],["－",()=>setZoom(z=>Math.max(0.08,z/1.2))],["⊡",()=>{setZoom(0.5);setPan({x:80,y:100});}]].map(([l,fn])=>(
            <button key={l} onClick={fn} style={{width:34,height:34,borderRadius:7,background:"#0c0c1c",border:"1px solid #1a1a2e",color:"#777",fontSize:l==="⊡"?14:18,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>{l}</button>
          ))}
        </div>
      )}

      {/* Dynasty legend — tree only */}
      {activeTab==="tree"&&colorMode==="dynasty"&&(
        <div style={{position:"absolute",bottom:24,left:20,zIndex:9,background:"#0c0c1c",border:"1px solid #1a1a2e",borderRadius:10,padding:"10px 14px",pointerEvents:"none"}}>
          <div style={{fontSize:9,color:"#333",textTransform:"uppercase",letterSpacing:1,marginBottom:6}}>Dynasties</div>
          {DYNASTIES.map(d=>(<div key={d} style={{display:"flex",alignItems:"center",gap:7,marginBottom:3}}><div style={{width:8,height:8,borderRadius:"50%",background:DYNASTY_COLORS[d]}}/><span style={{fontSize:11,color:"#777"}}>{d}</span></div>))}
        </div>
      )}

      {/* Watermark */}
      <div style={{position:"absolute",bottom:10,left:"50%",transform:"translateX(-50%)",zIndex:5,pointerEvents:"none"}}>
        <span style={{fontSize:10,color:"#1a1a2e",letterSpacing:1.5,fontFamily:"'DM Sans',sans-serif"}}>GREEKROOTS</span>
      </div>

      {/* Tab content */}
      {activeTab==="byclass"&&<ByClassTab members={members} byId={byId} onPickMember={pick}/>}
      {activeTab==="history"&&<ClassHistoryTab/>}

      {/* Tree canvas */}
      {activeTab==="tree"&&(
        <div ref={svgRef} style={{width:"100%",height:"100%",overflow:"hidden"}}>
          <svg style={{transform:`translate(${pan.x}px,${pan.y}px) scale(${zoom})`,transformOrigin:"0 0",willChange:"transform"}} width={svgW} height={svgH}>
            <defs>{active.map(m=>{const c=nodeC(m);return(<linearGradient key={m.id} id={`g${m.id}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={c} stopOpacity=".2"/><stop offset="100%" stopColor={c} stopOpacity=".06"/></linearGradient>);})}</defs>
            {edges.map(({id,from,to,inFocus,member})=>{const fx=from.x-bounds.minX,fy=from.y-bounds.minY+NODE_H,tx=to.x-bounds.minX,ty=to.y-bounds.minY,my=(fy+ty)/2;const sc=member.dynasty&&DYNASTY_COLORS[member.dynasty]?DYNASTY_COLORS[member.dynasty]:(colorMode==="class"?"#c0392b":"#2a2a3a");return(<path key={id} d={`M${fx} ${fy} C${fx} ${my},${tx} ${my},${tx} ${ty}`} fill="none" stroke={inFocus?sc:"#141428"} strokeWidth={inFocus?(focusedLineage?2:1.2):.7} opacity={focusedLineage?(inFocus?.9:.1):.5}/>);})}
            {active.filter(m=>positions[m.id]).map(m=>{
              const pos=positions[m.id],x=pos.x-bounds.minX-NODE_W/2,y=pos.y-bounds.minY;
              const c=nodeC(m),isSel=selected===m.id,isHL=highlighted===m.id,inFocus=focusedLineage?focusedLineage.has(m.id):true,isNew=m.class_name==="Alpha Phi",littles=(byId[m.id]?.children||[]).length;
              return(
                <g key={m.id} className="nc" transform={`translate(${x},${y})`} onClick={e=>{e.stopPropagation();if(isSel&&isHL){setSelected(null);setHighlighted(null);}else{pick(m);}}} style={{opacity:focusedLineage?(inFocus?1:.12):1}}>
                  {isNew&&<rect x={-3} y={-3} width={NODE_W+6} height={NODE_H+6} rx={13} fill="none" stroke={c} strokeWidth={1.5} strokeDasharray="4 3" opacity={.7}/>}
                  <rect x={0} y={0} width={NODE_W} height={NODE_H} rx={10} fill={`url(#g${m.id})`} stroke={isSel||isHL?c:"#1c1c30"} strokeWidth={isSel||isHL?1.5:.7}/>
                  <rect x={0} y={0} width={4} height={NODE_H} rx={4} fill={c} opacity={.9}/>
                  <text x={13} y={20} fill="#f0f0f0" fontSize={11.5} fontWeight={500} fontFamily="'DM Sans',sans-serif">{m.name.length>18?m.name.slice(0,17)+"…":m.name}</text>
                  {m.nickname&&<text x={13} y={33} fill={c} fontSize={10.5} fontFamily="'DM Sans',sans-serif" opacity={.95}>{m.nickname.length>20?m.nickname.slice(0,19)+"…":m.nickname}</text>}
                  <text x={13} y={46} fill="#444" fontSize={9.5} fontFamily="'DM Sans',sans-serif">{m.class_name}</text>
                  {(()=>{const ln=m.id.startsWith('FM')?Number(m.id.replace('FM','')):Number(m.id);return !isNaN(ln)?<text x={NODE_W-8} y={20} fill="#333" fontSize={9} fontFamily="'DM Sans',sans-serif" textAnchor="end">#{ln}</text>:null;})()}
                  {littles>0&&<text x={NODE_W-8} y={58} fill="#444" fontSize={9} fontFamily="'DM Sans',sans-serif" textAnchor="end">{littles}↓</text>}
                </g>
              );
            })}
          </svg>
        </div>
      )}

      {/* Detail panel */}
      {selM&&panel!=="add"&&activeTab==="tree"&&(
        <div style={{position:"absolute",top:"50%",right:20,transform:"translateY(-50%)",width:260,background:"#0c0c1c",border:"1px solid #1a1a2e",borderRadius:14,padding:18,zIndex:20}} onClick={e=>e.stopPropagation()}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:12}}>
            <div>
              <div style={{fontSize:15,fontWeight:600,color:"#f0f0f0",lineHeight:1.3}}>{selM.name}</div>
              {selM.nickname&&<div style={{fontSize:12,color:nodeC(selM),marginTop:2,fontStyle:"italic"}}>"{selM.nickname}"</div>}
            </div>
            <button onClick={()=>{setSelected(null);setHighlighted(null);}} style={{background:"none",border:"none",color:"#444",cursor:"pointer",fontSize:19,lineHeight:1}}>×</button>
          </div>
          <div style={{display:"flex",flexWrap:"wrap",gap:5,marginBottom:12}}>
            <span style={{padding:"3px 9px",borderRadius:20,fontSize:11,fontWeight:500,background:nodeC(selM)+"22",color:nodeC(selM),border:`1px solid ${nodeC(selM)}44`}}>{selM.class_name}</span>
            {selM.dynasty&&<span style={{padding:"3px 9px",borderRadius:20,fontSize:11,fontWeight:500,background:(DYNASTY_COLORS[selM.dynasty]||"#888")+"22",color:DYNASTY_COLORS[selM.dynasty]||"#888",border:`1px solid ${(DYNASTY_COLORS[selM.dynasty]||"#888")}44`}}>{selM.dynasty} Line</span>}
            {(()=>{const ln=selM.id.startsWith('FM')?Number(selM.id.replace('FM','')):Number(selM.id);return !isNaN(ln)?<span style={{padding:'3px 9px',borderRadius:20,fontSize:11,color:'#555',border:'1px solid #1a1a2e'}}>#{ln}</span>:null;})()}
            {selM.semester&&<span style={{padding:"3px 9px",borderRadius:20,fontSize:11,color:"#555",border:"1px solid #1a1a2e"}}>{selM.semester}</span>}
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:10,marginBottom:14,fontSize:13}}>
            {selM.bigId&&byId[selM.bigId]&&(<div><div style={{fontSize:9,color:"#333",textTransform:"uppercase",letterSpacing:.8,marginBottom:3}}>Big Sister</div><div style={{color:"#aaa",cursor:"pointer"}} onClick={()=>pick(byId[selM.bigId])}>{byId[selM.bigId].name}{byId[selM.bigId].nickname&&<span style={{color:nodeC(byId[selM.bigId]),marginLeft:5,fontStyle:"italic",fontSize:11}}>"{byId[selM.bigId].nickname}"</span>}</div></div>)}
            {(byId[selM.id]?.children||[]).length>0&&(<div><div style={{fontSize:9,color:"#333",textTransform:"uppercase",letterSpacing:.8,marginBottom:4}}>Littles ({(byId[selM.id]?.children||[]).length})</div><div style={{display:"flex",flexDirection:"column",gap:3,maxHeight:130,overflowY:"auto"}}>{(byId[selM.id]?.children||[]).map(c=>(<div key={c.id} style={{color:"#aaa",fontSize:12,cursor:"pointer",paddingLeft:8,borderLeft:`2px solid ${nodeC(c)}44`}} onClick={()=>pick(c)}>{c.name}{c.nickname&&<span style={{color:nodeC(c),marginLeft:4,fontStyle:"italic",fontSize:11}}>"{c.nickname}"</span>}</div>))}</div></div>)}
          </div>
          {isAdmin&&(<button className="btn bg" style={{textAlign:"left",fontSize:12}} onClick={()=>{setForm({name:"",nickname:"",class_name:"Alpha Phi",bigId:selM.id});setPanel("add");}}>+ Add little under {selM.name.split(" ")[0]}</button>)}
        </div>
      )}

      {/* Add panel */}
      {panel==="add"&&isAdmin&&(
        <div style={{position:"absolute",top:"50%",right:20,transform:"translateY(-50%)",width:268,background:"#0c0c1c",border:"1px solid #1a1a2e",borderRadius:14,padding:18,zIndex:20}} onClick={e=>e.stopPropagation()}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
            <div style={{fontSize:15,fontWeight:600,color:"#f0f0f0"}}>Add New Member</div>
            <button onClick={()=>setPanel(null)} style={{background:"none",border:"none",color:"#444",cursor:"pointer",fontSize:19}}>×</button>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:9}}>
            <div><div style={{fontSize:10,color:"#444",marginBottom:3}}>Full Name *</div><input placeholder="e.g. Mia Kim" value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))}/></div>
            <div><div style={{fontSize:10,color:"#444",marginBottom:3}}>Line Name</div><input placeholder="e.g. Aurora" value={form.nickname} onChange={e=>setForm(f=>({...f,nickname:e.target.value}))}/></div>
            <div><div style={{fontSize:10,color:"#444",marginBottom:3}}>Pledge Class</div><input value={form.class_name} onChange={e=>setForm(f=>({...f,class_name:e.target.value}))}/></div>
            <div><div style={{fontSize:10,color:"#444",marginBottom:3}}>Big Sister</div>
              <select value={form.bigId} onChange={e=>setForm(f=>({...f,bigId:e.target.value}))}>
                <option value="">— No big —</option>
                {members.sort((a,b)=>a.name.localeCompare(b.name)).map(m=>(<option key={m.id} value={m.id}>{m.name}{m.nickname?` (${m.nickname})`:""} · {m.class_name}</option>))}
              </select>
            </div>
            <div style={{display:"flex",gap:7,marginTop:3}}>
              <button className="btn bg" style={{flex:1}} onClick={()=>setPanel(null)}>Cancel</button>
              <button className="btn bp" style={{flex:1}} onClick={addMember} disabled={!form.name.trim()}>Add</button>
            </div>
          </div>
        </div>
      )}

      {showDashboard&&isAdmin&&<AdminDashboard currentUser={session.user} onClose={()=>setShowDashboard(false)}/>}
    </div>
  );
}
