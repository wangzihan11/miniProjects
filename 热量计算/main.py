import sys
sys.path.append(".")
from food import oneFood
from untils.twoFoodCombine import twoFoodOneMeal

beef = oneFood("牛肉",2.7,16.6,6.5)
chicken_breast = oneFood("鸡胸",2.5,17.4,3)
chicken_thigh = oneFood("去皮鸡腿肉",0,20,7.2)


potato = oneFood("土豆",17.8,2.6,0)
rice = oneFood("大米",77,7.9,0.9)
sweet_potato = oneFood("红薯",20,0,1.6)
if __name__ == "__main__":
    twoFoodOneMeal(beef,potato)
    twoFoodOneMeal(chicken_breast,potato)
    twoFoodOneMeal(chicken_breast,rice)
    twoFoodOneMeal(beef,rice)
    twoFoodOneMeal(beef,sweet_potato)
    twoFoodOneMeal(chicken_thigh,sweet_potato)
    twoFoodOneMeal(chicken_thigh,potato)

