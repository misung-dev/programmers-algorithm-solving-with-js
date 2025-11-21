// [1차] 캐시

function solution(cacheSize, cities) {
  let time = 0;
  let cache = [];

  const newCities = cities.map((city) => city.toLowerCase());

  // cacheSize가 0인 경우 early return
  if (cacheSize === 0) {
    return (time = cities.length * 5);
  }

  for (let i = 0; i < newCities.length; i++) {
    // cache hit와 miss 여부 검사
    if (cache.includes(newCities[i])) {
      // cash hit이면
      time += 1;

      let index = cache.indexOf(newCities[i]);
      cache.splice(index, 1);
    } else {
      // cash miss이면
      time += 5;

      if (cache.length >= cacheSize) {
        cache.shift();
      }
    }

    cache.push(newCities[i]);
  }

  return time;
}
