const food=(req,res)=>{
    res.json(
        [
            {
                "id":1,
                "url":"https://cdn.tasteatlas.com//Images/Dishes/728691b02df3490bbbecdea8422530d1.jpg?w=905&h=510",
                "caption":"Rasgulla",
                "location":" WEST BENGAL, INDIA",
                "ingrediants":"chhena,semolina,milk,lemon juice,sugar,rose water,,saffron"
            },
            {
                "id":2,
                "url":"https://cdn.tasteatlas.com//images/dishes/2a00c116070d46a7a8dd91c0e086f76d.jpg?w=905&h=510",
                "caption":"Pulihora",
                "location":"ANDHRA PRADESH, INDIA",
                "ingrediants":"Rice,Turmeric,Tamanrind,Curry leaves,Coriander,Ginger,Hot pepper"
            },
            {
                "id":3,
                "url":"https://cdn.tasteatlas.com//Images/Dishes/081e0170e376406aa4b56f5b86cc3156.jpg?w=905&h=510",
                "caption":"Pav bhaji",
                "location":"MUMBAI,INDIA",
                "ingrediants":"Ghee,Garam masala,Cauliflower,Potatoes,Peas,Carrot,Bell pepper"
            },
            {
                "id":4,
                "url":"https://cdn.tasteatlas.com//Images/Dishes/ba7bab747c7e41769dbc895a84626a23.jpg?w=905&h=510",
                "caption":"Masala Dosa",
                "location":"SOUTHERN INDIA,INDIA",
                "ingrediants":"Urad dal,Chana dal,Raw sona,Idli rice,Poha,Methi seeds"
            },
            {
                "id":5,
                "url":"https://cdn.tasteatlas.com//images/dishes/55f00ba4fe8746a68b8ad62b24226e3b.jpg?w=905&h=510",
                "caption":"Chicken 65",
                "location":"CHENNAI, INDIA",
                "ingrediants":"Chicken,Eggs,Corn flore,Ginger,Lemon,Red chilli powder,Black pepper,Turmaric"
            },
            {
                "id":6,
                "url":"https://cdn.tasteatlas.com//images/dishes/0a3f1b0d231b43e497f33ae5506bb46c.jpg?w=905&h=510",
                "caption":"Dal makhani",
                "location":"PUNJAB, INDIA",
                "ingrediants":"Beans,Lentils,Ghee,Ginger,Garlic,Hot pepper,Tomato sauce"
            }
        ]
    )
}
module.exports= food