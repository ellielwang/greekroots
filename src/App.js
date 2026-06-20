import { useState, useRef, useEffect, useCallback } from "react";

const ASR_MEMBERS = [{"id":"Irene Hs","name":"Irene Hsiao Chuan Chien","nickname":null,"class_name":"Founding Mother","semester":"April 1998","bigId":null,"dynasty":null,"status":"active"},{"id":"Sandra C","name":"Sandra Chu","nickname":null,"class_name":"Founding Mother","semester":"April 1998","bigId":null,"dynasty":null,"status":"active"},{"id":"Young Je","name":"Young Jeon","nickname":null,"class_name":"Founding Mother","semester":"April 1998","bigId":null,"dynasty":null,"status":"active"},{"id":"Debbie K","name":"Debbie Kwon","nickname":null,"class_name":"Founding Mother","semester":"April 1998","bigId":null,"dynasty":null,"status":"active"},{"id":"Angela M","name":"Angela Mai Lu","nickname":null,"class_name":"Founding Mother","semester":"April 1998","bigId":null,"dynasty":null,"status":"active"},{"id":"Lynn Ngu","name":"Lynn Nguyen","nickname":null,"class_name":"Founding Mother","semester":"April 1998","bigId":null,"dynasty":null,"status":"active"},{"id":"Yalin An","name":"Yalin Anne See","nickname":null,"class_name":"Founding Mother","semester":"April 1998","bigId":null,"dynasty":"Lola","status":"active"},{"id":"Yeon Gyo","name":"Yeon Gyo Anna Suh","nickname":null,"class_name":"Founding Mother","semester":"April 1998","bigId":null,"dynasty":null,"status":"active"},{"id":"Juliette","name":"Juliette Cheng Taylor","nickname":null,"class_name":"Founding Mother","semester":"April 1998","bigId":null,"dynasty":null,"status":"active"},{"id":"Jessica ","name":"Jessica Yoo","nickname":null,"class_name":"Founding Mother","semester":"April 1998","bigId":null,"dynasty":null,"status":"active"},{"id":"Suzanne ","name":"Suzanne Yoo","nickname":null,"class_name":"Founding Mother","semester":"April 1998","bigId":null,"dynasty":null,"status":"active"},{"id":"Jasmine ","name":"Jasmine Yu","nickname":null,"class_name":"Founding Mother","semester":"April 1998","bigId":null,"dynasty":null,"status":"active"},{"id":"13","name":"Helen Baik","nickname":null,"class_name":"Charter","semester":"Fall 1998","bigId":null,"dynasty":null,"status":"active"},{"id":"14","name":"Judy Hong","nickname":null,"class_name":"Charter","semester":"Fall 1998","bigId":null,"dynasty":null,"status":"active"},{"id":"15","name":"Haeyong Kwak","nickname":null,"class_name":"Charter","semester":"Fall 1998","bigId":"Jasmine ","dynasty":null,"status":"active"},{"id":"16","name":"Ester Lee","nickname":null,"class_name":"Charter","semester":"Fall 1998","bigId":null,"dynasty":null,"status":"active"},{"id":"17","name":"Johanna Lee","nickname":null,"class_name":"Charter","semester":"Fall 1998","bigId":null,"dynasty":null,"status":"active"},{"id":"18","name":"Sophia Cheung","nickname":null,"class_name":"Alpha","semester":"Spring 1999","bigId":"Yalin An","dynasty":"Lola","status":"active"},{"id":"19","name":"Mimi Hsing","nickname":null,"class_name":"Alpha","semester":"Spring 1999","bigId":null,"dynasty":null,"status":"active"},{"id":"20","name":"Ji-Eun Kim","nickname":null,"class_name":"Alpha","semester":"Spring 1999","bigId":null,"dynasty":null,"status":"active"},{"id":"21","name":"Melissa Lee","nickname":null,"class_name":"Alpha","semester":"Spring 1999","bigId":null,"dynasty":null,"status":"active"},{"id":"22","name":"Christine Tan","nickname":null,"class_name":"Alpha","semester":"Spring 1999","bigId":null,"dynasty":null,"status":"active"},{"id":"23","name":"Eunice Wang","nickname":null,"class_name":"Alpha","semester":"Spring 1999","bigId":"15","dynasty":null,"status":"active"},{"id":"24","name":"Sunny Wu","nickname":null,"class_name":"Alpha","semester":"Spring 1999","bigId":"Sandra C","dynasty":null,"status":"active"},{"id":"25","name":"Carmen Cheng","nickname":null,"class_name":"Beta","semester":"Fall 1999","bigId":null,"dynasty":null,"status":"active"},{"id":"26","name":"Julie Kang","nickname":null,"class_name":"Beta","semester":"Fall 1999","bigId":null,"dynasty":null,"status":"active"},{"id":"27","name":"Mary Kao","nickname":null,"class_name":"Beta","semester":"Fall 1999","bigId":"18","dynasty":"Lola","status":"active"},{"id":"28","name":"Anita Hsu","nickname":null,"class_name":"Beta","semester":"Fall 1999","bigId":"24","dynasty":null,"status":"active"},{"id":"29","name":"Julie Lee","nickname":null,"class_name":"Beta","semester":"Fall 1999","bigId":null,"dynasty":null,"status":"active"},{"id":"30","name":"Eugenie Ooi","nickname":null,"class_name":"Beta","semester":"Fall 1999","bigId":null,"dynasty":null,"status":"active"},{"id":"31","name":"Gemma Suh","nickname":null,"class_name":"Beta","semester":"Fall 1999","bigId":"Sandra C","dynasty":null,"status":"active"},{"id":"32","name":"Li Wang","nickname":null,"class_name":"Beta","semester":"Fall 1999","bigId":null,"dynasty":null,"status":"active"},{"id":"33","name":"Gwen Dao","nickname":null,"class_name":"Gamma","semester":"Spring 2000","bigId":null,"dynasty":null,"status":"active"},{"id":"34","name":"Trinh Le","nickname":null,"class_name":"Gamma","semester":"Spring 2000","bigId":"31","dynasty":null,"status":"active"},{"id":"35","name":"Teri Lee","nickname":null,"class_name":"Gamma","semester":"Spring 2000","bigId":null,"dynasty":null,"status":"active"},{"id":"36","name":"Theuec N Ju","nickname":null,"class_name":"Gamma","semester":"Spring 2000","bigId":null,"dynasty":null,"status":"active"},{"id":"37","name":"Vivian Lee","nickname":null,"class_name":"Gamma","semester":"Spring 2000","bigId":null,"dynasty":null,"status":"active"},{"id":"38","name":"Lisa Schultheiss","nickname":null,"class_name":"Gamma","semester":"Spring 2000","bigId":"24","dynasty":null,"status":"active"},{"id":"39","name":"Amy Teng","nickname":null,"class_name":"Gamma","semester":"Spring 2000","bigId":"27","dynasty":"Lola","status":"active"},{"id":"40","name":"Grace Chan","nickname":null,"class_name":"Delta","semester":"Fall 2001","bigId":null,"dynasty":null,"status":"active"},{"id":"41","name":"Hsiao-Ting Chou","nickname":null,"class_name":"Delta","semester":"Fall 2001","bigId":null,"dynasty":null,"status":"active"},{"id":"42","name":"Quyen Dam","nickname":null,"class_name":"Delta","semester":"Fall 2001","bigId":null,"dynasty":null,"status":"active"},{"id":"43","name":"Sandy Duong","nickname":null,"class_name":"Delta","semester":"Fall 2001","bigId":null,"dynasty":null,"status":"active"},{"id":"44","name":"Ming-Ai Hii","nickname":null,"class_name":"Delta","semester":"Fall 2001","bigId":null,"dynasty":null,"status":"active"},{"id":"45","name":"Peggy Lee","nickname":null,"class_name":"Delta","semester":"Fall 2001","bigId":null,"dynasty":null,"status":"active"},{"id":"46","name":"Anne Nguyen","nickname":null,"class_name":"Delta","semester":"Fall 2001","bigId":null,"dynasty":null,"status":"active"},{"id":"47","name":"Stephanie Young","nickname":null,"class_name":"Delta","semester":"Fall 2001","bigId":null,"dynasty":null,"status":"active"},{"id":"48","name":"Crystal Cook","nickname":null,"class_name":"Epsilon","semester":"Spring 2002","bigId":null,"dynasty":null,"status":"active"},{"id":"49","name":"Judy Insixiengmay","nickname":null,"class_name":"Epsilon","semester":"Spring 2002","bigId":"39","dynasty":"Lola","status":"active"},{"id":"50","name":"Jennifer Lee","nickname":null,"class_name":"Epsilon","semester":"Spring 2002","bigId":null,"dynasty":null,"status":"active"},{"id":"53","name":"Iris Liaw","nickname":null,"class_name":"Zeta","semester":"Fall 2002","bigId":"49","dynasty":"Lola","status":"active"},{"id":"54","name":"Linda Liu","nickname":null,"class_name":"Zeta","semester":"Fall 2002","bigId":null,"dynasty":null,"status":"active"},{"id":"55","name":"Celine","nickname":null,"class_name":"Zeta","semester":"Fall 2002","bigId":null,"dynasty":"Pasithea","status":"active"},{"id":"56","name":"Crystal Ni","nickname":null,"class_name":"Zeta","semester":"Fall 2002","bigId":null,"dynasty":null,"status":"active"},{"id":"57","name":"Poou Seele","nickname":null,"class_name":"Zeta","semester":"Fall 2002","bigId":null,"dynasty":null,"status":"active"},{"id":"58","name":"Pam Song","nickname":null,"class_name":"Zeta","semester":"Fall 2002","bigId":null,"dynasty":null,"status":"active"},{"id":"59","name":"Amy Tang","nickname":null,"class_name":"Zeta","semester":"Fall 2002","bigId":"38","dynasty":null,"status":"active"},{"id":"60","name":"Angela Wang","nickname":null,"class_name":"Zeta","semester":"Fall 2002","bigId":null,"dynasty":null,"status":"active"},{"id":"61","name":"Tiffney Kim","nickname":"Ajuma","class_name":"Eta","semester":"Fall 2004","bigId":"77","dynasty":null,"status":"active"},{"id":"62","name":"Olivia Wu","nickname":"Perfect Ten","class_name":"Eta","semester":"Fall 2004","bigId":"55","dynasty":null,"status":"active"},{"id":"63","name":"Ashley Chung","nickname":"Roadrunner","class_name":"Theta","semester":"Fall 2005","bigId":null,"dynasty":null,"status":"active"},{"id":"64","name":"Julie Leung","nickname":"Tweety","class_name":"Theta","semester":"Fall 2005","bigId":null,"dynasty":null,"status":"active"},{"id":"65","name":"Kate Pornsopone","nickname":"Lola","class_name":"Theta","semester":"Fall 2005","bigId":"53","dynasty":"Lola","status":"active"},{"id":"66","name":"Cindy Shin","nickname":"Boo","class_name":"Theta","semester":"Fall 2005","bigId":null,"dynasty":null,"status":"active"},{"id":"67","name":"Ashley Chen","nickname":"Pumba","class_name":"Iota","semester":"Spring 2006","bigId":"65","dynasty":"Lola","status":"active"},{"id":"70","name":"Nikki Yu","nickname":"Belle","class_name":"Iota","semester":"Spring 2006","bigId":null,"dynasty":null,"status":"active"},{"id":"71","name":"Mei-Hong Liu","nickname":"Egg Roll","class_name":"Kappa","semester":"Fall 2006","bigId":"67","dynasty":"Lola","status":"active"},{"id":"72","name":"Crystal Yang","nickname":"Bubbalicious","class_name":"Kappa","semester":"Fall 2006","bigId":"53","dynasty":null,"status":"active"},{"id":"73","name":"Duong Pham","nickname":null,"class_name":"Kappa","semester":"Fall 2006","bigId":null,"dynasty":null,"status":"active"},{"id":"74","name":"Arisa Mitsunaga","nickname":null,"class_name":"Kappa","semester":"Fall 2006","bigId":null,"dynasty":null,"status":"active"},{"id":"75","name":"Jessica Chen","nickname":"Panda","class_name":"Kappa","semester":"Fall 2006","bigId":null,"dynasty":null,"status":"active"},{"id":"76","name":"Nancy Xiong","nickname":"Chili","class_name":"Lambda","semester":"Spring 2007","bigId":"65","dynasty":"Lola","status":"active"},{"id":"77","name":"Linda Nguyen","nickname":null,"class_name":"Lambda","semester":"Spring 2007","bigId":"61","dynasty":null,"status":"active"},{"id":"78","name":"Stephanie Franklyn","nickname":"Ace","class_name":"Lambda","semester":"Spring 2007","bigId":"71","dynasty":"Lola","status":"active"},{"id":"79","name":"Janice Wu","nickname":null,"class_name":"Lambda","semester":"Spring 2007","bigId":"66","dynasty":null,"status":"active"},{"id":"80","name":"Tien Nguyen","nickname":"Oreo","class_name":"Lambda","semester":"Spring 2007","bigId":"59","dynasty":null,"status":"active"},{"id":"81","name":"Si-Ing Chen","nickname":"Tokyo","class_name":"Mu","semester":"Fall 2007","bigId":"67","dynasty":"Snuggle Bear","status":"active"},{"id":"87","name":"Michelle Cheng","nickname":"Sonata","class_name":"Mu","semester":"Fall 2007","bigId":"70","dynasty":null,"status":"active"},{"id":"88","name":"Jenni Simpliciano","nickname":"Tink","class_name":"Mu","semester":"Fall 2007","bigId":null,"dynasty":null,"status":"active"},{"id":"89","name":"Thuan Yen Tran","nickname":"Tasty","class_name":"Mu","semester":"Fall 2007","bigId":null,"dynasty":null,"status":"active"},{"id":"90","name":"Patricia Tran","nickname":"Pointe","class_name":"Mu","semester":"Fall 2007","bigId":"72","dynasty":null,"status":"active"},{"id":"91","name":"Shuyan Wei","nickname":"Cherie","class_name":"Mu","semester":"Fall 2007","bigId":"62","dynasty":"Pasithea","status":"active"},{"id":"92","name":"Ellen Yeun","nickname":"Lenox","class_name":"Mu","semester":"Fall 2007","bigId":null,"dynasty":null,"status":"active"},{"id":"93","name":"Rachel Chang","nickname":"Sharp","class_name":"Nu","semester":"Spring 2008","bigId":"65","dynasty":"Lola","status":"active"},{"id":"94","name":"Britanny Ng","nickname":"Polo","class_name":"Nu","semester":"Spring 2008","bigId":"80","dynasty":null,"status":"active"},{"id":"95","name":"Christina Abney","nickname":"Monkey","class_name":"Xi","semester":"Fall 2008","bigId":"88","dynasty":null,"status":"active"},{"id":"96","name":"Katy Chow","nickname":"Cesar","class_name":"Xi","semester":"Fall 2008","bigId":"94","dynasty":null,"status":"active"},{"id":"97","name":"Laura Insixiengmay","nickname":null,"class_name":"Xi","semester":"Fall 2008","bigId":null,"dynasty":null,"status":"active"},{"id":"98","name":"Angela Kang","nickname":"Snapshot","class_name":"Xi","semester":"Fall 2008","bigId":"90","dynasty":null,"status":"active"},{"id":"99","name":"Debbi Kuo","nickname":"Pasithea","class_name":"Xi","semester":"Fall 2008","bigId":"91","dynasty":"Pasithea","status":"active"},{"id":"100","name":"Jenny Lu","nickname":null,"class_name":"Xi","semester":"Fall 2008","bigId":"78","dynasty":"Lola","status":"active"},{"id":"101","name":"Karen Nguyen","nickname":"Lucky7","class_name":"Xi","semester":"Fall 2008","bigId":"93","dynasty":"Lola","status":"active"},{"id":"102","name":"Irene Yi-Ling Yang","nickname":"Doodle","class_name":"Xi","semester":"Fall 2008","bigId":"87","dynasty":null,"status":"active"},{"id":"103","name":"Qin Zheng","nickname":"Chicken Little","class_name":"Xi","semester":"Fall 2008","bigId":"71","dynasty":"Lola","status":"active"},{"id":"104","name":"Aisabelle Chong","nickname":"Daisy","class_name":"Omicron","semester":"Spring 2009","bigId":"71","dynasty":"Lola","status":"active"},{"id":"105","name":"Camille DeJesus","nickname":null,"class_name":"Omicron","semester":"Spring 2009","bigId":null,"dynasty":null,"status":"active"},{"id":"106","name":"Kim Duong","nickname":"Moxie","class_name":"Omicron","semester":"Spring 2009","bigId":null,"dynasty":"Moxie","status":"active"},{"id":"107","name":"Thu Le","nickname":null,"class_name":"Omicron","semester":"Spring 2009","bigId":null,"dynasty":null,"status":"active"},{"id":"108","name":"Xiu Lin","nickname":"Dixie","class_name":"Omicron","semester":"Spring 2009","bigId":"75","dynasty":null,"status":"active"},{"id":"109","name":"Sandy Liu","nickname":"LA Style","class_name":"Omicron","semester":"Spring 2009","bigId":"88","dynasty":null,"status":"active"},{"id":"110","name":"Thao Nguyen","nickname":"Luna","class_name":"Omicron","semester":"Spring 2009","bigId":null,"dynasty":"Luna","status":"active"},{"id":"111","name":"Mei Brasel","nickname":"BB Crazie","class_name":"Pi","semester":"Fall 2009","bigId":null,"dynasty":null,"status":"active"},{"id":"112","name":"Sarah Franklyn","nickname":"Rhapsody","class_name":"Pi","semester":"Fall 2009","bigId":null,"dynasty":null,"status":"active"},{"id":"114","name":"Elizabeth Hall","nickname":"Diva","class_name":"Pi","semester":"Fall 2009","bigId":"98","dynasty":"Hall","status":"active"},{"id":"115","name":"Ji Yeon Lee","nickname":"Kuromi","class_name":"Pi","semester":"Fall 2009","bigId":"103","dynasty":"Lola","status":"active"},{"id":"116","name":"Cindy Nguyen","nickname":"Cocoa","class_name":"Pi","semester":"Fall 2009","bigId":"108","dynasty":null,"status":"active"},{"id":"117","name":"Susan Moua","nickname":"Starburst","class_name":"Pi","semester":"Fall 2009","bigId":"110","dynasty":"Luna","status":"active"},{"id":"118","name":"Krizel Roque","nickname":"Athena","class_name":"Pi","semester":"Fall 2009","bigId":"99","dynasty":"Pasithea","status":"active"},{"id":"119","name":"Phuong Tran","nickname":null,"class_name":"Pi","semester":"Fall 2009","bigId":"90","dynasty":null,"status":"active"},{"id":"120","name":"Cassie Chan","nickname":"Cheery","class_name":"Rho","semester":"Fall 2010","bigId":"117","dynasty":"Luna","status":"active"},{"id":"121","name":"Lydia Chang","nickname":"Impression","class_name":"Rho","semester":"Fall 2010","bigId":"116","dynasty":null,"status":"active"},{"id":"122","name":"Grace Han","nickname":"Touche","class_name":"Rho","semester":"Fall 2010","bigId":"106","dynasty":"Moxie","status":"active"},{"id":"123","name":"Raya Hsiung","nickname":"Snuggle Bear","class_name":"Rho","semester":"Fall 2010","bigId":"81","dynasty":"Snuggle Bear","status":"active"},{"id":"124","name":"Sue Kim","nickname":"Encore","class_name":"Rho","semester":"Fall 2010","bigId":"104","dynasty":"Lola","status":"active"},{"id":"125","name":"Jessica Pham","nickname":"Mosaic","class_name":"Rho","semester":"Fall 2010","bigId":"114","dynasty":"Hall","status":"active"},{"id":"126","name":"Alysia Thao","nickname":"Bubbles","class_name":"Rho","semester":"Fall 2010","bigId":"101","dynasty":"Lola","status":"active"},{"id":"127","name":"Jenny Bang","nickname":"Radiance","class_name":"Sigma","semester":"Spring 2011","bigId":"112","dynasty":null,"status":"active"},{"id":"128","name":"Somally Chheng","nickname":"Serenity","class_name":"Sigma","semester":"Spring 2011","bigId":null,"dynasty":null,"status":"active"},{"id":"129","name":"Quynh-Vu Dinh","nickname":"Dulce","class_name":"Sigma","semester":"Spring 2011","bigId":"118","dynasty":"Pasithea","status":"active"},{"id":"130","name":"Samantha Gonzales","nickname":"Voltage","class_name":"Sigma","semester":"Spring 2011","bigId":null,"dynasty":null,"status":"active"},{"id":"131","name":"Mihui Lim","nickname":"Boombox","class_name":"Sigma","semester":"Spring 2011","bigId":"102","dynasty":null,"status":"active"},{"id":"132","name":"Angela Adams","nickname":"Shimmer","class_name":"Tau","semester":"Fall 2011","bigId":"125","dynasty":null,"status":"active"},{"id":"133","name":"Katy Blanton","nickname":null,"class_name":"Tau","semester":"Fall 2011","bigId":"123","dynasty":null,"status":"active"},{"id":"134","name":"Melinda Erickson","nickname":"Versatile","class_name":"Tau","semester":"Fall 2011","bigId":"128","dynasty":null,"status":"active"},{"id":"135","name":"Anna Ishii","nickname":"En Avant","class_name":"Tau","semester":"Fall 2011","bigId":"99","dynasty":"Pasithea","status":"active"},{"id":"136","name":"Judy Nguyen","nickname":"Chic","class_name":"Tau","semester":"Fall 2011","bigId":"124","dynasty":"Lola","status":"active"},{"id":"137","name":"Tania Tran","nickname":"Pixie","class_name":"Tau","semester":"Fall 2011","bigId":"120","dynasty":"Luna","status":"active"},{"id":"138","name":"Christina Chen","nickname":"Allure","class_name":"Upsilon","semester":"Fall 2012","bigId":"126","dynasty":null,"status":"active"},{"id":"139","name":"Michelle Clum","nickname":"Macchiato","class_name":"Upsilon","semester":"Fall 2012","bigId":"129","dynasty":"Pasithea","status":"active"},{"id":"140","name":"Phenix Tang","nickname":"Vesta","class_name":"Upsilon","semester":"Fall 2012","bigId":"121","dynasty":null,"status":"active"},{"id":"141","name":"Venus Tang","nickname":"Amavel","class_name":"Upsilon","semester":"Fall 2012","bigId":"135","dynasty":"Pasithea","status":"active"},{"id":"142","name":"Kimberly Song","nickname":"Mirage","class_name":"Upsilon","semester":"Fall 2012","bigId":"124","dynasty":null,"status":"active"},{"id":"143","name":"Mabel Xu","nickname":"Spotlight","class_name":"Upsilon","semester":"Fall 2012","bigId":"131","dynasty":null,"status":"active"},{"id":"144","name":"Yoonji Hur","nickname":"Aequus","class_name":"Phi","semester":"Spring 2013","bigId":"134","dynasty":null,"status":"active"},{"id":"145","name":"Emma Jang","nickname":"Amplify","class_name":"Phi","semester":"Spring 2013","bigId":"130","dynasty":null,"status":"active"},{"id":"146","name":"Cecilia Ko","nickname":"Vogue","class_name":"Phi","semester":"Spring 2013","bigId":"120","dynasty":"Luna","status":"active"},{"id":"147","name":"Amy Nguyen","nickname":"Effervescence","class_name":"Phi","semester":"Spring 2013","bigId":"137","dynasty":"Luna","status":"active"},{"id":"148","name":"Phuong Thao Nguyen","nickname":"Devier","class_name":"Phi","semester":"Spring 2013","bigId":"132","dynasty":null,"status":"active"},{"id":"149","name":"Esther Shim","nickname":"Forte","class_name":"Phi","semester":"Spring 2013","bigId":"122","dynasty":"Moxie","status":"active"},{"id":"150","name":"Jasmine Ewe","nickname":"S.T.U.D.","class_name":"Chi","semester":"Fall 2013","bigId":"138","dynasty":"Lola","status":"active"},{"id":"151","name":"Rita Han","nickname":"Infinity","class_name":"Chi","semester":"Fall 2013","bigId":"125","dynasty":"Hall","status":"active"},{"id":"152","name":"Mirabel Jin","nickname":"Neptune","class_name":"Chi","semester":"Fall 2013","bigId":"123","dynasty":"Snuggle Bear","status":"active"},{"id":"153","name":"Jiyoung Lee","nickname":"Chloe","class_name":"Chi","semester":"Fall 2013","bigId":"146","dynasty":"Luna","status":"active"},{"id":"154","name":"Ashley Lin","nickname":"Jubilance","class_name":"Chi","semester":"Fall 2013","bigId":"144","dynasty":null,"status":"active"},{"id":"155","name":"Young-Ju Park","nickname":"Enchant","class_name":"Chi","semester":"Fall 2013","bigId":"134","dynasty":null,"status":"active"},{"id":"156","name":"Nhuy Phan","nickname":"Zealous","class_name":"Chi","semester":"Fall 2013","bigId":"140","dynasty":null,"status":"active"},{"id":"157","name":"Sally Seo","nickname":"Godiva","class_name":"Chi","semester":"Fall 2013","bigId":"141","dynasty":"Pasithea","status":"active"},{"id":"158","name":"T-On Yu","nickname":"Sniper","class_name":"Chi","semester":"Fall 2013","bigId":"143","dynasty":null,"status":"active"},{"id":"159","name":"Shantell Escanuela","nickname":"Nike","class_name":"Psi","semester":"Spring 2014","bigId":"149","dynasty":"Moxie","status":"active"},{"id":"160","name":"Jacqueline Szeto","nickname":"Azalea","class_name":"Psi","semester":"Spring 2014","bigId":"140","dynasty":null,"status":"active"},{"id":"161","name":"Stephanie Ujjin","nickname":"Snow Angel","class_name":"Psi","semester":"Spring 2014","bigId":"139","dynasty":"Pasithea","status":"active"},{"id":"162","name":"Christine Yang","nickname":"Leonida","class_name":"Psi","semester":"Spring 2014","bigId":"120","dynasty":null,"status":"active"},{"id":"163","name":"Lauren Folger","nickname":"Darya","class_name":"Alpha Alpha","semester":"Fall 2014","bigId":"151","dynasty":"Hall","status":"active"},{"id":"164","name":"Siyu Lin","nickname":"Dovey","class_name":"Alpha Alpha","semester":"Fall 2014","bigId":"150","dynasty":"Lola","status":"active"},{"id":"165","name":"Zhenni Ren","nickname":"Ausrine","class_name":"Alpha Alpha","semester":"Fall 2014","bigId":"152","dynasty":"Snuggle Bear","status":"active"},{"id":"166","name":"Haemin Song","nickname":"Deluxe","class_name":"Alpha Alpha","semester":"Fall 2014","bigId":"157","dynasty":"Pasithea","status":"active"},{"id":"167","name":"Teresa Tran","nickname":"Marvel","class_name":"Alpha Alpha","semester":"Fall 2014","bigId":"147","dynasty":"Luna","status":"active"},{"id":"168","name":"Dianna Wong","nickname":"Expose","class_name":"Alpha Alpha","semester":"Fall 2014","bigId":"159","dynasty":"Moxie","status":"active"},{"id":"169","name":"Ivy Hu","nickname":"Pearle","class_name":"Alpha Beta","semester":"Fall 2015","bigId":"161","dynasty":"Pasithea","status":"active"},{"id":"170","name":"Rachel Xu","nickname":"Seirios","class_name":"Alpha Beta","semester":"Fall 2015","bigId":"165","dynasty":"Snuggle Bear","status":"active"},{"id":"171","name":"Samantha Badeau","nickname":"Crusade","class_name":"Alpha Gamma","semester":"Fall 2016","bigId":"145","dynasty":null,"status":"active"},{"id":"172","name":"Thunwa Klaihathai","nickname":"XENA","class_name":"Alpha Gamma","semester":"Fall 2016","bigId":"163","dynasty":"Hall","status":"active"},{"id":"173","name":"Jisu Lee","nickname":"Onya","class_name":"Alpha Gamma","semester":"Fall 2016","bigId":"169","dynasty":null,"status":"active"},{"id":"174","name":"Eva Wei","nickname":"Astra","class_name":"Alpha Delta","semester":"Spring 2017","bigId":"161","dynasty":"Pasithea","status":"active"},{"id":"175","name":"Cindy Zhang","nickname":"Camellia","class_name":"Alpha Delta","semester":"Spring 2017","bigId":"158","dynasty":null,"status":"active"},{"id":"176","name":"Yulanda Huang","nickname":"Roseate","class_name":"Alpha Epsilon","semester":"Fall 2017","bigId":"172","dynasty":"Hall","status":"active"},{"id":"177","name":"Kelsey Kim","nickname":"Vega","class_name":"Alpha Epsilon","semester":"Fall 2017","bigId":"174","dynasty":"Pasithea","status":"active"},{"id":"178","name":"Tiffany Chan","nickname":"Jade","class_name":"Alpha Zeta","semester":"Spring 2018","bigId":"167","dynasty":"Luna","status":"active"},{"id":"179","name":"Valerie Lin","nickname":"Cordelia","class_name":"Alpha Zeta","semester":"Spring 2018","bigId":"164","dynasty":"Lola","status":"active"},{"id":"180","name":"Leslie Tran","nickname":"Arinnee","class_name":"Alpha Zeta","semester":"Spring 2018","bigId":"168","dynasty":"Moxie","status":"active"},{"id":"181","name":"Ava Wei","nickname":"Elektra","class_name":"Alpha Zeta","semester":"Spring 2018","bigId":"167","dynasty":"Luna","status":"active"},{"id":"182","name":"Gina Zheng","nickname":"Leilani","class_name":"Alpha Zeta","semester":"Spring 2018","bigId":"164","dynasty":"Lola","status":"active"},{"id":"183","name":"Linda Folger","nickname":"Ilaria","class_name":"Alpha Eta","semester":"Fall 2018","bigId":"172","dynasty":"Hall","status":"active"},{"id":"184","name":"Reina Garrett","nickname":"Stella","class_name":"Alpha Eta","semester":"Fall 2018","bigId":"177","dynasty":"Pasithea","status":"active"},{"id":"185","name":"Anna Huang","nickname":"Lutea","class_name":"Alpha Eta","semester":"Fall 2018","bigId":"180","dynasty":"Moxie","status":"active"},{"id":"186","name":"Jenny Nguyen","nickname":"Anjeze","class_name":"Alpha Eta","semester":"Fall 2018","bigId":"180","dynasty":"Moxie","status":"active"},{"id":"187","name":"Thao Nguyen2","nickname":"Pleiades","class_name":"Alpha Eta","semester":"Fall 2018","bigId":"170","dynasty":"Snuggle Bear","status":"active"},{"id":"188","name":"Lucy Xiao","nickname":"Hesperus","class_name":"Alpha Eta","semester":"Fall 2018","bigId":"175","dynasty":null,"status":"active"},{"id":"189","name":"Vicky Zhang","nickname":"B612","class_name":"Alpha Eta","semester":"Fall 2018","bigId":"170","dynasty":"Snuggle Bear","status":"active"},{"id":"190","name":"Hanna Zheng","nickname":"Hestia","class_name":"Alpha Eta","semester":"Fall 2018","bigId":"169","dynasty":"Pasithea","status":"active"},{"id":"191","name":"Vy Le","nickname":"Alquemie","class_name":"Alpha Theta","semester":"Spring 2019","bigId":"176","dynasty":"Hall","status":"active"},{"id":"192","name":"Sejal Mistry","nickname":"Aasira","class_name":"Alpha Theta","semester":"Spring 2019","bigId":"176","dynasty":"Hall","status":"active"},{"id":"193","name":"Ellie Thiengwongs","nickname":"Betelgeuse","class_name":"Alpha Theta","semester":"Spring 2019","bigId":"187","dynasty":"Snuggle Bear","status":"active"},{"id":"194","name":"Ashley Go","nickname":"Hina","class_name":"Alpha Iota","semester":"Fall 2019","bigId":"184","dynasty":"Pasithea","status":"active"},{"id":"195","name":"Katelyn Li","nickname":"Vespira","class_name":"Alpha Iota","semester":"Fall 2019","bigId":"193","dynasty":"Snuggle Bear","status":"active"},{"id":"196","name":"Daphne Lin","nickname":"Selene","class_name":"Alpha Iota","semester":"Fall 2019","bigId":"190","dynasty":"Pasithea","status":"active"},{"id":"197","name":"Alyssa Lombres","nickname":"Solana","class_name":"Alpha Iota","semester":"Fall 2019","bigId":"193","dynasty":"Snuggle Bear","status":"active"},{"id":"198","name":"Karen Lu","nickname":"Kotori","class_name":"Alpha Iota","semester":"Fall 2019","bigId":"182","dynasty":"Lola","status":"active"},{"id":"199","name":"Keri Lu","nickname":"Rheia","class_name":"Alpha Iota","semester":"Fall 2019","bigId":"190","dynasty":"Pasithea","status":"active"},{"id":"200","name":"Silvy Park","nickname":"Mira","class_name":"Alpha Iota","semester":"Fall 2019","bigId":"179","dynasty":"Lola","status":"active"},{"id":"201","name":"Danny Wang","nickname":"Alcina","class_name":"Alpha Iota","semester":"Fall 2019","bigId":"181","dynasty":"Luna","status":"active"},{"id":"202","name":"Anna Zheng","nickname":"Aureole","class_name":"Alpha Iota","semester":"Fall 2019","bigId":"182","dynasty":"Lola","status":"active"},{"id":"203","name":"Michelle Zheng","nickname":"Vetra","class_name":"Alpha Iota","semester":"Fall 2019","bigId":"185","dynasty":"Moxie","status":"active"},{"id":"204","name":"Michelle Zhu","nickname":"Citrine","class_name":"Alpha Iota","semester":"Fall 2019","bigId":"178","dynasty":"Luna","status":"active"},{"id":"205","name":"Katelyn Choe","nickname":"Avina","class_name":"Alpha Kappa","semester":"Spring 2020","bigId":"183","dynasty":"Hall","status":"active"},{"id":"206","name":"Kristen Steinmetz","nickname":"Eira","class_name":"Alpha Kappa","semester":"Spring 2020","bigId":"186","dynasty":"Moxie","status":"active"},{"id":"207","name":"Jennifer Zhu","nickname":"Peony","class_name":"Alpha Kappa","semester":"Spring 2020","bigId":"189","dynasty":"Snuggle Bear","status":"active"},{"id":"208","name":"Jamie Lee","nickname":"Elora","class_name":"Alpha Lambda","semester":"Spring 2021","bigId":"194","dynasty":"Pasithea","status":"active"},{"id":"209","name":"Elyssa Levitt","nickname":"Zoria","class_name":"Alpha Lambda","semester":"Spring 2021","bigId":"192","dynasty":"Hall","status":"active"},{"id":"210","name":"Michelle Lin","nickname":"Lilah","class_name":"Alpha Lambda","semester":"Spring 2021","bigId":"201","dynasty":"Luna","status":"active"},{"id":"211","name":"Jules Walters","nickname":"Hemera","class_name":"Alpha Lambda","semester":"Spring 2021","bigId":"196","dynasty":null,"status":"active"},{"id":"212","name":"Camille Argarin","nickname":"Haliya","class_name":"Alpha Mu","semester":"Fall 2021","bigId":"197","dynasty":"Snuggle Bear","status":"active"},{"id":"213","name":"Jenny Chen","nickname":"Alacritas","class_name":"Alpha Mu","semester":"Fall 2021","bigId":"205","dynasty":null,"status":"active"},{"id":"214","name":"Jani Christopher","nickname":"Kyla","class_name":"Alpha Mu","semester":"Fall 2021","bigId":"200","dynasty":"Lola","status":"active"},{"id":"215","name":"Grace Jang","nickname":"Alamea","class_name":"Alpha Mu","semester":"Fall 2021","bigId":"196","dynasty":"Pasithea","status":"active"},{"id":"216","name":"Eujin Kang","nickname":"Rosella","class_name":"Alpha Mu","semester":"Fall 2021","bigId":"198","dynasty":"Lola","status":"active"},{"id":"217","name":"Jocelyn Kosasi","nickname":"Lilia","class_name":"Alpha Mu","semester":"Fall 2021","bigId":"199","dynasty":"Pasithea","status":"active"},{"id":"218","name":"Alex Le","nickname":"Kalea","class_name":"Alpha Mu","semester":"Fall 2021","bigId":"203","dynasty":"Moxie","status":"active"},{"id":"219","name":"Jennifer Mai","nickname":"Ayla","class_name":"Alpha Mu","semester":"Fall 2021","bigId":"208","dynasty":"Pasithea","status":"active"},{"id":"220","name":"An Nguyen","nickname":"Auzlyn","class_name":"Alpha Mu","semester":"Fall 2021","bigId":"191","dynasty":"Hall","status":"active"},{"id":"221","name":"Muriel Ren","nickname":"Nepheline","class_name":"Alpha Mu","semester":"Fall 2021","bigId":"204","dynasty":"Luna","status":"active"},{"id":"222","name":"Autumn Starbird","nickname":"Pilea","class_name":"Alpha Mu","semester":"Fall 2021","bigId":"205","dynasty":null,"status":"active"},{"id":"223","name":"Lise Xu","nickname":"Maia","class_name":"Alpha Mu","semester":"Fall 2021","bigId":"195","dynasty":"Snuggle Bear","status":"active"},{"id":"224","name":"Savannah Young","nickname":"Dara","class_name":"Alpha Mu","semester":"Fall 2021","bigId":"197","dynasty":"Snuggle Bear","status":"active"},{"id":"225","name":"Janellyn Bong","nickname":"Leonis","class_name":"Alpha Nu","semester":"Spring 2022","bigId":"207","dynasty":"Snuggle Bear","status":"active"},{"id":"226","name":"Sarah Han","nickname":"Ciela","class_name":"Alpha Nu","semester":"Spring 2022","bigId":"202","dynasty":"Lola","status":"active"},{"id":"227","name":"Jolie Lanier","nickname":"Achara","class_name":"Alpha Nu","semester":"Spring 2022","bigId":"209","dynasty":"Hall","status":"active"},{"id":"228","name":"Jordan Sul","nickname":"Caelus","class_name":"Alpha Nu","semester":"Spring 2022","bigId":"202","dynasty":"Lola","status":"active"},{"id":"229","name":"Rebekah Yohler","nickname":"Eirene","class_name":"Alpha Nu","semester":"Spring 2022","bigId":"186","dynasty":"Moxie","status":"active"},{"id":"230","name":"Grace Conn","nickname":"Leta","class_name":"Alpha Xi","semester":"Fall 2022","bigId":"224","dynasty":"Snuggle Bear","status":"active"},{"id":"231","name":"Emily Freeman","nickname":"Ainakea","class_name":"Alpha Xi","semester":"Fall 2022","bigId":"215","dynasty":"Pasithea","status":"active"},{"id":"232","name":"Angie Lin","nickname":"Iress","class_name":"Alpha Xi","semester":"Fall 2022","bigId":"201","dynasty":"Luna","status":"active"},{"id":"233","name":"Jessica Luu","nickname":"Ophira","class_name":"Alpha Xi","semester":"Fall 2022","bigId":"221","dynasty":"Luna","status":"active"},{"id":"234","name":"Thaomy Pham","nickname":"Aruvi","class_name":"Alpha Xi","semester":"Fall 2022","bigId":"214","dynasty":"Lola","status":"active"},{"id":"235","name":"Lexi Putman","nickname":"Luscinia","class_name":"Alpha Xi","semester":"Fall 2022","bigId":"216","dynasty":"Lola","status":"active"},{"id":"236","name":"Kati Putman","nickname":"Kiana","class_name":"Alpha Xi","semester":"Fall 2022","bigId":"217","dynasty":"Pasithea","status":"active"},{"id":"237","name":"Malia Tamisin","nickname":"Lucrecia","class_name":"Alpha Xi","semester":"Fall 2022","bigId":"218","dynasty":"Moxie","status":"active"},{"id":"238","name":"Vanessa Thakkar","nickname":"Kun Ana","class_name":"Alpha Xi","semester":"Fall 2022","bigId":"212","dynasty":"Snuggle Bear","status":"active"},{"id":"239","name":"Vina Bui","nickname":"KOMODO","class_name":"Alpha Omicron","semester":"Spring 2023","bigId":"227","dynasty":"Hall","status":"active"},{"id":"240","name":"Sonika Chan","nickname":"Nivalis","class_name":"Alpha Omicron","semester":"Spring 2023","bigId":"205","dynasty":"Hall","status":"active"},{"id":"241","name":"Katie Dao","nickname":"Khione","class_name":"Alpha Omicron","semester":"Spring 2023","bigId":"228","dynasty":"Lola","status":"active"},{"id":"242","name":"Zoie Daughtry","nickname":"Erytheia","class_name":"Alpha Omicron","semester":"Spring 2023","bigId":"228","dynasty":"Lola","status":"active"},{"id":"243","name":"Lena Do","nickname":"Anastasia","class_name":"Alpha Omicron","semester":"Spring 2023","bigId":"225","dynasty":"Snuggle Bear","status":"active"},{"id":"244","name":"Tanvi Gaddameedi","nickname":"PERSEPH6NE","class_name":"Alpha Omicron","semester":"Spring 2023","bigId":"209","dynasty":"Hall","status":"active"},{"id":"245","name":"Michelle Jasadipura","nickname":"Alasia","class_name":"Alpha Omicron","semester":"Spring 2023","bigId":"223","dynasty":"Snuggle Bear","status":"active"},{"id":"246","name":"Selina Li","nickname":"Aumia","class_name":"Alpha Omicron","semester":"Spring 2023","bigId":"219","dynasty":"Pasithea","status":"active"},{"id":"247","name":"Nitya Neema","nickname":"Arcelia","class_name":"Alpha Omicron","semester":"Spring 2023","bigId":"226","dynasty":"Lola","status":"active"},{"id":"248","name":"Aashna Patel","nickname":"Avani","class_name":"Alpha Omicron","semester":"Spring 2023","bigId":"220","dynasty":"Hall","status":"active"},{"id":"249","name":"Sophia Cheng","nickname":"Lien","class_name":"Alpha Pi","semester":"Fall 2023","bigId":"234","dynasty":"Lola","status":"active"},{"id":"250","name":"Simone Cho","nickname":"Nalani","class_name":"Alpha Pi","semester":"Fall 2023","bigId":"236","dynasty":"Pasithea","status":"active"},{"id":"251","name":"Samantha Ferrer-Smallwood","nickname":"Esmeralda","class_name":"Alpha Pi","semester":"Fall 2023","bigId":"233","dynasty":"Luna","status":"active"},{"id":"252","name":"Saahithya Gutta","nickname":"Evryn","class_name":"Alpha Pi","semester":"Fall 2023","bigId":"230","dynasty":"Snuggle Bear","status":"active"},{"id":"253","name":"Lana Jalayer","nickname":"Odessa","class_name":"Alpha Pi","semester":"Fall 2023","bigId":"229","dynasty":"Moxie","status":"active"},{"id":"254","name":"Tina Ngo","nickname":"Kamea","class_name":"Alpha Pi","semester":"Fall 2023","bigId":"237","dynasty":"Moxie","status":"active"},{"id":"255","name":"Anupama Arvind","nickname":"Saranyu","class_name":"Alpha Rho","semester":"Spring 2024","bigId":"242","dynasty":"Lola","status":"active"},{"id":"256","name":"Leslie Dang","nickname":"Supernova","class_name":"Alpha Rho","semester":"Spring 2024","bigId":"248","dynasty":"Hall","status":"active"},{"id":"257","name":"Lena Dinh","nickname":"Mairen","class_name":"Alpha Rho","semester":"Spring 2024","bigId":"239","dynasty":"Hall","status":"active"},{"id":"258","name":"Audrey Djunaidi","nickname":"Naruna","class_name":"Alpha Rho","semester":"Spring 2024","bigId":"240","dynasty":"Hall","status":"active"},{"id":"259","name":"Christy Foo","nickname":"Cassia","class_name":"Alpha Rho","semester":"Spring 2024","bigId":"235","dynasty":"Lola","status":"active"},{"id":"260","name":"Alice Lee","nickname":"Eliara","class_name":"Alpha Rho","semester":"Spring 2024","bigId":"241","dynasty":"Lola","status":"active"},{"id":"261","name":"Vivian Li","nickname":"Misa","class_name":"Alpha Rho","semester":"Spring 2024","bigId":"242","dynasty":"Lola","status":"active"},{"id":"262","name":"Grace Moon","nickname":"Evalina","class_name":"Alpha Rho","semester":"Spring 2024","bigId":"235","dynasty":"Lola","status":"active"},{"id":"263","name":"Melanie Nguyen","nickname":"Rosabelle","class_name":"Alpha Rho","semester":"Spring 2024","bigId":"243","dynasty":"Snuggle Bear","status":"active"},{"id":"264","name":"Emily Shin","nickname":"Aethra","class_name":"Alpha Rho","semester":"Spring 2024","bigId":"247","dynasty":"Lola","status":"active"},{"id":"265","name":"Emma Berney","nickname":"Syntheia","class_name":"Alpha Sigma","semester":"Fall 2024","bigId":"246","dynasty":"Pasithea","status":"active"},{"id":"266","name":"Lilian Fitch","nickname":"Yuena","class_name":"Alpha Sigma","semester":"Fall 2024","bigId":"249","dynasty":"Lola","status":"active"},{"id":"267","name":"Jessica Ngo","nickname":"Celaria","class_name":"Alpha Sigma","semester":"Fall 2024","bigId":"245","dynasty":"Snuggle Bear","status":"active"},{"id":"268","name":"Cammie Phansavanh","nickname":"Kalista","class_name":"Alpha Sigma","semester":"Fall 2024","bigId":"250","dynasty":"Pasithea","status":"active"},{"id":"269","name":"Annie Shi","nickname":"Akoya","class_name":"Alpha Sigma","semester":"Fall 2024","bigId":"251","dynasty":"Luna","status":"active"},{"id":"270","name":"Saachi Singh","nickname":"Shani","class_name":"Alpha Sigma","semester":"Fall 2024","bigId":"238","dynasty":"Snuggle Bear","status":"active"},{"id":"271","name":"Tien Tran","nickname":"Auraleia","class_name":"Alpha Sigma","semester":"Fall 2024","bigId":"244","dynasty":"Hall","status":"active"},{"id":"272","name":"Syruis Zhang","nickname":"Ilyana","class_name":"Alpha Sigma","semester":"Fall 2024","bigId":"232","dynasty":"Luna","status":"active"},{"id":"273","name":"Chloe Andayan","nickname":"Callisea","class_name":"Alpha Tau","semester":"Spring 2025","bigId":"256","dynasty":"Hall","status":"active"},{"id":"274","name":"Eryna Furuta","nickname":"Saerilyn","class_name":"Alpha Tau","semester":"Spring 2025","bigId":"262","dynasty":"Lola","status":"active"},{"id":"275","name":"Anishka Manavalan","nickname":"Arezou","class_name":"Alpha Tau","semester":"Spring 2025","bigId":"253","dynasty":"Moxie","status":"active"},{"id":"276","name":"Jocelyn Pham","nickname":"Emilia","class_name":"Alpha Tau","semester":"Spring 2025","bigId":"254","dynasty":"Moxie","status":"active"},{"id":"277","name":"Rose Pollard","nickname":"Iridessa","class_name":"Alpha Tau","semester":"Spring 2025","bigId":"255","dynasty":"Lola","status":"active"},{"id":"278","name":"Laeh Ramsey","nickname":"Lunessa","class_name":"Alpha Tau","semester":"Spring 2025","bigId":"264","dynasty":"Lola","status":"active"},{"id":"279","name":"Tiffany Vinh","nickname":"Janara","class_name":"Alpha Tau","semester":"Spring 2025","bigId":"260","dynasty":"Lola","status":"active"},{"id":"280","name":"Elyn Wadstein","nickname":"Sitara","class_name":"Alpha Tau","semester":"Spring 2025","bigId":"252","dynasty":"Snuggle Bear","status":"active"},{"id":"281","name":"Eshani Alford","nickname":"Aquaria","class_name":"Alpha Upsilon","semester":"Fall 2025","bigId":"272","dynasty":"Luna","status":"active"},{"id":"282","name":"Carissa Choi","nickname":"Yunara","class_name":"Alpha Upsilon","semester":"Fall 2025","bigId":"268","dynasty":"Pasithea","status":"active"},{"id":"283","name":"Hyerin Chung","nickname":"Nami","class_name":"Alpha Upsilon","semester":"Fall 2025","bigId":"266","dynasty":"Lola","status":"active"},{"id":"284","name":"Maleah Corvacho","nickname":"Novaria","class_name":"Alpha Upsilon","semester":"Fall 2025","bigId":"267","dynasty":"Snuggle Bear","status":"active"},{"id":"285","name":"Jocelyn Doan","nickname":"Callais","class_name":"Alpha Upsilon","semester":"Fall 2025","bigId":"269","dynasty":"Luna","status":"active"},{"id":"286","name":"Isabella Edrish","nickname":"Sappheiros","class_name":"Alpha Upsilon","semester":"Fall 2025","bigId":"269","dynasty":"Luna","status":"active"},{"id":"287","name":"Misora Furuya","nickname":"Noreva","class_name":"Alpha Upsilon","semester":"Fall 2025","bigId":"258","dynasty":"Hall","status":"active"},{"id":"288","name":"Chia Garcia","nickname":"Heleia","class_name":"Alpha Upsilon","semester":"Fall 2025","bigId":"259","dynasty":"Lola","status":"active"},{"id":"289","name":"Kaitlynn Nguyen","nickname":"Ollyra","class_name":"Alpha Upsilon","semester":"Fall 2025","bigId":"263","dynasty":"Snuggle Bear","status":"active"},{"id":"290","name":"Ellie Wang","nickname":"Senara","class_name":"Alpha Upsilon","semester":"Fall 2025","bigId":"252","dynasty":"Snuggle Bear","status":"active"},{"id":"291","name":"Amy Yuan","nickname":"Aiko","class_name":"Alpha Upsilon","semester":"Fall 2025","bigId":"272","dynasty":"Luna","status":"active"},{"id":"292","name":"Sherry Zhou","nickname":"Yuhua","class_name":"Alpha Upsilon","semester":"Fall 2025","bigId":"270","dynasty":"Snuggle Bear","status":"active"},
{"id":"293","name":"Danielle Acas","nickname":"Mayarah","class_name":"Alpha Phi","semester":"Spring 2026","bigId":"280","dynasty":"Snuggle Bear","status":"active"},
{"id":"294","name":"Emi Arlong","nickname":"Nytheria","class_name":"Alpha Phi","semester":"Spring 2026","bigId":"279","dynasty":"Lola","status":"active"},
{"id":"295","name":"Bhuvanthi Chapalamadugu","nickname":"Twyla","class_name":"Alpha Phi","semester":"Spring 2026","bigId":"277","dynasty":"Lola","status":"active"},
{"id":"296","name":"Kayleigh Fong","nickname":"Adelyne","class_name":"Alpha Phi","semester":"Spring 2026","bigId":"274","dynasty":"Lola","status":"active"},
{"id":"297","name":"Arushi Mishra","nickname":"Lynnea","class_name":"Alpha Phi","semester":"Spring 2026","bigId":"280","dynasty":"Snuggle Bear","status":"active"},
{"id":"298","name":"Hilda Ngo","nickname":"Meilani","class_name":"Alpha Phi","semester":"Spring 2026","bigId":"257","dynasty":"Hall","status":"active"},
{"id":"299","name":"Gretchen O'Neal","nickname":"Eellaya","class_name":"Alpha Phi","semester":"Spring 2026","bigId":"275","dynasty":"Moxie","status":"active"},
{"id":"300","name":"Jaeyun Sim","nickname":"Erivela","class_name":"Alpha Phi","semester":"Spring 2026","bigId":"265","dynasty":"Pasithea","status":"active"},
{"id":"301","name":"Marie Torres","nickname":"Milena","class_name":"Alpha Phi","semester":"Spring 2026","bigId":"276","dynasty":"Moxie","status":"active"},
{"id":"302","name":"Alexis Vu","nickname":"Reira","class_name":"Alpha Phi","semester":"Spring 2026","bigId":"276","dynasty":"Moxie","status":"active"},
{"id":"303","name":"Phoebe Warren","nickname":"Lunavie","class_name":"Alpha Phi","semester":"Spring 2026","bigId":"273","dynasty":"Hall","status":"active"}];

