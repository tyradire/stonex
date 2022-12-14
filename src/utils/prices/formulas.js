export const oreToIngot = (oreAmount,oreCost, bonus) => {
  // console.log(oreCost, oreAmount*oreCost)
  return Number((oreAmount*oreCost + 0.01)/(1.2 + 0.02*bonus)).toFixed(2);
}

export const ingotToNextLvl = (ingotAmount,ingotCost,charcoalCost, fluxCost, bonus) => {
  // console.log(ingotAmount,ingotCost)
  return Number((((ingotAmount*ingotCost + 0.02)/(1.93 + 0.02*bonus)) + charcoalCost*2 + fluxCost).toFixed(2));
}

export const ingotToHightTier = (ingotCost, oreCost, charcoalCost, fluxCost, bonus) => {
  // console.log(ingotAmount,ingotCost)
  return Number(((2*ingotCost + 6*oreCost + charcoalCost*2 + fluxCost + 0.02 )/(1.40 + 0.02*bonus)).toFixed(2));
}

export const ingotToTopTier = (ingotCost, oreCost, charcoalCost, fluxCost, bonus) => {
  // console.log(ingotAmount,ingotCost)
  return Number(((2*ingotCost + 8*oreCost + charcoalCost*2 + fluxCost + 0.02 )/(1.13 + 0.02*bonus)).toFixed(2));
}