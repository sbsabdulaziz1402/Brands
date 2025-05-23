import { reactive } from 'vue';

export const organizations = reactive([
    {
      "name": "Таможни",
      "id": 1
    },
    {
      "name": "ГАИ",
      "id": 2
    },
    {
      "name": "Прокуратура",
      "id": 3
    },
    {
      "name": "Миб",
      "id": 4
    },
    {
      "name": "Дхх",
      "id": 5
    },
    {
      "name": "Налог",
      "id": 6
    },
    {
      "name": "ППХ",
      "id": 7
    },
    {
      "name": "Мчс",
      "id": 8
    },
    {
      "name": "Милий гвардия",
      "id": 9
    }
  ])
  
  export const ranks = reactive([
    {
    "id": 1,
    "name": "рядовой"
    },{
    "id": 2,
    "name": "младший сержант"
    },{
    "id": 3,
    "name": "сержант"
    },{
    "id": 4,
    "name": "старший сержант"
    },{
    "id": 5,
    "name": "летенант"
    },{
    "id": 6,
    "name": "старший летенант"
    },{
    "id": 7,
    "name": "капитан"
    },{
    "id": 8,
    "name": "майор"
    },{
    "id": 9,
    "name": "под.полковник"
    },{
    "id": 10,
    "name": "полковник"
    }
  ])

  export const blood_groups = ref([
    {
    "id": 1,
    "name": "I груп"
    },{
    "id": 2,
    "name": "II груп"
    },{
    "id": 3,
    "name": "III груп"
    },{
    "id": 4,
    "name": "IV груп"
    }
  ])

  export const genders = [
    {
    "id": 1,
    "name": "мужчина"
    },{
    "id": 2,
    "name": "женщина"
    }
  ]