const DYNASTY_COLORS = {
  "Lola": "#e91e8c",
  "Luna": "#7c3aed",
  "Hall": "#0ea5e9",
  "Moxie": "#f59e0b",
  "Snuggle Bear": "#10b981",
  "Pasithea": "#f43f5e",
};

const CLASS_COLORS = {
  "Founding Mother": "#ff6b6b",
  "Charter": "#ffa07a",
  "Alpha": "#ffd700",
  "Beta": "#98fb98",
  "Gamma": "#87ceeb",
  "Delta": "#dda0dd",
  "Epsilon": "#f0e68c",
  "Zeta": "#90ee90",
  "Eta": "#add8e6",
  "Theta": "#ffb6c1",
  "Iota": "#e6e6fa",
  "Kappa": "#ffdead",
  "Lambda": "#b0e0e6",
  "Mu": "#98fb98",
  "Nu": "#ffa500",
  "Xi": "#ff69b4",
  "Omicron": "#ba55d3",
  "Pi": "#20b2aa",
  "Rho": "#ff7f50",
  "Sigma": "#6495ed",
  "Tau": "#dc143c",
  "Upsilon": "#00ced1",
  "Phi": "#ff1493",
  "Chi": "#1e90ff",
  "Psi": "#adff2f",
  "Alpha Alpha": "#ff6347",
  "Alpha Beta": "#4682b4",
  "Alpha Gamma": "#9acd32",
  "Alpha Delta": "#ff8c00",
  "Alpha Epsilon": "#da70d6",
  "Alpha Zeta": "#32cd32",
  "Alpha Eta": "#ff4500",
  "Alpha Theta": "#1e90ff",
  "Alpha Iota": "#ffd700",
  "Alpha Kappa": "#00fa9a",
  "Alpha Lambda": "#ff69b4",
  "Alpha Mu": "#7b68ee",
  "Alpha Nu": "#ffa500",
  "Alpha Xi": "#00ced1",
  "Alpha Omicron": "#ff1493",
  "Alpha Pi": "#adff2f",
  "Alpha Rho": "#40e0d0",
  "Alpha Sigma": "#ff6b6b",
  "Alpha Tau": "#9370db",
  "Alpha Upsilon": "#3cb371",
  "Alpha Phi": "#ff7043",
};

