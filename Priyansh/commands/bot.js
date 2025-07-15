const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by John Lester",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Manila").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["Koi 70 Rupee dy do Mera Pas 20 Han Segrate Peeni Hai🥺", "Mere saiya jee se aaj mene breakup kar lia🤝🏽🙂💔", "Samj Jao Larkiyo\n\nAbhi B WaQt Hai Dakh kr Koi Delete Ni Krtaw🙂", "Mard ne Apna Hak Nahi Manga \n\nJab Bhi Manga Whatsapp No. Manga🥺","Kab tak Jawani chhupaogi Rani..:>😔", "Mujy to ludo kehlni bhi ni ati apke Dil se kya kehlu ga🙂", "Loyal Dhoonte Dhoonte khud Harami ban Gya Hon😔", "Mard ki izat karna Sikho Uski rooh se pyr kro Jism se nhi", "Tery jane ke bad😔Mene apne munh pe likhwa liya Single hu ptaa lo 🤐🥺🤝" , "Bot Na BoL 😢 ..Janu Bol 😘😻 " , "Bar Bar Disturb Na Kr Janu Ke SaTh Busy Hun  😋" , "Main Gareebon Se Baat Nhi krta 😉😝😋🤪" , "Itna Na Pass aa Pyar ho Jayega 😙" , "MeKo Tang Na kro Main Kiss 💋 Kr Dunga 😘 " , "Ary yrr MaZak Ke Mood Me Nhi Hun 😒" , "HaYe Janu Aow 1 Pappi Idher do 😘" , "Dur HaT Tere ko or Koi Kam Nhi Jb DeKho bot bot .. Shadi KerLe Mujhse 😉😋🤣" , "Teri Koi Ghr Me Nhi SunTa To Main Q Sunu 🤔😂 " , "IB Aja Yahan Nhi Bol Sakta 🙈😋" , "Mujhe Mat BuLao Na Main busy hu" , "Kab tk Jawani Chhupaogi Ràni 🤣" , "Are Tumari to  Sb he bazzati karte Me bhi karunga 🤏😜" , "KaL HaVeLi Prr Aa Jana bey 😈" , "Dil chir Ke dekh Tera hi naam hoga😏" , "Bx KRr Uh k0o Pyar Ho Na Ho Mujhe Ho JayGa" , "FarMao 😒" , "BulaTi Hai Magar Jane Ka Nhi 😜" , "Main To Andha Hun 😎" , "Phle Naha kr Aa 😂" , "Papi ChuLo 🌚" , "TeRe ko DiKh Nhi Rha Main busy Hun 😒" , "TeRa To Game BaJana PreGa" , "Ta Huwa 🥺"  , "Tum Phir AaGye 🙄 Kisi or Ne Muu Nhi LagaYa Kya🤣🤣🤣" , "bachpan se chutia ho ki baad me koi course kia hai😂😂" , "Aaaa Thooo 😂" , "Main So Rha Hun abhi baby baby na karo jada" , "Ase He Hanste Rha kro Janu 😂", "- sab chorr k chaly jaty hain kia etna bura hu mein - 🙂", "Piyari voice wali girlz mujhe voice message kar skti hen 😆🤝", "Dekh lena 1 din mazak mazak may he sbse handsome lrki pata lunga🧐🙂", "Uski yaadein mujhe aise ghair leti hain jaise shadi mein khusre ko 4 harami🙂💔", "Piyara Nah Hun is lya koi dost Nah h 🙃🌚" , "Tum msg to kro, Tumhe ptane ki zimmedari meri 🌚🙂" , "Teacher: any questions? Me: Kyun kisi ko wafa ke badly wafa nahi milti😕😂", "kCh Larkian MujHe sirf islYe ignOre krti Hen k Kahen Unhe pyar na ho JaE 😗💚", "Mahadev kray tmhari shadi py America ka photographer aye🙂🕺", "Someone : I love u Me : shakkall dekhiii he meriiiiw-🙄🙄" , "Control bebe jald bazi me kahi muskan na ho jay Ohh sorry (nuksan*)🙂", "mujhe sarif aapka muhh relation ke liye naa kafi he shukriya🙂🤝", "Ek ladki thii diwani sii har ladke par wo marti thiiw🙂"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if ((event.body.toLowerCase() == "Bot miss u") || (event.body.toLowerCase() == "Bot miss you")) {
     return api.sendMessage("️miss u more babiie🥰", threadID, messageID);
   };
  if ((event.body.toLowerCase() == "owner kon ha") || (event.body.toLowerCase() == "Owner kon ha")) {
     return api.sendMessage("️ Single HaI YaaR🤧", threadID, messageID);
   };
   
  if ((event.body.toLowerCase() == "bat suno") || (event.body.toLowerCase() == "bat suno ji")) {
     return api.sendMessage("️HaN Ji PyaRy Bolo🥰", threadID, messageID);
   };
  
if ((event.body.toLowerCase() == "love you") || (event.body.toLowerCase() == "i love you")) {
     return api.sendMessage("️LoVe You Unlimited JaNnu😘🤧", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "tum bot nhi") || (event.body.toLowerCase() == "tum bot nhi ho kia")) {
     return api.sendMessage("️bot he HuN 💓 🙄", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "ye kasa bot hai") || (event.body.toLowerCase() == "had hai mujy laga bot hai ya")) {
     return api.sendMessage("️TO JannaM BoT He Hun NaW Main", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "Shona mona") || (event.body.toLowerCase() == "Shona Suno")) {
     return api.sendMessage("️haN Ji Bolo🙄", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "welcome @ayaan anni") || (event.body.toLowerCase() == "welcome")) {
     return api.sendMessage("️thankx Baby❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "no need") || (event.body.toLowerCase() == "no need happy rho")) {
     return api.sendMessage("️SaDky❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "or btao kaha sa ho") || (event.body.toLowerCase() == "or btao kaha say ho")) {
     return api.sendMessage("️ Country India city Owner sy pocho", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "u from") || (event.body.toLowerCase() == " ap kdr sa ho")) {
     return api.sendMessage("️ Country India City AP K DIL SY", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "wow murre say") || (event.body.toLowerCase() == "wow murree sa")) {
     return api.sendMessage("️HaN Ji ThAnkx ❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "shona kya krty ho ap") || (event.body.toLowerCase() == "shona kiya krty ho")) {
     return api.sendMessage("️kuxh nhi bs coding or study", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "@nothing") || (event.body.toLowerCase() == "@Noting")) {
     return api.sendMessage("️SiRf  JaNu Hai❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "@shona mona miss you") || (event.body.toLowerCase() == "@shona mona miss you kutta")) {
     return api.sendMessage("️Dil ke badle sanam ", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "@shona mona baji di ib ichu bar nikal") || (event.body.toLowerCase() == "ayaan")) {
     return api.sendMessage("️HaaN HaaN Edr He HuN❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "koi ha") || (event.body.toLowerCase() == "@shona mona hosh kr")) {
     return api.sendMessage("️yes Jannu Edr He Hu", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "kese ho") || (event.body.toLowerCase() == "kesi ho")) {
     return api.sendMessage("️Main Thik Ap Kaise Ho❤️", threadID, messageID);
   };
   
  if ((event.body.toLowerCase() == "bhag lanti") || (event.body.toLowerCase() == "dafa hoja lanti")) {
     return api.sendMessage("️Tu Dafa Hoja Saley🤬", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "ma ny bhi shadi krni hai") || (event.body.toLowerCase() == "mujy b shadi krni hai")) {
     return api.sendMessage("️Haan To Kr NaW Agr Koi Man Jata to Vasy TUjY Daga Kon🤣", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == "assalamualaikum everyone one kasa ho sab") || (event.body.toLowerCase() == "assalamualaikum kasy ho sab")) {
     return api.sendMessage("️ Walikum Assalam ❤️ Main ThEk Ap KaSy ho", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == "us ny mujy love you bola") || (event.body.toLowerCase() == "love you bola us ny")) {
     return api.sendMessage("️ThaRki JuTh Bol Rha Hai Isy Kon LoVe You Bola Ga🤣", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == "ye bot nhi hai") || (event.body.toLowerCase() == "ye robot nhi hai")) {
     return api.sendMessage("️NHi To Kia TaRa BaP Hai Salya ChUp Kr K Bay 🤣", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "koi hamy bhi chummi dy do") || (event.body.toLowerCase() == "koi tu love you bol do yr")) {
     return api.sendMessage("️Dafa Hoja Group Sa Tharkiya Na MaR Edr🙄", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "ma ny kon sa thark mara") || (event.body.toLowerCase() == "ma ny kia kara")) {
     return api.sendMessage("️To Fir Ya Kia Hai Fir ThArk nhi To 🤣", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "Meri janu hai") || (event.body.toLowerCase() == "wo meri janu hai")) {
     return api.sendMessage("️HaAn HaaN ThEk Hai Ham Na Kon Sa Apni Janu Bola", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "sms del kr") || (event.body.toLowerCase() == "delete kr")) {
     return api.sendMessage("️ChaWly Na Marra Kr Na Fir", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "×unsend") || (event.body.toLowerCase() == "×unsent")) {
     return api.sendMessage("️Is Bar Kr Rha Agli Bar Delete Nhi Kru Ga Bta Rha 🙄", threadID, messageID);
   };
   
  if ((event.body.toLowerCase() == "Chal Haat") || (event.body.toLowerCase() == "chal hatt")) {
     return api.sendMessage("️Tu Hatt Bay🤬", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "😹") || (event.body.toLowerCase() == "😂")) {
     return api.sendMessage("Abby Yarr Hanste huve bHi Ro Raha Hai 💁", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == "good morning") || (event.body.toLowerCase() == "Jai mahakal")) {
     return api.sendMessage("️Good morning, Jai MAhadev, MAHAKAl bless you  ❤️ ", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == "kia kr rhy ho sab log") || (event.body.toLowerCase() == "kia kr rhy ho")) {
     return api.sendMessage("️kuxh Nhi Bs Free 😁 Ap Kia Kr Rhy Ho", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == "ma bhi free") || (event.body.toLowerCase() == "main b kuxh nhi kr rha")) {
     return api.sendMessage("️Acha Ji☺️", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "wo q") || (event.body.toLowerCase() == "vo q")) {
     return api.sendMessage("️Kia Wo Q HaaN☺️", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "acha ji") || (event.body.toLowerCase() == "acha")) {
     return api.sendMessage("️HaN Ji Or Sunao KiYa Kr RhY ho Aj Kal❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "kuxh nhi") || (event.body.toLowerCase() == "kuch nhi yr")) {
     return api.sendMessage("️acha KuJ Kr Liya Kro Naw 🤣", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "kya kru") || (event.body.toLowerCase() == "kya kru yr")) {
     return api.sendMessage("️kOi KaM ShaM☺️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "yr aj dill udas hai") || (event.body.toLowerCase() == "today im sad")) {
     return api.sendMessage("️Pagal HappY Rha Kr SaD NHi Hotyy Naw", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "gf chor gy") || (event.body.toLowerCase() == "gf bhag gy")) {
     return api.sendMessage("️Daffa MaR UsY Bagh Gyi To Maa Chudday Tu Q Ro Rha 😁", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == " love you") || (event.body.toLowerCase() == " love u")) {
     return api.sendMessage("LovE You To MaRi Jan UmmmaH😘 :))", threadID);
   };
  
  if ((event.body.toLowerCase() == " kanjar") || (event.body.toLowerCase() == "kutta")) {
     return api.sendMessage("Same to you Dur Fitty Muu😹:))", threadID, messageID);
   };
   
  if ((event.body.toLowerCase() == "kya kr rhy ho") || (event.body.toLowerCase() == "kya kr rhi ho")) {
     return api.sendMessage("️KuXh Nhi Kr Rha YaR", threadID);
   };
   
   if ((event.body.toLowerCase() == " dance kro gy") || (event.body.toLowerCase() == " aja dance krty hn")) {
     return api.sendMessage("nhi tm kro DaNce Main Nhi Krti :))", threadID);
   };
   if ((event.body.toLowerCase() == " Hmm") || (event.body.toLowerCase() == "Hm")) {
     return api.sendMessage("Agli Br Hmm Bola Naw Tu Muh toor Dunga🤨😤 :))", threadID);
   };
   
   if ((event.body.toLowerCase() == "Morning") || (event.body.toLowerCase() == "morning")) {
     return api.sendMessage("Good morning Alsee Ab Muhh bhi Dho k Aa zra 😤☹️:))", threadID);
   };
   
   if ((event.body.toLowerCase() == "bot tharki") || (event.body.toLowerCase() == "tharki bot")) {
     return api.sendMessage("Tu ThaRki Hai Salya :))", threadID);
   };
   
   if ((event.body.toLowerCase() == "wow") || (event.body.toLowerCase() == "wow nice")) {
     return api.sendMessage("Thankx You JaNnaM Taref Krna k LiyA❤️ :))", threadID);
   };
  
   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello")) {
     return api.sendMessage("hi kia ha HaL Hai Ap Ka:))", threadID);
   };
  
   if ((event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "kesy ho")) {
     return api.sendMessage("Main ThEk Hun Ap Kasa Ho :))", threadID, messageID);
   };
  
if ((event.body.toLowerCase() == "mar ja") || (event.body.toLowerCase() == "mar jao")) {
     return api.sendMessage("HaTtt MaRi to Abi ShaDi b Nhi Hoi🙄😏 :))", threadID, messageID);
   };
  
   if ((event.body.toLowerCase() == "khana khaya") || (event.body.toLowerCase() == "khana kha liya")) {
     return api.sendMessage("Nhi YaR Abi Nhi KhaYa Ap Na Kha liya :))", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "haan yr") || (event.body.toLowerCase() == "+sim haan ma ny kha liya")) {
     return api.sendMessage("MuJy Bulaya B Nhi Or ThUs liya wah🤧:))", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "♥️") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("Sadky Jawa Dil Dy ReHy Ho piYar tu Ni kr beHty MujH Sy🙆🙈 :))", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "janu") || (event.body.toLowerCase() == "jan")) {
     return api.sendMessage("BolLo NaW Mari JaN❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "harami") || (event.body.toLowerCase() == "bhenchod")) {
     return api.sendMessage("TaRii Maa Ki Chut Jattu Gali KiS Ko Da Rha Hai", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "your owner") || (event.body.toLowerCase() == "ap ka owner kon hai")) {
     return api.sendMessage("CHAND♥️ Hai Naw ×inf likho link Mil Jay Ga  :))", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "i need janu") || (event.body.toLowerCase() == "i need gf")) {
     return api.sendMessage("BsDk Main Robot HuN TaRi Maa Nhi Jo Gf DunD Due TuJy :))", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "i need girlfriend") || (event.body.toLowerCase() == "i need boyfriend")) {
     return api.sendMessage("Hatt Main Kdr Sa Laun Main Khud Single HuN:))", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "bye") || (event.body.toLowerCase() == "bye allah hafiz")) {
     return api.sendMessage("Next Bye ni kehna Ok Allah Hafiz Bola kro😒😊❤️:))", threadID);
   };
  
  if ((event.body.toLowerCase() == "love you maryam") || (event.body.toLowerCase() == "maryam love you")) {
     return api.sendMessage("Arry  MaRI JaNU Hai YaR 😘LoVe You Maryam♥️", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "🙄") || (event.body.toLowerCase() == "😒")) {
     return api.sendMessage("Edr Udr Qw Dekh RaHe Ho Koi Patny Wala Ni😤🙄:)", threadID);
   };
   
    if ((event.body.toLowerCase() == "👍") || (event.body.toLowerCase() == "👎")) {
     return api.sendMessage("Abby Like deny ka ziada shoq ha kya🙆🙄", threadID);
   };

   if ((event.body.toLowerCase() == "dog bot") || (event.body.toLowerCase() == "dog bot")) {
     return api.sendMessage("What dog just talked bad about me, want to die😠", threadID);
   };
  
   if ((event.body.toLowerCase() == "🙎🏾‍♂️") || (event.body.toLowerCase() == "🙎🏾‍♂️🙎🏾‍♂️")) {
     return api.sendMessage("🙎🏾‍♂️Yeh Emoji Tumhary Papa Dawood Use Karty HN Tum Mat Kiya Karo 😝🙆:))", threadID);
   };

   if ((event.body.toLowerCase() == "🤭") || (event.body.toLowerCase() == "🤭🤭")) {
     return api.sendMessage("Ally Asi bat hi Q kRty Ho K mUh ChuPhana PaRry🤨", threadID);
   };

   if ((event.body.toLowerCase() == "Hello") || (event.body.toLowerCase() == "hi")) {
     return api.sendMessage("Next Hi/Hello nhi Assalamualaikum Bola kro Okay 💖 🤍✨", threadID);
   };

   if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "🥰")) {
     return api.sendMessage("️HaYee ma Sadky TeRy is Dil walY Muhh Ty♥️😍 :))))", threadID);
   };

   if ((event.body.toLowerCase() == "sad") || (event.body.toLowerCase() == "😢")) {
     return api.sendMessage("️Allly Ally BabY mEry Hoty Huy Q Ro ReHy Ho🥺🙆🙄:)", threadID);
   };

   if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "soch")) {
     return api.sendMessage("️Itna Matt S0Cho JaNu PiYar ho JaY ga Mujh Se🙊😒 :)", threadID);
   };

   if ((event.body.toLowerCase() == "good night") || (event.body.toLowerCase() == "good night everyone")) {
     return api.sendMessage("️good Night So jao Shabash take care ❤️Allah pak Hamesha Khush rakhy apko🥰", threadID);
   };

   if ((event.body.toLowerCase() == "Shona") || (event.body.toLowerCase() == "Shona mona")) {
     return api.sendMessage("️GG Bolo MerY baBu😘🙆:))))", threadID);
   };

   if ((event.body.toLowerCase() == "ganda") || (event.body.toLowerCase() == "ganda bot")) {
     return api.sendMessage("️Tu ganda tera pura khandan Ganda 😒😐:))))", threadID);
   };

   if ((event.body.toLowerCase() == "janu") || (event.body.toLowerCase() == "jan")) {
     return api.sendMessage("️G jaan bolo ", threadID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙃")) {
     return api.sendMessage("️aRy mEri JaN kYa howa Qw M0od KhRb kR rHe Ho APna🙂❤️", threadID);
   };

   if ((event.body.toLowerCase() == "👀") || (event.body.toLowerCase() == "🥺")) {
     return api.sendMessage("️AnKho M piYar Dil ma خمار PiYar tu ni ho Gyw ksi Sy 🙆", threadID);
   };

   if ((event.body.toLowerCase() == "chand") || (event.body.toLowerCase() == "Suno chand")) {
     return api.sendMessage("️ Usy q bula rahe Ho Ma bhi sath ao kya🙆😐 :>", threadID);
   };
  
   if ((event.body.toLowerCase() == "😒😒") || (event.body.toLowerCase() == "🙄🙄")) {
     return api.sendMessage("️Asyy kiS ko DekH raHe Ho ShkaL sy Tu ThaRki lg raHy Ho🙆😑 :)", threadID);
   };

   if ((event.body.toLowerCase() == "😊") || (event.body.toLowerCase() == "😊😊")) {
     return api.sendMessage("️Ally alYy BaBy Asy hi HNsty RaHa kRo🙆🙊", threadID);
   };

   if ((event.body.toLowerCase() == "💔") || (event.body.toLowerCase() == "💔💔")) {
     return api.sendMessage("BewaFa lOog Hn Dil Tor DeTy Hn JaNu🥺🙆", threadID);
   };

  if ((event.body.toLowerCase() == "asslam o alaikum") || (event.body.toLowerCase() == "Aslamoalaikum")) {
     return api.sendMessage("walikum Asalam ♥️", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "or sunao") || (event.body.toLowerCase() == "thek hun")) {
     return api.sendMessage("main ThEk Hun Ap Kasy ho🤧", threadID, messageID);
   };
  
if ((event.body.toLowerCase() == "🤐") || (event.body.toLowerCase() == "🤐🤐")) {
     return api.sendMessage("ShaKl Sy GhAreeb LGtyHo btaO Tala Qw lgaYa Muh py🙄", threadID, messageID);
   };
  
if ((event.body.toLowerCase() == "🤫🤫") || (event.body.toLowerCase() == "🤫")) {
     return api.sendMessage("Han Han kRwa Lo Chup Sb ko Pr maiN ni kRny waLa Chup,🤐😒", threadID);
   };

  if ((event.body.toLowerCase() == "Roki") || (event.body.toLowerCase() == "roki")) {
     return api.sendMessage("Rockstar bolya kero 🤬🤬🤬", threadID);
   };
  
  if ((event.body.toLowerCase() == "Maryam kis ki ha") || (event.body.toLowerCase() == "maryam ks ki ha")) {
     return api.sendMessage("Ek Baar Main Samjh nhiwe Attiw kia ? Maryam  bss  ki ha🤧", threadID);
   };
  
  if ((event.body.toLowerCase() == "😅") || (event.body.toLowerCase() == "😆")) {
     return api.sendMessage("DanT nikaL kr ApNi beiZti na kRwaYn ShuKria😒🙎", threadID);
   };
  
  if ((event.body.toLowerCase() == "Bot Jani") || (event.body.toLowerCase() == "Bot Jan")) {
     return api.sendMessage("Mrgya Wo to Kab ka 🤧", threadID);
   };
  
  if ((event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😚")) {
     return api.sendMessage("Bsh krdo Ziada Mar lii tharkia Ab bs Emoji ki😒", threadID);
   };
  
  if ((event.body.toLowerCase() == "Arzo") || (event.body.toLowerCase() == "suno arzo")) {
     return api.sendMessage("Hamy bsh Teri hi Arzo Ha Pagli❤️🙃", threadID);
   };
  
   if ((event.body.toLowerCase() == "🖤") || (event.body.toLowerCase() == "🖤🖤")) {
     return api.sendMessage("Jesi Shakal Wesa Dil 🙂🤝 :>>", threadID);
   };

   if ((event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "🤣🤣")) {
     return api.sendMessage("itNa baRa Muhh kHol k HanS RaHe ho GaNfo ho kYa🙂)", threadID);
   };

   if ((event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😭😭")) {
     return api.sendMessage("KiTna GanDy LooG Hn Rula DeTy Hn KamiNy🥺🏃", threadID);
   };

   if ((event.body.toLowerCase() == "🥹") || (event.body.toLowerCase() == "🥹🥹")) {
     return api.sendMessage("RoNy ki ActiNg tu SaHi sy kRlo ThaRki insaN🙂", threadID);
   };

   if ((event.body.toLowerCase() == "😪") || (event.body.toLowerCase() == "🥱")) {
     return api.sendMessage("DaFa ho Ja YaHa sy Alsee😒🙄", threadID);
   };

   if ((event.body.toLowerCase() == "×sim who is rozie") || (event.body.toLowerCase() == "×sim rozie kon ha")) {
     return api.sendMessage("Tum Kon hoty Ho pocHny waLy 😒😐", threadID);
   };

   if ((event.body.toLowerCase() == "×sim who is jenny") || (event.body.toLowerCase() == "×sim  jenny kon ha")) {
     return api.sendMessage("Facebook ki sb Say Bari tharki Larki hai Jenny🙆🙂", threadID);
   };

   if ((event.body.toLowerCase() == "×sim who is jiya") || (event.body.toLowerCase() == "×sim jiya kon ha")) {
     return api.sendMessage("Dawood ki wife ha jiYa❤️🙆 ", threadID);
   };
  if ((event.body.toLowerCase() == "😋") || (event.body.toLowerCase() == "😜")) {
     return api.sendMessage("️AnDar kR isKo wRna Kaat Du ga yE ganDi zaBan🙎🏾‍♂️", threadID, messageID);
   };

if ((event.body.toLowerCase() == "😏") || (event.body.toLowerCase() == "😤")) {
     return api.sendMessage("️ Attitude tu kHusRy dekHtY hN mEri Jan😏🙎🏾‍♂️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() =="😠") || (event.body.toLowerCase() == "🤬")) {
     return api.sendMessage("️CoOl COOl babY GhuSsa HaRm ha 🙆😶", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😡😡")) {
     return api.sendMessage("️Mujh Masoom Py Ghussa kRty Ho JaO ma nARaz Hu🥺🖤", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "😕") || (event.body.toLowerCase() == "🫤")) {
     return api.sendMessage("️Tum Tu kHud Bhi TerY ho ShaKl kHak seedhi ho Gi😬", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "😳") || (event.body.toLowerCase() == "😱")) {
     return api.sendMessage("ITna HaiRan hoNy waLi KoNsi bat ha😒🙎🏾‍♂️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "🤧") || (event.body.toLowerCase() == "🤒")) {
     return api.sendMessage("️Jaa So Ja lGta ha BukHar ho Gyaw🙄", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "🤕") || (event.body.toLowerCase() == "😇")) {
     return api.sendMessage("️ABby Yawl ki hOya ab tEnu😒🙄", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "×sim ap hacker ho") || (event.body.toLowerCase() == "×sim are you hacker")) {
     return api.sendMessage("️YeS Im Hacke 😏", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "×sim ao date pa chalty") || (event.body.toLowerCase() == "×sim ao date pay chalty hain")) {
     return api.sendMessage("️OkaY Main ReaDy Ho Kr Aya Bs 5Mint Wait Kro🥰", threadID, messageID);
   };
  
   if ((event.body.toLowerCase() == "×sim where are you from") || (event.body.toLowerCase() == "×sim u from")) {
     return api.sendMessage("️ I'm from Pakistan 🥰 I love My country 🇵🇰", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "×sim india k log kasa hain") || (event.body.toLowerCase() == "×sim or india k log")) {
     return api.sendMessage("️Wo B Bht Achy Hain Bs Kuxh LoG Achy Nhi Un Main Bs Baki Sab Nice Hain🥰", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "×sim your age") || (event.body.toLowerCase() == "×sim ap ki age ktni hain")) {
     return api.sendMessage("️20🤫", threadID, messageID);
   };
  
   if ((event.body.toLowerCase() == "×sim nice yr") || (event.body.toLowerCase() == "×sim nice")) {
     return api.sendMessage("️Hmmm Thankx ❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "×sim yr mujy gf chiya") || (event.body.toLowerCase() == "×sim mujy ak gf chiya")) {
     return api.sendMessage("️HaaN To MuJy Q Bol Rhy Ho Gf Ka Main to Robot Hun 🙄", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "+sim ak gf dund do") || (event.body.toLowerCase() == "×sim ak gf lab da")) {
     return api.sendMessage("️Hatt OYe Mara paS khud Nhi Hai", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "×sim who are you") || (event.body.toLowerCase() == "×sim ap kon ho")) {
     return api.sendMessage("️ I'm ROBOT 🤖 2.0 like chitti Robot😂", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "×sim agr gf nraz ho to") || (event.body.toLowerCase() == "×sim agr gf nraz ho to kia krna chiya")) {
     return api.sendMessage("️To US pa Kalla JaDdu Kr Do KhuD Man Jay Gi 😂😂", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "×sim ap kia krti ho") || (event.body.toLowerCase() == "×sim yr ap kia krti")) {
     return api.sendMessage("️main kuxh nhi krti Bs WaLi😂", threadID, messageID);
   };
   if ((event.body.toLowerCase() == ".Ronni study karti ho") || (event.body.toLowerCase() == "×sim study karti ho ap")) {
     return api.sendMessage("️Ji NhI Kr LiyA Jo Krni Thi Bs Ab Or Nhi😂", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "bot") || (event.body.toLowerCase() == "Bot")) {
     return api.sendMessage("️Bot na baby bola kro mujhe😅", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "does the bot have a brand") || (event.body.toLowerCase() == "does the bot fall")) {
     return api.sendMessage("Yes <3", threadID);
   };
   mess = "{name}"
  
  if (event.body.indexOf("baby") == 0 || (event.body.indexOf("Baby") == 0)) {
    var msg = {
      body: `๛${name}⸙, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }