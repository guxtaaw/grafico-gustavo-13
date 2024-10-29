const grafico = document.getElementById("meuGrafico").getContext("2d");
const meuGrafico = new Chart (grafico, {
  type: "pie",
  data: {
    labels:[
      "Instagram",
      "WhatsApp",
      "Facebook",
      "WeChat",
      "TikTok",
      "DouYin",
      "Twitter",
      "Telegram",
      "FB Messenger",
      "LINE"
    ],
    datasets: [{
        data:[
            16.5,
16.1,
12.8,
12.8,
7.4,
6.6,
3.2,
2.4,
2.3,
1.7
        ],
        backgroundColor:[
            "rgb(0,0,205)",
            "rgb(0,0,255)",
            "rgb(100,149,237)",
            "rgb(65,105,225)",
            "rgb(30,144,255)",
            "rgb(0,191,255)",
            "rgb(135,206,250)",
            "rgb(135,206,235)",
            "rgb(173,216,230)",
            "rgb(70,130,180)",
            "rgb(176,196,222)",
        ]
    }]
  }
}
)