const NODE_W = 152;
const NODE_H = 58;
const H_GAP = 20;
const V_GAP = 72;

function buildTree(members) {
  const byId = {};
  members.forEach(m => { byId[m.id] = { ...m, children: [] }; });
  const roots = [];
  members.forEach(m => {
    if (m.bigId && byId[m.bigId]) byId[m.bigId].children.push(byId[m.id]);
    else roots.push(byId[m.id]);
  });
  return { roots, byId };
}

function layoutTree(roots) {
  const positions = {};
  function measure(n) {
    if (!n.children.length) { n._sw = NODE_W; return NODE_W; }
    const cws = n.children.map(measure);
    const total = cws.reduce((a, b) => a + b, 0) + H_GAP * (n.children.length - 1);
    n._sw = Math.max(total, NODE_W);
    return n._sw;
  }
  function place(n, x, y) {
    positions[n.id] = { x: x + (n._sw || NODE_W) / 2, y };
    if (!n.children.length) return;
    let cx = x;
    n.children.forEach(c => {
      place(c, cx, y + NODE_H + V_GAP);
      cx += (c._sw || NODE_W) + H_GAP;
    });
  }
  let ox = 0;
  roots.forEach(r => {
    measure(r);
    place(r, ox, 0);
    ox += (r._sw || NODE_W) + 60;
  });
  return positions;
}

