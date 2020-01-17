const NUTRISCORE = [
  { score: 'a', path: require('../assets/nutriscore-a.png') },
  { score: 'b', path: require('../assets/nutriscore-b.png') },
  { score: 'c', path: require('../assets/nutriscore-c.png') },
  { score: 'd', path: require('../assets/nutriscore-d.png') },
  { score: 'e', path: require('../assets/nutriscore-e.png') }
];

const NOVASCORE = [
  { score: 1, path: require('../assets/nova-group-1.png') },
  { score: 2, path: require('../assets/nova-group-2.png') },
  { score: 3, path: require('../assets/nova-group-3.png') },
  { score: 4, path: require('../assets/nova-group-4.png') }
];

const COLORS = [
  '#1e9575', // green
  '#78b042', // light green
  '#f37541', // orange
  '#c31427' // red
]

function nutriscore(score) {
  if (score) {
    return NUTRISCORE.find(nutriscore => nutriscore.score === score).path;
  }
}

function nutritionColor(value, name) {
  if (value && name) {
    const product = NUTRITIONS.find(prod => prod.name === name);
    const lastValue = product.score[product.score.length -1];
    for (const sch of product.score) {
      if (value > lastValue.value) {
        return lastValue.color
      } else if (value <= sch.value) {
        return sch.color;
      }
    }
  }
}

function novascore(score) {
  if (score) {
    return NOVASCORE.find(novascore => novascore.score === score).path;
  }
}

const NUTRITIONS = [
  { 
    name: 'calories',
    label: 'Calories',
    path: require('../assets/icons-food/calories.png'),
    score: [
      {
        value: 160,
        color: COLORS[0],
        index: 0
      },
      {
        value: 360,
        color: COLORS[1],
        index: 1
      },
      {
        value: 560,
        color: COLORS[2],
        index: 2
      },
      {
        value: 800,
        color: COLORS[3],
        index: 3
      },
    ]
  },
  {
    name: 'fiber',
    label: 'Fibres',
    path: require('../assets/icons-food/fiber.png'),
    score: [
      {
        value: 3.5,
        color: COLORS[0],
        index: 0
      },
      {
        value: 7,
        color: COLORS[1],
        index: 1
      }
    ]
  },
  {
    name: 'proteins',
    label: 'Protéines',
    path: require('../assets/icons-food/proteins.png'),
    score: [
      {
        value: 8,
        color: COLORS[0],
        index: 0
      },
      {
        value: 16,
        color: COLORS[1],
        index: 1
      }
    ]
  },
  {
    name: 'salt',
    label: 'Sel',
    path: require('../assets/icons-food/salt.png'),
    score: [
      {
        value: 0.46,
        color: COLORS[0],
        index: 0
      },
      {
        value: 0.92,
        color: COLORS[1],
        index: 1
      },
      {
        value: 1.62,
        color: COLORS[2],
        index: 2
      },
      {
        value: 2.3,
        color: COLORS[3],
        index: 3
      }
    ]
  },
  {
    name: 'saturatedFat',
    label: 'Graisses Saturées',
    path: require('../assets/icons-food/saturatedFat.png'),
    score: [
      {
        value: 2,
        color: COLORS[0],
        index: 0
      },
      {
        value: 4,
        color: COLORS[1],
        index: 1
      },
      {
        value: 7,
        color: COLORS[2],
        index: 2
      },
      {
        value: 10,
        color: COLORS[3],
        index: 3
      }
    ]
   },
  {
    name: 'sugars',
    label: 'Sucre',
    path: require('../assets/icons-food/sugars.png'),
    score: [
      {
        value: 9,
        color: COLORS[0],
        index: 0
      },
      {
        value: 18,
        color: COLORS[1],
        index: 1
      },
      {
        value: 31,
        color: COLORS[2],
        index: 2
      },
      {
        value: 45,
        color: COLORS[3],
        index: 3
      }
    ]
  }
]

export {
  nutriscore,
  novascore,
  NUTRITIONS,
  nutritionColor
};