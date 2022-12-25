// main functions

export const upToFirstStage = (amount,cost,tax,bonus) => {
  return Number((amount*cost + tax)/(1.2 + 0.02*bonus)).toFixed(2);
}

export const upToSecondStage = (amount,cost,reagent, refining, bonus) => {
  return Number(((amount*cost + reagent*2 + refining + 0.02)/(1.93 + 0.02*bonus)).toFixed(2));
}

export const upToThirdStage = (mainCost, secCost, reagent, refining, bonus) => {
  return Number(((2*mainCost + 6*secCost + reagent*2 + refining + 0.02 )/(1.40 + 0.02*bonus)).toFixed(2));
}

export const upToFourthStage = (mainCost, secCost, reagent, refining, bonus, ratio) => {
  return Number(((2*mainCost + 8*secCost + reagent*2 + refining + 0.02 )/(ratio + 0.02*bonus)).toFixed(2));
}

export const upToLegendaty = (mainCost, reagent, refining, firstEpic, secondEpic, bonus) => {
  return Number(((5*mainCost + reagent*2 + firstEpic + secondEpic + refining + 0.03 )/(1 + 0.02*bonus)).toFixed(2));
}

// add stonecutting functions

export const blockToBrick = (amount,cost,refining,bonus) => {
  return Number((amount*cost + refining + 0.01)/(1.93 + 0.02*bonus)).toFixed(2);
}

export const stoneToLodestone = (lodestone,stone,refining,bonus) => {
  return Number(((6*lodestone + 2*stone + refining + 0.02)/(1.40 + 0.02*bonus)).toFixed(2));
}

// add smelting functions

export const ingotToGold = (mainCost,secCost,refining, bonus) => {
  return Number(((2*mainCost + 5*secCost + refining + 0.02)/(1.38 + 0.02*bonus)).toFixed(2));
}

export const ingotToPlat = (mainCost, secCost, refining, bonus) => {
  return Number(((2*mainCost + 6*secCost + refining + 0.02 )/(1.38 + 0.02*bonus)).toFixed(2));
}