function getLineage(id, byId) {
  const s = new Set();
  const up = (mid) => { s.add(mid); const m = byId[mid]; if (m?.bigId) up(m.bigId); };
  const down = (mid) => { s.add(mid); (byId[mid]?.children || []).forEach(c => down(c.id)); };
  up(id); down(id);
  return s;
}

const CLASS_ORDER = [
  "Founding Mother","Charter","Alpha","Beta","Gamma","Delta","Epsilon","Zeta","Eta","Theta",
  "Iota","Kappa","Lambda","Mu","Nu","Xi","Omicron","Pi","Rho","Sigma","Tau","Upsilon","Phi",
  "Chi","Psi","Alpha Alpha","Alpha Beta","Alpha Gamma","Alpha Delta","Alpha Epsilon","Alpha Zeta",
  "Alpha Eta","Alpha Theta","Alpha Iota","Alpha Kappa","Alpha Lambda","Alpha Mu","Alpha Nu",
  "Alpha Xi","Alpha Omicron","Alpha Pi","Alpha Rho","Alpha Sigma","Alpha Tau","Alpha Upsilon","Alpha Phi",
];

const CLASS_HISTORY = {
  "Upsilon":       { nme: "Cindy Nguyen",      nmd: "Lizzy Hall",                president: null },
  "Phi":           { nme: "Alysia Thao",       nmd: "Lizzy Hall",                president: null },
  "Chi":           { nme: "Elizabeth Hall",    nmd: "Jessica Pham",              president: null },
  "Psi":           { nme: "Lydia Chang",       nmd: "Jessica Pham",              president: null },
  "Alpha Alpha":   { nme: "Cecilia Ko",        nmd: "Esther Shim",               president: "Angela Adams" },
  "Alpha Beta":    { nme: "Phenix Tang",       nmd: "Mabel Xu",                  president: "Mabel Xu" },
  "Alpha Gamma":   { nme: "Teresa Tran",       nmd: "Dianna Wong",               president: "Stephanie Ujjin" },
  "Alpha Delta":   { nme: "Siyu Lin",          nmd: "Ivy Hu",                    president: "Stephanie Ujjin" },
  "Alpha Epsilon": { nme: "Ivy Hu",            nmd: "Rachel Xu",                 president: "Teresa Tran" },
  "Alpha Zeta":    { nme: "Thunwa Klaihathai", nmd: "Eva Wei",                   president: "Teresa Tran" },
  "Alpha Eta":     { nme: "Yulanda Huang",     nmd: "Ivy Hu",                    president: "Thunwa Klaihathai" },
  "Alpha Theta":   { nme: "Leslie Tran",       nmd: "Ava Wei",                   president: "Thunwa Klaihathai" },
  "Alpha Iota":    { nme: "Kelsey Kim",        nmd: "Tiffany Chan",              president: "Yulanda Huang" },
  "Alpha Kappa":   { nme: "Reina Garrett",     nmd: "Sejal Mistry",              president: "Yulanda Huang" },
  "Alpha Lambda":  { nme: "Jenny Nguyen",      nmd: "Hanna Zheng",               president: "Sejal Mistry" },
  "Alpha Mu":      { nme: "Ashley Go",         nmd: "Danny Wang",                president: "Alyssa Lombres" },
  "Alpha Nu":      { nme: "Karen Lu",          nmd: "Elyssa Levitt",             president: "Alyssa Lombres" },
  "Alpha Xi":      { nme: "Katelyn Li",        nmd: "Lise Xu",                   president: "Anna Zheng" },
  "Alpha Omicron": { nme: "Savannah Young",    nmd: "Eujin Kang",                president: "Anna Zheng" },
  "Alpha Pi":      { nme: "Jani Christopher",  nmd: "Camille Argarin",           president: "Savannah Young" },
  "Alpha Rho":     { nme: "Janellyn Bong",     nmd: "Muriel Ren",                president: "Savannah Young" },
  "Alpha Sigma":   { nme: "Nitya Neema",       nmd: "Vina Bui",                  president: "Grace Conn" },
  "Alpha Tau":     { nme: "Thaomy Pham",       nmd: "Michelle Jasadipura",       president: "Grace Conn" },
  "Alpha Upsilon": { nme: "Angie Lin",         nmd: "Tina Ngo",                  president: "Simone Cho" },
  "Alpha Phi":     { nme: "Saahithya Gutta",   nmd: "Samantha Ferrer-Smallwood", president: "Simone Cho" },
};

