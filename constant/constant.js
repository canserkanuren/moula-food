const NUTRISCORE = [
  { score: 'a', path: require('../assets/nutriscore-a.png') },
  { score: 'd', path: require('../assets/nutriscore-b.png') },
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

function nutriscore(score) {
  return NUTRISCORE.find(nutriscore => nutriscore.score === score).path;
}

function novascore(score) {
  return NOVASCORE.find(novascore => novascore.score === score).path;
}

export {
  nutriscore,
  novascore
};