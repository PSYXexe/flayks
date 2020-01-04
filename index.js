const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const http = require('http');

const token = process.env.token;
const port = process.env.PORT || 3000;
http.createServer().listen(port)
//server

usedCommandRecently4 = new Set();
var spotifystock = 78
var minecraft = 0
var nordstock = 23
var one = 1;
var total = spotifystock+nordstock+minecraft;
const file = "testing.txt";
let data = fs.readFileSync(file);
var spotifyStockChanged






client.on('ready', () =>{
    console.log('PSYX bot is now online')
    client.user.setActivity({ game: { name: `to PSYX`, type: "LISTENING"}});
    

});



var stockcheck = new Discord.RichEmbed()
    .addField("Spotify alts", spotifystock + " left.")
    .addField("NordVPN alts", nordstock + " left.")
    .addField("Minecraft alts", "no stock")
    .addField("Total alts", total+ " left.")
    .setColor("0x2FC13F")
    
    

client.on('message', message =>{
    if (message.content === 'hello'){
        message.author.send('hi');
        
    };
    
    if (message.content === '.stock'){
        message.channel.send(stockcheck);
    };
  

});
client.on('message', message =>{
    var CooldownMessage =new Discord.RichEmbed()
    .addField("You Are In Cooldown! ")
    .setColor(0xFF0000)
    if (!message.guild) return;
if (message.content === '.spotify'){
    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('Cooldown Message').then(message => {message.delete(1)})
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 1)
		
        var string = `Trussgod@hotmail.co.uk:2422Main
        Austintillett115@gmail.com:austin15
        shannonchristner@yahoo.com:1a2b3c4d5
        Willie.w@cpschawaii.com:Mooreaborabora1
        Jlcieloha@yahoo.com:Frankenhoff1
        andrew@rupheo.com:comicthebook2016
        jwhite311@yahoo.com:Billray0955
        ejpainter432@gmail.com:Christi01
        agstarman@verizon.net:tardis12
        Mendz13@gmail.com:burrier1
        traceylynn_moore@yahoo.com:Laugar01
        innerstrength24@yahoo.com:pipmau1517
        Carlyembry123@gmail.com:Monster55
        camprs03@yahoo.com:Grammie2014
        loverbug2609@gmail.com:lovely09
        Spbrandt@comcast.net:Laddie11
        jonnyrimgo@gmail.com:R1dgeway
        Clontzchad@gmail.com:may171977
        penuhtentree@gmail.com:deltaforce2
        mlseirj21@gmail.com:magic32
        antonioleon1123@gmail.com:silvertable36
        zaneylaney@comcast.net:Jasmine32201
        jhkfla@gmail.com:Eagle100
        daveandsamwilliams@gmail.com:Sullywill1
        csbarker2@yahoo.com:Nading2011
        nitinnishil@yahoo.com:2925crainhwy
        Andypfsrvp@gmail.com:96Bigblueelkbus
        kandjqueen@sbcglobal.net:showme0443
        nealdbailey@gmail.com:caden2004
        Svjennif@aol.com:3Diamonds
        lizlopezrn@gmail.com:Jordan92206
        rebekahwshelton@gmail.com:yeahyeah1990
        kristimca@icloud.com:Sweetpee25
        tnieland2015@gmail.com:rjnten2015
        chef.medley@gmail.com:Sarah090814
        krauss-felix@web.de:Imgg333H
        kevinfp62@gmail.com:banjarbaru1
        Nero819@hotmail.com:Diablo01
        franciscomsj@gmail.com:Tucano86
        innerstrength24@yahoo.com:pipmau1517
        kristimca@icloud.com:Sweetpee25
        Austintillett115@gmail.com:austin15
        rebekahwshelton@gmail.com:yeahyeah1990
        shannonchristner@yahoo.com:1a2b3c4d5
        Willie.w@cpschawaii.com:Mooreaborabora1
        lizlopezrn@gmail.com:Jordan92206
        dnecaise98@gmail.com:Koda52109
        mlseirj21@gmail.com:magic32
        nealdbailey@gmail.com:caden2004
        csbarker2@yahoo.com:Nading2011
        jhkfla@gmail.com:Eagle100
        Svjennif@aol.com:3Diamonds
        talyas800@gmail.com:michelle80
        Clontzchad@gmail.com:may171977
        daveandsamwilliams@gmail.com:Sullywill1
        penuhtentree@gmail.com:deltaforce2
        camprs03@yahoo.com:Grammie2014
        tnieland2015@gmail.com:rjnten2015
        Spbrandt@comcast.net:Laddie11
        ejpainter432@gmail.com:Christi01
        Laurengipe7861@gmail.com:Yourmom7861
        Andypfsrvp@gmail.com:96Bigblueelkbus
        agstarman@verizon.net:tardis12
        Jlcieloha@yahoo.com:Frankenhoff1
        Trussgod@hotmail.co.uk:2422Main
        loverbug2609@gmail.com:lovely09
        samarsajwani@gmail.com:honey5206
        fael.ribeiro1@hotmail.com:raphael1
        Robertsho1@yahoo.com:Br1stolracing
        traceylynn_moore@yahoo.com:Laugar01
        jwhite311@yahoo.com:Billray0955
        Carlyembry123@gmail.com:Monster55
        teamslade@gmail.com:rayeck1010
        chef.medley@gmail.com:Sarah090814
        kandjqueen@sbcglobal.net:showme0443
        Mendz13@gmail.com:burrier1
        jonnyrimgo@gmail.com:R1dgeway
        andrew@rupheo.com:comicthebook2016`

    var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];

   
    var chatEmbed = new Discord.RichEmbed()
    .addField("Account Sent!", 'Check your DM!')
    .setColor("0x6AA84F")

    message.channel.sendEmbed(chatEmbed).then(message => {message.delete(5000)})
  spotifyStockChanged = parseFloat(spotifystock.toString)-parseFloat(one);
        
        var Messaged =new Discord.RichEmbed()
        .addField("Spotify Account", `${random}`)
        .setColor(0x00FF00)
        message.author.sendEmbed(Messaged);


    }
}

        if (message.content === '.nordvpn'){
            if (usedCommandRecently4.has(message.author.id)){
                message.channel.send('Cooldown Message').then(message => {message.delete(1)})
            } else{
                usedCommandRecently4.add(message.author.id);
                setTimeout(() =>{
                    usedCommandRecently4.delete(message.author.id);
                }, 0)
                
        
                
            var nordCombo = `marcus.ovhed@hotmail.com:Sani2579
            mattatta33@yahoo.com:datskune08
            ryanlegamaro@gmail.com:Rlegamaro7446
            andrewjoo7@gmail.com:blueman7
            collinterry@ymail.com:12345cmt
            jdgg2003@hotmail.com:Chinaman420
            tom-krahmer@web.de:hammer11
            bendeclenc@gmail.com:jonathan4
            greiglothian1@gmail.com:Hibernian1
            ac1des@orange.fr:Se3yxRy4
            porchic911@mac.com:porsche1
            dgoza16@gmail.com:Danthe1man
            sara.kamach@gmail.com:centrafrique1
            xicimummy@126.com:leipan110
            brant.g101@gmail.com:gra00145
            lillyherman15@gmail.com:crazycat2
            pauleros2@gmail.com:Good4you
            anthonyamigon05@gmail.com:1Antysecas
            colebeason2@live.com:charlet13
            lilibelle4432@yahoo.com:belle4432
            raul.palomo@gmail.com:ijam5690
            camillo.moncelesan@me.com:051004Cami
            xbones123@hotmail.com:nikolai55`
            var words = nordCombo.split('\n');
            let randomNord = words[Math.floor(Math.random()*words.length)];
        
            var chatEmbed = new Discord.RichEmbed()
            .addField("Account Sent!", 'Check your DM!')
            .setColor("0x6AA84F")
            message.channel.sendEmbed(chatEmbed)
            
                var messageNord =new Discord.RichEmbed()
                .addField("NordVPN Account" ,`${randomNord}`)
                .setColor(0x00CED1)
                            message.author.sendEmbed(messageNord);


                            if (message.content === '.stock'){
                               channel.message.send(stockcheck)
                                    }


};
};
});
bot.on('error', err =>{
    console.log.err
});


client.login(token);




