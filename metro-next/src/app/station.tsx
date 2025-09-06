export interface Station {
    id: string;
    name: string;
    line: string;
    color: string;
    list_neighbor: number[];
  }
  
  
  export const Graphs: Station[] = [
  
      // Linha Azul
      {
          id: "0",
          name: "San Pedrito",
          line: "A",
          color: "Azul",
          list_neighbor: [1]
      },
      {
          id: "1",
          name: "San José de Flores",
          line: "A",
          color: "Azul",
          list_neighbor: [0, 2]
      },
      {
          id: "2",
          name: "Carabobo",
          line: "A",
          color: "Azul",
          list_neighbor: [1, 3]
      },
      {
          id: "3",
          name: "Puan",
          line: "A",
          color: "Azul",
          list_neighbor: [2, 4]
      },
      {
          id: "4",
          name: "Primera Junta",
          line: "A",
          color: "Azul",
          list_neighbor: [3, 5]
      },
      {
          id: "5",
          name: "Acoyte",
          line: "A",
          color: "Azul",
          list_neighbor: [4, 6]
      },
      {
          id: "6",
          name: "Río de Janeiro",
          line: "A",
          color: "Azul",
          list_neighbor: [5, 7]
      },
      {
          id: "7",
          name: "Castro Barros",
          line: "A",
          color: "Azul",
          list_neighbor: [6, 8]
      },
      {
          id: "8",
          name: "Loria",
          line: "A",
          color: "Azul",
          list_neighbor: [7, 9]
      },
      {
          id: "9",
          name: "Plaza Miserere",     // A
          line: "A",
          color: "Azul",
          list_neighbor: [8, 10, 83, 84]
      },
      {
          id: "10",
          name: "Alberti",
          line: "A",
          color: "Azul",
          list_neighbor: [9, 11]
      },
      {
          id: "11",
          name: "Pasco",
          line: "A",
          color: "Azul",
          list_neighbor: [10, 12]
      },
      {
          id: "12",
          name: "Congresso",
          line: "A",
          color: "Azul",
          list_neighbor: [11, 13]
      },
      {
          id: "13",
          name: "Sáenz Peña",
          line: "A",
          color: "Azul",
          list_neighbor: [12, 14]
      },
      {
          id: "14",
          name: "Lima",
          line: "A",
          color: "Azul",
          list_neighbor: [13, 15]
      },
      {
          id: "15",
          name: "Av. de Mayo",    //a
          line: "A",
          color: "Azul",
          list_neighbor: [14,16,38,39]
      },
      {
          id: "16",
          name: "Piedras",
          line: "A",
          color: "Azul",
          list_neighbor: [15, 17]
      },
      {
          id: "17",
          name: "Perú",
          line: "A",
          color: "Azul",
          list_neighbor: [16, 18,43,63]
      },
      {
          id: "18",
          name: "Plaza de Mayo Casa Rosada",
          line: "A",
          color: "Azul",
          list_neighbor: [17]
      },
  
      // Linha  Vermelha
  
      {
          id: "19",
          name: "Leandro N. Alem",    //A
          line: "B",
          color: "Vermelha",
          list_neighbor: [20,61,62]
      },
      {
          id: "20",
          name: "Florida",
          line: "B",
          color: "Vermelha",
          list_neighbor: [19, 21]
      },
      {
          id: "21",
          name: "Carlos Pellegrini",    //A
          line: "B",
          color: "Vermelha",
          list_neighbor: [20,22,45]
      },
      {
          id: "22",
          name: "Uruguay",
          line: "B",
          color: "Vermelha",
          list_neighbor: [21, 23]
      },
      {
          id: "23",
          name: "Callao - Maestro Alfredo Bravo",
          line: "B",
          color: "Vermelha",
          list_neighbor: [22, 24]
      },
      {
          id: "24",
          name: "Pasteur AMIA",
          line: "B",
          color: "Vermelha",
          list_neighbor: [23,25]
      },
      {
          id: "25",
          name: "Pueyrredón - Vermelha", //A
          line: "B",
          color: "Vermelha",
          list_neighbor: [24, 26, 82, 83]
      },
      {
          id: "26",
          name: "Carlos Gardel",
          line: "B",
          color: "Vermelha",
          list_neighbor: [25, 27]
      },
      {
          id: "27",
          name: "Medrano Almagro",
          line: "B",
          color: "Vermelha",
          list_neighbor: [26,28]
      },
      {
          id: "28",
          name: "Ángel Gallardo",
          line: "B",
          color: "Vermelha",
          list_neighbor: [27, 29]
      },
      {
          id: "29",
          name: "Malabia O. Pugliese",
          line: "B",
          color: "Vermelha",
          list_neighbor: [28, 30]
      },
      {
          id: "30",
          name: "Dorrego",
          line: "B",
          color: "Vermelha",
          list_neighbor: [29, 31]
      },
      {
          id: "31",
          name: "F.Lacroze",
          line: "B",
          color: "Vermelha",
          list_neighbor: [30, 32]
      },
      {
          id: "32",
          name: "Tronador Villa Ortúzar",
          line: "B",
          color: "Vermelha",
          list_neighbor: [31, 33]
      },
      {
          id: "33",
          name: "De los Incas Parque Chas",
          line: "B",
          color: "Vermelha",
          list_neighbor: [32, 34]
      },
      {
          id: "34",
          name: "Echeverría",
          line: "B",
          color: "Vermelha",
          list_neighbor: [33, 35]
      },
      {
          id: "35",
          name: "Juan Manuel de Rosas Villa Urquiza",
          line: "B",
          color: "Vermelha",
          list_neighbor: [34]
      },
      
      
      
  
  
  
      // Linha Azul Escuro
  
      {
          id: "36",
          name: "Retiro - Azul Escuro",     //A
          line: "C",
          color: "Azul Escuro",
          list_neighbor: [37]
      },
      {
          id: "37",
          name: "General San Martín",
          line: "C",
          color: "Azul Escuro",
          list_neighbor: [36, 38]
      },
      {
          id: "38",
          name: "Lavalle",
          line: "C",
          color: "Azul Escuro",
          list_neighbor: [37, 39,15]
      },
      {
          id: "39",
          name: "Moreno",
          line: "C",
          color: "Azul Escuro",
          list_neighbor: [38, 40,15]
      },
      {
          id: "40",
          name: "Independencia - Azul Escuro",    //A
          line: "C",
          color: "Azul Escuro",
          list_neighbor: [39,41,65]
      },
      {
          id: "41",
          name: "San Juan",
          line: "C",
          color: "Azul Escuro",
          list_neighbor: [40, 42]
      },
      {
          id: "42",
          name: "Constitucíon",
          line: "C",
          color: "Azul Escuro",
          list_neighbor: [41]
      },
  
  
  
      //Linha Verde
      {
          id: "43",
          name: "Catedral", //A
          line: "D",
          color: "Verde",
          list_neighbor: [44,17,62]
      },
      {
          id: "44",
          name: "Diagonal Norte",
          line: "D",
          color: "Verde",
          list_neighbor: [43, 45]
      },
      {
          id: "45",
          name: "9 de Julio", //A
          line: "D",
          color: "Verde",
          list_neighbor: [44, 46, 21]
      },
      {
          id: "46",
          name: "Tribunales Teatro Colón",
          line: "D",
          color: "Verde",
          list_neighbor: [45, 47]
      },
      {
          id: "47",
          name: "Callao",
          line: "D",
          color: "Verde",
          list_neighbor: [46,48]
      },
      {
          id: "48",
          name: "Faculdad de Medicina",
          line: "D",
          color: "Verde",
          list_neighbor: [47, 49]
      },
      {
          id: "49",
          name: "Pueyrredón - Verde", //A
          line: "D",
          color: "Verde",
          list_neighbor: [48, 50, 80, 81]
      },
      {
          id: "50",
          name: "Agüero",
          line: "D",
          color: "Verde",
          list_neighbor: [49, 51]
      },
      {
          id: "51",
          name: "Bulnes",
          line: "D",
          color: "Verde",
          list_neighbor: [50, 52]
      },
      {
          id: "52",
          name: "Scalabrini Ortiz",
          line: "D",
          color: "Verde",
          list_neighbor: [51, 53]
      },
      {
          id: "53",
          name: "Plaza Italia",
          line: "D",
          color: "Verde",
          list_neighbor: [52, 54]
      },
      {
          id: "54",
          name: "Palermo",
          line: "D",
          color: "Verde",
          list_neighbor: [53, 55]
      },
      {
          id: "55",
          name: "Mtro. Carranza Miguel Abuelo",
          line: "D",
          color: "Verde",
          list_neighbor: [54, 56]
      },
      {
          id: "56",
          name: "Olleros",
          line: "D",
          color: "Verde",
          list_neighbor: [55, 57]
      },
      {
          id: "57",
          name: "José Hernández",
          line: "D",
          color: "Verde",
          list_neighbor: [56, 58]
      },
      {
          id: "58",
          name: "Juramento",
          line: "D",
          color: "Verde",
          list_neighbor: [57, 59]
      },
      {
          id: "59",
          name: "Congreso de Tucmnán",
          line: "D",
          color: "Verde",
          list_neighbor: [58]
      },
  
      //Linha Roxa
      {
          id: "60",
          name: "Retiro - Roxa", //A
          line: "E",
          color: "Roxa",
          list_neighbor: [61]
      },
      {
          id: "61",
          name: "Catalinas",
          line: "E",
          color: "Roxa",
          list_neighbor: [60,19]
      },
      {
          id: "62",
          name: "Correo Central",  
          line: "E",
          color: "Roxa",
          list_neighbor: [43,19]
      },
      {
          id: "63",
          name: "Bolívar",
          line: "E",      //A
          color: "Roxa",
          list_neighbor: [64,17]
      },
      {
          id: "64",
          name: "Belgrano",
          line: "E",
          color: "Roxa",
          list_neighbor: [63, 65]
      },
      {
          id: "65",
          name: "Independencia - Roxa",  //A  
          line: "E",
          color: "Roxa",
          list_neighbor: [64, 66, 40]
      },
      {
          id: "66",
          name: "San José",
          line: "E",
          color: "Roxa",
          list_neighbor: [65, 67]
      },
      {
          id: "67",
          name: "Entre Ríos Rodolfo Walsh",
          line: "E",
          color: "Roxa",
          list_neighbor: [66, 68]
      },
      {
          id: "68",
          name: "Pichincha",
          line: "E",
          color: "Roxa",
          list_neighbor: [67, 69]
      },
      {
          id: "69",
          name: "Jujuy",   //A 
          line: "E",
          color: "Roxa",
          list_neighbor: [68, 70,85,86]
      },
      {
          id: "70",
          name: "Gral. Urquiza",
          line: "E",
          color: "Roxa",
          list_neighbor: [69, 71]
      },
      {
          id: "71",
          name: "Boedo",
          line: "E",
          color: "Roxa",
          list_neighbor: [70, 72]
      },
      {
          id: "72",
          name: "Av. La Plata",
          line: "E",
          color: "Roxa",
          list_neighbor: [71, 73]
      },
      {
          id: "73",
          name: "José María Moreno",
          line: "E",
          color: "Roxa",
          list_neighbor: [72, 74]
      },
      {
          id: "74",
          name: "Emilio Mitre",
          line: "E",
          color: "Roxa",
          list_neighbor: [73, 75]
      },
      {
          id: "75",
          name: "Medalla Milagrosa",
          line: "E",
          color: "Roxa",
          list_neighbor: [74, 76]
      }, {
          id: "76",
          name: "Varela",
          line: "E",
          color: "Roxa",
          list_neighbor: [75, 77]
      }, {
          id: "77",
          name: "Plaza de los Virreyes Eva Perón",
          line: "E",
          color: "Roxa",
          list_neighbor: [76]
      },
  
  
  
  
      //Linha Amarela
      {
          id: "78",
          name: "Facultad de Derecho Julieta Lanteri",
          line: "H",
          color: "Amarela",
          list_neighbor: [79]
      },
      {
          id: "79",
          name: "Las Heras",
          line: "H",
          color: "Amarela",
          list_neighbor: [78, 80]
      },
      {
          id: "80",
          name: "Santa Fe Carlos Jáuregui", //A    
          line: "H",
          color: "Amarela",
          list_neighbor: [79,49]
      },
      {
          id: "81",
          name: "Córdoba",
          line: "H",
          color: "Amarela",
          list_neighbor: [82,49]
      },
      {
          id: "82",
          name: "Corrientes",    //A
          line: "H",
          color: "Amarela",
          list_neighbor: [81, 25]
      },
      {
          id: "83",
          name: "Once - 30 de Deciembre", //A   
          line: "H",
          color: "Amarela",
          list_neighbor: [9,25]
      },
      {
          id: "84",
          name: "Venezuela",
          line: "H",
          color: "Amarela",
          list_neighbor: [9, 85]
      },
      {
          id: "85",
          name: "Humberto 1",    //A
          line: "H",
          color: "Amarela",
          list_neighbor: [84, 86,69]
      },
      {
          id: "86",
          name: "Inclán Mezquita Al Ahmad",
          line: "H",
          color: "Amarela",
          list_neighbor: [85, 87,69]
      },
      {
          id: "87",
          name: "Caseros",
          line: "H",
          color: "Amarela",
          list_neighbor: [86, 88]
      },
      {
          id: "88",
          name: "Parque Patricios",
          line: "H",
          color: "Amarela",
          list_neighbor: [87, 89]
      },
      {
          id: "89",
          name: "Hospitales",
          line: "H",
          color: "Amarela",
          list_neighbor: [88]
      },
  
  
  
  ]