function ClassView({ members, allMembers, nodeColor, byId }) {
  const [expandedClass, setExpandedClass] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);

  const grouped = {};
  CLASS_ORDER.forEach(c => { grouped[c] = []; });
  members.filter(m => m.status === "active").forEach(m => {
    if (!grouped[m.class_name]) grouped[m.class_name] = [];
    grouped[m.class_name].push(m);
  });

  const classes = CLASS_ORDER.filter(c => grouped[c]?.length > 0);

  const getBig = (m) => m.bigId ? (byId[m.bigId] || allMembers.find(x => x.id === m.bigId)) : null;

  return (
    <div style={{width:"100%",height:"100%",overflowY:"auto",padding:"100px 24px 40px",position:"relative"}}>
      <div style={{maxWidth:860,margin:"0 auto",display:"flex",flexDirection:"column",gap:0}}>
        {classes.map((cls, i) => {
          const classMembers = grouped[cls];
          const color = CLASS_COLORS[cls] || "#888";
          const isExpanded = expandedClass === cls || true; // always expanded
          const sem = classMembers[0]?.semester || "";

          return (
            <div key={cls} style={{position:"relative",paddingLeft:28,marginBottom:0}}>
              {/* Timeline line */}
              {i < classes.length - 1 && (
                <div style={{position:"absolute",left:10,top:32,bottom:-1,width:1.5,background:"linear-gradient(180deg,"+color+"66,"+color+"11)"}} />
              )}
              {/* Timeline dot */}
              <div style={{position:"absolute",left:4,top:22,width:13,height:13,borderRadius:"50%",background:color,border:"2px solid #080810",boxShadow:`0 0 10px ${color}66`}} />

              {/* Class header */}
              <div style={{paddingTop:16,paddingBottom:12}}>
                <div style={{display:"flex",alignItems:"baseline",gap:10}}>
                  <span style={{fontFamily:"'Playfair Display',serif",fontSize:17,color:"#f0f0f0",fontWeight:700}}>{cls}</span>
                  <span style={{fontSize:11,color:color,fontWeight:500}}>{sem}</span>
                  <span style={{fontSize:11,color:"#444",marginLeft:"auto"}}>{classMembers.length} member{classMembers.length > 1 ? "s" : ""}</span>
                </div>
                {CLASS_HISTORY[cls] && (
                  <div style={{display:"flex",gap:16,marginTop:6,flexWrap:"wrap"}}>
                    {CLASS_HISTORY[cls].nme && (
                      <div style={{fontSize:11,color:"#666"}}>
                        <span style={{color:"#444",textTransform:"uppercase",letterSpacing:0.5,fontSize:9}}>NME · </span>
                        <span style={{color:"#aaa"}}>{CLASS_HISTORY[cls].nme}</span>
                      </div>
                    )}
                    {CLASS_HISTORY[cls].nmd && (
                      <div style={{fontSize:11,color:"#666"}}>
                        <span style={{color:"#444",textTransform:"uppercase",letterSpacing:0.5,fontSize:9}}>NMD · </span>
                        <span style={{color:"#aaa"}}>{CLASS_HISTORY[cls].nmd}</span>
                      </div>
                    )}
                    {CLASS_HISTORY[cls].president && (
                      <div style={{fontSize:11,color:"#666"}}>
                        <span style={{color:"#444",textTransform:"uppercase",letterSpacing:0.5,fontSize:9}}>President · </span>
                        <span style={{color:"#aaa"}}>{CLASS_HISTORY[cls].president}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Member cards */}
              <div style={{display:"flex",flexWrap:"wrap",gap:8,paddingBottom:20}}>
                {classMembers.map(m => {
                  const big = getBig(m);
                  const isSel = selectedMember?.id === m.id;
                  const c = nodeColor(m);
                  return (
                    <div key={m.id}
                      onClick={() => setSelectedMember(isSel ? null : m)}
                      style={{
                        background: isSel ? c+"22" : "#0e0e1a",
                        border: `1px solid ${isSel ? c : "#1e1e2e"}`,
                        borderRadius: 10,
                        padding: "9px 13px",
                        cursor: "pointer",
                        transition: "all 0.15s",
                        minWidth: 150,
                        position: "relative",
                        overflow: "hidden",
                      }}>
                      <div style={{position:"absolute",left:0,top:0,bottom:0,width:3,background:c,borderRadius:"10px 0 0 10px"}} />
                      <div style={{paddingLeft:6}}>
                        <div style={{fontSize:13,fontWeight:500,color:"#f0f0f0",lineHeight:1.3}}>{m.name}</div>
                        {m.nickname && <div style={{fontSize:11,color:c,fontStyle:"italic",marginTop:1}}>"{m.nickname}"</div>}
                        {big && <div style={{fontSize:10,color:"#555",marginTop:3}}>↑ {big.name}</div>}
                        {m.dynasty && <div style={{fontSize:10,color:DYNASTY_COLORS[m.dynasty]||"#666",marginTop:2}}>{m.dynasty} line</div>}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Expanded member detail */}
              {selectedMember && classMembers.find(m => m.id === selectedMember.id) && (
                <div style={{background:"#0e0e1a",border:`1px solid ${nodeColor(selectedMember)}44`,borderRadius:12,padding:14,marginBottom:16,marginLeft:0}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
                    <div>
                      <div style={{fontSize:14,fontWeight:600,color:"#f0f0f0"}}>{selectedMember.name}</div>
                      {selectedMember.nickname && <div style={{fontSize:12,color:nodeColor(selectedMember),fontStyle:"italic"}}>"{selectedMember.nickname}"</div>}
                    </div>
                    <button onClick={()=>setSelectedMember(null)} style={{background:"none",border:"none",color:"#555",cursor:"pointer",fontSize:16}}>×</button>
                  </div>
                  <div style={{display:"flex",gap:8,marginTop:8,flexWrap:"wrap"}}>
                    {getBig(selectedMember) && (
                      <div style={{fontSize:12,color:"#888"}}>
                        <span style={{color:"#555",fontSize:10,textTransform:"uppercase",letterSpacing:0.5}}>Big · </span>
                        <span style={{color:nodeColor(getBig(selectedMember))}}>{getBig(selectedMember).name}</span>
                        {getBig(selectedMember).nickname && <span style={{color:"#666",fontStyle:"italic"}}> "{getBig(selectedMember).nickname}"</span>}
                      </div>
                    )}
                  </div>
                  {byId[selectedMember.id]?.children?.length > 0 && (
                    <div style={{marginTop:8}}>
                      <div style={{fontSize:10,color:"#555",textTransform:"uppercase",letterSpacing:0.5,marginBottom:4}}>Littles</div>
                      <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
                        {byId[selectedMember.id].children.map(c => (
                          <span key={c.id} style={{fontSize:11,color:nodeColor(c),background:nodeColor(c)+"15",padding:"2px 8px",borderRadius:20}}>
                            {c.name}{c.nickname ? ` · ${c.nickname}` : ""}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function App() {
  const [members, setMembers] = useState(ASR_MEMBERS);
  const [activeTab, setActiveTab] = useState("tree"); // "tree" | "classes"
  const [selected, setSelected] = useState(null);
  const [panel, setPanel] = useState(null);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [highlighted, setHighlighted] = useState(null);
  const [zoom, setZoom] = useState(0.55);
  const [pan, setPan] = useState({ x: 60, y: 80 });
  const [isPanning, setIsPanning] = useState(false);
  const [dynastyFilter, setDynastyFilter] = useState(null);
  const [colorMode, setColorMode] = useState("class"); // "class" | "dynasty"
  const [form, setForm] = useState({ name: "", nickname: "", semester: "Fall 2026", class_name: "Alpha Phi", bigId: "" });
  const panStart = useRef(null);
  const svgRef = useRef(null);

  const activeMembers = members.filter(m => m.status === "active" &&
    (!dynastyFilter || m.dynasty === dynastyFilter || m.id === dynastyFilter));

  const { roots, byId } = buildTree(activeMembers);
  const positions = layoutTree(roots);

  const bounds = Object.keys(positions).length > 0 ? (() => {
    const xs = Object.values(positions).map(p => p.x);
    const ys = Object.values(positions).map(p => p.y);
    return { minX: Math.min(...xs) - NODE_W/2 - 60, minY: Math.min(...ys) - 40,
             maxX: Math.max(...xs) + NODE_W/2 + 60, maxY: Math.max(...ys) + NODE_H + 60 };
  })() : { minX:0, minY:0, maxX:1200, maxY:800 };

  const svgW = bounds.maxX - bounds.minX;
  const svgH = bounds.maxY - bounds.minY;

  useEffect(() => {
    const el = svgRef.current;
    const handler = (e) => {
      e.preventDefault();
      setZoom(z => Math.max(0.1, Math.min(3, z * (e.deltaY > 0 ? 0.92 : 1.08))));
    };
    if (el) el.addEventListener("wheel", handler, { passive: false });
    return () => { if (el) el.removeEventListener("wheel", handler); };
  }, []);

  const handleMouseDown = (e) => {
    if (e.target.closest(".nc")) return;
    setIsPanning(true);
    panStart.current = { x: e.clientX - pan.x, y: e.clientY - pan.y };
  };
  const handleMouseMove = (e) => { if (isPanning) setPan({ x: e.clientX - panStart.current.x, y: e.clientY - panStart.current.y }); };
  const handleMouseUp = () => setIsPanning(false);

  const doSearch = (q) => {
    setSearch(q);
    if (!q.trim()) { setSearchResults([]); return; }
    const lq = q.toLowerCase();
    setSearchResults(members.filter(m => m.status === "active" && (
      m.name.toLowerCase().includes(lq) ||
      (m.nickname && m.nickname.toLowerCase().includes(lq)) ||
      (m.class_name && m.class_name.toLowerCase().includes(lq))
    )).slice(0, 6));
  };

  const selectMember = (m) => { setHighlighted(m.id); setSelected(m.id); setSearch(""); setSearchResults([]); setPanel(null); };

  const addMember = () => {
    if (!form.name.trim()) return;
    const nm = { id: String(Date.now()), name: form.name.trim(), nickname: form.nickname.trim() || null,
      class_name: form.class_name, semester: form.semester, bigId: form.bigId || null, dynasty: null, status: "active" };
    setMembers(p => [...p, nm]);
    setForm({ name:"", nickname:"", semester:"Fall 2026", class_name:"Alpha Phi", bigId:"" });
    setPanel(null);
  };

  const removeMember = (id) => { setMembers(p => p.map(m => m.id === id ? {...m, status:"deletter"} : m)); setSelected(null); setHighlighted(null); setPanel(null); };

  const focusedLineage = highlighted ? getLineage(highlighted, byId) : null;

  const DYNASTIES = Object.keys(DYNASTY_COLORS);
  const stats = {
    total: members.filter(m => m.status === "active").length,
    classes: new Set(members.filter(m=>m.status==="active").map(m=>m.class_name)).size,
    dynasties: DYNASTIES.length,
  };

  const nodeColor = (m) => {
    if (colorMode === "dynasty" && m.dynasty && DYNASTY_COLORS[m.dynasty]) return DYNASTY_COLORS[m.dynasty];
    return CLASS_COLORS[m.class_name] || "#888";
  };

  const selMember = selected ? (byId[selected] || members.find(m => m.id === selected)) : null;

  const edges = [];
  activeMembers.forEach(m => {
    if (m.bigId && positions[m.id] && positions[m.bigId]) {
      const from = positions[m.bigId], to = positions[m.id];
      const inFocus = focusedLineage ? focusedLineage.has(m.id) && focusedLineage.has(m.bigId) : true;
      edges.push({ id: m.id, from, to, inFocus, dynasty: m.dynasty });
    }
  });

  return (
    <div style={{ width:"100vw", height:"100vh", background:"#080810", fontFamily:"'DM Sans',sans-serif", overflow:"hidden", position:"relative", cursor: isPanning ? "grabbing" : "grab" }}
      onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,700;1,500&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        ::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:#111}::-webkit-scrollbar-thumb{background:#2a2a3a}
        .nc{cursor:pointer;transition:opacity 0.2s;}
        input,select{background:#13131f;border:1px solid #252535;border-radius:8px;color:#e8e8f0;padding:8px 11px;font-family:'DM Sans',sans-serif;font-size:13px;width:100%;outline:none;transition:border-color 0.2s;}
        input:focus,select:focus{border-color:#c0392b}input::placeholder{color:#444}
        select option{background:#13131f}
        .btn{border:none;border-radius:8px;padding:8px 14px;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:500;cursor:pointer;transition:all 0.15s;}
        .btn-p{background:#c0392b;color:white}.btn-p:hover{background:#a93226}
        .btn-g{background:transparent;color:#777;border:1px solid #252535}.btn-g:hover{color:#ccc;border-color:#444}
        .btn-d{background:transparent;color:#e74c3c;border:1px solid #e74c3c33}.btn-d:hover{background:#e74c3c18}
        .pill{display:inline-flex;align-items:center;padding:3px 9px;border-radius:20px;font-size:11px;font-weight:500;gap:4px}
      `}</style>

      {/* Header */}
      <div style={{position:"absolute",top:0,left:0,right:0,zIndex:10,padding:"14px 20px",display:"flex",alignItems:"center",gap:14,background:"linear-gradient(180deg,#080810 55%,transparent)",pointerEvents:"none"}}>
        <div style={{pointerEvents:"all"}}>
          <div style={{fontFamily:"'Playfair Display',serif",fontSize:21,color:"#f5f5f5",letterSpacing:"-0.3px"}}>
            ΑΣΡ <span style={{fontStyle:"italic",fontWeight:400,fontSize:16,color:"#c0392b"}}>Family Tree</span>
          </div>
          <div style={{fontSize:10,color:"#555",marginTop:1,letterSpacing:0.5}}>UNIVERSITY OF GEORGIA · ALPHA CHAPTER · EST. 1998</div>
        </div>

        {/* Tab switcher */}
        <div style={{pointerEvents:"all",display:"flex",gap:3,background:"#0e0e1a",border:"1px solid #1a1a2e",borderRadius:10,padding:3,marginLeft:8}}>
          {[["tree","Tree"],["classes","By Class"]].map(([k,label])=>(
            <button key={k} onClick={()=>setActiveTab(k)} style={{padding:"6px 12px",borderRadius:7,border:"none",fontSize:12,fontWeight:500,cursor:"pointer",
              background:activeTab===k?"#c0392b":"transparent",color:activeTab===k?"white":"#777",transition:"all 0.15s",whiteSpace:"nowrap"}}>
              {label}
            </button>
          ))}
        </div>

        <div style={{flex:1}} />

        {/* Search */}
        <div style={{position:"relative",pointerEvents:"all",zIndex:100}}>
          <input placeholder="Search name or line name…" value={search} onChange={e=>doSearch(e.target.value)}
            onKeyDown={e=>{if(e.key==="Escape"){setSearch("");setSearchResults([]);}}}
            style={{width:230}} />
          {searchResults.length > 0 && (
            <div style={{position:"absolute",top:"calc(100% + 4px)",left:0,right:0,background:"#13131f",border:"1px solid #252535",borderRadius:10,overflow:"hidden",zIndex:200}}>
              {searchResults.map(m => (
                <div key={m.id} style={{padding:"8px 12px",cursor:"pointer",borderBottom:"1px solid #1a1a2e",transition:"background 0.1s"}}
                  onMouseEnter={e=>e.currentTarget.style.background="#1e1e2e"}
                  onMouseLeave={e=>e.currentTarget.style.background="transparent"}
                  onClick={()=>selectMember(m)}>
                  <div style={{fontSize:13,color:"#e8e8f0",fontWeight:500}}>{m.name}</div>
                  <div style={{fontSize:11,color:"#666",display:"flex",gap:8}}>
                    {m.nickname && <span style={{color:nodeColor(m)}}>{m.nickname}</span>}
                    <span>{m.class_name}</span>
                    {m.dynasty && <span>· {m.dynasty} line</span>}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Color toggle */}
        <div style={{pointerEvents:"all",display:"flex",gap:4,background:"#13131f",border:"1px solid #252535",borderRadius:8,padding:3}}>
          {[["class","By Class"],["dynasty","By Dynasty"]].map(([k,label])=>(
            <button key={k} onClick={()=>setColorMode(k)} style={{padding:"5px 10px",borderRadius:6,border:"none",fontSize:11,fontWeight:500,cursor:"pointer",
              background:colorMode===k?"#c0392b":"transparent",color:colorMode===k?"white":"#777",transition:"all 0.15s"}}>
              {label}
            </button>
          ))}
        </div>

        <button className="btn btn-p" style={{pointerEvents:"all"}} onClick={()=>{setPanel("add");setSelected(null);}}>
          + Add Member
        </button>

        {highlighted && (
          <button className="btn btn-g" style={{pointerEvents:"all"}} onClick={()=>{setHighlighted(null);setSelected(null);}}>✕ Clear</button>
        )}
      </div>

      {/* Dynasty filter bar - tree only */}
      {activeTab === "tree" && <div style={{position:"absolute",top:70,left:20,zIndex:9,display:"flex",gap:6,flexWrap:"wrap",pointerEvents:"all"}}>
        <button onClick={()=>setDynastyFilter(null)} style={{padding:"4px 10px",borderRadius:20,border:"1px solid",fontSize:11,fontWeight:500,cursor:"pointer",
          borderColor:dynastyFilter===null?"white":"#333",background:dynastyFilter===null?"#c0392b":"transparent",color:dynastyFilter===null?"white":"#888",transition:"all 0.2s"}}>
          All Lines
        </button>
        {DYNASTIES.map(d=>(
          <button key={d} onClick={()=>setDynastyFilter(dynastyFilter===d?null:d)} style={{padding:"4px 10px",borderRadius:20,border:`1px solid ${DYNASTY_COLORS[d]}`,fontSize:11,fontWeight:500,cursor:"pointer",
            background:dynastyFilter===d?DYNASTY_COLORS[d]+"33":"transparent",color:dynastyFilter===d?DYNASTY_COLORS[d]:"#888",transition:"all 0.2s"}}>
            {d}
          </button>
        ))}
      </div>}

      {/* Stats */}
      <div style={{position:"absolute",top:70,right:20,zIndex:9,background:"#0e0e1a",border:"1px solid #1a1a2e",borderRadius:10,padding:"8px 16px",display:"flex",gap:20,pointerEvents:"none"}}>
        {[["Members",stats.total],["Classes",stats.classes],["Dynasties",stats.dynasties]].map(([l,v])=>(
          <div key={l} style={{textAlign:"center"}}>
            <div style={{fontSize:19,fontWeight:700,color:"#f5f5f5",fontFamily:"'Playfair Display',serif"}}>{v}</div>
            <div style={{fontSize:9,color:"#555",textTransform:"uppercase",letterSpacing:0.8}}>{l}</div>
          </div>
        ))}
      </div>

      {/* Zoom controls - tree only */}
      {activeTab === "tree" && <div style={{position:"absolute",bottom:24,right:20,zIndex:10,display:"flex",flexDirection:"column",gap:4}}>
        {[["＋",()=>setZoom(z=>Math.min(3,z*1.2))],["－",()=>setZoom(z=>Math.max(0.1,z/1.2))],["⊡",()=>{setZoom(0.55);setPan({x:60,y:80});}]].map(([l,fn])=>(
          <button key={l} onClick={fn} style={{width:34,height:34,borderRadius:7,background:"#0e0e1a",border:"1px solid #1a1a2e",color:"#888",fontSize:l==="⊡"?14:17,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>
            {l}
          </button>
        ))}
      </div>}

      {/* Legend - tree only */}
      {activeTab === "tree" && colorMode === "dynasty" && (
        <div style={{position:"absolute",bottom:24,left:20,zIndex:9,background:"#0e0e1a",border:"1px solid #1a1a2e",borderRadius:10,padding:"10px 14px",pointerEvents:"none"}}>
          <div style={{fontSize:9,color:"#444",textTransform:"uppercase",letterSpacing:1,marginBottom:6}}>Dynasty</div>
          {DYNASTIES.map(d=>(
            <div key={d} style={{display:"flex",alignItems:"center",gap:7,marginBottom:3}}>
              <div style={{width:8,height:8,borderRadius:"50%",background:DYNASTY_COLORS[d]}}/>
              <span style={{fontSize:11,color:"#888"}}>{d}</span>
            </div>
          ))}
        </div>
      )}

      {/* Canvas - tree only */}
      {activeTab === "tree" && <div ref={svgRef} style={{width:"100%",height:"100%",overflow:"hidden"}}>
        <svg style={{transform:`translate(${pan.x}px,${pan.y}px) scale(${zoom})`,transformOrigin:"0 0",willChange:"transform"}}
          width={svgW} height={svgH}>
          <defs>
            {activeMembers.map(m => {
              const c = nodeColor(m);
              return (
                <linearGradient key={m.id} id={`ng-${m.id}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={c} stopOpacity="0.22"/>
                  <stop offset="100%" stopColor={c} stopOpacity="0.07"/>
                </linearGradient>
              );
            })}
          </defs>

          {/* Edges */}
          {edges.map(({id, from, to, inFocus, dynasty}) => {
            const fx = from.x - bounds.minX, fy = from.y - bounds.minY + NODE_H;
            const tx = to.x - bounds.minX, ty = to.y - bounds.minY;
            const my = (fy + ty) / 2;
            const strokeColor = dynasty && DYNASTY_COLORS[dynasty] ? DYNASTY_COLORS[dynasty] :
              (colorMode === "class" ? "#c0392b" : "#444");
            return (
              <path key={id}
                d={`M${fx} ${fy} C${fx} ${my},${tx} ${my},${tx} ${ty}`}
                fill="none"
                stroke={inFocus ? strokeColor : "#1a1a2e"}
                strokeWidth={inFocus ? (focusedLineage ? 2 : 1.2) : 0.8}
                opacity={focusedLineage ? (inFocus ? 0.9 : 0.15) : 0.55}
              />
            );
          })}

          {/* Nodes */}
          {activeMembers.filter(m => positions[m.id]).map(m => {
            const pos = positions[m.id];
            const x = pos.x - bounds.minX - NODE_W/2;
            const y = pos.y - bounds.minY;
            const c = nodeColor(m);
            const isSel = selected === m.id;
            const isHL = highlighted === m.id;
            const inFocus = focusedLineage ? focusedLineage.has(m.id) : true;
            const isFounder = m.class_name === "Founding Mother";
            const littleCount = byId[m.id]?.children?.length || 0;

            return (
              <g key={m.id} className="nc" transform={`translate(${x},${y})`}
                onClick={e=>{e.stopPropagation();if(isSel&&isHL){setSelected(null);setHighlighted(null);}else{setSelected(m.id);setHighlighted(m.id);setPanel(null);}}}
                style={{opacity: focusedLineage?(inFocus?1:0.15):1}}>

                {isFounder && <rect x={-4} y={-4} width={NODE_W+8} height={NODE_H+8} rx={14} fill="none" stroke={c} strokeWidth={1} strokeDasharray="5 3" opacity={0.5}/>}
                <rect x={0} y={0} width={NODE_W} height={NODE_H} rx={10}
                  fill={`url(#ng-${m.id})`}
                  stroke={isSel||isHL ? c : "#1e1e2e"}
                  strokeWidth={isSel||isHL ? 1.5 : 0.8}/>
                <rect x={0} y={0} width={3.5} height={NODE_H} rx={3} fill={c} opacity={0.95}/>

                <text x={12} y={20} fill="#f0f0f0" fontSize={11.5} fontWeight={500} fontFamily="'DM Sans',sans-serif">
                  {m.name.length > 18 ? m.name.slice(0,17)+"…" : m.name}
                </text>
                {m.nickname && (
                  <text x={12} y={34} fill={c} fontSize={10} fontFamily="'DM Sans',sans-serif" opacity={0.95}>
                    {m.nickname.length > 20 ? m.nickname.slice(0,19)+"…" : m.nickname}
                  </text>
                )}
                <text x={12} y={m.nickname ? 47 : 36} fill="#555" fontSize={9.5} fontFamily="'DM Sans',sans-serif">
                  {m.class_name}
                </text>
                {littleCount > 0 && (
                  <text x={NODE_W-7} y={47} fill="#555" fontSize={9} fontFamily="'DM Sans',sans-serif" textAnchor="end">
                    {littleCount}↓
                  </text>
                )}
                {m.dynasty && colorMode === "dynasty" && (
                  <text x={NODE_W-7} y={20} fill={c} fontSize={9} fontFamily="'DM Sans',sans-serif" textAnchor="end" opacity={0.7}>
                    {m.dynasty}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>}

      {/* Class view */}
      {activeTab === "classes" && (
        <ClassView
          members={members}
          allMembers={members}
          nodeColor={(m) => colorMode === "dynasty" && m.dynasty && DYNASTY_COLORS[m.dynasty] ? DYNASTY_COLORS[m.dynasty] : CLASS_COLORS[m.class_name] || "#888"}
          byId={buildTree(members.filter(m=>m.status==="active")).byId}
        />
      )}

      {/* Member detail panel - tree only */}
      {activeTab === "tree" && selMember && panel !== "add" && (
        <div style={{position:"absolute",top:"50%",right:20,transform:"translateY(-50%)",width:256,background:"#0e0e1a",border:"1px solid #1a1a2e",borderRadius:14,padding:18,zIndex:20}}
          onClick={e=>e.stopPropagation()}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14}}>
            <div>
              <div style={{fontSize:15,fontWeight:600,color:"#f0f0f0",lineHeight:1.3}}>{selMember.name}</div>
              {selMember.nickname && <div style={{fontSize:12,color:nodeColor(selMember),marginTop:2,fontStyle:"italic"}}>"{selMember.nickname}"</div>}
            </div>
            <button onClick={()=>{setSelected(null);setHighlighted(null);}} style={{background:"none",border:"none",color:"#444",cursor:"pointer",fontSize:18,lineHeight:1,padding:"0 2px"}}>×</button>
          </div>

          <div style={{display:"flex",flexWrap:"wrap",gap:5,marginBottom:12}}>
            <span className="pill" style={{background:nodeColor(selMember)+"22",color:nodeColor(selMember),border:`1px solid ${nodeColor(selMember)}44`}}>
              {selMember.class_name}
            </span>
            {selMember.dynasty && (
              <span className="pill" style={{background:DYNASTY_COLORS[selMember.dynasty]+"22",color:DYNASTY_COLORS[selMember.dynasty]||"#888",border:`1px solid ${(DYNASTY_COLORS[selMember.dynasty]||"#888")}44`}}>
                {selMember.dynasty} Line
              </span>
            )}
          </div>

          <div style={{display:"flex",flexDirection:"column",gap:10,marginBottom:14,fontSize:13}}>
            {selMember.bigId && byId[selMember.bigId] && (
              <div>
                <div style={{fontSize:9,color:"#444",textTransform:"uppercase",letterSpacing:0.8,marginBottom:3}}>Big Sister</div>
                <div style={{color:"#aaa",cursor:"pointer",textDecoration:"underline",textDecorationColor:"#333"}}
                  onClick={()=>selectMember(byId[selMember.bigId])}>
                  {byId[selMember.bigId].name}
                  {byId[selMember.bigId].nickname && <span style={{color:nodeColor(byId[selMember.bigId]),marginLeft:5,fontStyle:"italic",fontSize:11}}>"{byId[selMember.bigId].nickname}"</span>}
                </div>
              </div>
            )}
            {byId[selMember.id]?.children?.length > 0 && (
              <div>
                <div style={{fontSize:9,color:"#444",textTransform:"uppercase",letterSpacing:0.8,marginBottom:4}}>
                  Little Sisters ({byId[selMember.id].children.length})
                </div>
                <div style={{display:"flex",flexDirection:"column",gap:3,maxHeight:120,overflowY:"auto"}}>
                  {byId[selMember.id].children.map(c => (
                    <div key={c.id} style={{color:"#aaa",fontSize:12,cursor:"pointer",paddingLeft:8,borderLeft:`2px solid ${nodeColor(c)}44`}}
                      onClick={()=>selectMember(c)}>
                      {c.name}
                      {c.nickname && <span style={{color:nodeColor(c),marginLeft:4,fontStyle:"italic",fontSize:11}}>"{c.nickname}"</span>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div style={{display:"flex",flexDirection:"column",gap:5}}>
            <button className="btn btn-g" style={{textAlign:"left",fontSize:12}}
              onClick={()=>{setForm({name:"",nickname:"",semester:"Fall 2026",class_name:"Alpha Phi",bigId:selMember.id});setPanel("add");}}>
              + Add little under {selMember.name.split(" ")[0]}
            </button>
            <button className="btn btn-d" style={{textAlign:"left",fontSize:12}}
              onClick={()=>removeMember(selMember.id)}>
              Remove (delettered)
            </button>
          </div>
        </div>
      )}

      {/* Add panel */}
      {activeTab === "tree" && panel === "add" && (
        <div style={{position:"absolute",top:"50%",right:20,transform:"translateY(-50%)",width:268,background:"#0e0e1a",border:"1px solid #1a1a2e",borderRadius:14,padding:18,zIndex:20}}
          onClick={e=>e.stopPropagation()}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
            <div style={{fontSize:15,fontWeight:600,color:"#f0f0f0"}}>Add New Member</div>
            <button onClick={()=>setPanel(null)} style={{background:"none",border:"none",color:"#444",cursor:"pointer",fontSize:18}}>×</button>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:9}}>
            <div>
              <div style={{fontSize:10,color:"#555",marginBottom:3}}>Full Name *</div>
              <input placeholder="e.g. Mia Kim" value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))} />
            </div>
            <div>
              <div style={{fontSize:10,color:"#555",marginBottom:3}}>Line Name / Nickname</div>
              <input placeholder="e.g. Aurora" value={form.nickname} onChange={e=>setForm(f=>({...f,nickname:e.target.value}))} />
            </div>
            <div>
              <div style={{fontSize:10,color:"#555",marginBottom:3}}>Pledge Class</div>
              <input placeholder="e.g. Alpha Phi" value={form.class_name} onChange={e=>setForm(f=>({...f,class_name:e.target.value}))} />
            </div>
            <div>
              <div style={{fontSize:10,color:"#555",marginBottom:3}}>Big Sister (optional)</div>
              <select value={form.bigId} onChange={e=>setForm(f=>({...f,bigId:e.target.value}))}>
                <option value="">— No big (new line) —</option>
                {members.filter(m=>m.status==="active").sort((a,b)=>a.name.localeCompare(b.name)).map(m=>(
                  <option key={m.id} value={m.id}>{m.name}{m.nickname?` (${m.nickname})`:""} · {m.class_name}</option>
                ))}
              </select>
            </div>
            <div style={{display:"flex",gap:7,marginTop:3}}>
              <button className="btn btn-g" style={{flex:1}} onClick={()=>setPanel(null)}>Cancel</button>
              <button className="btn btn-p" style={{flex:1}} onClick={addMember} disabled={!form.name.trim()}>Add</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
