export const oreToIngot = (oreAmount,oreCost, bonus) => {
  // console.log(oreCost, oreAmount*oreCost)
  return Number((oreAmount*oreCost + 0.01)/(1.2 + 0.02*bonus)).toFixed(2);
}

export const ingotToNextLvl = (ingotAmount,ingotCost,charcoalCost, fluxCost, bonus) => {
  // console.log(ingotAmount,ingotCost)
  return Number(((ingotAmount*ingotCost + charcoalCost*2 + fluxCost + 0.02)/(1.93 + 0.02*bonus)).toFixed(2));
}

export const ingotToGold = (ingotCost,oreCost,fluxCost, bonus) => {
  // console.log(ingotAmount,ingotCost)
  return Number(((2*ingotCost + 5*oreCost + fluxCost + 0.02)/(1.38 + 0.02*bonus)).toFixed(2));
}

export const ingotToHightTier = (ingotCost, oreCost, charcoalCost, fluxCost, bonus) => {
  // console.log(ingotAmount,ingotCost)
  return Number(((2*ingotCost + 6*oreCost + charcoalCost*2 + fluxCost + 0.02 )/(1.40 + 0.02*bonus)).toFixed(2));
}

export const ingotToPlat = (ingotCost, oreCost, fluxCost, bonus) => {
  // console.log(ingotAmount,ingotCost)
  return Number(((2*ingotCost + 6*oreCost + fluxCost + 0.02 )/(1.38 + 0.02*bonus)).toFixed(2));
}

export const ingotToTopTier = (ingotCost, oreCost, charcoalCost, fluxCost, bonus, ratio) => {
  // console.log(ingotAmount,ingotCost)
  return Number(((2*ingotCost + 8*oreCost + charcoalCost*2 + fluxCost + 0.02 )/(ratio + 0.02*bonus)).toFixed(2));
}

export const upToLegendaty = (ingotCost, charcoalCost, fluxCost, firstEpic, secondEpic, bonus) => {
  return Number(((5*ingotCost + charcoalCost*2 + firstEpic + secondEpic + fluxCost + 0.02 )/(1 + 0.02*bonus)).toFixed(2));
}